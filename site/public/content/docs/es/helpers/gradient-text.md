# Texto con degradado

Pinta un texto con el degradado de colores del framework. De noche pasa a color liso, para que se lea bien sobre fondo oscuro.

## Ejemplo

```html
<p class="gm-font-bold gm-m-0" style="font-size: 1.4rem">Hecho con <span class="gm-gradient-text">GlassMarshmallow</span></p>
<h2 class="gm-gradient-title gm-mt-2 gm-mx-0 gm-mb-0">Título con degradado</h2>
```

## Dos versiones

| Clase | Para | Degradado |
| --- | --- | --- |
| `.gm-gradient-text` | Texto de cualquier tamaño | Tonos oscuros, cada uno de 7:1 o más (AAA) |
| `.gm-gradient-title` | Títulos grandes (24 px o más) | Los colores vivos del logo, de 3:1 o más |

De noche, `.gm-gradient-text` va en azul y `.gm-gradient-title` en el color del texto.

## Accesibilidad

- El degradado no se puede medir punto por punto: por eso el de texto usa solo tonos que cumplen AAA por separado.
- Con el alto contraste del sistema activado, el texto pasa al color del sistema.
- No lo uses en párrafos largos: es para destacar unas palabras o un título.
