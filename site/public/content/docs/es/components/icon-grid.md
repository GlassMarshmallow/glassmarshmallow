# Cuadrícula de iconos

Casillas con un icono y su nombre, como las de Bootstrap Icons. Es la cuadrícula de la página de [Iconos](/icons) de esta web. En cada fila caben las que quepan.

## Ejemplo

```html
<ul class="gm-icon-grid">
  <li><a class="gm-icon-tile" href="#"><span class="gm-icon-tile__box"><i class="gmi gmi-heart" aria-hidden="true"></i></span><span class="gm-icon-tile__name">heart</span></a></li>
  <li><a class="gm-icon-tile" href="#"><span class="gm-icon-tile__box"><i class="gmi gmi-star" aria-hidden="true"></i></span><span class="gm-icon-tile__name">star</span></a></li>
  <li><a class="gm-icon-tile" href="#"><span class="gm-icon-tile__box"><i class="gmi gmi-book" aria-hidden="true"></i></span><span class="gm-icon-tile__name">book</span></a></li>
  <li><a class="gm-icon-tile" href="#"><span class="gm-icon-tile__box"><i class="gmi gmi-github" aria-hidden="true"></i></span><span class="gm-icon-tile__name">github</span></a></li>
</ul>
```

Los nombres largos pasan a la línea siguiente en vez de salirse.

## Accesibilidad

- El icono es decorativo (`aria-hidden="true"`): el enlace se llama como el texto de debajo.
