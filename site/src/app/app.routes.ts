import { Routes } from '@angular/router';
import { PublicLayout } from './layouts/public-layout/public-layout';

/** Rutas en inglés (idioma principal de la web). Los títulos son claves de traducción (core/i18n). */
export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        title: 'titles.home',
        loadComponent: () => import('./features/public/pages/home/home').then((m) => m.Home),
      },
      {
        path: 'docs',
        loadComponent: () => import('./features/docs/layout/docs-layout').then((m) => m.DocsLayout),
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'getting-started/introduction' },
          // Antes los colores estaban repartidos entre Personalizar y Utilidades
          { path: 'customize/colors', redirectTo: '/docs/color/colors' },
          { path: 'customize/color-modes', redirectTo: '/docs/color/color-modes' },
          { path: 'utilities/colors', redirectTo: '/docs/color/text' },
          { path: 'utilities/background', redirectTo: '/docs/color/background' },
          { path: 'utilities/color-scheme', redirectTo: '/docs/color/color-scheme' },
          { path: 'utilities/theme', redirectTo: '/docs/color/theme' },
          // Antes las herramientas estaban dentro de la documentación
          { path: 'tools/:tool', redirectTo: '/tools/:tool' },
          {
            // Páginas en Markdown (public/content/docs/<idioma>/<sección>/<página>.md)
            path: ':section/:page',
            title: (route) => `docsNav.pages.${route.params['section']}/${route.params['page']}`,
            loadComponent: () => import('./features/docs/pages/doc-page/doc-page').then((m) => m.DocPage),
          },
        ],
      },
      {
        path: 'tools',
        children: [
          { path: '', title: 'titles.tools', loadComponent: () => import('./features/tools/pages/tools-home/tools-home').then((m) => m.ToolsHome) },
          {
            path: 'glass-generator',
            title: 'titles.glass',
            loadComponent: () => import('./features/public/pages/glass-generator/glass-generator').then((m) => m.GlassGenerator),
          },
          {
            path: 'gradient-generator',
            title: 'titles.gradient',
            loadComponent: () =>
              import('./features/public/pages/gradient-generator/gradient-generator').then((m) => m.GradientGenerator),
          },
          {
            path: 'single-color-gradient',
            title: 'titles.singleGradient',
            loadComponent: () =>
              import('./features/public/pages/single-color-gradient/single-color-gradient').then((m) => m.SingleColorGradient),
          },
          {
            path: 'filter-generator',
            title: 'titles.filter',
            loadComponent: () => import('./features/public/pages/filter-generator/filter-generator').then((m) => m.FilterGenerator),
          },
          {
            path: 'palette-generator',
            title: 'titles.palette',
            loadComponent: () => import('./features/public/pages/palette-generator/palette-generator').then((m) => m.PaletteGenerator),
          },
          {
            path: 'tv-effect',
            title: 'titles.tv',
            loadComponent: () => import('./features/public/pages/tv-effect/tv-effect').then((m) => m.TvEffect),
          },
        ],
      },
      {
        path: 'examples',
        title: 'titles.examples',
        data: { heading: 'nav.examples' },
        loadComponent: () => import('./shared/pages/coming-soon/coming-soon').then((m) => m.ComingSoon),
      },
      {
        path: 'icons',
        title: 'titles.icons',
        loadComponent: () => import('./features/public/pages/icons/icons').then((m) => m.Icons),
      },
      {
        path: 'icons/:name',
        title: (route) => `icon:${route.params['name']}`,
        loadComponent: () => import('./features/icons/pages/icon-detail/icon-detail').then((m) => m.IconDetail),
      },
      {
        path: 'blog',
        title: 'titles.blog',
        data: { heading: 'nav.blog' },
        loadComponent: () => import('./shared/pages/coming-soon/coming-soon').then((m) => m.ComingSoon),
      },
      // Direcciones anteriores (en español)
      { path: 'documentacion', redirectTo: 'docs' },
      { path: 'ejemplos', redirectTo: 'examples' },
      { path: 'iconos', redirectTo: 'icons' },
      { path: 'generador-de-cristal', redirectTo: 'tools/glass-generator' },
      { path: 'generador-de-degradados', redirectTo: 'tools/gradient-generator' },

      {
        path: '**',
        title: 'titles.notFound',
        loadComponent: () => import('./shared/pages/not-found/not-found').then((m) => m.NotFound),
      },
    ],
  },
];
