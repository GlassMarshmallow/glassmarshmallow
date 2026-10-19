# Overflow

What happens to whatever does not fit in its box: it shows, it is clipped or it can be scrolled. Like Tailwind's [overflow](https://tailwindcss.com/docs/overflow).

| Class | What does not fit… |
| --- | --- |
| `gm-overflow-visible` | Spills out of the box (the default) |
| `gm-overflow-hidden` | Is clipped and cannot be seen |
| `gm-overflow-clip` | Is clipped, like `hidden`, but the box cannot be scrolled, not even with code |
| `gm-overflow-auto` | Can be scrolled, with a scrollbar only when needed |
| `gm-overflow-scroll` | Can be scrolled, always with a scrollbar |

Each one has a single-axis version: `gm-overflow-x-auto` (sideways only) and `gm-overflow-y-auto` (up and down only).

A wide table that scrolls sideways on phones instead of widening the page:

```html
<div class="gm-overflow-x-auto gm-max-w-xs gm-border gm-rounded-sm" role="region" aria-label="Pricing table" tabindex="0">
  <table class="gm-m-0">
    <tr><th>Plan</th><th>Price</th><th>Users</th><th>Storage</th><th>Support</th></tr>
    <tr><td>Basic</td><td>€0</td><td>1</td><td>1 GB</td><td>Email</td></tr>
  </table>
</div>
```

## Accessibility

- If a box scrolls (`auto` or `scroll`), give it `tabindex="0"`, a `role="region"` and an `aria-label`: it can then be moved with the keyboard and screen readers say what it is (WCAG 2.1.1).
- Do not clip text with `gm-overflow-hidden` if it disappears with large text: content must be readable in full at 200 % (WCAG 1.4.4).
