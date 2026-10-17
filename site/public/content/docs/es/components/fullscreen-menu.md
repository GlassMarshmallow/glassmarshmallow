# Menú a pantalla completa

El menú del móvil de la plantilla de portfolio: un botón redondo de cristal con la hamburguesa abre los enlaces en grande, ocupando toda la pantalla sobre un fondo casi opaco. Es otra forma de navegar en el móvil, para webs con pocas secciones; la otra es la [barra de pestañas](/docs/components/tabbar).

## Ejemplo

```html
<button type="button" class="gm-icon-btn gm-icon-btn--glass" aria-controls="ejemplo-menu-movil" aria-label="Abrir menú"><i class="gmi gmi-list" aria-hidden="true"></i></button>
<div class="gm-fullscreen-menu" id="ejemplo-menu-movil" role="dialog" aria-modal="true" aria-label="Menú">
  <button type="button" class="gm-icon-btn gm-icon-btn--glass gm-fullscreen-menu__close" aria-label="Cerrar menú"><i class="gmi gmi-x-lg" aria-hidden="true"></i></button>
  <nav aria-label="Menú móvil">
    <ul class="gm-fullscreen-menu__links">
      <li><a href="#" aria-current="page">Inicio</a></li>
      <li><a href="#">Sobre mí</a></li>
      <li><a href="#">Habilidades</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
</div>
```

## Botón redondo de cristal

`.gm-icon-btn--glass` es el círculo de cristal de 44 px de la plantilla, pensado para ir sobre un dibujo o una imagen: el botón de menú, el de cerrar y el de cambiar entre modo claro y oscuro.

## Script

```html
<script type="module">
  import { initFullscreenMenus } from 'glassmarshmallow/js/fullscreen-menu.js';
  initFullscreenMenus();
</script>
```

El botón que lo abre se une al menú con `aria-controls="id-del-menú"`.

## Accesibilidad

- Cerrado, el menú es inerte: no se llega a él con el teclado ni lo leen los lectores de pantalla.
- Abierto, el resto de la página queda inerte, el foco va al primer enlace y el botón dice `aria-expanded="true"`.
- Se cierra con Escape, con la ✕ o al elegir un enlace, y el foco vuelve al botón de menú.
- Enlaces grandes (2 rem) y de 44 px de alto como mínimo; la página actual, con `aria-current="page"`.
