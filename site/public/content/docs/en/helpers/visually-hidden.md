# Visually hidden

`.gm-visually-hidden` hides text visually but keeps it for screen readers. Use it to give context that the design shows but cannot be read.

## Example

An icon-only button: sighted people see the cross; screen reader users hear “Delete photo”.

```html
<button type="button" class="gm-icon-btn">
  <i class="gmi gmi-x-lg" aria-hidden="true"></i>
  <span class="gm-visually-hidden">Delete photo</span>
</button>
```

## When to use it

- Field labels that the design makes clear (a search box with the magnifier).
- Section headings that are not shown but help moving around with a screen reader.
- Announced messages (`aria-live`) that take no space.

## When not to

- To hide something from everyone: use `hidden` or `display: none`.
- To hide something only from screen readers (a decorative icon): use `aria-hidden="true"`.
- If the text would help everyone, better to show it.
