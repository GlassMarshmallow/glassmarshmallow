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

## Accessibility

- `gm-cursor-pointer` does not turn anything into a button: whatever is pressed must be a `<button>` or an `<a>`, so it works with the keyboard.
- Do not use `gm-select-none` on text someone may want to copy (addresses, prices, codes).
- With `gm-pointer-events-none` on something that looks like a button, nobody can use it with the mouse: if it is disabled, say so with `disabled` or `aria-disabled`.
