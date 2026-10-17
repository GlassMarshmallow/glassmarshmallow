# Tipografía

GlassMarshmallow usa **Montserrat** para todo el texto y la fuente de ancho fijo del sistema para el código.

## Fuentes

| Variable | Valor | Para |
| --- | --- | --- |
| `--gm-font` | Montserrat (si no carga: la del sistema) | Todo el texto |
| `--gm-font-mono` | `ui-monospace`, SF Mono, Menlo | Código |

Montserrat viene de Google Fonts. Cárgala en el `<head>` con los pesos que usa el framework:

```html-code
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

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

Cambia la variable. Si usas otra fuente, comprueba que se lee bien y que el diseño no se rompe (Montserrat es ancha: otras pueden dejar más hueco).

```html-code
<style>
  :root { --gm-font: "Inter", system-ui, sans-serif; }
</style>
```

## Accesibilidad

- Los tamaños van en `rem`: si la persona aumenta la letra en su navegador, todo crece con ella (WCAG 1.4.4).
- Interlineado de 1,5 en el texto y líneas de 80 caracteres como mucho (WCAG 1.4.8 y 1.4.12).
- El texto no se justifica: los huecos entre palabras dificultan la lectura.
