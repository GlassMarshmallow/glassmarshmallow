/** Índice de la documentación: secciones del menú lateral y sus páginas, en orden (como en Bootstrap). */

export interface DocsPage {
  /** Sección y página: «getting-started/install» → /docs/getting-started/install */
  path: string;
}

export interface DocsSection {
  id: string;
  icon: string;
  pages: DocsPage[];
}

export const DOCS_SECTIONS: DocsSection[] = [
  {
    id: 'getting-started',
    icon: 'gmi-book',
    pages: ['introduction', 'install', 'ai', 'approach', 'css-variables', 'accessibility', 'wcag'].map((p) => ({ path: `getting-started/${p}` })),
  },
  {
    id: 'color',
    icon: 'gmi-palette',
    pages: ['colors', 'color-modes', 'text', 'background', 'color-scheme', 'theme'].map((p) => ({ path: `color/${p}` })),
  },
  {
    id: 'customize',
    icon: 'gmi-palette',
    pages: ['typography', 'background'].map((p) => ({ path: `customize/${p}` })),
  },
  {
    id: 'layout',
    icon: 'gmi-grid',
    pages: ['containers', 'sections', 'breakpoints', 'grid'].map((p) => ({ path: `layout/${p}` })),
  },
  {
    id: 'utilities',
    icon: 'gmi-gear',
    pages: ['spacing', 'sizing', 'position', 'overflow', 'text', 'media', 'borders', 'shadows', 'gradients', 'filters', 'effects', 'animations', 'flex', 'display', 'interaction', 'arbitrary'].map((p) => ({ path: `utilities/${p}` })),
  },
  {
    id: 'content',
    icon: 'gmi-journal-text',
    pages: ['structure', 'base', 'prose', 'code'].map((p) => ({ path: `content/${p}` })),
  },
  {
    id: 'forms',
    icon: 'gmi-pencil',
    pages: ['rules', 'field', 'segmented', 'range', 'date-picker', 'color-picker'].map((p) => ({ path: `forms/${p}` })),
  },
  {
    id: 'components',
    icon: 'gmi-window-stack',
    pages: ['accordion', 'alert', 'ai-notice', 'avatar', 'button', 'card', 'carousel', 'chat', 'chip', 'command', 'dialog', 'footer', 'gallery', 'tag', 'navbar', 'tabbar', 'fullscreen-menu', 'menu', 'search', 'player', 'progress', 'sidenav', 'toc', 'pager', 'snippet', 'ticker', 'tool', 'tooltip'].map((p) => ({ path: `components/${p}` })),
  },
  {
    id: 'helpers',
    icon: 'gmi-link',
    pages: ['visually-hidden', 'hit-area', 'skip-link', 'gradient-text', 'text-outline'].map((p) => ({ path: `helpers/${p}` })),
  },
  {
    id: 'guides',
    icon: 'gmi-stars',
    pages: ['ux'].map((p) => ({ path: `guides/${p}` })),
  },
];

/** Todas las páginas seguidas, para «Anterior» y «Siguiente» */
export const DOCS_PAGES: DocsPage[] = DOCS_SECTIONS.flatMap((section) => section.pages);

/** Clave de traducción del título de una página: «getting-started/install» → «docsNav.pages.getting-started/install» */
export const pageTitleKey = (path: string) => `docsNav.pages.${path}`;
