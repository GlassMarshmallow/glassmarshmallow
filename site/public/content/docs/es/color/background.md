# Fondo

Pinta el fondo de cualquier elemento con una clase. A diferencia de Bootstrap, cada clase de fondo pone también el color de texto que se lee encima, así que el resultado siempre cumple AA.

## Paleta

El pastel sólido, con el texto negro en modo claro y oscuro.

```html
<div class="gm-grid gm-gap-2">
  <div class="gm-bg-sky gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-sky</div>
  <div class="gm-bg-blue gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-blue</div>
  <div class="gm-bg-lavender gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-lavender</div>
  <div class="gm-bg-pink gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-pink</div>
  <div class="gm-bg-peach gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-peach</div>
  <div class="gm-bg-lemon gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-lemon</div>
  <div class="gm-bg-mint gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-mint</div>
  <div class="gm-bg-coral gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-coral</div>
</div>
```

## Negro, blanco y grises

Texto negro hasta el `gray-500` y blanco desde el `gray-600`.

```html
<div class="gm-grid gm-gap-2">
  <div class="gm-bg-white gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-white</div>
  <div class="gm-bg-gray-100 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-100</div>
  <div class="gm-bg-gray-200 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-200</div>
  <div class="gm-bg-gray-300 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-300</div>
  <div class="gm-bg-gray-400 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-400</div>
  <div class="gm-bg-gray-500 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-500</div>
  <div class="gm-bg-gray-600 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-600</div>
  <div class="gm-bg-gray-700 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-700</div>
  <div class="gm-bg-gray-800 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-800</div>
  <div class="gm-bg-gray-900 gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-gray-900</div>
  <div class="gm-bg-black gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-black</div>
</div>
```

Las escalas también tienen `gray-025`, `gray-050`, `gray-950` y `gray-975` (`.gm-bg-gray-025`…).

## Fondos de la interfaz

Siguen el modo claro y oscuro: el fondo de la página, el de las tarjetas y paneles, y sin fondo.

```html
<div class="gm-grid gm-gap-2">
  <div class="gm-bg-body gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-body</div>
  <div class="gm-bg-surface gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-surface</div>
  <div class="gm-bg-transparent gm-py-3 gm-px-4 gm-rounded-sm">.gm-bg-transparent</div>
</div>
```

## Fondo vidriado

Para la versión vidriada, usa las clases de [Tema](/docs/color/theme): `.gm-theme-sky .gm-theme-glass`.
