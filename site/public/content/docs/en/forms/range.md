# Range

To pick a number in a range by dragging: volume, opacity, size… The thumb is a round dot and the filled part uses the accent color.

## Example

```html
<div class="gm-field gm-max-w-md">
  <label for="example-volume">Volume</label>
  <input id="example-volume" class="gm-range" type="range" min="0" max="100" value="40">
</div>
```

## With the value shown

Show the value next to the label with an `<output>`. That way the exact number is known without guessing from the position.

```html
<div class="gm-field gm-max-w-md">
  <div class="gm-flex gm-justify-between gm-items-baseline">
    <label class="gm-font-bold" for="example-opacity">Opacity</label>
    <output id="example-opacity-value" for="example-opacity" class="gm-muted">70 %</output>
  </div>
  <input id="example-opacity" class="gm-range" type="range" min="0" max="100" value="70" oninput="document.getElementById('example-opacity-value').textContent = this.value + ' %'">
</div>
```

## Name and value on one line

`gm-slider` puts the name on the left, the value on the right (with equal-width digits, so it does not jump while moving) and the bar below. It is the one in this site's generators. `gm-slider__help` adds a hint below.

```html
<div class="gm-slider gm-max-w-md">
  <label for="example-blur">Blur</label>
  <output id="example-blur-value" for="example-blur">12 px</output>
  <input id="example-blur" class="gm-range" type="range" min="0" max="40" value="12" oninput="document.getElementById('example-blur-value').textContent = this.value + ' px'">
  <p class="gm-slider__help gm-muted gm-m-0">How much whatever is behind the glass is blurred.</p>
</div>
```

## Disabled

```html
<div class="gm-field gm-max-w-md">
  <label for="example-disabled">Brightness</label>
  <input id="example-disabled" class="gm-range" type="range" min="0" max="100" value="50" disabled>
</div>
```

## Script

Firefox paints the filled part on its own. Chrome and Safari do not: the optional script puts the value's percentage in `--gm-range-progress` every time the bar moves. Without the script the bar works the same, but all in gray.

```html
<script type="module">
  import { initRanges, updateRange } from 'glassmarshmallow/js/range.js';
  initRanges();

  // If you change the value from your code, repaint it:
  const volume = document.querySelector('#volume');
  volume.value = 80;
  updateRange(volume);
</script>
```

## Keyboard

| Key | What it does |
| --- | --- |
| ← → / ↑ ↓ | One step (`step`) down or up |
| Page Up / Page Down | 10 % up or down |
| Home / End | To the minimum or maximum |

## Accessibility

- It is a real `<input type="range">` with its `<label>`: screen readers say the name and the value.
- If the bare number is unclear (“70”), add `aria-valuetext` with the value in words (“70 percent”).
- The dot is white with a 3.5:1 gray border, so it shows on white and dark backgrounds (WCAG 1.4.11). With the keyboard it gets a focus ring.
- The bar is 44 px tall so it is easy to press (WCAG 2.5.5, AAA), even though the visible line is thin.
- Dragging is not the only way: it also works with the keyboard or by clicking on the bar (WCAG 2.5.7).
