# Estructura de la página

Los elementos de HTML que dividen una página en zonas: cabecera, menú, contenido principal, secciones, contenido lateral y pie. Los lectores de pantalla los muestran como un mapa de la página, para saltar directamente a la parte que se busca.

## El mapa de una página

Cómo encajan unos dentro de otros en una página normal:

<div class="gm-docs__diagram" aria-hidden="true"><div style="display: grid; gap: 8px; font-size: .82rem"><div class="gm-theme-sky gm-theme-solid" style="display: grid; gap: 8px; padding: 10px 14px"><code style="font-weight: 650">&lt;header&gt;</code><div class="gm-theme-blue gm-theme-solid" style="display: grid; gap: 8px; padding: 10px 14px"><code style="font-weight: 650">&lt;nav&gt;</code></div></div><div style="display: grid; grid-template-columns: minmax(0, 3fr) minmax(0, 1fr); gap: 8px"><div class="gm-theme-mint gm-theme-solid" style="display: grid; gap: 8px; padding: 10px 14px"><code style="font-weight: 650">&lt;main id="content"&gt;</code><code>&lt;h1&gt;</code><div class="gm-theme-peach gm-theme-solid" style="display: grid; gap: 8px; padding: 10px 14px"><code style="font-weight: 650">&lt;section&gt; + &lt;h2&gt;</code></div><div class="gm-theme-lemon gm-theme-solid" style="display: grid; gap: 8px; padding: 10px 14px"><code style="font-weight: 650">&lt;article&gt; + &lt;h2&gt;</code></div></div><div class="gm-theme-pink gm-theme-solid" style="display: grid; gap: 8px; padding: 10px 14px"><code style="font-weight: 650">&lt;aside&gt;</code></div></div><div class="gm-theme-lavender gm-theme-solid" style="display: grid; gap: 8px; padding: 10px 14px"><code style="font-weight: 650">&lt;footer&gt;</code></div></div></div>

## El esqueleto

Una página completa con todas las zonas. Cópiala para empezar.

```html-code
<body>
  <a class="gm-skip-link" href="#content">Saltar al contenido</a>

  <header class="gm-navbar">
    <a class="gm-navbar__brand" href="/">GlassMarshmallow</a>
    <nav aria-label="Principal">…</nav>
  </header>

  <main id="content" tabindex="-1">
    <h1>Título de la página</h1>

    <section aria-labelledby="news-title">
      <h2 id="news-title">Novedades</h2>
      <article>
        <h3>Título de una novedad</h3>
        <p>…</p>
      </article>
    </section>

    <aside aria-label="Relacionado">…</aside>
  </main>

  <footer>…</footer>
</body>
```

## Cada elemento y dónde se pone

| Elemento | Qué es | Dónde se pone |
| --- | --- | --- |
| `<header>` | Parte de arriba de la página: logo, menú principal, buscador. | Directamente en el `<body>`, una vez. Dentro de un `<article>` es solo la cabecera de ese artículo. |
| `<nav>` | Un grupo de enlaces para moverse: menú principal, menú de la documentación, «Anterior / Siguiente». | Donde esté el menú. Si hay varios, ponle a cada uno un `aria-label` («Principal», «Documentación»…). |
| `<main>` | El contenido de la página, lo que es solo suyo. | Una vez por página, directamente en el `<body>`. Dale `id="content"` para el enlace de saltar al contenido. |
| `<h1>…<h6>` | Títulos: el índice de la página. | Un `<h1>` con el título de la página y luego `<h2>`, `<h3>`… en orden, sin saltarse niveles. |
| `<section>` | Una parte del contenido sobre un tema. | Dentro de `<main>` (o de un `<article>`), siempre con un título. Si lo enlazas con `aria-labelledby`, pasa a ser una zona a la que los lectores de pantalla pueden saltar. |
| `<article>` | Algo que tiene sentido por sí solo: una entrada del blog, una novedad, una ficha de producto, un comentario. | Dentro de `<main>` o de una `<section>`. Puede tener su propio `<header>` y `<footer>`. |
| `<aside>` | Contenido relacionado que no es el principal: un panel lateral, notas, enlaces de interés. | Junto al contenido con el que tiene relación. Si hay varios, ponle a cada uno un `aria-label`. |
| `<footer>` | Parte de abajo de la página: créditos, enlaces legales, contacto. | Directamente en el `<body>`, una vez. Dentro de un `<article>` es solo el final de ese artículo. |
| `<search>` | Un buscador. | Alrededor del formulario de búsqueda, donde esté (a menudo en el `<header>`). |
| `<form>` | Un formulario. | Donde haga falta. Si lo enlazas con su título mediante `aria-labelledby`, los lectores de pantalla lo encuentran como una zona. |
| `<figure> + <figcaption>` | Una imagen, gráfico o código con su pie. | Dentro del contenido, donde se explica. |
| `<dialog>` | Una ventana encima de la página. | Al final del `<body>` o junto al botón que la abre. Ábrela con `showModal()` para que mientras tanto no se pueda usar el resto de la página. |

## Reglas

- Usa el elemento que dice qué es el contenido, y `<div>` solo para agrupar cosas por la maquetación.
- Un solo `<main>`, un `<h1>` y, en el primer nivel, un `<header>` y un `<footer>` por página.
- Todo el contenido va dentro de una zona: nada suelto fuera de `<header>`, `<main>` o `<footer>`.
- Cuando un elemento aparece más de una vez (dos `<nav>`, dos `<aside>`), dale a cada uno un nombre distinto con `aria-label` o `aria-labelledby`.
- El primer enlace de la página es «Saltar al contenido» (`.gm-skip-link`), y apunta al `id` del `<main>`.
- No añadas `role="main"`, `role="navigation"`… a estos elementos: ya lo llevan.
