# Herramienta

La estructura de los generadores de esta web: una vista previa y, al lado, los controles que la cambian y el código para copiar. Por debajo de 900 px, la vista previa queda arriba y los controles debajo.

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

Los controles suelen ser [barras deslizantes con su valor](/docs/forms/range) (`gm-slider`) y el código, un [bloque de código](/docs/content/code) con `gm-code--wrap`.

## Accesibilidad

- Cada control tiene su nombre (`<label>` o `<legend>`) y su valor a la vista (`<output>`).
- Si la vista previa es solo un dibujo, ponle `aria-hidden="true"` y explica con texto lo que cambia.
- El orden del HTML es el de la pantalla: primero la vista previa y luego los controles.
