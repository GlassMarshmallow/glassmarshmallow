# Color scheme

Set the color scheme of a single element, so the browser paints its own parts to match: native form controls, scrollbars and the background of an `<iframe>`.

| Class | Styles |
| --- | --- |
| `.gm-color-scheme-light` | `color-scheme: light;` |
| `.gm-color-scheme-dark` | `color-scheme: dark;` |
| `.gm-color-scheme-auto` | `color-scheme: light dark;` |

GlassMarshmallow already sets it for you: `data-theme="light"` and `data-theme="dark"` set the matching scheme. Use these classes only when one element must use a different scheme than the area around it.

## Light and dark

Add `.gm-color-scheme-light` or `.gm-color-scheme-dark` to the element that needs it, not to a wrapper. In the example, the second field keeps the light browser parts inside a dark area.

```html-code
<div data-theme="dark">
  <!-- The browser paints this field and its picker in dark mode -->
  <select>…</select>
  <!-- …and this one in light mode -->
  <select class="gm-color-scheme-light">…</select>
</div>
```

These classes only change the parts the browser paints. They don't change the framework colors: to put an area in light or dark mode, use `data-theme` (see [Light and dark mode](/docs/color/color-modes)).

## Follow the system preference

`.gm-color-scheme-auto` lets the browser follow the system preference for that element, even if the page forces a mode.

```html
<iframe class="gm-color-scheme-auto" src="..."></iframe>
```

## Embedded content

An embedded document can't see the `data-theme` of your page. If an embed has no dark mode, the browser may paint a white background behind it when the system is dark. Add `.gm-color-scheme-light` to that `<iframe>` only.

```html
<iframe class="gm-color-scheme-light" src="..."></iframe>
```
