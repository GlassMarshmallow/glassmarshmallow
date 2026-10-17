# Spacing

Margin (outside) and padding (inside) without writing CSS. As in Tailwind: the number is the scale, and **4 = 1 rem** (16 px).

## Scale

| Number | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Value | 0 | 0.25 rem | 0.5 rem | 0.75 rem | 1 rem | 1.25 rem | 1.5 rem | 2 rem | 2.5 rem | 3 rem | 4 rem |

## Margin and padding

`gm-m-…` for margin and `gm-p-…` for padding. After the letter, the side:

| Class | Side |
| --- | --- |
| `gm-p-4` | All four |
| `gm-px-4` | Left and right |
| `gm-py-4` | Top and bottom |
| `gm-pt-4` / `gm-pb-4` | Top / bottom |
| `gm-ps-4` / `gm-pe-4` | Start / end of the line (left / right in English) |

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap gm-items-start">
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-3">gm-p-3</div>
  <div class="gm-theme-mint gm-theme-solid gm-rounded-sm gm-px-8 gm-py-2">gm-px-8 gm-py-2</div>
  <div class="gm-theme-peach gm-theme-solid gm-rounded-sm gm-p-3 gm-mt-6">gm-mt-6</div>
</div>
```

## Centering with margin

`gm-mx-auto` centers a fixed-width block; `gm-ms-auto` pushes it to the end of a row.

```html
<div class="gm-theme-lavender gm-theme-solid gm-rounded-sm gm-p-3 gm-max-w-xs gm-mx-auto gm-text-center">Centered</div>
```

## Gap between children

`gm-gap-…` separates the children of a `flex` or a grid (it also changes the `.gm-grid` one).

```html
<div class="gm-flex gm-gap-2">
  <span class="gm-tag">One</span><span class="gm-tag">Two</span><span class="gm-tag">Three</span>
</div>
```

## By screen size

They all have a [breakpoint](/docs/layout/breakpoints) version: `gm-p-4 gm-md-p-8` has 1 rem of padding on phones and 2 rem from 860 px.
