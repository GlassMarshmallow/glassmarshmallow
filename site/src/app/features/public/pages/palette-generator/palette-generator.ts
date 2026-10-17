import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { BackLink } from '../../../../shared/components/back-link/back-link';
import { ColorPicker } from '../../../../shared/components/color-picker/color-picker';
import { SampleField, SampleTexts } from '../../../../shared/components/sample-texts/sample-texts';
import { HARMONIES, Harmony, Mode, Role, generatePalette, randomColor, tokens } from './palette';

/**
 * Generador de paletas: un color base y una armonía dan la paleta, cada color con su papel. Se ve aplicada a una
 * página de ejemplo hecha con componentes del framework, y debajo se explica cómo se reparte cada color.
 */
@Component({
  selector: 'app-palette-generator',
  imports: [BackLink, ColorPicker, SampleTexts, TranslatePipe],
  templateUrl: './palette-generator.html',
  styleUrl: './palette-generator.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaletteGenerator {
  private readonly i18n = inject(I18nService);

  readonly base = signal('#5cdfeb');
  readonly harmony = signal<Harmony>('analogous');
  readonly harmonies = HARMONIES;
  /** Modo de la vista previa (independiente del de la página) */
  readonly previewTheme = signal<Mode>('light');
  readonly themes = [
    { value: 'light' as const, label: 'filter.light' },
    { value: 'dark' as const, label: 'filter.dark' },
  ];

  /** Tarjetas de la página de ejemplo */
  readonly cards = [
    { icon: 'gmi-stars', title: 'palette.simCard1', text: 'palette.simCard1Text' },
    { icon: 'gmi-circle-half', title: 'palette.simCard2', text: 'palette.simCard2Text' },
    { icon: 'gmi-heart', title: 'palette.simCard3', text: 'palette.simCard3Text' },
  ];

  readonly sampleTitle = signal('');
  readonly sampleText = signal('');
  readonly sampleFields = computed<SampleField[]>(() => [
    { id: 'palette-text-title', label: 'common.textTitle', placeholder: this.i18n.t('palette.sampleTitle'), value: this.sampleTitle },
    { id: 'palette-text-body', label: 'common.textBody', placeholder: this.i18n.t('palette.sampleText'), value: this.sampleText },
  ]);

  readonly palette = computed(() => generatePalette(this.base(), this.harmony()));
  readonly roles = computed(() => this.palette()[this.previewTheme()]);
  readonly color = computed(() => Object.fromEntries(this.roles().map((r) => [r.id, r.hex])) as Record<Role['id'], string>);
  /** Variables del framework para la vista previa: los componentes toman la paleta sin tocar su CSS */
  readonly previewStyle = computed(() => tokens(this.roles()));

  readonly css = computed(() => {
    const block = (selector: string, roles: Role[]) =>
      `${selector} {\n${Object.entries(tokens(roles))
        .map(([name, value]) => `  ${name}: ${value};`)
        .join('\n')}\n}`;
    const { light, dark } = this.palette();
    return `/* ${this.i18n.t('common.generatedWith')} */\n${block(':root', light)}\n\n${block('[data-theme="dark"]', dark)}`;
  });

  readonly copied = signal(false);
  readonly announcement = signal('');
  private resetTimer?: ReturnType<typeof setTimeout>;

  grade(ratio: number) {
    return ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : '';
  }

  random() {
    this.base.set(randomColor());
    this.harmony.set(HARMONIES[Math.floor(Math.random() * HARMONIES.length)]);
    this.announcement.set(this.i18n.t('palette.randomDone'));
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
