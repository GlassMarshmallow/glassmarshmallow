# Posición y capas

Dónde se coloca un elemento y qué tapa a qué. Como el [position](https://tailwindcss.com/docs/position) y el z-index de Tailwind.

## Posición

| Clase | Valor |
| --- | --- |
| `gm-static` | El normal: sigue el orden de la página |
| `gm-relative` | Como el normal, pero sus hijos `gm-absolute` se colocan respecto a él |
| `gm-absolute` | Fuera del orden de la página, respecto al antepasado `gm-relative` más cercano |
| `gm-fixed` | Pegado a la ventana, aunque se haga scroll |
| `gm-sticky` | Normal hasta que llega al borde al hacer scroll; ahí se queda pegado |

Todas tienen versión por [punto de corte](/docs/layout/breakpoints): `gm-static gm-md-sticky`.

## Distancias

| Clase | Valor |
| --- | --- |
| `gm-inset-0` | Ocupa todo su contenedor (arriba, abajo y lados a 0) |
| `gm-inset-x-0` / `gm-inset-y-0` | Los dos lados / arriba y abajo a 0 |
| `gm-top-0` / `gm-bottom-0` | Pegado arriba / abajo |
| `gm-start-0` / `gm-end-0` | Pegado al principio / al final de la línea (izquierda y derecha en español) |

Una etiqueta en la esquina de una tarjeta:

```html
<div class="gm-card gm-relative gm-max-w-xs">
  <span class="gm-tag gm-theme-pink gm-theme-solid gm-absolute gm-top-0 gm-end-0 gm-m-3">Nuevo</span>
  <h3 class="gm-mt-0">Tarjeta</h3>
  <p class="gm-mb-0">La etiqueta se coloca respecto a la tarjeta porque la tarjeta lleva gm-relative.</p>
</div>
```

## Capas

`gm-z-0`, `gm-z-10`, `gm-z-20`, `gm-z-30`, `gm-z-40` y `gm-z-50` (y `gm-z-auto`): el que tiene el número más alto queda encima. Van de 10 en 10 para que quepa algo en medio. Solo funcionan en elementos con posición (`gm-relative`, `gm-absolute`…), en los de flex y en los de cuadrícula.

```html
<div class="gm-relative gm-p-8 gm-max-w-sm">
  <div class="gm-absolute gm-inset-0 gm-z-0 gm-rounded-sm gm-theme-sky gm-theme-solid"></div>
  <p class="gm-relative gm-z-10 gm-m-0 gm-font-semibold gm-[color:var(--gm-on-pastel)]">Este texto queda encima del fondo de color: lleva gm-z-10 y el fondo, gm-z-0.</p>
</div>
```

## Accesibilidad

- Lo que se coloca encima no debe tapar contenido que hay que leer o pulsar (WCAG 2.4.11): deja sitio debajo o haz que se pueda cerrar.
- `gm-fixed` y `gm-sticky` quitan espacio en pantallas bajas o con la letra grande: úsalos para poco (una barra de navegación) y pruébalos con zoom al 200 %.
