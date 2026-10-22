# Índice de la página

«En esta página»: los apartados de una página larga, para saltar a cada uno. En pantallas anchas va en una columna a la derecha y se queda a la vista al hacer scroll; por debajo de 1200 px se cambia por un desplegable encima del texto.

## Ejemplo

```html
<aside class="gm-toc gm-static gm-block" aria-label="Ejemplo de índice">
  <p class="gm-toc__title">En esta página</p>
  <ul class="gm-toc__list">
    <li><a class="gm-toc__link" href="#">Ejemplo</a></li>
    <li class="gm-toc__sub"><a class="gm-toc__link" href="#">Con pestañas</a></li>
    <li><a class="gm-toc__link" href="#">Accesibilidad</a></li>
  </ul>
</aside>
```

`gm-toc__sub` sangra un subapartado. En el ejemplo lleva `gm-static` para que se quede en su sitio y `gm-block` para que también se vea en pantallas estrechas.

## Desplegable (móvil)

`gm-toc--collapsible` sobre un `<details>`: se abre y se cierra sin código.

```html
<details class="gm-toc gm-toc--collapsible gm-block">
  <summary>En esta página</summary>
  <ul class="gm-toc__list">
    <li><a class="gm-toc__link" href="#">Ejemplo</a></li>
    <li><a class="gm-toc__link" href="#">Accesibilidad</a></li>
  </ul>
</details>
```

En el ejemplo lleva `gm-block` para que también se vea en pantallas anchas.

## Con el texto al lado

`gm-toc-layout` pone el texto a la izquierda y el índice a la derecha (12,5 rem). Lleva los dos índices: el de la columna y el desplegable, y cada uno se ve en su tamaño de pantalla.

```html-code
<div class="gm-toc-layout">
  <article>
    <details class="gm-toc gm-toc--collapsible">…</details>
    …el texto…
  </article>
  <aside class="gm-toc" aria-label="En esta página">…</aside>
</div>
```

## Accesibilidad

- El índice de la columna es un `<aside>` con `aria-label`; el desplegable, un `<details>` que el navegador ya hace accesible.
- Los enlaces miden 44 px de alto (WCAG 2.5.5).
- Cada apartado del texto necesita un `id` que coincida con su enlace.
