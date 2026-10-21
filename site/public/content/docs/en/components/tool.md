# Tool

The layout of this site's generators: a preview and, next to it, the controls that change it and the code to copy. Below 860 px (`md`), the preview goes on top and the controls below.

## Example

```html
<div class="gm-tool">
  <div class="gm-tool__preview">
    <div class="gm-flex gm-items-center gm-justify-center gm-rounded-md gm-border gm-p-8 gm-theme-lavender gm-theme-solid">
      <p class="gm-m-0 gm-font-bold gm-text-xl">Preview</p>
    </div>
  </div>
  <div class="gm-card gm-tool__controls">
    <div class="gm-slider">
      <label for="tool-size">Size</label>
      <output for="tool-size">24 px</output>
      <input id="tool-size" class="gm-range" type="range" min="8" max="64" value="24">
    </div>
    <fieldset class="gm-tool__group">
      <legend>Shape</legend>
      <div class="gm-flex gm-gap-2">
        <button type="button" class="gm-btn gm-btn--sm">Round</button>
        <button type="button" class="gm-btn gm-btn--secondary gm-btn--sm">Square</button>
      </div>
    </fieldset>
    <div class="gm-tool__code">
      <pre class="gm-code gm-code--wrap"><code>font-size: 1.5rem;</code></pre>
    </div>
  </div>
</div>
```

| Class | What it is |
| --- | --- |
| `gm-tool` | The two columns: preview (a bit wider) and controls |
| `gm-tool__preview` | The preview column (with whatever goes below it, like a button) |
| `gm-tool__preview--sticky` | The preview stays in view while scrolling through the controls (on desktop) |
| `gm-tool__controls` | The controls, spaced out; with `gm-card`, in a card |
| `gm-tool__group` | A `<fieldset>` with no border or padding, with its `<legend>` as a heading |
| `gm-tool__code` | The generated code and its buttons |
| `gm-tool__stage` | The preview box: centered content, rounded corners, lower on a phone |
| `gm-tool__sample` | Sample text on top of the preview, with `gm-tool__sample-title` and `gm-tool__sample-small` |
| `gm-tool__toggle` | A checkbox with its text ("Show the sample text") |
| `gm-tool__presets` / `gm-tool__preset` / `gm-tool__swatch` | Buttons with starting values, each with a color sample |
| `gm-tool__stops` / `gm-tool__stop` / `gm-tool__stop-position` | A list of colors: each row with its picker, its position and the remove button |
| `gm-tool__pad` / `gm-tool__pad-btn` / `gm-tool__pad-dot` | A 3 × 3 grid of buttons for a direction or a position (with `aria-pressed`) |
| `gm-tool__fullscreen` / `gm-tool__fullscreen-bar` | A `<dialog>` that shows the result full screen, with a bar to close it |

Controls are usually [sliders with their value](/docs/forms/range) (`gm-slider`) and the code, a [code block](/docs/content/code) with `gm-code--wrap`.

## Preview with sample text

```html
<div class="gm-tool__preview">
  <div class="gm-tool__stage gm-theme-sky gm-theme-solid">
    <div class="gm-tool__sample">
      <p class="gm-tool__sample-title">Sample title</p>
      <p>This is how the text looks.</p>
      <p class="gm-tool__sample-small">Small text</p>
    </div>
  </div>
  <label class="gm-tool__toggle gm-justify-self-start"><input type="checkbox" checked> Show the sample text</label>
</div>
```

## Direction pad

```html
<div class="gm-tool__pad">
  <button type="button" class="gm-tool__pad-btn" aria-pressed="false" aria-label="Up left"><i class="gmi gmi-arrow-up-left" aria-hidden="true"></i></button>
  <button type="button" class="gm-tool__pad-btn" aria-pressed="true" aria-label="Up"><i class="gmi gmi-arrow-up" aria-hidden="true"></i></button>
  <button type="button" class="gm-tool__pad-btn" aria-pressed="false" aria-label="Up right"><i class="gmi gmi-arrow-up-right" aria-hidden="true"></i></button>
  <button type="button" class="gm-tool__pad-btn" aria-pressed="false" aria-label="Left"><i class="gmi gmi-arrow-left" aria-hidden="true"></i></button>
  <span class="gm-tool__pad-center" aria-hidden="true"></span>
  <button type="button" class="gm-tool__pad-btn" aria-pressed="false" aria-label="Right"><i class="gmi gmi-arrow-right" aria-hidden="true"></i></button>
  <button type="button" class="gm-tool__pad-btn" aria-pressed="false" aria-label="Down left"><i class="gmi gmi-arrow-down-left" aria-hidden="true"></i></button>
  <button type="button" class="gm-tool__pad-btn" aria-pressed="false" aria-label="Down"><i class="gmi gmi-arrow-down" aria-hidden="true"></i></button>
  <button type="button" class="gm-tool__pad-btn" aria-pressed="false" aria-label="Down right"><i class="gmi gmi-arrow-down-right" aria-hidden="true"></i></button>
</div>
```

For positions, put a `<span class="gm-tool__pad-dot" aria-hidden="true"></span>` in each button instead of the arrow.

## Accessibility

- Every control has its name (`<label>` or `<legend>`) and its value in view (`<output>`).
- If the preview is only a picture, give it `aria-hidden="true"` and explain what changes in text.
- The HTML order is the screen order: first the preview, then the controls.
