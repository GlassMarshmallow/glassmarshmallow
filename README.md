# Mallowglass

A CSS framework with glass surfaces, light and dark mode and WCAG 2.2 AA accessibility from the first component.

```sh
npm install mallowglass
```

```html
<link rel="stylesheet" href="dist/css/mallowglass.min.css">
```

Icons live in their own project: [mallowglass-icons](../mallowglass-icons).

## Structure

Organised like [Bootstrap](https://github.com/twbs/bootstrap):

| Folder | Content |
| --- | --- |
| `css/` | Source: tokens, base, components and background |
| `dist/` | Compiled files (`npm run css`) |
| `site/` | The documentation website (Angular) |
| `build/` | Build scripts |
| `skills/` | Step-by-step guides for AI coding agents (see `AGENTS.md`) |

## Development

```sh
npm run css     # build dist/css
npm run site    # documentation site at http://localhost:4500
```

## License

MIT · Designed and developed by Sara Paez Yamuza
