# Construir con utilidades

GlassMarshmallow trae **componentes hechos**, como Bootstrap (`gm-btn`, `gm-card`, `gm-navbar`…), y **utilidades**, como Tailwind: clases pequeñas que hacen una sola cosa cada una. Combinando utilidades se puede construir cualquier diseño propio sin escribir CSS. Esta página explica cómo se usan; cada tema tiene después su página con todas sus clases (están todas en [Utilidades](/docs/utilities/overview)).

## La idea

En vez de inventar una clase y escribir su CSS…

```css:CSS
.mi-aviso { display: flex; gap: .75rem; padding: 1rem; border-radius: 1.25rem; }
```

…se ponen en el HTML las utilidades que hacen eso mismo:

```html
<div class="gm-d-flex gm-items-center gm-gap-3 gm-p-4 gm-rounded-md gm-bg-surface gm-shadow-md">
  <i class="gmi gmi-stars gm-text-xl" aria-hidden="true"></i>
  <p class="gm-m-0">Hecho solo con utilidades, sin una línea de CSS.</p>
</div>
```

Así se ve en el HTML cómo es cada cosa, no hay CSS que se quede sin usar y los cambios no rompen otras partes de la web.

## Cómo se leen los nombres

Todas empiezan por `gm-`, luego **qué cambian** y, al final, **cuánto**:

| Clase | Se lee | Hace |
| --- | --- | --- |
| `gm-mt-4` | margen (m) arriba (t), 4 | `margin-top: 1rem` |
| `gm-px-6` | relleno (p) a los lados (x), 6 | `padding-inline: 1.5rem` |
| `gm-rounded-lg` | esquinas redondeadas, grandes | `border-radius: var(--gm-radius-lg)` |
| `gm-shadow-md` | sombra mediana | una sombra suave |
| `gm-text-xl` | texto, extra grande | `font-size: 1.25rem` |
| `gm-d-flex` | mostrar (display) como flex | `display: flex` |

Los números siguen una **escala**: en el espaciado, **4 = 1 rem** (16 px), 2 = 0,5 rem, 8 = 2 rem. Usar la escala hace que todo quede alineado y proporcionado. La tabla completa está en [Espaciado](/docs/utilities/spacing).

## Según el tamaño de pantalla

Las clases sin prefijo valen siempre, empezando por el móvil. Con `sm`, `md`, `lg` o `xl` detrás de `gm-`, valen **a partir de** ese ancho:

| Prefijo | A partir de |
| --- | --- |
| `gm-sm-…` | 600 px |
| `gm-md-…` | 860 px |
| `gm-lg-…` | 1100 px |
| `gm-xl-…` | 1300 px |

```html
<div class="gm-d-grid gm-grid-cols-1 gm-md-grid-cols-3 gm-gap-4">
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4">Una</div>
  <div class="gm-theme-mint gm-theme-solid gm-rounded-sm gm-p-4">Dos</div>
  <div class="gm-theme-peach gm-theme-solid gm-rounded-sm gm-p-4">Tres</div>
</div>
```

En el móvil van una debajo de otra; a partir de 860 px, en tres columnas. Más en [Puntos de corte](/docs/layout/breakpoints).

## Valores que no están en la escala

Si necesitas un valor exacto, escríbelo **entre corchetes**: `gm-mt-[1.75rem]`, `gm-w-[18rem]`, `gm-bg-[#5cdfeb]`. Y cualquier propiedad de CSS sin utilidad, con `gm-[propiedad:valor]`. Estas clases las crea un pequeño programa que viene con el paquete:

```sh
npx glassmarshmallow build
```

Cómo se configura y qué se puede escribir, en [Valores libres](/docs/utilities/arbitrary).

## Al pasar el ratón, en modo oscuro…

Con una **variante** delante, la clase solo se aplica en ese caso. Van con los valores entre corchetes:

| Variante | Cuándo se aplica |
| --- | --- |
| `gm-hover:` | al pasar el ratón |
| `gm-focus-visible:` | al llegar con el teclado |
| `gm-dark:` / `gm-light:` | en modo oscuro / claro |
| `gm-before:` / `gm-after:` | en las capas `::before` y `::after` |
| `gm-group-hover:` | al pasar el ratón por el antepasado con `gm-group` |

```html
<a href="#" class="gm-d-inline-flex gm-items-center gm-gap-2 gm-px-6 gm-py-3 gm-rounded-full gm-bg-surface gm-shadow-md gm-transition gm-hover:translate-[0_-2px] gm-hover:shadow-[0_.75rem_2rem_rgb(0_0_0/.18)]">
  Sube un poco al pasar el ratón <i class="gmi gmi-arrow-right" aria-hidden="true"></i>
</a>
```

La lista completa está en [Valores libres](/docs/utilities/arbitrary).

## Ejemplo: una tarjeta paso a paso

Así se construye una tarjeta de perfil solo con utilidades.

**1. La caja:** fondo, relleno, esquinas y sombra.

```html
<div class="gm-bg-surface gm-p-6 gm-rounded-lg gm-shadow-md gm-max-w-md">
  Sara Paez Yamuza
</div>
```

**2. El contenido en fila,** con un círculo de color para las iniciales.

```html
<div class="gm-bg-surface gm-p-6 gm-rounded-lg gm-shadow-md gm-max-w-md gm-d-flex gm-items-center gm-gap-4">
  <span class="gm-d-grid gm-w-[3.5rem] gm-h-[3.5rem] gm-rounded-full gm-bg-linear-to-br gm-from-sky gm-to-lavender gm-place-items-center gm-font-bold" aria-hidden="true">SP</span>
  <div>
    <p class="gm-m-0 gm-font-bold gm-text-xl">Sara Paez Yamuza</p>
    <p class="gm-m-0 gm-muted gm-text-sm">Diseñadora y desarrolladora web</p>
  </div>
</div>
```

**3. Los detalles:** un botón del framework al final y que, en pantallas anchas, la tarjeta tenga más aire.

```html
<div class="gm-bg-surface gm-p-6 gm-md-p-8 gm-rounded-lg gm-shadow-md gm-max-w-md gm-d-flex gm-flex-wrap gm-items-center gm-gap-4">
  <span class="gm-d-grid gm-w-[3.5rem] gm-h-[3.5rem] gm-rounded-full gm-bg-linear-to-br gm-from-sky gm-to-lavender gm-place-items-center gm-font-bold" aria-hidden="true">SP</span>
  <div class="gm-[flex:1]">
    <p class="gm-m-0 gm-font-bold gm-text-xl">Sara Paez Yamuza</p>
    <p class="gm-m-0 gm-muted gm-text-sm">Diseñadora y desarrolladora web</p>
  </div>
  <a class="gm-btn gm-btn--sm" href="#">Ver portfolio</a>
</div>
```

El degradado del círculo también son utilidades: la dirección (`gm-bg-linear-to-br`) y los colores (`gm-from-sky`, `gm-to-lavender`). Cómo se hacen degradados, filtros, máscaras o sombras de color está en las páginas de [Utilidades](/docs/utilities/gradients).

## Colores y modo oscuro

Los colores de las utilidades salen de las variables del framework, así que **cambian solos** con el modo oscuro (`data-theme="dark"`): no hay que escribir nada más.

```html
<div class="gm-d-grid gm-gap-2 gm-p-6 gm-rounded-lg gm-bg-surface gm-border gm-max-w-md">
  <p class="gm-m-0 gm-font-bold gm-text-body">Sara Paez Yamuza</p>
  <p class="gm-m-0 gm-text-muted">Se lee bien en claro y en oscuro.</p>
  <p class="gm-m-0"><span class="gm-tag gm-bg-sky">Diseño</span> <span class="gm-text-sky gm-font-semibold">Texto en celeste</span></p>
</div>
```

- `gm-bg-surface`, `gm-bg-body`, `gm-text-body`, `gm-text-muted`, `gm-border`… son los colores de la página, de las tarjetas, del texto y de las líneas en cada modo.
- Los de la paleta ya vienen preparados para leerse: `gm-bg-sky` pone el pastel **y** el texto negro encima, y `gm-text-sky` usa el tono oscuro del celeste, que cumple el contraste.
- Para algo **distinto** solo en un modo, usa la variante `gm-dark:` o `gm-light:` con un valor libre: `gm-dark:bg-[#0b0b0c]`.
- Un color escrito a mano (`gm-bg-[#ffffff]`) **no** cambia con el modo. Mejor usa los del framework o pon su versión oscura con `gm-dark:`.

Todos los colores, en [Color de texto](/docs/color/text), [Fondo](/docs/color/background) y [Modo claro y oscuro](/docs/color/color-modes).

## Cambiar la escala para toda la web

Las utilidades y los componentes usan las mismas variables (`--gm-radius-lg`, `--gm-shadow-md`, `--gm-sky`, `--gm-font`…). Si cambias una variable, cambian **todas** las clases y componentes que la usan, sin tocar el HTML:

```html-code
<style>
  /* Toda la web: esquinas medianas menos redondas y otra letra */
  :root { --gm-radius-md: 1rem; --gm-font: "Inter", sans-serif; }
  /* Solo en modo oscuro: un fondo menos negro */
  [data-theme="dark"] { --gm-bg: #0b0b0c; }
  /* Solo dentro de una parte: otro color de acento */
  .mi-tienda { --gm-accent: #8c57e9; }
</style>
```

Con eso, `gm-rounded-md`, las tarjetas (`gm-card`) y el resto de piezas con esquinas medianas cambian a la vez. Los números del espaciado (`gm-p-4`, `gm-mt-8`…) son fijos para que todo siga alineado; si necesitas otra medida, usa un valor libre (`gm-p-[1.125rem]`). La lista de variables está en [Variables CSS](/docs/getting-started/css-variables).

## Accesibilidad cuando construyes tú

Los componentes ya cumplen WCAG 2.2; cuando construyes algo con utilidades, eso depende de ti. Lo que más se olvida:

- **El foco del teclado.** El framework dibuja un contorno al llegar con el teclado (`:focus-visible`). No lo quites con `gm-[outline:none]`; si quieres otro, cámbialo con `gm-focus-visible:`.
- **El contraste.** El texto necesita 4,5:1 sobre su fondo (3:1 si es grande, y para bordes e iconos). Los colores del framework ya lo cumplen; si escribes uno a mano, compruébalo.
- **El tamaño para pulsar.** Lo que se pulsa tiene que medir al menos 44 × 44 px. Si un botón o un icono es más pequeño, añade [`gm-hit-area`](/docs/helpers/hit-area), que agranda la zona sin cambiar cómo se ve.
- **Los enlaces dentro del texto,** subrayados: que no se distingan solo por el color.
- **Los iconos decorativos,** con `aria-hidden="true"`; si un icono va solo en un botón, el botón lleva `aria-label`.
- **El movimiento.** Las animaciones del framework se quitan solas si la persona lo ha pedido; si haces las tuyas, ponlas con `gm-motion-safe:`.

Todas las reglas, en [Accesibilidad](/docs/getting-started/accessibility).

## ¿Componente o utilidades?

- **Usa un componente** cuando ya existe lo que necesitas (un botón, un menú, un calendario): viene probado, accesible y con su modo oscuro.
- **Usa utilidades** para colocar los componentes (márgenes, columnas, alineación) y para construir lo que no existe.
- **Mézclalos:** un componente se ajusta con utilidades, como en `<a class="gm-btn gm-mt-4 gm-w-full">`. Las utilidades van después de los componentes en el CSS, así que normalmente les ganan y sirven para cambiar un detalle.
- Si repites muchas veces el mismo grupo de clases, sácalo a un componente de tu web (en Angular, React, Astro…) o a una clase en tu CSS.

## Tu CSS siempre gana

Todo el framework va en la capa `@layer glassmarshmallow`. Si prefieres escribir CSS para algo, tu CSS le gana siempre, sin `!important` ni selectores largos. Puedes usar solo utilidades, solo tu CSS o las dos cosas. Más en [Instalación](/docs/getting-started/install).
