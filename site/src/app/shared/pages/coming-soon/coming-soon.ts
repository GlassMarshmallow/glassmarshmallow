import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

/** Sección que todavía no está hecha. El título (clave de traducción) llega por los datos de la ruta. */
@Component({
  selector: 'app-coming-soon',
  imports: [RouterLink, TranslatePipe],
  template: `
    <section class="gm-container simple-page">
      <h1>{{ heading() | t }}</h1>
      <p class="gm-muted">{{ 'common.comingSoon' | t }}</p>
      <a class="gm-btn" routerLink="/">{{ 'common.backHome' | t }}</a>
    </section>
  `,
  styles: `.simple-page { padding-block: 96px 0; } .simple-page p { font-size: 1.1rem; margin-bottom: 28px; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComingSoon {
  readonly heading = input('');
}
