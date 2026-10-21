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

Si solo necesitas algunas partes, importa los archivos fuente uno a uno. `tokens.css` siempre va primero.

```css
@import "glassmarshmallow/css/tokens.css";
@import "glassmarshmallow/css/base.css";
@import "glassmarshmallow/css/components.css";
@import "glassmarshmallow/css/backdrop.css";
```

## Iconos

Los iconos están en su propio paquete, [GlassMarshmallow Icons](/icons).

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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glassmarshmallow@0.2.0/dist/css/glassmarshmallow.min.css">
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
