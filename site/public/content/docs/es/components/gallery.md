# Galería de fotos

Un álbum: las fotos en una cuadrícula, todas del mismo tamaño, con más columnas en pantallas grandes y menos en el móvil. Al pulsar una, se ve en grande en un visor con flechas para pasar a la siguiente.

## Ejemplo

```html
<div class="gm-gallery" data-gm-gallery aria-label="Paisajes">
  <a class="gm-gallery__item" href="media/album-1.jpg" data-caption="Amanecer"><img src="media/album-1.jpg" alt="Sol blanco sobre montañas celestes y rosas"></a>
  <a class="gm-gallery__item" href="media/album-2.jpg" data-caption="Mar de nubes"><img src="media/album-2.jpg" alt="Cielo azul sobre colinas suaves"></a>
  <a class="gm-gallery__item" href="media/album-3.jpg" data-caption="Tarde de verano"><img src="media/album-3.jpg" alt="Montañas en capas bajo un cielo lavanda"></a>
  <a class="gm-gallery__item" href="media/album-4.jpg" data-caption="Colinas"><img src="media/album-4.jpg" alt="Colinas en capas con el cielo rosa"></a>
  <a class="gm-gallery__item" href="media/album-5.jpg" data-caption="Atardecer"><img src="media/album-5.jpg" alt="Cielo melocotón sobre montañas"></a>
  <a class="gm-gallery__item" href="media/album-6.jpg" data-caption="Luna llena"><img src="media/album-6.jpg" alt="Luna blanca sobre colinas amarillas"></a>
</div>
```

## Cuadradas y con texto

`.gm-gallery--square` recorta las fotos en cuadrado. Para un texto debajo de cada una, añade `.gm-gallery__caption` dentro del enlace.

```html
<div class="gm-gallery gm-gallery--square" data-gm-gallery aria-label="Viaje">
  <a class="gm-gallery__item" href="media/album-7.jpg"><img src="media/album-7.jpg" alt="Valle verde bajo un cielo lavanda"><span class="gm-gallery__caption">Valle</span></a>
  <a class="gm-gallery__item" href="media/album-8.jpg"><img src="media/album-8.jpg" alt="Colinas rosas al anochecer"><span class="gm-gallery__caption">Anochecer</span></a>
  <a class="gm-gallery__item" href="media/album-9.jpg"><img src="media/album-9.jpg" alt="Montañas celestes al mediodía"><span class="gm-gallery__caption">Mediodía</span></a>
</div>
```

## Fotos más grandes

`.gm-gallery--lg`: columnas de 300 px como mínimo en lugar de 200 px.

```html-code
<div class="gm-gallery gm-gallery--lg" data-gm-gallery aria-label="Portfolio">…</div>
```

## Script

El framework da el aspecto. Sin el script, cada foto abre la imagen grande en la misma pestaña. El script opcional la enseña en el visor:

```html
<script type="module">
  import { initGalleries } from 'glassmarshmallow/js/gallery.js';
  initGalleries();
</script>
```

- El `href` de cada foto es la imagen grande; la miniatura (`<img>`) puede ser una versión más ligera.
- El texto del visor sale de `data-caption` o, si no hay, del `alt` de la miniatura.

## Una sola foto

Para ampliar una foto suelta (por ejemplo, la [foto de perfil](/docs/components/avatar#ampliar-al-pulsar)): un enlace a la foto grande con `data-gm-zoom` e `initZooms()`. El visor sale sin flechas ni contador.

## Teclado

En el visor:

| Tecla | Qué hace |
| --- | --- |
| ← → | Foto anterior o siguiente |
| Inicio / Fin | Primera o última foto |
| Escape | Cierra el visor y el foco vuelve a la foto |

## Accesibilidad

- Cada foto es un enlace con su `alt`, así que se puede abrir con el teclado y los lectores de pantalla dicen qué es.
- El visor es un `<dialog>`: el foco se queda dentro y Escape lo cierra. El contador («2 de 9») se anuncia al cambiar de foto.
- Flechas y cerrar tienen nombre y miden 44 px (WCAG 2.5.5); sobre fondo casi negro, con borde y foco blancos.
- El zoom suave al pasar el ratón se quita si la persona pide menos movimiento.
