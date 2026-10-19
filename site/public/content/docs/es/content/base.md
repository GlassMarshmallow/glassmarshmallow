# Base y textos

Lo que GlassMarshmallow pone a toda la página al cargarlo, sin clases: la fuente, los colores, los títulos, el foco y algunas reglas de accesibilidad.

## Qué hace la base

- **Tamaños:** todo se mide con `box-sizing: border-box` (el relleno y el borde van dentro del ancho).
- **Página:** fondo `--gm-bg`, texto `--gm-text`, fuente Montserrat (`--gm-font`) e interlineado de 1,5. Ancho mínimo de 320 px.
- **Formularios:** los botones y campos usan la misma fuente que el texto.
- **Enlaces:** sin subrayado ni color propio (cada componente les da el suyo).
- **Imágenes:** nunca más anchas que su contenedor.
- **Selección:** el texto seleccionado se tiñe con `--gm-selection`.

## Títulos

Letras juntas, como en My Book Box, y con las líneas equilibradas (`text-wrap: balance`) para que no quede una palabra sola abajo.

```html
<h1 class="gm-m-0">Título de la página</h1>
<h2>Título de una sección</h2>
<h3>Título de un apartado</h3>
<p>Texto normal, con un interlineado cómodo para leer párrafos largos.</p>
```

## Textos de ayuda

| Clase | Qué es |
| --- | --- |
| `.gm-muted` | Texto secundario, en gris (7:1 o más, AAA) |
| `.gm-small` | Texto pequeño (0,84 rem) |
| `.gm-eyebrow` | Antetítulo: gris y seminegrita, encima de un título |

```html
<p class="gm-eyebrow">Novedad</p>
<h3 class="gm-mt-0">GlassMarshmallow 0.1</h3>
<p class="gm-muted">Texto secundario para descripciones y ayudas.</p>
<p class="gm-small gm-muted">Texto pequeño: fechas, notas, avisos legales.</p>
```

## Lista de datos

`.gm-dl`: etiqueta en gris y valor debajo, para resúmenes (los datos de un pedido, de un perfil o de una solicitud).

```html
<dl class="gm-dl">
  <div><dt>Nombre</dt><dd>Sara Paez Yamuza</dd></div>
  <div><dt>Correo</dt><dd>sara@ejemplo.com</dd></div>
  <div><dt>Proyecto</dt><dd>Una tienda online de cerámica, con pago con tarjeta y envíos a toda España.</dd></div>
</dl>
```

## Accesibilidad que ya viene puesta

- **Foco siempre visible:** contorno de 2 px del color de acento al usar el teclado (WCAG 2.4.7).
- **Menos movimiento:** si la persona lo pide en su sistema, se quitan animaciones y transiciones (WCAG 2.3.3).
- **Foco no tapado:** al desplazarse, lo que recibe el foco queda por debajo de la barra de arriba y por encima de la de abajo del móvil (WCAG 2.4.12).
- **Líneas cómodas:** párrafos y listas de 80 caracteres como mucho y sin justificar (WCAG 1.4.8).
- **Alto contraste del sistema:** con él activado, mandan los colores de la persona (WCAG 1.4.8).
