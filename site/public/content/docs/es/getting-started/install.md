# Instalación

Añade GlassMarshmallow a tu proyecto con un gestor de paquetes, un CDN o los archivos fuente.

## Gestores de paquetes

Instala el CSS de GlassMarshmallow con el gestor de paquetes que prefieras.

```sh:npm
npm install glassmarshmallow
```
```sh:pnpm
pnpm add glassmarshmallow
```
```sh:Yarn
yarn add glassmarshmallow
```
```sh:Bun
bun add glassmarshmallow
```

### Usar el CSS

Enlaza el archivo compilado en tu HTML o impórtalo desde tu propio CSS.

```html:HTML
<link rel="stylesheet" href="node_modules/glassmarshmallow/dist/css/glassmarshmallow.min.css">
```
```css:CSS
@import "glassmarshmallow/dist/css/glassmarshmallow.css";
```

### Tu CSS gana siempre

Todo el framework va dentro de una **capa de CSS** llamada `glassmarshmallow` (`@layer`). Tu CSS, fuera de cualquier capa, le gana siempre, sea cual sea su especificidad y lo enlaces donde lo enlaces: basta un simple `.card { padding: 2rem; }` para cambiar un estilo del framework, sin `!important` ni selectores largos.

```css:CSS
/* Gana a .gm-card aunque .gm-card se enlace después */
.gm-card { border-radius: 0; }
```

Si tú también usas capas, di el orden una vez, al principio de tu CSS. Gana la capa de después:

```css:CSS
@layer glassmarshmallow, mis-estilos;
```

### La letra (opcional)

GlassMarshmallow usa Montserrat. Viene incluida en un archivo aparte, `glassmarshmallow-font.min.css`, que la sirve desde tu propia web (sin Google Fonts). Añádelo antes del framework si quieres esa letra; si prefieres otra, no lo añadas y cambia `--gm-font` (ver [Tipografía](/docs/customize/typography)).

```html:HTML
<link rel="stylesheet" href="node_modules/glassmarshmallow/dist/css/glassmarshmallow-font.min.css">
<link rel="stylesheet" href="node_modules/glassmarshmallow/dist/css/glassmarshmallow.min.css">
```
```css:CSS
@import "glassmarshmallow/dist/css/glassmarshmallow-font.css";
@import "glassmarshmallow/dist/css/glassmarshmallow.css";
```

### Solo las partes que necesitas

`glassmarshmallow.css` lo trae todo. Si tu web solo usa algunos componentes, carga el **núcleo** (colores, base,
cuadrícula, tema, utilidades y fondo) y después las **familias de componentes** que necesites. Pueden ir en
cualquier orden: las capas del framework las colocan en su sitio.

```css:CSS
@import "glassmarshmallow/dist/css/glassmarshmallow-core.css";
@import "glassmarshmallow/dist/css/components/basics.css";
@import "glassmarshmallow/dist/css/components/navigation.css";
```

| Familia | Componentes | Necesita |
| --- | --- | --- |
| `basics` | Botón, tarjeta, aviso, etiqueta, código, avatar, acordeón, progreso, tooltip, ventana, botón redondo de cristal, lista de datos, zona que se pulsa, comando para copiar | — |
| `forms` | Formulario, campo, barras y control deslizante, resumen de errores, segmentado, calendario, selector de color | `basics` |
| `navigation` | Barra de navegación y de pestañas, menú, buscador, menú a pantalla completa, menú lateral, índice, anterior/siguiente, pies, iconos sociales | `basics` |
| `media` | Reproductor de vídeo, carrusel, galería, franja de logos | — |
| `chat` | Fila deslizable, chip, campo del chat, bocadillo, aviso de IA | — |
| `pages` | Sección, portada, estructura de la página, página interior, texto largo, fragmento de código, cuadrícula de iconos, escaparate, página de documentación | `basics` |
| `tools` | La estructura de los generadores (`gm-tool`) | `basics`, `forms` |

Cada archivo tiene también su `.min.css`. Lo que pesa cada uno está en [Rendimiento](/docs/getting-started/performance).

## Iconos

Los iconos están en su propio paquete, [GlassMarshmallow Icons](/icons). Con GlassMarshmallow 0.3 o posterior, usa los iconos 0.4 o posteriores: van en la capa de iconos del framework, así que los componentes y las utilidades pueden ajustarlos.

```sh:npm
npm install glassmarshmallow-icons
```
```sh:pnpm
pnpm add glassmarshmallow-icons
```
```sh:Yarn
yarn add glassmarshmallow-icons
```
```sh:Bun
bun add glassmarshmallow-icons
```

Después carga la hoja de estilos y usa un icono con dos clases. Los iconos toman el color del texto que los rodea.

```html
<link rel="stylesheet" href="node_modules/glassmarshmallow-icons/font/glassmarshmallow-icons.css">

<i class="gmi gmi-moon" aria-hidden="true"></i>
```

## CDN

Sáltate la instalación y carga el CSS compilado desde un CDN.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glassmarshmallow@0.3.0/dist/css/glassmarshmallow.min.css">
```

## Descarga

Descarga el código fuente desde el [repositorio en GitHub](https://github.com/GlassMarshmallow/glassmarshmallow). Los archivos listos para usar están en `dist/css/` y los archivos fuente en `css/`.

Para volver a generar `dist/` después de cambiar el código fuente:

```sh
npm run css
```

## Para herramientas de IA y LLM

GlassMarshmallow incluirá archivos que ayudan a los asistentes de IA a escribir código correcto con el framework:

- **`llms.txt`**: un mapa corto de la documentación para modelos de lenguaje.
- **`AGENTS.md`**: las reglas para los agentes que trabajan en el repositorio.
- **Skills**: instrucciones listas para tareas habituales.

Más información en [IA](/docs/getting-started/ai).
