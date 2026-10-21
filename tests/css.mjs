// Pruebas del CSS del framework. Uso: npm test
// 1. Se compila (npm run css) y el resultado está completo: llaves equilibradas y todo dentro de @layer glassmarshmallow.
// 2. Todas las clases gm- que salen en los ejemplos de la documentación (en inglés y en español) existen en el CSS,
//    para que nadie copie un ejemplo con una clase que no hace nada.
import { execSync } from 'node:child_process';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const errors = [];
const check = (ok, message) => { if (!ok) errors.push(message); };

execSync('npm run css --silent', { cwd: root, stdio: 'ignore' });
const css = readFileSync(join(root, 'dist/css/glassmarshmallow.css'), 'utf8');
const min = readFileSync(join(root, 'dist/css/glassmarshmallow.min.css'), 'utf8');

// Llaves equilibradas (sin contar las de los comentarios ni las de los textos entre comillas)
for (const [name, text] of [['glassmarshmallow.css', css], ['glassmarshmallow.min.css', min]]) {
  const code = text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, '""');
  let depth = 0;
  for (const c of code) { if (c === '{') depth++; else if (c === '}') depth--; if (depth < 0) break; }
  check(depth === 0, `${name}: las llaves no están equilibradas (${depth})`);
}

// Todo dentro de la capa: fuera solo quedan la cabecera, los @property y los propios @layer
const outside = css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^@property [^\n]*$/gm, '');
let depth = 0; let stray = '';
for (let i = 0; i < outside.length; i++) {
  if (depth === 0 && outside.startsWith('@layer glassmarshmallow {', i)) { depth = 1; i += '@layer glassmarshmallow {'.length - 1; continue; }
  const c = outside[i];
  if (c === '{') depth++; else if (c === '}') depth--; else if (depth === 0 && !/\s/.test(c)) stray += c;
}
check(!stray, `glassmarshmallow.css: hay CSS fuera de @layer glassmarshmallow: «${stray.slice(0, 80)}»`);

// Las clases que existen: las del CSS del framework (sin escapar)
const known = new Set([...css.matchAll(/\.(gm-(?:\\.|[\w-])+)/g)].map((m) => m[1].replace(/\\(.)/g, '$1')));
// Clases que no llevan CSS a propósito: marcadores para los scripts o para las variantes
const markers = new Set(['gm-group']);

// Los ejemplos: bloques ```html de la documentación
const docs = join(root, 'site/public/content/docs');
const files = [];
const walk = (dir) => readdirSync(dir).forEach((name) => { const p = join(dir, name); statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') && files.push(p); });
walk(docs);
const missing = new Map();
for (const file of files) {
  const md = readFileSync(file, 'utf8');
  for (const block of md.matchAll(/```html[^\n]*\n([\s\S]*?)```/g)) {
    for (const attr of block[1].matchAll(/class="([^"]*)"/g)) {
      for (const cls of attr[1].split(/\s+/)) {
        // Los valores libres y las variantes (gm-mt-[…], gm-hover:…) los crea «npx glassmarshmallow build»
        if (!cls.startsWith('gm-') || /[[\]:{}…]/.test(cls) || known.has(cls) || markers.has(cls)) continue;
        const where = relative(docs, file);
        missing.set(cls, [...(missing.get(cls) ?? []), where]);
      }
    }
  }
}
for (const [cls, where] of missing) errors.push(`Ejemplo con una clase que no existe: ${cls} (${[...new Set(where)].join(', ')})`);

if (errors.length) {
  console.error(`✗ ${errors.length} problemas:\n  ${errors.join('\n  ')}`);
  process.exit(1);
}
console.log(`✓ CSS completo y dentro de la capa; ${known.size} clases; los ejemplos de ${files.length} páginas usan solo clases que existen`);
