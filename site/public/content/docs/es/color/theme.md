# Tema

Combina una clase de color con una de uso para poner de una vez el fondo, el texto y el borde de cualquier elemento, como las utilidades de tema de Bootstrap.

## Cómo funciona

1. **El color:** `.gm-theme-sky` (celeste), `.gm-theme-blue` (azul), `.gm-theme-lavender` (lavanda), `.gm-theme-pink` (rosa), `.gm-theme-peach` (melocotón), `.gm-theme-lemon` (limón), `.gm-theme-mint` (menta) o `.gm-theme-coral` (coral).
2. **El uso:** `.gm-theme-solid`, `.gm-theme-glass` o `.gm-theme-text`.

Las de negro, blanco y grises funcionan igual: `.gm-theme-white`, de `.gm-theme-gray-100` a `.gm-theme-gray-900` y `.gm-theme-black`.

## Rosa y azul

`.gm-theme-pink-blue` es el **rosa de día y el azul de noche**: el color que usamos para los ejemplos y para lo que se quiere destacar (como el botón «Para agentes» de la portada). Se combina con los mismos usos y también existe como variable: `--gm-pink-blue`.

```html
<div class="gm-flex gm-gap-3 gm-flex-wrap">
  <div class="gm-theme-pink-blue gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-pink-blue .gm-theme-solid</div>
  <div class="gm-theme-pink-blue gm-theme-glass" style="padding: 12px 16px">.gm-theme-pink-blue .gm-theme-glass</div>
</div>
```

Cambia entre el modo claro y el oscuro para verlo pasar de rosa a azul.

## Sólido

`.gm-theme-solid` pinta el pastel de fondo, con el texto negro en modo claro y oscuro.

```html
<div style="display: grid; gap: 10px">
  <div class="gm-theme-sky gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-sky .gm-theme-solid</div>
  <div class="gm-theme-blue gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-blue .gm-theme-solid</div>
  <div class="gm-theme-lavender gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-lavender .gm-theme-solid</div>
  <div class="gm-theme-pink gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-pink .gm-theme-solid</div>
  <div class="gm-theme-peach gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-peach .gm-theme-solid</div>
  <div class="gm-theme-lemon gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-lemon .gm-theme-solid</div>
  <div class="gm-theme-mint gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-mint .gm-theme-solid</div>
  <div class="gm-theme-coral gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-coral .gm-theme-solid</div>
</div>
```

Con los grises, el texto es negro hasta el `gray-500` y blanco desde el `gray-600`:

```html
<div style="display: grid; gap: 10px">
  <div class="gm-theme-white gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-white .gm-theme-solid</div>
  <div class="gm-theme-gray-100 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-100 .gm-theme-solid</div>
  <div class="gm-theme-gray-200 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-200 .gm-theme-solid</div>
  <div class="gm-theme-gray-300 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-300 .gm-theme-solid</div>
  <div class="gm-theme-gray-400 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-400 .gm-theme-solid</div>
  <div class="gm-theme-gray-500 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-500 .gm-theme-solid</div>
  <div class="gm-theme-gray-600 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-600 .gm-theme-solid</div>
  <div class="gm-theme-gray-700 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-700 .gm-theme-solid</div>
  <div class="gm-theme-gray-800 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-800 .gm-theme-solid</div>
  <div class="gm-theme-gray-900 gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-gray-900 .gm-theme-solid</div>
  <div class="gm-theme-black gm-theme-solid" style="padding: 12px 16px; border-radius: 12px">.gm-theme-black .gm-theme-solid</div>
</div>
```

## Vidriado

`.gm-theme-glass` es la versión vidriada: el color al 18 % sobre lo que haya detrás, un borde de 1 px al 41 %, desenfoque de 7 px, esquinas de 21 px y una sombra suave. El texto mantiene el color de la página.

```html
<div style="display: grid; gap: 10px">
  <div class="gm-theme-sky gm-theme-glass" style="padding: 12px 16px">.gm-theme-sky .gm-theme-glass</div>
  <div class="gm-theme-blue gm-theme-glass" style="padding: 12px 16px">.gm-theme-blue .gm-theme-glass</div>
  <div class="gm-theme-lavender gm-theme-glass" style="padding: 12px 16px">.gm-theme-lavender .gm-theme-glass</div>
  <div class="gm-theme-pink gm-theme-glass" style="padding: 12px 16px">.gm-theme-pink .gm-theme-glass</div>
  <div class="gm-theme-peach gm-theme-glass" style="padding: 12px 16px">.gm-theme-peach .gm-theme-glass</div>
  <div class="gm-theme-lemon gm-theme-glass" style="padding: 12px 16px">.gm-theme-lemon .gm-theme-glass</div>
  <div class="gm-theme-mint gm-theme-glass" style="padding: 12px 16px">.gm-theme-mint .gm-theme-glass</div>
  <div class="gm-theme-coral gm-theme-glass" style="padding: 12px 16px">.gm-theme-coral .gm-theme-glass</div>
</div>
```

```html
<div style="display: grid; gap: 10px">
  <div class="gm-theme-white gm-theme-glass" style="padding: 12px 16px">.gm-theme-white .gm-theme-glass</div>
  <div class="gm-theme-gray-100 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-100 .gm-theme-glass</div>
  <div class="gm-theme-gray-200 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-200 .gm-theme-glass</div>
  <div class="gm-theme-gray-300 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-300 .gm-theme-glass</div>
  <div class="gm-theme-gray-400 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-400 .gm-theme-glass</div>
  <div class="gm-theme-gray-500 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-500 .gm-theme-glass</div>
  <div class="gm-theme-gray-600 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-600 .gm-theme-glass</div>
  <div class="gm-theme-gray-700 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-700 .gm-theme-glass</div>
  <div class="gm-theme-gray-800 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-800 .gm-theme-glass</div>
  <div class="gm-theme-gray-900 gm-theme-glass" style="padding: 12px 16px">.gm-theme-gray-900 .gm-theme-glass</div>
  <div class="gm-theme-black gm-theme-glass" style="padding: 12px 16px">.gm-theme-black .gm-theme-glass</div>
</div>
```

## Texto de color

`.gm-theme-text` escribe el texto en el color de la paleta, en un tono más oscuro para que se lea sobre el fondo claro.

```html
<div style="display: grid; gap: 10px">
  <div class="gm-theme-sky gm-theme-text">.gm-theme-sky .gm-theme-text</div>
  <div class="gm-theme-blue gm-theme-text">.gm-theme-blue .gm-theme-text</div>
  <div class="gm-theme-lavender gm-theme-text">.gm-theme-lavender .gm-theme-text</div>
  <div class="gm-theme-pink gm-theme-text">.gm-theme-pink .gm-theme-text</div>
  <div class="gm-theme-peach gm-theme-text">.gm-theme-peach .gm-theme-text</div>
  <div class="gm-theme-lemon gm-theme-text">.gm-theme-lemon .gm-theme-text</div>
  <div class="gm-theme-mint gm-theme-text">.gm-theme-mint .gm-theme-text</div>
  <div class="gm-theme-coral gm-theme-text">.gm-theme-coral .gm-theme-text</div>
</div>
```

