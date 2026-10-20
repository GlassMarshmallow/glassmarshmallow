import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { I18nService } from '../../../core/i18n/i18n.service';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { HighlightPipe } from '../../utils/highlight';

/**
 * El código que da una herramienta: las declaraciones de CSS o, a elegir, el mismo CSS dentro de una clase lista para usar.
 * Lleva el botón de copiar; otros botones (como «Restablecer») van dentro y salen a su lado.
 */
@Component({
  selector: 'app-code-output',
  imports: [HighlightPipe, TranslatePipe],
  template: `
    @if (className()) {
      <div class="gm-segmented gm-justify-self-start" role="group" [attr.aria-label]="'common.codeFormat' | t">
        <button type="button" [class.is-active]="mode() === 'css'" [attr.aria-pressed]="mode() === 'css'" (click)="mode.set('css')">CSS</button>
        <button type="button" [class.is-active]="mode() === 'classes'" [attr.aria-pressed]="mode() === 'classes'" (click)="mode.set('classes')">{{ 'common.inClass' | t }}</button>
      </div>
    }
    <pre class="gm-code gm-code--wrap" tabindex="0" [attr.aria-label]="'common.generatedCss' | t"><code [innerHTML]="code() | highlight: 'css'"></code></pre>
    <div class="gm-d-flex gm-flex-wrap gm-gap-[.625rem]">
      <button type="button" class="gm-btn gm-btn--sm" (click)="copy()">
        <i class="gmi" [class.gmi-clipboard]="!copied()" [class.gmi-check]="copied()" aria-hidden="true"></i>
        {{ (copied() ? 'common.copied' : 'common.copyCss') | t }}
      </button>
      <ng-content />
    </div>
    <span class="gm-visually-hidden" aria-live="polite">{{ announcement() }}</span>
  `,
  host: { class: 'gm-tool__code' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeOutput {
  private readonly i18n = inject(I18nService);
  readonly css = input.required<string>();
  /** El nombre de la clase en la que se puede copiar el CSS (glass → .glass { … }). Sin él, solo se ve el CSS */
  readonly className = input<string>('');

  readonly mode = signal<'css' | 'classes'>('css');
  readonly copied = signal(false);
  readonly announcement = signal('');
  readonly showClasses = computed(() => this.mode() === 'classes' && !!this.className());
  /** Los comentarios arriba y las declaraciones, sangradas, dentro de la clase */
  readonly inClass = computed(() => {
    const lines = this.css().split('\n');
    const comments = lines.filter((line) => line.startsWith('/*'));
    const declarations = lines.filter((line) => line.trim() && !line.startsWith('/*'));
    const usage = `/* ${this.i18n.t('common.classUsage', { name: this.className() })} */`;
    return [...comments, usage, `.${this.className()} {`, ...declarations.map((line) => `  ${line}`), '}'].join('\n');
  });
  readonly code = computed(() => (this.showClasses() ? this.inClass() : this.css()));
  private resetTimer?: ReturnType<typeof setTimeout>;

  async copy() {
    try {
      await navigator.clipboard.writeText(this.code());
      this.copied.set(true);
      this.announcement.set(this.i18n.t('common.cssCopied'));
      clearTimeout(this.resetTimer);
      this.resetTimer = setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // Sin permiso para el portapapeles: el código se puede seleccionar a mano
      this.copied.set(false);
    }
  }
}
