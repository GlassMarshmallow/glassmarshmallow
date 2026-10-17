import { ChangeDetectionStrategy, Component, computed, inject, input, resource, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { BackLink } from '../../../../shared/components/back-link/back-link';
import { ICONS, iconTitle } from '../../data/icons';

/** Ficha de un icono (/icons/<nombre>), como la de Bootstrap Icons: vista grande, ejemplos y el código. */
@Component({
  selector: 'app-icon-detail',
  imports: [RouterLink, TranslatePipe, BackLink],
  templateUrl: './icon-detail.html',
  styleUrl: './icon-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDetail {
  private readonly i18n = inject(I18nService);

  /** Parámetro de la ruta */
  readonly name = input.required<string>();

  readonly icon = computed(() => ICONS.find((icon) => icon.name === this.name()));
  readonly title = computed(() => iconTitle(this.name()));
  readonly fontHtml = computed(() => `<i class="gmi gmi-${this.name()}" aria-hidden="true"></i>`);
  readonly svgUrl = computed(() => `/icons-svg/${this.name()}.svg`);
  /** Otros iconos de la misma categoría */
  readonly related = computed(() => {
    const icon = this.icon();
    return icon ? ICONS.filter((other) => other.category === icon.category && other.name !== icon.name).slice(0, 12) : [];
  });

  /** El SVG del icono, tal cual está en el archivo */
  readonly svg = resource({
    // Al prerenderizar no se descarga (no hay servidor al que pedirlo): lo pide el navegador al abrir la página
    params: () => (this.icon() && typeof window !== 'undefined' ? this.svgUrl() : undefined),
    loader: async ({ params }) => (await (await fetch(params)).text()).trim(),
  });

  readonly copied = signal<'svg' | 'html' | null>(null);
  readonly announcement = signal('');
  private resetTimer?: ReturnType<typeof setTimeout>;

  async copy(what: 'svg' | 'html') {
    const text = what === 'svg' ? this.svg.value() : this.fontHtml();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      this.copied.set(what);
      this.announcement.set(this.i18n.t('icons.codeCopied'));
      clearTimeout(this.resetTimer);
      this.resetTimer = setTimeout(() => this.copied.set(null), 2000);
    } catch {
      this.copied.set(null);
    }
  }
}
