/** Herramientas de la web (/tools/<id>): generadores que dan el CSS listo para copiar. */
export interface Tool {
  id: string;
  icon: string;
  /** Prefijo de sus textos en core/i18n: «glass» → glass.title y glass.lead */
  i18n: string;
  /** Grupo en la página de herramientas: generadores de CSS o efectos */
  group: 'generators' | 'effects';
}

export const TOOLS: Tool[] = [
  { id: 'glass-generator', icon: 'gmi-window-stack', i18n: 'glass', group: 'generators' },
  { id: 'gradient-generator', icon: 'gmi-palette', i18n: 'gradient', group: 'generators' },
  { id: 'single-color-gradient', icon: 'gmi-circle-half', i18n: 'single', group: 'generators' },
  { id: 'filter-generator', icon: 'gmi-moon', i18n: 'filter', group: 'generators' },
  { id: 'palette-generator', icon: 'gmi-palette-fill', i18n: 'palette', group: 'generators' },
  { id: 'tv-effect', icon: 'gmi-stars', i18n: 'tv', group: 'effects' },
];
