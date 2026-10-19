# Tooltip

Una burbuja pequeña con información de más sobre un botón o un control. Usa el estilo de la burbuja del lector de My Book Box: fondo oscuro, texto blanco y una sombra suave, en modo claro y oscuro.

## Cómo funciona

Envuelve el elemento y su burbuja en `.gm-tooltip`. La burbuja lleva `role="tooltip"` y un `id`, y el elemento la enlaza con `aria-describedby`, para que los lectores de pantalla la lean.

Aparece al pasar el ratón por el elemento y al llegar a él con el teclado. Si llevas el ratón a la burbuja, no se cierra.

```html
<div class="gm-flex gm-flex-wrap gm-justify-center gm-items-center gm-gap-3 gm-pt-12">
  <span class="gm-tooltip">
    <button type="button" class="gm-icon-btn" aria-label="Buscar" aria-describedby="tip-1"><i class="gmi gmi-search" aria-hidden="true"></i></button>
    <span class="gm-tooltip__bubble" role="tooltip" id="tip-1">Buscar en la biblioteca</span>
  </span>
  <span class="gm-tooltip">
    <button type="button" class="gm-icon-btn" aria-label="Descargar" aria-describedby="tip-2"><i class="gmi gmi-download" aria-hidden="true"></i></button>
    <span class="gm-tooltip__bubble" role="tooltip" id="tip-2">Descargar el libro</span>
  </span>
  <span class="gm-tooltip">
    <button type="button" class="gm-icon-btn" aria-label="Ajustes" aria-describedby="tip-3"><i class="gmi gmi-gear" aria-hidden="true"></i></button>
    <span class="gm-tooltip__bubble" role="tooltip" id="tip-3">Ajustes</span>
  </span>
</div>
```

## Debajo

Por defecto va arriba. Añade `.gm-tooltip--bottom` para ponerlo debajo.

```html
<div class="gm-flex gm-flex-wrap gm-justify-center gm-items-center gm-gap-3 gm-pb-12">
  <span class="gm-tooltip gm-tooltip--bottom">
    <button type="button" class="gm-icon-btn" aria-label="Compartir" aria-describedby="tip-4"><i class="gmi gmi-share" aria-hidden="true"></i></button>
    <span class="gm-tooltip__bubble" role="tooltip" id="tip-4">Compartir con alguien</span>
  </span>
</div>
```

## Junto a un borde

Las burbujas centradas pueden salirse por el borde de la pantalla. Junto al borde izquierdo, añade `.gm-tooltip--start`; junto al derecho, `.gm-tooltip--end`.

```html
<div class="gm-flex gm-flex-wrap gm-justify-between gm-items-center gm-gap-3 gm-pt-12">
  <span class="gm-tooltip gm-tooltip--start">
    <button type="button" class="gm-icon-btn" aria-label="Volver" aria-describedby="tip-6"><i class="gmi gmi-arrow-left" aria-hidden="true"></i></button>
    <span class="gm-tooltip__bubble" role="tooltip" id="tip-6">Volver a la biblioteca</span>
  </span>
  <span class="gm-tooltip gm-tooltip--end">
    <button type="button" class="gm-icon-btn" aria-label="Ajustes" aria-describedby="tip-7"><i class="gmi gmi-gear" aria-hidden="true"></i></button>
    <span class="gm-tooltip__bubble" role="tooltip" id="tip-7">Ajustes del lector</span>
  </span>
</div>
```

## En un botón con texto

Un tooltip añade información; no sustituye al nombre del botón. En un botón con texto, úsalo para explicar algo más.

```html
<div class="gm-flex gm-flex-wrap gm-justify-center gm-items-center gm-gap-3 gm-pt-12">
  <span class="gm-tooltip">
    <button type="button" class="gm-btn gm-btn--secondary gm-btn--sm" aria-describedby="tip-5">Publicar</button>
    <span class="gm-tooltip__bubble" role="tooltip" id="tip-5">Lo verá todo el que tenga el enlace</span>
  </span>
</div>
```

## Cerrarlo con Escape

WCAG 2.2 pide que un tooltip se pueda cerrar sin mover el ratón ni el foco. Como el framework es solo CSS, añade este pequeño script a tu página para que la tecla Escape lo cierre:

```js
// Escape oculta el tooltip abierto hasta que el ratón o el foco salen de él
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  document.querySelectorAll('.gm-tooltip:hover, .gm-tooltip:focus-within')
    .forEach((tip) => tip.classList.add('is-dismissed'));
});
for (const type of ['mouseout', 'focusout']) {
  document.addEventListener(type, (event) => {
    const tip = event.target.closest?.('.gm-tooltip');
    if (tip && !tip.contains(event.relatedTarget)) tip.classList.remove('is-dismissed');
  });
}
```

## Accesibilidad

- Texto blanco sobre #1d1d1f: 16,8:1 (AAA), en modo claro y oscuro.
- Aparece con el ratón y con el teclado, sigue abierto mientras el ratón está encima y se cierra con Escape (con el script).
- No pongas enlaces ni botones dentro: un tooltip es solo texto. Para contenido con el que se interactúa, usa un menú o un diálogo.
- En pantallas táctiles no se puede pasar el ratón, así que no pongas información imprescindible solo en un tooltip.
- Con «reducir movimiento», aparece sin animación.
