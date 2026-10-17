# Footer

The footer from the portfolio template: a heading, icon links (email and social), the legal links on one line and the name with the year. Centered, with a thin line above.

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

## Brand logos

GitHub and LinkedIn are in the GlassMarshmallow icons (`gmi-github`, `gmi-linkedin`), with their official shape: brands do not allow their logo to be redrawn. For other brands, use their official SVG or the one from [Simple Icons](https://simpleicons.org) (free license), with `fill="currentColor"` so it takes the text color.

## Accessibility

- Icon-only links have an `aria-label` (“Send an email”, “GitHub, opens in a new tab”).
- Each link is at least 44 px (WCAG 2.5.5).
- The legal links go in a named `<nav>`.
