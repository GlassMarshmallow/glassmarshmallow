/*!
 * GlassMarshmallow · Menú desplegable (opcional)
 * Hace funcionar <div class="gm-menu" data-gm-menu> con su botón (.gm-menu__trigger) y su lista
 * (.gm-menu__list, con hidden). Sin dependencias.
 *
 * - El botón abre y cierra la lista y actualiza aria-expanded.
 * - Al abrir, el foco va a la opción elegida (aria-checked="true") o a la primera.
 * - Flechas arriba y abajo, Inicio y Fin para moverse; Tab y Mayús + Tab dan la vuelta sin salir del menú.
 * - Escape, elegir una opción o pulsar fuera lo cierran (y el foco vuelve al botón, salvo al pulsar fuera).
 * - En las opciones de tipo menuitemradio, la elegida pasa a aria-checked="true".
 * - Al elegir, el menú lanza el evento «gm-menu-select» con { value } en detail (el data-value de la opción).
 */

/** Pone en marcha un menú. Devuelve una función para quitarlo. */
export function initMenu(root) {
  if (root.gmMenu) return root.gmMenu;
  const trigger = root.querySelector('.gm-menu__trigger');
  const list = root.querySelector('.gm-menu__list');
  if (!trigger || !list) return () => {};
  const items = () => [...list.querySelectorAll('[role^="menuitem"]:not([disabled])')];
  const isOpen = () => !list.hidden;

  function open() {
    list.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    (items().find((item) => item.getAttribute('aria-checked') === 'true') ?? items()[0])?.focus();
  }

  function close(returnFocus) {
    if (!isOpen()) return;
    list.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    if (returnFocus) trigger.focus();
  }

  function choose(item) {
    if (item.getAttribute('role') === 'menuitemradio') {
      items().forEach((other) => other.getAttribute('role') === 'menuitemradio' && other.setAttribute('aria-checked', String(other === item)));
    }
    close(true);
    root.dispatchEvent(new CustomEvent('gm-menu-select', { bubbles: true, detail: { value: item.dataset.value ?? item.textContent.trim() } }));
  }

  const onTrigger = () => (isOpen() ? close(true) : open());
  const onList = (event) => {
    const item = event.target.closest('[role^="menuitem"]');
    if (item && !item.disabled) choose(item);
  };
  const onKeydown = (event) => {
    if (event.key === 'Escape' && isOpen()) {
      event.preventDefault();
      close(true);
      return;
    }
    if (!list.contains(event.target)) return;
    const all = items();
    const index = all.indexOf(document.activeElement);
    const move = (to) => {
      event.preventDefault();
      all[(to + all.length) % all.length]?.focus();
    };
    if (event.key === 'ArrowDown') move(index + 1);
    else if (event.key === 'ArrowUp') move(index - 1);
    else if (event.key === 'Home') move(0);
    else if (event.key === 'End') move(all.length - 1);
    else if (event.key === 'Tab') move(event.shiftKey ? index - 1 : index + 1);
  };
  const onDocument = (event) => {
    if (!root.contains(event.target)) close(false);
  };

  list.hidden = true;
  trigger.setAttribute('aria-expanded', 'false');
  trigger.addEventListener('click', onTrigger);
  list.addEventListener('click', onList);
  root.addEventListener('keydown', onKeydown);
  document.addEventListener('click', onDocument);
  root.gmMenu = () => {
    trigger.removeEventListener('click', onTrigger);
    list.removeEventListener('click', onList);
    root.removeEventListener('keydown', onKeydown);
    document.removeEventListener('click', onDocument);
    delete root.gmMenu;
  };
  return root.gmMenu;
}

/** Pone en marcha todos los menús con data-gm-menu que haya dentro de «scope». */
export function initMenus(scope = document) {
  return [...scope.querySelectorAll('[data-gm-menu]')].map(initMenu);
}
