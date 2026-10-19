# Contenedores

El contenedor centra el contenido de la página y le deja un margen a los lados. Es lo primero que va dentro de cada sección.

## Contenedor

`.gm-container` mide como mucho 1240 px y deja 24 px a cada lado (16 px en el móvil).

```html
<div class="gm-container gm-py-4" style="outline: 2px dashed var(--gm-field-border)">
  Contenido centrado, con margen a los lados.
</div>
```

## Estrecho

`.gm-container--narrow`, de 960 px como máximo: para textos largos, formularios o artículos, que se leen mejor sin líneas muy largas.

```html
<div class="gm-container gm-container--narrow gm-py-4" style="outline: 2px dashed var(--gm-field-border)">
  Para leer cómodo.
</div>
```

## A todo el ancho

`.gm-container--fluid` llega hasta los bordes de la pantalla, pero mantiene el margen de los lados.

```html
<div class="gm-container--fluid gm-py-4" style="outline: 2px dashed var(--gm-field-border)">
  De borde a borde.
</div>
```

## Página interior

`gm-page` deja el hueco de arriba de las páginas que no son la portada (4,5 rem) y `gm-lead` es la entradilla de debajo del título: algo más grande y en una columna cómoda de leer (42,5 rem).

```html
<section class="gm-container gm-page gm-pt-0">
  <h1>Iconos</h1>
  <p class="gm-lead gm-muted gm-mb-0">Más de 300 iconos gratis, de línea y de relleno, con los mismos nombres que Bootstrap Icons.</p>
</section>
```

En el ejemplo, `gm-pt-0` quita el hueco de arriba para que quepa en el recuadro.

## Cambiar el ancho

El ancho máximo es la variable `--gm-container`. Cámbiala para toda la web o solo dentro de una sección:

```html-code
<style>
  :root { --gm-container: 1100px; }
</style>
```

| Clase | Ancho máximo | Margen a los lados |
| --- | --- | --- |
| `.gm-container` | 1240 px (`--gm-container`) | 24 px; 16 px hasta 600 px |
| `.gm-container--narrow` | 960 px | igual |
| `.gm-container--fluid` | todo | igual |
