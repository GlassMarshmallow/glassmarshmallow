# Espaciado

Margen (fuera) y relleno (dentro) sin escribir CSS. Como en Tailwind: el número es la escala, y **4 = 1 rem** (16 px).

## Escala

| Número | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Valor | 0 | 0,25 rem | 0,5 rem | 0,75 rem | 1 rem | 1,25 rem | 1,5 rem | 2 rem | 2,5 rem | 3 rem | 4 rem |

## Margen y relleno

`gm-m-…` para el margen y `gm-p-…` para el relleno. Detrás de la letra, el lado:

| Clase | Lado |
| --- | --- |
| `gm-p-4` | Los cuatro |
| `gm-px-4` | Izquierda y derecha |
| `gm-py-4` | Arriba y abajo |
| `gm-pt-4` / `gm-pb-4` | Arriba / abajo |
| `gm-ps-4` / `gm-pe-4` | Inicio / final de la línea (izquierda / derecha en español) |

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap gm-items-start">
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-3">gm-p-3</div>
  <div class="gm-theme-mint gm-theme-solid gm-rounded-sm gm-px-8 gm-py-2">gm-px-8 gm-py-2</div>
  <div class="gm-theme-peach gm-theme-solid gm-rounded-sm gm-p-3 gm-mt-6">gm-mt-6</div>
</div>
```

## Centrar con margen

`gm-mx-auto` centra un bloque con ancho fijo; `gm-ms-auto` lo lleva al final de una fila.

```html
<div class="gm-theme-lavender gm-theme-solid gm-rounded-sm gm-p-3 gm-max-w-xs gm-mx-auto gm-text-center">Centrado</div>
```

## Separación entre hijos

`gm-gap-…` separa los hijos de un `flex` o una cuadrícula (también cambia la de `.gm-grid`).

```html
<div class="gm-flex gm-gap-2">
  <span class="gm-tag">Uno</span><span class="gm-tag">Dos</span><span class="gm-tag">Tres</span>
</div>
```

## Según la pantalla

Todas tienen versión por [punto de corte](/docs/layout/breakpoints): `gm-p-4 gm-md-p-8` tiene 1 rem de relleno en el móvil y 2 rem desde 860 px.
