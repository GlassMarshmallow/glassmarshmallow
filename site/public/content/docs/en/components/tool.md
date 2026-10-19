# Tool

The layout of this site's generators: a preview and, next to it, the controls that change it and the code to copy. Below 900 px, the preview goes on top and the controls below.

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

Controls are usually [sliders with their value](/docs/forms/range) (`gm-slider`) and the code, a [code block](/docs/content/code) with `gm-code--wrap`.

## Accessibility

- Every control has its name (`<label>` or `<legend>`) and its value in view (`<output>`).
- If the preview is only a picture, give it `aria-hidden="true"` and explain what changes in text.
- The HTML order is the screen order: first the preview, then the controls.
