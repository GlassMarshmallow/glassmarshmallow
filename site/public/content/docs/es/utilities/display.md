# Mostrar y ocultar

Cambia cómo se muestra un elemento, o lo esconde, según el tamaño de la pantalla.

| Clase | Muestra como |
| --- | --- |
| `gm-hidden` | No se ve (ni lo leen los lectores de pantalla) |
| `gm-block` | Bloque |
| `gm-inline` / `gm-inline-block` | En línea |
| `gm-flex` / `gm-inline-flex` | Flex |
| `gm-grid` | Cuadrícula |

## Solo `display`

`gm-grid` es además la [cuadrícula de 12 columnas](/docs/layout/grid): sus hijos ocupan las 12 si no llevan `gm-col-…`. Para una cuadrícula simple, o para cambiar solo `display` sin nada más, usa `gm-d-…`, con los mismos nombres que Bootstrap:

| Clase | `display` |
| --- | --- |
| `gm-d-none` / `gm-d-block` / `gm-d-inline` / `gm-d-inline-block` | none / block / inline / inline-block |
| `gm-d-flex` / `gm-d-inline-flex` | flex / inline-flex |
| `gm-d-grid` / `gm-d-inline-grid` | grid / inline-grid (sin columnas: una por fila, o las que pongas) |
| `gm-d-contents` | contents (la caja desaparece y sus hijos pasan a ser del padre) |

```html
<div class="gm-d-grid gm-gap-2">
  <span class="gm-tag gm-theme-sky gm-theme-solid">Uno</span>
  <span class="gm-tag gm-theme-sky gm-theme-solid">Dos</span>
</div>
```

## Según la pantalla

Con prefijo, desde ese [punto de corte](/docs/layout/breakpoints). Cambia el ancho de la ventana para verlo:

```html
<div class="gm-flex gm-gap-2 gm-flex-wrap">
  <span class="gm-tag gm-theme-mint gm-theme-solid gm-md-hidden">Solo en el móvil</span>
  <span class="gm-tag gm-theme-sky gm-theme-solid gm-hidden gm-md-inline-block">Desde md</span>
  <span class="gm-tag gm-theme-lavender gm-theme-solid gm-hidden gm-lg-inline-block">Desde lg</span>
</div>
```

## Accesibilidad

- `gm-hidden` lo esconde a todo el mundo. Para esconderlo solo a la vista y que lo lean los lectores de pantalla, usa [`gm-visually-hidden`](/docs/helpers/visually-hidden).
- No escondas en el móvil información que sí se da en el escritorio: quien use el móvil debe poder hacer lo mismo.
