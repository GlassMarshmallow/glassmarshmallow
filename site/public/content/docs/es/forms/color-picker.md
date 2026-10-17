# Selector de color

Un botón con la muestra del color que abre una ventana para elegirlo: círculo de color, barras de tono, saturación, luminosidad y opacidad, el código del color y el contraste de un texto blanco y uno negro encima. Es el que usan las herramientas de esta web.

## Ejemplo

Pulsa el botón para abrir la ventana.

```html
<div class="gm-color-picker" data-gm-color-picker data-label="Color de fondo">
  <input type="hidden" name="fondo" value="#5cdfeb" />
</div>
```

## Sin opacidad

Con `data-alpha="false"` desaparece la barra de opacidad y el color siempre es opaco.

```html
<div class="gm-color-picker" data-gm-color-picker data-label="Color del texto" data-alpha="false">
  <input type="hidden" name="texto" value="#004b96" />
</div>
```

## Script

El framework da el aspecto. El script opcional crea el botón y la ventana, y guarda el color en el `<input>`:

```html
<script type="module">
  import { initColorPickers } from 'glassmarshmallow/js/color-picker.js';
  initColorPickers();
</script>
```

- El color elegido queda en el `value` del `<input>` (`#rrggbb`, o `rgba()` si tiene transparencia), así que se envía con el formulario.
- Cada cambio lanza `input` y `change` en el `<input>`, y `gm-color-change` en el selector con el color en `detail.value`.
- Los textos salen en español si la página tiene `<html lang="es">` y en inglés si no. Se pueden cambiar con `initColorPickers(document, { texts: { done: 'Aceptar' } })`.

```js
document.querySelector('.gm-color-picker').addEventListener('gm-color-change', (event) => {
  document.body.style.background = event.detail.value;
});
```

## Teclado

| Tecla | Qué hace |
| --- | --- |
| Intro / Espacio | Abre la ventana (en el botón) |
| ← → | En el círculo: cambia el tono (con Mayús, de 10 en 10) |
| ↑ ↓ | En el círculo: cambia la saturación |
| ← → en una barra | Mueve la barra |
| Escape | Cierra la ventana y el foco vuelve al botón |

## Accesibilidad

- La ventana es un `<dialog>` con título; al cerrarse, el foco vuelve al botón.
- El círculo es un `slider` que dice el tono y la saturación con palabras («Tono 186 grados, saturación 79 %»).
- Las barras son `<input type="range">` con su `<label>` y su valor; el tirador es una bolita redonda.
- Si el código escrito no es válido, el campo lo dice con texto, no solo con color.
- El contraste del texto blanco y negro ayuda a elegir colores que se lean bien (WCAG 1.4.3).
