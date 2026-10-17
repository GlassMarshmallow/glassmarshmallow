# Display

Changes how an element is displayed, or hides it, depending on the screen size.

| Class | Displays as |
| --- | --- |
| `gm-hidden` | Not shown (not read by screen readers either) |
| `gm-block` | Block |
| `gm-inline` / `gm-inline-block` | Inline |
| `gm-flex` / `gm-inline-flex` | Flex |
| `gm-grid` | Grid |

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
