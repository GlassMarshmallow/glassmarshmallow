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
        title: 'titles.docs',
        loadComponent: () => import('./features/docs/pages/docs-home/docs-home').then((m) => m.DocsHome),
      },
      {
        path: 'docs/tools/glass-generator',
        title: 'titles.glass',
        loadComponent: () => import('./features/public/pages/glass-generator/glass-generator').then((m) => m.GlassGenerator),
      },
      {
        path: 'docs/tools/gradient-generator',
        title: 'titles.gradient',
        loadComponent: () =>
          import('./features/public/pages/gradient-generator/gradient-generator').then((m) => m.GradientGenerator),
      },
      {
        path: 'docs/tools/single-color-gradient',
        title: 'titles.singleGradient',
        loadComponent: () =>
          import('./features/public/pages/single-color-gradient/single-color-gradient').then((m) => m.SingleColorGradient),
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
        path: 'blog',
        title: 'titles.blog',
        data: { heading: 'nav.blog' },
        loadComponent: () => import('./shared/pages/coming-soon/coming-soon').then((m) => m.ComingSoon),
      },
      // Direcciones anteriores (en español)
      { path: 'documentacion', redirectTo: 'docs' },
      { path: 'ejemplos', redirectTo: 'examples' },
      { path: 'iconos', redirectTo: 'icons' },
      { path: 'generador-de-cristal', redirectTo: 'docs/tools/glass-generator' },
      { path: 'generador-de-degradados', redirectTo: 'docs/tools/gradient-generator' },
      {
        path: '**',
        title: 'titles.notFound',
        loadComponent: () => import('./shared/pages/not-found/not-found').then((m) => m.NotFound),
      },
    ],
  },
];
