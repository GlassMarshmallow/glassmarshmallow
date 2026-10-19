# Valores libres

Para cuando la escala de las utilidades no tiene el valor que necesitas: escríbelo entre corchetes, como en Tailwind. `gm-z-[5]`, `gm-mt-[1.75rem]`, `gm-max-w-[52rem]`, `gm-bg-[#5cdfeb]`…

## Cómo funciona

El CSS del framework trae las utilidades con los valores de su escala (`gm-mt-4`, `gm-z-10`…). Los valores libres no pueden venir hechos, porque son infinitos: un pequeño programa, que viene con el paquete, lee tus archivos, encuentra las clases con corchetes y escribe **solo esas** en un CSS aparte.

```sh
npx glassmarshmallow build
```

Crea `glassmarshmallow.extra.css` con las clases que encuentre en la carpeta en la que estás. Enlázalo **después** del framework:

```html-code
<link rel="stylesheet" href="node_modules/glassmarshmallow/dist/css/glassmarshmallow.min.css">
<link rel="stylesheet" href="glassmarshmallow.extra.css">
```

Si no usas valores libres, no hace falta: el framework funciona igual sin el programa.

## Opciones

| Opción | Qué hace |
| --- | --- |
| `--content src` | Lee solo esa carpeta (se puede repetir: `--content src --content content`) |
| `--out src/extra.css` | Dónde escribe el CSS |
| `--watch` | Se queda vigilando y vuelve a escribirlo cada vez que guardas un archivo |

Lee archivos HTML, Markdown, JavaScript, TypeScript, Angular, React, Vue, Svelte, Astro y PHP, y se salta `node_modules`, `dist` y las carpetas ocultas.

## Qué se puede escribir

| Clase | Escribe |
| --- | --- |
| `gm-m-[…]`, `gm-mt-[…]`, `gm-px-[…]`… | Márgenes y rellenos, con los mismos lados que las utilidades |
| `gm-gap-[…]` | Separación entre hijos |
| `gm-w-[…]`, `gm-h-[…]`, `gm-min-w-[…]`, `gm-max-w-[…]`, `gm-min-h-[…]`, `gm-max-h-[…]` | Tamaños |
| `gm-z-[…]`, `gm-inset-[…]`, `gm-top-[…]`, `gm-bottom-[…]`, `gm-start-[…]`, `gm-end-[…]` | Capas y posición |
| `gm-text-[…]` | Tamaño de letra, o color si el valor es un color (`gm-text-[#c71c6f]`) |
| `gm-font-[…]`, `gm-leading-[…]`, `gm-tracking-[…]` | Grosor, interlineado y espacio entre letras |
| `gm-bg-[…]`, `gm-border-[…]`, `gm-rounded-[…]` | Fondo, borde (grosor o color) y esquinas |
| `gm-shadow-[…]`, `gm-opacity-[…]`, `gm-blur-[…]` | Sombra, opacidad y desenfoque del fondo |
| `gm-grid-cols-[…]`, `gm-grid-rows-[…]`, `gm-col-span-[…]`, `gm-basis-[…]`, `gm-order-[…]` | Cuadrícula y flex |
| `gm-aspect-[…]`, `gm-duration-[…]`, `gm-delay-[…]` | Proporción y tiempos de animación |

Dentro de los corchetes, **`_` es un espacio**: `gm-grid-cols-[1fr_2fr]` escribe `grid-template-columns: 1fr 2fr`. También funcionan con los [puntos de corte](/docs/layout/breakpoints): `gm-md-max-w-[52rem]`.

## Ejemplo

```html-code
<div class="gm-relative gm-h-[10rem]">
  <div class="gm-absolute gm-inset-0 gm-z-[5] gm-bg-[#5cdfeb] gm-rounded-[1.25rem]"></div>
  <p class="gm-relative gm-z-[6] gm-p-[1.75rem] gm-text-[1.6rem]">Encima del fondo</p>
</div>
<div class="gm-grid gm-grid-cols-[1fr_2fr] gm-md-grid-cols-[1fr_1fr_1fr] gm-gap-[.875rem]">…</div>
```

## Cuándo usarlos

- Antes, mira si la escala ya lo tiene (`gm-mt-6`, `gm-z-20`): así la web queda más uniforme.
- Usa `rem` para las medidas (`gm-mt-[1.75rem]`, no `gm-mt-[28px]`), para que crezcan con la letra de la persona.
- Si un mismo valor se repite mucho, quizá merece una variable o un componente propio.
- El programa rechaza los valores con `;`, `{`, `}` o `\`, para que una clase no pueda romper el resto del CSS.
