# Background

Paint the background of any element with a class. Unlike Bootstrap, each background class also sets the text color that can be read on it, so the result always meets AA.

## Palette

The solid pastel, with black text in light and dark mode.

```html
<div style="display: grid; gap: 8px">
  <div class="gm-bg-sky" style="padding: 12px 16px; border-radius: 12px">.gm-bg-sky</div>
  <div class="gm-bg-blue" style="padding: 12px 16px; border-radius: 12px">.gm-bg-blue</div>
  <div class="gm-bg-lavender" style="padding: 12px 16px; border-radius: 12px">.gm-bg-lavender</div>
  <div class="gm-bg-pink" style="padding: 12px 16px; border-radius: 12px">.gm-bg-pink</div>
  <div class="gm-bg-peach" style="padding: 12px 16px; border-radius: 12px">.gm-bg-peach</div>
  <div class="gm-bg-lemon" style="padding: 12px 16px; border-radius: 12px">.gm-bg-lemon</div>
  <div class="gm-bg-mint" style="padding: 12px 16px; border-radius: 12px">.gm-bg-mint</div>
  <div class="gm-bg-coral" style="padding: 12px 16px; border-radius: 12px">.gm-bg-coral</div>
</div>
```

## Black, white and grays

Black text up to `gray-500` and white text from `gray-600`.

```html
<div style="display: grid; gap: 8px">
  <div class="gm-bg-white" style="padding: 12px 16px; border-radius: 12px">.gm-bg-white</div>
  <div class="gm-bg-gray-100" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-100</div>
  <div class="gm-bg-gray-200" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-200</div>
  <div class="gm-bg-gray-300" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-300</div>
  <div class="gm-bg-gray-400" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-400</div>
  <div class="gm-bg-gray-500" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-500</div>
  <div class="gm-bg-gray-600" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-600</div>
  <div class="gm-bg-gray-700" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-700</div>
  <div class="gm-bg-gray-800" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-800</div>
  <div class="gm-bg-gray-900" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-900</div>
  <div class="gm-bg-black" style="padding: 12px 16px; border-radius: 12px">.gm-bg-black</div>
</div>
```

The scales also include `gray-025`, `gray-050`, `gray-950` and `gray-975` (`.gm-bg-gray-025`…).

## Interface backgrounds

They follow light and dark mode: the page background, the background of cards and panels, and no background.

```html
<div style="display: grid; gap: 8px">
  <div class="gm-bg-body" style="padding: 12px 16px; border-radius: 12px">.gm-bg-body</div>
  <div class="gm-bg-surface" style="padding: 12px 16px; border-radius: 12px">.gm-bg-surface</div>
  <div class="gm-bg-transparent" style="padding: 12px 16px; border-radius: 12px">.gm-bg-transparent</div>
</div>
```

## Glazed background

For the glazed version, use the [Theme](/docs/color/theme) classes: `.gm-theme-sky .gm-theme-glass`.
