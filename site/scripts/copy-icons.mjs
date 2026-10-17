// Copia los SVG de glassmarshmallow-icons a public/icons-svg, para que la web pueda mostrarlos y descargarlos
// (Angular no sirve archivos de fuera del proyecto). Se ejecuta antes de «start» y «build».
import { cpSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const from = join(here, '../../../glassmarshmallow-icons/icons');
const to = join(here, '../public/icons-svg');
rmSync(to, { recursive: true, force: true });
mkdirSync(to, { recursive: true });
const files = readdirSync(from).filter((file) => file.endsWith('.svg'));
for (const file of files) cpSync(join(from, file), join(to, file));
console.log(`${files.length} SVG → public/icons-svg`);
