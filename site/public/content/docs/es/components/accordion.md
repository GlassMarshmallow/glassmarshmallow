# Acordeón

Una lista de apartados que se abren y se cierran, todos en una misma tarjeta de cristal y separados por una línea fina. Es el de la sección de habilidades del portfolio.

## Ejemplo

Con el mismo `name` en todos los `<details>`, solo se abre uno a la vez.

```html
<div class="gm-accordion">
  <details class="gm-accordion__item" name="preguntas">
    <summary class="gm-accordion__summary">
      <span class="gm-accordion__title">¿Cuánto tarda el envío?</span>
      <i class="gmi gmi-chevron-down gm-accordion__chevron" aria-hidden="true"></i>
    </summary>
    <div class="gm-accordion__content">
      <p>Entre 2 y 4 días laborables en la península. A Baleares y Canarias, entre 4 y 7.</p>
    </div>
  </details>
  <details class="gm-accordion__item" name="preguntas">
    <summary class="gm-accordion__summary">
      <span class="gm-accordion__title">¿Puedo devolver un pedido?</span>
      <i class="gmi gmi-chevron-down gm-accordion__chevron" aria-hidden="true"></i>
    </summary>
    <div class="gm-accordion__content">
      <p>Sí, durante los 30 días siguientes a recibirlo, sin dar explicaciones.</p>
    </div>
  </details>
  <details class="gm-accordion__item" name="preguntas">
    <summary class="gm-accordion__summary">
      <span class="gm-accordion__title">¿Qué formas de pago aceptáis?</span>
      <i class="gmi gmi-chevron-down gm-accordion__chevron" aria-hidden="true"></i>
    </summary>
    <div class="gm-accordion__content">
      <ul class="gm-accordion__list">
        <li>Tarjeta</li>
        <li>Transferencia</li>
        <li>Bizum</li>
      </ul>
    </div>
  </details>
</div>
```

## Con icono y detalle

Como en el portfolio: un icono en un círculo a la izquierda y una línea de detalle bajo el título.

```html
<div class="gm-accordion">
  <details class="gm-accordion__item" name="habilidades" open>
    <summary class="gm-accordion__summary">
      <span class="gm-accordion__icon" aria-hidden="true"><i class="gmi gmi-palette"></i></span>
      <span class="gm-accordion__text">
        <span class="gm-accordion__title">Diseño</span>
        <span class="gm-accordion__meta">4 herramientas</span>
      </span>
      <i class="gmi gmi-chevron-down gm-accordion__chevron" aria-hidden="true"></i>
    </summary>
    <div class="gm-accordion__content">
      <ul class="gm-accordion__list">
        <li>Figma</li>
        <li>Clip Studio Paint</li>
        <li>Photoshop</li>
        <li>Illustrator</li>
      </ul>
    </div>
  </details>
  <details class="gm-accordion__item" name="habilidades">
    <summary class="gm-accordion__summary">
      <span class="gm-accordion__icon" aria-hidden="true"><i class="gmi gmi-window-stack"></i></span>
      <span class="gm-accordion__text">
        <span class="gm-accordion__title">Desarrollo web</span>
        <span class="gm-accordion__meta">6 tecnologías</span>
      </span>
      <i class="gmi gmi-chevron-down gm-accordion__chevron" aria-hidden="true"></i>
    </summary>
    <div class="gm-accordion__content">
      <ul class="gm-accordion__list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Angular</li>
        <li>.NET</li>
      </ul>
    </div>
  </details>
</div>
```

## Listas dentro

Si dentro hay varios elementos (más de 3), van uno debajo de otro en una lista, no seguidos en una frase: `<ul class="gm-accordion__list">`. Se leen mejor de un vistazo y los lectores de pantalla dicen cuántos son.

## Varios abiertos a la vez

Sin `name`, cada apartado se abre y se cierra por su cuenta. Con `open`, empieza abierto.

```html-code
<details class="gm-accordion__item" open>…</details>
```

## Accesibilidad

- Usa `<details>` y `<summary>` de HTML: se abren con el ratón, con Intro o Espacio, y los lectores de pantalla dicen si están abiertos o cerrados. No necesita JavaScript.
- La flecha es decorativa (`aria-hidden`); el estado lo da el propio `<details>`.
- El borde del acordeón llega a 3,3:1 (WCAG 1.4.11) y cada fila mide al menos 44 px (WCAG 2.5.5).
- La animación se quita si la persona pide menos movimiento (`prefers-reduced-motion`).
- No escondas en un acordeón información que todo el mundo necesita: úsalo para detalles que solo interesan a algunos.
