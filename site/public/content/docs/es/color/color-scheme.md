# Esquema de color

Elige el esquema de color de un elemento concreto, para que el navegador pinte a juego sus propias piezas: los controles de formulario nativos, las barras de scroll y el fondo de un `<iframe>`.

| Clase | Estilos |
| --- | --- |
| `.gm-color-scheme-light` | `color-scheme: light;` |
| `.gm-color-scheme-dark` | `color-scheme: dark;` |
| `.gm-color-scheme-auto` | `color-scheme: light dark;` |

GlassMarshmallow ya lo pone por ti: `data-theme="light"` y `data-theme="dark"` ponen el esquema que corresponde. Usa estas clases solo cuando un elemento tenga que ir en un esquema distinto al de la zona que lo rodea.

## Claro y oscuro

Añade `.gm-color-scheme-light` o `.gm-color-scheme-dark` al elemento que lo necesita, no a un contenedor. En el ejemplo, el segundo campo mantiene las piezas claras del navegador dentro de una zona oscura.

```html-code
<div data-theme="dark">
  <!-- El navegador pinta este campo y su selector en modo oscuro -->
  <select>…</select>
  <!-- …y este en modo claro -->
  <select class="gm-color-scheme-light">…</select>
</div>
```

Estas clases solo cambian las piezas que pinta el navegador. No cambian los colores del framework: para poner una zona en modo claro u oscuro, usa `data-theme` (mira [Modo claro y oscuro](/docs/color/color-modes)).

## Seguir la preferencia del sistema

`.gm-color-scheme-auto` deja que el navegador siga la preferencia del sistema en ese elemento, aunque la página fuerce un modo.

```html
<iframe class="gm-color-scheme-auto" src="..."></iframe>
```

## Contenido incrustado

Un documento incrustado no ve el `data-theme` de tu página. Si un contenido incrustado no tiene modo oscuro, el navegador puede pintarle detrás un fondo blanco cuando el sistema está en oscuro. Añade `.gm-color-scheme-light` solo a ese `<iframe>`.

```html
<iframe class="gm-color-scheme-light" src="..."></iframe>
```
