# Tooltip

A small bubble with extra information about a button or a control. It uses the style of the reading bubble of My Book Box: dark background, white text and a soft shadow, in light and dark mode.

## How it works

Wrap the element and its bubble in `.gm-tooltip`. The bubble has `role="tooltip"` and an `id`, and the element points to it with `aria-describedby`, so screen readers read it.

It shows when you hover the element and when you reach it with the keyboard. Move the pointer onto the bubble and it stays open.

```html
<div class="gm-flex gm-flex-wrap gm-justify-center gm-items-center gm-gap-3 gm-pt-12">
  <span class="gm-tooltip">
    <button type="button" class="gm-icon-btn" aria-label="Search" aria-describedby="tip-1"><i class="gmi gmi-search" aria-hidden="true"></i></button>
    <span class="gm-tooltip__bubble" role="tooltip" id="tip-1">Search the library</span>
  </span>
  <span class="gm-tooltip">
    <button type="button" class="gm-icon-btn" aria-label="Download" aria-describedby="tip-2"><i class="gmi gmi-download" aria-hidden="true"></i></button>
    <span class="gm-tooltip__bubble" role="tooltip" id="tip-2">Download the book</span>
  </span>
  <span class="gm-tooltip">
    <button type="button" class="gm-icon-btn" aria-label="Settings" aria-describedby="tip-3"><i class="gmi gmi-gear" aria-hidden="true"></i></button>
    <span class="gm-tooltip__bubble" role="tooltip" id="tip-3">Settings</span>
  </span>
</div>
```

## Below

By default it goes above. Add `.gm-tooltip--bottom` to put it below.

```html
<div class="gm-flex gm-flex-wrap gm-justify-center gm-items-center gm-gap-3 gm-pb-12">
  <span class="gm-tooltip gm-tooltip--bottom">
    <button type="button" class="gm-icon-btn" aria-label="Share" aria-describedby="tip-4"><i class="gmi gmi-share" aria-hidden="true"></i></button>
    <span class="gm-tooltip__bubble" role="tooltip" id="tip-4">Share with a friend</span>
  </span>
</div>
```

## Next to an edge

Centered bubbles can go past the edge of the screen. Next to the left edge, add `.gm-tooltip--start`; next to the right one, `.gm-tooltip--end`.

```html
<div class="gm-flex gm-flex-wrap gm-justify-between gm-items-center gm-gap-3 gm-pt-12">
  <span class="gm-tooltip gm-tooltip--start">
    <button type="button" class="gm-icon-btn" aria-label="Back" aria-describedby="tip-6"><i class="gmi gmi-arrow-left" aria-hidden="true"></i></button>
    <span class="gm-tooltip__bubble" role="tooltip" id="tip-6">Back to the library</span>
  </span>
  <span class="gm-tooltip gm-tooltip--end">
    <button type="button" class="gm-icon-btn" aria-label="Settings" aria-describedby="tip-7"><i class="gmi gmi-gear" aria-hidden="true"></i></button>
    <span class="gm-tooltip__bubble" role="tooltip" id="tip-7">Reader settings</span>
  </span>
</div>
```

## On a button with text

A tooltip adds information; it does not replace the name of the button. On a button with text, use it to explain something more.

```html
<div class="gm-flex gm-flex-wrap gm-justify-center gm-items-center gm-gap-3 gm-pt-12">
  <span class="gm-tooltip">
    <button type="button" class="gm-btn gm-btn--secondary gm-btn--sm" aria-describedby="tip-5">Publish</button>
    <span class="gm-tooltip__bubble" role="tooltip" id="tip-5">Everyone with the link will see it</span>
  </span>
</div>
```

## Close it with Escape

WCAG 2.2 asks that a tooltip can be closed without moving the pointer or the focus. As the framework is only CSS, add this small script to your page so that the Escape key closes it:

```js
// Escape hides the open tooltip until the pointer or the focus leaves it
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  document.querySelectorAll('.gm-tooltip:hover, .gm-tooltip:focus-within')
    .forEach((tip) => tip.classList.add('is-dismissed'));
});
for (const type of ['mouseout', 'focusout']) {
  document.addEventListener(type, (event) => {
    const tip = event.target.closest?.('.gm-tooltip');
    if (tip && !tip.contains(event.relatedTarget)) tip.classList.remove('is-dismissed');
  });
}
```

## Accessibility

- White text on #1d1d1f: 16.8:1 (AAA), in light and dark mode.
- It shows with the pointer and with the keyboard, it stays open while the pointer is on it, and it closes with Escape (with the script).
- Don’t put links or buttons inside: a tooltip is only text. For interactive content, use a menu or a dialog.
- On touch screens there is no hover, so don’t put essential information only in a tooltip.
- With «reduce motion», it appears without animation.
