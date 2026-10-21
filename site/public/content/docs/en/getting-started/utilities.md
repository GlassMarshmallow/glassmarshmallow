# Building with utilities

GlassMarshmallow comes with **ready-made components**, like Bootstrap (`gm-btn`, `gm-card`, `gm-navbar`…), and **utilities**, like Tailwind: small classes that each do one thing. By combining utilities you can build any design of your own without writing CSS. This page explains how to use them; each topic then has its own page with all its classes (they are all in [Utilities](/docs/utilities/overview)).

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

## Colors and dark mode

Utility colors come from the framework's variables, so they **change on their own** in dark mode (`data-theme="dark"`): there is nothing else to write.

```html
<div class="gm-d-grid gm-gap-2 gm-p-6 gm-rounded-lg gm-bg-surface gm-border gm-max-w-md">
  <p class="gm-m-0 gm-font-bold gm-text-body">Sara Paez Yamuza</p>
  <p class="gm-m-0 gm-text-muted">Easy to read in light and dark mode.</p>
  <p class="gm-m-0"><span class="gm-tag gm-bg-sky">Design</span> <span class="gm-text-sky gm-font-semibold">Sky text</span></p>
</div>
```

- `gm-bg-surface`, `gm-bg-body`, `gm-text-body`, `gm-text-muted`, `gm-border`… are the colors of the page, the cards, the text and the lines in each mode.
- Palette colors come ready to read: `gm-bg-sky` sets the pastel **and** the black text on top, and `gm-text-sky` uses the dark shade of sky, which meets the contrast.
- For something **different** in one mode only, use the `gm-dark:` or `gm-light:` variant with an arbitrary value: `gm-dark:bg-[#0b0b0c]`.
- A color written by hand (`gm-bg-[#ffffff]`) does **not** change with the mode. Better use the framework's ones, or add its dark version with `gm-dark:`.

All the colors are in [Text color](/docs/color/text), [Background](/docs/color/background) and [Light and dark mode](/docs/color/color-modes).

## Changing the scale for the whole site

Utilities and components use the same variables (`--gm-radius-lg`, `--gm-shadow-md`, `--gm-sky`, `--gm-font`…). If you change a variable, **every** class and component that uses it changes, without touching the HTML:

```html-code
<style>
  /* The whole site: less rounded medium corners and another font */
  :root { --gm-radius-md: 1rem; --gm-font: "Inter", sans-serif; }
  /* Dark mode only: a less black background */
  [data-theme="dark"] { --gm-bg: #0b0b0c; }
  /* Only inside one part: another accent color */
  .my-shop { --gm-accent: #8c57e9; }
</style>
```

With that, `gm-rounded-md`, the cards (`gm-card`) and the other pieces with medium corners change at once. The spacing numbers (`gm-p-4`, `gm-mt-8`…) are fixed so everything stays aligned; if you need another size, use an arbitrary value (`gm-p-[1.125rem]`). The list of variables is in [CSS variables](/docs/getting-started/css-variables).

## Accessibility when you build it yourself

Components already meet WCAG 2.2; when you build something with utilities, that is up to you. What is most often forgotten:

- **Keyboard focus.** The framework draws an outline when you arrive with the keyboard (`:focus-visible`). Do not remove it with `gm-[outline:none]`; if you want another one, change it with `gm-focus-visible:`.
- **Contrast.** Text needs 4.5:1 on its background (3:1 if it is large, and for borders and icons). The framework's colors already meet it; if you write one by hand, check it.
- **Tap size.** What can be pressed must be at least 44 × 44 px. If a button or an icon is smaller, add [`gm-hit-area`](/docs/helpers/hit-area), which makes the area bigger without changing how it looks.
- **Links inside text,** underlined: they should not stand out by color only.
- **Decorative icons,** with `aria-hidden="true"`; if an icon is alone in a button, the button gets an `aria-label`.
- **Motion.** The framework's animations turn off on their own if the person asked for it; if you make your own, add them with `gm-motion-safe:`.

All the rules are in [Accessibility](/docs/getting-started/accessibility).

## Component or utilities?

- **Use a component** when what you need already exists (a button, a menu, a calendar): it is tested, accessible and has its dark mode.
- **Use utilities** to place components (margins, columns, alignment) and to build what does not exist.
- **Mix them:** a component is adjusted with utilities, as in `<a class="gm-btn gm-mt-4 gm-w-full">`. Utilities come after components in the CSS, so they usually win and are good for changing a detail.
- If you repeat the same group of classes many times, move it to a component of your site (in Angular, React, Astro…) or to a class in your CSS.

## Your CSS always wins

The whole framework is in the `@layer glassmarshmallow` layer. If you prefer to write CSS for something, your CSS always wins, with no `!important` or long selectors. You can use only utilities, only your CSS, or both. More in [Install](/docs/getting-started/install).
