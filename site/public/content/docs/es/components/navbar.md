# Barra de navegación

La barra de arriba, como la de My Book Box y My MTV Box: el logo y el nombre a la izquierda, los enlaces de las secciones y, a la derecha, las acciones (idioma, tema…). Es de cristal y se queda pegada arriba al bajar por la página.

## Ejemplo

En la web va pegada arriba (`position: sticky`); aquí se ve dentro del recuadro.

```html
<header class="gm-navbar" style="position: relative; border-radius: 12px">
  <a class="gm-navbar__brand" href="#"><img class="gm-navbar__logo" src="logo.svg" alt="" width="48" height="48"><span>Mi web</span></a>
  <nav class="gm-navbar__nav" aria-label="Principal">
    <a href="#" aria-current="page">Inicio</a>
    <a href="#">Servicios</a>
    <a href="#">Contacto</a>
  </nav>
  <div class="gm-navbar__actions">
    <button type="button" class="gm-icon-btn" aria-label="Cambiar a modo oscuro"><i class="gmi gmi-moon" aria-hidden="true"></i></button>
  </div>
</header>
```

## Piezas

| Clase | Qué es |
| --- | --- |
| `.gm-navbar` | La barra: cristal, pegada arriba, con el mismo ancho que el contenedor |
| `.gm-navbar__brand` | Logo y nombre (enlace al inicio) |
| `.gm-navbar__logo` | El logo, de 48 px (42 px en el móvil) |
| `.gm-navbar__nav` | Los enlaces de las secciones; la página actual lleva `aria-current="page"` |
| `.gm-navbar__actions` | Botones de la derecha (idioma, tema, cuenta…) |

## En el móvil

Por debajo de 860 px, los enlaces de `.gm-navbar__nav` se esconden y pasan a la [barra de pestañas](/docs/components/tabbar) de abajo. Entre 860 y 1024 px se esconde el nombre junto al logo para que quepa todo.

## Accesibilidad

- Los enlaces van en un `<nav>` con nombre (`aria-label="Principal"`) y la página actual se marca con `aria-current="page"`, que además se ve en negrita.
- Cada enlace mide 44 px de alto (WCAG 2.5.5).
- Al pasar el ratón, los enlaces toman el degradado de las luces (en oscuro, el color del texto).
- Lo que recibe el foco no queda tapado por la barra: la página deja el hueco al desplazarse (WCAG 2.4.12).
