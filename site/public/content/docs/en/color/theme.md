# Theme

Combine a color class with a use class to set the background, text and border of any element in one go, like Bootstrap's theme utilities.

## How it works

1. **The color:** `.gm-theme-sky`, `.gm-theme-blue`, `.gm-theme-lavender`, `.gm-theme-pink`, `.gm-theme-peach`, `.gm-theme-lemon`, `.gm-theme-mint` or `.gm-theme-coral`.
2. **The use:** `.gm-theme-solid`, `.gm-theme-glass` or `.gm-theme-text`.

The black, white and gray classes work the same way: `.gm-theme-white`, `.gm-theme-gray-100` to `.gm-theme-gray-900` and `.gm-theme-black`.

## Solid

`.gm-theme-solid` paints the pastel as the background, with black text in both light and dark mode.

```html
<div style="display: grid; gap: 10px">
  <div class="gm-theme-sky gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-sky .gm-theme-solid</div>
  <div class="gm-theme-blue gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-blue .gm-theme-solid</div>
  <div class="gm-theme-lavender gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-lavender .gm-theme-solid</div>
  <div class="gm-theme-pink gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-pink .gm-theme-solid</div>
  <div class="gm-theme-peach gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-peach .gm-theme-solid</div>
  <div class="gm-theme-lemon gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-lemon .gm-theme-solid</div>
  <div class="gm-theme-mint gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-mint .gm-theme-solid</div>
  <div class="gm-theme-coral gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-coral .gm-theme-solid</div>
</div>
```

With grays, the text is black up to `gray-500` and white from `gray-600`:

```html
<div style="display: grid; gap: 10px">
  <div class="gm-theme-white gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-white .gm-theme-solid</div>
  <div class="gm-theme-gray-100 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-100 .gm-theme-solid</div>
  <div class="gm-theme-gray-200 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-200 .gm-theme-solid</div>
  <div class="gm-theme-gray-300 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-300 .gm-theme-solid</div>
  <div class="gm-theme-gray-400 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-400 .gm-theme-solid</div>
  <div class="gm-theme-gray-500 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-500 .gm-theme-solid</div>
  <div class="gm-theme-gray-600 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-600 .gm-theme-solid</div>
  <div class="gm-theme-gray-700 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-700 .gm-theme-solid</div>
  <div class="gm-theme-gray-800 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-800 .gm-theme-solid</div>
  <div class="gm-theme-gray-900 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-900 .gm-theme-solid</div>
  <div class="gm-theme-black gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-black .gm-theme-solid</div>
</div>
```

## Glass

`.gm-theme-glass` is the glazed version: the color at 18 % over whatever is behind it, a 1 px border at 41 %, a 7 px blur, 21 px corners and a soft shadow. The text keeps the page color.

```html
<div style="display: grid; gap: 10px">
  <div class="gm-theme-sky gm-theme-glass" style="padding: 12px 16px">.gm-theme-sky .gm-theme-glass</div>
  <div class="gm-theme-blue gm-theme-glass" style="padding: 12px 16px">.gm-theme-blue .gm-theme-glass</div>
  <div class="gm-theme-lavender gm-theme-glass" style="padding: 12px 16px">.gm-theme-lavender .gm-theme-glass</div>
  <div class="gm-theme-pink gm-theme-glass" style="padding: 12px 16px">.gm-theme-pink .gm-theme-glass</div>
  <div class="gm-theme-peach gm-theme-glass" style="padding: 12px 16px">.gm-theme-peach .gm-theme-glass</div>
  <div class="gm-theme-lemon gm-theme-glass" style="padding: 12px 16px">.gm-theme-lemon .gm-theme-glass</div>
  <div class="gm-theme-mint gm-theme-glass" style="padding: 12px 16px">.gm-theme-mint .gm-theme-glass</div>
  <div class="gm-theme-coral gm-theme-glass" style="padding: 12px 16px">.gm-theme-coral .gm-theme-glass</div>
</div>
```

```html
<div style="display: grid; gap: 10px">
  <div class="gm-theme-white gm-theme-glass" style="padding: 12px 16px">.gm-theme-white .gm-theme-glass</div>
  <div class="gm-theme-gray-100 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-100 .gm-theme-glass</div>
  <div class="gm-theme-gray-200 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-200 .gm-theme-glass</div>
  <div class="gm-theme-gray-300 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-300 .gm-theme-glass</div>
  <div class="gm-theme-gray-400 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-400 .gm-theme-glass</div>
  <div class="gm-theme-gray-500 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-500 .gm-theme-glass</div>
  <div class="gm-theme-gray-600 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-600 .gm-theme-glass</div>
  <div class="gm-theme-gray-700 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-700 .gm-theme-glass</div>
  <div class="gm-theme-gray-800 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-800 .gm-theme-glass</div>
  <div class="gm-theme-gray-900 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-900 .gm-theme-glass</div>
  <div class="gm-theme-black gm-theme-glass" style="padding: 12px 16px">.gm-theme-black .gm-theme-glass</div>
</div>
```

## Colored text

`.gm-theme-text` writes the text in the color of the palette, in a darker tone so it can be read on the light background.

```html
<div style="display: grid; gap: 10px">
  <div class="gm-theme-sky gm-theme-text">.gm-theme-sky .gm-theme-text</div>
  <div class="gm-theme-blue gm-theme-text">.gm-theme-blue .gm-theme-text</div>
  <div class="gm-theme-lavender gm-theme-text">.gm-theme-lavender .gm-theme-text</div>
  <div class="gm-theme-pink gm-theme-text">.gm-theme-pink .gm-theme-text</div>
  <div class="gm-theme-peach gm-theme-text">.gm-theme-peach .gm-theme-text</div>
  <div class="gm-theme-lemon gm-theme-text">.gm-theme-lemon .gm-theme-text</div>
  <div class="gm-theme-mint gm-theme-text">.gm-theme-mint .gm-theme-text</div>
  <div class="gm-theme-coral gm-theme-text">.gm-theme-coral .gm-theme-text</div>
</div>
```

