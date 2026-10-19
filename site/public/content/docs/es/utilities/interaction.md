# Interacción y visibilidad

Cómo responde un elemento al ratón y si se ve o no. Como el [cursor](https://tailwindcss.com/docs/cursor), el pointer-events, el user-select y el visibility de Tailwind.

## Cursor

| Clase | Cursor |
| --- | --- |
| `gm-cursor-pointer` | La mano, como en los enlaces |
| `gm-cursor-default` | La flecha |
| `gm-cursor-not-allowed` | Prohibido, para algo que ahora no se puede usar |

## Toques y selección

| Clase | Hace |
| --- | --- |
| `gm-pointer-events-none` | El elemento no recibe el ratón ni los toques: pasan al de debajo (adornos encima de un botón) |
| `gm-pointer-events-auto` | Vuelve a recibirlos (un hijo dentro de un `pointer-events-none`) |
| `gm-select-none` | No se puede seleccionar el texto (botones, iconos) |
| `gm-select-all` | Un clic selecciona todo el texto (códigos para copiar) |

```html
<p class="gm-m-0">Tu código: <code class="gm-select-all">GM-2026-SARA</code> (un clic lo selecciona entero)</p>
```

## Visibilidad

| Clase | Hace |
| --- | --- |
| `gm-invisible` | No se ve, pero sigue ocupando su sitio (y tampoco lo leen los lectores de pantalla) |
| `gm-visible` | Vuelve a verse |

Para que no ocupe sitio, usa [`gm-hidden`](/docs/utilities/display); para esconderlo solo a la vista, [`gm-visually-hidden`](/docs/helpers/visually-hidden).

```html
<div class="gm-flex gm-gap-2">
  <span class="gm-tag gm-theme-mint gm-theme-solid">Uno</span>
  <span class="gm-tag gm-theme-mint gm-theme-solid gm-invisible">Dos</span>
  <span class="gm-tag gm-theme-mint gm-theme-solid">Tres</span>
</div>
```

## Accesibilidad

- `gm-cursor-pointer` no convierte nada en botón: lo que se pulsa tiene que ser un `<button>` o un `<a>`, para que funcione con el teclado.
- No uses `gm-select-none` en texto que alguien pueda querer copiar (direcciones, precios, códigos).
- Con `gm-pointer-events-none` en algo que parece un botón, nadie podrá usarlo con el ratón: si está desactivado, dilo con `disabled` o `aria-disabled`.
