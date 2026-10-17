# Instalación

Añade GlassMarshmallow a tu proyecto con un gestor de paquetes, un CDN o los archivos fuente.

> **Todavía no está publicado.** GlassMarshmallow v0.1 sigue en desarrollo, así que el paquete de npm y los enlaces del CDN aún no funcionan. Muestran cómo será la instalación cuando se publique.

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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glassmarshmallow@0.1.0/dist/css/glassmarshmallow.min.css">
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
