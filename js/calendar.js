/*!
 * GlassMarshmallow · Calendario (opcional)
 * Convierte <div class="gm-calendar" data-gm-calendar></div> en un calendario que funciona: cambiar de mes,
 * elegir un día y moverse con el teclado. Sin dependencias.
 *
 * Atributos (todos opcionales):
 *   data-selected="2026-10-22"  día elegido
 *   data-month="2026-10"        mes que se ve al empezar (por defecto, el del día elegido o el actual)
 *   data-today="2026-10-17"     «hoy» (por defecto, la fecha del dispositivo)
 *   data-locale="es"            idioma de los nombres (por defecto, el lang de la página)
 *   data-min / data-max         primer y último día que se pueden elegir
 *   data-marked="2026-10-26 2026-10-30"  días con algo (bolita); se puede cambiar cuando se quiera
 *   data-marked-label="con algo apuntado"  lo que oyen los lectores de pantalla en esos días
 * Al elegir un día, el calendario lanza el evento «gm-date-change» con { date: 'AAAA-MM-DD' } en detail.
 * Al empezar y al cambiar de mes, lanza «gm-month-change» con { month: 'AAAA-MM', from, to } (from y to: el primer y
 * el último día que se ven, también los de los meses de al lado), para pedir los días con algo de ese mes.
 *
 * Teclado: flechas (día y semana), Inicio/Fin (principio y final de la semana), Re Pág/Av Pág (mes) e
 * Intro/Espacio (elegir).
 */

/** El texto, listo para ir dentro del HTML: sin que < > & " ' se lean como código */
const esc = (text) => String(text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);


const pad = (n) => String(n).padStart(2, '0');
const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parse = (s) => {
  const m = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(s || '');
  return m ? new Date(+m[1], +m[2] - 1, m[3] ? +m[3] : 1) : null;
};
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const addMonths = (d, n) => {
  const t = new Date(d.getFullYear(), d.getMonth() + n, 1);
  const last = new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
  return new Date(t.getFullYear(), t.getMonth(), Math.min(d.getDate(), last));
};
let counter = 0;

/** Pone en marcha un calendario. Devuelve una función para quitarlo. */
export function initCalendar(root) {
  if (root.gmCalendar) return root.gmCalendar;
  const locale = root.dataset.locale || document.documentElement.lang || 'en';
  const today = parse(root.dataset.today) || new Date();
  let selected = parse(root.dataset.selected);
  let focus = selected || parse(root.dataset.month) || today;
  const min = parse(root.dataset.min);
  const max = parse(root.dataset.max);
  const id = `gm-cal-${++counter}`;
  const es = locale.startsWith('es');
  const monthName = new Intl.DateTimeFormat(locale, { month: 'long' });
  const dayName = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' });
  const weekday = (style) => new Intl.DateTimeFormat(locale, { weekday: style });
  // Semana de lunes a domingo (como en España y en la mayoría de Europa)
  const monday = new Date(2024, 0, 1);
  const days = Array.from({ length: 7 }, (_, i) => addDays(monday, i));
  const out = (d) => (min && d < min) || (max && d > max);
  const marked = () => new Set((root.dataset.marked || '').split(/[\s,]+/).filter(Boolean));
  const markedLabel = () => root.dataset.markedLabel || (es ? 'con algo apuntado' : 'with something planned');
  let shownMonth = '';

  root.setAttribute('role', 'group');
  root.setAttribute('aria-labelledby', `${id}-title`);

  function render(keepFocus) {
    const first = new Date(focus.getFullYear(), focus.getMonth(), 1);
    const start = addDays(first, -((first.getDay() + 6) % 7));
    const weeks = [];
    for (let w = 0, d = start; w < 6; w++) {
      const row = [];
      for (let i = 0; i < 7; i++, d = addDays(d, 1)) row.push(d);
      weeks.push(row);
      if (d.getMonth() !== focus.getMonth() && w >= 3) break;
    }
    const title = monthName.format(first);
    const withSomething = marked();
    root.innerHTML = `
      <div class="gm-calendar__header">
        <h3 class="gm-calendar__title" id="${id}-title" aria-live="polite">${esc(title.charAt(0).toUpperCase() + title.slice(1))} <span>${first.getFullYear()}</span></h3>
        <div class="gm-calendar__nav">
          <button type="button" class="gm-icon-btn" data-step="-1" aria-label="${esc(es ? 'Mes anterior' : 'Previous month')}"><i class="gmi gmi-chevron-left" aria-hidden="true"></i></button>
          <button type="button" class="gm-icon-btn" data-step="1" aria-label="${esc(es ? 'Mes siguiente' : 'Next month')}"><i class="gmi gmi-chevron-right" aria-hidden="true"></i></button>
        </div>
      </div>
      <table class="gm-calendar__grid" role="grid" aria-labelledby="${id}-title">
        <thead><tr>${days
          .map((d) => `<th scope="col"><abbr title="${esc(weekday('long').format(d))}">${esc(weekday('narrow').format(d))}</abbr></th>`)
          .join('')}</tr></thead>
        <tbody>${weeks
          .map(
            (row) =>
              `<tr>${row
                .map((d) => {
                  const isMarked = withSomething.has(iso(d));
                  const attrs = [
                    `data-date="${iso(d)}"`,
                    `aria-label="${esc(isMarked ? `${dayName.format(d)}, ${markedLabel()}` : dayName.format(d))}"`,
                    `tabindex="${iso(d) === iso(focus) ? 0 : -1}"`,
                  ];
                  if (iso(d) === iso(today)) attrs.push('aria-current="date"');
                  if (selected && iso(d) === iso(selected)) attrs.push('aria-pressed="true"');
                  else attrs.push('aria-pressed="false"');
                  if (out(d)) attrs.push('disabled');
                  const cls = `gm-calendar__day${d.getMonth() !== focus.getMonth() ? ' is-outside' : ''}${isMarked ? ' is-marked' : ''}`;
                  return `<td><button type="button" class="${cls}" ${attrs.join(' ')}>${d.getDate()}</button></td>`;
                })
                .join('')}</tr>`,
          )
          .join('')}</tbody>
      </table>`;
    if (keepFocus) root.querySelector(`[data-date="${iso(focus)}"]`)?.focus();
    const month = iso(first).slice(0, 7);
    if (month !== shownMonth) {
      shownMonth = month;
      const last = weeks[weeks.length - 1][6];
      root.dispatchEvent(new CustomEvent('gm-month-change', { bubbles: true, detail: { month, from: iso(start), to: iso(last) } }));
    }
  }

  function choose(d) {
    if (out(d)) return;
    selected = d;
    focus = d;
    root.dataset.selected = iso(d);
    render(true);
    root.dispatchEvent(new CustomEvent('gm-date-change', { bubbles: true, detail: { date: iso(d) } }));
  }

  function onClick(event) {
    const step = event.target.closest('[data-step]');
    if (step) {
      focus = addMonths(focus, +step.dataset.step);
      render(false);
      return;
    }
    const day = event.target.closest('[data-date]');
    if (day && !day.disabled) choose(parse(day.dataset.date));
  }

  function onKeydown(event) {
    const day = event.target.closest('[data-date]');
    if (!day) return;
    const d = parse(day.dataset.date);
    const moves = {
      ArrowLeft: () => addDays(d, -1),
      ArrowRight: () => addDays(d, 1),
      ArrowUp: () => addDays(d, -7),
      ArrowDown: () => addDays(d, 7),
      Home: () => addDays(d, -((d.getDay() + 6) % 7)),
      End: () => addDays(d, 6 - ((d.getDay() + 6) % 7)),
      PageUp: () => addMonths(d, -1),
      PageDown: () => addMonths(d, 1),
    };
    if (moves[event.key]) {
      event.preventDefault();
      focus = moves[event.key]();
      render(true);
    }
  }

  root.addEventListener('click', onClick);
  root.addEventListener('keydown', onKeydown);
  // Los días con algo pueden llegar después (por ejemplo, de una API): al cambiar data-marked se vuelve a pintar
  const observer = new MutationObserver(() => {
    // El foco se queda en el día en el que estaba
    const day = document.activeElement?.closest?.('[data-date]');
    if (day && root.contains(day)) focus = parse(day.dataset.date);
    render(root.contains(document.activeElement));
  });
  observer.observe(root, { attributes: true, attributeFilter: ['data-marked', 'data-marked-label'] });
  render(false);
  root.gmCalendar = () => {
    observer.disconnect();
    root.removeEventListener('click', onClick);
    root.removeEventListener('keydown', onKeydown);
    delete root.gmCalendar;
  };
  return root.gmCalendar;
}

/** Pone en marcha todos los calendarios con data-gm-calendar que haya dentro de «scope». */
export function initCalendars(scope = document) {
  return [...scope.querySelectorAll('[data-gm-calendar]')].map(initCalendar);
}
