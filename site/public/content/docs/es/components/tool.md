# Herramienta

La estructura de los generadores de esta web: una vista previa y, al lado, los controles que la cambian y el código para copiar. Por debajo de 860 px (`md`), la vista previa queda arriba y los controles debajo.

## Ejemplo

```html
<div class="gm-tool">
  <div class="gm-tool__preview">
    <div class="gm-flex gm-items-center gm-justify-center gm-rounded-md gm-border gm-p-8 gm-theme-lavender gm-theme-solid">
      <p class="gm-m-0 gm-font-bold gm-text-xl">Vista previa</p>
    </div>
  </div>
  <div class="gm-card gm-tool__controls">
    <div class="gm-slider">
      <label for="herramienta-tamano">Tamaño</label>
      <output for="herramienta-tamano">24 px</output>
      <input id="herramienta-tamano" class="gm-range" type="range" min="8" max="64" value="24">
    </div>
    <fieldset class="gm-tool__group">
      <legend>Forma</legend>
      <div class="gm-flex gm-gap-2">
        <button type="button" class="gm-btn gm-btn--sm">Redonda</button>
        <button type="button" class="gm-btn gm-btn--secondary gm-btn--sm">Cuadrada</button>
      </div>
    </fieldset>
    <div class="gm-tool__code">
      <pre class="gm-code gm-code--wrap"><code>font-size: 1.5rem;</code></pre>
    </div>
  </div>
</div>
```

| Clase | Qué es |
| --- | --- |
| `gm-tool` | Las dos columnas: vista previa (algo más ancha) y controles |
| `gm-tool__preview` | La columna de la vista previa (con lo que lleve debajo, como un botón) |
| `gm-tool__preview--sticky` | La vista previa se queda a la vista mientras se bajan los controles (en el ordenador) |
| `gm-tool__controls` | Los controles, separados entre sí; con `gm-card`, en una tarjeta |
| `gm-tool__group` | Un `<fieldset>` sin borde ni relleno, con su `<legend>` como título |
| `gm-tool__code` | El código generado y sus botones |
| `gm-tool__stage` | El recuadro de la vista previa: el contenido centrado, con las esquinas redondeadas y más bajo en el móvil |
| `gm-tool__sample` | El texto de muestra encima de la vista previa, con `gm-tool__sample-title` y `gm-tool__sample-small` |
| `gm-tool__toggle` | Una casilla con su texto («Mostrar el texto de ejemplo») |
| `gm-tool__presets` / `gm-tool__preset` / `gm-tool__swatch` | Botones con valores de partida, cada uno con su muestra de color |
| `gm-tool__stops` / `gm-tool__stop` / `gm-tool__stop-position` | Una lista de colores: cada fila con su selector, su posición y el botón de quitar |
| `gm-tool__pad` / `gm-tool__pad-btn` / `gm-tool__pad-dot` | Una cuadrícula de 3 × 3 botones para elegir una dirección o una posición (con `aria-pressed`) |
| `gm-tool__fullscreen` / `gm-tool__fullscreen-bar` | Un `<dialog>` que enseña el resultado a pantalla completa, con una barra para cerrarlo |

Los controles suelen ser [barras deslizantes con su valor](/docs/forms/range) (`gm-slider`) y el código, un [bloque de código](/docs/content/code) con `gm-code--wrap`.

## Vista previa con texto de muestra

```html
<div class="gm-tool__preview">
  <div class="gm-tool__stage gm-theme-sky gm-theme-solid">
    <div class="gm-tool__sample">
      <p class="gm-tool__sample-title">Título de ejemplo</p>
      <p>Así se ve el texto.</p>
      <p class="gm-tool__sample-small">Texto pequeño</p>
    </div>
  </div>
  <label class="gm-tool__toggle gm-justify-self-start"><input type="checkbox" checked> Mostrar el texto de ejemplo</label>
</div>
```

## Cuadrícula de direcciones

```html
<div class="gm-tool__pad">
  <button type="button" class="gm-tool__pad-btn" aria-pressed="false" aria-label="Arriba a la izquierda"><i class="gmi gmi-arrow-up-left" aria-hidden="true"></i></button>
  <button type="button" class="gm-tool__pad-btn" aria-pressed="true" aria-label="Arriba"><i class="gmi gmi-arrow-up" aria-hidden="true"></i></button>
  <button type="button" class="gm-tool__pad-btn" aria-pressed="false" aria-label="Arriba a la derecha"><i class="gmi gmi-arrow-up-right" aria-hidden="true"></i></button>
  <button type="button" class="gm-tool__pad-btn" aria-pressed="false" aria-label="Izquierda"><i class="gmi gmi-arrow-left" aria-hidden="true"></i></button>
  <span class="gm-tool__pad-center" aria-hidden="true"></span>
  <button type="button" class="gm-tool__pad-btn" aria-pressed="false" aria-label="Derecha"><i class="gmi gmi-arrow-right" aria-hidden="true"></i></button>
  <button type="button" class="gm-tool__pad-btn" aria-pressed="false" aria-label="Abajo a la izquierda"><i class="gmi gmi-arrow-down-left" aria-hidden="true"></i></button>
  <button type="button" class="gm-tool__pad-btn" aria-pressed="false" aria-label="Abajo"><i class="gmi gmi-arrow-down" aria-hidden="true"></i></button>
  <button type="button" class="gm-tool__pad-btn" aria-pressed="false" aria-label="Abajo a la derecha"><i class="gmi gmi-arrow-down-right" aria-hidden="true"></i></button>
</div>
```

Para las posiciones, pon en cada botón un `<span class="gm-tool__pad-dot" aria-hidden="true"></span>` en vez de la flecha.

## Accesibilidad

- Cada control tiene su nombre (`<label>` o `<legend>`) y su valor a la vista (`<output>`).
- Si la vista previa es solo un dibujo, ponle `aria-hidden="true"` y explica con texto lo que cambia.
- El orden del HTML es el de la pantalla: primero la vista previa y luego los controles.
