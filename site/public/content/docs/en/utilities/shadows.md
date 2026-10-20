# Shadows

The framework shadows, soft by day and deeper at night so they show on black.

| Class | Shadow | For |
| --- | --- | --- |
| `gm-shadow-none` | None | Remove a component's shadow |
| `gm-shadow-sm` / `gm-shadow` | Soft (`--gm-shadow-sm`) | Cards, buttons |
| `gm-shadow-md` | Medium (`--gm-shadow-md`) | Menus, windows |
| `gm-shadow-lg` | Strong (`--gm-shadow-hover`) | What lifts on hover |

```html
<div class="gm-flex gm-gap-6 gm-flex-wrap gm-p-4">
  <div class="gm-bg-surface gm-rounded-sm gm-p-6 gm-shadow-sm">sm</div>
  <div class="gm-bg-surface gm-rounded-sm gm-p-6 gm-shadow-md">md</div>
  <div class="gm-bg-surface gm-rounded-sm gm-p-6 gm-shadow-lg">lg</div>
</div>
```

## Inner and colored

| Class | Shadow |
| --- | --- |
| `gm-shadow-inner` | Inwards, like a hollow |
| `gm-shadow-sky` / `-blue` / `-lavender` / `-pink` / `-peach` / `-lemon` / `-mint` / `-coral` | A glow in the palette color |

```html
<div class="gm-flex gm-gap-6 gm-flex-wrap gm-p-4">
  <div class="gm-bg-surface gm-rounded-sm gm-p-6 gm-shadow-inner">inner</div>
  <div class="gm-bg-surface gm-rounded-sm gm-p-6 gm-shadow-pink">pink</div>
  <div class="gm-bg-surface gm-rounded-sm gm-p-6 gm-shadow-mint">mint</div>
</div>
```

Any other shadow, with an [arbitrary value](/docs/utilities/arbitrary): `gm-shadow-[0_0_0_4px_var(--gm-focus)]`.

## Ring

`gm-ring` draws a ring around (2 px, in the accent color) that follows the corners and does not clash with the shadow. Its width, `gm-ring-1` / `-2` / `-4`; its offset, `gm-ring-offset-0` / `-2` / `-4`; its color, `gm-ring-sky`, `gm-ring-mint`… (the same colors as the [gradients](/docs/utilities/gradients)).

```html
<div class="gm-flex gm-gap-6 gm-flex-wrap gm-p-4">
  <button type="button" class="gm-btn gm-ring">Ring</button>
  <button type="button" class="gm-btn gm-btn--secondary gm-ring gm-ring-4 gm-ring-mint gm-ring-offset-2">Thicker and offset</button>
</div>
```

Shadows decorate: what separates a piece from the background so it can be understood must be a border or a contrasting background, not just the shadow.
