# Rendimiento

Cuánto pesa GlassMarshmallow y cómo cargar solo lo que necesitas. Las tablas se miden cada vez que se compila la
documentación, así que siempre corresponden a la versión actual.

## Tamaño

Lo que descarga el navegador. Los servidores y los CDN (jsDelivr, unpkg, Cloudflare…) lo envían comprimido, así
que lo que se descarga de verdad es la columna **gzip** o **Brotli**.

<!-- sizes -->
| Archivo | Tal cual | gzip | Brotli |
| --- | --- | --- | --- |
| `glassmarshmallow.min.css` | 210.5 kB | 35.0 kB | 24.5 kB |
| `glassmarshmallow.css` | 301.9 kB | 59.6 kB | 43.9 kB |
| `glassmarshmallow-core.min.css` | 131.4 kB | 21.5 kB | 13.1 kB |
| `components/basics.min.css` | 16.5 kB | 3.9 kB | 3.4 kB |
| `components/chat.min.css` | 6.9 kB | 2.0 kB | 1.7 kB |
| `components/forms.min.css` | 12.8 kB | 3.0 kB | 2.6 kB |
| `components/media.min.css` | 12.2 kB | 3.0 kB | 2.6 kB |
| `components/navigation.min.css` | 18.8 kB | 4.0 kB | 3.5 kB |
| `components/pages.min.css` | 9.7 kB | 2.6 kB | 2.2 kB |
| `components/tools.min.css` | 4.2 kB | 1.3 kB | 1.1 kB |
| `glassmarshmallow-font.min.css` | 0.6 kB | 0.4 kB | 0.4 kB |

El archivo de la letra (`montserrat-latin.woff2`) pesa 34.7 kB; ya va comprimido.

| Script | Tal cual | gzip | Brotli |
| --- | --- | --- | --- |
| `js/calendar.js` | 6.9 kB | 2.7 kB | 2.3 kB |
| `js/carousel.js` | 7.8 kB | 2.9 kB | 2.5 kB |
| `js/color-picker.js` | 15.5 kB | 5.5 kB | 4.8 kB |
| `js/dialog.js` | 2.5 kB | 1.1 kB | 0.9 kB |
| `js/fullscreen-menu.js` | 2.8 kB | 1.2 kB | 1.0 kB |
| `js/gallery.js` | 5.0 kB | 1.9 kB | 1.6 kB |
| `js/menu.js` | 3.6 kB | 1.4 kB | 1.2 kB |
| `js/player.js` | 15.9 kB | 4.6 kB | 4.1 kB |
| `js/range.js` | 1.2 kB | 0.6 kB | 0.5 kB |
| `js/search.js` | 5.3 kB | 1.9 kB | 1.7 kB |
| `js/ticker.js` | 1.7 kB | 0.8 kB | 0.7 kB |
<!-- /sizes -->

## Carga solo lo que necesitas

- **Enlaza el `.min.css`** en producción; el otro lleva comentarios para leerlo.
- **La letra es opcional.** `glassmarshmallow-font.css` añade Montserrat; sin él, el framework usa la letra del
  sistema y no descarga nada más. Mira [Tipografía](/docs/customize/typography).
- **Los scripts van uno a uno.** Cada componente que se mueve tiene su archivo y solo importas los que usas; las
  páginas sin menús, carruseles ni reproductores no necesitan nada de JavaScript.
- **Los valores libres** (`gm-mt-[1.75rem]`) solo se escriben si los usas: `npx glassmarshmallow build` pone
  solo esas clases en un archivo aparte.

## Cristal y desenfoque

El efecto de cristal usa `backdrop-filter: blur()`, que el navegador pinta con la tarjeta gráfica. Unos pocos
paneles de cristal en una página no son problema, ni en el móvil; decenas de paneles grandes unos encima de
otros, o desenfocar algo que se mueve (un vídeo, una animación) debajo del cristal, pueden hacer que el scroll
vaya menos suave en móviles antiguos. Si lo notas, usa una superficie sólida (`gm-bg-surface`) para los paneles
grandes y deja el cristal para los pequeños.

## Animaciones

La mayoría de las animaciones del framework solo cambian `opacity` y `transform`, que no obligan al navegador a
recolocar la página. Unas pocas cuestan algo más: `gm-animate-blur-in` también anima `filter`, el brillo y la barra
de progreso en movimiento animan la posición del fondo, y la cuenta atrás anima el ancho. Todas se quitan solas con
`prefers-reduced-motion`.
