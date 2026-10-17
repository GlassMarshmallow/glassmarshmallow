# Photo gallery

An album: photos in a grid, all the same size, with more columns on large screens and fewer on phones. Pressing one shows it large in a viewer with arrows to move to the next.

## Example

```html
<div class="gm-gallery" data-gm-gallery aria-label="Landscapes">
  <a class="gm-gallery__item" href="media/album-1.jpg" data-caption="Sunrise"><img src="media/album-1.jpg" alt="White sun over sky blue and pink mountains"></a>
  <a class="gm-gallery__item" href="media/album-2.jpg" data-caption="Sea of clouds"><img src="media/album-2.jpg" alt="Blue sky over soft hills"></a>
  <a class="gm-gallery__item" href="media/album-3.jpg" data-caption="Summer afternoon"><img src="media/album-3.jpg" alt="Layered mountains under a lavender sky"></a>
  <a class="gm-gallery__item" href="media/album-4.jpg" data-caption="Hills"><img src="media/album-4.jpg" alt="Layered hills under a pink sky"></a>
  <a class="gm-gallery__item" href="media/album-5.jpg" data-caption="Sunset"><img src="media/album-5.jpg" alt="Peach sky over mountains"></a>
  <a class="gm-gallery__item" href="media/album-6.jpg" data-caption="Full moon"><img src="media/album-6.jpg" alt="White moon over yellow hills"></a>
</div>
```

## Square and with text

`.gm-gallery--square` crops photos to squares. For a text under each one, add `.gm-gallery__caption` inside the link.

```html
<div class="gm-gallery gm-gallery--square" data-gm-gallery aria-label="Trip">
  <a class="gm-gallery__item" href="media/album-7.jpg"><img src="media/album-7.jpg" alt="Green valley under a lavender sky"><span class="gm-gallery__caption">Valley</span></a>
  <a class="gm-gallery__item" href="media/album-8.jpg"><img src="media/album-8.jpg" alt="Pink hills at dusk"><span class="gm-gallery__caption">Dusk</span></a>
  <a class="gm-gallery__item" href="media/album-9.jpg"><img src="media/album-9.jpg" alt="Sky blue mountains at noon"><span class="gm-gallery__caption">Noon</span></a>
</div>
```

## Larger photos

`.gm-gallery--lg`: columns of at least 300 px instead of 200 px.

```html-code
<div class="gm-gallery gm-gallery--lg" data-gm-gallery aria-label="Portfolio">…</div>
```

## Script

The framework provides the look. Without the script, each photo opens the large image in the same tab. The optional script shows it in the viewer:

```html
<script type="module">
  import { initGalleries } from 'glassmarshmallow/js/gallery.js';
  initGalleries();
</script>
```

- Each photo's `href` is the large image; the thumbnail (`<img>`) can be a lighter version.
- The viewer text comes from `data-caption` or, if missing, from the thumbnail's `alt`.

## A single photo

To enlarge a single photo (for example, the [profile photo](/docs/components/avatar#enlarge-on-click)): a link to the large photo with `data-gm-zoom` and `initZooms()`. The viewer shows without arrows or counter.

## Keyboard

In the viewer:

| Key | What it does |
| --- | --- |
| ← → | Previous or next photo |
| Home / End | First or last photo |
| Escape | Closes the viewer and focus returns to the photo |

## Accessibility

- Each photo is a link with its `alt`, so it opens with the keyboard and screen readers say what it is.
- The viewer is a `<dialog>`: focus stays inside and Escape closes it. The counter (“2 of 9”) is announced when the photo changes.
- Arrows and close have names and are 44 px (WCAG 2.5.5); on a nearly black background, with white border and focus.
- The gentle zoom on hover is removed when the person asks for reduced motion.
