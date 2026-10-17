# Experiencia de usuario

Reglas para que lo que hagas con GlassMarshmallow sea fácil de entender y de usar. Algunas son nuestras (las hemos ido decidiendo al diseñar el framework) y otras salen de las guías de referencia (GOV.UK, W3C, Nielsen Norman Group). Para formularios, mira también las [reglas de los formularios](/docs/forms/rules).

## Opciones a elegir

- **2 o 3 opciones cortas, en fila**, con el [segmentado](/docs/forms/segmented). **Más de 3 o con textos largos, una debajo de otra** (`--stack`).
- La opción elegida se ve por algo más que el color: la píldora blanca y la sombra.
- Si hay una opción recomendada o más habitual, que venga marcada de inicio.

## Listas

- **Con más de 3 elementos, en lista**, uno debajo de otro, no seguidos en una frase («Figma, Photoshop, Illustrator y…»). Se leen de un vistazo y los lectores de pantalla dicen cuántos son.
- Dentro del acordeón, con [`.gm-accordion__list`](/docs/components/accordion).

## Navegación en el móvil

- La [barra de pestañas](/docs/components/tabbar) lleva **4 botones como mucho, contando «Más»**. Lo que no quepa va en el panel «Más».
- Cada botón con icono y una palabra.
- La página actual se marca en la barra (`aria-current="page"`).

## Iconos

- **Solo los iconos de GlassMarshmallow** (`gmi`): nada de emojis ni iconos de otros sets mezclados.
- Junto a un texto, **centrados con su primera línea y un poco más grandes que la letra** (por ejemplo, 1,25 rem con texto de 0,92 rem). Se comprueba midiendo, no a ojo.
- Un icono solo (sin texto) lleva nombre para los lectores de pantalla (`aria-label` o texto oculto). Si va con texto, el icono es decorativo (`aria-hidden="true"`).

## Botones y acciones

- **Una acción principal por zona**: el botón negro (blanco de noche) o turquesa. El resto, secundarios o de texto.
- El texto del botón dice **qué pasa al pulsarlo** («Guardar cambios», «Ver el siguiente episodio»), no «Aceptar».
- Las acciones que no se pueden deshacer (borrar, pagar) piden confirmación y dicen qué se va a perder.
- Todo lo que se pulsa mide **44 px** como mínimo (WCAG 2.5.5).

## Saber qué está pasando

- **Mientras carga**, enseña que se está trabajando: [barra de progreso](/docs/components/progress), icono que gira o huecos con `gm-animate-shimmer`. Con un texto («Cargando la biblioteca…»).
- **Al terminar**, confirma lo que ha pasado con un [aviso](/docs/components/alert) («Cambios guardados»), anunciado a los lectores de pantalla (`role="status"`).
- **Sin contenido**, explica por qué la pantalla está vacía y qué hacer («Aún no tienes libros. Añade el primero»).
- **Si algo falla**, di qué ha pasado y cómo arreglarlo, sin culpar a nadie.

## Mostrar y esconder

- No escondas en un [acordeón](/docs/components/accordion), un [carrusel](/docs/components/carousel) o una pestaña lo que todo el mundo necesita: úsalos para lo que solo interesa a algunos.
- En el móvil se puede reorganizar, pero no quitar: quien use el móvil debe poder hacer lo mismo que en el escritorio.

## Movimiento

- Las [animaciones](/docs/utilities/animations) son cortas y tienen un motivo: algo entra, sale o cambia.
- Todo se para si la persona pide **menos movimiento** en su sistema (el framework ya lo hace).
- Nada que se mueva solo más de 5 segundos sin poder pararlo, como el carrusel automático (que tiene pausa).

## Colores y modos

- **Claro y oscuro con el mismo cuidado**: todo se revisa en los dos modos.
- **Nunca solo el color** para dar información: con texto o icono además (un error en coral también dice que es un error).
- Texto de **7:1** o más (AAA) siempre que se pueda; el mínimo es 4,5:1. Bordes e iconos que hay que ver, 3:1.

## Coherencia

- Lo mismo se llama igual y funciona igual en toda la web: si un botón se llama «Guardar» en una página, no se llama «Aplicar» en otra.
- Usa los componentes del framework antes que hacer uno nuevo; si hace falta uno nuevo, se añade a GlassMarshmallow para que esté disponible en todos los proyectos.
