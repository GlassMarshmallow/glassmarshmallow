# Background

Paint the background of any element with a class. Unlike Bootstrap, each background class also sets the text color that can be read on it, so the result always meets AA.

## Palette

The solid pastel, with black text in light and dark mode.

```html
<div class="gm-grid gm-gap-2">
  <div class="gm-bg-sky gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-sky</div>
  <div class="gm-bg-blue gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-blue</div>
  <div class="gm-bg-lavender gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-lavender</div>
  <div class="gm-bg-pink gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-pink</div>
  <div class="gm-bg-peach gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-peach</div>
  <div class="gm-bg-lemon gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-lemon</div>
  <div class="gm-bg-mint gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-mint</div>
  <div class="gm-bg-coral gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-coral</div>
</div>
```

## Black, white and grays

Black text up to `gray-500` and white text from `gray-600`.

```html
<div class="gm-grid gm-gap-2">
  <div class="gm-bg-white gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-white</div>
  <div class="gm-bg-gray-100 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-100</div>
  <div class="gm-bg-gray-200 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-200</div>
  <div class="gm-bg-gray-300 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-300</div>
  <div class="gm-bg-gray-400 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-400</div>
  <div class="gm-bg-gray-500 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-500</div>
  <div class="gm-bg-gray-600 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-600</div>
  <div class="gm-bg-gray-700 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-700</div>
  <div class="gm-bg-gray-800 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-800</div>
  <div class="gm-bg-gray-900 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-900</div>
  <div class="gm-bg-black gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-black</div>
</div>
```

The scales also include `gray-025`, `gray-050`, `gray-950` and `gray-975` (`.gm-bg-gray-025`…).

## Interface backgrounds

They follow light and dark mode: the page background, the background of cards and panels, and no background.

```html
<div class="gm-grid gm-gap-2">
  <div class="gm-bg-body gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-body</div>
  <div class="gm-bg-surface gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-surface</div>
  <div class="gm-bg-transparent gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-transparent</div>
</div>
```

## Glazed background

For the glazed version, use the [Theme](/docs/color/theme) classes: `.gm-theme-sky .gm-theme-glass`.
