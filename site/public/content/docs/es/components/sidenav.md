# Menú lateral

El menú de secciones al lado del contenido, como el de esta documentación. En el ordenador se queda a la vista al hacer scroll; por debajo de 860 px (`md`) se esconde detrás de un botón.

## Ejemplo

```html
<nav class="gm-sidenav is-open gm-static gm-max-w-xs" aria-label="Documentación">
  <div class="gm-sidenav__group">
    <h2 class="gm-sidenav__title"><i class="gmi gmi-book" aria-hidden="true"></i>Empezar</h2>
    <ul class="gm-sidenav__list">
      <li><a class="gm-sidenav__link" href="#" aria-current="page">Introducción</a></li>
      <li><a class="gm-sidenav__link" href="#">Instalar</a></li>
    </ul>
  </div>
  <div class="gm-sidenav__group">
    <h2 class="gm-sidenav__title"><i class="gmi gmi-palette" aria-hidden="true"></i>Color</h2>
    <ul class="gm-sidenav__list">
      <li><a class="gm-sidenav__link" href="#">Paleta</a></li>
      <li><a class="gm-sidenav__link" href="#">Modo claro y oscuro</a></li>
    </ul>
  </div>
</nav>
```

En el ejemplo lleva `gm-static` para que se quede en su sitio y `is-open` para que también se vea en el móvil; en una página va con `gm-sidenav-layout`.

## Con el contenido al lado

`gm-sidenav-layout` pone el menú a la izquierda (13,75 rem) y el contenido a la derecha. En pantallas estrechas el menú pasa arriba, escondido, y lo abre el botón `gm-sidenav__toggle`: tu código pone `.is-open` en el menú y `aria-expanded="true"` en el botón.

```html-code
<div class="gm-sidenav-layout gm-container">
  <button type="button" class="gm-btn gm-btn--secondary gm-btn--sm gm-sidenav__toggle" aria-controls="menu-docs" aria-expanded="false">
    <i class="gmi gmi-list" aria-hidden="true"></i>Ver la documentación
  </button>
  <nav id="menu-docs" class="gm-sidenav" aria-label="Documentación">…</nav>
  <main class="gm-sidenav-layout__main">…</main>
</div>
```

| Clase | Qué es |
| --- | --- |
| `gm-sidenav-layout` | La cuadrícula: menú y contenido |
| `gm-sidenav-layout__main` | El contenido (puede encoger sin desbordar) |
| `gm-sidenav__toggle` | El botón que abre el menú en el móvil (no se ve en el ordenador) |
| `gm-sidenav` | El menú: panel blanco en claro y negro en oscuro, fijo al hacer scroll |
| `gm-sidenav__group` / `__title` / `__list` / `__link` | Cada sección, su título con icono, su lista y sus enlaces |

## Accesibilidad

- Es un `<nav>` con `aria-label`, y cada sección, un título y una lista: los lectores de pantalla lo recorren por partes.
- La página actual lleva `aria-current="page"`: se anuncia y se ve en el color del texto y en seminegrita, no solo por el color.
- Los enlaces miden 44 px de alto (WCAG 2.5.5) y el gris llega a 7:1 (AAA).
- En el móvil, el botón dice con `aria-expanded` si el menú está abierto y con `aria-controls` qué abre.
