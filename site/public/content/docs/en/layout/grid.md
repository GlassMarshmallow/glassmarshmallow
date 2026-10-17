# Grid

To place pieces in columns. It has 12 columns, like Bootstrap's, but is built with CSS Grid: each child says how many of the 12 it spans, and that can change at each [breakpoint](/docs/layout/breakpoints).

## Columns

`.gm-grid` on the container and `.gm-col-N` on each child (N from 1 to 12). Without a column class, the child spans the whole row.

```html
<div class="gm-grid gm-gap-sm">
  <div class="gm-col-8 gm-theme-sky gm-theme-solid" style="padding: 16px; border-radius: 12px">8 of 12</div>
  <div class="gm-col-4 gm-theme-blue gm-theme-solid" style="padding: 16px; border-radius: 12px">4 of 12</div>
  <div class="gm-col-4 gm-theme-mint gm-theme-solid" style="padding: 16px; border-radius: 12px">4</div>
  <div class="gm-col-4 gm-theme-mint gm-theme-solid" style="padding: 16px; border-radius: 12px">4</div>
  <div class="gm-col-4 gm-theme-mint gm-theme-solid" style="padding: 16px; border-radius: 12px">4</div>
</div>
```

## By screen width

With a prefix (`sm`, `md`, `lg`, `xl`), the column changes from that width. Here: stacked on phones, two from `md` and three from `lg`.

```html
<div class="gm-grid gm-gap-sm">
  <div class="gm-md-col-6 gm-lg-col-4 gm-theme-lavender gm-theme-solid" style="padding: 16px; border-radius: 12px">A</div>
  <div class="gm-md-col-6 gm-lg-col-4 gm-theme-pink gm-theme-solid" style="padding: 16px; border-radius: 12px">B</div>
  <div class="gm-md-col-12 gm-lg-col-4 gm-theme-peach gm-theme-solid" style="padding: 16px; border-radius: 12px">C</div>
</div>
```

## Equal columns

Without counting: `.gm-cols-2`, `-3`, `-4` or `-6` split the space into equal columns. Also with a prefix.

```html
<div class="gm-grid gm-cols-1 gm-sm-cols-2 gm-lg-cols-4 gm-gap-sm">
  <div class="gm-theme-sky gm-theme-solid" style="padding: 16px; border-radius: 12px">1</div>
  <div class="gm-theme-sky gm-theme-solid" style="padding: 16px; border-radius: 12px">2</div>
  <div class="gm-theme-sky gm-theme-solid" style="padding: 16px; border-radius: 12px">3</div>
  <div class="gm-theme-sky gm-theme-solid" style="padding: 16px; border-radius: 12px">4</div>
</div>
```

## As many as fit

`.gm-grid--auto` fits as many columns of at least 240 px as there is room for, with no breakpoints. Ideal for cards. Change the minimum with `--gm-grid-min`.

```html
<div class="gm-grid gm-grid--auto gm-gap-sm" style="--gm-grid-min: 160px">
  <div class="gm-card">One</div>
  <div class="gm-card">Two</div>
  <div class="gm-card">Three</div>
  <div class="gm-card">Four</div>
  <div class="gm-card">Five</div>
</div>
```

## Offset

`.gm-offset-N` leaves N empty columns before the child. For example, to center a 6-column block:

```html
<div class="gm-grid">
  <div class="gm-col-12 gm-md-col-6 gm-md-offset-3 gm-theme-lemon gm-theme-solid" style="padding: 16px; border-radius: 12px">Centered from md</div>
</div>
```

## Spacing

The gap between columns is 1.5 rem. Change it with `.gm-gap-0`, `.gm-gap-sm` (0.75 rem) or `.gm-gap-lg` (2.5 rem), or with the `--gm-gap` variable.

## Classes

| Class | What it does |
| --- | --- |
| `.gm-grid` | 12-column grid |
| `.gm-col-1` … `.gm-col-12` | How many columns the child spans |
| `.gm-col-auto` | Spans a single cell |
| `.gm-offset-1` … `.gm-offset-11` | Empty columns before the child |
| `.gm-cols-1`, `-2`, `-3`, `-4`, `-6` | Equal columns |
| `.gm-grid--auto` | As many columns as fit (`--gm-grid-min`, 240 px) |
| `.gm-gap-0`, `-sm`, `-lg` | Gap between columns |
| `.gm-sm-…`, `.gm-md-…`, `.gm-lg-…`, `.gm-xl-…` | The same, from that breakpoint |

## Accessibility

- The grid only changes where things are shown, not their order: screen readers and the keyboard follow the HTML order. Write the HTML in the order it should be read (WCAG 1.3.2).
- With the screen zoomed to 400 %, everything becomes one column with no sideways scroll, because it is mobile first (WCAG 1.4.10).
