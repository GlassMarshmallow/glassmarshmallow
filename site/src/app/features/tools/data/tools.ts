/** Herramientas de la web (/tools/<id>): generadores que dan el CSS listo para copiar. */
export interface Tool {
  id: string;
  icon: string;
  /** Prefijo de sus textos en core/i18n: «glass» → glass.title y glass.lead */
  i18n: string;
}

export const TOOLS: Tool[] = [
  { id: 'glass-generator', icon: 'gmi-window-stack', i18n: 'glass' },
  { id: 'gradient-generator', icon: 'gmi-palette', i18n: 'gradient' },
  { id: 'single-color-gradient', icon: 'gmi-circle-half', i18n: 'single' },
  { id: 'filter-generator', icon: 'gmi-moon', i18n: 'filter' },
];
