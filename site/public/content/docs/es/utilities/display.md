# Mostrar y ocultar

Cambia cómo se muestra un elemento, o lo esconde, según el tamaño de la pantalla.

| Clase | Muestra como |
| --- | --- |
| `gm-hidden` | No se ve (ni lo leen los lectores de pantalla) |
| `gm-block` | Bloque |
| `gm-inline` / `gm-inline-block` | En línea |
| `gm-flex` / `gm-inline-flex` | Flex |
| `gm-grid` | Cuadrícula |

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
