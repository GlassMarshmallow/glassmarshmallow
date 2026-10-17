---
name: glassmarshmallow-install
description: Add GlassMarshmallow (CSS framework with glass surfaces, pastel palette and AA/AAA accessibility) to a web project, with Montserrat, light/dark mode and the optional scripts. Use when a project wants to start using GlassMarshmallow.
---

# Install GlassMarshmallow

1. **Install the packages**

   ```bash
   npm install glassmarshmallow glassmarshmallow-icons
   ```

2. **Load the CSS and the icons** (in this order) and **Montserrat** from Google Fonts, in the `<head>`:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="node_modules/glassmarshmallow/dist/css/glassmarshmallow.min.css">
   <link rel="stylesheet" href="node_modules/glassmarshmallow-icons/font/glassmarshmallow-icons.css">
   ```

   In Angular, add both CSS files to `styles` in `angular.json` instead.

3. **Choose the color mode** with `data-theme="light"` or `data-theme="dark"` on `<html>` (or on any element for a part of the page).

4. **Add the page skeleton**: the skip link first, then the header and `<main id="content" tabindex="-1">`, with the content inside `.gm-container`.

   ```html
   <body>
     <a class="gm-skip-link" href="#content">Skip to content</a>
     <header class="gm-navbar">…</header>
     <main id="content" tabindex="-1" class="gm-container">…</main>
   </body>
   ```

5. **Load only the scripts you need** (they have no dependencies), for components that move:

   ```html
   <script type="module">
     import { initMenus } from 'glassmarshmallow/js/menu.js';
     initMenus();
   </script>
   ```

   Available: `menu.js`, `calendar.js`, `search.js`, `color-picker.js`, `range.js`, `player.js`, `carousel.js`, `gallery.js`.

## Check

- Text uses Montserrat and the background is `#f5f5f7` (light) or black (dark).
- Pressing Tab first shows the “Skip to content” link.
- Read the docs index at `/llms.txt` for every component and utility.
