# Zona táctil

`gm-hit-area` amplía la zona que se pulsa hasta 44 × 44 px sin cambiar el aspecto: para enlaces o botones con icono que se ven más pequeños. Es lo que ya hacen por dentro los botones del framework.

## Ejemplo

```html
<a class="gm-hit-area gm-inline-flex gm-p-1" href="#" aria-label="GitHub"><i class="gmi gmi-github" aria-hidden="true"></i></a>
```

Se ve del tamaño del icono, pero responde al toque en un cuadrado de 44 px alrededor.

## Cómo funciona

Una capa invisible (`::after`) se sale del elemento lo que haga falta para llegar a 44 px de ancho y de alto, centrada. Si el elemento ya mide más, la capa no lo agranda.

## Accesibilidad

- WCAG 2.5.5 (AAA) pide 44 × 44 px para lo que se pulsa; WCAG 2.5.8 (AA), 24 × 24 px como mínimo.
- Deja hueco entre dos zonas táctiles cercanas: si se tocan, un dedo puede pulsar la equivocada.
