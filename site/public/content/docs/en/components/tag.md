# Tag

A small pill to label something: a category, a status, something new. It is the gray My Book Box tag.

## Example

```html
<div class="gm-flex gm-flex-wrap gm-gap-2">
  <span class="gm-tag">Novel</span>
  <span class="gm-tag">Fantasy</span>
  <span class="gm-tag">2026</span>
</div>
```

## With color

With the palette colors (`.gm-theme-…` and `.gm-theme-solid`), black text on the pastel.

```html
<div class="gm-flex gm-flex-wrap gm-gap-2">
  <span class="gm-tag gm-theme-sky gm-theme-solid">New</span>
  <span class="gm-tag gm-theme-mint gm-theme-solid">Read</span>
  <span class="gm-tag gm-theme-lemon gm-theme-solid">Pending</span>
  <span class="gm-tag gm-theme-coral gm-theme-solid">Sold out</span>
</div>
```

## Tag or button

A tag only informs: it is not pressed. To filter or choose, use a pill button (`.gm-btn--pill`) or the [segmented control](/docs/forms/segmented).

## Accessibility

- The tag text says what it means; color only reinforces it (WCAG 1.4.1).
- Regular text on gray (14:1) or black on pastel (7.8:1 or more): AAA.
- It does not look like a button (no border, no hover effect), to avoid confusion.
