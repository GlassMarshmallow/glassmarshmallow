import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ColorPicker } from '../../../../shared/components/color-picker/color-picker';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { parseColor } from '../../../../shared/utils/color';

/** Convierte el color en «r, g, b» para usarlo en rgba(). */
const toRgbList = (color: string): string => {
  const rgb = parseColor(color) ?? { r: 255, g: 255, b: 255 };
  return `${rgb.r}, ${rgb.g}, ${rgb.b}`;
};

/** Generador de efecto cristal: se ajustan los valores, se ve el resultado y se copia el CSS. */
@Component({
  selector: 'app-glass-generator',
  imports: [ColorPicker, TranslatePipe],
  templateUrl: './glass-generator.html',
  styleUrl: './glass-generator.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlassGenerator {
  private readonly i18n = inject(I18nService);
  readonly transparency = signal(20);
  readonly blur = signal(5);
  readonly color = signal('#ffffff');
  readonly outline = signal(30);
  readonly radius = signal(16);
  readonly copied = signal(false);
  private resetTimer?: ReturnType<typeof setTimeout>;

  private readonly rgb = computed(() => toRgbList(this.color()));

  /** Las mismas declaraciones que se copian, para pintar la tarjeta de muestra. */
  private readonly declarations = computed(() => [
    `background: rgba(${this.rgb()}, ${this.transparency() / 100});`,
    `border-radius: ${this.radius()}px;`,
    `box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);`,
    `backdrop-filter: blur(${this.blur()}px);`,
    `-webkit-backdrop-filter: blur(${this.blur()}px);`,
    `border: 1px solid rgba(${this.rgb()}, ${this.outline() / 100});`,
  ]);

  readonly cardStyle = computed(() => this.declarations().join(' '));
  readonly css = computed(() => [`/* ${this.i18n.t('common.generatedWith')} */`, ...this.declarations()].join('\n'));

  setNumber(target: { set: (value: number) => void }, event: Event) {
    target.set(Number((event.target as HTMLInputElement).value));
  }

  reset() {
    this.transparency.set(20);
    this.blur.set(5);
    this.color.set('#ffffff');
    this.outline.set(30);
    this.radius.set(16);
  }

  async copy() {
    try {
      await navigator.clipboard.writeText(this.css());
      this.copied.set(true);
      clearTimeout(this.resetTimer);
      this.resetTimer = setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // Sin permiso para el portapapeles: el código se puede seleccionar a mano
      this.copied.set(false);
    }
  }
}
