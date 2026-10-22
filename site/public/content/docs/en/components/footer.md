# Footer

A footer with a heading, icon links (email and social), the legal links on one line and the name with the year. Centered, with a thin line above.

## Example

```html
<footer class="gm-footer">
  <div class="gm-container">
    <h2>Let's connect</h2>
    <div class="gm-footer__socials">
      <a href="#" aria-label="Send an email"><i class="gmi gmi-envelope-fill" aria-hidden="true"></i></a>
      <a href="#" aria-label="GitHub (opens in a new tab)"><i class="gmi gmi-github" aria-hidden="true"></i></a>
    </div>
    <nav class="gm-footer__links" aria-label="Legal information">
      <a href="#">Privacy</a><span aria-hidden="true">·</span><a href="#">Legal notice</a>
    </nav>
    <p class="gm-footer__bottom">2026 · <strong>Sara Paez Yamuza</strong> · Portfolio</p>
    <p class="gm-footer__credit">Made with <a href="#">GlassMarshmallow</a></p>
  </div>
</footer>
```

## Parts

| Class | What it is |
| --- | --- |
| `.gm-footer` | The footer, centered with a line above |
| `.gm-footer__socials` | 32 px icon links (email, social) |
| `.gm-footer__links` | Legal links on one line, underlined and gray |
| `.gm-footer__bottom` | The year and the name (in `<strong>`) |
| `.gm-footer__credit` | Credits, smaller |

## Large social icons

For email and social links outside the footer (for example, on the home page): `.gm-socials`, 36 px icons that grow a little on hover. Change the size with `--gm-socials-size`.

```html
<div class="gm-socials">
  <button type="button" aria-label="Copy email address"><i class="gmi gmi-envelope-fill" aria-hidden="true"></i></button>
  <a href="#" aria-label="GitHub (opens in a new tab)"><i class="gmi gmi-github" aria-hidden="true"></i></a>
  <a href="#" aria-label="LinkedIn (opens in a new tab)"><i class="gmi gmi-linkedin" aria-hidden="true"></i></a>
</div>
```

## Brand logos

GitHub and LinkedIn are in the GlassMarshmallow icons (`gmi-github`, `gmi-linkedin`), with their official shape: brands do not allow their logo to be redrawn. For other brands, use their official SVG or the one from [Simple Icons](https://simpleicons.org) (free license), with `fill="currentColor"` so it takes the text color.

## Simple footer

`gm-site-footer`: a row of links and the credits below, on the page background with a line on top. It is the one on this site. Over the full-page lights background (`gm-backdrop`), it turns white in light mode and black in dark mode, with no line, to continue the gradient at the end. With `gm-has-tabbar` it leaves room for the phone tab bar.

```html
<footer class="gm-site-footer">
  <div class="gm-site-footer__inner">
    <nav class="gm-site-footer__links" aria-label="Footer example">
      <a href="#">Docs</a><a href="#">Examples</a><a href="#">Icons</a>
    </nav>
    <p class="gm-site-footer__credit gm-muted gm-small">Designed and built by <a class="gm-site-footer__author" href="#">Sara Paez Yamuza</a> · MIT License</p>
  </div>
</footer>
```

## Accessibility

- Icon-only links have an `aria-label` (“Send an email”, “GitHub, opens in a new tab”).
- Each link is at least 44 px (WCAG 2.5.5).
- The legal links go in a named `<nav>`.
