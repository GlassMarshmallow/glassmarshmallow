# Todas las reglas (WCAG 2.2)

Los 86 criterios de WCAG 2.2, de los niveles A, AA y AAA, explicados con palabras sencillas. Repasa esta lista cada vez que añadas algo nuevo al framework, para que los cumpla desde el principio.

> **Niveles.** A es el mínimo, AA es lo que pide la ley (y lo que promete GlassMarshmallow) y AAA es lo más exigente. El criterio 4.1.1 (Procesamiento) se quitó en WCAG 2.2.


## 1. Perceptible

| Criterio | Nivel | Qué pide | Estado |
| --- | --- | --- | --- |
| **1.1.1** Contenido no textual | A | Las imágenes y los controles sin texto tienen una alternativa en texto. | Tu contenido |
| **1.2.1** Solo audio y solo vídeo (grabado) | A | Un audio grabado tiene transcripción; un vídeo sin sonido tiene una descripción o transcripción. | No aplica |
| **1.2.2** Subtítulos (grabado) | A | Los vídeos grabados con sonido tienen subtítulos. | No aplica |
| **1.2.3** Audiodescripción o alternativa (grabado) | A | Lo que solo se ve en un vídeo se explica con audio o con texto. | No aplica |
| **1.2.4** Subtítulos (en directo) | AA | Los vídeos en directo tienen subtítulos. | No aplica |
| **1.2.5** Audiodescripción (grabado) | AA | Los vídeos grabados tienen audiodescripción de lo que solo se ve. | No aplica |
| **1.2.6** Lengua de signos (grabado) | AAA | Los vídeos grabados tienen interpretación en lengua de signos. | No aplica |
| **1.2.7** Audiodescripción ampliada (grabado) | AAA | El vídeo se pausa cuando no hay hueco para la audiodescripción. | No aplica |
| **1.2.8** Alternativa al vídeo (grabado) | AAA | Los vídeos grabados tienen una versión completa en texto. | No aplica |
| **1.2.9** Solo audio (en directo) | AAA | El audio en directo tiene una alternativa en texto. | No aplica |
| **1.3.1** Información y relaciones | A | La estructura (títulos, listas, tablas, etiquetas, zonas) está en el HTML, no solo en el aspecto. | Cumple |
| **1.3.2** Secuencia con significado | A | El orden de lectura del HTML tiene sentido. | Cumple |
| **1.3.3** Características sensoriales | A | Las instrucciones no dependen solo de la forma, el tamaño, la posición o el sonido («el botón redondo de la derecha»). | Tu contenido |
| **1.3.4** Orientación | AA | La página funciona en vertical y en horizontal. | Cumple |
| **1.3.5** Propósito de los campos | AA | Los campos sobre la persona usan `autocomplete`. | Tu contenido |
| **1.3.6** Identificar el propósito | AAA | El propósito de las zonas, iconos y controles lo pueden leer los programas. | Cumple |
| **1.4.1** Uso del color | A | El color nunca es la única forma de dar una información. | Cumple |
| **1.4.2** Control del audio | A | El audio que suena solo más de 3 segundos se puede parar. | No aplica |
| **1.4.3** Contraste mínimo | AA | Texto 4,5:1; texto grande 3:1. | Cumple |
| **1.4.4** Cambiar el tamaño del texto | AA | La página funciona con el texto al 200 %. | Cumple |
| **1.4.5** Imágenes de texto | AA | El texto es texto de verdad, no una imagen (salvo los logos). | Tu contenido |
| **1.4.6** Contraste mejorado | AAA | Texto 7:1; texto grande 4,5:1. | Cumple |
| **1.4.7** Poco o ningún sonido de fondo | AAA | La voz de un audio tiene poco o ningún sonido de fondo. | No aplica |
| **1.4.8** Presentación visual | AAA | Bloques de texto: líneas de 80 caracteres como mucho, sin justificar, interlineado de 1,5 y colores elegibles. | Cumple |
| **1.4.9** Imágenes de texto (sin excepción) | AAA | Ninguna imagen de texto salvo los logos. | Tu contenido |
| **1.4.10** Adaptación | AA | A 320 px se lee todo sin desplazarse hacia los lados. | Cumple |
| **1.4.11** Contraste de lo que no es texto | AA | Bordes de controles, foco y partes de gráficos: 3:1. | Cumple |
| **1.4.12** Espaciado del texto | AA | Sigue funcionando con más espacio entre líneas, letras, palabras y párrafos. | Cumple |
| **1.4.13** Contenido al pasar el ratón o con el foco | AA | Los tooltips se cierran con Escape, se puede pasar el ratón por encima y no desaparecen solos. | Cumple |

## 2. Operable

| Criterio | Nivel | Qué pide | Estado |
| --- | --- | --- | --- |
| **2.1.1** Teclado | A | Todo funciona con el teclado. | Cumple |
| **2.1.2** Sin trampas de teclado | A | Siempre se puede salir de un componente con el teclado. | Cumple |
| **2.1.3** Teclado (sin excepción) | AAA | Absolutamente todo funciona con el teclado, sin excepción. | Cumple |
| **2.1.4** Atajos de una sola tecla | A | Los atajos de una sola letra se pueden desactivar o cambiar. | Cumple |
| **2.2.1** Tiempo ajustable | A | Los límites de tiempo se pueden quitar, ajustar o ampliar. | Tu contenido |
| **2.2.2** Pausar, detener, ocultar | A | Lo que se mueve, parpadea o se actualiza solo se puede pausar. | Cumple |
| **2.2.3** Sin tiempo | AAA | No hay límites de tiempo. | Tu contenido |
| **2.2.4** Interrupciones | AAA | Las interrupciones (avisos, actualizaciones) se pueden aplazar. | Tu contenido |
| **2.2.5** Volver a identificarse | AAA | Si la sesión caduca, no se pierden datos al volver a entrar. | Tu contenido |
| **2.2.6** Tiempo de inactividad | AAA | Se avisa de cuánto tiempo se puede estar sin hacer nada antes de perder datos. | Tu contenido |
| **2.3.1** Tres destellos o menos | A | Nada destella más de tres veces por segundo. | Cumple |
| **2.3.2** Tres destellos | AAA | Nada destella más de tres veces por segundo, sea del tamaño que sea. | Cumple |
| **2.3.3** Animación por interacción | AAA | Las animaciones que provoca la persona se pueden quitar («reducir movimiento»). | Cumple |
| **2.4.1** Saltar bloques | A | Una forma de saltarse los bloques que se repiten (enlace de saltar, zonas). | Cumple |
| **2.4.2** Título de la página | A | Cada página tiene un título que dice qué es. | Cumple |
| **2.4.3** Orden del foco | A | El foco avanza en un orden lógico. | Cumple |
| **2.4.4** Propósito de los enlaces (en contexto) | A | Cada enlace dice adónde lleva, con su texto o con la frase de alrededor. | Tu contenido |
| **2.4.5** Varias formas de llegar | AA | Hay más de una forma de encontrar una página (menú, buscador, enlaces). | Cumple |
| **2.4.6** Títulos y etiquetas | AA | Los títulos y las etiquetas describen su contenido. | Tu contenido |
| **2.4.7** Foco visible | AA | El foco del teclado siempre se ve. | Cumple |
| **2.4.8** Ubicación | AAA | Se sabe en qué parte de la web estás (página actual en el menú, migas de pan). | Cumple |
| **2.4.9** Propósito de los enlaces (solo el enlace) | AAA | El texto del enlace, solo, dice adónde lleva. | Tu contenido |
| **2.4.10** Títulos de sección | AAA | Cada sección del contenido tiene un título. | Tu contenido |
| **2.4.11** Foco no tapado (mínimo) | AA | El elemento con el foco no queda tapado del todo por barras fijas. | Cumple |
| **2.4.12** Foco no tapado (mejorado) | AAA | Ninguna parte del elemento con el foco queda tapada. | Cumple |
| **2.4.13** Aspecto del foco | AAA | El contorno del foco mide al menos 2 px y tiene 3:1 de contraste con y sin foco. | Cumple |
| **2.5.1** Gestos con el puntero | A | Lo que pide gestos con varios dedos o un recorrido también funciona con un solo toque. | Cumple |
| **2.5.2** Cancelar la pulsación | A | Las acciones se hacen al soltar, así que se pueden cancelar apartando el dedo. | Cumple |
| **2.5.3** Etiqueta en el nombre | A | El nombre accesible contiene el texto visible. | Cumple |
| **2.5.4** Activación por movimiento | A | Lo que funciona al agitar o inclinar el dispositivo también funciona con un botón. | No aplica |
| **2.5.5** Tamaño del objetivo (mejorado) | AAA | Todo lo que se pulsa mide al menos 44 × 44 px. | Cumple |
| **2.5.6** Varios modos de entrada | AAA | Se puede usar ratón, teclado y pantalla táctil a la vez. | Cumple |
| **2.5.7** Arrastrar | AA | Lo que se hace arrastrando también se puede hacer sin arrastrar. | Cumple |
| **2.5.8** Tamaño del objetivo (mínimo) | AA | Todo lo que se pulsa mide al menos 24 × 24 px. | Cumple |

## 3. Comprensible

| Criterio | Nivel | Qué pide | Estado |
| --- | --- | --- | --- |
| **3.1.1** Idioma de la página | A | La página dice su idioma con `lang`. | Tu contenido |
| **3.1.2** Idioma de las partes | AA | Las partes en otro idioma lo dicen con `lang`. | Tu contenido |
| **3.1.3** Palabras poco comunes | AAA | Las palabras poco comunes y la jerga se explican. | Tu contenido |
| **3.1.4** Abreviaturas | AAA | Las abreviaturas se explican (por ejemplo con `<abbr>`). | Tu contenido |
| **3.1.5** Nivel de lectura | AAA | Los textos difíciles tienen una versión más sencilla. | Tu contenido |
| **3.1.6** Pronunciación | AAA | Cuando la pronunciación cambia el significado, se explica. | Tu contenido |
| **3.2.1** Al recibir el foco | A | Recibir el foco no cambia la página ni el contexto. | Cumple |
| **3.2.2** Al introducir datos | A | Cambiar un campo no cambia el contexto sin avisar. | Cumple |
| **3.2.3** Navegación coherente | AA | Los menús están en el mismo sitio y orden en todas las páginas. | Cumple |
| **3.2.4** Identificación coherente | AA | La misma función tiene el mismo nombre e icono en todas partes. | Cumple |
| **3.2.5** Cambios a petición | AAA | Los cambios grandes (ventana nueva, página nueva) solo pasan cuando la persona lo pide. | Cumple |
| **3.2.6** Ayuda coherente | A | La ayuda (contacto, chat, preguntas frecuentes) está en el mismo sitio en todas las páginas. | Tu contenido |
| **3.3.1** Identificación de errores | A | Los errores se muestran con texto y dicen qué campo. | Cumple |
| **3.3.2** Etiquetas o instrucciones | A | Los campos tienen etiquetas, e instrucciones cuando hacen falta. | Cumple |
| **3.3.3** Sugerencias ante errores | AA | El mensaje de error dice cómo arreglarlo. | Tu contenido |
| **3.3.4** Prevención de errores (legales, económicos, datos) | AA | Los envíos importantes se pueden revisar, corregir o deshacer. | Tu contenido |
| **3.3.5** Ayuda | AAA | Hay ayuda para rellenar los formularios. | Tu contenido |
| **3.3.6** Prevención de errores (todos) | AAA | Todos los envíos se pueden revisar, corregir o deshacer. | Tu contenido |
| **3.3.7** Datos repetidos | A | No hay que volver a escribir lo que ya diste en el mismo proceso. | Tu contenido |
| **3.3.8** Inicio de sesión accesible (mínimo) | AA | Iniciar sesión no pide recordar, copiar ni resolver nada (funcionan los gestores de contraseñas y pegar). | Tu contenido |
| **3.3.9** Inicio de sesión accesible (mejorado) | AAA | Tampoco se pide reconocer imágenes («selecciona los semáforos»). | Tu contenido |

## 4. Robusto

| Criterio | Nivel | Qué pide | Estado |
| --- | --- | --- | --- |
| **4.1.2** Nombre, función, valor | A | Todo control tiene un nombre, una función y un estado que los lectores de pantalla pueden leer. | Cumple |
| **4.1.3** Mensajes de estado | AA | Los mensajes que aparecen sin mover el foco se anuncian. | Cumple |

El texto oficial, en inglés: [WCAG 2.2](https://www.w3.org/TR/WCAG22/). En español: [la norma UNE-EN 301549](https://www.une.org) y las guías del [Observatorio de Accesibilidad](https://administracionelectronica.gob.es/pae_Home/pae_Estrategias/pae_Accesibilidad.html).
