# Introduction

GlassMarshmallow is a CSS framework with glass surfaces, light and dark mode and WCAG 2.2 AA accessibility from the first component.

> **GlassMarshmallow is in development (v0.1).** The docs grow page by page together with the framework.

## What's included

- **Design tokens**: colors, type, radii, shadows and glass as CSS custom properties with the `--gm-` prefix.
- **Base styles**: typography, a visible focus, the skip link and helpers such as `gm-visually-hidden`.
- **Components**: buttons, cards, fields, alerts, tags, the navbar and the mobile tab bar.
- **Background**: colored lights, a dot grid and an old-TV effect, in light and dark mode.
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

Every component meets **WCAG 2.2 AA** in light and dark mode: text contrast of at least 4.5:1, a focus you can always see and everything usable with the keyboard alone.

## Next steps

- [Install GlassMarshmallow](/docs/getting-started/install) with a package manager or a CDN.
- Try the tools: [glass generator](/docs/tools/glass-generator), [gradient generator](/docs/tools/gradient-generator) and [single-color gradient](/docs/tools/single-color-gradient).
