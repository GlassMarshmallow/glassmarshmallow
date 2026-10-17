/*!
 * GlassMarshmallow · Menú a pantalla completa (opcional)
 * Hace funcionar <div class="gm-fullscreen-menu" id="…"> y los botones que lo abren (aria-controls="…").
 * Sin dependencias.
 *
 * - Cerrado, el menú es inerte: no se llega a él con el teclado ni lo leen los lectores de pantalla.
 * - Al abrir: aria-expanded="true" en el botón, el resto de la página inerte y el foco en el primer enlace.
 * - Se cierra con Escape, con la ✕ (.gm-fullscreen-menu__close) o al elegir un enlace; el foco vuelve al botón.
 */

/** Pone en marcha un menú. Devuelve una función para quitarlo. */
export function initFullscreenMenu(menu) {
  if (menu.gmMenu) return menu.gmMenu;
  const openers = [...document.querySelectorAll(`[aria-controls="${menu.id}"]`)].filter((el) => !menu.contains(el));
  /** Todo lo que no es el menú: los hermanos del menú y los de cada uno de sus contenedores, hasta el <body> */
  const others = () => {
    const list = [];
    for (let el = menu; el && el !== document.body; el = el.parentElement) {
      list.push(...[...(el.parentElement?.children ?? [])].filter((sibling) => sibling !== el && !sibling.matches('script, style')));
    }
    return list;
  };
  let opener = null;

  const setOpen = (open) => {
    menu.classList.toggle('is-open', open);
    menu.inert = !open;
    openers.forEach((button) => button.setAttribute('aria-expanded', String(open)));
    others().forEach((el) => (el.inert = open));
    if (open) {
      // Cuando el menú ya es visible, el foco al primer enlace
      setTimeout(() => (menu.querySelector('.gm-fullscreen-menu__links a') ?? menu.querySelector('a, button'))?.focus(), 50);
    } else {
      opener?.focus();
    }
  };

  const onOpener = (event) => {
    opener = event.currentTarget;
    setOpen(!menu.classList.contains('is-open'));
  };
  const onMenuClick = (event) => {
    if (event.target.closest('.gm-fullscreen-menu__close') || event.target.closest('a')) setOpen(false);
  };
  const onKeydown = (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) setOpen(false);
  };

  menu.inert = !menu.classList.contains('is-open');
  openers.forEach((button) => {
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', onOpener);
  });
  menu.addEventListener('click', onMenuClick);
  document.addEventListener('keydown', onKeydown);
  menu.gmMenu = () => {
    openers.forEach((button) => button.removeEventListener('click', onOpener));
    menu.removeEventListener('click', onMenuClick);
    document.removeEventListener('keydown', onKeydown);
    delete menu.gmMenu;
  };
  return menu.gmMenu;
}

/** Pone en marcha todos los menús .gm-fullscreen-menu de «scope». */
export function initFullscreenMenus(scope = document) {
  return [...scope.querySelectorAll('.gm-fullscreen-menu[id]')].map(initFullscreenMenu);
}
