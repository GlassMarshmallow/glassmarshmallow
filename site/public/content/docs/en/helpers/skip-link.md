# Skip link

A link at the start of the page that goes straight to the content, skipping the menu. It is hidden until reached with the Tab key.

## Example

Press Tab when opening any page on this site: it is the first thing that appears, at the top left.

```html-code
<body>
  <a class="gm-skip-link" href="#content">Skip to content</a>
  <header class="gm-navbar">…</header>
  <main id="content" tabindex="-1">…</main>
</body>
```

## How to add it

- Make it **the first thing** inside `<body>`.
- The `href` points to the `<main>`'s `id`.
- The `<main>` has `tabindex="-1"`, so focus really reaches the content.

## Why

Keyboard users would otherwise have to go through every menu link on every page. With this link they skip them at once (WCAG 2.4.1). When focused it appears as a black button (white at night), clearly visible.
