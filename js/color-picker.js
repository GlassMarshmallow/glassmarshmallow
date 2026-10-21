/*!
 * GlassMarshmallow · Selector de color (opcional)
 * Convierte <div class="gm-color-picker" data-gm-color-picker data-label="…"> con un <input> dentro
 * (normalmente type="hidden", con el color en value) en un botón con la muestra del color que abre una
 * ventana para elegirlo. Sin dependencias.
 *
 * - En la ventana: círculo de color (tono y saturación), barras de tono, saturación, luminosidad y
 *   opacidad, campo para escribir el código y contraste de un texto blanco y uno negro sobre el color.
 * - data-alpha="false" quita la opacidad. data-label da el nombre del color (botón y título de la ventana).
 * - Cada cambio actualiza el value del input y lanza en él los eventos «input» y «change», y en el
 *   selector el evento «gm-color-change» con { value } en detail (#rrggbb, o rgba() con transparencia).
 * - Textos en español si <html lang="es">; en inglés si no. Se pueden cambiar con initColorPicker(root, { texts }).
 * - Teclado: en el círculo, izquierda y derecha cambian el tono y arriba y abajo la saturación (con
 *   Mayús, de 10 en 10). Escape cierra la ventana y el foco vuelve al botón.
 */

/** El texto, listo para ir dentro del HTML: sin que < > & " ' se lean como código */
const esc = (text) => String(text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);


const TEXTS = {
  es: {
    wheel: 'Círculo de color: tono y saturación',
    wheelValue: 'Tono {h} grados, saturación {s} %',
    hue: 'Tono',
    saturation: 'Saturación',
    lightness: 'Luminosidad',
    opacity: 'Opacidad',
    code: 'Código del color',
    codeError: 'Escribe un código de 6 cifras, por ejemplo #3cd2ff.',
    contrast: 'Contraste del texto',
    contrastOnWhite: 'Contraste del texto (sobre fondo blanco)',
    white: 'Blanco',
    black: 'Negro',
    textOn: 'Texto {color}:',
    passes: 'Se lee bien (AA)',
    fails: 'No llega a AA',
    close: 'Cerrar',
    done: 'Listo',
    label: 'Color',
  },
  en: {
    wheel: 'Color wheel: hue and saturation',
    wheelValue: 'Hue {h} degrees, saturation {s} %',
    hue: 'Hue',
    saturation: 'Saturation',
    lightness: 'Lightness',
    opacity: 'Opacity',
    code: 'Color code',
    codeError: 'Type a 6-digit code, for example #3cd2ff.',
    contrast: 'Text contrast',
    contrastOnWhite: 'Text contrast (on a white background)',
    white: 'White',
    black: 'Black',
    textOn: '{color} text:',
    passes: 'Readable (AA)',
    fails: 'Below AA',
    close: 'Close',
    done: 'Done',
    label: 'Color',
  },
};

/* --- Color ---------------------------------------------------------------- */
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

function parseColor(value) {
  const text = String(value).trim().toLowerCase();
  const hex = text.match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/);
  if (hex) {
    let d = hex[1];
    if (d.length === 3) d = [...d].map((c) => c + c).join('');
    const n = (i) => parseInt(d.slice(i, i + 2), 16);
    return { r: n(0), g: n(2), b: n(4), a: d.length === 8 ? Math.round((n(6) / 255) * 100) / 100 : 1 };
  }
  const rgb = text.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/);
  if (rgb) return { r: clamp(+rgb[1], 0, 255), g: clamp(+rgb[2], 0, 255), b: clamp(+rgb[3], 0, 255), a: rgb[4] === undefined ? 1 : clamp(+rgb[4], 0, 1) };
  return null;
}

function rgbToHsl({ r, g, b, a }) {
  const [rn, gn, bn] = [r / 255, g / 255, b / 255];
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === rn) h = (gn - bn) / d + (gn < bn ? 6 : 0);
    else if (max === gn) h = (bn - rn) / d + 2;
    else h = (rn - gn) / d + 4;
    h *= 60;
  }
  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100), a };
}

function hslToRgb({ h, s, l, a }) {
  const sn = s / 100;
  const ln = l / 100;
  const k = (n) => (n + h / 30) % 12;
  const f = (n) => ln - sn * Math.min(ln, 1 - ln) * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return { r: Math.round(f(0) * 255), g: Math.round(f(8) * 255), b: Math.round(f(4) * 255), a };
}

const toHex = ({ r, g, b }) => '#' + [r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('');
const toCss = (c) => (c.a >= 1 ? toHex(c) : `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})`);

function luminance({ r, g, b }) {
  const ch = (c) => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b);
}
function contrast(x, y) {
  const [l1, l2] = [luminance(x), luminance(y)].sort((p, q) => q - p);
  return (l1 + 0.05) / (l2 + 0.05);
}
/** El color translúcido sobre blanco */
const onWhite = (c) => {
  const mix = (top) => Math.round(top * c.a + 255 * (1 - c.a));
  return { r: mix(c.r), g: mix(c.g), b: mix(c.b), a: 1 };
};

/* --- Selector ------------------------------------------------------------- */
let uid = 0;
const format = (text, values) => text.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');

/** Pone en marcha un selector de color. Devuelve una función para quitarlo. */
export function initColorPicker(root, options = {}) {
  if (root.gmColorPicker) return root.gmColorPicker;
  const input = root.querySelector('input');
  if (!input) return () => {};
  const lang = (document.documentElement.lang || 'en').slice(0, 2);
  const t = { ...(TEXTS[lang] ?? TEXTS.en), ...options.texts };
  const label = root.dataset.label ?? t.label;
  const alpha = root.dataset.alpha !== 'false';
  const id = `gm-color-picker-${++uid}`;
  let hsla = rgbToHsl(parseColor(input.value) ?? { r: 255, g: 255, b: 255, a: 1 });
  if (!alpha) hsla.a = 1;

  const slider = (key, name, max, extra = '') => `
    <div class="gm-color-picker__slider">
      <label for="${id}-${key}">${esc(name)}</label>
      <output for="${id}-${key}" data-out="${key}"></output>
      <input id="${id}-${key}" type="range" min="0" max="${max}" data-channel="${key}" ${extra} />
    </div>`;

  root.insertAdjacentHTML(
    'beforeend',
    `<button type="button" class="gm-color-picker__trigger" aria-haspopup="dialog">
      <span class="gm-color-picker__swatch" aria-hidden="true"></span>
      <span class="gm-color-picker__text">
        <span class="gm-color-picker__label"></span>
        <span class="gm-color-picker__value"></span>
      </span>
    </button>
    <dialog class="gm-color-picker__dialog" aria-labelledby="${id}-title">
      <div class="gm-color-picker__head">
        <h2 id="${id}-title"></h2>
        <button type="button" class="gm-icon-btn" data-close aria-label="${esc(t.close)}"><i class="gmi gmi-x-lg" aria-hidden="true"></i></button>
      </div>
      <div class="gm-color-picker__body">
        <div class="gm-color-picker__wheel">
          <span class="gm-color-picker__thumb" role="slider" tabindex="0" aria-label="${esc(t.wheel)}" aria-valuemin="0" aria-valuemax="360"></span>
        </div>
        <div class="gm-color-picker__sliders">
          ${slider('h', t.hue, 359)}
          ${slider('s', t.saturation, 100)}
          ${slider('l', t.lightness, 100)}
          ${alpha ? slider('a', t.opacity, 100, 'class="gm-color-picker__range--alpha"') : ''}
          <div class="gm-field gm-color-picker__hex">
            <label for="${id}-hex">${esc(t.code)}</label>
            <input id="${id}-hex" type="text" spellcheck="false" autocomplete="off" />
            <span id="${id}-hex-error" class="gm-field__error" hidden>${esc(t.codeError)}</span>
          </div>
        </div>
      </div>
      <div class="gm-color-picker__contrast">
        <h3></h3>
        <div class="gm-color-picker__contrast-list">
          ${['white', 'black']
            .map(
              (c) => `<div class="gm-color-picker__contrast-item" data-on="${c}">
                <span class="gm-color-picker__sample" style="color: ${c === 'white' ? '#fff' : '#000'}" aria-hidden="true"></span>
                <span>${esc(format(t.textOn, { color: t[c] }))} <strong></strong>
                  <span class="gm-color-picker__badge"><i class="gmi" aria-hidden="true"></i><span></span></span>
                </span>
              </div>`,
            )
            .join('')}
        </div>
      </div>
      <div class="gm-color-picker__actions"><button type="button" class="gm-btn" data-close>${esc(t.done)}</button></div>
    </dialog>`,
  );

  const $ = (selector) => root.querySelector(selector);
  const trigger = $('.gm-color-picker__trigger');
  const dialog = $('.gm-color-picker__dialog');
  const wheel = $('.gm-color-picker__wheel');
  const thumb = $('.gm-color-picker__thumb');
  const hexInput = $(`#${id}-hex`);
  const hexError = $(`#${id}-hex-error`);
  const ranges = [...root.querySelectorAll('[data-channel]')];
  $('.gm-color-picker__label').textContent = label;
  $(`#${id}-title`).textContent = label;

  function render(skipHex) {
    const rgba = hslToRgb(hsla);
    const css = toCss(rgba);
    const { h, s, l, a } = hsla;
    root.style.setProperty('--gm-swatch', css);
    $('.gm-color-picker__swatch').style.setProperty('--gm-swatch', css);
    $('.gm-color-picker__value').textContent = css;
    // Círculo con la luminosidad actual: en el centro, gris; en el borde, el tono puro
    const hues = Array.from({ length: 13 }, (_, i) => `hsl(${i * 30} 100% ${l}%)`).join(', ');
    wheel.style.background = `radial-gradient(closest-side, hsl(0 0% ${l}%), hsl(0 0% ${l}% / 0)), conic-gradient(${hues})`;
    const angle = (h * Math.PI) / 180;
    const radius = (s / 100) * 50;
    thumb.style.left = `${50 + radius * Math.sin(angle)}%`;
    thumb.style.top = `${50 - radius * Math.cos(angle)}%`;
    thumb.style.background = toHex(rgba);
    thumb.setAttribute('aria-valuenow', String(h));
    thumb.setAttribute('aria-valuetext', format(t.wheelValue, { h, s }));
    const tracks = {
      h: `linear-gradient(90deg, ${Array.from({ length: 7 }, (_, i) => `hsl(${i * 60} ${s}% ${l}%)`).join(', ')})`,
      s: `linear-gradient(90deg, hsl(${h} 0% ${l}%), hsl(${h} 100% ${l}%))`,
      l: `linear-gradient(90deg, #000, hsl(${h} ${s}% 50%), #fff)`,
      a: `linear-gradient(90deg, hsl(${h} ${s}% ${l}% / 0), hsl(${h} ${s}% ${l}%))`,
    };
    const shown = { h: `${h}°`, s: `${s} %`, l: `${l} %`, a: `${Math.round(a * 100)} %` };
    ranges.forEach((range) => {
      const key = range.dataset.channel;
      range.value = String(key === 'a' ? Math.round(a * 100) : hsla[key]);
      range.style.setProperty('--gm-track', tracks[key]);
      root.querySelector(`[data-out="${key}"]`).textContent = shown[key];
    });
    if (!skipHex) {
      hexInput.value = toHex(rgba);
      setHexError(false);
    }
    // Contraste de un texto blanco y uno negro sobre el color (si es translúcido, sobre fondo blanco)
    const surface = onWhite(rgba);
    $('.gm-color-picker__contrast h3').textContent = a < 1 ? t.contrastOnWhite : t.contrast;
    root.querySelectorAll('[data-on]').forEach((item) => {
      const white = item.dataset.on === 'white';
      const ratio = contrast(surface, white ? { r: 255, g: 255, b: 255 } : { r: 0, g: 0, b: 0 });
      const passes = ratio >= 4.5;
      item.querySelector('.gm-color-picker__sample').style.setProperty('--gm-swatch', css);
      item.querySelector('strong').textContent = `${ratio.toFixed(1).replace('.', lang === 'es' ? ',' : '.')}:1`;
      const badge = item.querySelector('.gm-color-picker__badge');
      badge.classList.toggle('gm-color-picker__badge--ok', passes);
      badge.querySelector('i').className = `gmi ${passes ? 'gmi-check-lg' : 'gmi-x-lg'}`;
      badge.querySelector('span').textContent = passes ? t.passes : t.fails;
    });
  }

  function setHexError(on) {
    hexError.hidden = !on;
    if (on) {
      hexInput.setAttribute('aria-invalid', 'true');
      hexInput.setAttribute('aria-describedby', hexError.id);
    } else {
      hexInput.removeAttribute('aria-invalid');
      hexInput.removeAttribute('aria-describedby');
    }
  }

  function commit() {
    const value = toCss(hslToRgb(hsla));
    input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    root.dispatchEvent(new CustomEvent('gm-color-change', { bubbles: true, detail: { value } }));
  }

  function update(changes, skipHex) {
    hsla = { ...hsla, ...changes };
    render(skipHex);
    commit();
  }

  const onTrigger = () => {
    const parsed = parseColor(input.value);
    if (parsed) hsla = rgbToHsl(alpha ? parsed : { ...parsed, a: 1 });
    render();
    dialog.showModal();
  };
  const onClose = (event) => event.target.closest('[data-close]') && dialog.close();
  const onDialogClose = () => trigger.focus();
  const onRange = (event) => {
    const key = event.target.dataset.channel;
    if (!key) return;
    const raw = Number(event.target.value);
    update({ [key]: key === 'a' ? raw / 100 : raw });
  };
  const onWheel = (event) => {
    if (event.type === 'pointermove' && event.buttons !== 1) return;
    if (event.type === 'pointerdown') wheel.setPointerCapture(event.pointerId);
    const rect = wheel.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const h = Math.round(((Math.atan2(dx, -dy) * 180) / Math.PI + 360) % 360);
    const s = Math.round(Math.min(1, Math.hypot(dx, dy) / (rect.width / 2)) * 100);
    update({ h, s });
  };
  const onThumbKey = (event) => {
    const step = event.shiftKey ? 10 : 1;
    const { h, s } = hsla;
    const moves = {
      ArrowRight: { h: (h + step) % 360 },
      ArrowLeft: { h: (h - step + 360) % 360 },
      ArrowUp: { s: Math.min(100, s + step) },
      ArrowDown: { s: Math.max(0, s - step) },
    };
    if (!moves[event.key]) return;
    event.preventDefault();
    update(moves[event.key]);
  };
  const onHex = () => {
    const text = hexInput.value;
    const parsed = /^#?[0-9a-f]{6}$/i.test(text) ? parseColor(text.startsWith('#') ? text : `#${text}`) : null;
    setHexError(!parsed);
    if (parsed) {
      const { h, s, l } = rgbToHsl(parsed);
      update({ h, s, l }, true);
    }
  };

  trigger.addEventListener('click', onTrigger);
  dialog.addEventListener('click', onClose);
  dialog.addEventListener('close', onDialogClose);
  dialog.addEventListener('input', onRange);
  wheel.addEventListener('pointerdown', onWheel);
  wheel.addEventListener('pointermove', onWheel);
  thumb.addEventListener('keydown', onThumbKey);
  hexInput.addEventListener('input', onHex);
  render();

  root.gmColorPicker = () => {
    trigger.remove();
    dialog.remove();
    delete root.gmColorPicker;
  };
  return root.gmColorPicker;
}

/** Pone en marcha todos los selectores con data-gm-color-picker que haya dentro de «scope». */
export function initColorPickers(scope = document, options) {
  return [...scope.querySelectorAll('[data-gm-color-picker]')].map((root) => initColorPicker(root, options));
}
