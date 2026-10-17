# Effects

Glass, background blur and opacity: what gives GlassMarshmallow its look.

## Glass

`gm-glass` turns any block into a glass surface: translucent background, thin border and what is behind it blurred. It is the same glass as the cards.

```html
<div class="gm-p-6 gm-rounded-md" style="background: radial-gradient(circle at 25% 40%, #5cdfeb, transparent 50%), radial-gradient(circle at 75% 60%, #b9a3ff, transparent 50%)">
  <div class="gm-glass gm-rounded-md gm-p-6 gm-max-w-sm">Glass over colors</div>
</div>
```

## Background blur

`gm-blur-sm` (7 px, the one from your glass style), `-md` (12 px), `-lg` (20 px) and `-xl` (32 px) blur what is behind the block. They need a somewhat transparent background to show.

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap gm-p-6 gm-rounded-md" style="background: repeating-linear-gradient(45deg, #ffa6d1 0 12px, #8ab4ff 12px 24px)">
  <div class="gm-blur-sm gm-rounded-sm gm-p-4" style="background: rgb(255 255 255 / .3)">sm</div>
  <div class="gm-blur-md gm-rounded-sm gm-p-4" style="background: rgb(255 255 255 / .3)">md</div>
  <div class="gm-blur-lg gm-rounded-sm gm-p-4" style="background: rgb(255 255 255 / .3)">lg</div>
  <div class="gm-blur-xl gm-rounded-sm gm-p-4" style="background: rgb(255 255 255 / .3)">xl</div>
</div>
```

To make your own glass with other values, use the [glass generator](/tools/glass-generator).

## Opacity

`gm-opacity-0`, `-25`, `-50`, `-75` and `-100`.

```html
<div class="gm-flex gm-gap-4">
  <div class="gm-grid gm-gap-1 gm-text-center"><div class="gm-theme-pink-blue gm-theme-solid gm-rounded-sm gm-opacity-100" style="width: 64px; height: 48px"></div><span class="gm-small">100</span></div>
  <div class="gm-grid gm-gap-1 gm-text-center"><div class="gm-theme-pink-blue gm-theme-solid gm-rounded-sm gm-opacity-75" style="width: 64px; height: 48px"></div><span class="gm-small">75</span></div>
  <div class="gm-grid gm-gap-1 gm-text-center"><div class="gm-theme-pink-blue gm-theme-solid gm-rounded-sm gm-opacity-50" style="width: 64px; height: 48px"></div><span class="gm-small">50</span></div>
  <div class="gm-grid gm-gap-1 gm-text-center"><div class="gm-theme-pink-blue gm-theme-solid gm-rounded-sm gm-opacity-25" style="width: 64px; height: 48px"></div><span class="gm-small">25</span></div>
</div>
```

## Accessibility

- Text on glass must reach its contrast against what is behind at the worst point: measure it on a screenshot.
- Lowering opacity lowers text contrast: do not use it on text people need to read.
