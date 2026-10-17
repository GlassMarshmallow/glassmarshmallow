# Secciones

Cada parte de una página de inicio (Sobre mí, Habilidades, Contacto…) es una sección: un hueco arriba y abajo, el título centrado y el texto debajo, en un contenedor estrecho para que las líneas no sean demasiado largas. Es como en la plantilla de portfolio.

## Ejemplo

```html
<section class="gm-section" style="padding-block: 2.5rem">
  <div class="gm-container gm-container--narrow">
    <h2 class="gm-section__title">Sobre mí</h2>
    <p class="gm-section__text">Hola, me llamo <strong>Lucía Martín</strong> y soy desarrolladora web. Me gusta trabajar en los dos lados de una aplicación: lo que se ve y lo que hay detrás.</p>
    <p class="gm-section__text">Me ilusiona participar en proyectos desde la idea hasta que están funcionando.</p>
  </div>
</section>
```

## Dónde va cada cosa

| Pieza | Clase | Cómo queda |
| --- | --- | --- |
| La sección | `.gm-section` | 6 rem arriba y abajo (3,5 rem en el móvil) |
| El ancho | `.gm-container .gm-container--narrow` | Centrado, 960 px como mucho; el texto, 80 caracteres por línea como mucho |
| El título | `.gm-section__title` | Centrado, 2 rem (1,7 rem en el móvil), con 2 rem debajo |
| El texto | `.gm-section__text` | Alineado a la izquierda, 1,1 rem con interlineado de 1,7, en gris; lo destacado (`<strong>`) en el color del texto |

## Con otra pieza debajo

Después del título puede ir cualquier componente, por ejemplo un [acordeón](/docs/components/accordion):

```html
<section class="gm-section" style="padding-block: 2.5rem">
  <div class="gm-container gm-container--narrow">
    <h2 class="gm-section__title">Habilidades</h2>
    <div class="gm-accordion">
      <details class="gm-accordion__item" name="ejemplo-seccion">
        <summary class="gm-accordion__summary">
          <span class="gm-accordion__icon" aria-hidden="true"><i class="gmi gmi-palette"></i></span>
          <span class="gm-accordion__text"><span class="gm-accordion__title">Diseño</span><span class="gm-accordion__meta">3 herramientas</span></span>
          <i class="gmi gmi-chevron-down gm-accordion__chevron" aria-hidden="true"></i>
        </summary>
        <div class="gm-accordion__content"><ul class="gm-accordion__list"><li>Figma</li><li>Photoshop</li><li>Illustrator</li></ul></div>
      </details>
    </div>
  </div>
</section>
```

## Accesibilidad

- Cada sección empieza con su título (`h2`) y los títulos van en orden, sin saltarse niveles.
- El texto se alinea a la izquierda: centrado, los párrafos largos cuestan de leer (WCAG 1.4.8).
- Líneas de 80 caracteres como mucho e interlineado de 1,7 (WCAG 1.4.8 y 1.4.12).
- El gris del texto llega a 7:1 sobre el fondo (AAA).
