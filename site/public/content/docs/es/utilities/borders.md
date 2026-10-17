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
  <div class="gm-theme-pink gm-theme-solid gm-rounded-full gm-flex gm-items-center gm-justify-center" style="width: 64px; height: 64px">full</div>
</div>
```

## Accesibilidad

Un borde que separa algo importante (un campo, un botón) necesita 3:1 con el fondo: usa `gm-border-strong`. `gm-border` es para separar sin destacar (WCAG 1.4.11).
