# Navbar

The top bar, like the one in My Book Box and My MTV Box: logo and name on the left, the section links and, on the right, the actions (language, theme…). It is glass and sticks to the top when scrolling.

## Example

On the site it sticks to the top (`position: sticky`); here it is shown inside the frame.

```html
<header class="gm-navbar" style="position: relative; border-radius: 12px">
  <a class="gm-navbar__brand" href="#"><img class="gm-navbar__logo" src="logo.svg" alt="" width="48" height="48"><span>My site</span></a>
  <nav class="gm-navbar__nav" aria-label="Main">
    <a href="#" aria-current="page">Home</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </nav>
  <div class="gm-navbar__actions">
    <button type="button" class="gm-icon-btn" aria-label="Switch to dark mode"><i class="gmi gmi-moon" aria-hidden="true"></i></button>
  </div>
</header>
```

## Parts

| Class | What it is |
| --- | --- |
| `.gm-navbar` | The bar: glass, sticky, as wide as the container |
| `.gm-navbar__brand` | Logo and name (link to home) |
| `.gm-navbar__logo` | The logo, 48 px (42 px on phones) |
| `.gm-navbar__nav` | The section links; the current page has `aria-current="page"` |
| `.gm-navbar__actions` | Buttons on the right (language, theme, account…) |

## On phones

Below 860 px, the `.gm-navbar__nav` links are hidden and move to the [tab bar](/docs/components/tabbar) at the bottom. Between 860 and 1024 px the name next to the logo is hidden so everything fits.

## Accessibility

- Links go in a named `<nav>` (`aria-label="Main"`) and the current page is marked with `aria-current="page"`, which also shows in bold.
- Each link is 44 px tall (WCAG 2.5.5).
- On hover, links take the gradient of the lights (in dark mode, the text color).
- Focused items are not hidden behind the bar: the page leaves room when scrolling (WCAG 2.4.12).
