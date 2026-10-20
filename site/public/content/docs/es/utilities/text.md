# Texto

Tamaño, grosor, interlineado y forma del texto. Como las utilidades de [tipografía](https://tailwindcss.com/docs/font-size) de Tailwind. Para el color, mira [Color del texto](/docs/color/text); para alinearlo, `gm-text-start`, `gm-text-center` y `gm-text-end`.

## Tamaño

En `rem`, para que crezca si la persona agranda la letra en su navegador.

| Clase | Tamaño | Clase | Tamaño |
| --- | --- | --- | --- |
| `gm-text-xs` | 0,75 rem | `gm-text-xl` | 1,25 rem |
| `gm-text-sm` | 0,875 rem | `gm-text-2xl` | 1,5 rem |
| `gm-text-base` | 1 rem | `gm-text-3xl` | 1,875 rem |
| `gm-text-lg` | 1,125 rem | `gm-text-4xl` | 2,25 rem |

Tienen versión por [punto de corte](/docs/layout/breakpoints): `gm-text-xl gm-md-text-3xl`.

```html
<p class="gm-text-sm gm-m-0">gm-text-sm: para notas y pies de foto</p>
<p class="gm-text-base gm-m-0">gm-text-base: el texto normal</p>
<p class="gm-text-xl gm-m-0">gm-text-xl: para destacar una frase</p>
<p class="gm-text-3xl gm-m-0">gm-text-3xl: para un título</p>
```

## Grosor

`gm-font-light` (300), `gm-font-normal` (400), `gm-font-medium` (500), `gm-font-semibold` (600), `gm-font-bold` (700) y `gm-font-extrabold` (800): todos los de Montserrat.

```html
<p class="gm-m-0"><span class="gm-font-light">Light</span> · <span class="gm-font-normal">Normal</span> · <span class="gm-font-medium">Medium</span> · <span class="gm-font-semibold">Semibold</span> · <span class="gm-font-bold">Bold</span> · <span class="gm-font-extrabold">Extrabold</span></p>
```

## Interlineado

| Clase | Valor | Para |
| --- | --- | --- |
| `gm-leading-none` | 1 | Números grandes, iconos |
| `gm-leading-tight` | 1,25 | Títulos |
| `gm-leading-snug` | 1,375 | Títulos de varias líneas |
| `gm-leading-normal` | 1,5 | El texto normal (el del framework) |
| `gm-leading-relaxed` | 1,7 | Textos largos |
| `gm-leading-loose` | 2 | Muy separado |

## Mayúsculas, cursiva y subrayado

| Clase | Hace |
| --- | --- |
| `gm-uppercase` / `gm-lowercase` / `gm-capitalize` | Todo en mayúsculas / en minúsculas / la primera de cada palabra en mayúscula |
| `gm-normal-case` | Como está escrito |
| `gm-italic` / `gm-not-italic` | Cursiva / sin cursiva |
| `gm-underline` / `gm-line-through` / `gm-no-underline` | Subrayado / tachado / sin línea |

```html
<p class="gm-m-0"><span class="gm-uppercase gm-font-semibold gm-text-sm">Novedad</span> · <span class="gm-italic">en cursiva</span> · <span class="gm-line-through">29 €</span> 19 €</p>
```

## Cortes de línea

| Clase | Hace |
| --- | --- |
| `gm-nowrap` | No pasa a la línea siguiente |
| `gm-truncate` | Una sola línea y, si no cabe, termina en «…» |
| `gm-break-words` | Corta palabras muy largas (direcciones, correos) para que no se salgan |
| `gm-text-balance` | Reparte las palabras entre las líneas para que queden igual de largas (títulos) |
| `gm-text-pretty` | Evita que la última línea de un párrafo se quede con una palabra sola |

```html
<p class="gm-truncate gm-max-w-xs gm-m-0">Este texto es demasiado largo para una línea, así que termina en puntos suspensivos.</p>
```

## Subrayado, columnas y espacios

| Clase | Qué hace |
| --- | --- |
| `gm-decoration-sky`, `gm-decoration-accent`… | El color de la línea del subrayado |
| `gm-decoration-1` / `-2` / `-4` | Su grosor (1, 2, 4 px) |
| `gm-decoration-solid` / `-dashed` / `-dotted` / `-wavy` / `-double` | Su estilo |
| `gm-underline-offset-1` / `-2` / `-4` / `-8` | Su separación de las letras |
| `gm-columns-1` … `gm-columns-4` / `gm-break-inside-avoid` | El texto en columnas / que un bloque no se parta entre dos |
| `gm-whitespace-normal` / `-pre` / `-pre-wrap` | Cómo trata los espacios y saltos de línea |
| `gm-hyphens-auto` / `gm-break-all` | Parte las palabras con guion / por cualquier letra |

```html
<p class="gm-m-0"><a class="gm-underline gm-decoration-pink gm-decoration-2 gm-decoration-wavy gm-underline-offset-4" href="#">Un enlace con el subrayado a tu gusto</a></p>
```

## Listas

`gm-list-none` quita las viñetas y la sangría de una lista: para menús o enlaces seguidos que siguen siendo una lista para los lectores de pantalla.

```html
<ul class="gm-list-none gm-flex gm-gap-4 gm-m-0">
  <li><a href="#">Inicio</a></li>
  <li><a href="#">Proyectos</a></li>
  <li><a href="#">Contacto</a></li>
</ul>
```

## Accesibilidad

- No uses `gm-text-xs` para texto importante: a 0,75 rem cuesta leer. Para el texto normal, 1 rem como mínimo.
- `gm-truncate` esconde parte del texto: si lo que se corta importa, enséñalo entero en otro sitio (un `title` no basta, porque no llega al teclado ni al móvil).
- `gm-uppercase` cambia solo cómo se ve: escribe el texto normal en el HTML, así los lectores de pantalla no lo deletrean.
- Con `gm-list-none`, Safari deja de anunciar la lista: si importa que se oiga como lista, añade `role="list"` al `<ul>`.
