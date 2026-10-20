# Transformaciones y transiciones

Gira, escala y mueve elementos, y haz que los cambios sean suaves. Se juntan solas: `gm-rotate-6 gm-scale-110`. Como en Tailwind.

## Girar, escalar y mover

| Clase | Qué hace |
| --- | --- |
| `gm-rotate-0` / `-1` / `-2` / `-3` / `-6` / `-12` / `-45` / `-90` / `-180` | Gira esos grados |
| `gm-scale-0` / `-50` / `-75` / `-90` / `-95` / `-100` / `-105` / `-110` / `-125` / `-150` | Escala (100: su tamaño) |
| `gm-translate-x-…` / `gm-translate-y-…` | Mueve de lado / arriba y abajo, con la escala del espaciado (`gm-translate-y-1`: 0,25 rem) |
| `gm-origin-center` / `-top` / `-bottom-right`… | Desde dónde gira o escala |

Hacia el otro lado, con un [valor libre](/docs/utilities/arbitrary): `gm-rotate-[-6deg]`, `gm-translate-[0_-1px]`.

```html
<div class="gm-flex gm-gap-6 gm-flex-wrap gm-p-6">
  <div class="gm-theme-pink gm-theme-solid gm-rounded-sm gm-p-4 gm-rotate-6">gm-rotate-6</div>
  <div class="gm-theme-mint gm-theme-solid gm-rounded-sm gm-p-4 gm-scale-90">gm-scale-90</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-translate-y-2">gm-translate-y-2</div>
</div>
```

## Transiciones

| Clase | Qué cambia suave |
| --- | --- |
| `gm-transition` | Colores, sombra, opacidad y movimiento |
| `gm-transition-colors` / `-opacity` / `-transform` / `-shadow` / `-none` | Solo eso |
| `gm-duration-150` … `gm-duration-1000` / `gm-delay-100` … `gm-delay-1000` | Cuánto dura / cuánto espera (en [animaciones](/docs/utilities/animations)) |
| `gm-ease-linear` / `-in` / `-out` / `-in-out` / `-bounce` | Con qué curva (`-bounce` se pasa un poco y vuelve) |

## Cómo se hace: una tarjeta que sube al pasar el ratón

Con las [variantes](/docs/utilities/arbitrary) de los valores libres: se mueve solo si la persona no ha pedido menos movimiento.

```html-code
<a class="gm-card gm-motion-safe:transition-[translate_.2s] gm-hover:translate-[0_-2px]" href="…">…</a>
```

## Accesibilidad

- Si alguien pide menos movimiento, el framework quita las animaciones; para lo que construyas tú, usa `gm-motion-safe:`.
- No muevas el contenido que se está leyendo, y que nada gire o crezca solo sin que la persona haga algo.
