import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../../../core/config/site';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { initZooms } from '../../../../../../../js/gallery.js';

/** Ejemplos (/examples): webs hechas con GlassMarshmallow, con las piezas que usa cada una */
@Component({
  selector: 'app-examples',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './examples.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Examples {
  /** El enlace al código solo sale cuando el repositorio de la plantilla sea público */
  readonly templateRepo = SITE.templateRepoPublic ? SITE.templateRepo : '';

  /** Capturas de la plantilla en ordenador y móvil, en los dos modos */
  readonly portfolioShots = [
    { src: 'media/examples/portfolio-escritorio-claro.jpg', alt: 'examples.portfolio.shotDesktop', mode: 'examples.light', mobile: false },
    { src: 'media/examples/portfolio-escritorio-oscuro.jpg', alt: 'examples.portfolio.shotDesktop', mode: 'examples.dark', mobile: false },
    { src: 'media/examples/portfolio-movil-claro.jpg', alt: 'examples.portfolio.shotMobile', mode: 'examples.light', mobile: true },
    { src: 'media/examples/portfolio-movil-oscuro.jpg', alt: 'examples.portfolio.shotMobile', mode: 'examples.dark', mobile: true },
  ];

  constructor() {
    // Las capturas se amplían al pulsarlas (visor de la galería)
    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const stops = initZooms(host);
      destroyRef.onDestroy(() => stops.forEach((stop) => stop()));
    });
  }

  /** Piezas del framework que usa la plantilla de portfolio, con su página de la documentación */
  readonly portfolioPieces = [
    { key: 'docsNav.pages.components/navbar', path: '/docs/components/navbar' },
    { key: 'docsNav.pages.components/fullscreen-menu', path: '/docs/components/fullscreen-menu' },
    { key: 'docsNav.pages.color/background', path: '/docs/color/background' },
    { key: 'docsNav.pages.components/avatar', path: '/docs/components/avatar' },
    { key: 'docsNav.pages.components/chat', path: '/docs/components/chat' },
    { key: 'docsNav.pages.components/chip', path: '/docs/components/chip' },
    { key: 'docsNav.pages.components/ai-notice', path: '/docs/components/ai-notice' },
    { key: 'docsNav.pages.components/dialog', path: '/docs/components/dialog' },
    { key: 'docsNav.pages.layout/sections', path: '/docs/layout/sections' },
    { key: 'docsNav.pages.components/accordion', path: '/docs/components/accordion' },
    { key: 'docsNav.pages.components/ticker', path: '/docs/components/ticker' },
    { key: 'docsNav.pages.components/footer', path: '/docs/components/footer' },
    { key: 'docsNav.pages.content/prose', path: '/docs/content/prose' },
  ];
}
