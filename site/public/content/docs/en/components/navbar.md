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
| `.gm-navbar__nav` | The section links; the current page has `aria-current="page"` and is bold. On a one-page site, the section being viewed has `aria-current="location"` |
| `.gm-navbar__actions` | Buttons on the right (language, theme, account…) |

## Glass logo

If the logo is made of glass (translucent, with shiny edges, like the GlassMarshmallow one), it barely shows on a light background. Add `.gm-glass-logo`: in light mode it gets a thin white border, a gradient shadow behind the glass and the medium shadow outside; in dark mode nothing changes. It also works outside the navbar, for example in a card.

```html
<img class="gm-navbar__logo gm-glass-logo" src="logo.svg" alt="" width="48" height="48">
```

## Without a logo and floating on phones

The bar of the portfolio template. **On computers**, without a logo: the links in the center and the theme button on the right (`.gm-navbar--centered`). **On phones**, no bar: only the round glass buttons remain, floating at the top right (`.gm-navbar--floating`), and the menu button (`.gm-navbar__menu`) opens the [full-screen menu](/docs/components/fullscreen-menu).

```html
<header class="gm-navbar gm-navbar--centered gm-navbar--floating" style="position: relative; border-radius: 12px">
  <nav class="gm-navbar__nav" aria-label="Centered bar example">
    <a href="#" aria-current="page">Home</a>
    <a href="#">About me</a>
    <a href="#">Skills</a>
  </nav>
  <div class="gm-navbar__actions">
    <button type="button" class="gm-icon-btn" aria-label="Switch to dark mode"><i class="gmi gmi-moon" aria-hidden="true"></i></button>
    <button type="button" class="gm-icon-btn gm-icon-btn--glass gm-navbar__menu" aria-label="Open menu"><i class="gmi gmi-list" aria-hidden="true"></i></button>
  </div>
</header>
```

This is how it looks on phones (make the window narrower than 860 px to see it in the top bar):

```html
<div style="position: relative; height: 160px; overflow: hidden; border-radius: 12px; background: var(--gm-backdrop-lights), var(--gm-backdrop-bg)">
  <div style="position: absolute; top: 12px; right: 12px; display: flex; gap: 12px">
    <button type="button" class="gm-icon-btn gm-icon-btn--glass" aria-label="Switch to dark mode"><i class="gmi gmi-moon" aria-hidden="true"></i></button>
    <button type="button" class="gm-icon-btn gm-icon-btn--glass" aria-label="Open menu"><i class="gmi gmi-list" aria-hidden="true"></i></button>
  </div>
</div>
```

## Change the colors

With variables on the bar:

| Variable | What it changes |
| --- | --- |
| `--gm-header-bg` | The background (a color, with transparency if you want glass) |
| `--gm-header-filter` | The glass blur (`blur(24px)`; `none` to remove it) |
| `--gm-header-border` | The bottom line |
| `--gm-header-shadow` | The shadow |
| `--gm-nav-size` | The link size (0.88 rem; 1 rem in the bar without a logo) |
| `--gm-nav-link` | The link color |
| `--gm-nav-link-hover` | The link color on hover (a color or a gradient). By default, the accent: the strong one by day (dark pink, 8.6:1) and the normal one at night (blue, or turquoise with `gm-accent-turquoise`) |

So the text reads well on the new background, the easiest way is to fix the mode of the bar with `data-theme`: a dark bar on a light page (`data-theme="dark"`) or a pastel with black text (`data-theme="light"`).

```html
<div style="display: grid; gap: 16px">
  <header class="gm-navbar gm-navbar--centered" data-theme="dark" style="position: relative; border-radius: 12px">
    <nav class="gm-navbar__nav" aria-label="Dark bar example">
      <a href="#" aria-current="page">Home</a><a href="#">About me</a><a href="#">Skills</a>
    </nav>
    <div class="gm-navbar__actions"><button type="button" class="gm-icon-btn" aria-label="Switch to light mode"><i class="gmi gmi-sun" aria-hidden="true"></i></button></div>
  </header>
  <header class="gm-navbar gm-navbar--centered" data-theme="light" style="position: relative; border-radius: 12px; --gm-header-bg: var(--gm-mint); --gm-header-border: transparent; --gm-header-shadow: 0 4px 24px rgba(0, 0, 0, .08)">
    <nav class="gm-navbar__nav" aria-label="Mint bar example">
      <a href="#" aria-current="page">Home</a><a href="#">About me</a><a href="#">Skills</a>
    </nav>
    <div class="gm-navbar__actions"><button type="button" class="gm-icon-btn" aria-label="Switch to dark mode"><i class="gmi gmi-moon" aria-hidden="true"></i></button></div>
  </header>
</div>
```

### On hover

Hover over the links: in the first bar they take the accent color (pink by day, blue at night); in the second, a gradient from lavender to pink.

```html
<div style="display: grid; gap: 16px">
  <header class="gm-navbar gm-navbar--centered" style="position: relative; border-radius: 12px; --gm-nav-link-hover: var(--gm-accent)">
    <nav class="gm-navbar__nav" aria-label="Accent color example">
      <a href="#" aria-current="page">Home</a><a href="#">About me</a><a href="#">Skills</a>
    </nav>
  </header>
  <header class="gm-navbar gm-navbar--centered" data-theme="light" style="position: relative; border-radius: 12px; --gm-nav-link-hover: linear-gradient(90deg, var(--gm-lavender-700), var(--gm-pink-700))">
    <nav class="gm-navbar__nav" aria-label="Gradient example">
      <a href="#" aria-current="page">Home</a><a href="#">About me</a><a href="#">Skills</a>
    </nav>
  </header>
</div>
```

To change the accent color of the whole site (also buttons, focus and fields), see [Another accent color](/docs/getting-started/css-variables#another-accent-color).

For the whole site, put the variables in `:root` (and the night ones in `[data-theme="dark"]`), as in [CSS variables](/docs/getting-started/css-variables).

## On phones

Below 860 px, the `.gm-navbar__nav` links are hidden and move to the [tab bar](/docs/components/tabbar) at the bottom. Between 860 and 1024 px the name next to the logo is hidden so everything fits.

## Accessibility

- Links go in a named `<nav>` (`aria-label="Main"`) and the current page is marked with `aria-current="page"`, which also shows in bold.
- Each link is 44 px tall (WCAG 2.5.5).
- On hover or press, links take the accent color: dark pink by day and blue at night, both 7:1 or more (AAA).
- Focused items are not hidden behind the bar: the page leaves room when scrolling (WCAG 2.4.12).
