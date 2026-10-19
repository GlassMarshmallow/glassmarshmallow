# Card

A glass box to group content: translucent background with blur, thin border, rounded corners and a soft shadow. It is the My Book Box panel.

## Example

```html
<div class="gm-card gm-max-w-sm">
  <h3 class="gm-mt-0 gm-mx-0 gm-mb-2">Basic plan</h3>
  <p class="gm-muted">To get started: a one-page website with a contact form.</p>
  <button type="button" class="gm-btn gm-btn--sm">See details</button>
</div>
```

## In a grid

With the [grid](/docs/layout/grid) (`.gm-grid--auto`), as many cards per row as fit.

```html
<div class="gm-grid gm-grid--auto gm-gap-sm" style="--gm-grid-min: 12.5rem">
  <div class="gm-card"><i class="gmi gmi-stars" aria-hidden="true" style="font-size: 1.5rem"></i><h3 class="gm-mt-2 gm-mx-0 gm-mb-1">Fast</h3><p class="gm-muted">Ready in minutes.</p></div>
  <div class="gm-card"><i class="gmi gmi-circle-half" aria-hidden="true" style="font-size: 1.5rem"></i><h3 class="gm-mt-2 gm-mx-0 gm-mb-1">Light and dark</h3><p class="gm-muted">Both modes, built in.</p></div>
  <div class="gm-card"><i class="gmi gmi-heart" aria-hidden="true" style="font-size: 1.5rem"></i><h3 class="gm-mt-2 gm-mx-0 gm-mb-1">Accessible</h3><p class="gm-muted">WCAG 2.2 AA and AAA.</p></div>
</div>
```

## The whole card as a link

If the whole card leads to another page, make the card the `<a>`. That avoids several repeated links.

```html
<a class="gm-card gm-block gm-max-w-sm" href="#" style="color: inherit">
  <strong>Palette generator</strong>
  <p class="gm-muted gm-mt-1 gm-mx-0 gm-mb-0">Create an accessible palette from one color.</p>
</a>
```

## Accessibility

- The border and shadow separate the card from the background; important content does not depend on them.
- If the card is a link, its text must say where it goes (WCAG 2.4.4).
- The last element in the card has no bottom margin, so the padding is the same top and bottom.
