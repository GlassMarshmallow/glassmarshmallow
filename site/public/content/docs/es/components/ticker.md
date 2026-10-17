# Franja de logos

Una franja que pasa despacio de derecha a izquierda con logos y nombres, como la de tecnologías de la plantilla de portfolio. Cristal oscuro (blanco de día) con un borde fino turquesa arriba y abajo (de día, con las luces del dibujo).

## Ejemplo

El contenido va **dos veces seguidas** dentro de `.gm-ticker__track`, para que la vuelta sea continua.

```html
<div class="gm-ticker" aria-hidden="true">
  <div class="gm-ticker__track">
    <span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>Angular</span><span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>TypeScript</span><span class="gm-ticker__item"><i class="gmi gmi-database"></i>PostgreSQL</span><span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>.NET</span><span class="gm-ticker__item"><i class="gmi gmi-palette"></i>Figma</span><span class="gm-ticker__item"><i class="gmi gmi-stars"></i>Ollama</span>
    <span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>Angular</span><span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>TypeScript</span><span class="gm-ticker__item"><i class="gmi gmi-database"></i>PostgreSQL</span><span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>.NET</span><span class="gm-ticker__item"><i class="gmi gmi-palette"></i>Figma</span><span class="gm-ticker__item"><i class="gmi gmi-stars"></i>Ollama</span>
  </div>
</div>
```

## Quieta

`.gm-ticker--static`: sin movimiento, con los logos que caben centrados (por ejemplo, cuando la página no lleva animaciones). Entonces basta con una copia.

```html
<div class="gm-ticker gm-ticker--static" aria-hidden="true">
  <div class="gm-ticker__track"><span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>Angular</span><span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>TypeScript</span><span class="gm-ticker__item"><i class="gmi gmi-database"></i>PostgreSQL</span><span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>.NET</span><span class="gm-ticker__item"><i class="gmi gmi-palette"></i>Figma</span><span class="gm-ticker__item"><i class="gmi gmi-stars"></i>Ollama</span></div>
</div>
```

## Pararla

Se para sola al pasar el ratón o con el foco dentro. Desde tu código, con `.is-paused` (por ejemplo, con un botón «Pausar»).

## Accesibilidad

- Es **decorativa** (`aria-hidden="true"`): la misma información tiene que estar en otro sitio de la página (en la plantilla, la sección de Habilidades).
- No se mueve si la persona pide menos movimiento (WCAG 2.3.3).
- Si es lo único que se mueve y dura más de 5 segundos, ofrece un botón para pararla (`.is-paused`) (WCAG 2.2.2).
