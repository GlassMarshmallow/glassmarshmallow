# Sombras

Las sombras del framework, suaves de día y más profundas de noche para que se noten sobre el negro.

| Clase | Sombra | Para |
| --- | --- | --- |
| `gm-shadow-none` | Ninguna | Quitar la de un componente |
| `gm-shadow-sm` / `gm-shadow` | Suave (`--gm-shadow-sm`) | Tarjetas, botones |
| `gm-shadow-md` | Media (`--gm-shadow-md`) | Menús, ventanas |
| `gm-shadow-lg` | Marcada (`--gm-shadow-hover`) | Lo que se levanta al pasar el ratón |

```html
<div class="gm-flex gm-gap-6 gm-flex-wrap gm-p-4">
  <div class="gm-bg-surface gm-rounded-sm gm-p-6 gm-shadow-sm">sm</div>
  <div class="gm-bg-surface gm-rounded-sm gm-p-6 gm-shadow-md">md</div>
  <div class="gm-bg-surface gm-rounded-sm gm-p-6 gm-shadow-lg">lg</div>
</div>
```

La sombra decora: lo que separa una pieza del fondo para entenderla debe ser un borde o un fondo con contraste, no solo la sombra.
