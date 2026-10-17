# Tamaños

Ancho, alto y sus mínimos y máximos. Como el [min-width](https://tailwindcss.com/docs/min-width) y el max-width de Tailwind.

## Ancho

| Clase | Valor |
| --- | --- |
| `gm-w-full` | 100 % |
| `gm-w-75` / `gm-w-50` / `gm-w-25` | 75 % / 50 % / 25 % |
| `gm-w-auto` | Lo que necesite |
| `gm-w-fit` | Lo justo para su contenido |

```html
<div class="gm-flex gm-flex-col gm-gap-2">
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-2 gm-w-full">gm-w-full</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-2 gm-w-75">gm-w-75</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-2 gm-w-50">gm-w-50</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-2 gm-w-fit">gm-w-fit</div>
</div>
```

`gm-w-full`, `gm-w-auto` y `gm-w-fit` tienen versión por punto de corte: `gm-w-full gm-md-w-auto`.

## Ancho máximo

Para que un bloque no crezca más de la cuenta. `gm-max-w-prose` (65 caracteres) es el ancho cómodo para leer.

| Clase | Valor | Clase | Valor |
| --- | --- | --- | --- |
| `gm-max-w-xs` | 20 rem | `gm-max-w-xl` | 36 rem |
| `gm-max-w-sm` | 24 rem | `gm-max-w-2xl` | 42 rem |
| `gm-max-w-md` | 28 rem | `gm-max-w-3xl` | 48 rem |
| `gm-max-w-lg` | 32 rem | `gm-max-w-4xl` | 56 rem |
| `gm-max-w-prose` | 65 caracteres | `gm-max-w-full` / `-none` | 100 % / sin límite |

```html
<p class="gm-max-w-prose gm-theme-lemon gm-theme-solid gm-rounded-sm gm-p-3">Este párrafo nunca pasa de 65 caracteres por línea, aunque la pantalla sea muy ancha: es lo que mejor se lee.</p>
```

## Alto y mínimos

| Clase | Valor |
| --- | --- |
| `gm-h-full` / `gm-h-auto` | 100 % / lo que necesite |
| `gm-h-screen` / `gm-min-h-screen` | El alto de la pantalla |
| `gm-min-w-0` / `gm-min-h-0` | Puede encoger por debajo de su contenido |
| `gm-min-w-full` | Al menos el 100 % |

`gm-min-w-0` es la solución cuando un texto largo o un bloque de código desborda una fila de flex o de cuadrícula.
