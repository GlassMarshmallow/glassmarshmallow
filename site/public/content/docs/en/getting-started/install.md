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

If you only need some parts, import the source files one by one. `tokens.css` always goes first.

```css
@import "glassmarshmallow/css/tokens.css";
@import "glassmarshmallow/css/base.css";
@import "glassmarshmallow/css/components.css";
@import "glassmarshmallow/css/backdrop.css";
```

## Icons

The icons live in their own package, [GlassMarshmallow Icons](/icons).

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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glassmarshmallow@0.1.0/dist/css/glassmarshmallow.min.css">
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
