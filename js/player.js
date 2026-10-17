/*!
 * GlassMarshmallow · Reproductor de vídeo (opcional)
 * Convierte <div class="gm-player" data-gm-player><video …></video></div> en el reproductor del framework
 * (el de My MTV Box). Sin dependencias.
 *
 * - Quita los controles del navegador y pone: reproducir y pausa, 10 s atrás y adelante, sonido y volumen,
 *   tiempo, línea de tiempo, subtítulos (si el vídeo tiene <track kind="subtitles|captions">) y pantalla completa.
 * - data-title y data-subtitle ponen un título arriba (como el nombre y el capítulo).
 * - Mientras se reproduce, los controles se esconden a los 3 s sin mover el ratón; vuelven al moverlo, al tocar
 *   o al usar el teclado. Con el vídeo en pausa se ven siempre.
 * - Clic en el vídeo: reproducir o pausa. Doble clic: pantalla completa.
 * - Teclado (con el foco dentro del reproductor): Espacio o K reproducir/pausa, ← → 10 s, ↑ ↓ volumen,
 *   M silencio, F pantalla completa, C subtítulos.
 * - Textos en español si <html lang="es">; en inglés si no. Se cambian con initPlayer(root, { texts }).
 */

const TEXTS = {
  es: {
    play: 'Reproducir',
    pause: 'Pausa',
    back: 'Atrás 10 segundos',
    forward: 'Adelante 10 segundos',
    mute: 'Silenciar',
    unmute: 'Activar sonido',
    volume: 'Volumen',
    position: 'Posición',
    of: 'de',
    subtitles: 'Subtítulos',
    off: 'Desactivados',
    fullscreen: 'Pantalla completa',
    exitFullscreen: 'Salir de pantalla completa',
    player: 'Reproductor de vídeo',
  },
  en: {
    play: 'Play',
    pause: 'Pause',
    back: 'Back 10 seconds',
    forward: 'Forward 10 seconds',
    mute: 'Mute',
    unmute: 'Unmute',
    volume: 'Volume',
    position: 'Position',
    of: 'of',
    subtitles: 'Subtitles',
    off: 'Off',
    fullscreen: 'Full screen',
    exitFullscreen: 'Exit full screen',
    player: 'Video player',
  },
};

const IDLE_MS = 3000;
let uid = 0;

/** 75 → «1:15»; 3725 → «1:02:05» */
function clock(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  const m = Math.floor((seconds / 60) % 60);
  const h = Math.floor(seconds / 3600);
  return h ? `${h}:${m.toString().padStart(2, '0')}:${s}` : `${m}:${s}`;
}

/** Pone en marcha un reproductor. Devuelve una función para quitarlo. */
export function initPlayer(root, options = {}) {
  if (root.gmPlayer) return root.gmPlayer;
  const video = root.querySelector('video');
  if (!video) return () => {};
  const lang = (document.documentElement.lang || 'en').slice(0, 2);
  const t = { ...(TEXTS[lang] ?? TEXTS.en), ...options.texts };
  const id = `gm-player-${++uid}`;
  const tracks = [...video.textTracks].filter((track) => track.kind === 'subtitles' || track.kind === 'captions');

  video.controls = false;
  video.setAttribute('playsinline', '');
  if (!root.hasAttribute('role')) {
    root.setAttribute('role', 'region');
    root.setAttribute('aria-label', root.dataset.title ?? t.player);
  }

  const header = root.dataset.title
    ? `<div class="gm-player__header"><strong></strong>${root.dataset.subtitle ? '<span></span>' : ''}</div>`
    : '';
  const subtitlesMenu = tracks.length
    ? `<div class="gm-player__menu-wrap">
        <button type="button" class="gm-player__button" data-action="subtitles" aria-haspopup="menu" aria-expanded="false" aria-controls="${id}-subs" aria-label="${t.subtitles}"><i class="gmi gmi-badge-cc" aria-hidden="true"></i></button>
        <div class="gm-player__menu" id="${id}-subs" role="menu" hidden>
          <p aria-hidden="true">${t.subtitles}</p>
          <button type="button" role="menuitemradio" data-track="-1">${t.off}</button>
          ${tracks.map((track, i) => `<button type="button" role="menuitemradio" data-track="${i}"></button>`).join('')}
        </div>
      </div>`
    : '';

  root.insertAdjacentHTML(
    'beforeend',
    `${header}
    <div class="gm-player__loading" hidden><div class="gm-player__spinner"></div></div>
    <div class="gm-player__controls">
      <input class="gm-player__timeline" type="range" min="0" max="0" step="1" value="0" aria-label="${t.position}" />
      <div class="gm-player__bar">
        <button type="button" class="gm-player__button gm-player__button--main" data-action="play"><i class="gmi gmi-play-fill" aria-hidden="true"></i></button>
        <button type="button" class="gm-player__button" data-action="back" aria-label="${t.back}"><i class="gmi gmi-arrow-counterclockwise" aria-hidden="true"></i></button>
        <button type="button" class="gm-player__button" data-action="forward" aria-label="${t.forward}"><i class="gmi gmi-arrow-clockwise" aria-hidden="true"></i></button>
        <button type="button" class="gm-player__button" data-action="mute"><i class="gmi gmi-volume-up-fill" aria-hidden="true"></i></button>
        <input class="gm-player__volume" type="range" min="0" max="1" step="0.05" aria-label="${t.volume}" />
        <span class="gm-player__time" aria-hidden="true">0:00 / 0:00</span>
        <span class="gm-player__spacer"></span>
        ${subtitlesMenu}
        <button type="button" class="gm-player__button" data-action="fullscreen"><i class="gmi gmi-fullscreen" aria-hidden="true"></i></button>
      </div>
    </div>`,
  );

  const $ = (selector) => root.querySelector(selector);
  if (header) {
    $('.gm-player__header strong').textContent = root.dataset.title;
    if (root.dataset.subtitle) $('.gm-player__header span').textContent = root.dataset.subtitle;
  }
  const timeline = $('.gm-player__timeline');
  const volume = $('.gm-player__volume');
  const time = $('.gm-player__time');
  const loading = $('.gm-player__loading');
  const playButton = $('[data-action="play"]');
  const muteButton = $('[data-action="mute"]');
  const fullButton = $('[data-action="fullscreen"]');
  const subsButton = $('[data-action="subtitles"]');
  const subsMenu = tracks.length ? $(`#${id}-subs`) : null;
  subsMenu?.querySelectorAll('[data-track]').forEach((button) => {
    const index = Number(button.dataset.track);
    if (index >= 0) button.textContent = tracks[index].label || tracks[index].language || `${t.subtitles} ${index + 1}`;
  });
  let scrubbing = false;
  let idleTimer;

  function renderPlay() {
    const playing = !video.paused && !video.ended;
    playButton.setAttribute('aria-label', playing ? t.pause : t.play);
    playButton.querySelector('i').className = `gmi ${playing ? 'gmi-pause-fill' : 'gmi-play-fill'}`;
  }
  function renderTime() {
    const duration = Number.isFinite(video.duration) ? video.duration : 0;
    const current = scrubbing ? Number(timeline.value) : video.currentTime;
    timeline.max = String(Math.floor(duration));
    if (!scrubbing) timeline.value = String(Math.floor(current));
    timeline.style.setProperty('--gm-range-progress', `${duration ? (current / duration) * 100 : 0}%`);
    timeline.setAttribute('aria-valuetext', `${clock(current)} ${t.of} ${clock(duration)}`);
    time.textContent = `${clock(current)} / ${clock(duration)}`;
  }
  function renderSound() {
    const silent = video.muted || video.volume === 0;
    muteButton.setAttribute('aria-label', silent ? t.unmute : t.mute);
    muteButton.querySelector('i').className = `gmi ${silent ? 'gmi-volume-mute-fill' : 'gmi-volume-up-fill'}`;
    volume.value = String(video.muted ? 0 : video.volume);
  }
  function renderFullscreen() {
    const full = document.fullscreenElement === root;
    fullButton.setAttribute('aria-label', full ? t.exitFullscreen : t.fullscreen);
    fullButton.querySelector('i').className = `gmi ${full ? 'gmi-fullscreen-exit' : 'gmi-fullscreen'}`;
  }
  function renderSubtitles() {
    if (!subsMenu) return;
    const active = tracks.findIndex((track) => track.mode === 'showing');
    subsButton.classList.toggle('is-on', active >= 0);
    subsMenu.querySelectorAll('[data-track]').forEach((button) => button.setAttribute('aria-checked', String(Number(button.dataset.track) === active)));
  }

  /** Subtítulos por encima de los controles mientras se ven; abajo del todo cuando se esconden */
  function placeCues() {
    const line = root.classList.contains('is-idle') ? 'auto' : -4;
    tracks.forEach((track) => [...(track.cues ?? [])].forEach((cue) => (cue.line = line)));
  }

  /** Enseña los controles y, si se está reproduciendo, los vuelve a esconder a los 3 s */
  function poke() {
    if (root.classList.contains('is-idle')) {
      root.classList.remove('is-idle');
      placeCues();
    }
    clearTimeout(idleTimer);
    if (!video.paused && subsMenu?.hidden !== false) {
      idleTimer = setTimeout(() => {
        root.classList.add('is-idle');
        placeCues();
      }, IDLE_MS);
    }
  }

  const toggle = () => (video.paused || video.ended ? video.play() : video.pause());
  const seek = (to) => {
    video.currentTime = Math.max(0, Math.min(Number.isFinite(video.duration) ? video.duration : to, to));
  };
  const setVolume = (value) => {
    video.volume = Math.max(0, Math.min(1, value));
    video.muted = video.volume === 0;
  };
  const toggleFullscreen = () => (document.fullscreenElement === root ? document.exitFullscreen() : root.requestFullscreen?.());
  const setTrack = (index) => {
    tracks.forEach((track, i) => (track.mode = i === index ? 'showing' : 'disabled'));
    renderSubtitles();
    // Los subtítulos se cargan al activarlos: se colocan cuando llegan
    const track = video.querySelectorAll('track')[index];
    if (track) track.addEventListener('load', placeCues, { once: true });
    placeCues();
  };
  const openMenu = (open) => {
    if (!subsMenu) return;
    subsMenu.hidden = !open;
    subsButton.setAttribute('aria-expanded', String(open));
    if (open) (subsMenu.querySelector('[aria-checked="true"]') ?? subsMenu.querySelector('[data-track]')).focus();
    poke();
  };

  const onClick = (event) => {
    const action = event.target.closest('[data-action]')?.dataset.action;
    const trackButton = event.target.closest('[data-track]');
    if (trackButton) {
      setTrack(Number(trackButton.dataset.track));
      openMenu(false);
      subsButton.focus();
    } else if (action === 'play') toggle();
    else if (action === 'back') seek(video.currentTime - 10);
    else if (action === 'forward') seek(video.currentTime + 10);
    else if (action === 'mute') {
      if (video.muted || video.volume === 0) {
        video.muted = false;
        if (video.volume === 0) video.volume = 0.5;
      } else video.muted = true;
    } else if (action === 'fullscreen') toggleFullscreen();
    else if (action === 'subtitles') openMenu(subsMenu.hidden);
    else if (event.target === video) toggle();
    if (subsMenu && !subsMenu.hidden && !event.target.closest('.gm-player__menu-wrap')) openMenu(false);
  };
  const onDblclick = (event) => event.target === video && toggleFullscreen();
  const onKeydown = (event) => {
    poke();
    if (event.target.closest('.gm-player__menu')) {
      const items = [...subsMenu.querySelectorAll('[data-track]')];
      const index = items.indexOf(document.activeElement);
      if (event.key === 'Escape') {
        openMenu(false);
        subsButton.focus();
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        items[(index + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length].focus();
      }
      return;
    }
    // En las barras, las flechas mueven la barra
    const onRange = event.target.matches('input[type="range"]');
    const key = event.key.toLowerCase();
    if (key === ' ' && event.target.matches('button')) return;
    if (key === ' ' || key === 'k') toggle();
    else if (!onRange && key === 'arrowleft') seek(video.currentTime - 10);
    else if (!onRange && key === 'arrowright') seek(video.currentTime + 10);
    else if (!onRange && key === 'arrowup') setVolume(video.volume + 0.05);
    else if (!onRange && key === 'arrowdown') setVolume(video.volume - 0.05);
    else if (key === 'm') video.muted = !video.muted;
    else if (key === 'f') toggleFullscreen();
    else if (key === 'c' && tracks.length) setTrack(tracks.findIndex((track) => track.mode === 'showing') >= 0 ? -1 : 0);
    else return;
    event.preventDefault();
  };
  const onTimelineInput = () => {
    scrubbing = true;
    renderTime();
  };
  const onTimelineChange = () => {
    scrubbing = false;
    seek(Number(timeline.value));
  };
  const onVolume = () => setVolume(Number(volume.value));
  // Vídeos sin la duración en la cabecera (como los grabados en el navegador): se salta al final para que
  // el navegador la calcule y se vuelve al principio
  const onMetadata = () => {
    if (video.duration !== Infinity) return renderTime();
    const back = () => {
      if (video.duration === Infinity) return;
      video.removeEventListener('durationchange', back);
      video.currentTime = 0;
      renderTime();
    };
    video.addEventListener('durationchange', back);
    video.currentTime = 1e101;
  };
  const onWaiting = () => (loading.hidden = false);
  const onPlaying = () => (loading.hidden = true);
  const onPlayState = () => {
    renderPlay();
    poke();
  };
  const onDocument = (event) => {
    if (subsMenu && !subsMenu.hidden && !root.contains(event.target)) openMenu(false);
  };

  root.tabIndex = root.tabIndex >= 0 ? root.tabIndex : -1;
  root.addEventListener('click', onClick);
  root.addEventListener('dblclick', onDblclick);
  root.addEventListener('keydown', onKeydown);
  root.addEventListener('pointermove', poke);
  root.addEventListener('touchstart', poke, { passive: true });
  root.addEventListener('focusin', poke);
  timeline.addEventListener('input', onTimelineInput);
  timeline.addEventListener('change', onTimelineChange);
  volume.addEventListener('input', onVolume);
  video.addEventListener('play', onPlayState);
  video.addEventListener('pause', onPlayState);
  video.addEventListener('ended', onPlayState);
  video.addEventListener('timeupdate', renderTime);
  video.addEventListener('loadedmetadata', onMetadata);
  video.addEventListener('durationchange', renderTime);
  video.addEventListener('volumechange', renderSound);
  video.addEventListener('waiting', onWaiting);
  video.addEventListener('playing', onPlaying);
  video.addEventListener('canplay', onPlaying);
  document.addEventListener('fullscreenchange', renderFullscreen);
  document.addEventListener('pointerdown', onDocument);
  renderPlay();
  renderTime();
  renderSound();
  renderFullscreen();
  renderSubtitles();
  if (video.readyState >= 1) onMetadata();

  root.gmPlayer = () => {
    clearTimeout(idleTimer);
    root.removeEventListener('click', onClick);
    root.removeEventListener('dblclick', onDblclick);
    root.removeEventListener('keydown', onKeydown);
    root.removeEventListener('pointermove', poke);
    root.removeEventListener('touchstart', poke);
    root.removeEventListener('focusin', poke);
    ['play', 'pause', 'ended'].forEach((name) => video.removeEventListener(name, onPlayState));
    ['timeupdate', 'durationchange'].forEach((name) => video.removeEventListener(name, renderTime));
    video.removeEventListener('loadedmetadata', onMetadata);
    video.removeEventListener('volumechange', renderSound);
    video.removeEventListener('waiting', onWaiting);
    video.removeEventListener('playing', onPlaying);
    video.removeEventListener('canplay', onPlaying);
    document.removeEventListener('fullscreenchange', renderFullscreen);
    document.removeEventListener('pointerdown', onDocument);
    root.querySelectorAll('.gm-player__header, .gm-player__loading, .gm-player__controls').forEach((el) => el.remove());
    video.controls = true;
    delete root.gmPlayer;
  };
  return root.gmPlayer;
}

/** Pone en marcha todos los reproductores con data-gm-player que haya dentro de «scope». */
export function initPlayers(scope = document, options) {
  return [...scope.querySelectorAll('[data-gm-player]')].map((root) => initPlayer(root, options));
}
