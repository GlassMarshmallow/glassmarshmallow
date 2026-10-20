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

## Hacia dentro y de color

| Clase | Sombra |
| --- | --- |
| `gm-shadow-inner` | Hacia dentro, como un hueco |
| `gm-shadow-sky` / `-blue` / `-lavender` / `-pink` / `-peach` / `-lemon` / `-mint` / `-coral` | Un resplandor del color de la paleta |

```html
<div class="gm-flex gm-gap-6 gm-flex-wrap gm-p-4">
  <div class="gm-bg-surface gm-rounded-sm gm-p-6 gm-shadow-inner">inner</div>
  <div class="gm-bg-surface gm-rounded-sm gm-p-6 gm-shadow-pink">pink</div>
  <div class="gm-bg-surface gm-rounded-sm gm-p-6 gm-shadow-mint">mint</div>
</div>
```

Cualquier otra sombra, con un [valor libre](/docs/utilities/arbitrary): `gm-shadow-[0_0_0_4px_var(--gm-focus)]`.

## Anillo

`gm-ring` dibuja un anillo alrededor (2 px, del color de acento), que sigue las esquinas y no choca con la sombra. Su grosor, `gm-ring-1` / `-2` / `-4`; su separación, `gm-ring-offset-0` / `-2` / `-4`; su color, `gm-ring-sky`, `gm-ring-mint`… (los mismos colores que los [degradados](/docs/utilities/gradients)).

```html
<div class="gm-flex gm-gap-6 gm-flex-wrap gm-p-4">
  <button type="button" class="gm-btn gm-ring">Anillo</button>
  <button type="button" class="gm-btn gm-btn--secondary gm-ring gm-ring-4 gm-ring-mint gm-ring-offset-2">Más grueso y separado</button>
</div>
```

La sombra decora: lo que separa una pieza del fondo para entenderla debe ser un borde o un fondo con contraste, no solo la sombra.
