# Filtros

Cambian cómo se ve un elemento (desenfocado, más brillante, en gris…) o lo que se ve **detrás** de él. Se pueden juntar: `gm-brightness-110 gm-saturate-150`. Como los de Tailwind.

## Del propio elemento

| Clase | Qué hace |
| --- | --- |
| `gm-filter-blur-sm` / `-md` / `-lg` / `-xl` | Desenfoca el elemento (4, 12, 24 y 48 px) |
| `gm-brightness-50` … `gm-brightness-150` | Más oscuro o más claro (50, 75, 90, 95, 100, 105, 110, 125, 150 %) |
| `gm-contrast-50` … `gm-contrast-150` | Menos o más contraste |
| `gm-saturate-0` … `gm-saturate-200` | Menos o más color (`0`: en gris) |
| `gm-grayscale` / `gm-grayscale-0` | En gris / con su color |
| `gm-invert` / `gm-sepia` | Colores invertidos / tono sepia |
| `gm-drop-shadow-sm` / `gm-drop-shadow` / `gm-drop-shadow-lg` | Sombra con la forma del contenido (iconos, imágenes con transparencia) |
| `gm-filter-none` | Sin filtros |

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap gm-items-center">
  <img class="gm-rounded-sm gm-w-[6rem]" src="media/album-3.jpg" alt="Portada original">
  <img class="gm-rounded-sm gm-w-[6rem] gm-grayscale" src="media/album-3.jpg" alt="Portada en gris">
  <img class="gm-rounded-sm gm-w-[6rem] gm-brightness-125 gm-saturate-150" src="media/album-3.jpg" alt="Portada más clara y con más color">
  <img class="gm-rounded-sm gm-w-[6rem] gm-filter-blur-sm" src="media/album-3.jpg" alt="Portada desenfocada">
</div>
```

## Cómo se hace: luces difuminadas

Las luces de colores de los generadores son círculos con un desenfoque grande:

```html
<div class="gm-relative gm-overflow-hidden gm-rounded-md gm-h-[12rem] gm-bg-[#1b2a4a]">
  <span class="gm-absolute gm-top-[15%] gm-start-[10%] gm-w-[8rem] gm-h-[8rem] gm-rounded-full gm-bg-sky gm-filter-blur-lg"></span>
  <span class="gm-absolute gm-bottom-[10%] gm-end-[15%] gm-w-[10rem] gm-h-[10rem] gm-rounded-full gm-bg-lavender gm-filter-blur-lg"></span>
</div>
```

## De lo que hay detrás

Necesitan un fondo algo transparente para notarse: así se construye el [cristal](/docs/utilities/effects).

| Clase | Qué hace |
| --- | --- |
| `gm-backdrop-blur-sm` / `-md` / `-lg` / `-xl` | Desenfoca lo de detrás (7, 12, 20 y 32 px; `gm-blur-*` es lo mismo con el nombre corto) |
| `gm-backdrop-saturate-100` … `gm-backdrop-saturate-200` | Más color en lo de detrás (el cristal de iOS usa 180) |
| `gm-backdrop-brightness-75` … `gm-backdrop-brightness-125` | Más oscuro o más claro lo de detrás |

```html-code
<div class="gm-bg-[rgb(255_255_255_/_.4)] gm-backdrop-blur-lg gm-backdrop-saturate-180 gm-rounded-md gm-p-6">Cristal hecho con piezas</div>
```

## Accesibilidad

- No pongas texto sobre algo desenfocado o con poco contraste sin comprobar que se lee (4,5:1).
- `gm-grayscale` o `gm-saturate-0` sirven para mostrar algo desactivado, pero dilo también con texto o con `disabled`: el color solo no basta.
