import { ChangeDetectionStrategy, Component, ElementRef, computed, inject, input, model, signal, viewChild } from '@angular/core';
import { I18nService } from '../../../core/i18n/i18n.service';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { Hsla, Rgba, composite, contrast, hslToRgb, parseColor, rgbToHsl, toCss, toHex } from '../../utils/color';

const WHITE: Rgba = { r: 255, g: 255, b: 255, a: 1 };
const BLACK: Rgba = { r: 0, g: 0, b: 0, a: 1 };
const AA_NORMAL = 4.5;

let nextId = 0;

/**
 * Selector de color con círculo (tono y saturación), luminosidad, saturación, opacidad y contraste del texto.
 * Se abre en una ventana al pulsar la muestra; el color cambia al momento.
 */
@Component({
  selector: 'app-color-picker',
  host: { class: 'gm-color-picker' },
  imports: [TranslatePipe],
  templateUrl: './color-picker.html',
  styleUrl: './color-picker.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPicker {
  private readonly i18n = inject(I18nService);
  /** Nombre del color, para el botón y el título de la ventana («Color 1», «Color del cristal»…) */
  readonly label = input.required<string>();
  /** Si se puede cambiar la opacidad */
  readonly alpha = input(true);
  readonly value = model.required<string>();

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private readonly wheel = viewChild.required<ElementRef<HTMLElement>>('wheel');

  readonly uid = `color-picker-${nextId++}`;
  readonly hsla = signal<Hsla>({ h: 0, s: 0, l: 100, a: 1 });
  readonly hexDraft = signal('');
  readonly hexInvalid = signal(false);

  readonly rgba = computed(() => hslToRgb(this.hsla()));
  readonly hex = computed(() => toHex(this.rgba()));
  readonly css = computed(() => toCss(this.rgba()));

  /** El círculo se pinta con la luminosidad actual: en el centro, gris; en el borde, el tono puro. */
  readonly wheelBackground = computed(() => {
    const l = this.hsla().l;
    const hues = Array.from({ length: 13 }, (_, i) => `hsl(${i * 30} 100% ${l}%)`).join(', ');
    return `radial-gradient(closest-side, hsl(0 0% ${l}%), hsl(0 0% ${l}% / 0)), conic-gradient(${hues})`;
  });

  /** Posición del punto en el círculo, en % del tamaño */
  readonly thumb = computed(() => {
    const { h, s } = this.hsla();
    const angle = (h * Math.PI) / 180;
    const radius = (s / 100) * 50;
    return { x: 50 + radius * Math.sin(angle), y: 50 - radius * Math.cos(angle) };
  });

  readonly tracks = computed(() => {
    const { h, s, l } = this.hsla();
    return {
      hue: `linear-gradient(90deg, ${Array.from({ length: 7 }, (_, i) => `hsl(${i * 60} ${s}% ${l}%)`).join(', ')})`,
      saturation: `linear-gradient(90deg, hsl(${h} 0% ${l}%), hsl(${h} 100% ${l}%))`,
      lightness: `linear-gradient(90deg, #000, hsl(${h} ${s}% 50%), #fff)`,
      alpha: `linear-gradient(90deg, hsl(${h} ${s}% ${l}% / 0), hsl(${h} ${s}% ${l}%))`,
    };
  });

  /** Contraste de un texto blanco y uno negro sobre el color (si es translúcido, sobre fondo blanco). */
  readonly contrasts = computed(() => {
    const surface = composite(this.rgba(), WHITE);
    return [
      { name: 'picker.white', color: '#fff', ratio: contrast(surface, WHITE) },
      { name: 'picker.black', color: '#000', ratio: contrast(surface, BLACK) },
    ].map((item) => ({ ...item, passes: item.ratio >= AA_NORMAL, text: item.ratio.toFixed(1).replace('.', ',') }));
  });

  readonly wheelValueText = computed(() => {
    this.i18n.language();
    return this.i18n.t('picker.wheelValue', { h: this.hsla().h, s: this.hsla().s });
  });

  open() {
    const parsed = parseColor(this.value());
    if (parsed) this.hsla.set(rgbToHsl(parsed));
    // Se muestra el código tal cual (pasar a HSL y volver puede cambiar una cifra por redondeo)
    this.hexDraft.set(parsed ? toHex(parsed) : this.hex());
    this.hexInvalid.set(false);
    this.dialog().nativeElement.showModal();
  }

  close() {
    this.dialog().nativeElement.close();
  }

  private update(changes: Partial<Hsla>) {
    this.hsla.update((current) => ({ ...current, ...changes }));
    this.hexDraft.set(this.hex());
    this.hexInvalid.set(false);
    this.value.set(this.css());
  }

  setChannel(channel: keyof Hsla, event: Event) {
    const raw = Number((event.target as HTMLInputElement).value);
    this.update({ [channel]: channel === 'a' ? raw / 100 : raw });
  }

  /** Arrastrar o pulsar sobre el círculo */
  onWheelPointer(event: PointerEvent) {
    if (event.type === 'pointermove' && event.buttons !== 1) return;
    if (event.type === 'pointerdown') (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    const rect = this.wheel().nativeElement.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const h = Math.round(((Math.atan2(dx, -dy) * 180) / Math.PI + 360) % 360);
    const s = Math.round(Math.min(1, Math.hypot(dx, dy) / (rect.width / 2)) * 100);
    this.update({ h, s });
  }

  /** Teclado en el círculo: izquierda/derecha cambian el tono y arriba/abajo la saturación */
  onWheelKey(event: KeyboardEvent) {
    const step = event.shiftKey ? 10 : 1;
    const { h, s } = this.hsla();
    const moves: Record<string, Partial<Hsla>> = {
      ArrowRight: { h: (h + step) % 360 },
      ArrowLeft: { h: (h - step + 360) % 360 },
      ArrowUp: { s: Math.min(100, s + step) },
      ArrowDown: { s: Math.max(0, s - step) },
    };
    const change = moves[event.key];
    if (!change) return;
    event.preventDefault();
    this.update(change);
  }

  onHexInput(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.hexDraft.set(text);
    const parsed = /^#?[0-9a-f]{6}$/i.test(text) ? parseColor(text.startsWith('#') ? text : `#${text}`) : null;
    this.hexInvalid.set(!parsed);
    if (parsed) {
      const { h, s, l } = rgbToHsl(parsed);
      this.hsla.update((current) => ({ ...current, h, s, l }));
      this.value.set(this.css());
    }
  }
}
