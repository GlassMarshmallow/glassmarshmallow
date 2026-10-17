# Carousel

Images shown one at a time, inside a glass frame, with arrows on the sides and dots below. It is the one from the portfolio's projects section.

## Example

Move through the slides with the arrows, the dots, by swiping or with the ← → keys.

```html
<div class="gm-carousel" data-gm-carousel aria-label="Landscapes">
  <div class="gm-carousel__track">
    <figure class="gm-carousel__slide">
      <img src="media/album-1.jpg" alt="White sun over sky blue and pink mountains">
      <figcaption class="gm-carousel__caption">Sunrise<p>First light over the mountains.</p></figcaption>
    </figure>
    <figure class="gm-carousel__slide">
      <img src="media/album-4.jpg" alt="Layered hills under a pink sky">
      <figcaption class="gm-carousel__caption">Hills<p>Three layers of hills at sunset.</p></figcaption>
    </figure>
    <figure class="gm-carousel__slide">
      <img src="media/album-7.jpg" alt="Green mountains under a lavender sky">
      <figcaption class="gm-carousel__caption">Valley<p>The valley in spring.</p></figcaption>
    </figure>
  </div>
</div>
```

## Autoplay

With `data-interval` (in milliseconds), it moves on its own and shows a pause button. It stops on hover or when using the keyboard inside, and does not autoplay if the person asks for reduced motion.

```html-code
<div class="gm-carousel" data-gm-carousel data-interval="5000" aria-label="Projects">…</div>
```

## Without text

The caption (`.gm-carousel__caption`) is optional.

```html-code
<figure class="gm-carousel__slide">
  <img src="photo.jpg" alt="Description of the photo">
</figure>
```

## Without buttons

With `.gm-carousel--peek` and no `data-gm-carousel`: photos move by swiping with a finger, the mouse or the arrow keys, and the next one peeks in from the side to show there is more. Give the track `tabindex="0"` and a name so it works with the keyboard.

```html
<div class="gm-carousel gm-carousel--peek">
  <div class="gm-carousel__track" tabindex="0" role="region" aria-label="Landscapes (swipe to see more)">
    <figure class="gm-carousel__slide">
      <img src="media/album-2.jpg" alt="Blue sky over soft hills">
      <figcaption class="gm-carousel__caption">Sea of clouds</figcaption>
    </figure>
    <figure class="gm-carousel__slide">
      <img src="media/album-5.jpg" alt="Peach sky over mountains">
      <figcaption class="gm-carousel__caption">Sunset</figcaption>
    </figure>
    <figure class="gm-carousel__slide">
      <img src="media/album-8.jpg" alt="Pink hills at dusk">
      <figcaption class="gm-carousel__caption">Dusk</figcaption>
    </figure>
  </div>
</div>
```

## Swipe row

Like the quick questions of the portfolio chat: everything in one row that slides sideways with a finger, the mouse or the keyboard, with no arrows or dots. The right edge fades out to show there is more. Use `.gm-scroll-row`; no script needed.

```html
<div class="gm-scroll-row" role="group" aria-label="Quick questions" style="max-width: 340px">
  <button type="button" class="gm-btn gm-btn--pill">Which technologies do you use?</button>
  <button type="button" class="gm-btn gm-btn--pill">How much does a website cost?</button>
  <button type="button" class="gm-btn gm-btn--pill">Do you build online shops?</button>
  <button type="button" class="gm-btn gm-btn--pill">How long does it take?</button>
</div>
```

With `.gm-scroll-row--mobile`, it only slides on phones (767 px or less); on large screens, the items wrap to the next line.

```html-code
<div class="gm-scroll-row gm-scroll-row--mobile" role="group" aria-label="Quick questions">…</div>
```

## Script

The framework provides the look. Without the script, slides move by swiping. The optional script adds the arrows, the dots and autoplay:

```html
<script type="module">
  import { initCarousels } from 'glassmarshmallow/js/carousel.js';
  initCarousels();
</script>
```

When the slide changes, it fires `gm-carousel-change` with its number (starting at 0) in `detail.index`.

## Accessibility

- The carousel is a named region (`aria-label`) and each slide says which one it is (“2 of 3”).
- Arrows and dots have names (“Next slide”, “Go to slide 2”) and are 44 px tall (WCAG 2.5.5). The active dot stands out by its longer shape, not just color.
- Slides that are not visible do not get focus (`inert`).
- With autoplay, there is a pause button and it stops with the mouse or the keyboard (WCAG 2.2.2). While autoplaying, screen readers do not announce every change.
- The caption is white with a shadow on a black gradient, so it reads over any image. Every image has its `alt`.
- Do not put the only important thing in a carousel: many people only see the first slide.
- In the swipe row, every item is reachable with Tab and the row scrolls to it on its own.
