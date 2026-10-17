// Genera site/public/llms.txt y site/public/llms-full.txt a partir de la documentación en inglés, en el orden
// del menú (docs-nav.ts): el índice para que una IA sepa qué hay y dónde, y todo el texto en un solo archivo.
// Formato de llms.txt: https://llmstxt.org
// Uso: node build/build-llms.mjs (también se ejecuta antes de arrancar y de compilar la web).
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const site = join(root, 'site');
const nav = readFileSync(join(site, 'src/app/features/docs/data/docs-nav.ts'), 'utf8');
const en = readFileSync(join(site, 'src/app/core/i18n/en.ts'), 'utf8');

/** Secciones y páginas en el orden del menú */
const sections = [...nav.matchAll(/id: '([\w-]+)',[\s\S]*?pages: \[([^\]]*)\]/g)].map(([, id, list]) => ({
  id,
  pages: [...list.matchAll(/'([\w-]+)'/g)].map(([, page]) => `${id}/${page}`),
}));
const sectionTitle = (id) => en.match(new RegExp(`\\n\\s+'?${id}'?: '([^']+)'`))?.[1] ?? id;
const pageTitle = (path) => en.match(new RegExp(`'${path}': '([^']+)'`))?.[1] ?? path;

/** Primera frase de una página (lo que va después del título) para el índice */
const summary = (markdown) => markdown.split('\n').find((line) => line.trim() && !line.startsWith('#'))?.trim() ?? '';

const index = [
  '# GlassMarshmallow',
  '',
  '> A CSS framework with glass surfaces, a pastel palette, light and dark mode and WCAG 2.2 AA (and AAA whenever possible) accessibility. Plain CSS with the `gm-` prefix, optional dependency-free scripts and its own icon set. Components in the Bootstrap style and utilities in the Tailwind style.',
  '',
  'All the documentation in a single file: [llms-full.txt](/llms-full.txt).',
  '',
];
const full = ['# GlassMarshmallow documentation', ''];

for (const section of sections) {
  index.push(`## ${sectionTitle(section.id)}`, '');
  for (const path of section.pages) {
    const file = join(site, 'public/content/docs/en', `${path}.md`);
    if (!existsSync(file)) continue;
    const markdown = readFileSync(file, 'utf8').trim();
    index.push(`- [${pageTitle(path)}](/docs/${path}): ${summary(markdown)}`);
    full.push(`<!-- /docs/${path} -->`, markdown, '');
  }
  index.push('');
}

writeFileSync(join(site, 'public/llms.txt'), index.join('\n'));
writeFileSync(join(site, 'public/llms-full.txt'), full.join('\n'));
console.log(`llms.txt y llms-full.txt (${Math.round(full.join('\n').length / 1024)} kB)`);
