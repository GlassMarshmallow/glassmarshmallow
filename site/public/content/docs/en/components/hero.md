# Hero

The home page block: the logo, the name, one sentence and the buttons, centered. Like this site's home page.

## Example

```html
<section class="gm-container gm-hero">
  <img class="gm-hero__logo" src="/logo.svg" alt="" width="120" height="120">
  <h1>GlassMarshmallow</h1>
  <p class="gm-hero__lead">A CSS framework with glass surfaces, light and dark mode and accessibility from the first component.</p>
  <div class="gm-hero__actions">
    <a class="gm-btn gm-btn--secondary" href="#">Examples</a>
    <a class="gm-btn" href="#">Read the docs</a>
  </div>
</section>
```

- The name shrinks with the screen so it fits on one line on a phone.
- `gm-hero__buttons` groups buttons that, on a phone, go one under the other with the same width (the longest one's). On a computer they stay in the row.

## Accessibility

- Only one `h1` per page: the hero one.
- The logo next to the name is decorative: `alt=""`.
