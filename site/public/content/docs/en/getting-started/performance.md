# Performance

How much GlassMarshmallow weighs and how to load only what you need. The tables are measured every time the
documentation is built, so they always match the current version.

## Size

What the browser downloads. Servers and CDNs (jsDelivr, unpkg, Cloudflare…) send it compressed, so the real
download is the **gzip** or **Brotli** column.

<!-- sizes -->
| File | As is | gzip | Brotli |
| --- | --- | --- | --- |
| `glassmarshmallow.min.css` | 269.8 kB | 38.3 kB | 26.1 kB |
| `glassmarshmallow.css` | 367.6 kB | 63.9 kB | 46.3 kB |
| `glassmarshmallow-core.min.css` | 188.1 kB | 24.3 kB | 14.4 kB |
| `components/basics.min.css` | 16.7 kB | 3.9 kB | 3.4 kB |
| `components/chat.min.css` | 6.9 kB | 2.0 kB | 1.7 kB |
| `components/forms.min.css` | 13.2 kB | 3.1 kB | 2.7 kB |
| `components/media.min.css` | 12.3 kB | 3.0 kB | 2.6 kB |
| `components/navigation.min.css` | 20.8 kB | 4.3 kB | 3.8 kB |
| `components/pages.min.css` | 9.7 kB | 2.6 kB | 2.2 kB |
| `components/tools.min.css` | 4.2 kB | 1.3 kB | 1.1 kB |
| `glassmarshmallow-font.min.css` | 0.6 kB | 0.4 kB | 0.4 kB |

The font file (`montserrat-latin.woff2`) is 34.7 kB; it is already compressed.

| Script | As is | gzip | Brotli |
| --- | --- | --- | --- |
| `js/calendar.js` | 8.6 kB | 3.2 kB | 2.8 kB |
| `js/carousel.js` | 7.8 kB | 2.9 kB | 2.5 kB |
| `js/color-picker.js` | 15.5 kB | 5.5 kB | 4.8 kB |
| `js/dialog.js` | 2.5 kB | 1.1 kB | 0.9 kB |
| `js/dock.js` | 3.6 kB | 1.5 kB | 1.3 kB |
| `js/fullscreen-menu.js` | 2.8 kB | 1.2 kB | 1.0 kB |
| `js/gallery.js` | 5.0 kB | 1.9 kB | 1.6 kB |
| `js/menu.js` | 3.6 kB | 1.4 kB | 1.2 kB |
| `js/player.js` | 15.9 kB | 4.6 kB | 4.1 kB |
| `js/range.js` | 1.2 kB | 0.6 kB | 0.5 kB |
| `js/search.js` | 5.3 kB | 1.9 kB | 1.7 kB |
| `js/ticker.js` | 1.7 kB | 0.8 kB | 0.7 kB |
<!-- /sizes -->

## Load only what you need

- **Link the `.min.css`** file in production; the other one has comments to read it.
- **The font is optional.** `glassmarshmallow-font.css` adds Montserrat; without it, the framework uses the
  system font and downloads nothing else. See [Typography](/docs/customize/typography).
- **Scripts go one by one.** Each component that moves has its own file and you only import the ones you use;
  pages with no menus, carousels or players need no JavaScript at all.
- **Arbitrary values** (`gm-mt-[1.75rem]`) are only written if you use them: `npx glassmarshmallow build` puts
  just those classes in a separate file.

## Glass and blur

The glass effect uses `backdrop-filter: blur()`, which the browser paints with the graphics card. A few glass
panels on a page are no problem, even on phones; dozens of large panels on top of each other, or blurring
something that moves (a video, an animation) under the glass, can make scrolling less smooth on older phones.
If you notice it, use a solid surface (`gm-bg-surface`) for the big panels and keep glass for the small ones.

## Animations

Most of the framework's animations only change `opacity` and `transform`, which do not make the browser
recalculate the layout. A few cost a little more: `gm-animate-blur-in` also animates `filter`, the shimmer and the
moving progress bar animate the background position, and the countdown animates the width. They all turn off on
their own with `prefers-reduced-motion`.
