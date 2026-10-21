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

## Líneas largas

`gm-code--wrap` hace que las líneas largas pasen a la siguiente en vez de desplazarse de lado: para código generado con valores muy largos (degradados, sombras) que se lee mejor entero.

```html
<pre class="gm-code gm-code--wrap"><code>background: linear-gradient(135deg, rgb(92 223 235 / .9) 0%, rgb(185 163 255 / .9) 50%, rgb(255 166 209 / .9) 100%);</code></pre>
```

## Colores

Si coloreas el código con [Shiki](https://shiki.style) y sus temas `light-plus` y `dark-plus`, metiendo cada trozo en un `<span style="--code-light:…; --code-dark:…">` (como lo hace esta web), el framework lo pinta como Visual Studio Code: «Dark+» en oscuro y, en claro, los colores de «Light+» cambiados por los tonos 700–900 de la paleta, todos con un contraste de 4,5:1 o más. Solo cambia el color de las letras.

## Accesibilidad

- Pon `tabindex="0"` en los bloques que pueden desplazarse de lado, para poder moverlos con el teclado (WCAG 2.1.1).
- Si el bloque es largo, ponle un nombre con `aria-label` («Código de instalación»).
- Texto normal sobre gris: 14:1 (AAA).
