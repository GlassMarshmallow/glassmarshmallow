# Tipografía

GlassMarshmallow usa **Montserrat** para todo el texto y la fuente de ancho fijo del sistema para el código.

## Fuentes

| Variable | Valor | Para |
| --- | --- | --- |
| `--gm-font` | Montserrat (si no carga: la del sistema) | Todo el texto |
| `--gm-font-mono` | `ui-monospace`, SF Mono, Menlo | Código |

Montserrat viene con el framework, en un archivo aparte y **opcional**: `glassmarshmallow-font.css`. Se sirve desde tu propia web, sin Google Fonts: un solo archivo de 35 KB con todos los pesos (300–800) y los caracteres del español. Añádelo junto al CSS del framework y precarga la letra en el `<head>`, para que llegue antes que el primer dibujo de la página y el texto no cambie de letra al cargar:

```html-code
<link rel="preload" href="node_modules/glassmarshmallow/dist/fonts/montserrat-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="node_modules/glassmarshmallow/dist/css/glassmarshmallow-font.min.css">
<link rel="stylesheet" href="node_modules/glassmarshmallow/dist/css/glassmarshmallow.min.css">
```

El CSS busca la letra en `../fonts/`: si copias los archivos a tu proyecto, mantén las carpetas `css` y `fonts` una al lado de la otra. Montserrat tiene licencia [SIL Open Font License](https://openfontlicense.org) (va en `fonts/OFL.txt`): se puede usar gratis, también en proyectos comerciales.

## Tamaños

| Elemento | Tamaño | Peso | Detalles |
| --- | --- | --- | --- |
| `h1` | de 2,3 a 3,2 rem (crece con la pantalla) | 700 | Letras muy juntas (−0,055 em), interlineado 1,1 |
| `h2` | el del navegador (1,5 rem) | 700 | Letras juntas (−0,025 em) |
| `h3` | el del navegador (1,17 rem) | 700 | |
| Texto | 1 rem (16 px) | 400 | Interlineado 1,5 |
| `.gm-small` | 0,84 rem | 400 | |
| `.gm-eyebrow` | 0,9 rem | 600 | Gris |
| Botones | 1 rem (`--sm`: 0,84 rem) | 650 | |
| Código | 0,86 rem | 400 | Fuente de ancho fijo |

En la portada, los títulos `h1` y `h2` pasan a peso 800.

## Cambiar la fuente

No añadas `glassmarshmallow-font.css` (así no se descarga Montserrat) y cambia la variable. Si usas otra fuente, comprueba que se lee bien y que el diseño no se rompe (Montserrat es ancha: otras pueden dejar más hueco).

```html-code
<style>
  :root { --gm-font: "Inter", system-ui, sans-serif; }
</style>
```

## Accesibilidad

- Los tamaños van en `rem`: si la persona aumenta la letra en su navegador, todo crece con ella (WCAG 1.4.4).
- Interlineado de 1,5 en el texto y líneas de 80 caracteres como mucho (WCAG 1.4.8 y 1.4.12).
- El texto no se justifica: los huecos entre palabras dificultan la lectura.
