# Progress

How much of something is done: reading a book, uploading a file, the steps of a form. A thin line on gray with the done part in the accent color and a text below. It is the reading bar from My Book Box.

## Example

```html
<div class="gm-progress gm-max-w-sm">
  <progress class="gm-progress__bar" id="example-read" max="100" value="45">45 %</progress>
  <label class="gm-progress__label" for="example-read">45 % read · page 162 of 360</label>
</div>
```

## Large

`.gm-progress--lg`, when the bar is the main thing (an upload, an installation).

```html
<div class="gm-progress gm-progress--lg gm-max-w-md">
  <progress class="gm-progress__bar" id="example-upload" max="100" value="72">72 %</progress>
  <label class="gm-progress__label" for="example-upload">Uploading “novel.epub”: 72 %</label>
</div>
```

## Unknown duration

Without `value`, the bar shows a segment moving back and forth: work is happening, but how much is left is unknown.

```html
<div class="gm-progress gm-max-w-sm">
  <progress class="gm-progress__bar" id="example-loading" max="100">Loading</progress>
  <label class="gm-progress__label" for="example-loading">Loading the library…</label>
</div>
```

## Changing the value

It is an HTML `<progress>`: change it with its `value`.

```js
document.querySelector('#read').value = 60;
```

## Accessibility

- Use `<progress>` with its `max` and `value`: screen readers say the percentage. The `<label>` gives it a name.
- Also write the data in the text (“45 % read”): the bar alone does not give the exact number.
- The done part reaches more than 3:1 on the gray in both modes (WCAG 1.4.11), and the gray text 7:1 (AAA).
- If progress changes on its own (an upload), announce the end with a status message (`role="status"`), not every change.
- No motion if the person asks for it (`prefers-reduced-motion`).
