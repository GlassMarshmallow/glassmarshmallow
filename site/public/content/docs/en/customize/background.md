# Page background

The page background color comes from a variable that changes on its own with light and dark mode.

## Colors

| Variable | Light | Dark | For |
| --- | --- | --- | --- |
| `--gm-bg` | `#f5f5f7` | `#000` | Page background |
| `--gm-surface` | white at 82 % | dark gray at 82 % | Glass cards and panels |
| `--gm-surface-solid` | `#fff` | `#1c1c1e` | Opaque panels (menus, windows) |

The very light gray by day and black at night is the framework background: white cards (or gray at night) stand out on it without strong borders.

## Changing the background

Change the variable in both modes:

```html-code
<style>
  :root { --gm-bg: #fbfaf7; }
  [data-theme="dark"] { --gm-bg: #0b0b0c; }
</style>
```

Then check the text contrast on the new background: regular text needs 4.5:1 (7:1 for AAA), and so does the secondary gray.

## Home page lights

This site's home page uses its own background with colored lights, a dot grid and, at night, the old TV effect. That background belongs to the site, not the framework. Its effects (the TV one and those to come) will be in **Tools › Effects**, to generate and copy them.
