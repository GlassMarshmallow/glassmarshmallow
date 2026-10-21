# Introducción

GlassMarshmallow es un framework CSS con superficies de cristal, modo claro y oscuro y accesibilidad WCAG 2.2 AA (y AAA siempre que se puede) desde el primer componente.

> **GlassMarshmallow está en desarrollo (v0.2).** La documentación crece página a página junto con el framework.

## Qué incluye

- **Variables de diseño**: colores (la paleta pastel con sus escalas), tipografía, radios, sombras y cristal como variables CSS con el prefijo `--gm-`.
- **Estilos base**: textos, títulos, un foco siempre visible, «Saltar al contenido» y reglas de accesibilidad AAA ya puestas.
- **Maquetación**: contenedores, puntos de corte y una cuadrícula de 12 columnas.
- **Componentes**: botones, tarjetas, avisos, etiquetas, acordeón, carrusel, galería, imagen de perfil, menú, buscador, tooltip, reproductor de vídeo, barra de progreso, barra de navegación y barra de pestañas del móvil.
- **Formularios**: campos, segmentado, barra deslizante, selector de fecha, selector de color y las reglas para hacer buenos formularios.
- **Utilidades** al estilo Tailwind: espaciado, tamaños, bordes, sombras, efectos de cristal, animaciones, flex y mostrar u ocultar.
- **Scripts opcionales**, sin dependencias, para los componentes que se mueven (menú, calendario, carrusel, reproductor…).
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

Todos los componentes cumplen **WCAG 2.2 AA** en modo claro y oscuro, y casi todo llega a **AAA**: el texto llega a 7:1, todo lo que se pulsa mide 44 px, el foco siempre se ve y todo se puede usar solo con el teclado. Más en [Accesibilidad](/docs/getting-started/accessibility).

## Siguientes pasos

- [Instala GlassMarshmallow](/docs/getting-started/install) con un gestor de paquetes o desde un CDN.
- Lee el [enfoque](/docs/getting-started/approach) del framework y las [guías de experiencia de usuario](/docs/guides/ux).
- Prueba las [herramientas](/tools): generadores de cristal, degradados, filtros y paletas, y el efecto de televisor.
