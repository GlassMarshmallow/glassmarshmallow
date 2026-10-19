# Contorno de texto

`.gm-text-outline` pone, **en modo oscuro**, un contorno negro fino y una sombra difuminada al texto. Sirve para que se lea sobre fondos con luces, imágenes o el efecto de televisor. En modo claro no cambia nada.

## Ejemplo

Así se ve sobre un fondo con luces en modo oscuro:

```html
<div class="gm-grid gm-rounded-sm" data-theme="dark" style="place-items: center; min-height: 10rem; color: #f5f5f7; background: radial-gradient(circle at 30% 40%, #1cabb0, transparent 55%), radial-gradient(circle at 70% 60%, #8c57e9, transparent 55%), #000">
  <p class="gm-text-outline gm-m-0 gm-font-extrabold" style="font-size: 2rem">Se lee sobre las luces</p>
</div>
```

Es el que llevan el título y el texto de la portada de esta web.

## Accesibilidad

- El contorno ayuda a que el texto llegue a su contraste aunque el fondo cambie de un punto a otro (WCAG 1.4.3).
- Aun así, mide el contraste sobre el fondo real (con una captura de pantalla), no solo sobre el color de fondo.
