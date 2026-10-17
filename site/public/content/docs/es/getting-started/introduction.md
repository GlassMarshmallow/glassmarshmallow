# Introducción

GlassMarshmallow es un framework CSS con superficies de cristal, modo claro y oscuro y accesibilidad WCAG 2.2 AA desde el primer componente.

> **GlassMarshmallow está en desarrollo (v0.1).** La documentación crece página a página junto con el framework.

## Qué incluye

- **Variables de diseño**: colores, tipografía, radios, sombras y cristal como variables CSS con el prefijo `--gm-`.
- **Estilos base**: tipografía, un foco siempre visible, el enlace «Saltar al contenido» y ayudantes como `gm-visually-hidden`.
- **Componentes**: botones, tarjetas, campos, avisos, etiquetas, la barra de navegación y la barra de pestañas del móvil.
- **Fondo**: luces de color, una cuadrícula de puntos y un efecto de televisor antiguo, en modo claro y oscuro.
- **Iconos**: en su propio paquete, [GlassMarshmallow Icons](/icons), con los mismos nombres que Bootstrap Icons.

## Empezar rápido

Copia esta página para empezar. Carga GlassMarshmallow y elige el modo de color con `data-theme` en `<html>`.

```html
<!doctype html>
<html lang="es" data-theme="light">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hola, GlassMarshmallow</title>
    <link rel="stylesheet" href="node_modules/glassmarshmallow/dist/css/glassmarshmallow.min.css">
  </head>
  <body>
    <main class="gm-container">
      <h1>¡Hola, mundo!</h1>
      <button type="button" class="gm-btn">Empezar</button>
    </main>
  </body>
</html>
```

## Accesibilidad

Todos los componentes cumplen **WCAG 2.2 AA** en modo claro y oscuro: el texto tiene un contraste mínimo de 4,5:1, el foco siempre se ve y todo se puede usar solo con el teclado.

## Siguientes pasos

- [Instala GlassMarshmallow](/docs/getting-started/install) con un gestor de paquetes o desde un CDN.
- Prueba las herramientas: [generador de cristal](/docs/tools/glass-generator), [generador de degradados](/docs/tools/gradient-generator) y [degradado de un color](/docs/tools/single-color-gradient).
