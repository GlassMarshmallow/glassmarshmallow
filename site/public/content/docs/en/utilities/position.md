# Position and layers

Where an element goes and what covers what. Like Tailwind's [position](https://tailwindcss.com/docs/position) and z-index.

## Position

| Class | Value |
| --- | --- |
| `gm-static` | The normal one: follows the page order |
| `gm-relative` | Like normal, but its `gm-absolute` children are placed relative to it |
| `gm-absolute` | Out of the page order, relative to the nearest `gm-relative` ancestor |
| `gm-fixed` | Stuck to the window, even when scrolling |
| `gm-sticky` | Normal until it reaches the edge while scrolling; then it sticks |

All of them have a [breakpoint](/docs/layout/breakpoints) version: `gm-static gm-md-sticky`.

## Offsets

| Class | Value |
| --- | --- |
| `gm-inset-0` | Fills its container (top, bottom and sides at 0) |
| `gm-inset-x-0` / `gm-inset-y-0` | Both sides / top and bottom at 0 |
| `gm-top-0` / `gm-bottom-0` | Stuck to the top / bottom |
| `gm-start-0` / `gm-end-0` | Stuck to the start / end of the line (left and right in English) |

A tag in the corner of a card:

```html
<div class="gm-card gm-relative gm-max-w-xs">
  <span class="gm-tag gm-theme-pink gm-theme-solid gm-absolute gm-top-0 gm-end-0 gm-m-3">New</span>
  <h3 class="gm-mt-0">Card</h3>
  <p class="gm-mb-0">The tag is placed relative to the card because the card has gm-relative.</p>
</div>
```

## Layers

`gm-z-0`, `gm-z-10`, `gm-z-20`, `gm-z-30`, `gm-z-40` and `gm-z-50` (and `gm-z-auto`): the highest number goes on top. They go in steps of 10 so something can fit in between. They only work on positioned elements (`gm-relative`, `gm-absolute`…), flex items and grid items.

```html
<div class="gm-relative gm-p-8 gm-max-w-sm">
  <div class="gm-absolute gm-inset-0 gm-z-0 gm-rounded-sm gm-theme-sky gm-theme-solid"></div>
  <p class="gm-relative gm-z-10 gm-m-0 gm-font-semibold gm-[color:var(--gm-on-pastel)]">This text sits on top of the colored background: it has gm-z-10 and the background, gm-z-0.</p>
</div>
```

## Accessibility

- Whatever goes on top must not hide content people need to read or press (WCAG 2.4.11): leave room below it or make it closable.
- `gm-fixed` and `gm-sticky` take space away on short screens or with large text: use them sparingly (a navigation bar) and test them at 200 % zoom.
