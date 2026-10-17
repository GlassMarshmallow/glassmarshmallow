# Código

Para enseñar código: dentro del texto, en una palabra, o en un bloque de varias líneas. Con la fuente de ancho fijo del sistema (`--gm-font-mono`).

## Dentro del texto

Con `<code>`: «Añade la clase `.gm-btn` al botón».

```html
<p>Añade la clase <code>.gm-btn</code> al botón.</p>
```

## Bloque

`.gm-code` en un `<pre>`: fondo gris, esquinas redondeadas y barra de desplazamiento lateral si la línea es muy larga (el texto no se parte).

```html
<pre class="gm-code" tabindex="0"><code>npm install glassmarshmallow
npm run build</code></pre>
```

Si prefieres que las líneas largas bajen a la siguiente en lugar de desplazarse, añade `style="white-space: pre-wrap"`.

## Accesibilidad

- Pon `tabindex="0"` en los bloques que pueden desplazarse de lado, para poder moverlos con el teclado (WCAG 2.1.1).
- Si el bloque es largo, ponle un nombre con `aria-label` («Código de instalación»).
- Texto normal sobre gris: 14:1 (AAA).
