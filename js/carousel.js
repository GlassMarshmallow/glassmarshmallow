/*!
 * GlassMarshmallow · Carrusel (opcional)
 * Hace funcionar <div class="gm-carousel" data-gm-carousel> con su .gm-carousel__track y sus
 * .gm-carousel__slide. Sin dependencias.
 *
 * - Añade las flechas (anterior y siguiente) y un punto por diapositiva debajo.
 * - Deslizar con el dedo o el ratón también funciona: el punto activo sigue a la diapositiva que se ve.
 * - Con data-interval="5000" pasa solo cada 5 s, con un botón de pausa (WCAG 2.2.2). Se para al pasar el
 *   ratón o con el foco dentro, y no pasa solo si la persona pide menos movimiento.
 * - Teclado: Tab llega a las flechas y a los puntos; con el foco en el carrusel, ← → pasan de diapositiva.
 * - Lanza «gm-carousel-change» con { index } en detail.
 * - Textos en español si <html lang="es">; en inglés si no. Se cambian con initCarousel(root, { texts }).
 */

const TEXTS = {
  es: {
    carousel: 'carrusel',
    slide: 'diapositiva',
    of: 'de',
    previous: 'Diapositiva anterior',
    next: 'Diapositiva siguiente',
    goTo: 'Ir a la diapositiva {n}',
    pause: 'Pausar el paso automático',
    play: 'Reanudar el paso automático',
  },
  en: {
    carousel: 'carousel',
    slide: 'slide',
    of: 'of',
    previous: 'Previous slide',
    next: 'Next slide',
    goTo: 'Go to slide {n}',
    pause: 'Pause automatic slides',
    play: 'Resume automatic slides',
  },
};

/** Pone en marcha un carrusel. Devuelve una función para quitarlo. */
export function initCarousel(root, options = {}) {
  if (root.gmCarousel) return root.gmCarousel;
  const track = root.querySelector('.gm-carousel__track');
  const slides = track ? [...track.querySelectorAll('.gm-carousel__slide')] : [];
  if (!slides.length) return () => {};
  const lang = (document.documentElement.lang || 'en').slice(0, 2);
  const t = { ...(TEXTS[lang] ?? TEXTS.en), ...options.texts };
  const interval = Number(root.dataset.interval) || 0;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let index = 0;
  let timer;
  let paused = reduced;
  let hovering = false;

  root.setAttribute('role', 'region');
  root.setAttribute('aria-roledescription', t.carousel);
  slides.forEach((slide, i) => {
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', t.slide);
    slide.setAttribute('aria-label', `${i + 1} ${t.of} ${slides.length}`);
  });

  // Las flechas van sobre la imagen: se envuelve la pista en un visor
  const viewport = document.createElement('div');
  viewport.className = 'gm-carousel__viewport';
  track.before(viewport);
  viewport.append(track);
  viewport.insertAdjacentHTML(
    'beforeend',
    `<button type="button" class="gm-carousel__prev" aria-label="${t.previous}"><i class="gmi gmi-chevron-left" aria-hidden="true"></i></button>
     <button type="button" class="gm-carousel__next" aria-label="${t.next}"><i class="gmi gmi-chevron-right" aria-hidden="true"></i></button>`,
  );
  root.insertAdjacentHTML(
    'beforeend',
    `<div class="gm-carousel__nav">
      ${slides.map((_, i) => `<button type="button" class="gm-carousel__dot" data-index="${i}" aria-label="${t.goTo.replace('{n}', i + 1)}"></button>`).join('')}
      ${interval ? `<button type="button" class="gm-icon-btn gm-carousel__pause"><i class="gmi" aria-hidden="true"></i></button>` : ''}
    </div>`,
  );
  const prev = viewport.querySelector('.gm-carousel__prev');
  const next = viewport.querySelector('.gm-carousel__next');
  const dots = [...root.querySelectorAll('.gm-carousel__dot')];
  const pauseButton = root.querySelector('.gm-carousel__pause');
  // Mientras pasa solo, los lectores de pantalla no anuncian cada cambio (aria-live off)
  track.setAttribute('aria-live', interval && !paused ? 'off' : 'polite');

  function render() {
    dots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === index)));
    prev.disabled = index === 0;
    next.disabled = index === slides.length - 1;
    slides.forEach((slide, i) => slide.toggleAttribute('inert', i !== index));
    if (pauseButton) {
      pauseButton.setAttribute('aria-label', paused ? t.play : t.pause);
      pauseButton.querySelector('i').className = `gmi ${paused ? 'gmi-play-fill' : 'gmi-pause-fill'}`;
    }
  }

  function go(to, wrap = false) {
    const target = wrap ? (to + slides.length) % slides.length : Math.max(0, Math.min(slides.length - 1, to));
    track.scrollTo({ left: slides[target].offsetLeft - track.offsetLeft, behavior: reduced ? 'auto' : 'smooth' });
    setIndex(target);
  }

  function setIndex(to) {
    if (to === index) return render();
    index = to;
    render();
    root.dispatchEvent(new CustomEvent('gm-carousel-change', { bubbles: true, detail: { index } }));
  }

  function schedule() {
    clearInterval(timer);
    if (interval && !paused && !hovering) timer = setInterval(() => go(index + 1, true), interval);
  }

  // El punto activo sigue a la diapositiva que más se ve (también al deslizar con el dedo)
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting && e.intersectionRatio >= 0.6);
      if (visible.length) setIndex(slides.indexOf(visible[0].target));
    },
    { root: track, threshold: [0.6] },
  );
  slides.forEach((slide) => observer.observe(slide));

  const onPrev = () => go(index - 1);
  const onNext = () => go(index + 1);
  const onDot = (event) => {
    const dot = event.target.closest('.gm-carousel__dot');
    if (dot) go(Number(dot.dataset.index));
  };
  const onPause = () => {
    paused = !paused;
    track.setAttribute('aria-live', paused ? 'polite' : 'off');
    render();
    schedule();
  };
  const onKeydown = (event) => {
    if (event.key === 'ArrowLeft') go(index - 1);
    else if (event.key === 'ArrowRight') go(index + 1);
    else return;
    event.preventDefault();
  };
  const stop = () => {
    hovering = true;
    clearInterval(timer);
  };
  const resume = (event) => {
    if (event.type === 'focusout' && root.contains(event.relatedTarget)) return;
    hovering = root.matches(':hover') || root.contains(document.activeElement);
    schedule();
  };

  prev.addEventListener('click', onPrev);
  next.addEventListener('click', onNext);
  root.querySelector('.gm-carousel__nav').addEventListener('click', onDot);
  pauseButton?.addEventListener('click', onPause);
  root.addEventListener('keydown', onKeydown);
  root.addEventListener('pointerenter', stop);
  root.addEventListener('pointerleave', resume);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', resume);
  render();
  schedule();

  root.gmCarousel = () => {
    clearInterval(timer);
    observer.disconnect();
    root.removeEventListener('keydown', onKeydown);
    root.removeEventListener('pointerenter', stop);
    root.removeEventListener('pointerleave', resume);
    root.removeEventListener('focusin', stop);
    root.removeEventListener('focusout', resume);
    root.querySelector('.gm-carousel__nav')?.remove();
    prev.remove();
    next.remove();
    viewport.before(track);
    viewport.remove();
    slides.forEach((slide) => slide.removeAttribute('inert'));
    delete root.gmCarousel;
  };
  return root.gmCarousel;
}

/** Pone en marcha todos los carruseles con data-gm-carousel que haya dentro de «scope». */
export function initCarousels(scope = document, options) {
  return [...scope.querySelectorAll('[data-gm-carousel]')].map((root) => initCarousel(root, options));
}
