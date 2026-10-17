# Color picker

A button with the color swatch that opens a window to choose it: color wheel, hue, saturation, lightness and opacity bars, the color code and the contrast of white and black text on top. It is the one used by the tools on this site.

## Example

Press the button to open the window.

```html
<div class="gm-color-picker" data-gm-color-picker data-label="Background color">
  <input type="hidden" name="background" value="#5cdfeb" />
</div>
```

## Without opacity

With `data-alpha="false"` the opacity bar goes away and the color is always opaque.

```html
<div class="gm-color-picker" data-gm-color-picker data-label="Text color" data-alpha="false">
  <input type="hidden" name="text" value="#004b96" />
</div>
```

## Script

The framework provides the look. The optional script builds the button and the window, and stores the color in the `<input>`:

```html
<script type="module">
  import { initColorPickers } from 'glassmarshmallow/js/color-picker.js';
  initColorPickers();
</script>
```

- The chosen color goes into the `<input>`'s `value` (`#rrggbb`, or `rgba()` with transparency), so it is sent with the form.
- Every change fires `input` and `change` on the `<input>`, and `gm-color-change` on the picker with the color in `detail.value`.
- Texts are in Spanish if the page has `<html lang="es">`, and in English otherwise. They can be changed with `initColorPickers(document, { texts: { done: 'OK' } })`.

```js
document.querySelector('.gm-color-picker').addEventListener('gm-color-change', (event) => {
  document.body.style.background = event.detail.value;
});
```

## Keyboard

| Key | What it does |
| --- | --- |
| Enter / Space | Opens the window (on the button) |
| ← → | On the wheel: changes the hue (with Shift, 10 at a time) |
| ↑ ↓ | On the wheel: changes the saturation |
| ← → on a bar | Moves the bar |
| Escape | Closes the window and focus returns to the button |

## Accessibility

- The window is a `<dialog>` with a title; when it closes, focus returns to the button.
- The wheel is a `slider` that states hue and saturation in words (“Hue 186 degrees, saturation 79 %”).
- The bars are `<input type="range">` with their `<label>` and value; the thumb is a round dot.
- If the typed code is not valid, the field says so in text, not just with color.
- The white and black text contrast helps choose colors that read well (WCAG 1.4.3).
