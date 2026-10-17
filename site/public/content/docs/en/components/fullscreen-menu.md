# Fullscreen menu

The mobile menu from the portfolio template: a round glass button with the hamburger opens the links in large type, filling the whole screen over a nearly opaque background. It is another way to navigate on phones, for sites with few sections; the other is the [tab bar](/docs/components/tabbar).

## Example

```html
<button type="button" class="gm-icon-btn gm-icon-btn--glass" aria-controls="example-mobile-menu" aria-label="Open menu"><i class="gmi gmi-list" aria-hidden="true"></i></button>
<div class="gm-fullscreen-menu" id="example-mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
  <button type="button" class="gm-icon-btn gm-icon-btn--glass gm-fullscreen-menu__close" aria-label="Close menu"><i class="gmi gmi-x-lg" aria-hidden="true"></i></button>
  <nav aria-label="Mobile menu">
    <ul class="gm-fullscreen-menu__links">
      <li><a href="#" aria-current="page">Home</a></li>
      <li><a href="#">About me</a></li>
      <li><a href="#">Skills</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</div>
```

## Round glass button

`.gm-icon-btn--glass` is the template's 44 px glass circle, meant to sit on an illustration or an image: the menu button, the close button and the light/dark switch.

## Script

```html
<script type="module">
  import { initFullscreenMenus } from 'glassmarshmallow/js/fullscreen-menu.js';
  initFullscreenMenus();
</script>
```

The button that opens it is linked to the menu with `aria-controls="menu-id"`.

## Accessibility

- When closed, the menu is inert: it cannot be reached with the keyboard nor read by screen readers.
- When open, the rest of the page is inert, focus goes to the first link and the button says `aria-expanded="true"`.
- It closes with Escape, the ✕ or by choosing a link, and focus returns to the menu button.
- Large links (2 rem) at least 44 px tall; the current page with `aria-current="page"`.
