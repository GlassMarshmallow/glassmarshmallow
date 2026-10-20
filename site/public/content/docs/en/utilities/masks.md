# Masks and blending

Fade an element towards a side or in a circle, and blend its colors with what is behind. Like in Tailwind.

## Masks

| Class | What it does |
| --- | --- |
| `gm-mask-to-t` / `-r` / `-b` / `-l` | Fades towards the top, right, bottom or left |
| `gm-mask-radial` | Fades towards the edges, in a circle |
| `gm-mask-from-0%` … `gm-mask-from-90%` | How far it shows whole before it starts fading (0, 25, 50, 60, 70, 75, 80, 90) |
| `gm-mask-none` | No mask |

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap">
  <img class="gm-w-[10rem] gm-rounded-sm gm-mask-to-b gm-mask-from-50%" src="media/album-5.jpg" alt="Cover fading towards the bottom">
  <img class="gm-w-[10rem] gm-mask-radial gm-mask-from-60%" src="media/album-6.jpg" alt="Cover fading towards the edges">
</div>
```

The portfolio drawing in light mode blends into the page like this: it fades at the top and bottom so you cannot see where it ends.

## Blending

| Class | What it does |
| --- | --- |
| `gm-mix-blend-multiply` / `-screen` / `-overlay` / `-soft-light` / `-hard-light` / `-difference` / `-luminosity` / `-color` / `-normal` | Blends the element with what is behind it |
| `gm-bg-blend-…` (the same names) | Blends the background layers of one element (an image with a gradient) |
| `gm-isolate` | The children's blending stays inside this element |

```html
<div class="gm-isolate gm-relative gm-rounded-md gm-overflow-hidden gm-h-[8rem] gm-bg-[url(/media/album-7.jpg)] gm-bg-cover gm-bg-center">
  <div class="gm-absolute gm-inset-0 gm-bg-pink gm-mix-blend-multiply"></div>
</div>
```

The TV effect is built like this: lines and grain on top of the content, with `gm-mix-blend-*` so they show without covering it.

## Accessibility

- Faded content is harder to read: do not use it on text that has to be read.
- Check text contrast after blending, not before: the colors change.
