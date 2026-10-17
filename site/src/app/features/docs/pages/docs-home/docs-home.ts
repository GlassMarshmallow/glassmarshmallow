import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

/** Inicio de la documentación. De momento, las herramientas; el resto se irá escribiendo. */
@Component({
  selector: 'app-docs-home',
  imports: [RouterLink, TranslatePipe],
  template: `
    <section class="mg-container docs" aria-labelledby="docs-title">
      <h1 id="docs-title">{{ 'docs.title' | t }}</h1>
      <p class="docs__lead">{{ 'docs.lead' | t }}</p>

      <h2>{{ 'docs.tools' | t }}</h2>
      <ul class="docs__tools">
        <li>
          <a class="mg-card docs__tool" routerLink="/docs/tools/glass-generator">
            <i class="mgi mgi-window-stack" aria-hidden="true"></i>
            <span class="docs__tool-title">{{ 'glass.title' | t }}</span>
            <span class="docs__tool-text">{{ 'docs.glassText' | t }}</span>
          </a>
        </li>
        <li>
          <a class="mg-card docs__tool" routerLink="/docs/tools/gradient-generator">
            <i class="mgi mgi-palette" aria-hidden="true"></i>
            <span class="docs__tool-title">{{ 'gradient.title' | t }}</span>
            <span class="docs__tool-text">{{ 'docs.gradientText' | t }}</span>
          </a>
        </li>
        <li>
          <a class="mg-card docs__tool" routerLink="/docs/tools/single-color-gradient">
            <i class="mgi mgi-circle-half" aria-hidden="true"></i>
            <span class="docs__tool-title">{{ 'single.title' | t }}</span>
            <span class="docs__tool-text">{{ 'docs.singleText' | t }}</span>
          </a>
        </li>
      </ul>
    </section>
  `,
  styles: `
    .docs { padding-block: 72px 0; }
    .docs__lead { max-width: 640px; margin-bottom: 48px; color: var(--mg-text-secondary); font-size: 1.1rem; }
    .docs h2 { margin-bottom: 18px; font-size: 1.4rem; }
    .docs__tools { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; margin: 0; padding: 0; list-style: none; }
    .docs__tool { display: grid; height: 100%; gap: 8px; color: var(--mg-text); text-shadow: none; transition: transform .2s; }
    .docs__tool:hover { transform: translateY(-2px); }
    .docs__tool .mgi { color: var(--mg-accent); font-size: 1.6rem; }
    .docs__tool-title { font-size: 1.1rem; font-weight: 700; }
    .docs__tool-text { color: var(--mg-text-secondary); font-size: .95rem; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsHome {}
