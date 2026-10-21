# Máscaras y mezcla

Desvanece un elemento hacia un lado o en círculo, y mezcla sus colores con lo que hay detrás. Como en Tailwind.

## Máscaras

| Clase | Qué hace |
| --- | --- |
| `gm-mask-to-t` / `-r` / `-b` / `-l` | Se desvanece hacia arriba, la derecha, abajo o la izquierda |
| `gm-mask-radial` | Se desvanece hacia los bordes, en círculo |
| `gm-mask-from-0%` … `gm-mask-from-90%` | Hasta dónde se ve entero antes de empezar a desvanecerse (0, 25, 50, 60, 70, 75, 80, 90) |
| `gm-mask-none` | Sin máscara |

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap">
  <img class="gm-w-[10rem] gm-rounded-sm gm-mask-to-b gm-mask-from-50%" src="media/album-5.jpg" alt="Portada que se desvanece hacia abajo">
  <img class="gm-w-[10rem] gm-mask-radial gm-mask-from-60%" src="media/album-6.jpg" alt="Portada que se desvanece hacia los bordes">
</div>
```

Una imagen se funde con la página así: arriba y abajo se desvanece para que no se note dónde termina.

## Mezcla de colores

| Clase | Qué hace |
| --- | --- |
| `gm-mix-blend-multiply` / `-screen` / `-overlay` / `-soft-light` / `-hard-light` / `-difference` / `-luminosity` / `-color` / `-normal` | Mezcla el elemento con lo que tiene detrás |
| `gm-bg-blend-…` (los mismos nombres) | Mezcla las capas del fondo de un mismo elemento (una imagen con un degradado) |
| `gm-isolate` | La mezcla de los hijos se queda dentro de este elemento |

```html
<div class="gm-isolate gm-relative gm-rounded-md gm-overflow-hidden gm-h-[8rem] gm-bg-[url(/media/album-7.jpg)] gm-bg-cover gm-bg-center">
  <div class="gm-absolute gm-inset-0 gm-bg-pink gm-mix-blend-multiply"></div>
</div>
```

El efecto TV se construye así: líneas y grano encima del contenido, con `gm-mix-blend-*` para que se noten sin tapar.

## Accesibilidad

- Lo que se desvanece se lee peor: no lo uses en texto que haya que leer.
- Comprueba el contraste del texto después de la mezcla, no antes: los colores cambian.
