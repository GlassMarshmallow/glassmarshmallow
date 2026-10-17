# Pie de página

El pie de la plantilla de portfolio: un título, los enlaces con icono (correo y redes), los enlaces legales en una línea y el nombre con el año. Centrado, con una línea fina encima.

## Ejemplo

```html
<footer class="gm-footer">
  <div class="gm-container">
    <h2>Conectemos</h2>
    <div class="gm-footer__socials">
      <a href="#" aria-label="Enviar un correo"><i class="gmi gmi-envelope-fill" aria-hidden="true"></i></a>
      <a href="#" aria-label="GitHub (se abre en una pestaña nueva)"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/></svg></a>
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

Los iconos de GlassMarshmallow no incluyen logos de marcas (GitHub, LinkedIn…). Para esos, usa su SVG oficial o el de [Simple Icons](https://simpleicons.org) (licencia libre), con `fill="currentColor"` para que tome el color del texto.

## Accesibilidad

- Los enlaces con solo icono llevan `aria-label` («Enviar un correo», «GitHub, se abre en una pestaña nueva»).
- Cada enlace mide 44 px como mínimo (WCAG 2.5.5).
- Los enlaces legales van en un `<nav>` con nombre.
