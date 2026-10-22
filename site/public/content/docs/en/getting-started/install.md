# Install

Use a package manager, a CDN or the source files to add GlassMarshmallow to your project.

## Package managers

Install the GlassMarshmallow CSS with your package manager of choice.

```sh:npm
npm install glassmarshmallow
```
```sh:pnpm
pnpm add glassmarshmallow
```
```sh:Yarn
yarn add glassmarshmallow
```
```sh:Bun
bun add glassmarshmallow
```

### Using the CSS

Link the compiled file in your HTML, or import it from your own CSS.

```html:HTML
<link rel="stylesheet" href="node_modules/glassmarshmallow/dist/css/glassmarshmallow.min.css">
```
```css:CSS
@import "glassmarshmallow/dist/css/glassmarshmallow.css";
```

### Your CSS always wins

All the framework is inside a **CSS layer** called `glassmarshmallow` (`@layer`). Your own CSS, outside any layer, always wins over it, whatever its specificity and wherever you link it: a simple `.card { padding: 2rem; }` is enough to change a framework style, with no `!important` or long selectors.

```css:CSS
/* Wins over .gm-card, even though .gm-card is linked later */
.gm-card { border-radius: 0; }
```

If you also use layers, say the order once, at the top of your CSS. The later layer wins:

```css:CSS
@layer glassmarshmallow, my-styles;
```

### The font (optional)

GlassMarshmallow uses Montserrat. It comes in a separate file, `glassmarshmallow-font.min.css`, served from your own site (no Google Fonts). Add it before the framework if you want that font; if you prefer another one, leave it out and change `--gm-font` (see [Typography](/docs/customize/typography)).

```html:HTML
<link rel="stylesheet" href="node_modules/glassmarshmallow/dist/css/glassmarshmallow-font.min.css">
<link rel="stylesheet" href="node_modules/glassmarshmallow/dist/css/glassmarshmallow.min.css">
```
```css:CSS
@import "glassmarshmallow/dist/css/glassmarshmallow-font.css";
@import "glassmarshmallow/dist/css/glassmarshmallow.css";
```

### Only the parts you need

`glassmarshmallow.css` has everything. If your site only uses some components, load the **core** (colors, base,
grid, theme, utilities and background) and then the **component families** you need. They can go in any order:
the framework's layers keep them in place.

```css:CSS
@import "glassmarshmallow/dist/css/glassmarshmallow-core.css";
@import "glassmarshmallow/dist/css/components/basics.css";
@import "glassmarshmallow/dist/css/components/navigation.css";
```

| Family | Components | Needs |
| --- | --- | --- |
| `basics` | Button, card, alert, tag, code, avatar, accordion, progress, tooltip, dialog, round glass button, data list, hit area, copy command | — |
| `forms` | Form, field, range and slider, error summary, segmented control, calendar, color picker | `basics` |
| `navigation` | Navbar and tab bar, menu, search, full-screen menu, side menu, table of contents, previous/next, footers, social icons | `basics` |
| `media` | Video player, carousel, gallery, logo ticker | — |
| `chat` | Scroll row, chip, chat field, answer bubble, AI notice | — |
| `pages` | Section, hero, page structure, inner page, long text, code snippet, icon grid, showcase, documentation page | `basics` |
| `tools` | The generators' layout (`gm-tool`) | `basics`, `forms` |

Each file also has its `.min.css`. How much each one weighs is in [Performance](/docs/getting-started/performance).

## Icons

The icons live in their own package, [GlassMarshmallow Icons](/icons). With GlassMarshmallow 0.3 or later, use the icons 0.4 or later: they go in the framework's icons layer, so components and utilities can adjust them.

```sh:npm
npm install glassmarshmallow-icons
```
```sh:pnpm
pnpm add glassmarshmallow-icons
```
```sh:Yarn
yarn add glassmarshmallow-icons
```
```sh:Bun
bun add glassmarshmallow-icons
```

Then load the stylesheet and use an icon with two classes. Icons take the color of the text around them.

```html
<link rel="stylesheet" href="node_modules/glassmarshmallow-icons/font/glassmarshmallow-icons.css">

<i class="gmi gmi-moon" aria-hidden="true"></i>
```

## CDN

Skip the install and load the compiled CSS from a CDN.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glassmarshmallow@0.3.0/dist/css/glassmarshmallow.min.css">
```

## Download

Download the source code from the [repository on GitHub](https://github.com/GlassMarshmallow/glassmarshmallow). The ready-to-use files are in `dist/css/` and the source files in `css/`.

To build `dist/` again after changing the source:

```sh
npm run css
```

## For AI tools & LLMs

GlassMarshmallow will come with files that help AI assistants write correct code with the framework:

- **`llms.txt`**: a short map of the docs for language models.
- **`AGENTS.md`**: the rules for agents working in the repository.
- **Skills**: ready-made instructions for common tasks.

Read more in [AI](/docs/getting-started/ai).
