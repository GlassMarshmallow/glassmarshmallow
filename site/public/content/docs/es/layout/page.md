# Estructura de la página

La cabecera, el contenido y el pie, con el pie al final de la ventana aunque la página sea corta. Es la estructura de esta web.

## Ejemplo

```html-code
<body class="gm-app">
  <a class="gm-skip-link" href="#contenido">Saltar al contenido</a>
  <header>…</header>
  <main id="contenido" class="gm-app__main" tabindex="-1">…</main>
  <div class="gm-app__end" aria-hidden="true"></div>
  <footer class="gm-site-footer">…</footer>
</body>
```

`gm-app__end` ocupa el espacio libre: si la página es corta, crece y el pie queda al final de la ventana sin scroll; si es larga, mide lo mínimo.

## Contenido centrado

`gm-app__main--center` centra el contenido en alto en el hueco entre la cabecera y el pie (la portada de esta web).

## Degradado hasta el pie

Con el [fondo de luces](/docs/customize/background) (`.gm-backdrop`), `gm-app__end--fade` añade un degradado que sube por detrás del final del contenido hasta el color del pie: blanco en claro y negro en oscuro. Empieza y acaba suave, sin escalón.

```html-code
<main id="contenido" class="gm-app__main gm-app__main--center" tabindex="-1">…</main>
<div class="gm-app__end gm-app__end--fade" aria-hidden="true"></div>
```

## Accesibilidad

- `tabindex="-1"` en `main` deja que el [enlace para saltar](/docs/helpers/skip-link) lleve el foco al contenido.
- `gm-app__end` está vacío y es decorativo: `aria-hidden="true"`.
