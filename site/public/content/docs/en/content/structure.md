# Page structure

The HTML elements that divide a page into regions: header, menu, main content, sections, side content and footer. Screen readers show them as a map of the page, so people can jump straight to the part they want.

## The map of a page

How the elements fit into each other in a typical page:

<div class="doc-diagram" aria-hidden="true"><div style="display: grid; gap: 8px; font-size: .82rem"><div class="gm-theme-sky gm-theme-solid" style="display: grid; gap: 8px; padding: 10px 14px"><code style="font-weight: 650">&lt;header&gt;</code><div class="gm-theme-blue gm-theme-solid" style="display: grid; gap: 8px; padding: 10px 14px"><code style="font-weight: 650">&lt;nav&gt;</code></div></div><div style="display: grid; grid-template-columns: minmax(0, 3fr) minmax(0, 1fr); gap: 8px"><div class="gm-theme-mint gm-theme-solid" style="display: grid; gap: 8px; padding: 10px 14px"><code style="font-weight: 650">&lt;main id="content"&gt;</code><code style="opacity: .8">&lt;h1&gt;</code><div class="gm-theme-peach gm-theme-solid" style="display: grid; gap: 8px; padding: 10px 14px"><code style="font-weight: 650">&lt;section&gt; + &lt;h2&gt;</code></div><div class="gm-theme-lemon gm-theme-solid" style="display: grid; gap: 8px; padding: 10px 14px"><code style="font-weight: 650">&lt;article&gt; + &lt;h2&gt;</code></div></div><div class="gm-theme-pink gm-theme-solid" style="display: grid; gap: 8px; padding: 10px 14px"><code style="font-weight: 650">&lt;aside&gt;</code></div></div><div class="gm-theme-lavender gm-theme-solid" style="display: grid; gap: 8px; padding: 10px 14px"><code style="font-weight: 650">&lt;footer&gt;</code></div></div></div>

## The skeleton

A complete page with all the regions. Copy it as a starting point.

```html-code
<body>
  <a class="gm-skip-link" href="#content">Skip to content</a>

  <header class="gm-navbar">
    <a class="gm-navbar__brand" href="/">GlassMarshmallow</a>
    <nav aria-label="Main">…</nav>
  </header>

  <main id="content" tabindex="-1">
    <h1>Page title</h1>

    <section aria-labelledby="news-title">
      <h2 id="news-title">News</h2>
      <article>
        <h3>Title of one piece of news</h3>
        <p>…</p>
      </article>
    </section>

    <aside aria-label="Related">…</aside>
  </main>

  <footer>…</footer>
</body>
```

## Each element and where it goes

| Element | What it is | Where it goes |
| --- | --- | --- |
| `<header>` | Top of the page: logo, main menu, search. | Directly in `<body>`, once. Inside an `<article>` it is just the header of that article. |
| `<nav>` | A group of links to move around: main menu, docs menu, «Previous / Next». | Wherever the menu is. If there are several, give each one an `aria-label` («Main», «Docs»…). |
| `<main>` | The content of the page, what is unique to it. | Once per page, directly in `<body>`. Give it `id="content"` for the skip link. |
| `<h1>…<h6>` | Headings: the outline of the page. | One `<h1>` with the title of the page, then `<h2>`, `<h3>`… in order, without skipping levels. |
| `<section>` | A part of the content about one topic. | Inside `<main>` (or an `<article>`), always with a heading. With `aria-labelledby` pointing to it, it becomes a region screen readers can jump to. |
| `<article>` | Something that makes sense on its own: a blog post, a news item, a product card, a comment. | Inside `<main>` or a `<section>`. It can have its own `<header>` and `<footer>`. |
| `<aside>` | Related content that is not the main one: a side panel, notes, links of interest. | Next to the content it relates to. If there are several, give each one an `aria-label`. |
| `<footer>` | Bottom of the page: credits, legal links, contact. | Directly in `<body>`, once. Inside an `<article>` it is just the end of that article. |
| `<search>` | A search form. | Around the search form, where it is (often in the `<header>`). |
| `<form>` | A form. | Where it is needed. With `aria-labelledby` pointing to its heading, screen readers find it as a region. |
| `<figure> + <figcaption>` | An image, chart or code with its caption. | Inside the content, where it is explained. |
| `<dialog>` | A window on top of the page. | At the end of `<body>` or next to the button that opens it. Open it with `showModal()` so the rest of the page can’t be used meanwhile. |

## Rules

- Use the element that says what the content is, and `<div>` only to group things for the layout.
- Only one `<main>`, one `<h1>` and, at the top level, one `<header>` and one `<footer>` per page.
- All the content goes inside a region: nothing loose outside `<header>`, `<main>` or `<footer>`.
- When an element appears more than once (two `<nav>`, two `<aside>`), give each one a different name with `aria-label` or `aria-labelledby`.
- The first link of the page is «Skip to content» (`.gm-skip-link`), and it points to the `id` of `<main>`.
- Don’t add `role="main"`, `role="navigation"`… to these elements: they already have it.
