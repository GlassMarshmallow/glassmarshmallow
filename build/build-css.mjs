// Junta los archivos de css/ en uno solo (dist/css/glassmarshmallow.css) y crea la versión minificada.
// Uso: node build/build-css.mjs
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'css');
const outDir = join(root, 'dist', 'css');

/** Sustituye cada @import "./archivo.css" por el contenido del archivo (dentro de su capa si lleva layer(…)). */
function bundle(file) {
  const css = readFileSync(join(srcDir, file), 'utf8');
  return css.replace(/@import\s+"\.\/([^"]+)"(?:\s+layer\(([\w-]+)\))?;/g, (_, name, layer) =>
    layer ? `@layer ${layer} {\n${bundle(name).trim()}\n}` : bundle(name).trim());
}

// Minificado sencillo: sin comentarios (salvo los que empiezan por /*!), espacios ni saltos de línea sobrantes.
function minify(css) {
  return css
    .replace(/\/\*(?!!)[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{};,>])\s*/g, '$1')
    .replace(/:\s+/g, ':') // solo el espacio de después: «.a :hover» (descendiente) no cambia
    .replace(/;}/g, '}')
    .trim();
}

const css = bundle('glassmarshmallow.css') + '\n';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'glassmarshmallow.css'), css);
writeFileSync(join(outDir, 'glassmarshmallow.min.css'), minify(css) + '\n');
// La letra (opcional) va aparte, con su archivo en dist/fonts (el CSS la busca en ../fonts)
const font = readFileSync(join(srcDir, 'glassmarshmallow-font.css'), 'utf8');
writeFileSync(join(outDir, 'glassmarshmallow-font.css'), font);
writeFileSync(join(outDir, 'glassmarshmallow-font.min.css'), minify(font) + '\n');
mkdirSync(join(root, 'dist', 'fonts'), { recursive: true });
for (const file of ['montserrat-latin.woff2', 'OFL.txt']) {
  copyFileSync(join(root, 'fonts', file), join(root, 'dist', 'fonts', file));
}
console.log(`dist/css/glassmarshmallow.css (${Math.round(css.length / 1024)} kB) y glassmarshmallow.min.css`);
