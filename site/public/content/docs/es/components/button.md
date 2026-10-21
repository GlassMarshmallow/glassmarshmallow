# Botón

Botones para las acciones de formularios, diálogos y páginas, con formas redondeadas. Todos cumplen WCAG 2.2 AA en modo claro y oscuro.

## Variantes

`.gm-btn` es el botón principal: negro en modo claro y blanco en oscuro. Añade `.gm-btn--secondary` para un botón de cristal con borde, o `.gm-btn--ghost` para uno sin fondo.

```html
<div class="gm-flex gm-flex-wrap gm-items-center gm-gap-3">
  <button type="button" class="gm-btn">Principal</button>
  <button type="button" class="gm-btn gm-btn--secondary">Secundario</button>
  <button type="button" class="gm-btn gm-btn--ghost">Transparente</button>
</div>
```

## Con color

Añade un color de la paleta (`.gm-theme-sky`, `.gm-theme-mint`…) y cómo usarlo: `.gm-theme-solid` para el pastel con el texto negro, o `.gm-theme-glass` para la versión vidriada. El botón mantiene su forma de píldora.

```html
<div class="gm-flex gm-flex-wrap gm-items-center gm-gap-3">
  <button type="button" class="gm-btn gm-theme-sky gm-theme-solid">Sólido</button>
  <button type="button" class="gm-btn gm-theme-sky gm-theme-glass">Vidriado</button>
</div>
```

Todos los colores, sólidos:

```html
<div class="gm-flex gm-flex-wrap gm-items-center gm-gap-3">
  <button type="button" class="gm-btn gm-btn--sm gm-theme-sky gm-theme-solid">Celeste</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-blue gm-theme-solid">Azul</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-lavender gm-theme-solid">Lavanda</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-pink gm-theme-solid">Rosa</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-peach gm-theme-solid">Melocotón</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-lemon gm-theme-solid">Limón</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-mint gm-theme-solid">Menta</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-coral gm-theme-solid">Coral</button>
</div>
```

Y vidriados:

```html
<div class="gm-flex gm-flex-wrap gm-items-center gm-gap-3">
  <button type="button" class="gm-btn gm-btn--sm gm-theme-sky gm-theme-glass">Celeste</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-blue gm-theme-glass">Azul</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-lavender gm-theme-glass">Lavanda</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-pink gm-theme-glass">Rosa</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-peach gm-theme-glass">Melocotón</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-lemon gm-theme-glass">Limón</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-mint gm-theme-glass">Menta</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-coral gm-theme-glass">Coral</button>
</div>
```

El texto sobre el pastel siempre es negro (7,8:1 o más, AAA). Nunca uses texto blanco sobre estos colores. Para enviar un formulario también está el de acento `.gm-btn--accent` (rosa de día, azul de noche) de [Campo](/docs/forms/field).

## Pequeño

`.gm-btn--sm` lo hace más bajo (38 px) y con el texto más pequeño.

```html
<div class="gm-flex gm-flex-wrap gm-items-center gm-gap-3">
  <button type="button" class="gm-btn gm-btn--sm">Principal</button>
  <button type="button" class="gm-btn gm-btn--secondary gm-btn--sm">Secundario</button>
</div>
```

## Con icono

Pon un icono antes o después del texto. Es decorativo, así que lleva `aria-hidden="true"`.

```html
<div class="gm-flex gm-flex-wrap gm-items-center gm-gap-3">
  <button type="button" class="gm-btn"><i class="gmi gmi-download" aria-hidden="true"></i>Descargar</button>
  <button type="button" class="gm-btn gm-btn--secondary">Siguiente<i class="gmi gmi-arrow-right" aria-hidden="true"></i></button>
</div>
```

## Solo icono

`.gm-icon-btn` es un botón redondo de 42 px. Como no tiene texto, necesita `aria-label` con lo que hace.

```html
<div class="gm-flex gm-flex-wrap gm-items-center gm-gap-3">
  <button type="button" class="gm-icon-btn" aria-label="Buscar"><i class="gmi gmi-search" aria-hidden="true"></i></button>
  <button type="button" class="gm-icon-btn" aria-label="Ajustes"><i class="gmi gmi-gear" aria-hidden="true"></i></button>
  <button type="button" class="gm-icon-btn" aria-label="Borrar"><i class="gmi gmi-trash" aria-hidden="true"></i></button>
</div>
```

## Píldora

`.gm-btn--pill` es un botón pequeño con el gris de las etiquetas, para acciones secundarias en listas y tarjetas. Añade `.gm-btn--danger` para las acciones que borran. Solo funciona en la píldora, donde su color se lee bien (9,6:1); en los demás botones no cambia nada.

```html
<div class="gm-flex gm-flex-wrap gm-items-center gm-gap-3">
  <button type="button" class="gm-btn gm-btn--pill">Editar</button>
  <button type="button" class="gm-btn gm-btn--pill gm-btn--danger">Borrar</button>
</div>
```

## Texto

`.gm-btn-text` parece un enlace pero es un botón, para acciones pequeñas dentro de un texto.

```html
<div class="gm-flex gm-flex-wrap gm-items-center gm-gap-3">
  <button type="button" class="gm-btn-text">Ver más</button>
</div>
```

## Volver

`.gm-btn-back` vuelve a la sección anterior. La flecha es decorativa; si el texto visible no dice adónde vuelve, añádelo con un texto oculto.

```html
<div class="gm-flex gm-flex-wrap gm-items-center gm-gap-3">
  <a class="gm-btn-back" href="#"><span aria-hidden="true">‹</span> Volver<span class="gm-visually-hidden">: Herramientas</span></a>
</div>
```

## Enlaces con forma de botón

Las clases también funcionan en `<a>`. Usa `<a>` cuando lleva a otra página y `<button>` cuando hace algo en la misma.

```html
<div class="gm-flex gm-flex-wrap gm-items-center gm-gap-3">
  <a class="gm-btn" href="#">Leer la documentación</a>
  <a class="gm-btn gm-btn--secondary" href="#">GitHub</a>
</div>
```

## Desactivado

Con el atributo `disabled` el botón se ve más claro y no se puede pulsar.

```html
<div class="gm-flex gm-flex-wrap gm-items-center gm-gap-3">
  <button type="button" class="gm-btn" disabled>Principal</button>
  <button type="button" class="gm-btn gm-btn--secondary" disabled>Secundario</button>
</div>
```

## Accesibilidad

| Botón | Contraste (claro / oscuro) | Nivel |
| --- | --- | --- |
| `.gm-btn` | 16,8:1 / 15,5:1 | AAA |
| `.gm-btn--secondary`, `--ghost` | 16,6:1 / 13,9:1 | AAA |
| `.gm-btn--pill` | 13,8:1 / 12,8:1 | AAA |
| `.gm-btn--danger` | 9,6:1 / 9,8:1 | AAA |
| `.gm-btn-text` | 7:1 / 7:1 | AAA |

- El foco siempre se ve: un contorno de 2 px al moverte con el teclado.
- La zona que se pulsa mide siempre al menos 44 × 44 px (WCAG 2.5.5, AAA): en los botones pequeños y las píldoras, una capa invisible la amplía sin cambiar su aspecto.
- Un botón con solo icono necesita siempre `aria-label`.
- Los botones desactivados no tienen que cumplir el contraste, pero explica por qué no se puede usar la acción cuando no sea evidente.
