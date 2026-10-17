# Approach

The ideas behind GlassMarshmallow that guide every decision. If you are going to use it or add to it, start here.

## Glass and pastel

GlassMarshmallow's look comes from two things: **glass surfaces** (translucent background, blur and a thin border) and a **pastel palette** of 8 colors, plus black, white and grays. Everything else is restrained: Montserrat, light backgrounds by day and black at night, and a single accent color, turquoise.

## Designs from real projects

Every component comes from a project that already exists and works: the portfolio, My Book Box or My MTV Box. Styles are not invented: they are taken from there, adjusted to be accessible and added to the framework so all projects share them.

## Accessible from the start

- **WCAG 2.2 AA always**, in light and dark mode, and **AAA whenever possible**: 7:1 text, 44 px targets, visible and unobscured focus.
- It is checked with axe and by measuring contrast on the real pixels, not by eye.
- What cannot be made accessible does not go in.

## Light and dark, with the same care

Every color is a variable that changes with `data-theme`. Dark mode is not light mode inverted: it has its own tones so everything reads just as well.

## Mobile first

Unprefixed classes apply to every screen and prefixed ones (`gm-md-…`) are added from a [breakpoint](/docs/layout/breakpoints) upwards. On phones the navbar moves to the bottom tab bar.

## Components and utilities

- **Components**, like Bootstrap: ready-made pieces with one class (`.gm-btn`, `.gm-accordion`).
- **Utilities**, like Tailwind: small classes to adjust without writing CSS (`gm-mt-4`, `gm-shadow-md`).
- They combine: a component tweaked with utilities.

## Plain CSS, optional JavaScript

- The framework is **plain CSS**: no Sass, no build step, no extra packages.
- Components that move (menu, calendar, carousel…) have an **optional script** with no dependencies. Without it, the component still shows and, whenever possible, works in a basic way.

## Names

- Everything starts with **`gm-`**: classes (`.gm-btn`) and variables (`--gm-accent`). That way it does not clash with other libraries.
- Components follow the **BEM** pattern: block, element and modifier (`.gm-player__button--main`).
- Sizes are **relative** (`rem`, `em`, `%`) so everything grows with the person's text size.

## Own icons

Only [GlassMarshmallow Icons](/icons), with the same names as Bootstrap Icons. No emojis and no icons mixed in from other sets.
