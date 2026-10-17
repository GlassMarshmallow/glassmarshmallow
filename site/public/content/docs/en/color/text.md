# Colors

Change the color of the text with a class. Each color uses its text tone, which can be read in light and dark mode.

## Palette

```html
<div style="display: grid; gap: 6px">
  <div class="gm-text-sky">.gm-text-sky</div>
  <div class="gm-text-blue">.gm-text-blue</div>
  <div class="gm-text-lavender">.gm-text-lavender</div>
  <div class="gm-text-pink">.gm-text-pink</div>
  <div class="gm-text-peach">.gm-text-peach</div>
  <div class="gm-text-lemon">.gm-text-lemon</div>
  <div class="gm-text-mint">.gm-text-mint</div>
  <div class="gm-text-coral">.gm-text-coral</div>
</div>
```

## Black, white and grays

Grays that would be too light to read in light mode use `gray-600`, and grays that would be too dark in dark mode use `gray-500`, so the text is always readable.

```html
<div style="display: grid; gap: 6px">
  <div class="gm-text-white">.gm-text-white</div>
  <div class="gm-text-gray-100">.gm-text-gray-100</div>
  <div class="gm-text-gray-200">.gm-text-gray-200</div>
  <div class="gm-text-gray-300">.gm-text-gray-300</div>
  <div class="gm-text-gray-400">.gm-text-gray-400</div>
  <div class="gm-text-gray-500">.gm-text-gray-500</div>
  <div class="gm-text-gray-600">.gm-text-gray-600</div>
  <div class="gm-text-gray-700">.gm-text-gray-700</div>
  <div class="gm-text-gray-800">.gm-text-gray-800</div>
  <div class="gm-text-gray-900">.gm-text-gray-900</div>
  <div class="gm-text-black">.gm-text-black</div>
</div>
```

## Page text

The three text colors of the interface, which change with light and dark mode.

```html
<div style="display: grid; gap: 6px">
  <div class="gm-text-body">.gm-text-body</div>
  <div class="gm-text-secondary">.gm-text-secondary</div>
  <div class="gm-text-muted">.gm-text-muted</div>
</div>
```

## Accessibility

- Every `.gm-text-*` class reaches at least 4.5:1 on the page background (AA).
- Don't use color alone to give meaning: add a word or an icon.
