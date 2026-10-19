# Fragmento de código

Un trozo de código para copiar, con su resultado encima si hace falta: el de esta documentación. Panel de cristal, barra con el lenguaje (o pestañas) y el botón de copiar.

## Ejemplo

```html
<div class="gm-snippet">
  <div class="gm-snippet__example">
    <button type="button" class="gm-btn">Botón</button>
  </div>
  <div class="gm-snippet__bar">
    <span class="gm-snippet__lang">html</span>
    <button type="button" class="gm-snippet__copy"><i class="gmi gmi-clipboard" aria-hidden="true"></i><span>Copiar</span></button>
  </div>
  <pre class="gm-snippet__code" tabindex="0"><code>&lt;button type="button" class="gm-btn"&gt;Botón&lt;/button&gt;</code></pre>
</div>
```

Sin `gm-snippet__example`, es solo el código con su barra.

## Con pestañas

Para el mismo ejemplo en varios lenguajes o gestores de paquetes: `gm-snippet__tabs` con un `gm-snippet__tab` por opción y un `<pre>` por pestaña (los que no se ven, con `hidden`). Cambiar de pestaña y copiar lo hace tu código.

```html
<div class="gm-snippet">
  <div class="gm-snippet__bar">
    <div class="gm-snippet__tabs" role="tablist">
      <button type="button" class="gm-snippet__tab" role="tab" aria-selected="true">npm</button>
      <button type="button" class="gm-snippet__tab" role="tab" aria-selected="false">pnpm</button>
    </div>
    <button type="button" class="gm-snippet__copy"><i class="gmi gmi-clipboard" aria-hidden="true"></i><span>Copiar</span></button>
  </div>
  <pre class="gm-snippet__code" tabindex="0" role="tabpanel"><code>npm install glassmarshmallow</code></pre>
</div>
```

| Clase | Qué es |
| --- | --- |
| `gm-snippet` | El panel de cristal |
| `gm-snippet__example` | El resultado, sobre blanco (negro de noche) para ver los colores tal cual |
| `gm-snippet__bar` | La barra: lenguaje o pestañas a la izquierda y copiar a la derecha |
| `gm-snippet__lang` | El nombre del lenguaje, en mayúsculas pequeñas |
| `gm-snippet__tabs` / `gm-snippet__tab` | Las pestañas, como un control segmentado |
| `gm-snippet__copy` | El botón de copiar |
| `gm-snippet__code` | El `<pre>` con el código (se desplaza de lado si no cabe) |

## Accesibilidad

- El código se puede recorrer con el teclado (`tabindex="0"` en el `<pre>`) y desplazar de lado si es largo.
- Las pestañas y el botón de copiar miden 44 × 44 px donde se pulsan aunque se vean más pequeños (WCAG 2.5.5).
- Al copiar, avisa a los lectores de pantalla («Código copiado») con una zona `aria-live`.
- Las pestañas llevan `role="tab"` y `aria-selected`; cada código, `role="tabpanel"`.
