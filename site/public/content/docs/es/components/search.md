# Buscador

Un campo de texto con la lupa dentro y, debajo, los resultados que coinciden con lo que se escribe. Es el buscador de la barra de arriba de esta web.

## Ejemplo

Escribe, por ejemplo, «color» o «botón».

```html
<div style="min-height: 300px">
  <div class="gm-search" role="search" data-gm-search data-results-text="{count} resultados" style="max-width: 320px">
    <div class="gm-search__field">
      <i class="gmi gmi-search" aria-hidden="true"></i>
      <label class="gm-visually-hidden" for="ejemplo-buscar">Buscar en la documentación</label>
      <input id="ejemplo-buscar" class="gm-search__input" type="search" role="combobox" autocomplete="off" aria-autocomplete="list" aria-controls="ejemplo-buscar-lista" aria-expanded="false" placeholder="Buscar…" />
    </div>
    <ul id="ejemplo-buscar-lista" class="gm-search__results" role="listbox" aria-label="Resultados" hidden>
      <li class="gm-search__option" role="option" data-value="button"><span class="gm-search__title">Botón</span><span class="gm-search__section">Componentes</span></li>
      <li class="gm-search__option" role="option" data-value="menu"><span class="gm-search__title">Menú</span><span class="gm-search__section">Componentes</span></li>
      <li class="gm-search__option" role="option" data-value="colors"><span class="gm-search__title">Paleta</span><span class="gm-search__section">Color</span></li>
      <li class="gm-search__option" role="option" data-value="text"><span class="gm-search__title">Color de texto</span><span class="gm-search__section">Color</span></li>
      <li class="gm-search__option" role="option" data-value="field"><span class="gm-search__title">Campo</span><span class="gm-search__section">Formularios</span></li>
      <li class="gm-search__option" role="option" data-value="date-picker"><span class="gm-search__title">Selector de fecha</span><span class="gm-search__section">Formularios</span></li>
      <li class="gm-search__empty" role="presentation" hidden>No hay resultados.</li>
    </ul>
    <p class="gm-visually-hidden" aria-live="polite" data-gm-search-status></p>
  </div>
</div>
```

## Ancho

El buscador ocupa todo el ancho de su contenedor. Para limitarlo, dale un ancho al `.gm-search` (en el ejemplo, `max-width: 320px`). La lista de resultados mide como el campo, con un mínimo de 320 px; en pantallas de 600 px o menos, igual que el campo.

## Script

El framework da el aspecto. Para filtrar mientras se escribe y moverse con el teclado, carga el script opcional:

```html
<script type="module">
  import { initSearches } from 'glassmarshmallow/js/search.js';
  initSearches();
</script>
```

- Cada resultado es un `<li role="option">`. Se busca en su texto y, si lo tiene, en `data-keywords` (sin tener en cuenta mayúsculas ni tildes).
- Con `data-href`, al elegirlo se va a esa dirección. Sin él, solo se lanza el evento.
- Si hay un `.gm-search__empty` dentro de la lista, se ve cuando no hay resultados.
- El elemento con `data-gm-search-status` anuncia cuántos resultados hay; el texto va en `data-results-text`, con `{count}`.

Al elegir un resultado, el buscador lanza el evento `gm-search-select` con su `data-value` y su `data-href`. Si lo cancelas con `preventDefault()`, no cambia de página (útil en aplicaciones con su propio enrutador):

```js
document.querySelector('.gm-search').addEventListener('gm-search-select', (event) => {
  event.preventDefault();
  router.navigate(event.detail.href);
});
```

## Teclado

| Tecla | Qué hace |
| --- | --- |
| ↓ ↑ | Resultado siguiente o anterior |
| Intro | Abre el resultado marcado (o el primero) |
| Escape | Cierra la lista; si ya está cerrada, borra lo escrito |

## Accesibilidad

- Sigue el patrón «combobox» de WAI-ARIA: el campo lleva `role="combobox"`, `aria-expanded`, `aria-controls` y `aria-activedescendant`, y la lista es un `listbox` con sus `option`.
- El campo tiene su `<label>` (oculta a la vista, pero no a los lectores de pantalla) y el `role="search"` marca la zona como buscador.
- El número de resultados se anuncia con `aria-live`.
- Campo y resultados miden 44 px de alto (WCAG 2.5.5, AAA). El resultado marcado lleva fondo y borde, no solo color.
