/*!
 * GlassMarshmallow · Barra lateral de iconos (opcional)
 * Hace que los iconos de <nav class="gm-dock" data-gm-dock> crezcan al pasar el ratón, como en el Dock del Mac:
 * mucho el que está bajo el ratón y un poco los de al lado. Sin dependencias.
 *
 * Atributos (todos opcionales, en el <nav>):
 *   data-dock-max="0.6"     cuánto crece el icono bajo el ratón (0.6 = un 60 % más)
 *   data-dock-radius="96"   hasta dónde llega el efecto a los vecinos, en píxeles
 *   data-dock-ease="0.22"   lo rápido que sigue al ratón (de 0 a 1; más alto, más rápido)
 *
 * Con «reducir movimiento» activado en el sistema, los iconos no crecen.
 */

let mediaReduce = null;
const reduceMotion = () => {
  mediaReduce ??= window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaReduce.matches;
};

/** Pone en marcha una barra. Devuelve una función para quitarla. */
export function initDock(root) {
  if (root.gmDock) return root.gmDock;
  const items = [...root.querySelectorAll('.gm-dock__item')];
  const max = Number(root.dataset.dockMax) || 0.6;
  const radius = Number(root.dataset.dockRadius) || 96;
  const ease = Math.min(1, Number(root.dataset.dockEase) || 0.22);
  let rest = [];
  let current = items.map(() => 1);
  let pointerY = null;
  let frame = 0;

  const apply = () => items.forEach((li, i) => li.style.setProperty('--gm-dock-scale', current[i].toFixed(4)));

  // Las distancias se miden con las posiciones en reposo: si se midieran con los iconos ya grandes, al moverse
  // cambiaría el cálculo y temblarían
  const measure = () => {
    items.forEach((li) => li.style.setProperty('--gm-dock-scale', '1'));
    rest = items.map((li) => {
      const r = li.getBoundingClientRect();
      return r.top + r.height / 2;
    });
    apply();
  };

  // Cada fotograma se acerca un poco al tamaño final (curva de campana alrededor del ratón)
  const tick = () => {
    let moving = false;
    items.forEach((li, i) => {
      let target = 1;
      if (pointerY !== null) {
        const d = (pointerY - rest[i]) / radius;
        target = 1 + max * Math.exp(-d * d * 1.4);
      }
      const next = current[i] + (target - current[i]) * ease;
      const done = Math.abs(target - next) <= 0.001;
      current[i] = done ? target : next;
      if (!done) moving = true;
    });
    apply();
    frame = moving ? requestAnimationFrame(tick) : 0;
  };
  const start = () => { if (!frame) frame = requestAnimationFrame(tick); };

  const onEnter = () => { if (current.every((v) => v === 1)) measure(); };
  const onMove = (event) => {
    if (reduceMotion()) return;
    pointerY = event.clientY;
    start();
  };
  const onLeave = () => { pointerY = null; start(); };
  const onResize = () => {
    pointerY = null;
    current = items.map(() => 1);
    measure();
  };

  root.addEventListener('pointerenter', onEnter);
  root.addEventListener('pointermove', onMove);
  root.addEventListener('pointerleave', onLeave);
  window.addEventListener('resize', onResize);
  measure();

  const destroy = () => {
    cancelAnimationFrame(frame);
    root.removeEventListener('pointerenter', onEnter);
    root.removeEventListener('pointermove', onMove);
    root.removeEventListener('pointerleave', onLeave);
    window.removeEventListener('resize', onResize);
    items.forEach((li) => li.style.removeProperty('--gm-dock-scale'));
    delete root.gmDock;
  };
  root.gmDock = destroy;
  return destroy;
}

/** Pone en marcha todas las barras con data-gm-dock dentro de scope. */
export function initDocks(scope = document) {
  return [...scope.querySelectorAll('[data-gm-dock]')].map(initDock);
}
