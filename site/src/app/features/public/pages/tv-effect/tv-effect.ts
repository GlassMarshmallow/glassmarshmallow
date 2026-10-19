import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { BackLink } from '../../../../shared/components/back-link/back-link';
import { SampleField, SampleTexts } from '../../../../shared/components/sample-texts/sample-texts';
import { RangeFill } from '../../../../shared/directives/range-fill';
import { HighlightPipe } from '../../../../shared/utils/highlight';

/**
 * Efecto de televisor antiguo (el de la portada en modo oscuro): líneas horizontales, grano, viñeta y esquinas
 * curvas. Cada capa se activa y se ajusta; el CSS va en una clase con dos capas (::before y ::after) encima del
 * contenido. Las medidas son relativas (em y %), para que se adapte a donde se use.
 */
@Component({
  selector: 'app-tv-effect',
  imports: [HighlightPipe, BackLink, SampleTexts, TranslatePipe, RangeFill],
  templateUrl: './tv-effect.html',
  styleUrl: './tv-effect.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvEffect {
  private readonly i18n = inject(I18nService);

  /** Valores iniciales: los de la portada en modo oscuro */
  readonly lines = signal(true);
  readonly lineOpacity = signal(65);
  /** Separación de las líneas en px a 16 px de letra (se escribe en em) */
  readonly lineGap = signal(2);
  readonly grain = signal(true);
  readonly grainOpacity = signal(16);
  readonly vignette = signal(true);
  readonly vignetteStrength = signal(70);
  readonly vignetteStart = signal(45);
  readonly curve = signal(true);
  readonly curveStrength = signal(85);
  readonly curveRadius = signal(6);

  readonly previewTheme = signal<'light' | 'dark'>('dark');
  readonly themes = [
    { value: 'light' as const, label: 'filter.light' },
    { value: 'dark' as const, label: 'filter.dark' },
  ];

  readonly sampleTitle = signal('');
  readonly sampleText = signal('');
  readonly sampleFields = computed<SampleField[]>(() => [
    { id: 'tv-text-title', label: 'common.textTitle', placeholder: this.i18n.t('tv.sampleTitle'), value: this.sampleTitle },
    { id: 'tv-text-body', label: 'common.textBody', placeholder: this.i18n.t('tv.sampleText'), value: this.sampleText },
  ]);

  readonly copied = signal(false);
  readonly announcement = signal('');
  private resetTimer?: ReturnType<typeof setTimeout>;

  private readonly em = (px: number) => `${+(px / 16).toFixed(4)}em`;

  /** Capa de encima (::before): líneas, viñeta y curva */
  readonly topLayer = computed(() => {
    const backgrounds: string[] = [];
    if (this.lines()) {
      const gap = this.em(this.lineGap());
      const end = this.em(this.lineGap() * 2);
      backgrounds.push(`repeating-linear-gradient(transparent 0 ${gap}, rgba(0, 0, 0, ${this.lineOpacity() / 100}) ${gap} ${end})`);
    }
    if (this.vignette()) {
      backgrounds.push(`radial-gradient(ellipse at center, transparent ${this.vignetteStart()}%, rgba(0, 0, 0, ${this.vignetteStrength() / 100}) 100%)`);
    }
    const style: Record<string, string> = {};
    if (backgrounds.length) style['background'] = backgrounds.join(',\n    ');
    if (this.curve()) {
      style['border-radius'] = `${this.curveRadius()}% / ${+(this.curveRadius() * 1.5).toFixed(1)}%`;
      style['box-shadow'] = `inset 0 0 2.5em 1.125em rgba(0, 0, 0, ${this.curveStrength() / 100})`;
    }
    return style;
  });

  /** Capa del grano (::after): ruido blanco que se mezcla en modo «trama» (screen) */
  readonly grainLayer = computed<Record<string, string>>(() => {
    if (!this.grain()) return {} as Record<string, string>;
    const svg =
      "<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1.2 -0.25'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>";
    return { 'background-image': `url("data:image/svg+xml;utf8,${svg}")`, opacity: String(this.grainOpacity() / 100), 'mix-blend-mode': 'screen' };
  });

  readonly css = computed(() => {
    const block = (selector: string, style: Record<string, string>, base: string) => {
      const entries = Object.entries(style);
      if (!entries.length) return '';
      return `${selector} {\n  ${base}\n${entries.map(([k, v]) => `  ${k}: ${v};`).join('\n')}\n}`;
    };
    const layer = 'content: "";\n  position: absolute;\n  z-index: 1;\n  inset: 0;\n  pointer-events: none;';
    const parts = [
      `/* ${this.i18n.t('common.generatedWith')} */`,
      `/* ${this.i18n.t('tv.usage')} */`,
      '.efecto-tv {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n}',
      block('.efecto-tv::before', this.topLayer(), layer),
      block('.efecto-tv::after', this.grainLayer(), layer),
    ];
    return parts.filter(Boolean).join('\n\n');
  });

  /** Para la vista previa: los estilos de cada capa como objeto para [style] */
  readonly topStyle = computed(() => this.topLayer());
  readonly grainStyle = computed(() => this.grainLayer());

  setNumber(target: { set: (v: number) => void }, event: Event) {
    target.set(Number((event.target as HTMLInputElement).value));
  }

  toggle(target: { set: (v: boolean) => void }, event: Event) {
    target.set((event.target as HTMLInputElement).checked);
  }

  async copy() {
    try {
      await navigator.clipboard.writeText(this.css());
      this.copied.set(true);
      this.announcement.set(this.i18n.t('common.cssCopied'));
      clearTimeout(this.resetTimer);
      this.resetTimer = setTimeout(() => this.copied.set(false), 2000);
    } catch {
      this.copied.set(false);
    }
  }
}
