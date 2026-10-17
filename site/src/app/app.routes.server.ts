import { RenderMode, ServerRoute } from '@angular/ssr';
import { DOCS_PAGES } from './features/docs/data/docs-nav';
import { ICONS } from './features/icons/data/icons';

/**
 * Páginas que se prerenderizan al compilar (HTML ya escrito, para los buscadores y las vistas previas al compartir).
 * Las que llevan parámetros dicen cuáles hay.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: 'docs/:section/:page',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => DOCS_PAGES.map((page) => {
      const [section, name] = page.path.split('/');
      return { section, page: name };
    }),
  },
  {
    path: 'icons/:name',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => ICONS.map((icon) => ({ name: icon.name })),
  },
  // Dirección antigua con parámetro: solo redirige en el navegador
  { path: 'docs/tools/:tool', renderMode: RenderMode.Client },
  { path: '**', renderMode: RenderMode.Prerender },
];
