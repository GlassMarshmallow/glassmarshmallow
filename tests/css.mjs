// Pruebas del CSS del framework. Uso: npm test
// 1. Se compila (npm run css) y cada archivo (el completo, el núcleo y cada familia, normal y minificado) está completo:
//    llaves equilibradas, el orden de las subcapas al principio y todo dentro de alguna subcapa de glassmarshmallow.
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
const dist = join(root, 'dist/css');
const css = readFileSync(join(dist, 'glassmarshmallow.css'), 'utf8');
const ORDER = '@layer glassmarshmallow.tokens, glassmarshmallow.base, glassmarshmallow.layout, glassmarshmallow.icons, glassmarshmallow.components, glassmarshmallow.theme, glassmarshmallow.utilities, glassmarshmallow.extra;';
const entries = ['glassmarshmallow', 'glassmarshmallow-core', ...readdirSync(join(dist, 'components')).filter((f) => f.endsWith('.css') && !f.endsWith('.min.css')).map((f) => `components/${f.slice(0, -4)}`)];

for (const entry of entries) {
  for (const name of [`${entry}.css`, `${entry}.min.css`]) {
    const text = readFileSync(join(dist, name), 'utf8');
    const code = text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, '""');
    // Llaves equilibradas (sin contar las de los comentarios ni las de los textos entre comillas)
    let depth = 0;
    for (const c of code) { if (c === '{') depth++; else if (c === '}') depth--; if (depth < 0) break; }
    check(depth === 0, `${name}: las llaves no están equilibradas (${depth})`);
    // El orden de las subcapas, lo primero: así no importa en qué orden se enlacen los archivos
    const statement = code.trim().slice(0, code.trim().indexOf(';') + 1);
    check(statement.replace(/\s+/g, '') === ORDER.replace(/\s+/g, ''), `${name}: no empieza por el orden de las subcapas`);
    // Todo dentro de alguna subcapa: fuera solo quedan la cabecera y el orden
    const rest = code.trim().slice(statement.length);
    let level = 0; let stray = '';
    for (let i = 0; i < rest.length; i++) {
      const open = level === 0 && /^@layer glassmarshmallow\.[a-z]+\s*\{/.exec(rest.slice(i, i + 50));
      if (open) { level = 1; i += open[0].length - 1; continue; }
      const c = rest[i];
      if (c === '{') level++; else if (c === '}') level--; else if (level === 0 && !/\s/.test(c)) stray += c;
    }
    check(!stray, `${name}: hay CSS fuera de las subcapas: «${stray.slice(0, 80)}»`);
  }
}

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
console.log(`✓ ${entries.length} archivos (completo, núcleo y familias) completos y en sus subcapas; ${known.size} clases; los ejemplos de ${files.length} páginas usan solo clases que existen`);
