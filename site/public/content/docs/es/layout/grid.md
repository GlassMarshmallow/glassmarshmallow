# Cuadrícula

Para colocar piezas en columnas. Es de 12 columnas, como la de Bootstrap, pero hecha con CSS Grid: cada hijo dice cuántas de las 12 ocupa, y puede cambiar en cada [punto de corte](/docs/layout/breakpoints).

## Columnas

`.gm-grid` en el contenedor y `.gm-col-N` en cada hijo (N de 1 a 12). Sin clase de columna, el hijo ocupa la fila entera.

```html
<div class="gm-grid gm-gap-sm">
  <div class="gm-col-8 gm-theme-sky gm-theme-solid gm-p-4 gm-rounded-sm">8 de 12</div>
  <div class="gm-col-4 gm-theme-pink-blue gm-theme-solid gm-p-4 gm-rounded-sm">4 de 12</div>
  <div class="gm-col-4 gm-theme-mint gm-theme-solid gm-p-4 gm-rounded-sm">4</div>
  <div class="gm-col-4 gm-theme-mint gm-theme-solid gm-p-4 gm-rounded-sm">4</div>
  <div class="gm-col-4 gm-theme-mint gm-theme-solid gm-p-4 gm-rounded-sm">4</div>
</div>
```

## Según el ancho de la pantalla

Con prefijo (`sm`, `md`, `lg`, `xl`), la columna cambia desde ese ancho. Aquí: una debajo de otra en el móvil, dos desde `md` y tres desde `lg`.

```html
<div class="gm-grid gm-gap-sm">
  <div class="gm-md-col-6 gm-lg-col-4 gm-theme-lavender gm-theme-solid gm-p-4 gm-rounded-sm">A</div>
  <div class="gm-md-col-6 gm-lg-col-4 gm-theme-pink gm-theme-solid gm-p-4 gm-rounded-sm">B</div>
  <div class="gm-md-col-12 gm-lg-col-4 gm-theme-peach gm-theme-solid gm-p-4 gm-rounded-sm">C</div>
</div>
```

## Columnas iguales

Sin contar: `.gm-cols-2`, `-3`, `-4` o `-6` reparten el espacio en columnas iguales. También con prefijo.

```html
<div class="gm-grid gm-cols-1 gm-sm-cols-2 gm-lg-cols-4 gm-gap-sm">
  <div class="gm-theme-sky gm-theme-solid gm-p-4 gm-rounded-sm">1</div>
  <div class="gm-theme-sky gm-theme-solid gm-p-4 gm-rounded-sm">2</div>
  <div class="gm-theme-sky gm-theme-solid gm-p-4 gm-rounded-sm">3</div>
  <div class="gm-theme-sky gm-theme-solid gm-p-4 gm-rounded-sm">4</div>
</div>
```

## Tantas como quepan

`.gm-grid--auto` pone tantas columnas como quepan de 240 px como mínimo, sin puntos de corte. Ideal para tarjetas. El mínimo se cambia con `--gm-grid-min`.

```html
<div class="gm-grid gm-grid--auto gm-gap-sm" style="--gm-grid-min: 10rem">
  <div class="gm-card">Uno</div>
  <div class="gm-card">Dos</div>
  <div class="gm-card">Tres</div>
  <div class="gm-card">Cuatro</div>
  <div class="gm-card">Cinco</div>
</div>
```

## Desplazar

`.gm-offset-N` deja N columnas vacías antes del hijo. Por ejemplo, para centrar un bloque de 6 columnas:

```html
<div class="gm-grid">
  <div class="gm-col-12 gm-md-col-6 gm-md-offset-3 gm-theme-lemon gm-theme-solid gm-p-4 gm-rounded-sm">Centrado desde md</div>
</div>
```

## Separación

El hueco entre columnas es de 1,5 rem. Cámbialo con las [separaciones](/docs/utilities/spacing) de siempre, `gm-gap-0` … `gm-gap-16` (la misma escala que los márgenes y rellenos), o con la variable `--gm-gap`. `gm-gap-sm` y `gm-gap-lg` siguen funcionando: son `gm-gap-3` y `gm-gap-10`.

## Para construir (como Tailwind)

`gm-grid` funciona como las filas y columnas de Bootstrap: siempre 12 columnas y cada hijo dice cuántas ocupa. Si prefieres decir **cuántas columnas tiene la cuadrícula**, como en Tailwind, usa `gm-d-grid` con `gm-grid-cols-*`:

```html
<div class="gm-d-grid gm-grid-cols-1 gm-md-grid-cols-3 gm-gap-4">
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-3 gm-md-col-span-2">gm-md-col-span-2</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-3">1</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-3">1</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-3 gm-md-col-span-2">gm-md-col-span-2</div>
</div>
```

| Clase | Qué hace |
| --- | --- |
| `gm-grid-cols-1` … `gm-grid-cols-12` / `gm-grid-cols-none` | Cuántas columnas iguales tiene |
| `gm-col-span-1` … `gm-col-span-12` / `gm-col-span-full` | Cuántas ocupa un hijo / todas |
| `gm-grid-rows-1` … `gm-grid-rows-6` / `gm-row-span-1` … `gm-row-span-6` / `-full` | Lo mismo con las filas |
| `gm-grid-flow-row` / `-col` / `-dense` | Cómo se colocan los hijos (por filas, por columnas, rellenando huecos) |

Todas tienen versión por punto de corte (`gm-md-grid-cols-3`). Para columnas de otros anchos, un [valor libre](/docs/utilities/arbitrary): `gm-grid-cols-[1fr_2fr]`.

## Clases

| Clase | Qué hace |
| --- | --- |
| `.gm-grid` | Cuadrícula de 12 columnas |
| `.gm-col-1` … `.gm-col-12` | Cuántas columnas ocupa el hijo |
| `.gm-col-auto` | Ocupa una sola celda |
| `.gm-offset-1` … `.gm-offset-11` | Columnas vacías antes del hijo |
| `.gm-cols-1`, `-2`, `-3`, `-4`, `-6` | Columnas iguales |
| `.gm-grid--auto` | Tantas columnas como quepan (`--gm-grid-min`, 240 px) |
| `.gm-gap-0` … `.gm-gap-16` | Separación entre columnas |
| `.gm-sm-…`, `.gm-md-…`, `.gm-lg-…`, `.gm-xl-…` | Lo mismo, desde ese punto de corte |

## Accesibilidad

- La cuadrícula solo cambia dónde se ven las cosas, no su orden: los lectores de pantalla y el teclado siguen el orden del HTML. Escribe el HTML en el orden en que se debe leer (WCAG 1.3.2).
- Con la pantalla ampliada al 400 %, todo pasa a una columna sin barra de desplazamiento lateral, porque se piensa primero para el móvil (WCAG 1.4.10).
