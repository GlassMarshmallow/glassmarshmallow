# Enfoque

Las ideas que hay detrás de GlassMarshmallow y que guían cada decisión. Si vas a usarlo o a añadirle algo, empieza por aquí.

## Cristal y pastel

El aspecto de GlassMarshmallow sale de dos cosas: **superficies de cristal** (fondo translúcido, desenfoque y borde fino) y una **paleta pastel** de 8 colores, más negro, blanco y grises. Todo lo demás es sobrio: Montserrat, fondos claros de día y negros de noche, y un solo color de acento: rosa de día y azul de noche.

## Diseños que salen de proyectos reales

Cada componente sale de un proyecto que ya existe y funciona: el portfolio, My Book Box o My MTV Box. No se inventan estilos: se toman de ahí, se ajustan para que sean accesibles y se añaden al framework para que todos los proyectos los compartan.

## Accesible desde el principio

- **WCAG 2.2 AA siempre**, en modo claro y oscuro, y **AAA siempre que se puede**: texto de 7:1, 44 px para pulsar, foco visible y no tapado.
- Se comprueba con axe y midiendo el contraste sobre los píxeles reales, no a ojo.
- Lo que no se puede hacer accesible no entra.

## Claro y oscuro, con el mismo cuidado

Cada color es una variable que cambia con `data-theme`. El modo oscuro no es el claro invertido: tiene sus propios tonos para que todo se lea igual de bien.

## Primero el móvil

Las clases sin prefijo valen para todas las pantallas y las de prefijo (`gm-md-…`) se añaden desde un [punto de corte](/docs/layout/breakpoints) hacia arriba. La barra de navegación pasa a la barra de pestañas de abajo en el móvil.

## Componentes y utilidades

- **Componentes**, como Bootstrap: piezas listas con una clase (`.gm-btn`, `.gm-accordion`).
- **Utilidades**, como Tailwind: clases pequeñas para ajustar sin escribir CSS (`gm-mt-4`, `gm-shadow-md`).
- Se combinan: un componente retocado con utilidades. Cómo se usan, paso a paso, en [Construir con utilidades](/docs/getting-started/utilities).

## CSS normal, JavaScript opcional

- El framework es **CSS normal**: no hace falta Sass, ni compilar, ni ningún paquete más.
- Todo va en una **capa de CSS** (`@layer glassmarshmallow`), así que tu propio CSS gana siempre sin pelearse con la especificidad ([Instalación](/docs/getting-started/install/)).
- Los componentes que se mueven (menú, calendario, carrusel…) tienen un **script opcional**, sin dependencias. Sin él, el componente se ve y, siempre que se puede, funciona de forma básica.

## Nombres

- Todo empieza por **`gm-`**: clases (`.gm-btn`) y variables (`--gm-accent`). Así no choca con otras librerías.
- Los componentes siguen el patrón **BEM**: bloque, parte y variante (`.gm-player__button--main`).
- Las medidas son **relativas** (`rem`, `em`, `%`) para que todo crezca con el tamaño de letra de la persona. Solo los detalles finos van en `px` (bordes de 1 px, sombras, desenfoques y el contorno del foco), para que sigan finos aunque la letra crezca, como en Bootstrap y Tailwind.

## Iconos propios

Solo los iconos de [GlassMarshmallow Icons](/icons), con los mismos nombres que Bootstrap Icons. Nada de emojis ni iconos mezclados de otros sets.
