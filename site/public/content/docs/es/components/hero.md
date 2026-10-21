# Portada

El bloque de la portada: el logo, el nombre, una frase y los botones, centrados. Como la portada de esta web.

## Ejemplo

```html
<section class="gm-container gm-hero">
  <img class="gm-hero__logo" src="/logo.svg" alt="" width="120" height="120">
  <h1>GlassMarshmallow</h1>
  <p class="gm-hero__lead">Un framework de CSS con superficies de cristal, modo claro y oscuro y accesibilidad desde el primer componente.</p>
  <div class="gm-hero__actions">
    <a class="gm-btn gm-btn--secondary" href="#">Ejemplos</a>
    <a class="gm-btn" href="#">Ver la documentación</a>
  </div>
</section>
```

- El nombre se encoge con la pantalla para caber en una línea en el móvil.
- `gm-hero__buttons` agrupa botones que en el móvil van uno debajo del otro y con el mismo ancho (el del más largo). En el ordenador siguen en la fila.

## Accesibilidad

- Un solo `h1` por página: el de la portada.
- El logo junto al nombre es decorativo: `alt=""`.
