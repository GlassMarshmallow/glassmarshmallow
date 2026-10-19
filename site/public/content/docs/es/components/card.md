# Tarjeta

Un recuadro de cristal para agrupar contenido: fondo translúcido con desenfoque, borde fino, esquinas redondeadas y una sombra suave. Es el panel de My Book Box.

## Ejemplo

```html
<div class="gm-card gm-max-w-sm">
  <h3 class="gm-mt-0 gm-mx-0 gm-mb-2">Plan básico</h3>
  <p class="gm-muted">Para empezar: una web de una página con formulario de contacto.</p>
  <button type="button" class="gm-btn gm-btn--sm">Ver detalles</button>
</div>
```

## En una cuadrícula

Con la [cuadrícula](/docs/layout/grid) (`.gm-grid--auto`), tantas tarjetas por fila como quepan.

```html
<div class="gm-grid gm-grid--auto gm-gap-sm" style="--gm-grid-min: 12.5rem">
  <div class="gm-card"><i class="gmi gmi-stars" aria-hidden="true" style="font-size: 1.5rem"></i><h3 class="gm-mt-2 gm-mx-0 gm-mb-1">Rápido</h3><p class="gm-muted">Listo en minutos.</p></div>
  <div class="gm-card"><i class="gmi gmi-circle-half" aria-hidden="true" style="font-size: 1.5rem"></i><h3 class="gm-mt-2 gm-mx-0 gm-mb-1">Claro y oscuro</h3><p class="gm-muted">Los dos modos, de serie.</p></div>
  <div class="gm-card"><i class="gmi gmi-heart" aria-hidden="true" style="font-size: 1.5rem"></i><h3 class="gm-mt-2 gm-mx-0 gm-mb-1">Accesible</h3><p class="gm-muted">WCAG 2.2 AA y AAA.</p></div>
</div>
```

## Toda la tarjeta como enlace

Si toda la tarjeta lleva a otra página, que la tarjeta sea el `<a>`. Así no hay varios enlaces repetidos.

```html
<a class="gm-card gm-block gm-max-w-sm" href="#" style="color: inherit">
  <strong>Generador de paletas</strong>
  <p class="gm-muted gm-mt-1 gm-mx-0 gm-mb-0">Crea una paleta accesible a partir de un color.</p>
</a>
```

## Accesibilidad

- El borde y la sombra separan la tarjeta del fondo; el contenido importante no depende de ellos.
- Si la tarjeta es un enlace, su texto debe decir adónde lleva (WCAG 2.4.4).
- El último elemento de la tarjeta no deja margen abajo, para que el relleno sea igual arriba y abajo.
