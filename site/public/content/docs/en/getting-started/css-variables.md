# CSS variables

All of GlassMarshmallow's look comes from CSS variables with the `--gm-` prefix. They change on their own with light and dark mode (`data-theme`), and you can change them for the whole site or for just one part.

## Changing a variable

In `:root` for the whole site, in `[data-theme="dark"]` for dark mode, or on any element to change it only inside it:

```html-code
<style>
  :root { --gm-radius-md: 16px; }
  [data-theme="dark"] { --gm-bg: #0b0b0c; }
  .my-section { --gm-accent: #8c57e9; }
</style>
```

If you change a color, check the contrast afterwards (7:1 for text, 3:1 for borders and icons).

These are the main ones. The pastel palette and its scales are in [Palette](/docs/color/colors).

## Page and text

| Variable | Light | Dark |
| --- | --- | --- |
| `--gm-bg` | `#f5f5f7` | `#000` |
| `--gm-text` | `#1d1d1f` | `#f5f5f7` |
| `--gm-text-secondary` | `#3a3a3c` | `#d1d1d6` |
| `--gm-muted` | `#48484a` | `#b8b8bc` |
| `--gm-link` | `#004b96` | `#79beff` |
| `--gm-link-hover` | `#004b96` | `#79beff` |
| `--gm-selection` | `rgba(255, 166, 209, .45)` | `rgba(138, 180, 255, .35)` |
| `--gm-font` | `"Montserrat", -apple-system, BlinkMacSystemFo…` | same |
| `--gm-font-mono` | `ui-monospace, SFMono-Regular, Menlo, monospace` | same |

## Surfaces and lines

| Variable | Light | Dark |
| --- | --- | --- |
| `--gm-surface` | `rgba(255, 255, 255, .82)` | `rgba(28, 28, 30, .82)` |
| `--gm-surface-solid` | `#fff` | `#1c1c1e` |
| `--gm-surface-glass` | `rgba(255, 255, 255, .86)` | `rgba(44, 44, 46, .86)` |
| `--gm-surface-glass-border` | `rgba(255, 255, 255, .8)` | `rgba(255, 255, 255, .06)` |
| `--gm-surface-soft` | `rgba(255, 255, 255, .6)` | `rgba(44, 44, 46, .6)` |
| `--gm-line` | `rgba(0, 0, 0, .08)` | `rgba(255, 255, 255, .1)` |
| `--gm-line-strong` | `#bbb` | `#545458` |
| `--gm-hover` | `rgba(0, 0, 0, .05)` | `rgba(255, 255, 255, .08)` |
| `--gm-tag` | `#e8e8ed` | `#2c2c2e` |
| `--gm-tag-hover` | `#dcdce1` | `#3a3a3c` |
| `--gm-fill-subtle` | `rgba(0, 0, 0, .025)` | `rgba(255, 255, 255, .04)` |

## Accent and buttons

| Variable | Light | Dark |
| --- | --- | --- |
| `--gm-accent` | `#c71c6f` | `#8ab4ff` |
| `--gm-accent-strong` | `#940061` | `#003290` |
| `--gm-accent-hover` | `#700148` | `#00236b` |
| `--gm-focus` | `#c71c6f` | `#8ab4ff` |
| `--gm-primary` | `#1d1d1f` | `#f5f5f7` |
| `--gm-on-primary` | `#fff` | `#1d1d1f` |

### Another accent color

The accent is the color of accent buttons, keyboard focus, fields while typing, sliders and checkboxes. To change it for the whole site, give a value for each mode. For example, in lavender:

```html-code
<style>
  :root {
    --gm-accent: #6d47e5;          /* lavender 700: 5.6:1 on white */
    --gm-accent-strong: #490795;   /* background of accent buttons, with white text (AAA) */
    --gm-accent-hover: #350170;
    --gm-focus: #6d47e5;
    --gm-field-focus: #6d47e5;
    --gm-field-ring: rgba(109, 71, 229, .15);
  }
  [data-theme="dark"] {
    --gm-accent: #b9a3ff;          /* lavender: 8.9:1 on black */
    --gm-accent-strong: #490795;
    --gm-accent-hover: #350170;
    --gm-focus: #b9a3ff;
    --gm-field-focus: #b9a3ff;
    --gm-field-ring: rgba(185, 163, 255, .45);
  }
</style>
```

This is how it looks (with the day values):

```html
<div class="gm-flex gm-flex-wrap gm-items-center gm-gap-5 gm-p-5 gm-rounded-sm gm-bg-body" data-theme="light" style="--gm-accent: #6d47e5; --gm-accent-strong: #490795; --gm-accent-hover: #350170; --gm-focus: #6d47e5; --gm-field-focus: #6d47e5">
  <button type="button" class="gm-btn gm-btn--accent">Send</button>
  <input class="gm-range" type="range" min="0" max="100" value="60" aria-label="Volume" style="--gm-range-progress: 60%; width: 10rem">
  <div class="gm-check"><label><input type="checkbox" checked> I agree</label></div>
</div>
```

Check the contrast: the accent on the background, 3:1 at least (4.5:1 if you use it for text); white text on `--gm-accent-strong`, 7:1.

## States

| Variable | Light | Dark |
| --- | --- | --- |
| `--gm-success` | `var(--gm-mint-900)` | `var(--gm-mint)` |
| `--gm-success-bg` | `var(--gm-mint-050)` | `rgb(var(--gm-mint-rgb) / .15)` |
| `--gm-warning` | `var(--gm-lemon-800)` | `var(--gm-lemon)` |
| `--gm-warning-bg` | `var(--gm-lemon-050)` | `rgb(var(--gm-lemon-rgb) / .15)` |
| `--gm-danger` | `var(--gm-coral-800)` | `var(--gm-coral)` |
| `--gm-danger-bg` | `var(--gm-coral-050)` | `rgb(var(--gm-coral-rgb) / .15)` |

## Fields

| Variable | Light | Dark |
| --- | --- | --- |
| `--gm-field-bg` | `#f5f5f7` | `#1d1d1f` |
| `--gm-field-bg-focus` | `#fff` | `#1d1d1f` |
| `--gm-field-border` | `#86868b` | `#6e6e73` |
| `--gm-field-focus` | `#c71c6f` | `#8ab4ff` |
| `--gm-field-ring` | `rgba(14, 116, 144, .15)` | `rgba(28, 171, 176, .45)` |
| `--gm-form-bg` | `rgba(255, 255, 255, .78)` | `rgba(255, 255, 255, .04)` |

## Shapes, shadows and glass

| Variable | Light | Dark |
| --- | --- | --- |
| `--gm-radius-sm` | `12px` | same |
| `--gm-radius-md` | `20px` | same |
| `--gm-radius-lg` | `30px` | same |
| `--gm-radius-pill` | `999px` | same |
| `--gm-shadow-sm` | `0 2px 12px rgba(0, 0, 0, .05)` | `0 2px 12px rgba(0, 0, 0, .4)` |
| `--gm-shadow-md` | `0 .125rem .375rem rgba(0, 0, 0, .04), 0 .5rem 1.5rem rgba(0, 0, 0, .08)` | `0 .125rem .375rem rgba(0, 0, 0, .3), 0 .5rem 1.5rem rgba(0, 0, 0, .45)` |
| `--gm-shadow-hover` | `0 8px 22px rgba(0, 0, 0, .18)` | `0 8px 22px rgba(0, 0, 0, .5)` |
| `--gm-blur` | `20px` | same |
| `--gm-blur-header` | `24px` | same |

## Layout

| Variable | Light | Dark |
| --- | --- | --- |
| `--gm-container` | `1240px` | same |
| `--gm-header-height` | `72px` | same |
| `--gm-breakpoint-sm` | `600px` | same |
| `--gm-breakpoint-md` | `860px` | same |
| `--gm-breakpoint-lg` | `1100px` | same |
| `--gm-breakpoint-xl` | `1300px` | same |
