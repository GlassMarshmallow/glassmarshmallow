# Color de texto

Cambia el color del texto con una clase. Cada color usa su tono de texto, que se lee en modo claro y oscuro.

## Paleta

```html
<div class="gm-grid gm-gap-2">
  <div class="gm-text-sky">.gm-text-sky</div>
  <div class="gm-text-blue">.gm-text-blue</div>
  <div class="gm-text-lavender">.gm-text-lavender</div>
  <div class="gm-text-pink">.gm-text-pink</div>
  <div class="gm-text-peach">.gm-text-peach</div>
  <div class="gm-text-lemon">.gm-text-lemon</div>
  <div class="gm-text-mint">.gm-text-mint</div>
  <div class="gm-text-coral">.gm-text-coral</div>
</div>
```

## Negro, blanco y grises

Los grises demasiado claros para leerse en modo claro usan `gray-600`, y los demasiado oscuros en modo oscuro usan `gray-500`, así que el texto siempre se lee.

```html
<div class="gm-grid gm-gap-2">
  <div class="gm-text-white">.gm-text-white</div>
  <div class="gm-text-gray-100">.gm-text-gray-100</div>
  <div class="gm-text-gray-200">.gm-text-gray-200</div>
  <div class="gm-text-gray-300">.gm-text-gray-300</div>
  <div class="gm-text-gray-400">.gm-text-gray-400</div>
  <div class="gm-text-gray-500">.gm-text-gray-500</div>
  <div class="gm-text-gray-600">.gm-text-gray-600</div>
  <div class="gm-text-gray-700">.gm-text-gray-700</div>
  <div class="gm-text-gray-800">.gm-text-gray-800</div>
  <div class="gm-text-gray-900">.gm-text-gray-900</div>
  <div class="gm-text-black">.gm-text-black</div>
</div>
```

## Texto de la página

Los tres colores de texto de la interfaz, que cambian con el modo claro y oscuro.

```html
<div class="gm-grid gm-gap-2">
  <div class="gm-text-body">.gm-text-body</div>
  <div class="gm-text-secondary">.gm-text-secondary</div>
  <div class="gm-text-muted">.gm-text-muted</div>
</div>
```

## Accesibilidad

- Todas las clases `.gm-text-*` llegan al menos a 4,5:1 sobre el fondo de la página (AA).
- No uses solo el color para dar un significado: añade una palabra o un icono.
