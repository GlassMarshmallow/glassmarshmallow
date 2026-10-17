/*!
 * GlassMarshmallow · Barra deslizante (opcional)
 * Pinta la parte recorrida de <input class="gm-range" type="range"> en Chrome y Safari, que no lo hacen
 * solos (Firefox sí): pone en --gm-range-progress el porcentaje del valor. Sin dependencias.
 */

/** Pone el porcentaje del valor actual en --gm-range-progress */
export function updateRange(input) {
  const min = Number(input.min || 0);
  const max = Number(input.max || 100);
  const percent = max > min ? ((Number(input.value) - min) / (max - min)) * 100 : 0;
  input.style.setProperty('--gm-range-progress', `${percent}%`);
}

/** Pone en marcha una barra. Devuelve una función para quitarla. */
export function initRange(input) {
  if (input.gmRange) return input.gmRange;
  const onInput = () => updateRange(input);
  input.addEventListener('input', onInput);
  updateRange(input);
  input.gmRange = () => {
    input.removeEventListener('input', onInput);
    delete input.gmRange;
  };
  return input.gmRange;
}

/** Pone en marcha todas las barras .gm-range que haya dentro de «scope». */
export function initRanges(scope = document) {
  return [...scope.querySelectorAll('input.gm-range')].map(initRange);
}
