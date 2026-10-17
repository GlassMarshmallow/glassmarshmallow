# Reproductor de vídeo

El reproductor de My MTV Box: los controles aparecen sobre el vídeo con un degradado negro, los botones son redondos de cristal y el de reproducir es blanco. Mientras se ve el vídeo, los controles se esconden solos.

## Ejemplo

Pulsa reproducir, prueba los subtítulos (CC) y la pantalla completa.

```html
<div class="gm-player" data-gm-player data-title="Vídeo de ejemplo" data-subtitle="GlassMarshmallow · 12 s">
  <video src="media/ejemplo.webm" controls playsinline preload="metadata">
    <track kind="subtitles" src="media/ejemplo-es.vtt" srclang="es" label="Español">
    <track kind="subtitles" src="media/ejemplo-en.vtt" srclang="en" label="English">
  </video>
</div>
```

## Sin título

Sin `data-title`, solo se ven el vídeo y los controles.

```html-code
<div class="gm-player" data-gm-player>
  <video src="pelicula.mp4" controls playsinline preload="metadata"></video>
</div>
```

## Tamaño

El reproductor ocupa todo el ancho de su contenedor con proporción 16:9. Para otro formato, cambia `aspect-ratio`:

```html-code
<div class="gm-player" data-gm-player style="aspect-ratio: 4 / 3; max-width: 640px">…</div>
```

## Script

El framework da el aspecto. El script opcional quita los controles del navegador y pone los del framework. Sin el script, el vídeo se queda con los controles del navegador (por eso el `<video>` lleva `controls`).

```html
<script type="module">
  import { initPlayers } from 'glassmarshmallow/js/player.js';
  initPlayers();
</script>
```

- Botones: reproducir y pausa, 10 segundos atrás y adelante, sonido con su volumen, el tiempo, subtítulos y pantalla completa.
- Los subtítulos salen de los `<track kind="subtitles">` (o `captions`) del vídeo, en formato WebVTT. Si no hay ninguno, no sale el botón.
- `data-title` y `data-subtitle` ponen el título arriba, como el nombre de la película y el capítulo.
- Los textos salen en español si la página tiene `<html lang="es">` y en inglés si no. Se cambian con `initPlayers(document, { texts: { play: 'Ver' } })`.

## Teclado

Con el foco dentro del reproductor:

| Tecla | Qué hace |
| --- | --- |
| Espacio / K | Reproducir o pausa |
| ← → | 10 segundos atrás o adelante |
| ↑ ↓ | Subir o bajar el volumen |
| M | Silenciar o activar el sonido |
| C | Activar o quitar los subtítulos |
| F | Pantalla completa |

También con el ratón: un clic en el vídeo reproduce o pausa y un doble clic pone la pantalla completa.

## Accesibilidad

- Todos los botones tienen nombre («Reproducir», «Atrás 10 segundos»…) y miden 44 px, también en el móvil (WCAG 2.5.5, AAA).
- La línea de tiempo es una barra con su nombre y dice el tiempo con palabras («1:15 de 3:20»).
- Los controles vuelven a aparecer con el ratón, al tocar o con el teclado, y no se esconden con el vídeo en pausa.
- Pon subtítulos a los vídeos con voz (WCAG 1.2.2) y no los reproduzcas solos con sonido (WCAG 1.4.2): el script no lo hace.
- Siempre en oscuro, con los controles sobre un degradado negro, para que se lean sobre cualquier imagen.
