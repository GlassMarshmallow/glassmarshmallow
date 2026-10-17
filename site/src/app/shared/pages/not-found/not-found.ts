import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, TranslatePipe],
  template: `
    <section class="gm-container simple-page">
      <h1>{{ 'notFound.title' | t }}</h1>
      <p class="gm-muted">{{ 'notFound.text' | t }}</p>
      <a class="gm-btn" routerLink="/">{{ 'common.backHome' | t }}</a>
    </section>
  `,
  styles: `.simple-page { padding-block: 96px 0; } .simple-page p { font-size: 1.1rem; margin-bottom: 28px; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {}
