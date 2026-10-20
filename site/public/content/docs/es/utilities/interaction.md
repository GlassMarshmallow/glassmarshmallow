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

## Scroll y formularios

| Clase | Qué hace |
| --- | --- |
| `gm-scroll-smooth` / `gm-scroll-auto` | Desplazamiento suave (o normal) al ir a un ancla |
| `gm-scroll-mt-4` … `gm-scroll-mt-24` | Hueco arriba al llegar a un ancla (para que no lo tape una barra fija) |
| `gm-snap-x` / `gm-snap-y` / `gm-snap-proximity` | La caja se detiene en sus hijos al desplazarse (de lado / de arriba abajo / solo si están cerca) |
| `gm-snap-start` / `-center` / `-end` | Dónde se detiene en cada hijo |
| `gm-touch-none` / `gm-touch-manipulation` | Sin gestos táctiles / sin el retraso del doble toque |
| `gm-resize` / `gm-resize-y` / `gm-resize-none` | Si un campo de texto se puede agrandar |
| `gm-accent-sky`, `gm-accent-pink`… | El color de casillas, botones de opción y barras del navegador |
| `gm-caret-pink`, `gm-caret-accent`… | El color del cursor al escribir |

```html
<div class="gm-flex gm-gap-3 gm-overflow-x-auto gm-snap-x gm-max-w-sm gm-pb-2" role="region" aria-label="Fotos" tabindex="0">
  <img class="gm-snap-start gm-w-[8rem] gm-rounded-sm" src="media/album-1.jpg" alt="Portada 1">
  <img class="gm-snap-start gm-w-[8rem] gm-rounded-sm" src="media/album-2.jpg" alt="Portada 2">
  <img class="gm-snap-start gm-w-[8rem] gm-rounded-sm" src="media/album-3.jpg" alt="Portada 3">
  <img class="gm-snap-start gm-w-[8rem] gm-rounded-sm" src="media/album-4.jpg" alt="Portada 4">
</div>
```

## Accesibilidad

- `gm-cursor-pointer` no convierte nada en botón: lo que se pulsa tiene que ser un `<button>` o un `<a>`, para que funcione con el teclado.
- No uses `gm-select-none` en texto que alguien pueda querer copiar (direcciones, precios, códigos).
- Con `gm-pointer-events-none` en algo que parece un botón, nadie podrá usarlo con el ratón: si está desactivado, dilo con `disabled` o `aria-disabled`.
