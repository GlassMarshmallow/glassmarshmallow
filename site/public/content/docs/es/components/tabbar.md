# Barra de pestañas

La barra de abajo del móvil, flotante y de cristal, como en iOS. Sustituye a los enlaces de la [barra de navegación](/docs/components/navbar) por debajo de 860 px.

## Ejemplo

En la web solo aparece en el móvil y flota sobre la página (`position: fixed`); aquí se ve dentro del recuadro.

```html
<nav class="gm-tabbar gm-relative gm-flex gm-max-w-sm" aria-label="Ejemplo de barra del móvil" style="inset: auto">
  <a href="#" aria-current="page"><i class="gmi gmi-house" aria-hidden="true"></i>Inicio</a>
  <a href="#"><i class="gmi gmi-book" aria-hidden="true"></i>Docs</a>
  <a href="#"><i class="gmi gmi-heart" aria-hidden="true"></i>Iconos</a>
  <button type="button" aria-expanded="false" aria-controls="ejemplo-mas"><i class="gmi gmi-grid" aria-hidden="true"></i>Más</button>
</nav>
<nav id="ejemplo-mas" class="gm-tabbar-more" aria-label="Ejemplo de más secciones" hidden></nav>
```

## Panel «Más»

Lo que no cabe en la barra va en un panel que se abre con el botón «Más» (`.gm-tabbar-more`, con `.is-open` para enseñarlo).

```html-code
<nav id="mobile-more" class="gm-tabbar-more is-open" aria-label="Más secciones">
  <a href="/tools"><i class="gmi gmi-palette" aria-hidden="true"></i>Herramientas</a>
  <a href="/blog"><i class="gmi gmi-journal-text" aria-hidden="true"></i>Blog</a>
</nav>
```

## Reglas

- **4 botones como mucho, contando «Más»**: con más, los textos no caben y los botones quedan demasiado pequeños.
- Cada botón lleva icono y texto corto (una palabra).
- La página deja un hueco al final para que la barra no tape el contenido: pon `.gm-has-tabbar` en el `<body>` o en el contenedor de la página.

## Accesibilidad

- Es un `<nav>` con nombre; la página actual lleva `aria-current="page"` y se ve en el color del texto (el resto, en gris).
- «Más» es un botón con `aria-expanded` y `aria-controls`; Escape cierra el panel.
- Lo que recibe el foco no queda tapado por la barra (WCAG 2.4.12).
