# Escaparate

Un proyecto hecho con el framework: sus capturas (de ordenador y de móvil, en modo claro y oscuro) y su texto. Como la página de [Ejemplos](/examples) de esta web.

## Ejemplo

```html
<article class="gm-card gm-showcase">
  <ul class="gm-showcase__shots">
    <li><a class="gm-showcase__shot" href="/media/examples/portfolio-escritorio-claro.jpg"><img src="/media/examples/portfolio-escritorio-claro.jpg" width="1600" height="1000" alt="Portfolio en el ordenador"></a><span class="gm-showcase__mode">Claro</span></li>
    <li><a class="gm-showcase__shot" href="/media/examples/portfolio-escritorio-oscuro.jpg"><img src="/media/examples/portfolio-escritorio-oscuro.jpg" width="1600" height="1000" alt="Portfolio en el ordenador"></a><span class="gm-showcase__mode">Oscuro</span></li>
  </ul>
  <div class="gm-showcase__text">
    <h2>Portfolio</h2>
    <p>El portfolio de Sara Paez Yamuza, hecho con GlassMarshmallow.</p>
    <h3>Piezas</h3>
    <ul class="gm-showcase__links">
      <li><a href="/docs/components/navbar">Barra de navegación</a></li>
      <li><a href="/docs/components/card">Tarjeta</a></li>
    </ul>
  </div>
</article>
```

- Las capturas van arriba y el texto debajo; a partir de 1100 px, al lado.
- Para las capturas de móvil (más estrechas), añade `gm-showcase__figure--mobile` a su `li`.

## Accesibilidad

- Cada captura lleva un `alt` que dice lo que se ve; el modo (claro u oscuro) va como texto debajo.
