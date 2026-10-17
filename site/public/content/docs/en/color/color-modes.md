# Light and dark mode

GlassMarshmallow has a light and a dark mode. You choose it with the `data-theme` attribute, on the whole page or on any part of it, like `data-bs-theme` in Bootstrap.

## The whole page

Put `data-theme` on `<html>`. Without it, the page is light.

```html
<html lang="en" data-theme="dark">
```

All the colors are CSS variables that change with the mode: page background, surfaces, text, lines, accent, the palette text tones and the glass. The browser's own parts (form controls and scrollbars) change too.

## One part of the page

Put `data-theme` on any element to change only that element and everything inside it. Add `.gm-bg-body` or `.gm-bg-surface` so that the area is painted with the background of its mode.

```html
<div style="display: grid; gap: 12px">
  <div data-theme="light" class="gm-bg-body" style="padding: 16px; border-radius: 12px">
    <b>Always light</b>
    <div class="gm-text-sky">.gm-text-sky</div>
    <div class="gm-theme-sky gm-theme-glass" style="margin-top: 8px; padding: 10px 14px">.gm-theme-glass</div>
  </div>
  <div data-theme="dark" class="gm-bg-body" style="padding: 16px; border-radius: 12px">
    <b>Always dark</b>
    <div class="gm-text-sky">.gm-text-sky</div>
    <div class="gm-theme-sky gm-theme-glass" style="margin-top: 8px; padding: 10px 14px">.gm-theme-glass</div>
  </div>
</div>
```

## Follow the system and remember the choice

The framework doesn't choose the mode for you. This script, in the `<head>` before the styles, uses the choice saved in the browser or, if there is none, the system preference. It runs before the page is painted, so it doesn't flash.

```html
<script>
  // Before the page is painted: the saved choice or, if there is none, the system preference
  (function () {
    var saved; try { saved = localStorage.getItem('theme'); } catch (e) {}
    var dark = saved === 'dark' || (saved !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  })();
</script>
```

To change the mode with a button, set `document.documentElement.dataset.theme` to `'light'` or `'dark'` and save it with `localStorage.setItem('theme', …)`.

## Accessibility

Every color of the framework is checked in both modes: text 4.5:1 or more (AA) and controls 3:1 or more.
