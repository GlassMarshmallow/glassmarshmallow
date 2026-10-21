# Segmentado

Opciones juntas en una barra gris; la elegida va en una píldora blanca (negra de noche) con sombra.

## Para elegir un ajuste

Con botones de opción (`radio`) dentro de un `fieldset` con su `legend`. El círculo del radio no se ve: la píldora blanca dice cuál está elegida. Se cambia con el ratón o con las flechas.

```html
<fieldset class="gm-field">
  <legend>Vista previa</legend>
  <div class="gm-segmented">
    <label><input type="radio" name="ejemplo-vista" checked> Modo claro</label>
    <label><input type="radio" name="ejemplo-vista"> Modo oscuro</label>
  </div>
</fieldset>
```

## Para filtrar, con número

Con botones que dicen si están pulsados (`aria-pressed`), dentro de un grupo con nombre. Cada opción puede llevar cuántos elementos hay (`.gm-segmented__count`).

```html
<div class="gm-segmented" role="group" aria-label="Filtrar por tipo">
  <button type="button" aria-pressed="false">Todas</button>
  <button type="button" aria-pressed="true">Libros <span class="gm-segmented__count">3</span></button>
  <button type="button" aria-pressed="false">Manga <span class="gm-segmented__count">20</span></button>
</div>
```

## En columna

Con más de 3 opciones o con textos largos, una debajo de otra: `.gm-segmented--stack`.

```html
<fieldset class="gm-field">
  <legend>Armonía</legend>
  <div class="gm-segmented gm-segmented--stack">
    <label><input type="radio" name="ejemplo-armonia"> Monocromática</label>
    <label><input type="radio" name="ejemplo-armonia" checked> Análoga</label>
    <label><input type="radio" name="ejemplo-armonia"> Complementaria</label>
    <label><input type="radio" name="ejemplo-armonia"> Triádica</label>
    <label><input type="radio" name="ejemplo-armonia"> Complementaria dividida</label>
  </div>
</fieldset>
```

## Pequeño

`.gm-segmented--small`, para barras de herramientas o espacios estrechos.

```html
<div class="gm-segmented gm-segmented--small" role="group" aria-label="Orden">
  <button type="button" aria-pressed="true">Recientes</button>
  <button type="button" aria-pressed="false">A-Z</button>
</div>
```

## Cuándo usarlo

- **2 o 3 opciones cortas**, en fila.
- **Más de 3 o con textos largos**, en columna (`--stack`).
- Para ajustes que se aplican al momento (vista, filtro, orden). Si hay que enviar un formulario, también vale con `radio`.

## Accesibilidad

- Con `radio`: el `fieldset` y su `legend` dicen qué se elige, y se usa como cualquier grupo de opciones (Tab para entrar, flechas para cambiar).
- Con botones: `role="group"` y `aria-label` en la barra, y `aria-pressed` en cada botón.
- El texto gris llega a 7,5:1 de día y 7,1:1 de noche sobre la barra (AAA); la elegida, al texto normal.
- Cada opción mide 34 px, pero la zona que se pulsa llega a 44 px de alto (WCAG 2.5.5).
- La elegida se nota por la píldora y la sombra, no solo por el color.
