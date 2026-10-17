# Introduction

GlassMarshmallow is a CSS framework with glass surfaces, light and dark mode and WCAG 2.2 AA accessibility (and AAA whenever possible) from the first component.

> **GlassMarshmallow is in development (v0.1).** The docs grow page by page together with the framework.

## What's included

- **Design tokens**: colors (the pastel palette with its scales), type, radii, shadows and glass as CSS custom properties with the `--gm-` prefix.
- **Base styles**: text, headings, an always-visible focus, the skip link and AAA accessibility rules built in.
- **Layout**: containers, breakpoints and a 12-column grid.
- **Components**: buttons, cards, alerts, tags, accordion, carousel, gallery, avatar, menu, search, tooltip, video player, progress bar, navbar and mobile tab bar.
- **Forms**: fields, segmented control, range, date picker, color picker and the rules for good forms.
- **Utilities** in the Tailwind style: spacing, sizing, borders, shadows, glass effects, animations, flex and display.
- **Optional scripts**, with no dependencies, for components that move (menu, calendar, carousel, player…).
- **Icons**: in their own package, [GlassMarshmallow Icons](/icons), with the same names as Bootstrap Icons.

## Quick start

Copy this page to start. It loads GlassMarshmallow and sets the color mode with `data-theme` on `<html>`.

```html
<!doctype html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello, GlassMarshmallow</title>
    <link rel="stylesheet" href="node_modules/glassmarshmallow/dist/css/glassmarshmallow.min.css">
  </head>
  <body>
    <main class="gm-container">
      <h1>Hello, world!</h1>
      <button type="button" class="gm-btn">Get started</button>
    </main>
  </body>
</html>
```

## Accessibility

Every component meets **WCAG 2.2 AA** in light and dark mode, and almost everything reaches **AAA**: text reaches 7:1, everything you can press is 44 px, focus is always visible and everything works with the keyboard alone. More in [Accessibility](/docs/getting-started/accessibility).

## Next steps

- [Install GlassMarshmallow](/docs/getting-started/install) with a package manager or from a CDN.
- Read the framework's [approach](/docs/getting-started/approach) and the [user experience guides](/docs/guides/ux).
- Try the [tools](/tools): glass, gradient, filter and palette generators, and the TV effect.
