# Pie de página

El pie de la plantilla de portfolio: un título, los enlaces con icono (correo y redes), los enlaces legales en una línea y el nombre con el año. Centrado, con una línea fina encima.

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

## Logos de marcas

GitHub y LinkedIn están en los iconos de GlassMarshmallow (`gmi-github`, `gmi-linkedin`), con su forma oficial: las marcas no permiten redibujar su logo. Para otras marcas, usa su SVG oficial o el de [Simple Icons](https://simpleicons.org) (licencia libre), con `fill="currentColor"` para que tome el color del texto.

## Accesibilidad

- Los enlaces con solo icono llevan `aria-label` («Enviar un correo», «GitHub, se abre en una pestaña nueva»).
- Cada enlace mide 44 px como mínimo (WCAG 2.5.5).
- Los enlaces legales van en un `<nav>` con nombre.
