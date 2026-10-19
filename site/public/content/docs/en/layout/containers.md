# Containers

The container centers the page content and leaves a margin on the sides. It is the first thing inside each section.

## Container

`.gm-container` is at most 1240 px wide and leaves 24 px on each side (16 px on phones).

```html
<div class="gm-container gm-py-4" style="outline: 2px dashed var(--gm-field-border)">
  Centered content, with a margin on the sides.
</div>
```

## Narrow

`.gm-container--narrow`, at most 960 px: for long texts, forms or articles, which read better without very long lines.

```html
<div class="gm-container gm-container--narrow gm-py-4" style="outline: 2px dashed var(--gm-field-border)">
  Comfortable to read.
</div>
```

## Full width

`.gm-container--fluid` reaches the edges of the screen but keeps the side margin.

```html
<div class="gm-container--fluid gm-py-4" style="outline: 2px dashed var(--gm-field-border)">
  Edge to edge.
</div>
```

## Inner page

`gm-page` leaves the top space of the pages that are not the home page (4.5 rem) and `gm-lead` is the lead paragraph below the title: a bit bigger and in a comfortable reading column (42.5 rem).

```html
<section class="gm-container gm-page gm-pt-0">
  <h1>Icons</h1>
  <p class="gm-lead gm-muted gm-mb-0">More than 300 free icons, outline and filled, with the same names as Bootstrap Icons.</p>
</section>
```

In the example, `gm-pt-0` removes the top space so it fits in the box.

## Changing the width

The maximum width is the `--gm-container` variable. Change it for the whole site or only inside a section:

```html-code
<style>
  :root { --gm-container: 1100px; }
</style>
```

| Class | Max width | Side margin |
| --- | --- | --- |
| `.gm-container` | 1240 px (`--gm-container`) | 24 px; 16 px up to 600 px |
| `.gm-container--narrow` | 960 px | same |
| `.gm-container--fluid` | full | same |
