# Backgrounds

How a background image or [gradient](/docs/utilities/gradients) is placed. The background color is in [Background color](/docs/color/background).

| Class | What it does |
| --- | --- |
| `gm-bg-cover` / `gm-bg-contain` / `gm-bg-auto` | Fills the box, cropping / shows whole / its own size |
| `gm-bg-center` / `-top` / `-bottom` / `-left` / `-right` | Where it is placed |
| `gm-bg-repeat` / `-no-repeat` / `-repeat-x` / `-repeat-y` | Whether it repeats (and which way) |
| `gm-bg-fixed` / `-local` / `-scroll` | Whether it stays still while scrolling |
| `gm-bg-clip-border` / `-padding` / `-content` | How far the background reaches (border, padding or content) |
| `gm-bg-clip-text` | The background only shows through the letters |

The image, with an [arbitrary value](/docs/utilities/arbitrary): `gm-bg-[url(/img/photo.jpg)]`.

```html
<div class="gm-bg-[url(/media/album-4.jpg)] gm-bg-cover gm-bg-center gm-rounded-md gm-h-[10rem]" role="img" aria-label="Album cover"></div>
```

## How to: a checkered pattern

Two repeating gradients: the one in the generators to show transparency.

```html
<div class="gm-bg-[repeating-conic-gradient(#d6d6da_0_25%,#f5f5f7_0_50%)] gm-bg-[length:1.5rem_1.5rem] gm-rounded-md gm-h-[8rem]"></div>
```

## Accessibility

- Screen readers do not see a background image: if it says something, give it `role="img"` and an `aria-label`, or use an `<img>` with `alt`.
- With `gm-bg-clip-text` the letters are the background: check they read (4.5:1) across the whole text.
