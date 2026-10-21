# Building with utilities

GlassMarshmallow comes with **ready-made components**, like Bootstrap (`gm-btn`, `gm-card`, `gm-navbar`…), and **utilities**, like Tailwind: small classes that each do one thing. By combining utilities you can build any design of your own without writing CSS. This page explains how to use them; each topic then has its own page with all its classes.

## The idea

Instead of making up a class and writing its CSS…

```css:CSS
.my-notice { display: flex; gap: .75rem; padding: 1rem; border-radius: 1.25rem; }
```

…you put in the HTML the utilities that do the same:

```html
<div class="gm-d-flex gm-items-center gm-gap-3 gm-p-4 gm-rounded-md gm-bg-surface gm-shadow-md">
  <i class="gmi gmi-stars gm-text-xl" aria-hidden="true"></i>
  <p class="gm-m-0">Made only with utilities, without a line of CSS.</p>
</div>
```

That way the HTML shows what each thing looks like, there is no leftover CSS, and changes do not break other parts of the site.

## How to read the names

They all start with `gm-`, then **what they change** and, at the end, **how much**:

| Class | Reads as | Does |
| --- | --- | --- |
| `gm-mt-4` | margin (m) top (t), 4 | `margin-top: 1rem` |
| `gm-px-6` | padding (p) on the sides (x), 6 | `padding-inline: 1.5rem` |
| `gm-rounded-lg` | rounded corners, large | `border-radius: var(--gm-radius-lg)` |
| `gm-shadow-md` | medium shadow | a soft shadow |
| `gm-text-xl` | text, extra large | `font-size: 1.25rem` |
| `gm-d-flex` | display as flex | `display: flex` |

The numbers follow a **scale**: in spacing, **4 = 1 rem** (16 px), 2 = 0.5 rem, 8 = 2 rem. Using the scale keeps everything aligned and in proportion. The full table is in [Spacing](/docs/utilities/spacing).

## Depending on the screen size

Classes with no prefix always apply, starting with phones. With `sm`, `md`, `lg` or `xl` after `gm-`, they apply **from** that width up:

| Prefix | From |
| --- | --- |
| `gm-sm-…` | 600 px |
| `gm-md-…` | 860 px |
| `gm-lg-…` | 1100 px |
| `gm-xl-…` | 1300 px |

```html
<div class="gm-d-grid gm-grid-cols-1 gm-md-grid-cols-3 gm-gap-4">
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4">One</div>
  <div class="gm-theme-mint gm-theme-solid gm-rounded-sm gm-p-4">Two</div>
  <div class="gm-theme-peach gm-theme-solid gm-rounded-sm gm-p-4">Three</div>
</div>
```

On a phone they go one under the other; from 860 px, in three columns. More in [Breakpoints](/docs/layout/breakpoints).

## Values that are not on the scale

If you need an exact value, write it **in brackets**: `gm-mt-[1.75rem]`, `gm-w-[18rem]`, `gm-bg-[#5cdfeb]`. And any CSS property without a utility, with `gm-[property:value]`. These classes are created by a small program that comes with the package:

```sh
npx glassmarshmallow build
```

How to set it up and what you can write, in [Arbitrary values](/docs/utilities/arbitrary).

## On hover, in dark mode…

With a **variant** in front, the class only applies in that case. They go with values in brackets:

| Variant | When it applies |
| --- | --- |
| `gm-hover:` | on mouse hover |
| `gm-focus-visible:` | when reached with the keyboard |
| `gm-dark:` / `gm-light:` | in dark / light mode |
| `gm-before:` / `gm-after:` | on the `::before` and `::after` layers |
| `gm-group-hover:` | when hovering the ancestor with `gm-group` |

```html
<a href="#" class="gm-d-inline-flex gm-items-center gm-gap-2 gm-px-6 gm-py-3 gm-rounded-full gm-bg-surface gm-shadow-md gm-transition gm-hover:translate-[0_-2px] gm-hover:shadow-[0_.75rem_2rem_rgb(0_0_0/.18)]">
  Lifts a little on hover <i class="gmi gmi-arrow-right" aria-hidden="true"></i>
</a>
```

The full list is in [Arbitrary values](/docs/utilities/arbitrary).

## Example: a card step by step

This is how a profile card is built with utilities only.

**1. The box:** background, padding, corners and shadow.

```html
<div class="gm-bg-surface gm-p-6 gm-rounded-lg gm-shadow-md gm-max-w-md">
  Sara Paez Yamuza
</div>
```

**2. The content in a row,** with a colored circle for the initials.

```html
<div class="gm-bg-surface gm-p-6 gm-rounded-lg gm-shadow-md gm-max-w-md gm-d-flex gm-items-center gm-gap-4">
  <span class="gm-d-grid gm-w-[3.5rem] gm-h-[3.5rem] gm-rounded-full gm-bg-linear-to-br gm-from-sky gm-to-lavender gm-place-items-center gm-font-bold" aria-hidden="true">SP</span>
  <div>
    <p class="gm-m-0 gm-font-bold gm-text-xl">Sara Paez Yamuza</p>
    <p class="gm-m-0 gm-muted gm-text-sm">Web designer and developer</p>
  </div>
</div>
```

**3. The details:** a framework button at the end and, on wide screens, more room in the card.

```html
<div class="gm-bg-surface gm-p-6 gm-md-p-8 gm-rounded-lg gm-shadow-md gm-max-w-md gm-d-flex gm-flex-wrap gm-items-center gm-gap-4">
  <span class="gm-d-grid gm-w-[3.5rem] gm-h-[3.5rem] gm-rounded-full gm-bg-linear-to-br gm-from-sky gm-to-lavender gm-place-items-center gm-font-bold" aria-hidden="true">SP</span>
  <div class="gm-[flex:1]">
    <p class="gm-m-0 gm-font-bold gm-text-xl">Sara Paez Yamuza</p>
    <p class="gm-m-0 gm-muted gm-text-sm">Web designer and developer</p>
  </div>
  <a class="gm-btn gm-btn--sm" href="#">See portfolio</a>
</div>
```

The circle's gradient is made of utilities too: the direction (`gm-bg-linear-to-br`) and the colors (`gm-from-sky`, `gm-to-lavender`). How to make gradients, filters, masks or colored shadows is in the [Utilities](/docs/utilities/gradients) pages.

## Component or utilities?

- **Use a component** when what you need already exists (a button, a menu, a calendar): it is tested, accessible and has its dark mode.
- **Use utilities** to place components (margins, columns, alignment) and to build what does not exist.
- **Mix them:** a component is adjusted with utilities, as in `<a class="gm-btn gm-mt-4 gm-w-full">`. Utilities come after components in the CSS, so they usually win and are good for changing a detail.
- If you repeat the same group of classes many times, move it to a component of your site (in Angular, React, Astro…) or to a class in your CSS.

## Your CSS always wins

The whole framework is in the `@layer glassmarshmallow` layer. If you prefer to write CSS for something, your CSS always wins, with no `!important` or long selectors. You can use only utilities, only your CSS, or both. More in [Install](/docs/getting-started/install).
