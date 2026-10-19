# Side navigation

The menu of sections next to the content, like the one in this documentation. On desktop it stays in view while scrolling; below 900 px it hides behind a button.

## Example

```html
<nav class="gm-sidenav is-open gm-static gm-max-w-xs" aria-label="Documentation">
  <div class="gm-sidenav__group">
    <h2 class="gm-sidenav__title"><i class="gmi gmi-book" aria-hidden="true"></i>Getting started</h2>
    <ul class="gm-sidenav__list">
      <li><a class="gm-sidenav__link" href="#" aria-current="page">Introduction</a></li>
      <li><a class="gm-sidenav__link" href="#">Install</a></li>
    </ul>
  </div>
  <div class="gm-sidenav__group">
    <h2 class="gm-sidenav__title"><i class="gmi gmi-palette" aria-hidden="true"></i>Color</h2>
    <ul class="gm-sidenav__list">
      <li><a class="gm-sidenav__link" href="#">Palette</a></li>
      <li><a class="gm-sidenav__link" href="#">Light and dark mode</a></li>
    </ul>
  </div>
</nav>
```

In the example it has `gm-static` so it stays in place and `is-open` so it also shows on phones; on a page it goes inside `gm-sidenav-layout`.

## With the content next to it

`gm-sidenav-layout` puts the menu on the left (13.75 rem) and the content on the right. On narrow screens the menu moves to the top, hidden, and the `gm-sidenav__toggle` button opens it: your code adds `.is-open` to the menu and `aria-expanded="true"` to the button.

```html-code
<div class="gm-sidenav-layout gm-container">
  <button type="button" class="gm-btn gm-btn--secondary gm-btn--sm gm-sidenav__toggle" aria-controls="docs-menu" aria-expanded="false">
    <i class="gmi gmi-list" aria-hidden="true"></i>Browse docs
  </button>
  <nav id="docs-menu" class="gm-sidenav" aria-label="Documentation">…</nav>
  <main class="gm-sidenav-layout__main">…</main>
</div>
```

| Class | What it is |
| --- | --- |
| `gm-sidenav-layout` | The grid: menu and content |
| `gm-sidenav-layout__main` | The content (it can shrink without overflowing) |
| `gm-sidenav__toggle` | The button that opens the menu on phones (hidden on desktop) |
| `gm-sidenav` | The menu: white panel in light mode and black in dark mode, fixed while scrolling |
| `gm-sidenav__group` / `__title` / `__list` / `__link` | Each section, its title with an icon, its list and its links |

## Accessibility

- It is a `<nav>` with an `aria-label`, and each section has a heading and a list: screen readers can go through it in parts.
- The current page has `aria-current="page"`: it is announced and shown in the text color and semibold, not by color alone.
- Links are 44 px tall (WCAG 2.5.5) and the gray reaches 7:1 (AAA).
- On phones, the button says with `aria-expanded` whether the menu is open and with `aria-controls` what it opens.
