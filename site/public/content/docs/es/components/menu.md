# Menú

Un botón que abre una lista de opciones, como los menús de idioma, versión y tema de la barra de arriba. Una de las opciones puede quedar marcada como elegida.

## Ejemplo

Ábrelo con el ratón o con el teclado (Intro o Espacio sobre el botón).

```html
<div class="gm-flex gm-items-start gm-justify-end" style="min-height: 14.375rem">
  <div class="gm-menu" data-gm-menu>
    <button type="button" class="gm-menu__trigger" aria-haspopup="menu" aria-expanded="false" aria-label="Tema: Automático">
      <i class="gmi gmi-circle-half" aria-hidden="true"></i>
      <i class="gmi gmi-chevron-expand gm-menu__chevron" aria-hidden="true"></i>
    </button>
    <ul class="gm-menu__list" role="menu" aria-label="Tema" hidden>
      <li role="none"><button type="button" class="gm-menu__item" role="menuitemradio" aria-checked="false" data-value="light"><i class="gmi gmi-sun" aria-hidden="true"></i><span>Claro</span><i class="gmi gmi-check gm-menu__check" aria-hidden="true"></i></button></li>
      <li role="none"><button type="button" class="gm-menu__item" role="menuitemradio" aria-checked="false" data-value="dark"><i class="gmi gmi-moon" aria-hidden="true"></i><span>Oscuro</span><i class="gmi gmi-check gm-menu__check" aria-hidden="true"></i></button></li>
      <li role="none"><button type="button" class="gm-menu__item" role="menuitemradio" aria-checked="true" data-value="auto"><i class="gmi gmi-circle-half" aria-hidden="true"></i><span>Automático</span><i class="gmi gmi-check gm-menu__check" aria-hidden="true"></i></button></li>
    </ul>
  </div>
</div>
```

## Alineado a la izquierda

La lista se abre alineada a la derecha del botón. Junto al borde izquierdo, añade `.gm-menu--start`.

```html
<div style="min-height: 11.875rem">
  <div class="gm-menu gm-menu--start" data-gm-menu>
    <button type="button" class="gm-menu__trigger" aria-haspopup="menu" aria-expanded="false" aria-label="Idioma: Español">
      <i class="gmi gmi-translate" aria-hidden="true"></i> ES
      <i class="gmi gmi-chevron-expand gm-menu__chevron" aria-hidden="true"></i>
    </button>
    <ul class="gm-menu__list" role="menu" aria-label="Idioma" hidden>
      <li role="none"><button type="button" class="gm-menu__item" role="menuitemradio" aria-checked="false" data-value="en"><span>English</span><i class="gmi gmi-check gm-menu__check" aria-hidden="true"></i></button></li>
      <li role="none"><button type="button" class="gm-menu__item" role="menuitemradio" aria-checked="true" data-value="es"><span>Español</span><i class="gmi gmi-check gm-menu__check" aria-hidden="true"></i></button></li>
    </ul>
  </div>
</div>
```

## Centrado, con un botón normal

`.gm-menu--center` centra la lista bajo el botón. El botón puede ser cualquier [botón](/docs/components/button) (`.gm-btn`): conserva su tamaño y, con `gm-theme-solid`, el color de su tema. Como «Para agentes» en la portada de esta web.

```html
<div style="min-height: 12.5rem; text-align: center">
  <div class="gm-menu gm-menu--center" data-gm-menu>
    <button type="button" class="gm-btn gm-theme-pink-blue gm-theme-solid gm-menu__trigger" aria-haspopup="menu" aria-expanded="false">
      <i class="gmi gmi-stars" aria-hidden="true"></i>Para agentes
      <i class="gmi gmi-chevron-expand gm-menu__chevron" aria-hidden="true"></i>
    </button>
    <ul class="gm-menu__list" role="menu" aria-label="Para agentes" hidden>
      <li role="none"><a class="gm-menu__item" role="menuitem" href="#"><span>Documentación para IA</span></a></li>
      <li role="none"><a class="gm-menu__item" role="menuitem" href="#"><span>Todas las skills</span></a></li>
    </ul>
  </div>
</div>
```

## Script

El framework da el aspecto. Para abrir, cerrar y moverse con el teclado, carga el script opcional:

```html
<script type="module">
  import { initMenus } from 'glassmarshmallow/js/menu.js';
  initMenus();
</script>
```

Al elegir una opción, el menú lanza el evento `gm-menu-select` con el `data-value` de la opción:

```js
document.querySelector('.gm-menu').addEventListener('gm-menu-select', (event) => {
  console.log(event.detail.value); // 'dark'
});
```

## Teclado

| Tecla | Qué hace |
| --- | --- |
| Intro / Espacio | Abre el menú (en el botón) o elige la opción |
| ↓ ↑ | Opción siguiente o anterior |
| Inicio / Fin | Primera o última opción |
| Tab | Recorre las opciones sin salir del menú |
| Escape | Cierra el menú y vuelve al botón |

## Accesibilidad

- El botón lleva `aria-haspopup="menu"`, `aria-expanded` y un `aria-label` que dice qué está elegido («Tema: Automático»).
- Las opciones son `menuitemradio` con `aria-checked`; el icono de la marca es solo visual.
- Botón y opciones miden 44 px (WCAG 2.5.5, AAA). Texto de 15:1 o más.
