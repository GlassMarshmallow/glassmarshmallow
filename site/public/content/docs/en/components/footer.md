# Footer

The footer from the portfolio template: a heading, icon links (email and social), the legal links on one line and the name with the year. Centered, with a thin line above.

## Example

```html
<footer class="gm-footer">
  <div class="gm-container">
    <h2>Let's connect</h2>
    <div class="gm-footer__socials">
      <a href="#" aria-label="Send an email"><i class="gmi gmi-envelope-fill" aria-hidden="true"></i></a>
      <a href="#" aria-label="GitHub (opens in a new tab)"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/></svg></a>
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

GlassMarshmallow icons do not include brand logos (GitHub, LinkedIn…). For those, use their official SVG or the one from [Simple Icons](https://simpleicons.org) (free license), with `fill="currentColor"` so it takes the text color.

## Accessibility

- Icon-only links have an `aria-label` (“Send an email”, “GitHub, opens in a new tab”).
- Each link is at least 44 px (WCAG 2.5.5).
- The legal links go in a named `<nav>`.
