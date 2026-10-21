// Accesibilidad de la web de documentación con axe-core (WCAG 2.2 A y AA): cada página en modo claro y oscuro, en el
// ordenador y en el móvil, con movimiento reducido. Uso: compila la web (npm --prefix site run build:site) y después npm run test:a11y
// Necesita Chrome o Chromium (CHROME_PATH para indicar dónde está).
// Fuera quedan las vistas previas de los generadores (.gm-tool__stage): enseñan los colores que elige la persona,
// así que su contraste depende de lo que pruebe en cada momento (y están marcadas como decorativas).
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { existsSync, mkdtempSync, readFileSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const web = join(root, 'site/dist/web/browser');
if (!existsSync(join(web, 'sitemap.xml'))) {
  console.error('✗ No está la web compilada: npm --prefix site run build:site');
  process.exit(1);
}
const axe = readFileSync(join(root, 'node_modules/axe-core/axe.min.js'), 'utf8');

// Las páginas: todas las del sitemap en inglés, unas pocas en español y tres iconos (son todos iguales)
const urls = [...readFileSync(join(web, 'sitemap.xml'), 'utf8').matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map((m) => m[1]);
const pages = [
  ...urls.filter((p) => !p.startsWith('/es/') && !/^\/icons\/./.test(p)),
  ...urls.filter((p) => /^\/icons\/./.test(p)).slice(0, 3),
  ...['/es/', '/es/docs/getting-started/introduction/', '/es/tools/', '/es/icons/'],
];

// Un servidor mínimo para la carpeta compilada (como nginx: /ruta/ → /ruta/index.html)
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2', '.json': 'application/json', '.md': 'text/markdown', '.txt': 'text/plain', '.xml': 'application/xml' };
const server = createServer((req, res) => {
  let path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[/\\])+/, '');
  let file = join(web, path);
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file)) file = join(web, path.startsWith('/es/') ? 'es/index.html' : 'index.html');
  res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' });
  res.end(readFileSync(file));
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}`;

const chromePath = process.env.CHROME_PATH ?? ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'].find(existsSync);
if (!chromePath) { console.error('✗ No encuentro Chrome: indica su ruta en CHROME_PATH'); process.exit(1); }
const port = 9500 + Math.floor(Math.random() * 400);
const chrome = spawn(chromePath, ['--headless=new', '--no-sandbox', `--remote-debugging-port=${port}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), 'gm-a11y-'))}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let targets; for (let i = 0; i < 80 && !targets; i++) { try { targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); } catch { await sleep(250); } }
const ws = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener('open', r));
let id = 0; const pending = new Map();
ws.addEventListener('message', (e) => { const m = JSON.parse(e.data); pending.get(m.id)?.(m); pending.delete(m.id); });
const send = (method, params = {}) => new Promise((r) => { const n = ++id; pending.set(n, r); ws.send(JSON.stringify({ id: n, method, params })); });
const run = async (expression) => (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result.result?.value;
const load = async (url) => {
  await send('Page.navigate', { url });
  for (let i = 0; i < 100; i++) { await sleep(100); if (await run('document.readyState === "complete" && !!document.querySelector("app-root *")')) break; }
  await run('document.fonts.ready.then(() => new Promise((r) => setTimeout(r, 400)))');
};

await send('Page.enable');
// Con «movimiento reducido» el framework quita las animaciones: axe mide el texto quieto y no a mitad de un fundido
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
const problems = [];
let checked = 0;
for (const [device, width, height, mobile] of [['ordenador', 1400, 900, false], ['móvil', 390, 844, true]]) {
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile });
  for (const theme of ['light', 'dark']) {
    await load(base + '/');
    await run(`localStorage.setItem('glassmarshmallow.theme', '${theme}'); true`);
    for (const page of pages) {
      await load(base + page);
      await run(axe);
      const result = await run(`axe.run({ exclude: [['.gm-tool__stage']] }, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] } })
        .then((r) => r.violations.map((v) => ({ id: v.id, impact: v.impact, help: v.help, targets: v.nodes.slice(0, 3).map((n) => n.target.join(' ')) })))`);
      checked++;
      for (const v of result ?? [{ id: 'sin-respuesta', help: 'axe no terminó', targets: [] }]) problems.push(`${page} (${device}, ${theme === 'light' ? 'claro' : 'oscuro'}): ${v.id} — ${v.help} · ${v.targets.join(' | ')}`);
    }
  }
}
ws.close(); chrome.kill(); server.close();

if (problems.length) {
  console.error(`✗ ${problems.length} problemas de accesibilidad en ${checked} revisiones:\n  ${problems.join('\n  ')}`);
  process.exit(1);
}
console.log(`✓ axe-core (WCAG 2.2 A y AA): 0 errores en ${pages.length} páginas × claro y oscuro × ordenador y móvil (${checked} revisiones)`);
