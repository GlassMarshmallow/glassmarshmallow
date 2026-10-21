# Page structure

The header, the content and the footer, with the footer at the bottom of the window even when the page is short. It is this site's structure.

## Example

```html-code
<body class="gm-app">
  <a class="gm-skip-link" href="#content">Skip to content</a>
  <header>…</header>
  <main id="content" class="gm-app__main" tabindex="-1">…</main>
  <div class="gm-app__end" aria-hidden="true"></div>
  <footer class="gm-site-footer">…</footer>
</body>
```

`gm-app__end` takes the free space: if the page is short, it grows and the footer stays at the bottom of the window with no scroll; if it is long, it is as small as possible.

## Centered content

`gm-app__main--center` centers the content in height in the gap between the header and the footer (this site's home page).

## Fade down to the footer

With the [lights background](/docs/customize/background) (`.gm-backdrop`), `gm-app__end--fade` adds a gradient that rises behind the end of the content to the footer color: white in light mode and black in dark mode. It starts and ends smoothly, with no step.

```html-code
<main id="content" class="gm-app__main gm-app__main--center" tabindex="-1">…</main>
<div class="gm-app__end gm-app__end--fade" aria-hidden="true"></div>
```

## Accessibility

- `tabindex="-1"` on `main` lets the [skip link](/docs/helpers/skip-link) move the focus to the content.
- `gm-app__end` is empty and decorative: `aria-hidden="true"`.
