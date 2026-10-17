# Carrusel

Imágenes que se pasan una a una, dentro de un recuadro de cristal, con flechas a los lados y puntos debajo. Es el de la sección de proyectos del portfolio.

## Ejemplo

Pasa las diapositivas con las flechas, los puntos, deslizando o con ← → del teclado.

```html
<div class="gm-carousel" data-gm-carousel aria-label="Paisajes">
  <div class="gm-carousel__track">
    <figure class="gm-carousel__slide">
      <img src="media/album-1.jpg" alt="Sol blanco sobre montañas celestes y rosas">
      <figcaption class="gm-carousel__caption">Amanecer<p>Primera luz sobre las montañas.</p></figcaption>
    </figure>
    <figure class="gm-carousel__slide">
      <img src="media/album-4.jpg" alt="Colinas en capas con el cielo rosa">
      <figcaption class="gm-carousel__caption">Colinas<p>Tres capas de colinas al atardecer.</p></figcaption>
    </figure>
    <figure class="gm-carousel__slide">
      <img src="media/album-7.jpg" alt="Montañas verdes bajo un cielo lavanda">
      <figcaption class="gm-carousel__caption">Valle<p>El valle en primavera.</p></figcaption>
    </figure>
  </div>
</div>
```

## Pasa solo

Con `data-interval` (en milisegundos), pasa solo y aparece un botón para pausarlo. Se para al pasar el ratón o al usar el teclado dentro, y no pasa solo si la persona pide menos movimiento.

```html-code
<div class="gm-carousel" data-gm-carousel data-interval="5000" aria-label="Proyectos">…</div>
```

## Sin texto

El pie de foto (`.gm-carousel__caption`) es opcional.

```html-code
<figure class="gm-carousel__slide">
  <img src="foto.jpg" alt="Descripción de la foto">
</figure>
```

## Script

El framework da el aspecto. Sin el script, las diapositivas se pasan deslizando. El script opcional añade las flechas, los puntos y el paso automático:

```html
<script type="module">
  import { initCarousels } from 'glassmarshmallow/js/carousel.js';
  initCarousels();
</script>
```

Al cambiar de diapositiva, lanza `gm-carousel-change` con su número (empezando en 0) en `detail.index`.

## Accesibilidad

- El carrusel es una región con nombre (`aria-label`) y cada diapositiva dice cuál es («2 de 3»).
- Flechas y puntos tienen nombre («Diapositiva siguiente», «Ir a la diapositiva 2») y miden 44 px de alto (WCAG 2.5.5). El punto activo se nota por su forma alargada, no solo por el color.
- Las diapositivas que no se ven no reciben el foco (`inert`).
- Si pasa solo, tiene botón de pausa y se para con el ratón o el teclado (WCAG 2.2.2). Mientras pasa solo, los lectores de pantalla no anuncian cada cambio.
- El pie de foto es blanco con sombra sobre un degradado negro, para que se lea sobre cualquier imagen. Cada imagen lleva su `alt`.
- No metas en un carrusel lo único importante: mucha gente solo ve la primera diapositiva.
