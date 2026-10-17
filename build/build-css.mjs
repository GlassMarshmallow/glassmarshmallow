// Junta los archivos de css/ en uno solo (dist/css/glassmarshmallow.css) y crea la versión minificada.
// Uso: node build/build-css.mjs
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'css');
const outDir = join(root, 'dist', 'css');

/** Sustituye cada @import "./archivo.css" por el contenido del archivo. */
function bundle(file) {
  const css = readFileSync(join(srcDir, file), 'utf8');
  return css.replace(/@import\s+"\.\/([^"]+)";/g, (_, name) => bundle(name).trim());
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
console.log(`dist/css/glassmarshmallow.css (${Math.round(css.length / 1024)} kB) y glassmarshmallow.min.css`);
