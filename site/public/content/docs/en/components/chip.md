# Chip

A glass pill for quick options, like the suggested questions of a chat. It is the one from the AI portfolio template: the same glass as the accordion and, on hover, it rises a little and the border takes the lights of the illustration (turquoise in dark mode).

## Example

```html
<div class="gm-flex gm-flex-wrap gm-gap-2 gm-justify-center">
  <button type="button" class="gm-chip">Which technologies do you use?</button>
  <button type="button" class="gm-chip">How much does a website cost?</button>
  <button type="button" class="gm-chip">Do you build online shops?</button>
  <button type="button" class="gm-chip gm-chip--accent"><i class="gmi gmi-stars" aria-hidden="true"></i>I want a project</button>
</div>
```

## Accent

`.gm-chip--accent` always has the lights border and semibold text: for the main action of the group.

## On phones

Many chips in a row fit better in a [swipe row](/docs/components/carousel#swipe-row), as in the template:

```html
<div class="gm-scroll-row" role="group" aria-label="Quick questions" style="max-width: 320px">
  <button type="button" class="gm-chip">Which technologies do you use?</button>
  <button type="button" class="gm-chip">How much does a website cost?</button>
  <button type="button" class="gm-chip">Do you build online shops?</button>
</div>
```

## Change the borders

| Variable | What it changes | Default |
| --- | --- | --- |
| `--gm-chip-border` | The border at rest | The panel gray |
| `--gm-chip-color` | The border on hover and on the accent chip (a color or a gradient) | The lights of the illustration |

With the accent color at rest and on hover, and with a pastel gradient on hover:

```html
<div class="gm-flex gm-flex-wrap gm-gap-2 gm-justify-center">
  <button type="button" class="gm-chip" style="--gm-chip-border: var(--gm-accent); --gm-chip-color: var(--gm-accent)">What technologies do you use?</button>
  <button type="button" class="gm-chip" style="--gm-chip-color: linear-gradient(90deg, var(--gm-mint), var(--gm-sky), var(--gm-lavender))">How much does a website cost?</button>
  <button type="button" class="gm-chip gm-chip--accent" style="--gm-chip-color: var(--gm-accent)"><i class="gmi gmi-stars" aria-hidden="true"></i>I want a project</button>
</div>
```

## Without a border

`.gm-chip--borderless`: only the glass, with no border at rest or on hover (it still rises a little). Use it on backgrounds where the glass stands out well.

```html
<div class="gm-flex gm-flex-wrap gm-gap-2 gm-justify-center">
  <button type="button" class="gm-chip gm-chip--borderless">What technologies do you use?</button>
  <button type="button" class="gm-chip gm-chip--borderless">Do you build online shops?</button>
</div>
```

## Disabled

With `disabled`, or with `aria-disabled="true"` if it must stay focusable (for example, inside a swipe row while the AI is thinking).

## Accessibility

- They are `<button>` elements with text: they say what they do.
- They look smaller than 44 px, but the touch area reaches 44 px (WCAG 2.5.5).
- Text reaches 7:1 on the glass in both modes; the border, 3:1. If you change the border color, keep it at 3:1; without a border, the text is enough to tell what it is.
