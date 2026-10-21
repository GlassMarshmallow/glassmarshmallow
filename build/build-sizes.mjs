// Mide cuánto pesa lo que se descarga del framework y escribe las tablas en la página «Rendimiento» de la
// documentación (entre <!-- sizes --> y <!-- /sizes -->, en inglés y en español). Uso: node build/build-sizes.mjs
// (lo hace solo la web al compilarse). Las medidas: el archivo tal cual, comprimido con gzip y con Brotli.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { brotliCompressSync, gzipSync } from 'node:zlib';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const kb = (bytes) => `${(bytes / 1024).toFixed(1)} kB`;
const measure = (file) => {
  const data = readFileSync(join(root, file));
  return { raw: data.length, gzip: gzipSync(data, { level: 9 }).length, brotli: brotliCompressSync(data).length };
};
const row = (name, file) => { const m = measure(file); return `| ${name} | ${kb(m.raw)} | ${kb(m.gzip)} | ${kb(m.brotli)} |`; };

const css = [
  ['`glassmarshmallow.min.css`', 'dist/css/glassmarshmallow.min.css'],
  ['`glassmarshmallow.css`', 'dist/css/glassmarshmallow.css'],
  ['`glassmarshmallow-font.min.css`', 'dist/css/glassmarshmallow-font.min.css'],
];
const scripts = readdirSync(join(root, 'js')).filter((f) => f.endsWith('.js')).sort();
const font = measure('dist/fonts/montserrat-latin.woff2').raw;

const tables = {
  en: { file: 'File', raw: 'As is', script: 'Script', note: `The font file (\`montserrat-latin.woff2\`) is ${kb(font)}; it is already compressed.` },
  es: { file: 'Archivo', raw: 'Tal cual', script: 'Script', note: `El archivo de la letra (\`montserrat-latin.woff2\`) pesa ${kb(font)}; ya va comprimido.` },
};
for (const [lang, t] of Object.entries(tables)) {
  const head = (first) => `| ${first} | ${t.raw} | gzip | Brotli |\n| --- | --- | --- | --- |`;
  const block = [
    '<!-- sizes -->',
    head(t.file),
    ...css.map(([name, file]) => row(name, file)),
    '',
    t.note,
    '',
    head(t.script),
    ...scripts.map((f) => row(`\`js/${f}\``, `js/${f}`)),
    '<!-- /sizes -->',
  ].join('\n');
  const page = join(root, `site/public/content/docs/${lang}/getting-started/performance.md`);
  const text = readFileSync(page, 'utf8');
  writeFileSync(page, text.replace(/<!-- sizes -->[\s\S]*?<!-- \/sizes -->/, block));
}
console.log('Tamaños → getting-started/performance.md');
