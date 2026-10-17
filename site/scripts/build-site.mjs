// Construye la web completa para publicarla: inglés en «/» y español en «/es/», con sitemap.xml y robots.txt.
// Resultado en dist/web/browser (es la carpeta que se sube al servidor).
import { execSync } from 'node:child_process';
import { cpSync, existsSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const site = join(dirname(fileURLToPath(import.meta.url)), '..');
const domain = 'https://glassmarshmallow.com';
const run = (command) => execSync(command, { cwd: site, stdio: 'inherit' });

run('npx ng build');
run('npx ng build --configuration production,es');

const out = join(site, 'dist/web/browser');
const es = join(out, 'es');
rmSync(es, { recursive: true, force: true });
cpSync(join(site, 'dist/web-es/browser'), es, { recursive: true });

// Páginas: cada carpeta con index.html del inglés (las del español son las mismas, con /es/ delante)
const pages = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (path === es) continue;
    if (statSync(path).isDirectory()) walk(path);
    else if (name === 'index.html') pages.push(relative(out, dir).split('\\').join('/'));
  }
};
walk(out);
pages.sort();

const url = (lang, page) => `${domain}${lang === 'es' ? '/es' : ''}/${page ? `${page}/` : ''}`;
const entry = (lang, page) => {
  const alternates = ['en', 'es']
    .filter((code) => code === 'en' || existsSync(join(es, page, 'index.html')))
    .map((code) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${url(code, page)}"/>`);
  alternates.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${url('en', page)}"/>`);
  return `  <url>\n    <loc>${url(lang, page)}</loc>\n${alternates.join('\n')}\n  </url>`;
};
const entries = pages.flatMap((page) => [entry('en', page), ...(existsSync(join(es, page, 'index.html')) ? [entry('es', page)] : [])]);
writeFileSync(
  join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`,
);
writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${domain}/sitemap.xml\n`);
console.log(`${entries.length} páginas en sitemap.xml → dist/web/browser`);
