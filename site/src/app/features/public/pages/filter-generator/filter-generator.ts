import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { ColorPicker } from '../../../../shared/components/color-picker/color-picker';
import { parseColor } from '../../../../shared/utils/color';

/**
 * Generador de filtros: una capa de un color translúcido sobre el fondo (como el filtro negro de la portada
 * clara). Se ve sobre el fondo de luces de la web, con texto de ejemplo.
 */
import { SampleField, SampleTexts } from '../../../../shared/components/sample-texts/sample-texts';
import { BackLink } from '../../../../shared/components/back-link/back-link';
@Component({
  selector: 'app-filter-generator',
  imports: [ColorPicker, TranslatePipe, BackLink, SampleTexts],
  templateUrl: './filter-generator.html',
  styleUrl: './filter-generator.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterGenerator {
  private readonly i18n = inject(I18nService);

  readonly color = signal('#000000');
  /** Opacidad en %, con decimales para afinar filtros muy suaves */
  readonly opacity = signal(7);
  readonly showSample = signal(true);
  /** Modo de la vista previa (independiente del de la página) */
  readonly previewTheme = signal<'light' | 'dark'>('light');
  readonly themes = [
    { value: 'light' as const, label: 'filter.light' },
    { value: 'dark' as const, label: 'filter.dark' },
  ];
  /** Textos de ejemplo escritos por la persona; vacíos, se usan los de por defecto del idioma */
  readonly sampleTitle = signal('');
  readonly sampleText = signal('');
  readonly sampleSmall = signal('');
  readonly sampleFields = computed<SampleField[]>(() => [
    { id: 'filter-text-title', label: 'common.textTitle', placeholder: this.i18n.t('filter.sampleTitle'), value: this.sampleTitle },
    { id: 'filter-text-body', label: 'common.textBody', placeholder: this.i18n.t('filter.sampleText'), value: this.sampleText },
    { id: 'filter-text-small', label: 'common.textSmall', placeholder: this.i18n.t('filter.sampleSmall'), value: this.sampleSmall },
  ]);
  readonly copied = signal(false);
  readonly announcement = signal('');
  private resetTimer?: ReturnType<typeof setTimeout>;

  readonly filter = computed(() => {
    const c = parseColor(this.color()) ?? { r: 0, g: 0, b: 0 };
    return `rgba(${c.r}, ${c.g}, ${c.b}, ${Math.round(this.opacity() * 10) / 1000})`;
  });

  readonly css = computed(() => `/* ${this.i18n.t('common.generatedWith')} */\nbackground: ${this.filter()};`);

  setOpacity(event: Event) {
    this.opacity.set(Number((event.target as HTMLInputElement).value));
  }

  toggleSample(event: Event) {
    this.showSample.set((event.target as HTMLInputElement).checked);
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
