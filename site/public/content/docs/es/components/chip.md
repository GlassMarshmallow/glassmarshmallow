# Chip

Una píldora de cristal para opciones rápidas, como las preguntas sugeridas de un chat. Es la de la plantilla de portfolio con IA: el mismo cristal que el acordeón y, al pasar el ratón, sube un poco y el borde toma las luces del dibujo (turquesa en oscuro).

## Ejemplo

```html
<div class="gm-flex gm-flex-wrap gm-gap-2 gm-justify-center">
  <button type="button" class="gm-chip">¿Qué tecnologías usas?</button>
  <button type="button" class="gm-chip">¿Cuánto cuesta una web?</button>
  <button type="button" class="gm-chip">¿Haces tiendas online?</button>
  <button type="button" class="gm-chip gm-chip--accent"><i class="gmi gmi-stars" aria-hidden="true"></i>Quiero un proyecto</button>
</div>
```

## Destacado

`.gm-chip--accent` lleva siempre el borde de las luces y la letra en seminegrita: para la acción principal del grupo.

## En el móvil

Muchos chips seguidos caben mejor en una [fila deslizable](/docs/components/carousel#fila-deslizable), como en la plantilla:

```html
<div class="gm-scroll-row" role="group" aria-label="Preguntas rápidas" style="max-width: 320px">
  <button type="button" class="gm-chip">¿Qué tecnologías usas?</button>
  <button type="button" class="gm-chip">¿Cuánto cuesta una web?</button>
  <button type="button" class="gm-chip">¿Haces tiendas online?</button>
</div>
```

## Desactivado

Con `disabled`, o con `aria-disabled="true"` si tiene que poder seguir enfocándose (por ejemplo, dentro de una fila deslizable mientras la IA piensa).

## Accesibilidad

- Son `<button>` con texto: dicen lo que hacen.
- Miden menos de 44 px a la vista, pero la zona que se pulsa llega a 44 px de alto (WCAG 2.5.5).
- El texto llega a 7:1 sobre el cristal en los dos modos; el borde, a 3:1.
