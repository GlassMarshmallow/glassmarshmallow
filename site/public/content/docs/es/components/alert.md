# Aviso

Un mensaje destacado dentro de la página: información, algo que salió bien, una advertencia o un error. El pastel del estado a media intensidad, con un borde del mismo color, el texto normal y un icono.

## Ejemplos

```html
<div class="gm-grid gm-gap-3">
  <div class="gm-alert"><i class="gmi gmi-info-circle" aria-hidden="true"></i><span>La versión 0.1 todavía no está publicada en npm.</span></div>
  <div class="gm-alert gm-alert--success" role="status"><i class="gmi gmi-check-circle" aria-hidden="true"></i><span>Cambios guardados.</span></div>
  <div class="gm-alert gm-alert--warning"><i class="gmi gmi-exclamation-triangle" aria-hidden="true"></i><span>Te quedan 2 días de prueba.</span></div>
  <div class="gm-alert gm-alert--danger" role="alert"><i class="gmi gmi-x-circle" aria-hidden="true"></i><span>No se ha podido enviar el formulario. Revisa tu conexión e inténtalo otra vez.</span></div>
</div>
```

## Tipos

| Clase | Para | Color |
| --- | --- | --- |
| `.gm-alert` | Información | Gris |
| `.gm-alert--success` | Algo salió bien | Menta |
| `.gm-alert--warning` | Advertencia | Limón |
| `.gm-alert--danger` | Error | Coral |

## Accesibilidad

- El color no basta: el icono y el texto también dicen qué tipo de aviso es («Cambios guardados», «No se ha podido…») (WCAG 1.4.1).
- Si el aviso aparece después de que la persona haga algo, ponle `role="status"` (avisos tranquilos) o `role="alert"` (errores): los lectores de pantalla lo leen sin mover el foco (WCAG 4.1.3).
- El icono es decorativo (`aria-hidden="true"`).
- Texto de 7:1 o más sobre su fondo en los dos modos (AAA).
