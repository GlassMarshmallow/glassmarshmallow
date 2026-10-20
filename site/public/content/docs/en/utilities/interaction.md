# Interaction and visibility

How an element responds to the mouse and whether it is seen. Like Tailwind's [cursor](https://tailwindcss.com/docs/cursor), pointer-events, user-select and visibility.

## Cursor

| Class | Cursor |
| --- | --- |
| `gm-cursor-pointer` | The hand, as on links |
| `gm-cursor-default` | The arrow |
| `gm-cursor-not-allowed` | Not allowed, for something that cannot be used right now |

## Pointer and selection

| Class | Does |
| --- | --- |
| `gm-pointer-events-none` | The element does not get the mouse or touches: they go to whatever is below (decorations on top of a button) |
| `gm-pointer-events-auto` | Gets them again (a child inside a `pointer-events-none`) |
| `gm-select-none` | Its text cannot be selected (buttons, icons) |
| `gm-select-all` | One click selects all the text (codes to copy) |

```html
<p class="gm-m-0">Your code: <code class="gm-select-all">GM-2026-SARA</code> (one click selects all of it)</p>
```

## Visibility

| Class | Does |
| --- | --- |
| `gm-invisible` | Not seen, but still takes its space (and screen readers do not read it either) |
| `gm-visible` | Seen again |

So that it takes no space, use [`gm-hidden`](/docs/utilities/display); to hide it only visually, [`gm-visually-hidden`](/docs/helpers/visually-hidden).

```html
<div class="gm-flex gm-gap-2">
  <span class="gm-tag gm-theme-mint gm-theme-solid">One</span>
  <span class="gm-tag gm-theme-mint gm-theme-solid gm-invisible">Two</span>
  <span class="gm-tag gm-theme-mint gm-theme-solid">Three</span>
</div>
```

## Scroll and forms

| Class | What it does |
| --- | --- |
| `gm-scroll-smooth` / `gm-scroll-auto` | Smooth (or normal) scrolling when going to an anchor |
| `gm-scroll-mt-4` … `gm-scroll-mt-24` | Space on top when reaching an anchor (so a fixed bar does not cover it) |
| `gm-snap-x` / `gm-snap-y` / `gm-snap-proximity` | The box stops on its children while scrolling (sideways / up and down / only when close) |
| `gm-snap-start` / `-center` / `-end` | Where it stops on each child |
| `gm-touch-none` / `gm-touch-manipulation` | No touch gestures / no double-tap delay |
| `gm-resize` / `gm-resize-y` / `gm-resize-none` | Whether a text field can be resized |
| `gm-accent-sky`, `gm-accent-pink`… | The color of checkboxes, radio buttons and browser bars |
| `gm-caret-pink`, `gm-caret-accent`… | The color of the typing cursor |

```html
<div class="gm-flex gm-gap-3 gm-overflow-x-auto gm-snap-x gm-max-w-sm gm-pb-2" role="region" aria-label="Photos" tabindex="0">
  <img class="gm-snap-start gm-w-[8rem] gm-rounded-sm" src="media/album-1.jpg" alt="Cover 1">
  <img class="gm-snap-start gm-w-[8rem] gm-rounded-sm" src="media/album-2.jpg" alt="Cover 2">
  <img class="gm-snap-start gm-w-[8rem] gm-rounded-sm" src="media/album-3.jpg" alt="Cover 3">
  <img class="gm-snap-start gm-w-[8rem] gm-rounded-sm" src="media/album-4.jpg" alt="Cover 4">
</div>
```

## Accessibility

- `gm-cursor-pointer` does not turn anything into a button: whatever is pressed must be a `<button>` or an `<a>`, so it works with the keyboard.
- Do not use `gm-select-none` on text someone may want to copy (addresses, prices, codes).
- With `gm-pointer-events-none` on something that looks like a button, nobody can use it with the mouse: if it is disabled, say so with `disabled` or `aria-disabled`.
