<p align="center">
  <img src="site/brand/logo/glassmarshmallow-512.png" width="120" height="120" alt="GlassMarshmallow logo">
</p>

<h1 align="center">GlassMarshmallow</h1>

<p align="center">
  <a href="https://github.com/GlassMarshmallow/glassmarshmallow/actions/workflows/ci.yml"><img src="https://github.com/GlassMarshmallow/glassmarshmallow/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://www.npmjs.com/package/glassmarshmallow"><img src="https://img.shields.io/npm/v/glassmarshmallow" alt="npm"></a>
</p>

<p align="center">
  A CSS framework with glass surfaces, a pastel palette, light and dark mode<br>
  and WCAG 2.2 accessibility (AA, and AAA whenever possible) from the first component.
</p>

<p align="center">
  Plain CSS with the <code>gm-</code> prefix · optional dependency-free scripts · its own icon set<br>
  Components in the Bootstrap style and utilities in the Tailwind style
</p>

<p align="center">
  <a href="https://github.com/GlassMarshmallow/portfolio-ia-template">Example: AI portfolio template</a> ·
  <a href="https://glassmarshmallow.com/docs">Documentation</a> ·
  <a href="https://glassmarshmallow.com/icons">Icons</a> ·
  <a href="https://glassmarshmallow.com/tools">Tools</a>
</p>

```sh
npm install glassmarshmallow
```

```html
<link rel="stylesheet" href="dist/css/glassmarshmallow-font.min.css"> <!-- optional: the Montserrat font, self-hosted -->
<link rel="stylesheet" href="dist/css/glassmarshmallow.min.css">
```

Need a value the utility scale does not have? Write it in brackets (`gm-z-[5]`, `gm-mt-[1.75rem]`) and run `npx glassmarshmallow build`: it writes only those classes into `glassmarshmallow.extra.css` ([arbitrary values](https://glassmarshmallow.com/docs/utilities/arbitrary)).

Icons live in their own project, `glassmarshmallow-icons` (published with v0.1).

## Structure

Organised like [Bootstrap](https://github.com/twbs/bootstrap):

| Folder | Content |
| --- | --- |
| `css/` | Source: tokens, base, components and background |
| `fonts/` | Montserrat (SIL Open Font License), for the optional `glassmarshmallow-font.css` |
| `dist/` | Compiled files (`npm run css`) |
| `site/` | The documentation website (Angular) |
| `bin/` | `npx glassmarshmallow build`, for arbitrary values |
| `build/` | Build scripts |
| `skills/` | Step-by-step guides for AI coding agents (see `AGENTS.md`) |

## Development

```sh
npm run css        # build dist/css
npm run site       # documentation site at http://localhost:4500
npm test           # the CSS builds, is inside the layer and every class in the docs examples exists
npm run test:a11y  # axe-core on every documentation page (build the site first)
```

The checks run on every push with GitHub Actions. See [CONTRIBUTING.md](CONTRIBUTING.md) to help,
[CHANGELOG.md](CHANGELOG.md) for what changed in each version and [SECURITY.md](SECURITY.md) to report a
security problem.

## License

MIT · Designed and developed by Sara Paez Yamuza
