# Text outline

`.gm-text-outline` adds, **in dark mode**, a thin black outline and a soft shadow to text. It keeps text readable over lights, images or the TV effect. In light mode it changes nothing.

## Example

This is how it looks over a background with lights in dark mode:

```html
<div data-theme="dark" style="display: grid; place-items: center; min-height: 160px; border-radius: 12px; color: #f5f5f7; background: radial-gradient(circle at 30% 40%, #1cabb0, transparent 55%), radial-gradient(circle at 70% 60%, #8c57e9, transparent 55%), #000">
  <p class="gm-text-outline" style="margin: 0; font-size: 2rem; font-weight: 800">Readable over the lights</p>
</div>
```

It is the one used by the title and text of this site's home page.

## Accessibility

- The outline helps text reach its contrast even when the background changes from point to point (WCAG 1.4.3).
- Even so, measure the contrast over the real background (with a screenshot), not just the background color.
