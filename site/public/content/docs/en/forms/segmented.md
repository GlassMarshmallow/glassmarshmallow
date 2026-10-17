# Segmented control

Options together in a gray bar; the chosen one sits in a white pill (black at night) with a shadow. It is the one from the My Book Box library.

## To pick a setting

With radio buttons inside a `fieldset` with its `legend`. The radio circle is hidden: the white pill shows which one is chosen. It changes with the mouse or the arrow keys.

```html
<fieldset class="gm-field">
  <legend>Preview</legend>
  <div class="gm-segmented">
    <label><input type="radio" name="example-view" checked> Light mode</label>
    <label><input type="radio" name="example-view"> Dark mode</label>
  </div>
</fieldset>
```

## To filter, with a count

With buttons that say whether they are pressed (`aria-pressed`), inside a named group. Each option can show how many items there are (`.gm-segmented__count`).

```html
<div class="gm-segmented" role="group" aria-label="Filter by type">
  <button type="button" aria-pressed="false">All</button>
  <button type="button" aria-pressed="true">Books <span class="gm-segmented__count">3</span></button>
  <button type="button" aria-pressed="false">Manga <span class="gm-segmented__count">20</span></button>
</div>
```

## Stacked

With more than 3 options or long labels, one below the other: `.gm-segmented--stack`.

```html
<fieldset class="gm-field">
  <legend>Harmony</legend>
  <div class="gm-segmented gm-segmented--stack">
    <label><input type="radio" name="example-harmony"> Monochromatic</label>
    <label><input type="radio" name="example-harmony" checked> Analogous</label>
    <label><input type="radio" name="example-harmony"> Complementary</label>
    <label><input type="radio" name="example-harmony"> Triadic</label>
    <label><input type="radio" name="example-harmony"> Split complementary</label>
  </div>
</fieldset>
```

## Small

`.gm-segmented--small`, for toolbars or tight spaces.

```html
<div class="gm-segmented gm-segmented--small" role="group" aria-label="Sort">
  <button type="button" aria-pressed="true">Recent</button>
  <button type="button" aria-pressed="false">A-Z</button>
</div>
```

## When to use it

- **2 or 3 short options**, in a row.
- **More than 3 or long labels**, stacked (`--stack`).
- For settings applied right away (view, filter, sort). In a form to submit, radios work too.

## Accessibility

- With radios: the `fieldset` and its `legend` say what is being chosen, and it works like any group of options (Tab to enter, arrows to change).
- With buttons: `role="group"` and `aria-label` on the bar, and `aria-pressed` on each button.
- The gray text reaches 7.5:1 by day and 7.1:1 at night on the bar (AAA); the chosen one, regular text.
- Each option is 34 px tall, but the touch area reaches 44 px (WCAG 2.5.5).
- The chosen one stands out by the pill and the shadow, not just color.
