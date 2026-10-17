import { Rgba, contrast, hslToRgb, parseColor, rgbToHsl, toHex } from '../../../../shared/utils/color';

/**
 * Generador de paletas: a partir de un color base y una armonía saca los colores de la paleta y les da un papel
 * (fondo, superficie, texto, principal, secundario y acento) en modo claro y oscuro. Cada papel se ajusta de
 * claridad hasta cumplir su contraste WCAG: 7:1 para el texto (AAA) y 4,5:1 para botones, enlaces y texto
 * secundario (AA).
 */
export type Harmony = 'monochromatic' | 'analogous' | 'complementary' | 'triadic' | 'split';
export type Mode = 'light' | 'dark';

/** Giro del tono (en grados) del color secundario y del de acento respecto al base */
const OFFSETS: Record<Harmony, [number, number]> = {
  monochromatic: [0, 0],
  analogous: [-30, 30],
  complementary: [180, 180],
  triadic: [120, 240],
  split: [150, 210],
};

export const HARMONIES: Harmony[] = ['monochromatic', 'analogous', 'complementary', 'triadic', 'split'];

export interface Role {
  /** Clave del papel en las traducciones (palette.roles.<id>) */
  id: 'background' | 'surface' | 'text' | 'muted' | 'primary' | 'onPrimary' | 'secondary' | 'accent';
  hex: string;
  /** Con qué color se mide el contraste y cuánto da (solo los colores que llevan texto encima o son texto) */
  against?: Role['id'];
  ratio?: number;
}

export interface Palette {
  /** Los colores de la armonía tal cual, antes de darles papel */
  swatches: string[];
  light: Role[];
  dark: Role[];
}

const wrap = (h: number) => ((h % 360) + 360) % 360;
const hsl = (h: number, s: number, l: number) => hslToRgb({ h: wrap(h), s, l, a: 1 });

/** Mueve la claridad hacia oscuro (-1) o claro (+1) hasta llegar al contraste pedido con el fondo */
function reach(h: number, s: number, l: number, against: Rgba, min: number, step: -1 | 1): Rgba {
  let color = hsl(h, s, l);
  while (contrast(color, against) < min && l > 0 && l < 100) {
    l += step;
    color = hsl(h, s, l);
  }
  return color;
}

export function generatePalette(base: string, harmony: Harmony): Palette {
  const { h, s, l } = rgbToHsl(parseColor(base) ?? { r: 92, g: 223, b: 235, a: 1 });
  const [o1, o2] = OFFSETS[harmony];
  // En la monocromática, el secundario y el acento son el mismo tono más claro y más oscuro
  const mono = harmony === 'monochromatic';
  const swatches = [
    toHex(hsl(h, s, l)),
    toHex(hsl(h + o1, s, mono ? Math.min(l + 20, 90) : l)),
    toHex(hsl(h + o2, s, mono ? Math.max(l - 20, 15) : l)),
  ];
  return { swatches, light: roles(h, s, l, o1, o2, mono, 'light'), dark: roles(h, s, l, o1, o2, mono, 'dark') };
}

function roles(h: number, s: number, l: number, o1: number, o2: number, mono: boolean, mode: Mode): Role[] {
  const light = mode === 'light';
  const toward = light ? -1 : 1;
  // Neutros con un poco del tono base: el 60 % (fondo) y el 30 % (superficie)
  const background = hsl(h, Math.min(s, 30), light ? 97 : 7);
  const surface = hsl(h, Math.min(s, 25), light ? 100 : 12);
  const text = reach(h, Math.min(s, 25), light ? 15 : 94, background, 7, toward);
  const muted = reach(h, Math.min(s, 15), light ? 40 : 72, background, 4.5, toward);
  // El 10 %: el principal (botones) con su texto encima, blanco o negro según cuál contraste más
  const tone = hsl(h, s, l);
  const onPrimary = contrast(tone, { r: 255, g: 255, b: 255, a: 1 }) >= contrast(tone, { r: 0, g: 0, b: 0, a: 1 }) ? 255 : 0;
  const white = { r: onPrimary, g: onPrimary, b: onPrimary, a: 1 };
  const primary = reach(h, s, l, white, 4.5, onPrimary ? -1 : 1);
  // Secundario: fondo suave de etiquetas y zonas destacadas, con el texto normal encima
  const secondary = reach(h + o1, Math.min(s, 70), light ? (mono ? 90 : 88) : mono ? 22 : 20, text, 7, light ? 1 : -1);
  // Acento: enlaces e iconos, legible sobre el fondo y la superficie
  const accent = reach(h + o2, s, mono ? (light ? 30 : 75) : l, light ? surface : background, 4.5, toward);
  const accentOnBg = reach(h + o2, s, rgbToHsl(accent).l, background, 4.5, toward);

  const list: [Role['id'], Rgba, Role['id']?][] = [
    ['background', background],
    ['surface', surface],
    ['text', text, 'background'],
    ['muted', muted, 'background'],
    ['primary', primary],
    ['onPrimary', white, 'primary'],
    ['secondary', secondary],
    ['accent', accentOnBg, 'background'],
  ];
  const byId = new Map(list.map(([id, color]) => [id, color]));
  return list.map(([id, color, against]) => ({
    id,
    hex: toHex(color),
    against,
    ratio: against ? Math.round(contrast(color, byId.get(against)!) * 10) / 10 : undefined,
  }));
}

/** Variables del framework que toma cada papel (las mismas que usan sus componentes) */
export function tokens(roles: Role[]): Record<string, string> {
  const c = Object.fromEntries(roles.map((r) => [r.id, r.hex])) as Record<Role['id'], string>;
  return {
    '--gm-bg': c.background,
    '--gm-surface': c.surface,
    '--gm-surface-solid': c.surface,
    '--gm-surface-glass': c.surface,
    '--gm-form-bg': c.surface,
    '--gm-header-bg': c.surface,
    '--gm-text': c.text,
    '--gm-nav-link': c.text,
    '--gm-text-secondary': c.muted,
    '--gm-muted': c.muted,
    '--gm-primary': c.primary,
    '--gm-on-primary': c.onPrimary,
    '--gm-tag': c.secondary,
    '--gm-fill-subtle': c.secondary,
    '--gm-accent': c.accent,
    '--gm-link': c.accent,
    '--gm-focus': c.accent,
    '--gm-field-focus': c.accent,
  };
}

export function randomColor(): string {
  return toHex(hslToRgb({ h: Math.floor(Math.random() * 360), s: 55 + Math.floor(Math.random() * 30), l: 45 + Math.floor(Math.random() * 20), a: 1 }));
}
