import { RangeFill } from '../../../../shared/directives/range-fill';
import { CodeOutput } from '../../../../shared/components/code-output/code-output';
import { ChangeDetectionStrategy, Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { ColorPicker } from '../../../../shared/components/color-picker/color-picker';
import { parseColor } from '../../../../shared/utils/color';

type GradientType = 'linear' | 'radial';
type Shape = 'circle' | 'ellipse';

interface Option<T> {
  value: T;
  /** Clave de traducción */
  label: string;
  icon?: string;
}

/** Direcciones del degradado lineal: hacia dónde se desvanece el color */
const DIRECTIONS: (Option<number> & { icon: string })[] = [
  { value: 315, label: 'single.dirUpLeft', icon: 'gmi-arrow-up-left' },
  { value: 0, label: 'single.dirUp', icon: 'gmi-arrow-up' },
  { value: 45, label: 'single.dirUpRight', icon: 'gmi-arrow-up-right' },
  { value: 270, label: 'single.dirLeft', icon: 'gmi-arrow-left' },
  { value: -1, label: '', icon: '' },
  { value: 90, label: 'single.dirRight', icon: 'gmi-arrow-right' },
  { value: 225, label: 'single.dirDownLeft', icon: 'gmi-arrow-down-left' },
  { value: 180, label: 'single.dirDown', icon: 'gmi-arrow-down' },
  { value: 135, label: 'single.dirDownRight', icon: 'gmi-arrow-down-right' },
];

/** Origen del degradado radial */
const POSITIONS: Option<string>[] = [
  { value: 'top left', label: 'single.posTopLeft' },
  { value: 'top', label: 'single.posTop' },
  { value: 'top right', label: 'single.posTopRight' },
  { value: 'left', label: 'single.posLeft' },
  { value: 'center', label: 'single.posCenter' },
  { value: 'right', label: 'single.posRight' },
  { value: 'bottom left', label: 'single.posBottomLeft' },
  { value: 'bottom', label: 'single.posBottom' },
  { value: 'bottom right', label: 'single.posBottomRight' },
];

/** Generador de degradados de un solo color: el color se desvanece en una dirección o desde un punto. */
import { BackLink } from '../../../../shared/components/back-link/back-link';
@Component({
  selector: 'app-single-color-gradient',
  imports: [CodeOutput, RangeFill, ColorPicker, TranslatePipe, BackLink],
  templateUrl: './single-color-gradient.html',
  styleUrl: './single-color-gradient.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleColorGradient {
  private readonly i18n = inject(I18nService);
  private readonly fullscreen = viewChild.required<ElementRef<HTMLDialogElement>>('fullscreen');

  readonly directions = DIRECTIONS;
  readonly positions = POSITIONS;
  readonly types: Option<GradientType>[] = [
    { value: 'linear', label: 'gradient.linear' },
    { value: 'radial', label: 'gradient.radial' },
  ];
  readonly shapes: Option<Shape>[] = [
    { value: 'circle', label: 'single.circle' },
    { value: 'ellipse', label: 'single.ellipse' },
  ];

  readonly color = signal('#8c57e9');
  readonly type = signal<GradientType>('linear');
  readonly angle = signal(180);
  readonly shape = signal<Shape>('circle');
  readonly position = signal('center');
  /** Radio en % del elemento (desde el origen hasta su esquina más lejana): el degradado escala con el sitio
      donde se aplique, nunca en píxeles fijos */
  readonly radius = signal(100);
  readonly startOpacity = signal(100);
  readonly endOpacity = signal(0);
  readonly extent = signal(100);
  /** Radial invertido: transparente en el centro y el color hacia los bordes (sombra hacia dentro) */
  readonly inverted = signal(false);

  private readonly rgb = computed(() => {
    const c = parseColor(this.color()) ?? { r: 140, g: 87, b: 233 };
    return `${c.r}, ${c.g}, ${c.b}`;
  });

  readonly gradient = computed(() => {
    const inverted = this.type() === 'radial' && this.inverted();
    // Invertido: el principio pasa a ser transparente (o la opacidad del final) y el color va a los bordes
    const start = inverted ? this.endOpacity() : this.startOpacity();
    const end = inverted ? this.startOpacity() : this.endOpacity();
    // En el radial, las paradas se escalan con el radio (todo en %, relativo al elemento)
    const scale = this.type() === 'radial' ? this.radius() / 100 : 1;
    const pct = (value: number) => `${Math.round(value * scale * 10) / 10}%`;
    const from = `rgba(${this.rgb()}, ${start / 100}) ${pct(inverted ? 100 - this.extent() : 0)}`;
    const to = `rgba(${this.rgb()}, ${end / 100}) ${pct(inverted ? 100 : this.extent())}`;
    if (this.type() === 'radial') {
      return `radial-gradient(${this.shape()} farthest-corner at ${this.position()}, ${from}, ${to})`;
    }
    return `linear-gradient(${this.angle()}deg, ${from}, ${to})`;
  });

  readonly css = computed(() => `/* ${this.i18n.t('common.generatedWith')} */\nbackground: ${this.gradient()};`);

  setNumber(target: { set: (value: number) => void }, event: Event) {
    target.set(Number((event.target as HTMLInputElement).value));
  }

  setType(type: GradientType) {
    this.type.set(type);
  }

  /** Vista a pantalla completa: el degradado sobre toda la ventana y sobre el fondo real de la web */
  openFullscreen() {
    this.fullscreen().nativeElement.showModal();
  }

  closeFullscreen() {
    this.fullscreen().nativeElement.close();
  }
}
