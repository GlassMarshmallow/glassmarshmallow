# Typography

GlassMarshmallow uses **Montserrat** for all text and the system monospace font for code.

## Fonts

| Variable | Value | For |
| --- | --- | --- |
| `--gm-font` | Montserrat (if it does not load: the system font) | All text |
| `--gm-font-mono` | `ui-monospace`, SF Mono, Menlo | Code |

Montserrat comes from Google Fonts. Load it in the `<head>` with the weights the framework uses:

```html-code
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

## Sizes

| Element | Size | Weight | Details |
| --- | --- | --- | --- |
| `h1` | 2.3 to 3.2 rem (grows with the screen) | 700 | Very tight letters (−0.055 em), line height 1.1 |
| `h2` | browser default (1.5 rem) | 700 | Tight letters (−0.025 em) |
| `h3` | browser default (1.17 rem) | 700 | |
| Text | 1 rem (16 px) | 400 | Line height 1.5 |
| `.gm-small` | 0.84 rem | 400 | |
| `.gm-eyebrow` | 0.9 rem | 600 | Gray |
| Buttons | 1 rem (`--sm`: 0.84 rem) | 650 | |
| Code | 0.86 rem | 400 | Monospace |

On the home page, `h1` and `h2` headings switch to weight 800.

## Changing the font

Change the variable. If you use another font, check that it reads well and the design does not break (Montserrat is wide: others may leave more space).

```html-code
<style>
  :root { --gm-font: "Inter", system-ui, sans-serif; }
</style>
```

## Accessibility

- Sizes are in `rem`: if the person enlarges text in their browser, everything grows with it (WCAG 1.4.4).
- Line height of 1.5 for text and lines of 80 characters at most (WCAG 1.4.8 and 1.4.12).
- Text is not justified: gaps between words make reading harder.
