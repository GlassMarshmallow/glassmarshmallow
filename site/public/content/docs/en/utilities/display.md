# Display

Changes how an element is displayed, or hides it, depending on the screen size.

| Class | Displays as |
| --- | --- |
| `gm-hidden` | Not shown (not read by screen readers either) |
| `gm-block` | Block |
| `gm-inline` / `gm-inline-block` | Inline |
| `gm-flex` / `gm-inline-flex` | Flex |
| `gm-grid` | Grid |

## Only `display`

`gm-grid` is also the [12-column grid](/docs/layout/grid): its children span all 12 unless they have `gm-col-…`. For a simple grid, or to change only `display` and nothing else, use `gm-d-…`, with the same names as Bootstrap:

| Class | `display` |
| --- | --- |
| `gm-d-none` / `gm-d-block` / `gm-d-inline` / `gm-d-inline-block` | none / block / inline / inline-block |
| `gm-d-flex` / `gm-d-inline-flex` | flex / inline-flex |
| `gm-d-grid` / `gm-d-inline-grid` | grid / inline-grid (no columns: one per row, or the ones you set) |
| `gm-d-contents` | contents (the box disappears and its children belong to the parent) |

```html
<div class="gm-d-grid gm-gap-2">
  <span class="gm-tag gm-theme-sky gm-theme-solid">One</span>
  <span class="gm-tag gm-theme-sky gm-theme-solid">Two</span>
</div>
```

## By screen size

With a prefix, from that [breakpoint](/docs/layout/breakpoints). Resize the window to see it:

```html
<div class="gm-flex gm-gap-2 gm-flex-wrap">
  <span class="gm-tag gm-theme-mint gm-theme-solid gm-md-hidden">Phones only</span>
  <span class="gm-tag gm-theme-sky gm-theme-solid gm-hidden gm-md-inline-block">From md</span>
  <span class="gm-tag gm-theme-lavender gm-theme-solid gm-hidden gm-lg-inline-block">From lg</span>
</div>
```

## Accessibility

- `gm-hidden` hides it from everyone. To hide it only visually and keep it for screen readers, use [`gm-visually-hidden`](/docs/helpers/visually-hidden).
- Do not hide on phones information that is given on desktop: phone users must be able to do the same.
