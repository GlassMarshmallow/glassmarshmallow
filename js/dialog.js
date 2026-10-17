/*!
 * GlassMarshmallow · Ventana (opcional)
 * Hace funcionar las ventanas <dialog class="gm-dialog" id="…">. Sin dependencias.
 *
 * - Un botón con data-gm-dialog-open="id" abre la ventana de ese id con showModal(): el resto de la página
 *   queda inerte (ni el ratón, ni el teclado, ni los lectores de pantalla llegan a ella).
 * - Al abrir, el foco va al título (.gm-dialog__title, con tabindex="-1") o, si no hay, al primer elemento
 *   que se pueda enfocar.
 * - Se cierra con Escape, con cualquier botón con data-gm-dialog-close o pulsando fuera de la ventana.
 * - Al cerrar, el foco vuelve al botón que la abrió.
 */

/** Abre una ventana y devuelve el foco al elemento que la abrió al cerrarla */
export function openDialog(dialog, opener = document.activeElement) {
  if (!dialog || dialog.open) return;
  dialog.showModal();
  const title = dialog.querySelector('.gm-dialog__title');
  if (title) {
    if (!title.hasAttribute('tabindex')) title.setAttribute('tabindex', '-1');
    title.focus();
  }
  dialog.addEventListener('close', () => opener?.focus?.(), { once: true });
}

/** Pone en marcha una ventana: sus botones de cerrar y el clic fuera. Devuelve una función para quitarlo. */
export function initDialog(dialog) {
  if (dialog.gmDialog) return dialog.gmDialog;
  const onClick = (event) => {
    if (event.target.closest('[data-gm-dialog-close]')) dialog.close();
    // Pulsar en el fondo oscuro: el clic llega al propio <dialog>, fuera de su contenido
    else if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
      if (!inside) dialog.close();
    }
  };
  dialog.addEventListener('click', onClick);
  dialog.gmDialog = () => {
    dialog.removeEventListener('click', onClick);
    delete dialog.gmDialog;
  };
  return dialog.gmDialog;
}

/** Pone en marcha todas las ventanas .gm-dialog y los botones data-gm-dialog-open de «scope». */
export function initDialogs(scope = document) {
  const stops = [...scope.querySelectorAll('dialog.gm-dialog')].map(initDialog);
  const onOpen = (event) => {
    const opener = event.target.closest('[data-gm-dialog-open]');
    if (!opener || !scope.contains(opener)) return;
    openDialog(document.getElementById(opener.dataset.gmDialogOpen), opener);
  };
  document.addEventListener('click', onOpen);
  return [...stops, () => document.removeEventListener('click', onOpen)];
}
