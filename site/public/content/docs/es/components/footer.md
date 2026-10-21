# Pie de página

Un pie con un título, los enlaces con icono (correo y redes), los enlaces legales en una línea y el nombre con el año. Centrado, con una línea fina encima.

## Ejemplo

```html
<footer class="gm-footer">
  <div class="gm-container">
    <h2>Conectemos</h2>
    <div class="gm-footer__socials">
      <a href="#" aria-label="Enviar un correo"><i class="gmi gmi-envelope-fill" aria-hidden="true"></i></a>
      <a href="#" aria-label="GitHub (se abre en una pestaña nueva)"><i class="gmi gmi-github" aria-hidden="true"></i></a>
    </div>
    <nav class="gm-footer__links" aria-label="Información legal">
      <a href="#">Privacidad</a><span aria-hidden="true">·</span><a href="#">Aviso legal</a>
    </nav>
    <p class="gm-footer__bottom">2026 · <strong>Sara Paez Yamuza</strong> · Portfolio</p>
    <p class="gm-footer__credit">Hecho con <a href="#">GlassMarshmallow</a></p>
  </div>
</footer>
```

## Piezas

| Clase | Qué es |
| --- | --- |
| `.gm-footer` | El pie, centrado y con una línea encima |
| `.gm-footer__socials` | Enlaces con icono de 32 px (correo, redes) |
| `.gm-footer__links` | Enlaces legales en una línea, subrayados y en gris |
| `.gm-footer__bottom` | El año y el nombre (en `<strong>`) |
| `.gm-footer__credit` | Créditos, más pequeños |

## Iconos sociales grandes

Para el correo y las redes fuera del pie (por ejemplo, en la portada): `.gm-socials`, iconos de 36 px que se agrandan un poco al pasar el ratón. El tamaño se cambia con `--gm-socials-size`.

```html
<div class="gm-socials">
  <button type="button" aria-label="Copiar dirección de correo"><i class="gmi gmi-envelope-fill" aria-hidden="true"></i></button>
  <a href="#" aria-label="GitHub (se abre en una pestaña nueva)"><i class="gmi gmi-github" aria-hidden="true"></i></a>
  <a href="#" aria-label="LinkedIn (se abre en una pestaña nueva)"><i class="gmi gmi-linkedin" aria-hidden="true"></i></a>
</div>
```

## Logos de marcas

GitHub y LinkedIn están en los iconos de GlassMarshmallow (`gmi-github`, `gmi-linkedin`), con su forma oficial: las marcas no permiten redibujar su logo. Para otras marcas, usa su SVG oficial o el de [Simple Icons](https://simpleicons.org) (licencia libre), con `fill="currentColor"` para que tome el color del texto.

## Pie sencillo

`gm-site-footer`: una fila de enlaces y debajo los créditos, sobre el fondo de la página con una línea arriba. Es el de esta web. Sobre el fondo de luces a toda la página (`gm-backdrop`), pasa a blanco en claro y negro en oscuro, sin línea, para continuar el degradado del final. Con `gm-has-tabbar` deja sitio a la barra de pestañas del móvil.

```html
<footer class="gm-site-footer">
  <div class="gm-site-footer__inner">
    <nav class="gm-site-footer__links" aria-label="Pie">
      <a href="#">Docs</a><a href="#">Ejemplos</a><a href="#">Iconos</a>
    </nav>
    <p class="gm-site-footer__credit gm-muted gm-small">Diseñado y desarrollado por <a class="gm-site-footer__author" href="#">Sara Paez Yamuza</a> · Licencia MIT</p>
  </div>
</footer>
```

## Accesibilidad

- Los enlaces con solo icono llevan `aria-label` («Enviar un correo», «GitHub, se abre en una pestaña nueva»).
- Cada enlace mide 44 px como mínimo (WCAG 2.5.5).
- Los enlaces legales van en un `<nav>` con nombre.
