# How the logo was made

The GlassMarshmallow logo is **two glass marshmallows**: two soft panels with very rounded corners, one in front of the other, on a glass tile. It is made with the framework itself: its colors come from this site's [tools](/tools) and its shape, from the utilities. The SVG the site uses (`logo.svg`) is generated from that same code.

## The logo, made with classes

On the left, the logo made only with GlassMarshmallow classes; on the right, the SVG. They are the same: compared pixel by pixel, the average difference is half a point out of 255.

```html
<div class="gm-d-flex gm-flex-wrap gm-gap-8 gm-items-end">
  <figure class="gm-m-0 gm-d-grid gm-gap-2 gm-justify-items-center">
    <div class="gm-glass-logo gm-w-[12rem]">
      <div class="gm-relative gm-aspect-square gm-[container-type:inline-size] gm-rounded-[22.265625%] gm-bg-[linear-gradient(180deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.16)_100%)] gm-before:[position:absolute] gm-before:inset-[0] gm-before:rounded-[inherit] gm-before:p-[0.976562cqw] gm-before:bg-[linear-gradient(135deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.6)_100%)] gm-before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] gm-before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] gm-before:[-webkit-mask-composite:xor]" role="img" aria-label="GlassMarshmallow">
        <span class="gm-absolute gm-start-[23.4375%] gm-top-[23.4375%] gm-w-[37.1094%] gm-h-[37.1094%] gm-rounded-[23.1579%] gm-bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_50%),linear-gradient(45deg,#3cd2ff_0%,#8c64ff_100%)] gm-before:[position:absolute] gm-before:inset-[-0.488281cqw] gm-before:rounded-[23.8462%] gm-before:p-[0.976562cqw] gm-before:bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.25)_100%)] gm-before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] gm-before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] gm-before:[-webkit-mask-composite:xor]"></span>
        <span class="gm-absolute gm-start-[39.4531%] gm-top-[39.4531%] gm-w-[37.1094%] gm-h-[37.1094%] gm-rounded-[23.1579%] gm-bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_50%),linear-gradient(45deg,rgba(140,100,255,0.85)_0%,rgba(255,150,70,0.85)_100%)] gm-before:[position:absolute] gm-before:inset-[-0.488281cqw] gm-before:rounded-[23.8462%] gm-before:p-[0.976562cqw] gm-before:bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.25)_100%)] gm-before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] gm-before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] gm-before:[-webkit-mask-composite:xor]"></span>
      </div>
    </div>
    <figcaption class="gm-small gm-muted">With classes</figcaption>
  </figure>
  <figure class="gm-m-0 gm-d-grid gm-gap-2 gm-justify-items-center">
    <img class="gm-glass-logo gm-w-[12rem]" src="/logo.svg" alt="" width="192" height="192">
    <figcaption class="gm-small gm-muted">SVG</figcaption>
  </figure>
</div>
```

## The colors, with the tools

Each gradient of the logo was made with a tool and copied as is:

| Part | Tool | Settings |
| --- | --- | --- |
| Tile fill | [Single-color gradient](/tools/single-color-gradient) | White, linear, 180°, opacity from 42% to 16%, extent 100% |
| Shine on each panel | [Single-color gradient](/tools/single-color-gradient) | White, linear, 180°, opacity from 55% to 0%, extent 50% |
| Light edge of each panel | [Single-color gradient](/tools/single-color-gradient) | White, linear, 135°, opacity from 95% to 25%, extent 100% |
| Back panel | [Gradient generator](/tools/gradient-generator) | 45°, `#3cd2ff` at 0% and `#8c64ff` at 100% |
| Front panel | [Gradient generator](/tools/gradient-generator) | 45°, `#8c64ff` and `#ff9646` at 85% opacity |
| Light edge of the tile | [Gradient generator](/tools/gradient-generator) | 135°, white at 90% at 0%, at 25% at 50% and at 60% at 100% |

The three colors (cyan, violet and amber) are the three lights that give GlassMarshmallow its look.

## The shape, with the utilities

1. **The tile:** `gm-aspect-square` (square), `gm-rounded-[22.265625%]` (the curve) and its fill with `gm-bg-[…]`.
2. **Its light edge:** a `gm-before:` layer with the gradient and a mask that only shows the outline (`gm-before:[mask:…]`). That way the edge has its own gradient without covering the glass.
3. **The two panels:** `gm-absolute`, with their place and size in %, their corners (`gm-rounded-[23.1579%]`) and two gradients together in `gm-bg-[…]`: the shine on top and the color below.
4. **The panels' edges:** like the tile's, with `gm-before:` and the mask.
5. **Scaling:** sizes are in % and in `cqw`, hundredths of the logo's width (that is why the tile has `gm-[container-type:inline-size]`). The same code works at 32 px and at 512 px; only the container's width changes (`gm-w-[12rem]`).

The classes in brackets are [arbitrary values](/docs/utilities/arbitrary): `npx glassmarshmallow build` writes them.

## Day and night, the same code

The code is exactly the same in light and dark mode. What changes is set by the framework, through `gm-glass-logo`:

| | Light mode | Dark mode |
| --- | --- | --- |
| The logo (tile, panels, gradients, shine and edges) | the same | the same |
| What shows through the glass | the light background: the tile looks almost white | the black background: it looks dark gray |
| `gm-glass-logo` | a thin white border and the medium shadow, to set it apart from the background | nothing: the glass already stands out |

## The SVG, from the code

`logo.svg` (the navbar's, the favicon and the share images) is written by the script `site/brand/logo/desde-el-framework.mjs` from the same gradients the tools copy and the same sizes. It is identical to the logo made with classes.

## The full code

```html-code
<div class="gm-glass-logo gm-w-[12rem]">
  <div class="gm-relative gm-aspect-square gm-[container-type:inline-size] gm-rounded-[22.265625%] gm-bg-[linear-gradient(180deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.16)_100%)] gm-before:[position:absolute] gm-before:inset-[0] gm-before:rounded-[inherit] gm-before:p-[0.976562cqw] gm-before:bg-[linear-gradient(135deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.6)_100%)] gm-before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] gm-before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] gm-before:[-webkit-mask-composite:xor]" role="img" aria-label="GlassMarshmallow">
    <span class="gm-absolute gm-start-[23.4375%] gm-top-[23.4375%] gm-w-[37.1094%] gm-h-[37.1094%] gm-rounded-[23.1579%] gm-bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_50%),linear-gradient(45deg,#3cd2ff_0%,#8c64ff_100%)] gm-before:[position:absolute] gm-before:inset-[-0.488281cqw] gm-before:rounded-[23.8462%] gm-before:p-[0.976562cqw] gm-before:bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.25)_100%)] gm-before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] gm-before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] gm-before:[-webkit-mask-composite:xor]"></span>
    <span class="gm-absolute gm-start-[39.4531%] gm-top-[39.4531%] gm-w-[37.1094%] gm-h-[37.1094%] gm-rounded-[23.1579%] gm-bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_50%),linear-gradient(45deg,rgba(140,100,255,0.85)_0%,rgba(255,150,70,0.85)_100%)] gm-before:[position:absolute] gm-before:inset-[-0.488281cqw] gm-before:rounded-[23.8462%] gm-before:p-[0.976562cqw] gm-before:bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.25)_100%)] gm-before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] gm-before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] gm-before:[-webkit-mask-composite:xor]"></span>
  </div>
</div>
```
