# Imágenes y vídeos

La proporción de una caja y cómo llena una imagen o un vídeo su espacio. Como el [aspect-ratio](https://tailwindcss.com/docs/aspect-ratio) y el object-fit de Tailwind.

## Proporción

| Clase | Proporción |
| --- | --- |
| `gm-aspect-square` | 1 : 1 (cuadrada) |
| `gm-aspect-video` | 16 : 9 (la de los vídeos) |
| `gm-aspect-auto` | La suya propia |

La caja guarda su forma aunque cambie el ancho, y el hueco ya está reservado antes de que cargue la imagen: la página no salta al cargar.

## Ajuste

| Clase | La imagen… |
| --- | --- |
| `gm-object-cover` | Llena toda la caja y se recorta lo que sobra |
| `gm-object-contain` | Se ve entera dentro de la caja, aunque sobre espacio |

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap">
  <img class="gm-aspect-square gm-object-cover gm-rounded-sm gm-w-50 gm-max-w-xs" src="media/album-1.jpg" alt="Portada de un álbum (cuadrada, recortada)">
  <img class="gm-aspect-video gm-object-cover gm-rounded-sm gm-w-50 gm-max-w-xs" src="media/album-2.jpg" alt="Portada de un álbum (16:9, recortada)">
</div>
```

## Posición dentro de la caja

`gm-object-center` / `-top` / `-bottom` / `-left` / `-right`: con `gm-object-cover`, qué parte de la imagen se queda a la vista (por ejemplo, `gm-object-top` para no cortar una cara).

## Accesibilidad

- Toda imagen lleva `alt`: lo que se ve en ella, o `alt=""` si es solo de adorno.
- Con `gm-object-cover`, comprueba que lo importante de la imagen (una cara, un texto) no queda fuera del recorte.
