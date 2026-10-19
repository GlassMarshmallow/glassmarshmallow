# Chip

Una píldora de cristal para opciones rápidas, como las preguntas sugeridas de un chat. Es la de la plantilla de portfolio con IA: el mismo cristal que el acordeón y, al pasar el ratón, sube un poco y el borde toma el color cielo (turquesa en oscuro).

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

`.gm-chip--accent` lleva siempre el borde de color y la letra en seminegrita: para la acción principal del grupo.

## En el móvil

Muchos chips seguidos caben mejor en una [fila deslizable](/docs/components/carousel#fila-deslizable), como en la plantilla:

```html
<div class="gm-scroll-row" role="group" aria-label="Preguntas rápidas" style="max-width: 320px">
  <button type="button" class="gm-chip">¿Qué tecnologías usas?</button>
  <button type="button" class="gm-chip">¿Cuánto cuesta una web?</button>
  <button type="button" class="gm-chip">¿Haces tiendas online?</button>
</div>
```

## Cambiar los bordes

| Variable | Qué cambia | Por defecto |
| --- | --- | --- |
| `--gm-chip-border` | El borde en reposo | El gris de los paneles |
| `--gm-chip-color` | El borde al pasar el ratón y el del destacado (un color o un degradado) | Cielo (turquesa en oscuro) |

Con color de acento en reposo y al pasar el ratón, y con un degradado pastel al pasar el ratón:

```html
<div class="gm-flex gm-flex-wrap gm-gap-2 gm-justify-center">
  <button type="button" class="gm-chip" style="--gm-chip-border: var(--gm-accent); --gm-chip-color: var(--gm-accent)">¿Qué tecnologías usas?</button>
  <button type="button" class="gm-chip" style="--gm-chip-color: linear-gradient(90deg, var(--gm-mint), var(--gm-sky), var(--gm-lavender))">¿Cuánto cuesta una web?</button>
  <button type="button" class="gm-chip gm-chip--accent" style="--gm-chip-color: var(--gm-accent)"><i class="gmi gmi-stars" aria-hidden="true"></i>Quiero un proyecto</button>
</div>
```

## Sin borde

`.gm-chip--borderless`: solo el cristal, sin borde en reposo ni al pasar el ratón (sigue subiendo un poco). Úsalo sobre fondos en los que el cristal se distinga bien.

```html
<div class="gm-flex gm-flex-wrap gm-gap-2 gm-justify-center">
  <button type="button" class="gm-chip gm-chip--borderless">¿Qué tecnologías usas?</button>
  <button type="button" class="gm-chip gm-chip--borderless">¿Haces tiendas online?</button>
</div>
```

## Desactivado

Con `disabled`, o con `aria-disabled="true"` si tiene que poder seguir enfocándose (por ejemplo, dentro de una fila deslizable mientras la IA piensa).

## Accesibilidad

- Son `<button>` con texto: dicen lo que hacen.
- Miden menos de 44 px a la vista, pero la zona que se pulsa llega a 44 px de alto (WCAG 2.5.5).
- El texto llega a 7:1 sobre el cristal en los dos modos; el borde, a 3:1. Si cambias el color del borde, que siga llegando a 3:1; sin borde, el texto basta para saber qué es.
