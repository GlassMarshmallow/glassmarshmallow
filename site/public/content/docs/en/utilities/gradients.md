# Gradients

Build your own gradients with classes: a **direction** (or a shape) and the start, middle and end **colors**. Like Tailwind's. To do it by eye and copy the result, there is the [gradient generator](/tools/gradient-generator).

## Direction and colors

```html
<div class="gm-bg-linear-to-r gm-from-sky gm-to-lavender gm-rounded-md gm-p-8"></div>
```

| Class | What it does |
| --- | --- |
| `gm-bg-linear-to-t` / `-tr` / `-r` / `-br` / `-b` / `-bl` / `-l` / `-tl` | Gradient towards the top, top right, right… |
| `gm-bg-radial` | Circular, from the center |
| `gm-bg-conic` | Conic, turning around the center |
| `gm-from-…` | The start color |
| `gm-via-…` | A middle color (optional) |
| `gm-to-…` | The end color (transparent if not set) |
| `gm-bg-none` | Removes the gradient |

The colors are the palette ones (`sky`, `blue`, `lavender`, `pink`, `peach`, `lemon`, `mint`, `coral`), `white`, `black`, `transparent`, `current` (the text color) and the page ones (`body`, `surface`, `text`, `accent`, `line`). Any other one, with an [arbitrary value](/docs/utilities/arbitrary): `gm-from-[#5cdfeb]`.

## With a middle color

```html
<div class="gm-bg-linear-to-r gm-from-sky gm-via-pink gm-to-mint gm-rounded-md gm-p-8"></div>
```

## Where each color starts and ends

`gm-from-25%`, `gm-via-60%`, `gm-to-75%`…: from 0 to 100 in steps of 10 (plus 25 and 75). Before `gm-from-25%`, everything is the first color; after `gm-to-75%`, everything is the last.

```html
<div class="gm-bg-linear-to-r gm-from-sky gm-from-25% gm-to-lavender gm-to-75% gm-rounded-md gm-p-8"></div>
```

## Circular

The lights behind the home page are circular gradients from a color to transparent.

```html
<div class="gm-bg-radial gm-from-pink gm-to-transparent gm-to-70% gm-rounded-md gm-p-16"></div>
```

## How to: a fade with no step

To make something blend into the page (like the end of this site), the gradient goes from the page color to transparent. With only two colors you can see where it starts: a "step" shows. The trick is a middle color halfway, at half opacity, a bit before the middle: it starts unnoticed and reaches the page color smoothly.

```html-code
<div class="gm-absolute gm-inset-x-0 gm-bottom-0 gm-h-[17.5rem] gm-pointer-events-none
            gm-bg-linear-to-t gm-from-body gm-via-[color-mix(in_srgb,var(--gm-bg)_50%,transparent)] gm-via-30% gm-to-transparent"></div>
```

It works in both modes: `gm-from-body` is the page background in light and dark, and the middle one is that same color at half (`color-mix(…)`).

## Accessibility

- If you put text on a gradient, check the contrast at the **lightest** and the **darkest** point of the background, not just one.
- A gradient is decoration: do not use it as the only way to convey information.
