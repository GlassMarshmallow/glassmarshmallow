# Chip

A glass pill for quick options, like the suggested questions of a chat. It is the one from the AI portfolio template: the same glass as the accordion and, on hover, it rises a little and the border takes the lights of the illustration (turquoise in dark mode).

## Example

```html
<div class="gm-flex gm-flex-wrap gm-gap-2 gm-justify-center">
  <button type="button" class="gm-chip">Which technologies do you use?</button>
  <button type="button" class="gm-chip">How much does a website cost?</button>
  <button type="button" class="gm-chip">Do you build online shops?</button>
  <button type="button" class="gm-chip gm-chip--accent"><i class="gmi gmi-stars" aria-hidden="true"></i>I want a project</button>
</div>
```

## Accent

`.gm-chip--accent` always has the lights border and semibold text: for the main action of the group.

## On phones

Many chips in a row fit better in a [swipe row](/docs/components/carousel#swipe-row), as in the template:

```html
<div class="gm-scroll-row" role="group" aria-label="Quick questions" style="max-width: 320px">
  <button type="button" class="gm-chip">Which technologies do you use?</button>
  <button type="button" class="gm-chip">How much does a website cost?</button>
  <button type="button" class="gm-chip">Do you build online shops?</button>
</div>
```

## Disabled

With `disabled`, or with `aria-disabled="true"` if it must stay focusable (for example, inside a swipe row while the AI is thinking).

## Accessibility

- They are `<button>` elements with text: they say what they do.
- They look smaller than 44 px, but the touch area reaches 44 px (WCAG 2.5.5).
- Text reaches 7:1 on the glass in both modes; the border, 3:1.
