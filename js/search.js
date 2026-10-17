/*!
 * GlassMarshmallow · Buscador (opcional)
 * Hace funcionar <div class="gm-search" data-gm-search> con su campo (.gm-search__input) y su lista de
 * resultados (.gm-search__results, con hidden). Sin dependencias.
 *
 * - Al escribir, enseña las opciones cuyo texto (o data-keywords) contiene lo escrito, sin tener en cuenta
 *   mayúsculas ni tildes. Con el campo vacío, la lista se cierra.
 * - Flechas arriba y abajo marcan un resultado (aria-activedescendant); Intro abre el marcado o el primero.
 * - Escape cierra la lista; si ya está cerrada, borra lo escrito. Pulsar fuera la cierra.
 * - Al elegir, lanza el evento «gm-search-select» con { value, href } en detail. Si la opción tiene
 *   data-href y nadie cancela el evento (preventDefault), va a esa dirección.
 * - Si hay un .gm-search__empty dentro de la lista, se ve cuando no hay resultados.
 * - Si hay un elemento con data-gm-search-status, anuncia cuántos resultados hay a los lectores de pantalla
 *   (texto en data-results-text del buscador, con {count}; por defecto «{count} results»).
 */

const normalize = (text) => text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
let uid = 0;

/** Pone en marcha un buscador. Devuelve una función para quitarlo. */
export function initSearch(root) {
  if (root.gmSearch) return root.gmSearch;
  const input = root.querySelector('.gm-search__input');
  const list = root.querySelector('.gm-search__results');
  if (!input || !list) return () => {};
  const options = [...list.querySelectorAll('[role="option"]')];
  const empty = list.querySelector('.gm-search__empty');
  const status = root.querySelector('[data-gm-search-status]');
  const resultsText = root.dataset.resultsText ?? '{count} results';
  options.forEach((option) => (option.id ||= `gm-search-option-${++uid}`));
  let active = -1;

  const visible = () => options.filter((option) => !option.hidden);

  function mark(index) {
    const shown = visible();
    active = index;
    options.forEach((option) => {
      const on = option === shown[index];
      option.classList.toggle('is-active', on);
      option.setAttribute('aria-selected', String(on));
    });
    if (shown[index]) {
      input.setAttribute('aria-activedescendant', shown[index].id);
      shown[index].scrollIntoView({ block: 'nearest' });
    } else input.removeAttribute('aria-activedescendant');
  }

  function setOpen(open) {
    list.hidden = !open;
    input.setAttribute('aria-expanded', String(open));
    if (!open) mark(-1);
  }

  function filter() {
    const query = normalize(input.value.trim());
    options.forEach((option) => {
      const text = normalize(`${option.textContent} ${option.dataset.keywords ?? ''}`);
      option.hidden = !query || !text.includes(query);
    });
    const count = visible().length;
    if (empty) empty.hidden = count > 0;
    if (status) status.textContent = query ? resultsText.replace('{count}', String(count)) : '';
    setOpen(query !== '');
    mark(-1);
  }

  function choose(option) {
    const href = option.dataset.href;
    const event = new CustomEvent('gm-search-select', {
      bubbles: true,
      cancelable: true,
      detail: { value: option.dataset.value ?? option.textContent.trim(), href },
    });
    setOpen(false);
    if (root.dispatchEvent(event) && href) window.location.href = href;
  }

  const onInput = () => filter();
  const onKeydown = (event) => {
    const shown = visible();
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!input.value.trim() || !shown.length) return;
      setOpen(true);
      const step = event.key === 'ArrowDown' ? 1 : -1;
      mark((active + step + shown.length) % shown.length);
    } else if (event.key === 'Enter') {
      const option = shown[Math.max(active, 0)];
      if (option && !list.hidden) {
        event.preventDefault();
        choose(option);
      }
    } else if (event.key === 'Escape') {
      if (!list.hidden) setOpen(false);
      else {
        input.value = '';
        filter();
      }
    }
  };
  const onFocus = () => input.value.trim() && setOpen(true);
  // pointerdown sin quitar el foco del campo; el clic elige la opción
  const onPointerdown = (event) => event.target.closest('[role="option"]') && event.preventDefault();
  const onClick = (event) => {
    const option = event.target.closest('[role="option"]');
    if (option) choose(option);
  };
  const onDocument = (event) => {
    if (!root.contains(event.target)) setOpen(false);
  };

  setOpen(false);
  input.addEventListener('input', onInput);
  input.addEventListener('keydown', onKeydown);
  input.addEventListener('focus', onFocus);
  list.addEventListener('pointerdown', onPointerdown);
  list.addEventListener('click', onClick);
  document.addEventListener('pointerdown', onDocument);
  root.gmSearch = () => {
    input.removeEventListener('input', onInput);
    input.removeEventListener('keydown', onKeydown);
    input.removeEventListener('focus', onFocus);
    list.removeEventListener('pointerdown', onPointerdown);
    list.removeEventListener('click', onClick);
    document.removeEventListener('pointerdown', onDocument);
    delete root.gmSearch;
  };
  return root.gmSearch;
}

/** Pone en marcha todos los buscadores con data-gm-search que haya dentro de «scope». */
export function initSearches(scope = document) {
  return [...scope.querySelectorAll('[data-gm-search]')].map(initSearch);
}
