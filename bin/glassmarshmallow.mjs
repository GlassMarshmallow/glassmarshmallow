#!/usr/bin/env node
// GlassMarshmallow: valores libres en las utilidades, como en Tailwind (gm-z-[5], gm-mt-[1.75rem], gm-md-max-w-[52rem]).
// Lee los archivos del proyecto, busca las clases con corchetes y escribe solo esas en un CSS aparte, que se enlaza
// después del framework. Sin dependencias.
//
//   npx glassmarshmallow build                    lee la carpeta actual y escribe glassmarshmallow.extra.css
//   npx glassmarshmallow build --content src      solo esa carpeta (se puede repetir)
//   npx glassmarshmallow build --out src/extra.css
//   npx glassmarshmallow build --watch            vuelve a escribirlo cada vez que se guarda un archivo
//
// Dentro de los corchetes, «_» es un espacio: gm-grid-cols-[1fr_2fr] → grid-template-columns: 1fr 2fr.
// Con variantes, solo cuando se cumple: gm-hover:bg-[…], gm-dark:text-[…], gm-pressed:bg-[…], gm-before:content-[→].
// Cualquier propiedad sin utilidad, con gm-[propiedad:valor] (también con variantes: gm-light:[filter:none]).
import { existsSync, readdirSync, readFileSync, statSync, watch, writeFileSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

/** Puntos de corte del framework (los mismos que las utilidades: gm-md-… desde 53,75 rem) */
const BREAKPOINTS = { sm: '37.5rem', md: '53.75rem', lg: '68.75rem', xl: '81.25rem' };

// Un color (y no un tamaño): por su forma o, si es una variable del framework, por su nombre. Con «color:» delante se
// fuerza, como en Tailwind: gm-text-[color:var(--mi-color)]
const isColor = (v) => v.startsWith('color:') || /^(#|rgb|hsl|oklch|oklab|lab|lch|color\(|var\(--gm-[\w-]*(color|text|bg|accent|line|surface|link|focus|muted|primary|danger|success|warning|info|tint|selection|sky|blue|lavender|pink|peach|lemon|mint|coral|gray|white|black))/.test(v)
  || /^(transparent|currentColor|white|black|inherit)$/i.test(v);
const color = (v) => v.replace(/^color:/, '');

const isPercent = (v) => /^-?\d*\.?\d+%$/.test(v);

/** Cada utilidad: su nombre y las propiedades que escribe con el valor (v) */
const UTILITIES = {
  // Espaciado
  m: (v) => ({ margin: v }), mx: (v) => ({ 'margin-inline': v }), my: (v) => ({ 'margin-block': v }),
  mt: (v) => ({ 'margin-top': v }), mb: (v) => ({ 'margin-bottom': v }),
  ms: (v) => ({ 'margin-inline-start': v }), me: (v) => ({ 'margin-inline-end': v }),
  p: (v) => ({ padding: v }), px: (v) => ({ 'padding-inline': v }), py: (v) => ({ 'padding-block': v }),
  pt: (v) => ({ 'padding-top': v }), pb: (v) => ({ 'padding-bottom': v }),
  ps: (v) => ({ 'padding-inline-start': v }), pe: (v) => ({ 'padding-inline-end': v }),
  gap: (v) => ({ '--gm-gap': v, gap: v }),
  // Tamaños
  w: (v) => ({ width: v }), h: (v) => ({ height: v }),
  'min-w': (v) => ({ 'min-width': v }), 'max-w': (v) => ({ 'max-width': v }),
  'min-h': (v) => ({ 'min-height': v }), 'max-h': (v) => ({ 'max-height': v }),
  // Posición y capas
  z: (v) => ({ 'z-index': v }), inset: (v) => ({ inset: v }),
  top: (v) => ({ top: v }), bottom: (v) => ({ bottom: v }),
  start: (v) => ({ 'inset-inline-start': v }), end: (v) => ({ 'inset-inline-end': v }),
  // Texto: tamaño o color según el valor (como en Tailwind)
  text: (v) => (isColor(v) ? { color: color(v) } : { 'font-size': v }),
  font: (v) => ({ 'font-weight': v }),
  leading: (v) => ({ 'line-height': v }),
  tracking: (v) => ({ 'letter-spacing': v }),
  // Fondo, bordes y efectos
  // Con pista de tipo, como en Tailwind: gm-bg-[length:2rem_2rem] (tamaño) o gm-bg-[position:top] (posición)
  bg: (v) => (v.startsWith('length:') ? { 'background-size': v.slice(7) }
    : v.startsWith('position:') ? { 'background-position': v.slice(9) }
    : /^(url\(|(repeating-)?(linear|radial|conic)-gradient\()/.test(v) ? { 'background-image': v }
    : isColor(v) ? { 'background-color': color(v) } : { background: v }),
  rounded: (v) => ({ 'border-radius': v }),
  border: (v) => (isColor(v) ? { 'border-color': color(v) } : { 'border-width': v, 'border-style': 'solid' }),
  shadow: (v) => ({ 'box-shadow': v }),
  opacity: (v) => ({ opacity: v }),
  blur: (v) => ({ '-webkit-backdrop-filter': `blur(${v})`, 'backdrop-filter': `blur(${v})` }),
  // Cuadrícula y flex
  'grid-cols': (v) => ({ 'grid-template-columns': v }), 'grid-rows': (v) => ({ 'grid-template-rows': v }),
  // Degradados: el color de inicio, el intermedio y el final (con gm-bg-linear-to-…, gm-bg-radial o gm-bg-conic)
  // Con un porcentaje es dónde empieza ese color: gm-from-[12.5%] (como en Tailwind)
  from: (v) => (isPercent(v) ? { '--gm-gradient-from-position': v }
    : { '--gm-gradient-from': `${v} var(--gm-gradient-from-position, 0%)`, '--gm-gradient-stops': 'var(--gm-gradient-from, transparent 0%), var(--gm-gradient-to, transparent 100%)' }),
  via: (v) => (isPercent(v) ? { '--gm-gradient-via-position': v }
    : { '--gm-gradient-via': `${v} var(--gm-gradient-via-position, 50%)`, '--gm-gradient-stops': 'var(--gm-gradient-from, transparent 0%), var(--gm-gradient-via), var(--gm-gradient-to, transparent 100%)' }),
  to: (v) => (isPercent(v) ? { '--gm-gradient-to-position': v } : { '--gm-gradient-to': `${v} var(--gm-gradient-to-position, 100%)` }),
  // Color del anillo (gm-ring)
  'ring-color': (v) => ({ '--gm-ring-color': v }),
  // Ancho mínimo de las columnas de .gm-grid--auto
  'grid-min': (v) => ({ '--gm-grid-min': v }),
  'col-span': (v) => ({ 'grid-column': `span ${v} / span ${v}` }),
  basis: (v) => ({ 'flex-basis': v }), order: (v) => ({ order: v }),
  // Imágenes y animaciones
  aspect: (v) => ({ 'aspect-ratio': v }),
  duration: (v) => ({ 'animation-duration': v, 'transition-duration': v }),
  delay: (v) => ({ 'animation-delay': v, 'transition-delay': v }),
  // Movimiento, interacción y capas ::before / ::after
  translate: (v) => ({ translate: v }), scale: (v) => ({ scale: v }), rotate: (v) => ({ rotate: v }),
  transition: (v) => ({ transition: v }),
  cursor: (v) => ({ cursor: v }),
  d: (v) => ({ display: v }),
  // El texto de ::before / ::after: entre comillas salvo none, var(), attr() o counter()
  // En una variable, para que las demás clases de la misma capa no lo borren (como --tw-content en Tailwind)
  content: (v) => ({ '--gm-content': /^(none|normal|var\(|attr\(|counter)/.test(v) ? v : `"${v.replace(/"/g, '\\"').replace(/[^\x20-\x7e]/gu, (c) => `\\${c.codePointAt(0).toString(16)} `)}"`, content: 'var(--gm-content)' }),
};

/** Variantes: cuándo se aplica la clase (gm-hover:bg-[…], gm-dark:text-[…], gm-md-hover:…). Como las de Tailwind */
const VARIANTS = {
  // Estados del elemento
  hover: { pseudo: ':hover' }, focus: { pseudo: ':focus' }, 'focus-visible': { pseudo: ':focus-visible' },
  'focus-within': { pseudo: ':focus-within' }, active: { pseudo: ':active' }, disabled: { pseudo: ':disabled' },
  checked: { pseudo: ':checked' }, first: { pseudo: ':first-child' }, last: { pseudo: ':last-child' },
  odd: { pseudo: ':nth-child(odd)' }, even: { pseudo: ':nth-child(even)' },
  // Estados de accesibilidad (ARIA)
  pressed: { pseudo: '[aria-pressed="true"]' }, selected: { pseudo: '[aria-selected="true"]' },
  expanded: { pseudo: '[aria-expanded="true"]' }, current: { pseudo: '[aria-current]:not([aria-current="false"])' },
  invalid: { pseudo: '[aria-invalid="true"]' },
  // Capas que dibuja el CSS
  before: { element: '::before' }, after: { element: '::after' }, placeholder: { element: '::placeholder' },
  // Modo de color (data-theme en <html> o en una parte de la página)
  dark: { parent: '[data-theme="dark"] ' },
  // Claro: con data-theme="light" o sin decir nada (el modo por defecto del framework)
  light: { parent: ':is([data-theme="light"], :root:not([data-theme="dark"])) ' },
  // Cuando se pasa el ratón o se enfoca el antepasado con la clase gm-group
  'group-hover': { parent: '.gm-group:hover ' }, 'group-focus-within': { parent: '.gm-group:focus-within ' },
  // Si la persona ha pedido menos movimiento (o no)
  'motion-safe': { media: '(prefers-reduced-motion: no-preference)' }, 'motion-reduce': { media: '(prefers-reduced-motion: reduce)' },
};
// Puntos de corte a medida, como en Tailwind: gm-max-[47.9375rem]:…, gm-min-[48rem]:…, gm-max-h-[47.5rem]:…
const SIZE_VARIANT = /^(min|max)-(h-)?\[([^\]\s:]+)\]$/;
const variant = (name) => {
  const size = name.match(SIZE_VARIANT);
  return size ? { media: `(${size[1]}-${size[2] ? 'height' : 'width'}: ${size[3].replace(/_/g, ' ')})` } : VARIANTS[name];
};
// Los nombres más largos primero, para que «max-w» no se lea como «m»
const NAMES = Object.keys(UTILITIES).sort((a, b) => b.length - a.length);
const VARIANT_NAMES = ['(?:min|max)-(?:h-)?\\[[^\\]\\s:]+\\]',
  ...Object.keys(VARIANTS).sort((a, b) => b.length - a.length).map((n) => n.replace(/-/g, '\\-'))].join('|');
const CLASS = new RegExp(`gm-(?:(${Object.keys(BREAKPOINTS).join('|')})-)?((?:(?:${VARIANT_NAMES}):)*)(${NAMES.map((n) => n.replace(/-/g, '\\-')).join('|')})-\\[([^\\]\\s"'\`<>]+)\\]`, 'g');

// gm-[propiedad:valor] (con punto de corte y variantes delante, como las demás): cualquier propiedad de CSS
const PROPERTY = new RegExp(`gm-(?:(${Object.keys(BREAKPOINTS).join('|')})-)?((?:(?:${VARIANT_NAMES}):)*)\\[(-?[a-z][a-z-]*):([^\\]\\s"'\`<>]+)\\]`, 'g');

const EXTENSIONS = new Set(['.html', '.htm', '.md', '.mdx', '.js', '.mjs', '.jsx', '.ts', '.tsx', '.vue', '.svelte', '.astro', '.php', '.njk', '.liquid', '.hbs', '.twig', '.erb']);
const IGNORE = new Set(['node_modules', 'dist', 'build', '.git', '.angular', '.next', '.nuxt', '.svelte-kit', '.astro', 'coverage', 'vendor']);

/** Lo que va dentro del selector: el nombre de la clase con los caracteres especiales escapados */
const escapeClass = (name) => name.replace(/[^a-zA-Z0-9_-]/g, (c) => `\\${c}`);

/** El valor, con «_» como espacio. Se rechaza lo que podría romper el CSS */
function cleanValue(raw) {
  const value = raw.replace(/_/g, ' ');
  // «…» es un hueco en un texto de ejemplo, no un valor
  return /[;{}\\…]/.test(value) ? null : value;
}

function files(dirs) {
  const out = [];
  const walk = (path) => {
    let info;
    try { info = statSync(path); } catch { return; }
    if (info.isDirectory()) {
      for (const name of readdirSync(path)) if (!IGNORE.has(name) && !name.startsWith('.')) walk(join(path, name));
    } else if (EXTENSIONS.has(extname(path))) out.push(path);
  };
  dirs.forEach(walk);
  return out;
}

function build(dirs, outFile) {
  const found = new Map();
  for (const file of files(dirs)) {
    const text = readFileSync(file, 'utf8');
    for (const match of text.matchAll(CLASS)) {
      const [name, bp = '', variantList, util, raw] = match;
      const value = cleanValue(raw);
      if (value) found.set(name, { bp, variants: variantList.split(':').filter(Boolean), util, value });
    }
    // Propiedades libres: gm-[mask-type:luminance], gm-light:[filter:none]
    for (const match of text.matchAll(PROPERTY)) {
      const [name, bp = '', variantList, prop, raw] = match;
      const value = cleanValue(raw);
      if (value) found.set(name, { bp, variants: variantList.split(':').filter(Boolean), util: '[property]', prop, value });
    }
  }
  const rules = { '': [] };
  for (const bp of Object.keys(BREAKPOINTS)) rules[bp] = [];
  // Primero las clases sin variante y luego las que tienen, para que la variante gane cuando se cumple
  const entries = [...found].sort(([a, x], [b, y]) => x.variants.length - y.variants.length || a.localeCompare(b));
  for (const [name, { bp, variants, util, prop, value }] of entries) {
    const props = util === '[property]' ? { [prop]: value } : UTILITIES[util](value);
    const parts = variants.map(variant);
    // ::before y ::after necesitan un contenido para dibujarse
    if (parts.some((p) => p.element === '::before' || p.element === '::after') && util !== 'content') props.content = 'var(--gm-content, "")';
    const body = Object.entries(props).map(([p, v]) => `${p}: ${v};`).join(' ');
    const parent = parts.map((p) => p.parent ?? '').join('');
    const pseudo = parts.map((p) => p.pseudo ?? '').join('');
    const element = parts.map((p) => p.element ?? '').join('');
    const selector = `${parent}.${escapeClass(name)}${pseudo}`;
    let rule = `${selector}${element} { ${body} }`;
    // Con columnas propias, cada hijo ocupa una (en .gm-grid ocupan las 12 si no llevan gm-col-…)
    if (util === 'grid-cols') rule += `\n${selector} > * { grid-column: auto; }`;
    for (const media of parts.filter((p) => p.media).map((p) => p.media)) rule = `@media ${media} { ${rule.replace(/\n/g, ' ')} }`;
    rules[bp].push(rule);
  }
  let css = `/* GlassMarshmallow · arbitrary values. GENERATED by "npx glassmarshmallow build": do not edit by hand.
   Link it after glassmarshmallow.css. ${found.size} classes. */\n`;
  // En la última subcapa del framework (glassmarshmallow.extra): gana a las demás clases del framework y el CSS
  // propio, sin capa, sigue ganando. El orden de las subcapas va delante por si este archivo se enlaza el primero
  let body = rules[''].join('\n') + '\n';
  for (const [bp, width] of Object.entries(BREAKPOINTS)) {
    if (rules[bp].length) body += `@media (min-width: ${width}) {\n${rules[bp].map((r) => `  ${r.replace(/\n/g, '\n  ')}`).join('\n')}\n}\n`;
  }
  css += `@layer glassmarshmallow.tokens, glassmarshmallow.base, glassmarshmallow.layout, glassmarshmallow.icons, glassmarshmallow.components, glassmarshmallow.theme, glassmarshmallow.utilities, glassmarshmallow.extra;\n@layer glassmarshmallow.extra {\n${body.trim().replace(/^/gm, '  ')}\n}\n`;
  const previous = existsSync(outFile) ? readFileSync(outFile, 'utf8') : '';
  if (css !== previous) writeFileSync(outFile, css);
  return found.size;
}

// --- Línea de órdenes ---
const args = process.argv.slice(2);
const command = args[0];
const option = (name) => args.flatMap((a, i) => (a === name && args[i + 1] ? [args[i + 1]] : []));
if (command !== 'build') {
  console.log(`Usage: npx glassmarshmallow build [--content folder] [--out file.css] [--watch]
  Finds classes with brackets (gm-z-[5], gm-mt-[1.75rem], gm-md-max-w-[52rem]) and writes their CSS.`);
  process.exit(command ? 1 : 0);
}
const dirs = option('--content').length ? option('--content').map((d) => resolve(d)) : [process.cwd()];
const outFile = resolve(option('--out')[0] ?? 'glassmarshmallow.extra.css');
const run = () => {
  const count = build(dirs, outFile);
  console.log(`${relative(process.cwd(), outFile) || outFile}: ${count} classes with arbitrary values`);
};
run();
if (args.includes('--watch')) {
  console.log('Watching for changes (Ctrl + C to stop)…');
  let timer;
  for (const dir of dirs) {
    watch(dir, { recursive: true }, (_, file) => {
      if (!file || file.split(/[\\/]/).some((part) => IGNORE.has(part)) || resolve(dir, file) === outFile) return;
      clearTimeout(timer);
      timer = setTimeout(run, 100);
    });
  }
}
