# Accordion

A list of sections that open and close, all in one glass card and separated by a thin line. It is the one from the portfolio's skills section.

## Example

With the same `name` on every `<details>`, only one opens at a time.

```html
<div class="gm-accordion">
  <details class="gm-accordion__item" name="questions">
    <summary class="gm-accordion__summary">
      <span class="gm-accordion__title">How long does shipping take?</span>
      <i class="gmi gmi-chevron-down gm-accordion__chevron" aria-hidden="true"></i>
    </summary>
    <div class="gm-accordion__content">
      <p>Between 2 and 4 working days on the mainland. To the islands, between 4 and 7.</p>
    </div>
  </details>
  <details class="gm-accordion__item" name="questions">
    <summary class="gm-accordion__summary">
      <span class="gm-accordion__title">Can I return an order?</span>
      <i class="gmi gmi-chevron-down gm-accordion__chevron" aria-hidden="true"></i>
    </summary>
    <div class="gm-accordion__content">
      <p>Yes, within 30 days of receiving it, no questions asked.</p>
    </div>
  </details>
  <details class="gm-accordion__item" name="questions">
    <summary class="gm-accordion__summary">
      <span class="gm-accordion__title">Which payment methods do you accept?</span>
      <i class="gmi gmi-chevron-down gm-accordion__chevron" aria-hidden="true"></i>
    </summary>
    <div class="gm-accordion__content">
      <ul class="gm-accordion__list">
        <li>Card</li>
        <li>Bank transfer</li>
        <li>Bizum</li>
      </ul>
    </div>
  </details>
</div>
```

## With icon and detail

Like in the portfolio: an icon in a circle on the left and a detail line under the title.

```html
<div class="gm-accordion">
  <details class="gm-accordion__item" name="skills" open>
    <summary class="gm-accordion__summary">
      <span class="gm-accordion__icon" aria-hidden="true"><i class="gmi gmi-palette"></i></span>
      <span class="gm-accordion__text">
        <span class="gm-accordion__title">Design</span>
        <span class="gm-accordion__meta">4 tools</span>
      </span>
      <i class="gmi gmi-chevron-down gm-accordion__chevron" aria-hidden="true"></i>
    </summary>
    <div class="gm-accordion__content">
      <ul class="gm-accordion__list">
        <li>Figma</li>
        <li>Clip Studio Paint</li>
        <li>Photoshop</li>
        <li>Illustrator</li>
      </ul>
    </div>
  </details>
  <details class="gm-accordion__item" name="skills">
    <summary class="gm-accordion__summary">
      <span class="gm-accordion__icon" aria-hidden="true"><i class="gmi gmi-window-stack"></i></span>
      <span class="gm-accordion__text">
        <span class="gm-accordion__title">Web development</span>
        <span class="gm-accordion__meta">6 technologies</span>
      </span>
      <i class="gmi gmi-chevron-down gm-accordion__chevron" aria-hidden="true"></i>
    </summary>
    <div class="gm-accordion__content">
      <ul class="gm-accordion__list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Angular</li>
        <li>.NET</li>
      </ul>
    </div>
  </details>
</div>
```

## Lists inside

If there are several items inside (more than 3), they go one below the other in a list, not run together in a sentence: `<ul class="gm-accordion__list">`. They are easier to scan and screen readers say how many there are.

## Several open at once

Without `name`, each section opens and closes on its own. With `open`, it starts open.

```html-code
<details class="gm-accordion__item" open>…</details>
```

## Accessibility

- It uses HTML `<details>` and `<summary>`: they open with the mouse, Enter or Space, and screen readers say whether they are open or closed. No JavaScript needed.
- The chevron is decorative (`aria-hidden`); the state comes from the `<details>` itself.
- The accordion border reaches 3.3:1 (WCAG 1.4.11) and each row is at least 44 px tall (WCAG 2.5.5).
- The animation is removed when the person asks for reduced motion (`prefers-reduced-motion`).
- Do not hide information everyone needs in an accordion: use it for details only some people want.
