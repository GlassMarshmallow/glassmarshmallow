# Table of contents

"On this page": the sections of a long page, to jump to each one. On wide screens it sits in a column on the right and stays in view while scrolling; below 1200 px it becomes a dropdown above the text.

## Example

```html
<aside class="gm-toc gm-static gm-block" aria-label="Table of contents example">
  <p class="gm-toc__title">On this page</p>
  <ul class="gm-toc__list">
    <li><a class="gm-toc__link" href="#">Example</a></li>
    <li class="gm-toc__sub"><a class="gm-toc__link" href="#">With tabs</a></li>
    <li><a class="gm-toc__link" href="#">Accessibility</a></li>
  </ul>
</aside>
```

`gm-toc__sub` indents a subsection. In the example it has `gm-static` so it stays in place and `gm-block` so it also shows on narrow screens.

## Dropdown (phones)

`gm-toc--collapsible` on a `<details>`: it opens and closes with no code.

```html
<details class="gm-toc gm-toc--collapsible gm-block">
  <summary>On this page</summary>
  <ul class="gm-toc__list">
    <li><a class="gm-toc__link" href="#">Example</a></li>
    <li><a class="gm-toc__link" href="#">Accessibility</a></li>
  </ul>
</details>
```

In the example it has `gm-block` so it also shows on wide screens.

## With the text next to it

`gm-toc-layout` puts the text on the left and the table of contents on the right (12.5 rem). It holds both: the column and the dropdown, and each one shows at its screen size.

```html-code
<div class="gm-toc-layout">
  <article>
    <details class="gm-toc gm-toc--collapsible">…</details>
    …the text…
  </article>
  <aside class="gm-toc" aria-label="On this page">…</aside>
</div>
```

## Accessibility

- The column is an `<aside>` with an `aria-label`; the dropdown, a `<details>` the browser already makes accessible.
- Links are 44 px tall (WCAG 2.5.5).
- Each section of the text needs an `id` that matches its link.
