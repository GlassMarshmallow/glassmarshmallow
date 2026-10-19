# Anterior y siguiente

Dos tarjetas de cristal al final de una página que forma parte de una serie (documentación, un curso, un tutorial por pasos), con el nombre de la página anterior y de la siguiente.

## Ejemplo

```html
<nav class="gm-pager" aria-label="Más páginas">
  <a class="gm-pager__link" href="#">
    <span class="gm-pager__label"><i class="gmi gmi-arrow-left" aria-hidden="true"></i>Anterior</span>
    <span class="gm-pager__title">Botón</span>
  </a>
  <a class="gm-pager__link gm-pager__link--next" href="#">
    <span class="gm-pager__label">Siguiente<i class="gmi gmi-arrow-right" aria-hidden="true"></i></span>
    <span class="gm-pager__title">Tarjeta</span>
  </a>
</nav>
```

`gm-pager__link--next` va siempre en la columna de la derecha, aunque no haya anterior (en la primera página).

## Accesibilidad

- Es un `<nav>` con su `aria-label`, distinto del de la navegación principal.
- Cada enlace dice adónde lleva (el nombre de la página), no solo «Siguiente».
- Las flechas son de adorno (`aria-hidden`): la palabra ya lo dice.
