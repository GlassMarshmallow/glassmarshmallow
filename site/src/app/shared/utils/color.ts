/** Utilidades de color: conversión entre formatos y contraste WCAG. */

export interface Rgba {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Hsla {
  h: number;
  s: number;
  l: number;
  a: number;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

/** Lee #rgb, #rrggbb, #rrggbbaa o rgb()/rgba(). Devuelve null si no es un color válido. */
export function parseColor(value: string): Rgba | null {
  const text = value.trim().toLowerCase();
  const hex = text.match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/);
  if (hex) {
    let digits = hex[1];
    if (digits.length === 3) digits = digits.split('').map((d) => d + d).join('');
    const n = (i: number) => parseInt(digits.slice(i, i + 2), 16);
    return { r: n(0), g: n(2), b: n(4), a: digits.length === 8 ? Math.round((n(6) / 255) * 100) / 100 : 1 };
  }
  const rgb = text.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/);
  if (rgb) {
    return {
      r: clamp(+rgb[1], 0, 255),
      g: clamp(+rgb[2], 0, 255),
      b: clamp(+rgb[3], 0, 255),
      a: rgb[4] === undefined ? 1 : clamp(+rgb[4], 0, 1),
    };
  }
  return null;
}

export function rgbToHsl({ r, g, b, a }: Rgba): Hsla {
  const [rn, gn, bn] = [r / 255, g / 255, b / 255];
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === rn) h = (gn - bn) / d + (gn < bn ? 6 : 0);
    else if (max === gn) h = (bn - rn) / d + 2;
    else h = (rn - gn) / d + 4;
    h *= 60;
  }
  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100), a };
}

export function hslToRgb({ h, s, l, a }: Hsla): Rgba {
  const sn = s / 100;
  const ln = l / 100;
  const k = (n: number) => (n + h / 30) % 12;
  const f = (n: number) => ln - sn * Math.min(ln, 1 - ln) * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return { r: Math.round(f(0) * 255), g: Math.round(f(8) * 255), b: Math.round(f(4) * 255), a };
}

export function toHex({ r, g, b }: Rgba): string {
  return '#' + [r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('');
}

/** #rrggbb si es opaco; rgba() si tiene transparencia. */
export function toCss(color: Rgba): string {
  return color.a >= 1 ? toHex(color) : `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
}

/** Mezcla un color con transparencia sobre un fondo opaco. */
export function composite(color: Rgba, background: Rgba): Rgba {
  const mix = (top: number, bottom: number) => Math.round(top * color.a + bottom * (1 - color.a));
  return { r: mix(color.r, background.r), g: mix(color.g, background.g), b: mix(color.b, background.b), a: 1 };
}

function luminance({ r, g, b }: Rgba): number {
  const channel = (c: number) => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

/** Contraste WCAG entre dos colores opacos (de 1 a 21). */
export function contrast(a: Rgba, b: Rgba): number {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}
