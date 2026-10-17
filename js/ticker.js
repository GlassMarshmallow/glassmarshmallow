/*!
 * GlassMarshmallow · Franja de logos (opcional)
 * Hace funcionar el botón de pausa de <div class="gm-ticker"> (.gm-ticker__pause): para y reanuda la franja
 * (WCAG 2.2.2) y cambia su icono. Es un botón conmutador: el nombre no cambia («Pausar la franja») y dice si está
 * pulsado con aria-pressed (cambiar las dos cosas a la vez confunde a los lectores de pantalla). Sin dependencias.
 * Textos en español si <html lang="es">; en inglés si no. Se cambian con initTicker(root, { texts }).
 */

const TEXTS = {
  es: { pause: 'Pausar la franja' },
  en: { pause: 'Pause the strip' },
};

/** Pone en marcha el botón de pausa de una franja. Devuelve una función para quitarlo. */
export function initTicker(root, options = {}) {
  const button = root.querySelector('.gm-ticker__pause');
  if (!button) return () => {};
  const lang = (document.documentElement.lang || 'en').slice(0, 2);
  const t = { ...(TEXTS[lang] ?? TEXTS.en), ...options.texts };

  const render = () => {
    const paused = root.classList.contains('is-paused');
    button.setAttribute('aria-pressed', String(paused));
    button.setAttribute('aria-label', t.pause);
    button.innerHTML = `<i class="gmi ${paused ? 'gmi-play-fill' : 'gmi-pause-fill'}" aria-hidden="true"></i>`;
  };
  const onClick = () => {
    root.classList.toggle('is-paused');
    render();
  };

  button.addEventListener('click', onClick);
  render();
  return () => button.removeEventListener('click', onClick);
}

/** Pone en marcha todas las franjas con botón de pausa que haya dentro de «scope». */
export function initTickers(scope = document, options) {
  return [...scope.querySelectorAll('.gm-ticker')].map((root) => initTicker(root, options));
}
