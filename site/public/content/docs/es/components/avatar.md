# Imagen de perfil

La casilla de la foto de perfil, en círculo o en cuadrado con los bordes redondeados. Si no hay foto, enseña las iniciales sobre un pastel o una silueta.

## Formas

Círculo (`.gm-avatar`) o cuadrado redondeado (`.gm-avatar--square`). La foto se recorta para llenar la casilla sin deformarse.

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 16px">
  <span class="gm-avatar gm-avatar--lg"><img src="media/perfil-1.jpg" alt="Lucía Martín"></span>
  <span class="gm-avatar gm-avatar--lg gm-avatar--square"><img src="media/perfil-2.jpg" alt="Pablo Ruiz"></span>
</div>
```

## Tamaños

`.gm-avatar--sm` (2 rem), normal (3 rem), `.gm-avatar--lg` (5 rem) y `.gm-avatar--xl` (8 rem). El redondeo y las letras crecen en proporción.

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 16px">
  <span class="gm-avatar gm-avatar--sm"><img src="media/perfil-3.jpg" alt="Ana López"></span>
  <span class="gm-avatar"><img src="media/perfil-3.jpg" alt="Ana López"></span>
  <span class="gm-avatar gm-avatar--lg"><img src="media/perfil-3.jpg" alt="Ana López"></span>
  <span class="gm-avatar gm-avatar--xl"><img src="media/perfil-3.jpg" alt="Ana López"></span>
</div>
```

## Sin foto

Con las iniciales: añade un color de la paleta (`.gm-theme-sky`, `.gm-theme-mint`…) y di el nombre con `role="img"` y `aria-label`, porque las iniciales solas no se entienden. Sin nombre, una silueta.

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 16px">
  <span class="gm-avatar gm-avatar--lg gm-theme-sky" role="img" aria-label="Sara Paez">SP</span>
  <span class="gm-avatar gm-avatar--lg gm-avatar--square gm-theme-lavender" role="img" aria-label="Marta Gil">MG</span>
  <span class="gm-avatar gm-avatar--lg gm-theme-mint" role="img" aria-label="Diego Sanz">DS</span>
  <span class="gm-avatar gm-avatar--lg" role="img" aria-label="Sin foto de perfil"><i class="gmi gmi-person-fill" aria-hidden="true"></i></span>
</div>
```

## Cambiar la foto

En la página de perfil, un botón con el lápiz encima de la foto. Úsalo con los tamaños grandes (`--lg` y `--xl`): el botón mide 44 px.

```html
<span class="gm-avatar gm-avatar--xl">
  <img src="media/perfil-4.jpg" alt="Tu foto de perfil">
  <button type="button" class="gm-avatar__edit" aria-label="Cambiar la foto de perfil"><i class="gmi gmi-pencil-fill" aria-hidden="true"></i></button>
</span>
```

## Grupo

Varias fotos montadas, por ejemplo para enseñar quién participa. El último puede decir cuántos más hay.

```html
<div class="gm-avatar-group" role="group" aria-label="Participan Lucía, Pablo, Ana y 5 personas más">
  <span class="gm-avatar"><img src="media/perfil-1.jpg" alt=""></span>
  <span class="gm-avatar"><img src="media/perfil-2.jpg" alt=""></span>
  <span class="gm-avatar"><img src="media/perfil-3.jpg" alt=""></span>
  <span class="gm-avatar" aria-hidden="true">+5</span>
</div>
```

## Accesibilidad

- Una foto con nombre al lado (en una lista de personas) es decorativa: `alt=""`. Sola, lleva el nombre: `alt="Lucía Martín"`.
- Las iniciales van con `role="img"` y `aria-label` con el nombre completo.
- En un grupo, el `aria-label` del grupo dice quién participa y las fotos llevan `alt=""`.
- Las iniciales son negras sobre el pastel (7,8:1 o más, AAA); sin color, el texto normal sobre gris.
- El botón para cambiar la foto mide 44 px (WCAG 2.5.5) y dice lo que hace.
