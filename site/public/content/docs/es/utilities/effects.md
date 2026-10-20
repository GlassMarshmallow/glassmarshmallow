# Efectos

Cristal, desenfoque del fondo y opacidad: lo que da a GlassMarshmallow su aspecto.

## Cristal

`gm-glass` convierte cualquier bloque en una superficie de cristal: fondo translúcido, borde fino y lo de detrás desenfocado. Es el mismo cristal de las tarjetas.

```html
<div class="gm-p-6 gm-rounded-md" style="background: radial-gradient(circle at 25% 40%, #5cdfeb, transparent 50%), radial-gradient(circle at 75% 60%, #b9a3ff, transparent 50%)">
  <div class="gm-glass gm-rounded-md gm-p-6 gm-max-w-sm">Cristal sobre colores</div>
</div>
```

## Desenfoque del fondo

`gm-blur-sm` (7 px, el de tu vidriado), `-md` (12 px), `-lg` (20 px) y `-xl` (32 px) desenfocan lo que hay detrás del bloque. Necesitan un fondo algo transparente para notarse.

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap gm-p-6 gm-rounded-md" style="background: repeating-linear-gradient(45deg, #ffa6d1 0 12px, #8ab4ff 12px 24px)">
  <div class="gm-blur-sm gm-rounded-sm gm-p-4" style="background: rgb(255 255 255 / .3)">sm</div>
  <div class="gm-blur-md gm-rounded-sm gm-p-4" style="background: rgb(255 255 255 / .3)">md</div>
  <div class="gm-blur-lg gm-rounded-sm gm-p-4" style="background: rgb(255 255 255 / .3)">lg</div>
  <div class="gm-blur-xl gm-rounded-sm gm-p-4" style="background: rgb(255 255 255 / .3)">xl</div>
</div>
```

Para generar tu propio cristal con otros valores, usa el [generador de cristal](/tools/glass-generator), o constrúyelo con los [filtros del fondo](/docs/utilities/filters) (`gm-backdrop-blur-*`, `gm-backdrop-saturate-*`).

## Opacidad

`gm-opacity-0`, `-25`, `-50`, `-75` y `-100`.

```html
<div class="gm-flex gm-gap-4">
  <div class="gm-grid gm-gap-1 gm-text-center"><div class="gm-theme-pink-blue gm-theme-solid gm-rounded-sm gm-opacity-100" style="width: 4rem; height: 3rem"></div><span class="gm-small">100</span></div>
  <div class="gm-grid gm-gap-1 gm-text-center"><div class="gm-theme-pink-blue gm-theme-solid gm-rounded-sm gm-opacity-75" style="width: 4rem; height: 3rem"></div><span class="gm-small">75</span></div>
  <div class="gm-grid gm-gap-1 gm-text-center"><div class="gm-theme-pink-blue gm-theme-solid gm-rounded-sm gm-opacity-50" style="width: 4rem; height: 3rem"></div><span class="gm-small">50</span></div>
  <div class="gm-grid gm-gap-1 gm-text-center"><div class="gm-theme-pink-blue gm-theme-solid gm-rounded-sm gm-opacity-25" style="width: 4rem; height: 3rem"></div><span class="gm-small">25</span></div>
</div>
```

## Accesibilidad

- El texto sobre cristal tiene que llegar a su contraste con lo que hay detrás en el peor punto: mídelo sobre una captura.
- Bajar la opacidad baja el contraste del texto: no la uses en texto que haya que leer.
