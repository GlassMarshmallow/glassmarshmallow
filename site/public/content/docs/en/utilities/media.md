# Images and video

The aspect ratio of a box and how an image or a video fills its space. Like Tailwind's [aspect-ratio](https://tailwindcss.com/docs/aspect-ratio) and object-fit.

## Aspect ratio

| Class | Ratio |
| --- | --- |
| `gm-aspect-square` | 1 : 1 (square) |
| `gm-aspect-video` | 16 : 9 (the video one) |
| `gm-aspect-auto` | Its own |

The box keeps its shape when the width changes, and its space is reserved before the image loads: the page does not jump while loading.

## Fit

| Class | The image… |
| --- | --- |
| `gm-object-cover` | Fills the whole box and whatever is left over is cropped |
| `gm-object-contain` | Is seen whole inside the box, even if there is space left |

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap">
  <img class="gm-aspect-square gm-object-cover gm-rounded-sm gm-w-50 gm-max-w-xs" src="media/album-1.jpg" alt="Album cover (square, cropped)">
  <img class="gm-aspect-video gm-object-cover gm-rounded-sm gm-w-50 gm-max-w-xs" src="media/album-2.jpg" alt="Album cover (16:9, cropped)">
</div>
```

## Position inside the box

`gm-object-center` / `-top` / `-bottom` / `-left` / `-right`: with `gm-object-cover`, which part of the image stays in view (for example, `gm-object-top` so a face is not cut off).

## Accessibility

- Every image has an `alt`: what it shows, or `alt=""` if it is only decorative.
- With `gm-object-cover`, check that the important part of the image (a face, some text) is not cropped out.
