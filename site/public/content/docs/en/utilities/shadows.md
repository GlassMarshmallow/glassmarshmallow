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

Shadows decorate: what separates a piece from the background so it can be understood must be a border or a contrasting background, not just the shadow.
