// Junta los archivos de css/ y crea, cada uno con su versión minificada (.min.css):
// - dist/css/glassmarshmallow.css: todo el framework;
// - dist/css/glassmarshmallow-core.css: el núcleo (colores, base, maquetación, tema, utilidades y fondo), sin componentes;
// - dist/css/components/<familia>.css: cada familia de componentes, para añadirla al núcleo.
// Uso: node build/build-css.mjs
import { copyFileSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'css');
const outDir = join(root, 'dist', 'css');

/** Sustituye cada @import "./archivo.css" por el contenido del archivo (dentro de su capa si lleva layer(…)). */
function bundle(file) {
  const css = readFileSync(join(srcDir, file), 'utf8');
  return css.replace(/@import\s+"\.\/([^"]+)"(?:\s+layer\(([\w.-]+)\))?;/g, (_, name, layer) =>
    layer ? `@layer ${layer} {\n${bundle(name).trim()}\n}` : bundle(name).trim());
}

// Minificado sencillo: sin comentarios (salvo los que empiezan por /*!), espacios ni saltos de línea sobrantes.
// Los textos entre comillas (content: "A > B", url("…")) se apartan antes y se devuelven tal cual al final, para no
// cambiar nada dentro de ellos; tampoco se confunde con un comentario un «/*» que vaya dentro de un texto.
function minify(css) {
  const strings = [];
  const code = css.replace(/"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\/\*[\s\S]*?\*\//g, (match) => {
    if (match.startsWith('/*')) return match.startsWith('/*!') ? match : '';
    strings.push(match);
    return `\u0000${strings.length - 1}\u0000`;
  });
  return code
    .replace(/\s+/g, ' ')
    .replace(/\s*([{};,>])\s*/g, '$1')
    .replace(/:\s+/g, ':') // solo el espacio de después: «.a :hover» (descendiente) no cambia
    .replace(/;}/g, '}')
    .trim()
    .replace(/\u0000(\d+)\u0000/g, (_, i) => strings[Number(i)]);
}

const write = (name, css) => {
  writeFileSync(join(outDir, `${name}.css`), css);
  writeFileSync(join(outDir, `${name}.min.css`), minify(css) + '\n');
};
const css = bundle('glassmarshmallow.css') + '\n';
mkdirSync(join(outDir, 'components'), { recursive: true });
write('glassmarshmallow', css);
write('glassmarshmallow-core', bundle('glassmarshmallow-core.css') + '\n');
// Cada familia: la cabecera y el orden de las subcapas (los mismos que el archivo completo) y sus componentes
const header = css.slice(0, css.indexOf('@layer glassmarshmallow.tokens {'));
const families = readdirSync(join(srcDir, 'components')).filter((f) => f.endsWith('.css')).map((f) => f.slice(0, -4));
for (const family of families) {
  write(`components/${family}`, `${header}@layer glassmarshmallow.components {\n${readFileSync(join(srcDir, 'components', `${family}.css`), 'utf8').trim()}\n}\n`);
}
// La letra (opcional) va aparte, con su archivo en dist/fonts (el CSS la busca en ../fonts)
const font = readFileSync(join(srcDir, 'glassmarshmallow-font.css'), 'utf8');
writeFileSync(join(outDir, 'glassmarshmallow-font.css'), font);
writeFileSync(join(outDir, 'glassmarshmallow-font.min.css'), minify(font) + '\n');
mkdirSync(join(root, 'dist', 'fonts'), { recursive: true });
for (const file of ['montserrat-latin.woff2', 'OFL.txt']) {
  copyFileSync(join(root, 'fonts', file), join(root, 'dist', 'fonts', file));
}
console.log(`dist/css/glassmarshmallow.css (${Math.round(css.length / 1024)} kB), glassmarshmallow-core.css y ${families.length} familias en dist/css/components (con sus .min.css)`);
