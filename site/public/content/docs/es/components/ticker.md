# Franja de logos

Una franja que pasa despacio de derecha a izquierda con logos y nombres, por ejemplo las tecnologías de un proyecto. Cristal oscuro (blanco de día) con un borde fino arriba y abajo, cielo de día y turquesa de noche.

## Ejemplo

El contenido va **dos veces seguidas** dentro de `.gm-ticker__track`, para que la vuelta sea continua.

```html
<div class="gm-ticker">
  <div class="gm-ticker__track" aria-hidden="true">
    <span class="gm-ticker__item"><i class="gmi gmi-angular"></i>Angular</span><span class="gm-ticker__item"><i class="gmi gmi-typescript"></i>TypeScript</span><span class="gm-ticker__item"><i class="gmi gmi-database"></i>PostgreSQL</span><span class="gm-ticker__item"><i class="gmi gmi-dotnet"></i></span><span class="gm-ticker__item"><i class="gmi gmi-figma"></i>Figma</span><span class="gm-ticker__item"><i class="gmi gmi-ollama"></i>Ollama</span>
    <span class="gm-ticker__item"><i class="gmi gmi-angular"></i>Angular</span><span class="gm-ticker__item"><i class="gmi gmi-typescript"></i>TypeScript</span><span class="gm-ticker__item"><i class="gmi gmi-database"></i>PostgreSQL</span><span class="gm-ticker__item"><i class="gmi gmi-dotnet"></i></span><span class="gm-ticker__item"><i class="gmi gmi-figma"></i>Figma</span><span class="gm-ticker__item"><i class="gmi gmi-ollama"></i>Ollama</span>
  </div>
  <button type="button" class="gm-icon-btn gm-icon-btn--glass gm-ticker__pause" aria-pressed="false" aria-label="Pausar la franja"><i class="gmi gmi-pause-fill" aria-hidden="true"></i></button>
</div>
```

## Quieta

`.gm-ticker--static`: sin movimiento, con los logos que caben centrados (por ejemplo, cuando la página no lleva animaciones). Entonces basta con una copia.

```html
<div class="gm-ticker gm-ticker--static" aria-hidden="true">
  <div class="gm-ticker__track"><span class="gm-ticker__item"><i class="gmi gmi-angular"></i>Angular</span><span class="gm-ticker__item"><i class="gmi gmi-typescript"></i>TypeScript</span><span class="gm-ticker__item"><i class="gmi gmi-database"></i>PostgreSQL</span><span class="gm-ticker__item"><i class="gmi gmi-dotnet"></i></span><span class="gm-ticker__item"><i class="gmi gmi-figma"></i>Figma</span><span class="gm-ticker__item"><i class="gmi gmi-ollama"></i>Ollama</span></div>
</div>
```

## Pararla

El botón redondo con el icono de pausa (`.gm-ticker__pause`) va al final de la franja, sin ocupar sitio. Con el script opcional, al pulsarlo la franja se para (`.is-paused`), el icono cambia a reproducir y el botón dice que está pulsado (su nombre, «Pausar la franja», no cambia):

```html-code
<script type="module">
  import { initTickers } from 'glassmarshmallow/js/ticker.js';
  initTickers();
</script>
```

También se para sola al pasar el ratón (donde hay ratón) o con el foco del teclado dentro, y no se mueve si la persona pide menos movimiento. Un clic o un toque no la dejan parada.

## Accesibilidad

- Los logos son **decorativos** (`aria-hidden="true"` en `.gm-ticker__track`): la misma información tiene que estar en otro sitio de la página (en la plantilla, la sección Habilidades).
- Se mueve sola más de 5 segundos, así que lleva el botón para pararla, que se alcanza con el teclado y con el dedo (WCAG 2.2.2). Quieta (`--static`) no hace falta.
- No se mueve si la persona pide menos movimiento (WCAG 2.3.3).
