# Texto oculto

`.gm-visually-hidden` esconde un texto a la vista pero lo deja para los lectores de pantalla. Sirve para dar contexto que se ve por el diseño pero no se lee.

## Ejemplo

Un botón solo con icono: la persona que ve, ve la cruz; la que usa lector de pantalla oye «Borrar la foto».

```html
<button type="button" class="gm-icon-btn">
  <i class="gmi gmi-x-lg" aria-hidden="true"></i>
  <span class="gm-visually-hidden">Borrar la foto</span>
</button>
```

## Cuándo usarlo

- Etiquetas de campos que se entienden por el diseño (un buscador con la lupa).
- Títulos de secciones que no se ven pero ayudan a moverse con el lector de pantalla.
- Mensajes que se anuncian (`aria-live`) sin ocupar sitio.

## Cuándo no

- Para esconder algo a todo el mundo: usa `hidden` o `display: none`.
- Para esconder algo solo a los lectores de pantalla (un icono decorativo): usa `aria-hidden="true"`.
- Si el texto ayudaría a todos, mejor que se vea.
