# Degradados

Construye tus propios degradados con clases: una **dirección** (o una forma) y los **colores** de inicio, intermedio y final. Como los de Tailwind. Para hacerlo a ojo y copiar el resultado, tienes el [generador de degradados](/tools/gradient-generator).

## Dirección y colores

```html
<div class="gm-bg-linear-to-r gm-from-sky gm-to-lavender gm-rounded-md gm-p-8"></div>
```

| Clase | Qué hace |
| --- | --- |
| `gm-bg-linear-to-t` / `-tr` / `-r` / `-br` / `-b` / `-bl` / `-l` / `-tl` | Degradado hacia arriba, arriba a la derecha, la derecha… |
| `gm-bg-radial` | Circular, desde el centro |
| `gm-bg-conic` | Cónico, girando alrededor del centro |
| `gm-from-…` | El color con el que empieza |
| `gm-via-…` | Un color intermedio (opcional) |
| `gm-to-…` | El color con el que acaba (si no se pone, transparente) |
| `gm-bg-none` | Quita el degradado |

Los colores son los de la paleta (`sky`, `blue`, `lavender`, `pink`, `peach`, `lemon`, `mint`, `coral`), `white`, `black`, `transparent`, `current` (el color del texto) y los de la página (`body`, `surface`, `text`, `accent`, `line`). Cualquier otro, con un [valor libre](/docs/utilities/arbitrary): `gm-from-[#5cdfeb]`.

## Con un color intermedio

```html
<div class="gm-bg-linear-to-r gm-from-sky gm-via-pink gm-to-mint gm-rounded-md gm-p-8"></div>
```

## Dónde empieza y acaba cada color

`gm-from-25%`, `gm-via-60%`, `gm-to-75%`…: de 0 a 100 en pasos de 10 (y 25 y 75). Antes de `gm-from-25%`, todo es del primer color; después de `gm-to-75%`, todo es del último.

```html
<div class="gm-bg-linear-to-r gm-from-sky gm-from-25% gm-to-lavender gm-to-75% gm-rounded-md gm-p-8"></div>
```

## Circular

Las luces del fondo de la portada son degradados circulares de un color a transparente.

```html
<div class="gm-bg-radial gm-from-pink gm-to-transparent gm-to-70% gm-rounded-md gm-p-16"></div>
```

## Cómo se hace: un fundido sin escalón

Para que algo se funda con la página (como el final de esta web), el degradado va del color de la página a transparente. Con solo dos colores se nota dónde empieza: se ve un «escalón». El truco es un color intermedio a medio camino, con la mitad de opacidad, un poco antes de la mitad: así empieza sin notarse y llega al color de la página suave.

```html-code
<div class="gm-absolute gm-inset-x-0 gm-bottom-0 gm-h-[17.5rem] gm-pointer-events-none
            gm-bg-linear-to-t gm-from-body gm-via-[color-mix(in_srgb,var(--gm-bg)_50%,transparent)] gm-via-30% gm-to-transparent"></div>
```

Funciona en los dos modos: `gm-from-body` es el fondo de la página en claro y en oscuro, y el intermedio es ese mismo color a la mitad (`color-mix(…)`).

## Accesibilidad

- Si pones texto sobre un degradado, comprueba el contraste en el punto **más claro** y en el **más oscuro** del fondo, no solo en uno.
- Un degradado es decoración: no lo uses como única forma de transmitir información.
