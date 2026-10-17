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

## Sin logo y flotante en el móvil

La barra de la plantilla de portfolio. **En el ordenador**, sin logo: los enlaces en el centro y el botón de tema a la derecha (`.gm-navbar--centered`). **En el móvil**, sin barra: solo quedan los botones redondos de cristal flotando arriba a la derecha (`.gm-navbar--floating`), y el botón de menú (`.gm-navbar__menu`) abre el [menú a pantalla completa](/docs/components/fullscreen-menu).

```html
<header class="gm-navbar gm-navbar--centered gm-navbar--floating" style="position: relative; border-radius: 12px">
  <nav class="gm-navbar__nav" aria-label="Ejemplo de barra centrada">
    <a href="#" aria-current="page">Inicio</a>
    <a href="#">Sobre mí</a>
    <a href="#">Habilidades</a>
  </nav>
  <div class="gm-navbar__actions">
    <button type="button" class="gm-icon-btn" aria-label="Cambiar a modo oscuro"><i class="gmi gmi-moon" aria-hidden="true"></i></button>
    <button type="button" class="gm-icon-btn gm-icon-btn--glass gm-navbar__menu" aria-label="Abrir menú"><i class="gmi gmi-list" aria-hidden="true"></i></button>
  </div>
</header>
```

Así se ve en el móvil (estrecha la ventana por debajo de 860 px para verlo en la barra de arriba):

```html
<div style="position: relative; height: 160px; overflow: hidden; border-radius: 12px; background: var(--gm-backdrop-lights), var(--gm-backdrop-bg)">
  <div style="position: absolute; top: 12px; right: 12px; display: flex; gap: 12px">
    <button type="button" class="gm-icon-btn gm-icon-btn--glass" aria-label="Cambiar a modo oscuro"><i class="gmi gmi-moon" aria-hidden="true"></i></button>
    <button type="button" class="gm-icon-btn gm-icon-btn--glass" aria-label="Abrir menú"><i class="gmi gmi-list" aria-hidden="true"></i></button>
  </div>
</div>
```

## Cambiar los colores

Con variables en la barra:

| Variable | Qué cambia |
| --- | --- |
| `--gm-header-bg` | El fondo (un color, con transparencia si quieres cristal) |
| `--gm-header-filter` | El desenfoque del cristal (`blur(24px)`; `none` para quitarlo) |
| `--gm-header-border` | La línea de abajo |
| `--gm-header-shadow` | La sombra |
| `--gm-nav-size` | El tamaño de los enlaces (0,88 rem; 1 rem en la barra sin logo) |
| `--gm-nav-link` | El color de los enlaces |
| `--gm-nav-link-hover` | El color de los enlaces al pasar el ratón (un color o un degradado). Por defecto, el acento: de día el fuerte (rosa oscuro, 8,6:1) y de noche el normal (azul, o turquesa con `gm-accent-turquoise`) |

Para que el texto se lea bien sobre el nuevo fondo, lo más sencillo es fijar el modo de la barra con `data-theme`: una barra oscura en una página clara (`data-theme="dark"`) o un pastel con texto negro (`data-theme="light"`).

```html
<div style="display: grid; gap: 16px">
  <header class="gm-navbar gm-navbar--centered" data-theme="dark" style="position: relative; border-radius: 12px">
    <nav class="gm-navbar__nav" aria-label="Ejemplo de barra oscura">
      <a href="#" aria-current="page">Inicio</a><a href="#">Sobre mí</a><a href="#">Habilidades</a>
    </nav>
    <div class="gm-navbar__actions"><button type="button" class="gm-icon-btn" aria-label="Cambiar a modo claro"><i class="gmi gmi-sun" aria-hidden="true"></i></button></div>
  </header>
  <header class="gm-navbar gm-navbar--centered" data-theme="light" style="position: relative; border-radius: 12px; --gm-header-bg: var(--gm-mint); --gm-header-border: transparent; --gm-header-shadow: 0 4px 24px rgba(0, 0, 0, .08)">
    <nav class="gm-navbar__nav" aria-label="Ejemplo de barra menta">
      <a href="#" aria-current="page">Inicio</a><a href="#">Sobre mí</a><a href="#">Habilidades</a>
    </nav>
    <div class="gm-navbar__actions"><button type="button" class="gm-icon-btn" aria-label="Cambiar a modo oscuro"><i class="gmi gmi-moon" aria-hidden="true"></i></button></div>
  </header>
</div>
```

### Al pasar el ratón

Pasa el ratón por los enlaces: en la primera barra toman el color de acento (rosa de día, azul de noche); en la segunda, un degradado de lavanda a rosa.

```html
<div style="display: grid; gap: 16px">
  <header class="gm-navbar gm-navbar--centered" style="position: relative; border-radius: 12px; --gm-nav-link-hover: var(--gm-accent)">
    <nav class="gm-navbar__nav" aria-label="Ejemplo con el color de acento">
      <a href="#" aria-current="page">Inicio</a><a href="#">Sobre mí</a><a href="#">Habilidades</a>
    </nav>
  </header>
  <header class="gm-navbar gm-navbar--centered" data-theme="light" style="position: relative; border-radius: 12px; --gm-nav-link-hover: linear-gradient(90deg, var(--gm-lavender-700), var(--gm-pink-700))">
    <nav class="gm-navbar__nav" aria-label="Ejemplo con degradado">
      <a href="#" aria-current="page">Inicio</a><a href="#">Sobre mí</a><a href="#">Habilidades</a>
    </nav>
  </header>
</div>
```

Para cambiar el color de acento de toda la web (también el de los botones, el foco y los campos), mira [Otro color de acento](/docs/getting-started/css-variables#otro-color-de-acento).

Para toda la web, pon las variables en `:root` (y en `[data-theme="dark"]` las de noche), como en [Variables CSS](/docs/getting-started/css-variables).

## En el móvil

Por debajo de 860 px, los enlaces de `.gm-navbar__nav` se esconden y pasan a la [barra de pestañas](/docs/components/tabbar) de abajo. Entre 860 y 1024 px se esconde el nombre junto al logo para que quepa todo.

## Accesibilidad

- Los enlaces van en un `<nav>` con nombre (`aria-label="Principal"`) y la página actual se marca con `aria-current="page"`, que además se ve en negrita.
- Cada enlace mide 44 px de alto (WCAG 2.5.5).
- Al pasar el ratón o pulsar, los enlaces toman el color de acento: rosa oscuro de día y azul de noche, los dos de 7:1 o más (AAA).
- Lo que recibe el foco no queda tapado por la barra: la página deja el hueco al desplazarse (WCAG 2.4.12).
