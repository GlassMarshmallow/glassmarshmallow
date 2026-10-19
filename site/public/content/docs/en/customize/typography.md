# Typography

GlassMarshmallow uses **Montserrat** for all text and the system monospace font for code.

## Fonts

| Variable | Value | For |
| --- | --- | --- |
| `--gm-font` | Montserrat (if it does not load: the system font) | All text |
| `--gm-font-mono` | `ui-monospace`, SF Mono, Menlo | Code |

Montserrat comes with the framework, in a separate, **optional** file: `glassmarshmallow-font.css`. It is served from your own site, without Google Fonts: a single 35 KB file with every weight (300–800) and the Latin characters. Add it next to the framework CSS and preload the font in the `<head>`, so it arrives before the page is first painted. If it does not make it in time on a slow connection, that visit uses a fallback font with the same measurements (adjusted Arial) and the text does not jump while loading:

```html-code
<link rel="preload" href="node_modules/glassmarshmallow/dist/fonts/montserrat-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="node_modules/glassmarshmallow/dist/css/glassmarshmallow-font.min.css">
<link rel="stylesheet" href="node_modules/glassmarshmallow/dist/css/glassmarshmallow.min.css">
```

The CSS looks for the font in `../fonts/`: if you copy the files into your project, keep the `css` and `fonts` folders side by side. Montserrat is licensed under the [SIL Open Font License](https://openfontlicense.org) (in `fonts/OFL.txt`): free to use, commercial projects included.

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

Do not add `glassmarshmallow-font.css` (so Montserrat is not downloaded) and change the variable. If you use another font, check that it reads well and the design does not break (Montserrat is wide: others may leave more space).

```html-code
<style>
  :root { --gm-font: "Inter", system-ui, sans-serif; }
</style>
```

## Accessibility

- Sizes are in `rem`: if the person enlarges text in their browser, everything grows with it (WCAG 1.4.4).
- Line height of 1.5 for text and lines of 80 characters at most (WCAG 1.4.8 and 1.4.12).
- Text is not justified: gaps between words make reading harder.
