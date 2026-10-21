# Fondo de la web

El color de fondo de la página sale de una variable que cambia sola con el modo claro y oscuro.

## Colores

| Variable | Claro | Oscuro | Para |
| --- | --- | --- | --- |
| `--gm-bg` | `#f5f5f7` | `#000` | Fondo de la página |
| `--gm-surface` | blanco al 82 % | gris oscuro al 82 % | Tarjetas y paneles de cristal |
| `--gm-surface-solid` | `#fff` | `#1c1c1e` | Paneles opacos (menús, ventanas) |

El fondo gris muy claro de día y negro de noche es el del framework: las tarjetas blancas (o grises de noche) destacan sobre él sin necesidad de bordes fuertes.

## Cambiar el fondo

Cambia la variable en los dos modos:

```html-code
<style>
  :root { --gm-bg: #fbfaf7; }
  [data-theme="dark"] { --gm-bg: #0b0b0c; }
</style>
```

Comprueba después el contraste del texto sobre el fondo nuevo: el texto normal necesita 4,5:1 (7:1 para AAA) y el gris secundario también.

## Fondo de luces de la portada

La portada de esta web usa un fondo propio con luces de colores, una cuadrícula de puntos y, de noche, el efecto de televisor antiguo. Ese fondo es de la web, no forma parte del framework. Sus efectos (el de la tele y los que vengan) estarán en **Herramientas › Efectos**, para generarlos y copiarlos.
