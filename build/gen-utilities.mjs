// Genera css/utilities-layout.css: las utilidades al estilo Tailwind (espaciado, tamaños, posición, desbordamiento,
// texto, imágenes, interacción, bordes, sombras, efectos, animaciones, flex y mostrar u ocultar), con prefijo gm- y, las que lo necesitan, por punto de corte.
// Uso: node build/gen-utilities.mjs (después, npm run css para el archivo final).
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

/** Puntos de corte de GlassMarshmallow (de móvil hacia arriba) */
const BREAKPOINTS = [
  ['sm', 600],
  ['md', 860],
  ['lg', 1100],
  ['xl', 1300],
];

/** Escala de espaciado: el número es la clase (gm-mt-4) y el valor, en rem (4 → 1 rem, como Tailwind) */
const SPACE = { 0: '0', 1: '.25rem', 2: '.5rem', 3: '.75rem', 4: '1rem', 5: '1.25rem', 6: '1.5rem', 8: '2rem', 10: '2.5rem', 12: '3rem', 16: '4rem' };

/** Tamaños de letra: gm-text-lg… (los de Tailwind, en rem) */
const TEXT_SIZES = { xs: '.75rem', sm: '.875rem', base: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem' };

const rule = (name, body) => `.${name} { ${body} }`;

/** Clases que también tienen versión por punto de corte (gm-md-…) */
function responsive() {
  const out = [];
  // Espaciado: margen y relleno, con lados lógicos (s = inicio, e = final: izquierda y derecha en español)
  const sides = {
    '': (p) => [p],
    x: (p) => [`${p}-inline`],
    y: (p) => [`${p}-block`],
    t: (p) => [`${p}-top`],
    b: (p) => [`${p}-bottom`],
    s: (p) => [`${p}-inline-start`],
    e: (p) => [`${p}-inline-end`],
  };
  for (const [short, prop] of [['m', 'margin'], ['p', 'padding']]) {
    for (const [side, props] of Object.entries(sides)) {
      for (const [key, value] of Object.entries(SPACE)) {
        out.push(rule(`${short}${side}-${key}`, props(prop).map((p) => `${p}: ${value};`).join(' ')));
      }
    }
  }
  for (const side of ['', 'x', 'y', 't', 'b', 's', 'e']) {
    out.push(rule(`m${side}-auto`, sides[side]('margin').map((p) => `${p}: auto;`).join(' ')));
  }
  // Separación entre hijos (flex y cuadrícula); también cambia la de .gm-grid
  for (const [key, value] of Object.entries(SPACE)) out.push(rule(`gap-${key}`, `--gm-gap: ${value}; gap: ${value};`));
  // Mostrar y ocultar
  for (const [name, value] of [['hidden', 'none'], ['block', 'block'], ['inline', 'inline'], ['inline-block', 'inline-block'], ['flex', 'flex'], ['inline-flex', 'inline-flex'], ['grid', 'grid']]) {
    out.push(rule(name, `display: ${value};`));
  }
  // Solo «display», sin nada más (gm-grid es además la cuadrícula de 12 columnas: para una cuadrícula simple,
  // gm-d-grid). Los mismos nombres que Bootstrap (d-flex, d-grid…)
  for (const value of ['none', 'block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'contents']) {
    out.push(rule(`d-${value}`, `display: ${value};`));
  }
  // Flex
  out.push(rule('flex-row', 'flex-direction: row;'), rule('flex-col', 'flex-direction: column;'), rule('flex-wrap', 'flex-wrap: wrap;'), rule('flex-nowrap', 'flex-wrap: nowrap;'));
  for (const [name, value] of [['start', 'flex-start'], ['center', 'center'], ['end', 'flex-end'], ['stretch', 'stretch'], ['baseline', 'baseline']]) out.push(rule(`items-${name}`, `align-items: ${value};`));
  for (const [name, value] of [['start', 'flex-start'], ['center', 'center'], ['end', 'flex-end'], ['between', 'space-between'], ['around', 'space-around'], ['evenly', 'space-evenly']]) out.push(rule(`justify-${name}`, `justify-content: ${value};`));
  // Filas de una cuadrícula o de un flex con varias líneas
  for (const [name, value] of [['start', 'start'], ['center', 'center'], ['end', 'end'], ['between', 'space-between'], ['stretch', 'stretch']]) out.push(rule(`content-${name}`, `align-content: ${value};`));
  // Texto
  out.push(rule('text-start', 'text-align: start;'), rule('text-center', 'text-align: center;'), rule('text-end', 'text-align: end;'));
  // Anchos más usados
  out.push(rule('w-full', 'width: 100%;'), rule('w-auto', 'width: auto;'), rule('w-fit', 'width: fit-content;'));
  // Posición
  for (const value of ['static', 'relative', 'absolute', 'fixed', 'sticky']) out.push(rule(value, `position: ${value};`));
  // Tamaño de letra (en rem, como Tailwind)
  for (const [name, value] of Object.entries(TEXT_SIZES)) out.push(rule(`text-${name}`, `font-size: ${value};`));
  return out;
}

/** Clases sin versión por punto de corte */
function fixed() {
  const out = [];
  // Tamaños
  out.push(
    '/* Tamaños */',
    rule('w-25', 'width: 25%;'), rule('w-50', 'width: 50%;'), rule('w-75', 'width: 75%;'),
    rule('h-full', 'height: 100%;'), rule('h-auto', 'height: auto;'), rule('h-screen', 'height: 100dvh;'),
    rule('min-w-0', 'min-width: 0;'), rule('min-w-full', 'min-width: 100%;'),
    rule('min-h-0', 'min-height: 0;'), rule('min-h-screen', 'min-height: 100dvh;'),
    rule('max-w-full', 'max-width: 100%;'), rule('max-w-none', 'max-width: none;'),
    rule('max-w-prose', 'max-width: 65ch;'),
  );
  for (const [name, value] of [['xs', '20rem'], ['sm', '24rem'], ['md', '28rem'], ['lg', '32rem'], ['xl', '36rem'], ['2xl', '42rem'], ['3xl', '48rem'], ['4xl', '56rem']]) {
    out.push(rule(`max-w-${name}`, `max-width: ${value};`));
  }
  // Flex: crecer y encoger
  out.push('/* Flex: crecer y encoger */', rule('flex-1', 'flex: 1 1 0%;'), rule('flex-auto', 'flex: 1 1 auto;'), rule('flex-none', 'flex: none;'), rule('grow', 'flex-grow: 1;'), rule('shrink-0', 'flex-shrink: 0;'));
  // Posición: dónde se coloca y en qué capa
  out.push(
    '/* Posición: distancias y capas */',
    rule('inset-0', 'inset: 0;'), rule('inset-x-0', 'inset-inline: 0;'), rule('inset-y-0', 'inset-block: 0;'),
    rule('top-0', 'top: 0;'), rule('bottom-0', 'bottom: 0;'), rule('start-0', 'inset-inline-start: 0;'), rule('end-0', 'inset-inline-end: 0;'),
  );
  for (const value of [0, 10, 20, 30, 40, 50]) out.push(rule(`z-${value}`, `z-index: ${value};`));
  out.push(rule('z-auto', 'z-index: auto;'));
  // Desbordamiento
  out.push('/* Desbordamiento */');
  for (const value of ['auto', 'hidden', 'clip', 'visible', 'scroll']) out.push(rule(`overflow-${value}`, `overflow: ${value};`));
  for (const axis of ['x', 'y']) for (const value of ['auto', 'hidden', 'clip', 'visible', 'scroll']) out.push(rule(`overflow-${axis}-${value}`, `overflow-${axis}: ${value};`));
  // Texto: grosor, interlineado, mayúsculas, estilo, decoración y cortes de línea
  out.push('/* Texto: grosor */');
  for (const [name, value] of [['light', 300], ['normal', 400], ['medium', 500], ['semibold', 600], ['bold', 700], ['extrabold', 800]]) out.push(rule(`font-${name}`, `font-weight: ${value};`));
  out.push('/* Texto: interlineado */');
  for (const [name, value] of [['none', 1], ['tight', 1.25], ['snug', 1.375], ['normal', 1.5], ['relaxed', 1.7], ['loose', 2]]) out.push(rule(`leading-${name}`, `line-height: ${value};`));
  out.push(
    '/* Texto: mayúsculas, cursiva, subrayado y cortes de línea */',
    rule('uppercase', 'text-transform: uppercase;'), rule('lowercase', 'text-transform: lowercase;'),
    rule('capitalize', 'text-transform: capitalize;'), rule('normal-case', 'text-transform: none;'),
    rule('italic', 'font-style: italic;'), rule('not-italic', 'font-style: normal;'),
    rule('underline', 'text-decoration-line: underline;'), rule('line-through', 'text-decoration-line: line-through;'),
    rule('no-underline', 'text-decoration-line: none;'),
    rule('nowrap', 'white-space: nowrap;'), rule('truncate', 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;'),
    rule('break-words', 'overflow-wrap: anywhere;'), rule('text-balance', 'text-wrap: balance;'), rule('text-pretty', 'text-wrap: pretty;'),
    '/* Listas: sin viñetas ni sangría (para menús, enlaces seguidos…) */',
    rule('list-none', 'padding-inline-start: 0; list-style: none;'),
  );
  // Imágenes y vídeos: proporción y cómo llenan su caja
  out.push(
    '/* Imágenes y vídeos: proporción y ajuste */',
    rule('aspect-square', 'aspect-ratio: 1 / 1;'), rule('aspect-video', 'aspect-ratio: 16 / 9;'), rule('aspect-auto', 'aspect-ratio: auto;'),
    rule('object-cover', 'object-fit: cover;'), rule('object-contain', 'object-fit: contain;'),
  );
  // Interacción y visibilidad
  out.push(
    '/* Interacción y visibilidad */',
    rule('cursor-pointer', 'cursor: pointer;'), rule('cursor-default', 'cursor: default;'), rule('cursor-not-allowed', 'cursor: not-allowed;'),
    rule('pointer-events-none', 'pointer-events: none;'), rule('pointer-events-auto', 'pointer-events: auto;'),
    rule('select-none', '-webkit-user-select: none; user-select: none;'), rule('select-all', '-webkit-user-select: all; user-select: all;'),
    rule('visible', 'visibility: visible;'), rule('invisible', 'visibility: hidden;'),
  );
  // Bordes y radios (los del framework)
  out.push(
    '/* Bordes y radios */',
    rule('border', 'border: 1px solid var(--gm-line);'), rule('border-strong', 'border: 1px solid var(--gm-line-strong);'), rule('border-0', 'border: 0;'),
    rule('border-t', 'border-top: 1px solid var(--gm-line);'), rule('border-b', 'border-bottom: 1px solid var(--gm-line);'),
    rule('rounded-none', 'border-radius: 0;'), rule('rounded-sm', 'border-radius: var(--gm-radius-sm);'), rule('rounded', 'border-radius: var(--gm-radius-md);'),
    rule('rounded-md', 'border-radius: var(--gm-radius-md);'), rule('rounded-lg', 'border-radius: var(--gm-radius-lg);'),
    rule('rounded-pill', 'border-radius: var(--gm-radius-pill);'), rule('rounded-full', 'border-radius: 50%;'),
  );
  // Sombras (las del framework, que cambian con el modo oscuro)
  out.push('/* Sombras */', rule('shadow-none', 'box-shadow: none;'), rule('shadow-sm', 'box-shadow: var(--gm-shadow-sm);'), rule('shadow', 'box-shadow: var(--gm-shadow-sm);'), rule('shadow-md', 'box-shadow: var(--gm-shadow-md);'), rule('shadow-lg', 'box-shadow: var(--gm-shadow-hover);'));
  // Efectos: cristal, desenfoque y opacidad
  out.push(
    '/* Efectos: cristal, desenfoque del fondo y opacidad */',
    rule('glass', 'border: 1px solid var(--gm-surface-glass-border); background: var(--gm-surface); -webkit-backdrop-filter: blur(var(--gm-blur)); backdrop-filter: blur(var(--gm-blur));'),
  );
  for (const [name, value] of [['sm', '7px'], ['md', '12px'], ['lg', '20px'], ['xl', '32px']]) {
    out.push(rule(`blur-${name}`, `-webkit-backdrop-filter: blur(${value}); backdrop-filter: blur(${value});`));
  }
  for (const value of [0, 25, 50, 75, 100]) out.push(rule(`opacity-${value}`, `opacity: ${value / 100};`));
  // Animaciones (base.css las quita todas si la persona pide menos movimiento)
  const EASE = 'cubic-bezier(.2, .8, .2, 1)';
  const BOUNCE = 'cubic-bezier(.34, 1.56, .64, 1)';
  const anim = (name, keyframes, value) => out.push(rule(`animate-${name}`, `animation: gm-${name} ${value};`), `@keyframes gm-${name} { ${keyframes} }`);
  out.push(
    '/* Animaciones (se quitan solas si la persona pide menos movimiento: ver base.css) */',
    rule('transition', 'transition: color .2s, background-color .2s, border-color .2s, box-shadow .2s, opacity .2s, transform .2s;'),
    '/* Entrar */',
  );
  anim('fade-in', 'from { opacity: 0; }', '.8s ease both');
  anim('slide-up', 'from { opacity: 0; transform: translateY(12px); }', `.45s ${EASE} both`);
  anim('slide-down', 'from { opacity: 0; transform: translateY(-12px); }', `.45s ${EASE} both`);
  anim('slide-left', 'from { opacity: 0; transform: translateX(-16px); }', `.45s ${EASE} both`);
  anim('slide-right', 'from { opacity: 0; transform: translateX(16px); }', `.45s ${EASE} both`);
  anim('zoom-in', 'from { opacity: 0; transform: scale(.94); }', `.35s ${EASE} both`);
  anim('pop', 'from { opacity: 0; transform: scale(.9); }', `.4s ${BOUNCE} both`);
  // Del portfolio: las tecnologías suben, se enfocan y su logo aparece girando con un rebote
  anim('blur-in', 'from { opacity: 0; transform: translateY(12px) scale(.96); filter: blur(4px); }', `.45s ${EASE} both`);
  anim('spin-in', 'from { opacity: 0; transform: scale(.3) rotate(-20deg); }', `.5s ${BOUNCE} both`);
  out.push('/* Salir */');
  anim('fade-out', 'to { opacity: 0; }', '.6s ease both');
  anim('slide-out', 'to { opacity: 0; transform: translateY(12px); }', `.3s ${EASE} both`);
  anim('zoom-out', 'to { opacity: 0; transform: scale(.94); }', '.3s ease both');
  out.push('/* Llamar la atención */');
  anim('bounce', '0%, 100% { transform: translateY(-20%); animation-timing-function: cubic-bezier(.8, 0, 1, 1); } 50% { transform: none; animation-timing-function: cubic-bezier(0, 0, .2, 1); }', '1s infinite');
  anim('shake', '15%, 45%, 75% { transform: translateX(-6px); } 30%, 60%, 90% { transform: translateX(6px); }', '.5s ease both');
  anim('heartbeat', '0%, 40%, 100% { transform: scale(1); } 15%, 55% { transform: scale(1.12); }', '1.4s ease-in-out infinite');
  anim('ping', '75%, 100% { transform: scale(2); opacity: 0; }', '1s cubic-bezier(0, 0, .2, 1) infinite');
  out.push('/* Mientras carga */');
  anim('spin', 'to { transform: rotate(360deg); }', '.8s linear infinite');
  anim('pulse', '50% { opacity: .5; }', '2s ease-in-out infinite');
  out.push(
    rule('animate-shimmer', 'background: linear-gradient(90deg, var(--gm-tag) 25%, var(--gm-tag-hover) 50%, var(--gm-tag) 75%) 0 0 / 200% 100%; animation: gm-shimmer 1.4s linear infinite;'),
    '@keyframes gm-shimmer { from { background-position: 100% 0; } to { background-position: -100% 0; } }',
  );
  // Duración y retardo
  out.push('/* Duración y retardo (de animaciones y transiciones) */');
  for (const ms of [150, 200, 300, 500, 700, 1000]) out.push(rule(`duration-${ms}`, `animation-duration: ${ms}ms; transition-duration: ${ms}ms;`));
  for (const ms of [100, 200, 300, 500, 700, 1000]) out.push(rule(`delay-${ms}`, `animation-delay: ${ms}ms; transition-delay: ${ms}ms;`));
  // Cascada del portfolio: los hijos entran uno detrás de otro (40 ms entre cada uno)
  out.push(
    '/* Cascada (la de las tecnologías del portfolio): cada hijo entra 40 ms después del anterior. Por defecto con',
    '   blur-in; para otra, pon su clase gm-animate-… en los hijos */',
    rule('stagger > *', `animation: gm-blur-in .45s ${EASE} both;`),
  );
  for (let n = 2; n <= 20; n++) out.push(rule(`stagger > :nth-child(${n})`, `animation-delay: ${(n - 1) * 40}ms;`));
  // Cuenta atrás de My MTV Box: el botón se llena de izquierda a derecha en --gm-countdown (10 s por defecto)
  out.push(
    '/* Cuenta atrás (el botón de «siguiente episodio» de My MTV Box): se llena en --gm-countdown, 10 s por defecto */',
    rule('countdown', 'position: relative; overflow: hidden; isolation: isolate;'),
    rule('countdown::before', 'position: absolute; z-index: -1; inset: 0; width: 0; background: var(--gm-countdown-fill, rgb(255 255 255 / .35)); content: ""; animation: gm-countdown var(--gm-countdown, 10s) linear forwards;'),
    '@keyframes gm-countdown { to { width: 100%; } }',
  );
  // Al hacer scroll: aparece al entrar en la pantalla (solo en navegadores con animaciones ligadas al scroll)
  out.push(
    '/* Al hacer scroll: sube y aparece al entrar en la pantalla, donde el navegador lo permite; en el resto, quieto */',
    '@supports (animation-timeline: view()) {',
    `  .gm-animate-on-scroll { animation: gm-slide-up linear both; animation-timeline: view(); animation-range: entry 0% cover 30%; }`,
    '}',
  );
  return out;
}

const prefix = (rules, p) => rules.map((r) => (r.startsWith('.') ? r.replace(/^\.(\S+)/, (_, name) => `.gm-${p}${name}`) : r));

const base = responsive();
const parts = [
  `/* ==========================================================================
   glassmarshmallow · Utilidades (al estilo Tailwind)
   GENERADO por build/gen-utilities.mjs: no editar a mano; cambia el generador y vuelve a ejecutarlo.
   Espaciado (4 = 1 rem), mostrar y ocultar, flex, alineación de texto, anchos, posición y tamaño de letra llevan
   versión por punto de corte: gm-md-mt-6 se aplica desde 860 px (53,75 rem). El resto, sin versión por punto de corte.
   ========================================================================== */`,
  '',
  ...prefix(base, ''),
  '',
  ...prefix(fixed(), ''),
];
for (const [name, width] of BREAKPOINTS) {
  parts.push('', `@media (min-width: ${width / 16}rem) {`, ...prefix(base, `${name}-`).map((r) => `  ${r}`), '}');
}
writeFileSync(join(root, 'css', 'utilities-layout.css'), parts.join('\n') + '\n');
console.log(`css/utilities-layout.css (${base.length} clases por punto de corte)`);
