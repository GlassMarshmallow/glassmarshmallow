# Utilidades

Clases pequeñas que hacen una sola cosa, para construir sin escribir CSS. Si es la primera vez, empieza por [Construir con utilidades](/docs/getting-started/utilities): ahí se explica cómo se leen los nombres, la escala, los tamaños de pantalla y las variantes.

Aquí están todas, agrupadas por lo que quieres hacer.

## Colocar las piezas

| Quiero… | Página | Por ejemplo |
| --- | --- | --- |
| Separar con margen o relleno | [Espaciado](/docs/utilities/spacing) | `gm-mt-4`, `gm-px-6` |
| Poner en fila o en columna y alinear | [Flex y alineación](/docs/utilities/flex) | `gm-d-flex gm-items-center gm-gap-3` |
| Hacer columnas | [Cuadrícula](/docs/layout/grid) | `gm-d-grid gm-md-grid-cols-3` |
| Encima de otra cosa, fija o pegada | [Posición y capas](/docs/utilities/position) | `gm-absolute gm-inset-0`, `gm-z-10` |
| Mostrar u ocultar según la pantalla | [Mostrar y ocultar](/docs/utilities/display) | `gm-d-none gm-md-d-block` |

## Tamaños

| Quiero… | Página | Por ejemplo |
| --- | --- | --- |
| Ancho, alto, mínimos y máximos | [Tamaños](/docs/utilities/sizing) | `gm-w-full`, `gm-max-w-md` |
| Una proporción o que la imagen llene su caja | [Imágenes y vídeos](/docs/utilities/media) | `gm-aspect-video`, `gm-object-cover` |
| Que lo que no cabe se recorte o se desplace | [Desbordamiento](/docs/utilities/overflow) | `gm-overflow-hidden` |

## Texto

| Quiero… | Página | Por ejemplo |
| --- | --- | --- |
| Tamaño, grosor, interlineado y forma | [Texto](/docs/utilities/text) | `gm-text-xl gm-font-bold` |
| Color del texto | [Color de texto](/docs/color/text) | `gm-text-muted`, `gm-text-sky` |

## Color y fondo

| Quiero… | Página | Por ejemplo |
| --- | --- | --- |
| Un color de fondo (con su texto encima) | [Fondo](/docs/color/background) | `gm-bg-surface`, `gm-bg-sky` |
| Un degradado propio | [Degradados](/docs/utilities/gradients) | `gm-bg-linear-to-r gm-from-sky gm-to-lavender` |
| Una imagen de fondo y cómo se coloca | [Fondos](/docs/utilities/backgrounds) | `gm-bg-cover gm-bg-center` |
| Los colores de un tema (pastel o cristal) | [Tema](/docs/color/theme) | `gm-theme-mint gm-theme-solid` |

## Bordes y sombras

| Quiero… | Página | Por ejemplo |
| --- | --- | --- |
| Bordes y esquinas redondeadas | [Bordes y radios](/docs/utilities/borders) | `gm-border gm-rounded-lg` |
| Sombras, también de color | [Sombras](/docs/utilities/shadows) | `gm-shadow-md`, `gm-shadow-sky` |

## Efectos y movimiento

| Quiero… | Página | Por ejemplo |
| --- | --- | --- |
| Cristal, desenfoque del fondo y opacidad | [Efectos](/docs/utilities/effects) | `gm-glass`, `gm-opacity-75` |
| Desenfocar, aclarar o poner en gris | [Filtros](/docs/utilities/filters) | `gm-grayscale` |
| Desvanecer hacia un lado o mezclar colores | [Máscaras y mezcla](/docs/utilities/masks) | `gm-mask-to-b` |
| Girar, escalar, mover y suavizar los cambios | [Transformaciones y transiciones](/docs/utilities/transforms) | `gm-rotate-6 gm-transition` |
| Que algo aparezca o llame la atención | [Animaciones](/docs/utilities/animations) | `gm-animate-fade-in` |
| El cursor, la selección o si se ve | [Interacción y visibilidad](/docs/utilities/interaction) | `gm-cursor-pointer` |

## Lo que no está en la escala

| Quiero… | Página | Por ejemplo |
| --- | --- | --- |
| Un valor exacto, cualquier propiedad, al pasar el ratón o en modo oscuro | [Valores libres](/docs/utilities/arbitrary) | `gm-mt-[1.75rem]`, `gm-hover:shadow-[…]`, `gm-dark:bg-[#0b0b0c]` |
