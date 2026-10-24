# Barra lateral de iconos

La barra de escritorio pegada al borde izquierdo y a todo el alto, como el dock de Ubuntu, con el cristal de la [barra de navegación](/docs/components/navbar). Solo lleva iconos: el nombre de cada sección sale en una burbuja al lado y, con su script, los iconos crecen al pasar el ratón como en el Dock del Mac. Por debajo de 861 px se oculta y se usa la [barra de pestañas](/docs/components/tabbar).

## Ejemplo

En la web va fija a la izquierda (`position: fixed`); aquí se ve dentro del recuadro. Pasa el ratón por encima o llega con el teclado.

```html
<nav class="gm-dock gm-relative gm-flex" aria-label="Ejemplo de barra lateral" data-gm-dock style="height: 26rem; inset: auto">
  <ul class="gm-dock__list">
    <li class="gm-dock__item"><span class="gm-tooltip">
      <a class="gm-dock__link" href="#" aria-label="Inicio" aria-describedby="dock-es-inicio" aria-current="page"><i class="gmi gmi-house" aria-hidden="true"></i></a>
      <span class="gm-tooltip__bubble" role="tooltip" id="dock-es-inicio">Inicio</span>
    </span></li>
    <li class="gm-dock__item"><span class="gm-tooltip">
      <a class="gm-dock__link" href="#" aria-label="Asistente" aria-describedby="dock-es-asistente"><i class="gmi gmi-chat" aria-hidden="true"></i></a>
      <span class="gm-tooltip__bubble" role="tooltip" id="dock-es-asistente">Asistente</span>
    </span></li>
    <li class="gm-dock__item"><span class="gm-tooltip">
      <a class="gm-dock__link" href="#" aria-label="Agenda" aria-describedby="dock-es-agenda"><i class="gmi gmi-calendar" aria-hidden="true"></i></a>
      <span class="gm-tooltip__bubble" role="tooltip" id="dock-es-agenda">Agenda</span>
    </span></li>
    <li class="gm-dock__item"><span class="gm-tooltip">
      <a class="gm-dock__link" href="#" aria-label="Tareas" aria-describedby="dock-es-tareas"><i class="gmi gmi-check-square" aria-hidden="true"></i></a>
      <span class="gm-tooltip__bubble" role="tooltip" id="dock-es-tareas">Tareas</span>
    </span></li>
    <li class="gm-dock__item"><span class="gm-tooltip">
      <a class="gm-dock__link" href="#" aria-label="Dieta" aria-describedby="dock-es-dieta"><i class="gmi gmi-heart" aria-hidden="true"></i></a>
      <span class="gm-tooltip__bubble" role="tooltip" id="dock-es-dieta">Dieta</span>
    </span></li>
  </ul>
  <ul class="gm-dock__list">
    <li class="gm-dock__item"><span class="gm-tooltip">
      <a class="gm-dock__link" href="#" aria-label="Ajustes" aria-describedby="dock-es-settings"><i class="gmi gmi-gear" aria-hidden="true"></i></a>
      <span class="gm-tooltip__bubble" role="tooltip" id="dock-es-settings">Ajustes</span>
    </span></li>
  </ul>
</nav>
```

## Partes

| Clase | Qué es |
| --- | --- |
| `.gm-dock` | La barra: cristal, fija a la izquierda y a todo el alto, desde 861 px |
| `.gm-dock__list` | Un grupo de iconos. Con dos, el primero va arriba y el segundo abajo (por ejemplo, el modo claro u oscuro y los ajustes) |
| `.gm-dock__item` | El hueco de cada icono (crece con el aumento y aparta a los vecinos) |
| `.gm-dock__link` | El icono: un enlace (`<a>`) o un botón (`<button>`). La página actual lleva `aria-current="page"` y se resalta como la opción elegida del [control segmentado](/docs/forms/segmented) |
| `.gm-has-dock` | En el `<body>` o en el contenedor de la página: deja a la izquierda el hueco de la barra |

El nombre de cada icono es un [tooltip](/docs/components/tooltip) (`.gm-tooltip`), que dentro de la barra sale a la derecha.

## Aumento al pasar el ratón

Añade `data-gm-dock` a la barra y carga su script:

```html-code
<script type="module">
  import { initDocks } from 'glassmarshmallow/js/dock.js';
  initDocks();
</script>
```

| Atributo | Qué hace | Por defecto |
| --- | --- | --- |
| `data-dock-max` | Cuánto crece el icono bajo el ratón (`0.6` = un 60 % más) | `0.6` |
| `data-dock-radius` | Hasta dónde llega el efecto a los vecinos, en píxeles | `96` |
| `data-dock-ease` | Lo rápido que sigue al ratón, de 0 a 1 (más alto, más rápido) | `0.22` |

Sin el script, la barra funciona igual, pero sin el aumento.

## Reglas

- Para webs o apps con varias secciones en escritorio. En el móvil, la [barra de pestañas](/docs/components/tabbar), con 4 botones como mucho.
- Cada icono con su nombre en la burbuja: sin texto visible, el nombre es lo único que dice qué es.
- Lo principal, arriba; lo de configuración (tema, ajustes), en una segunda lista abajo.

## Accesibilidad

- Es un `<nav>` con nombre. Cada icono tiene su nombre en `aria-label` y la burbuja va enlazada con `aria-describedby`.
- La burbuja sale también con el teclado (al llegar con Tab) y se puede pasar el ratón por encima sin que se cierre.
- La página actual se anuncia con `aria-current="page"` y se ve por el fondo y la sombra del icono, no solo por el color.
- Cada icono mide 44 × 44 px (WCAG 2.5.5).
- Con «reducir movimiento» activado, los iconos no crecen.
