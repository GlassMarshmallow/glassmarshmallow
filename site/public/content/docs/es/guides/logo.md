# Cómo se hizo el logo

El logo de GlassMarshmallow son **dos malvaviscos de cristal**: dos paneles blandos, de esquinas muy redondeadas, uno delante del otro, sobre una baldosa de cristal. Está hecho con el propio framework: sus colores salen de las [herramientas](/tools) de esta web y su forma, de las utilidades. El SVG que se usa en la web (`logo.svg`) se genera a partir de ese mismo código.

## El logo, hecho con clases

A la izquierda, el logo hecho solo con clases de GlassMarshmallow; a la derecha, el SVG. Son iguales: comparados píxel a píxel, la diferencia media es de medio punto sobre 255.

```html
<div class="gm-d-flex gm-flex-wrap gm-gap-8 gm-items-end">
  <figure class="gm-m-0 gm-d-grid gm-gap-2 gm-justify-items-center">
    <div class="gm-glass-logo gm-w-[12rem]">
      <div class="gm-relative gm-aspect-square gm-[container-type:inline-size] gm-rounded-[22.265625%] gm-bg-[linear-gradient(180deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.16)_100%)] gm-before:[position:absolute] gm-before:inset-[0] gm-before:rounded-[inherit] gm-before:p-[0.976562cqw] gm-before:bg-[linear-gradient(135deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.6)_100%)] gm-before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] gm-before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] gm-before:[-webkit-mask-composite:xor]" role="img" aria-label="GlassMarshmallow">
        <span class="gm-absolute gm-start-[23.4375%] gm-top-[23.4375%] gm-w-[37.1094%] gm-h-[37.1094%] gm-rounded-[23.1579%] gm-bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_50%),linear-gradient(45deg,#3cd2ff_0%,#8c64ff_100%)] gm-before:[position:absolute] gm-before:inset-[-0.488281cqw] gm-before:rounded-[23.8462%] gm-before:p-[0.976562cqw] gm-before:bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.25)_100%)] gm-before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] gm-before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] gm-before:[-webkit-mask-composite:xor]"></span>
        <span class="gm-absolute gm-start-[39.4531%] gm-top-[39.4531%] gm-w-[37.1094%] gm-h-[37.1094%] gm-rounded-[23.1579%] gm-bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_50%),linear-gradient(45deg,rgba(140,100,255,0.85)_0%,rgba(255,150,70,0.85)_100%)] gm-before:[position:absolute] gm-before:inset-[-0.488281cqw] gm-before:rounded-[23.8462%] gm-before:p-[0.976562cqw] gm-before:bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.25)_100%)] gm-before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] gm-before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] gm-before:[-webkit-mask-composite:xor]"></span>
      </div>
    </div>
    <figcaption class="gm-small gm-muted">Con clases</figcaption>
  </figure>
  <figure class="gm-m-0 gm-d-grid gm-gap-2 gm-justify-items-center">
    <img class="gm-glass-logo gm-w-[12rem]" src="/logo.svg" alt="" width="192" height="192">
    <figcaption class="gm-small gm-muted">SVG</figcaption>
  </figure>
</div>
```

## Los colores, con las herramientas

Cada degradado del logo se ha sacado con una herramienta y se ha copiado tal cual:

| Pieza | Herramienta | Cómo se configura |
| --- | --- | --- |
| Relleno de la baldosa | [Degradado de un color](/tools/single-color-gradient) | Blanco, lineal, 180°, opacidad del 42 % al 16 %, extensión 100 % |
| Brillo de cada panel | [Degradado de un color](/tools/single-color-gradient) | Blanco, lineal, 180°, opacidad del 55 % al 0 %, extensión 50 % |
| Borde de luz de cada panel | [Degradado de un color](/tools/single-color-gradient) | Blanco, lineal, 135°, opacidad del 95 % al 25 %, extensión 100 % |
| Panel de atrás | [Generador de degradados](/tools/gradient-generator) | 45°, `#3cd2ff` en 0 % y `#8c64ff` en 100 % |
| Panel de delante | [Generador de degradados](/tools/gradient-generator) | 45°, `#8c64ff` y `#ff9646` con opacidad del 85 % |
| Borde de luz de la baldosa | [Generador de degradados](/tools/gradient-generator) | 135°, blanco al 90 % en 0 %, al 25 % en 50 % y al 60 % en 100 % |

Los tres colores (cian, violeta y ámbar) son las tres luces que dan su aspecto a GlassMarshmallow.

## La forma, con las utilidades

1. **La baldosa:** `gm-aspect-square` (cuadrada), `gm-rounded-[22.265625%]` (la curva) y su relleno con `gm-bg-[…]`.
2. **Su borde de luz:** una capa `gm-before:` con el degradado y una máscara que solo deja ver el contorno (`gm-before:[mask:…]`). Así el borde tiene su propio degradado sin tapar el cristal.
3. **Los dos paneles:** `gm-absolute`, con su sitio y su tamaño en %, sus esquinas (`gm-rounded-[23.1579%]`) y dos degradados juntos en `gm-bg-[…]`: el brillo encima y el color debajo.
4. **Los bordes de los paneles:** igual que el de la baldosa, con `gm-before:` y la máscara.
5. **Que escale:** las medidas van en % y en `cqw`, centésimas del ancho del logo (por eso la baldosa lleva `gm-[container-type:inline-size]`). El mismo código sirve a 32 px y a 512 px; solo hay que cambiar el ancho del contenedor (`gm-w-[12rem]`).

Las clases con corchetes son [valores libres](/docs/utilities/arbitrary): las escribe `npx glassmarshmallow build`.

## De día y de noche, el mismo código

El código es exactamente el mismo en modo claro y oscuro. Lo que cambia lo pone el framework, a través de `gm-glass-logo`:

| | Modo claro | Modo oscuro |
| --- | --- | --- |
| El logo (baldosa, paneles, degradados, brillos y bordes) | igual | igual |
| Lo que se ve a través del cristal | el fondo claro: la baldosa se ve casi blanca | el fondo negro: se ve gris oscuro |
| `gm-glass-logo` | un borde blanco fino y la sombra mediana, para separarlo del fondo | nada: el cristal ya se distingue solo |

## El SVG, desde el código

`logo.svg` (el de la barra, el favicon y las imágenes para compartir) lo escribe el script `site/brand/logo/desde-el-framework.mjs` a partir de los mismos degradados que copian las herramientas y las mismas medidas. Es idéntico al logo hecho con clases.

## El código completo

```html-code
<div class="gm-glass-logo gm-w-[12rem]">
  <div class="gm-relative gm-aspect-square gm-[container-type:inline-size] gm-rounded-[22.265625%] gm-bg-[linear-gradient(180deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.16)_100%)] gm-before:[position:absolute] gm-before:inset-[0] gm-before:rounded-[inherit] gm-before:p-[0.976562cqw] gm-before:bg-[linear-gradient(135deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.6)_100%)] gm-before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] gm-before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] gm-before:[-webkit-mask-composite:xor]" role="img" aria-label="GlassMarshmallow">
    <span class="gm-absolute gm-start-[23.4375%] gm-top-[23.4375%] gm-w-[37.1094%] gm-h-[37.1094%] gm-rounded-[23.1579%] gm-bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_50%),linear-gradient(45deg,#3cd2ff_0%,#8c64ff_100%)] gm-before:[position:absolute] gm-before:inset-[-0.488281cqw] gm-before:rounded-[23.8462%] gm-before:p-[0.976562cqw] gm-before:bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.25)_100%)] gm-before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] gm-before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] gm-before:[-webkit-mask-composite:xor]"></span>
    <span class="gm-absolute gm-start-[39.4531%] gm-top-[39.4531%] gm-w-[37.1094%] gm-h-[37.1094%] gm-rounded-[23.1579%] gm-bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_50%),linear-gradient(45deg,rgba(140,100,255,0.85)_0%,rgba(255,150,70,0.85)_100%)] gm-before:[position:absolute] gm-before:inset-[-0.488281cqw] gm-before:rounded-[23.8462%] gm-before:p-[0.976562cqw] gm-before:bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.25)_100%)] gm-before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] gm-before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] gm-before:[-webkit-mask-composite:xor]"></span>
  </div>
</div>
```
