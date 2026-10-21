# Video player

A video player: controls appear over the video on a black gradient, the buttons are round glass and the play button is white. While the video plays, the controls hide on their own.

## Example

Press play, try the subtitles (CC) and full screen.

```html
<div class="gm-player" data-gm-player data-title="Sample video" data-subtitle="GlassMarshmallow · 12 s">
  <video src="media/ejemplo.webm" controls playsinline preload="metadata">
    <track kind="subtitles" src="media/ejemplo-en.vtt" srclang="en" label="English">
    <track kind="subtitles" src="media/ejemplo-es.vtt" srclang="es" label="Español">
  </video>
</div>
```

## Without a title

Without `data-title`, only the video and the controls show.

```html-code
<div class="gm-player" data-gm-player>
  <video src="movie.mp4" controls playsinline preload="metadata"></video>
</div>
```

## Size

The player takes the full width of its container with a 16:9 ratio. For another format, change `aspect-ratio`:

```html-code
<div class="gm-player" data-gm-player style="aspect-ratio: 4 / 3; max-width: 640px">…</div>
```

## Script

The framework provides the look. The optional script removes the browser controls and adds the framework ones. Without the script, the video keeps the browser controls (that is why the `<video>` has `controls`).

```html
<script type="module">
  import { initPlayers } from 'glassmarshmallow/js/player.js';
  initPlayers();
</script>
```

- Buttons: play and pause, 10 seconds back and forward, sound with its volume, the time, subtitles and full screen.
- Subtitles come from the video's `<track kind="subtitles">` (or `captions`) elements, in WebVTT format. If there are none, the button does not show.
- `data-title` and `data-subtitle` put the title on top, like the movie name and the episode.
- Texts are in Spanish if the page has `<html lang="es">`, and in English otherwise. Change them with `initPlayers(document, { texts: { play: 'Watch' } })`.

## Keyboard

With focus inside the player:

| Key | What it does |
| --- | --- |
| Space / K | Play or pause |
| ← → | 10 seconds back or forward |
| ↑ ↓ | Volume up or down |
| M | Mute or unmute |
| C | Turn subtitles on or off |
| F | Full screen |

With the mouse too: a click on the video plays or pauses, and a double click goes full screen.

## Accessibility

- Every button has a name (“Play”, “Back 10 seconds”…) and is 44 px, also on phones (WCAG 2.5.5, AAA).
- The timeline is a slider with its name and says the time in words (“1:15 of 3:20”).
- Controls come back with the mouse, on touch or with the keyboard, and do not hide while paused.
- Add subtitles to videos with speech (WCAG 1.2.2) and do not autoplay them with sound (WCAG 1.4.2): the script does not.
- Always dark, with the controls on a black gradient, so they read over any image.
