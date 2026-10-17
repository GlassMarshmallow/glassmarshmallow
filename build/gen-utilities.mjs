// Genera css/utilities-layout.css: las utilidades al estilo Tailwind (espaciado, tamaños, bordes, sombras,
// efectos, animaciones, flex y mostrar u ocultar), con prefijo gm- y, las que lo necesitan, por punto de corte.
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
  // Flex
  out.push(rule('flex-row', 'flex-direction: row;'), rule('flex-col', 'flex-direction: column;'), rule('flex-wrap', 'flex-wrap: wrap;'), rule('flex-nowrap', 'flex-wrap: nowrap;'));
  for (const [name, value] of [['start', 'flex-start'], ['center', 'center'], ['end', 'flex-end'], ['stretch', 'stretch'], ['baseline', 'baseline']]) out.push(rule(`items-${name}`, `align-items: ${value};`));
  for (const [name, value] of [['start', 'flex-start'], ['center', 'center'], ['end', 'flex-end'], ['between', 'space-between'], ['around', 'space-around'], ['evenly', 'space-evenly']]) out.push(rule(`justify-${name}`, `justify-content: ${value};`));
  // Texto
  out.push(rule('text-start', 'text-align: start;'), rule('text-center', 'text-align: center;'), rule('text-end', 'text-align: end;'));
  // Anchos más usados
  out.push(rule('w-full', 'width: 100%;'), rule('w-auto', 'width: auto;'), rule('w-fit', 'width: fit-content;'));
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
   Espaciado (4 = 1 rem), mostrar y ocultar, flex, alineación de texto y anchos llevan versión por punto de
   corte: gm-md-mt-6 se aplica desde 860 px. El resto, sin versión por punto de corte.
   ========================================================================== */`,
  '',
  ...prefix(base, ''),
  '',
  ...prefix(fixed(), ''),
];
for (const [name, width] of BREAKPOINTS) {
  parts.push('', `@media (min-width: ${width}px) {`, ...prefix(base, `${name}-`).map((r) => `  ${r}`), '}');
}
writeFileSync(join(root, 'css', 'utilities-layout.css'), parts.join('\n') + '\n');
console.log(`css/utilities-layout.css (${base.length} clases por punto de corte)`);
