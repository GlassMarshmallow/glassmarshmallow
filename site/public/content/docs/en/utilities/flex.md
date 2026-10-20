# Flex and alignment

To lay pieces out in a row or a column and align them, without writing CSS.

## Row or column

`gm-flex` puts children in a row; `gm-flex-col`, in a column; `gm-flex-wrap` lets them move to the next line if they do not fit.

```html
<div class="gm-flex gm-flex-col gm-md-flex-row gm-gap-3">
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-3 gm-flex-1">In a column on phones</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-3 gm-flex-1">and in a row from md</div>
</div>
```

## Align

| Class | What it does |
| --- | --- |
| `gm-items-start` / `-center` / `-end` / `-stretch` / `-baseline` | Alignment on the other axis (in a row, vertically) |
| `gm-justify-start` / `-center` / `-end` | Where they gather on the main axis |
| `gm-content-start` / `-center` / `-end` / `-between` / `-stretch` | Where the rows go when there is spare height (in a grid or a multi-line flex) |
| `gm-justify-between` / `-around` / `-evenly` | How free space is shared |

```html
<div class="gm-flex gm-items-center gm-justify-between gm-border gm-rounded-sm gm-p-3">
  <strong>Order 1024</strong>
  <span class="gm-tag gm-theme-mint gm-theme-solid">Shipped</span>
</div>
```

## A single item and shortcuts

| Class | What it does |
| --- | --- |
| `gm-self-start` / `-center` / `-end` / `-stretch` / `-baseline` / `-auto` | Places only that child on the cross axis |
| `gm-justify-self-start` / `-center` / `-end` / `-stretch` / `-auto` | Places only that child in a grid, sideways |
| `gm-justify-items-start` / `-center` / `-end` / `-stretch` | Every child of a grid, sideways |
| `gm-place-items-*` / `gm-place-content-*` / `gm-place-self-*` | Shortcuts: both axes at once (`gm-place-items-center` centers in the cell) |

```html
<div class="gm-d-grid gm-place-items-center gm-border gm-rounded-sm gm-h-[8rem]">
  <span class="gm-tag gm-theme-sky gm-theme-solid">Centered with gm-place-items-center</span>
</div>
```

## Grow and shrink

| Class | What it does |
| --- | --- |
| `gm-flex-1` | Takes free space equally with its siblings |
| `gm-flex-auto` | Grows according to its content |
| `gm-flex-none` / `gm-shrink-0` | Does not grow / does not shrink (icons, buttons) |
| `gm-grow` | Grows to fill the gap |

## Text

`gm-text-start`, `gm-text-center` and `gm-text-end` align text.

Row, column, alignment and text have a [breakpoint](/docs/layout/breakpoints) version: `gm-md-flex-row`, `gm-lg-justify-between`, `gm-md-text-start`…
