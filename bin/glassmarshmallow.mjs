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
import { existsSync, readdirSync, readFileSync, statSync, watch, writeFileSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

/** Puntos de corte del framework (los mismos que las utilidades: gm-md-… desde 53,75 rem) */
const BREAKPOINTS = { sm: '37.5rem', md: '53.75rem', lg: '68.75rem', xl: '81.25rem' };

const isColor = (v) => /^(#|rgb|hsl|oklch|oklab|lab|lch|color\(|var\(--gm-[\w-]*(color|text|bg|accent|line|surface|sky|blue|lavender|pink|peach|lemon|mint|coral|gray|white|black))/.test(v)
  || /^(transparent|currentColor|white|black|inherit)$/i.test(v);

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
  text: (v) => (isColor(v) ? { color: v } : { 'font-size': v }),
  font: (v) => ({ 'font-weight': v }),
  leading: (v) => ({ 'line-height': v }),
  tracking: (v) => ({ 'letter-spacing': v }),
  // Fondo, bordes y efectos
  bg: (v) => (isColor(v) ? { 'background-color': v } : { background: v }),
  rounded: (v) => ({ 'border-radius': v }),
  border: (v) => (isColor(v) ? { 'border-color': v } : { 'border-width': v, 'border-style': 'solid' }),
  shadow: (v) => ({ 'box-shadow': v }),
  opacity: (v) => ({ opacity: v }),
  blur: (v) => ({ '-webkit-backdrop-filter': `blur(${v})`, 'backdrop-filter': `blur(${v})` }),
  // Cuadrícula y flex
  'grid-cols': (v) => ({ 'grid-template-columns': v }), 'grid-rows': (v) => ({ 'grid-template-rows': v }),
  'col-span': (v) => ({ 'grid-column': `span ${v} / span ${v}` }),
  basis: (v) => ({ 'flex-basis': v }), order: (v) => ({ order: v }),
  // Imágenes y animaciones
  aspect: (v) => ({ 'aspect-ratio': v }),
  duration: (v) => ({ 'animation-duration': v, 'transition-duration': v }),
  delay: (v) => ({ 'animation-delay': v, 'transition-delay': v }),
};
// Los nombres más largos primero, para que «max-w» no se lea como «m»
const NAMES = Object.keys(UTILITIES).sort((a, b) => b.length - a.length);
const CLASS = new RegExp(`gm-(?:(${Object.keys(BREAKPOINTS).join('|')})-)?(${NAMES.map((n) => n.replace(/-/g, '\\-')).join('|')})-\\[([^\\]\\s"'\`<>]+)\\]`, 'g');

const EXTENSIONS = new Set(['.html', '.htm', '.md', '.mdx', '.js', '.mjs', '.jsx', '.ts', '.tsx', '.vue', '.svelte', '.astro', '.php', '.njk', '.liquid', '.hbs', '.twig', '.erb']);
const IGNORE = new Set(['node_modules', 'dist', 'build', '.git', '.angular', '.next', '.nuxt', '.svelte-kit', '.astro', 'coverage', 'vendor']);

/** Lo que va dentro del selector: el nombre de la clase con los caracteres especiales escapados */
const escapeClass = (name) => name.replace(/[^a-zA-Z0-9_-]/g, (c) => `\\${c}`);

/** El valor, con «_» como espacio. Se rechaza lo que podría romper el CSS */
function cleanValue(raw) {
  const value = raw.replace(/_/g, ' ');
  return /[;{}\\]/.test(value) ? null : value;
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
    for (const match of readFileSync(file, 'utf8').matchAll(CLASS)) {
      const [name, bp = '', util, raw] = match;
      const value = cleanValue(raw);
      if (value) found.set(name, { bp, util, value });
    }
  }
  const rules = { '': [] };
  for (const bp of Object.keys(BREAKPOINTS)) rules[bp] = [];
  for (const [name, { bp, util, value }] of [...found].sort(([a], [b]) => a.localeCompare(b))) {
    const props = UTILITIES[util](value);
    const body = Object.entries(props).map(([p, v]) => `${p}: ${v};`).join(' ');
    rules[bp].push(`.${escapeClass(name)} { ${body} }`);
    // Con columnas propias, cada hijo ocupa una (en .gm-grid ocupan las 12 si no llevan gm-col-…)
    if (util === 'grid-cols') rules[bp].push(`.${escapeClass(name)} > * { grid-column: auto; }`);
  }
  let css = `/* GlassMarshmallow · arbitrary values. GENERATED by "npx glassmarshmallow build": do not edit by hand.
   Link it after glassmarshmallow.css. ${found.size} classes. */\n`;
  css += rules[''].join('\n') + '\n';
  for (const [bp, width] of Object.entries(BREAKPOINTS)) {
    if (rules[bp].length) css += `@media (min-width: ${width}) {\n${rules[bp].map((r) => `  ${r}`).join('\n')}\n}\n`;
  }
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
