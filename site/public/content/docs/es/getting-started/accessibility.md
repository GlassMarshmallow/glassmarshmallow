# Accesibilidad

GlassMarshmallow cumple **WCAG 2.2 en el nivel AA** en modo claro y oscuro, el nivel que piden las leyes europeas y españolas, y además los criterios AAA de contraste, presentación, foco y tamaño de lo que se pulsa. Estas son todas las reglas, ordenadas por los cuatro principios de WCAG, con cómo las cumple el framework.

> La lista completa, con los 86 criterios de los niveles A, AA y AAA, está en [Todas las reglas (WCAG 2.2)](/docs/getting-started/wcag).

> **El framework ayuda, pero no lo hace todo.** Tu contenido (textos, imágenes, nombres de los botones, orden de los títulos) también tiene que cumplir estas reglas.

## Perceptible

Todo el mundo puede ver u oír el contenido.

| Criterio | Nivel | Regla | En GlassMarshmallow |
| --- | --- | --- | --- |
| 1.1.1 | A | Toda imagen que da información tiene un texto alternativo (`alt`). Las imágenes decorativas y los iconos llevan `alt=""` o `aria-hidden="true"`. | Los iconos (`.gmi`) son decorativos: van siempre con `aria-hidden="true"`. |
| 1.3.1 | A | La estructura está en el HTML: títulos, listas, tablas, etiquetas y zonas (`header`, `main`…). | Mira [Estructura de la página](/docs/content/structure). Cada campo tiene su `<label>`. |
| 1.3.5 | AA | Los campos sobre la persona dicen qué piden con `autocomplete` (name, email, tel…). | Los ejemplos de [Campo](/docs/forms/field) lo usan. |
| 1.4.1 | A | El color nunca es la única forma de dar una información: añade una palabra, un icono o un subrayado. | Los avisos llevan icono y texto; los enlaces dentro del texto van subrayados. |
| 1.4.3 | AA | El texto tiene un contraste de al menos 4,5:1 con su fondo, y el texto grande (24 px, o 19 px en negrita) al menos 3:1. | Todos los colores del framework están medidos en modo claro y oscuro. Mira [Paleta](/docs/color/colors). |
| 1.4.6 | AAA | El texto tiene un contraste de al menos 7:1, y el texto grande de 4,5:1. | Todos los colores de texto del framework llegan a 7:1. Excepciones: los fondos sólidos `gray-500` y `gray-600` (5,2:1 y 6:1) y el título de la portada en modo claro, con los colores del logo. |
| 1.4.4 | AA | La página funciona con el texto ampliado al 200 %. | Tamaños en `rem` y `em`, que crecen con el texto. |
| 1.4.8 | AAA | Bloques de texto: líneas de 80 caracteres como mucho, sin justificar, interlineado de 1,5 y colores elegidos por la persona. | Párrafos y listas de hasta 80 caracteres, alineados al principio; con el modo de alto contraste del sistema, se usan sus colores. |
| 1.4.10 | AA | A 320 px de ancho (o con zoom al 400 %) se puede leer todo sin desplazarse hacia los lados. | Todas las páginas se comprueban a 320 y 375 px. |
| 1.4.11 | AA | Los bordes de los campos y controles, el foco y las partes de un gráfico tienen un contraste de al menos 3:1. | Campos: 3,5:1 en claro y 3,9:1 en oscuro. Foco: 4,9:1 y 7,5:1. |
| 1.4.12 | AA | El contenido sigue funcionando si la persona aumenta el espacio entre líneas, letras y palabras. | Sin alturas fijas en las cajas con texto. |
| 1.4.13 | AA | Lo que aparece al pasar el ratón o con el foco (tooltips) se cierra con Escape, se queda mientras el ratón está encima y no desaparece solo. | Mira [Tooltip](/docs/components/tooltip). |

## Operable

Todo el mundo puede usar la página, con o sin ratón.

| Criterio | Nivel | Regla | En GlassMarshmallow |
| --- | --- | --- | --- |
| 2.1.1 | A | Todo se puede usar solo con el teclado. | Botones, enlaces y campos nativos; el calendario funciona con flechas, Inicio/Fin y Re Pág/Av Pág. |
| 2.1.2 | A | El teclado nunca se queda atrapado: siempre se puede salir de un componente con Tab o Escape. | Los diálogos se abren con `showModal()` y se cierran con Escape. |
| 2.2.2 | A | Todo lo que se mueve durante más de 5 segundos se puede pausar. | El framework no tiene animaciones automáticas. |
| 2.3.3 | AAA* | Con «reducir movimiento» en el sistema, se quitan las animaciones. | Las transiciones se apagan con `prefers-reduced-motion`. (*Es AAA, pero lo hacemos siempre.) |
| 2.4.1 | A | Hay una forma de saltarse el menú e ir directo al contenido. | `.gm-skip-link`, el primer enlace de la página. |
| 2.4.2 | A | Cada página tiene un título que dice qué es. | «Nombre de la página | GlassMarshmallow». |
| 2.4.3 | A | El foco avanza en un orden lógico, el mismo que el de lectura. | El orden del HTML es el orden visual: ningún `tabindex` mayor que 0. |
| 2.4.4 | A | Cada enlace dice adónde lleva (nada de «pulsa aquí»). | — |
| 2.4.6 | AA | Los títulos y las etiquetas describen su contenido. | — |
| 2.4.7 | AA | El foco del teclado siempre se ve. | Un contorno turquesa de 2 px en todo lo que puede recibir el foco. |
| 2.4.11 | AA | El elemento con el foco no queda tapado por otro contenido (cabeceras o barras fijas). | La página guarda un margen de scroll del alto de la barra de arriba (y de la de abajo en el móvil). |
| 2.4.12 | AAA | Ninguna parte del elemento con el foco queda tapada. | El mismo margen de scroll lo deja entero a la vista. |
| 2.5.3 | A | El nombre accesible de un botón contiene su texto visible. | «‹ Volver» se lee «Volver: Herramientas». |
| 2.5.8 | AA | Todo lo que se pulsa mide al menos 24 × 24 px. | Todo llega a 44 px (mira 2.5.5). |
| 2.5.5 | AAA | Todo lo que se pulsa mide al menos 44 × 44 px. | Botones, menús, días del calendario y opciones miden 44 px; los botones pequeños y las píldoras tienen una capa invisible que amplía la zona. |

## Comprensible

El contenido y su funcionamiento se entienden fácilmente.

| Criterio | Nivel | Regla | En GlassMarshmallow |
| --- | --- | --- | --- |
| 3.1.1 | A | La página dice su idioma con `lang` en `<html>`. | — |
| 3.1.2 | AA | Una parte en otro idioma lo dice con `lang`. | — |
| 3.2.3 | AA | La navegación está en el mismo sitio y orden en todas las páginas. | `.gm-navbar` y `.gm-tabbar` son iguales en toda la web. |
| 3.3.1 | A | Los errores de un formulario se muestran con texto, junto al campo, y dicen qué campo. | `.gm-field__error` con `aria-invalid` y `aria-describedby`. |
| 3.3.2 | A | Cada campo tiene una etiqueta visible, y los obligatorios están marcados. | — |
| 3.3.3 | AA | El mensaje de error dice cómo arreglarlo. | «Escribe un correo completo, por ejemplo sara@ejemplo.com». |
| 3.3.8 | AA | Iniciar sesión no depende de recordar ni copiar nada (funcionan los gestores de contraseñas y pegar). | Los campos de contraseña con `autocomplete="current-password"`. |

## Robusto

Funciona con los navegadores y las ayudas técnicas.

| Criterio | Nivel | Regla | En GlassMarshmallow |
| --- | --- | --- | --- |
| 4.1.2 | A | Todo control tiene un nombre, un papel y un estado que los lectores de pantalla pueden leer. | Primero los elementos nativos; `aria-pressed`, `aria-expanded`, `aria-current` donde hacen falta. |
| 4.1.3 | AA | Los mensajes que aparecen sin mover el foco («Copiado», «3 resultados») se anuncian. | Un texto oculto con `aria-live="polite"`. |

## Cómo lo comprobamos

- **axe-core** en cada página, en modo claro y oscuro: 0 errores.
- **Contraste sobre los píxeles reales** cuando hay algo detrás del texto (cristal, luces, imágenes), porque las herramientas automáticas no lo ven.
- **Solo con teclado**: cada página se usa con Tab, Mayús + Tab, Intro, Espacio, Escape y las flechas.
- **Anchos de 320, 375 y 1300 px**, sin desplazarse hacia los lados.
- **Reducir movimiento** activado en el sistema.

## Herramientas para comprobar tu página

- [axe DevTools](https://www.deque.com/axe/devtools/) y [WAVE](https://wave.webaim.org/extension/): extensiones del navegador que revisan toda la página.
- Lighthouse, en las herramientas de desarrollo de Chrome.
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/): un cuentagotas para medir el contraste de cualquier punto de la pantalla.
- VoiceOver (macOS e iOS) o NVDA (Windows), para oír la página como la oye quien usa un lector de pantalla.
