---
name: glassmarshmallow-customize-colors
description: Change GlassMarshmallow colors (accent, backgrounds, text, states) in light and dark mode through its --gm- CSS variables while keeping WCAG AA/AAA contrast. Use when a project wants its own colors or brand on top of GlassMarshmallow.
---

# Customize GlassMarshmallow colors

GlassMarshmallow's look comes from `--gm-` CSS variables (see `/docs/getting-started/css-variables`). Never edit the framework files: override the variables.

1. **Override in both modes.** Light values in `:root`, dark values in `[data-theme="dark"]`. Dark is not light inverted: pick its own tones.

   ```css
   :root {
     --gm-accent: #0e7490;
     --gm-accent-strong: #0a5366;
     --gm-bg: #fbfaf7;
   }
   [data-theme="dark"] {
     --gm-accent: #1cabb0;
     --gm-bg: #0b0b0c;
   }
   ```

2. **Only for a part of the page**, set them on that element (`.my-section { --gm-accent: … }`) or use `data-theme` on it.

3. **Pastel palette.** For colored blocks use the palette classes instead of new colors: `.gm-theme-<color>` plus `.gm-theme-solid`, `.gm-theme-glass` or `.gm-theme-text` (colors: sky, blue, lavender, pink, peach, lemon, mint, coral, white, gray-100…900, black).

4. **States stay apart from the brand:** mint for success, lemon for warning, coral for danger.

5. **Check contrast after every change**, in light and dark mode:
   - text 7:1 (AAA; never below 4.5:1),
   - borders and icons that must be seen 3:1,
   - measure on the real background (screenshot), not just the color.
   The palette generator (`/tools/palette-generator`) builds a palette that already meets these.

6. **Never use color alone** to convey meaning: add text or an icon.
