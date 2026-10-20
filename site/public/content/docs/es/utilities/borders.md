# Bordes y radios

Bordes finos con las líneas del framework y esquinas redondeadas con sus radios. Cambian solos con el modo oscuro.

## Bordes

| Clase | Qué pone |
| --- | --- |
| `gm-border` | Borde de 1 px con la línea suave (`--gm-line`) |
| `gm-border-strong` | Borde de 1 px con la línea marcada (`--gm-line-strong`) |
| `gm-border-t` / `gm-border-b` | Solo arriba / solo abajo |
| `gm-border-0` | Sin borde |

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap">
  <div class="gm-border gm-rounded-sm gm-p-4">gm-border</div>
  <div class="gm-border-strong gm-rounded-sm gm-p-4">gm-border-strong</div>
  <div class="gm-border-b gm-p-4">gm-border-b</div>
</div>
```

## Para construir

| Clase | Qué pone |
| --- | --- |
| `gm-border-s` / `gm-border-e` / `gm-border-x` / `gm-border-y` | Solo al inicio / al final de la línea / a los lados / arriba y abajo |
| `gm-border-2` / `gm-border-4` | Borde de 2 / 4 px |
| `gm-border-solid` / `-dashed` / `-dotted` | Continuo / discontinuo / de puntos |
| `gm-border-sky`, `gm-border-pink`, `gm-border-accent`… | El color del borde (los mismos colores que los [degradados](/docs/utilities/gradients)) |

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap">
  <div class="gm-border-2 gm-border-dashed gm-border-pink gm-rounded-sm gm-p-4">discontinuo</div>
  <div class="gm-border-s gm-border-4 gm-border-accent gm-p-4">solo al inicio</div>
  <div class="gm-border gm-border-dotted gm-border-line-strong gm-rounded-sm gm-p-4">de puntos</div>
</div>
```

## Radios

| Clase | Radio |
| --- | --- |
| `gm-rounded-none` | 0 |
| `gm-rounded-sm` | 12 px (`--gm-radius-sm`) |
| `gm-rounded` / `gm-rounded-md` | 20 px (`--gm-radius-md`) |
| `gm-rounded-lg` | 30 px (`--gm-radius-lg`) |
| `gm-rounded-pill` | Píldora |
| `gm-rounded-full` | Círculo (con ancho y alto iguales) |

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap gm-items-center">
  <div class="gm-theme-pink gm-theme-solid gm-p-4 gm-rounded-sm">sm</div>
  <div class="gm-theme-pink gm-theme-solid gm-p-4 gm-rounded-md">md</div>
  <div class="gm-theme-pink gm-theme-solid gm-p-4 gm-rounded-lg">lg</div>
  <div class="gm-theme-pink gm-theme-solid gm-px-6 gm-py-2 gm-rounded-pill">pill</div>
  <div class="gm-theme-pink gm-theme-solid gm-rounded-full gm-flex gm-items-center gm-justify-center" style="width: 4rem; height: 4rem">full</div>
</div>
```

### Esquinas una a una

`gm-rounded-{lado}-{tamaño}`: los lados son `t` (arriba), `b` (abajo), `s` (inicio) y `e` (final), y cada esquina, `ts`, `te`, `bs` y `be`; los tamaños, `none`, `sm`, `md`, `lg`, `pill` y `full`.

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap">
  <div class="gm-theme-lavender gm-theme-solid gm-p-4 gm-rounded-t-lg">gm-rounded-t-lg</div>
  <div class="gm-theme-lavender gm-theme-solid gm-p-4 gm-rounded-ts-lg gm-rounded-be-lg">ts y be</div>
</div>
```

## Accesibilidad

Un borde que separa algo importante (un campo, un botón) necesita 3:1 con el fondo: usa `gm-border-strong`. `gm-border` es para separar sin destacar (WCAG 1.4.11).
