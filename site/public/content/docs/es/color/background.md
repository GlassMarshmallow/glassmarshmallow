# Fondo

Pinta el fondo de cualquier elemento con una clase. A diferencia de Bootstrap, cada clase de fondo pone también el color de texto que se lee encima, así que el resultado siempre cumple AA.

## Paleta

El pastel sólido, con el texto negro en modo claro y oscuro.

```html
<div style="display: grid; gap: 8px">
  <div class="gm-bg-sky" style="padding: 12px 16px; border-radius: 12px">.gm-bg-sky</div>
  <div class="gm-bg-blue" style="padding: 12px 16px; border-radius: 12px">.gm-bg-blue</div>
  <div class="gm-bg-lavender" style="padding: 12px 16px; border-radius: 12px">.gm-bg-lavender</div>
  <div class="gm-bg-pink" style="padding: 12px 16px; border-radius: 12px">.gm-bg-pink</div>
  <div class="gm-bg-peach" style="padding: 12px 16px; border-radius: 12px">.gm-bg-peach</div>
  <div class="gm-bg-lemon" style="padding: 12px 16px; border-radius: 12px">.gm-bg-lemon</div>
  <div class="gm-bg-mint" style="padding: 12px 16px; border-radius: 12px">.gm-bg-mint</div>
  <div class="gm-bg-coral" style="padding: 12px 16px; border-radius: 12px">.gm-bg-coral</div>
</div>
```

## Negro, blanco y grises

Texto negro hasta el `gray-500` y blanco desde el `gray-600`.

```html
<div style="display: grid; gap: 8px">
  <div class="gm-bg-white" style="padding: 12px 16px; border-radius: 12px">.gm-bg-white</div>
  <div class="gm-bg-gray-100" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-100</div>
  <div class="gm-bg-gray-200" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-200</div>
  <div class="gm-bg-gray-300" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-300</div>
  <div class="gm-bg-gray-400" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-400</div>
  <div class="gm-bg-gray-500" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-500</div>
  <div class="gm-bg-gray-600" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-600</div>
  <div class="gm-bg-gray-700" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-700</div>
  <div class="gm-bg-gray-800" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-800</div>
  <div class="gm-bg-gray-900" style="padding: 12px 16px; border-radius: 12px">.gm-bg-gray-900</div>
  <div class="gm-bg-black" style="padding: 12px 16px; border-radius: 12px">.gm-bg-black</div>
</div>
```

Las escalas también tienen `gray-025`, `gray-050`, `gray-950` y `gray-975` (`.gm-bg-gray-025`…).

## Fondos de la interfaz

Siguen el modo claro y oscuro: el fondo de la página, el de las tarjetas y paneles, y sin fondo.

```html
<div style="display: grid; gap: 8px">
  <div class="gm-bg-body" style="padding: 12px 16px; border-radius: 12px">.gm-bg-body</div>
  <div class="gm-bg-surface" style="padding: 12px 16px; border-radius: 12px">.gm-bg-surface</div>
  <div class="gm-bg-transparent" style="padding: 12px 16px; border-radius: 12px">.gm-bg-transparent</div>
</div>
```

## Fondo vidriado

Para la versión vidriada, usa las clases de [Tema](/docs/color/theme): `.gm-theme-sky .gm-theme-glass`.
