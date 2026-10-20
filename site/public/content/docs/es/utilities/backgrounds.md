# Fondos

Cómo se coloca una imagen o un [degradado](/docs/utilities/gradients) de fondo. El color de fondo está en [Color de fondo](/docs/color/background).

| Clase | Qué hace |
| --- | --- |
| `gm-bg-cover` / `gm-bg-contain` / `gm-bg-auto` | Llena la caja recortando / se ve entera / su tamaño |
| `gm-bg-center` / `-top` / `-bottom` / `-left` / `-right` | Dónde se coloca |
| `gm-bg-repeat` / `-no-repeat` / `-repeat-x` / `-repeat-y` | Si se repite (y hacia dónde) |
| `gm-bg-fixed` / `-local` / `-scroll` | Si se queda quieta al hacer scroll |
| `gm-bg-clip-border` / `-padding` / `-content` | Hasta dónde llega el fondo (borde, relleno o contenido) |
| `gm-bg-clip-text` | El fondo se ve solo a través de las letras |

La imagen, con un [valor libre](/docs/utilities/arbitrary): `gm-bg-[url(/img/foto.jpg)]`.

```html
<div class="gm-bg-[url(/media/album-4.jpg)] gm-bg-cover gm-bg-center gm-rounded-md gm-h-[10rem]" role="img" aria-label="Portada de un álbum"></div>
```

## Cómo se hace: un patrón de cuadros

Dos degradados que se repiten: el de los generadores para ver la transparencia.

```html
<div class="gm-bg-[repeating-conic-gradient(#d6d6da_0_25%,#f5f5f7_0_50%)] gm-bg-[length:1.5rem_1.5rem] gm-rounded-md gm-h-[8rem]"></div>
```

## Accesibilidad

- Una imagen de fondo no la ven los lectores de pantalla: si dice algo, ponle `role="img"` y un `aria-label`, o usa un `<img>` con `alt`.
- Con `gm-bg-clip-text` las letras son el fondo: comprueba que se leen (4,5:1) en todo el texto.
