# Showcase

A project made with the framework: its screenshots (computer and phone, in light and dark mode) and its text. Like this site's [Examples](/examples) page.

## Example

```html
<article class="gm-card gm-showcase">
  <ul class="gm-showcase__shots">
    <li><a class="gm-showcase__shot" href="/media/examples/portfolio-escritorio-claro.jpg"><img src="/media/examples/portfolio-escritorio-claro.jpg" width="1600" height="1000" alt="Portfolio on a computer"></a><span class="gm-showcase__mode">Light</span></li>
    <li><a class="gm-showcase__shot" href="/media/examples/portfolio-escritorio-oscuro.jpg"><img src="/media/examples/portfolio-escritorio-oscuro.jpg" width="1600" height="1000" alt="Portfolio on a computer"></a><span class="gm-showcase__mode">Dark</span></li>
  </ul>
  <div class="gm-showcase__text">
    <h2>Portfolio</h2>
    <p>Sara Paez Yamuza's portfolio, made with GlassMarshmallow.</p>
    <h3>Pieces</h3>
    <ul class="gm-showcase__links">
      <li><a href="/docs/components/navbar">Navbar</a></li>
      <li><a href="/docs/components/card">Card</a></li>
    </ul>
  </div>
</article>
```

- The screenshots go above and the text below; from 1100 px, side by side.
- For the phone screenshots (narrower), add `gm-showcase__figure--mobile` to their `li`.

## Accessibility

- Each screenshot has an `alt` that says what it shows; the mode (light or dark) goes as text under it.
