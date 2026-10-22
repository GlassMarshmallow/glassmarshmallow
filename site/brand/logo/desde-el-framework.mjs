// El logo en SVG a partir del código del framework: los degradados son los que dan las herramientas de la web
// (Degradado de un color y Generador de degradados) y las medidas, las del logo hecho con clases (de 512 de lado).
// Uso: node site/brand/logo/desde-el-framework.mjs  →  escribe site/public/logo.svg y site/brand/logo/glassmarshmallow.svg
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));

// Lo que copian las herramientas, tal cual
const CSS = {
  tileFill: 'linear-gradient(180deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.16) 100%)',
  tileEdge: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.6) 100%)',
  back: 'linear-gradient(45deg, #3cd2ff 0%, #8c64ff 100%)',
  front: 'linear-gradient(45deg, rgba(140, 100, 255, 0.85) 0%, rgba(255, 150, 70, 0.85) 100%)',
  gloss: 'linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 50%)',
  edge: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.25) 100%)',
};
// Medidas (de 512): la baldosa, sus esquinas y su borde; los paneles, su lado, sus esquinas y su borde de luz
const TILE = { radius: 114, edge: 5 };
const PANEL = { size: 190, radius: 44, edge: 5, back: 120, front: 202 };

/** Un degradado lineal de CSS como <linearGradient> de SVG (en un cuadrado, los grados van a sus esquinas) */
function gradient(id, css) {
  const [, angle, list] = css.match(/linear-gradient\((\d+)deg,\s*(.*)\)$/);
  const a = (Number(angle) * Math.PI) / 180;
  const dx = Math.sin(a), dy = -Math.cos(a);
  const k = 0.5 / Math.max(Math.abs(dx), Math.abs(dy));
  const [x1, y1, x2, y2] = [0.5 - dx * k, 0.5 - dy * k, 0.5 + dx * k, 0.5 + dy * k].map((v) => +v.toFixed(4));
  const stops = [...list.matchAll(/(#[0-9a-f]{6}|rgba\(([^)]*)\))\s+([\d.]+)%/gi)].map(([, color, rgba, pos]) => {
    let fill = color, opacity = 1;
    if (rgba) {
      const [r, g, b, o] = rgba.split(',').map((v) => Number(v.trim()));
      fill = `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
      opacity = o;
    }
    return `<stop offset="${+(pos / 100).toFixed(4)}" stop-color="${fill}"${opacity < 1 ? ` stop-opacity="${opacity}"` : ''}/>`;
  });
  return `<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${stops.join('')}</linearGradient>`;
}

const panel = (x, fill) =>
  `<rect x="${x}" y="${x}" width="${PANEL.size}" height="${PANEL.size}" rx="${PANEL.radius}" fill="url(#${fill})"/>` +
  `<rect x="${x}" y="${x}" width="${PANEL.size}" height="${PANEL.size}" rx="${PANEL.radius}" fill="url(#gloss)"/>` +
  `<rect x="${x}" y="${x}" width="${PANEL.size}" height="${PANEL.size}" rx="${PANEL.radius}" fill="none" stroke="url(#edge)" stroke-width="${PANEL.edge}"/>`;

const half = TILE.edge / 2;
const svg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">' +
  `<defs>${Object.entries(CSS).map(([id, css]) => gradient(id, css)).join('')}</defs>` +
  `<rect width="512" height="512" rx="${TILE.radius}" fill="url(#tileFill)"/>` +
  `<rect x="${half}" y="${half}" width="${512 - TILE.edge}" height="${512 - TILE.edge}" rx="${TILE.radius - half}" fill="none" stroke="url(#tileEdge)" stroke-width="${TILE.edge}"/>` +
  panel(PANEL.back, 'back') +
  panel(PANEL.front, 'front') +
  '</svg>\n';

writeFileSync(join(here, '../../public/logo.svg'), svg);
writeFileSync(join(here, 'glassmarshmallow.svg'), svg);
console.log('logo.svg a partir del código del framework');
