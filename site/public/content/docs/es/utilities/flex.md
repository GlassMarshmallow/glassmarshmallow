# Flex y alineación

Para poner piezas en fila o en columna y alinearlas, sin escribir CSS.

## Fila o columna

`gm-flex` pone los hijos en fila; `gm-flex-col`, en columna; `gm-flex-wrap` deja que bajen a la línea siguiente si no caben.

```html
<div class="gm-flex gm-flex-col gm-md-flex-row gm-gap-3">
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-3 gm-flex-1">En columna en el móvil</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-3 gm-flex-1">y en fila desde md</div>
</div>
```

## Alinear

| Clase | Qué hace |
| --- | --- |
| `gm-items-start` / `-center` / `-end` / `-stretch` / `-baseline` | Alineación en el otro eje (en una fila, en alto) |
| `gm-justify-start` / `-center` / `-end` | Hacia dónde se juntan en el eje principal |
| `gm-justify-between` / `-around` / `-evenly` | Cómo se reparte el espacio libre |
| `gm-content-start` / `-center` / `-end` / `-between` / `-stretch` | Dónde van las filas cuando sobra alto (en una cuadrícula o un flex de varias líneas) |

```html
<div class="gm-flex gm-items-center gm-justify-between gm-border gm-rounded-sm gm-p-3">
  <strong>Pedido 1024</strong>
  <span class="gm-tag gm-theme-mint gm-theme-solid">Enviado</span>
</div>
```

## Un solo elemento y atajos

| Clase | Qué hace |
| --- | --- |
| `gm-self-start` / `-center` / `-end` / `-stretch` / `-baseline` / `-auto` | Coloca solo ese hijo en el otro eje |
| `gm-justify-self-start` / `-center` / `-end` / `-stretch` / `-auto` | Coloca solo ese hijo en una cuadrícula, de lado |
| `gm-justify-items-start` / `-center` / `-end` / `-stretch` | Todos los hijos de una cuadrícula, de lado |
| `gm-place-items-*` / `gm-place-content-*` / `gm-place-self-*` | Atajos: en los dos ejes a la vez (`gm-place-items-center` centra en la celda) |

```html
<div class="gm-d-grid gm-place-items-center gm-border gm-rounded-sm gm-h-[8rem]">
  <span class="gm-tag gm-theme-sky gm-theme-solid">Centrado con gm-place-items-center</span>
</div>
```

## Crecer y encoger

| Clase | Qué hace |
| --- | --- |
| `gm-flex-1` | Ocupa el espacio libre a partes iguales con sus hermanos |
| `gm-flex-auto` | Crece según su contenido |
| `gm-flex-none` / `gm-shrink-0` | No crece / no encoge (iconos, botones) |
| `gm-grow` | Crece para llenar el hueco |

## Texto

`gm-text-start`, `gm-text-center` y `gm-text-end` alinean el texto.

Fila, columna, alineación y texto tienen versión por [punto de corte](/docs/layout/breakpoints): `gm-md-flex-row`, `gm-lg-justify-between`, `gm-md-text-start`…
