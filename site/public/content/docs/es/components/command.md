# Comando para copiar

Una píldora de cristal con un comando y su botón de copiar, como el `npm install` de la portada de esta web.

## Ejemplo

```html
<div class="gm-command">
  <code class="gm-command__text">npm install glassmarshmallow</code>
  <button type="button" class="gm-btn gm-btn--secondary gm-btn--sm"><i class="gmi gmi-clipboard" aria-hidden="true"></i>Copiar</button>
</div>
```

Copiar lo hace tu código (con `navigator.clipboard.writeText`). Si el comando no cabe, pasa a la línea siguiente en vez de salirse.

## Accesibilidad

- Al copiar, cambia el texto del botón («Copiado») y avísalo también a los lectores de pantalla con una zona `aria-live`.
- El comando se puede seleccionar a mano: si el portapapeles no está disponible, se copia igual.
