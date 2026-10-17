# Logo ticker

A strip that slowly moves from right to left with logos and names, like the technologies strip of the portfolio template. Dark glass (white by day) with a thin turquoise border above and below (by day, with the lights of the illustration).

## Example

The content goes **twice in a row** inside `.gm-ticker__track`, so the loop is seamless.

```html
<div class="gm-ticker" aria-hidden="true">
  <div class="gm-ticker__track">
    <span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>Angular</span><span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>TypeScript</span><span class="gm-ticker__item"><i class="gmi gmi-database"></i>PostgreSQL</span><span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>.NET</span><span class="gm-ticker__item"><i class="gmi gmi-palette"></i>Figma</span><span class="gm-ticker__item"><i class="gmi gmi-stars"></i>Ollama</span>
    <span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>Angular</span><span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>TypeScript</span><span class="gm-ticker__item"><i class="gmi gmi-database"></i>PostgreSQL</span><span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>.NET</span><span class="gm-ticker__item"><i class="gmi gmi-palette"></i>Figma</span><span class="gm-ticker__item"><i class="gmi gmi-stars"></i>Ollama</span>
  </div>
</div>
```

## Static

`.gm-ticker--static`: no movement, with the logos that fit centered (for example, when the page has no animations). Then one copy is enough.

```html
<div class="gm-ticker gm-ticker--static" aria-hidden="true">
  <div class="gm-ticker__track"><span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>Angular</span><span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>TypeScript</span><span class="gm-ticker__item"><i class="gmi gmi-database"></i>PostgreSQL</span><span class="gm-ticker__item"><i class="gmi gmi-code-slash"></i>.NET</span><span class="gm-ticker__item"><i class="gmi gmi-palette"></i>Figma</span><span class="gm-ticker__item"><i class="gmi gmi-stars"></i>Ollama</span></div>
</div>
```

## Pausing it

It pauses on its own on hover or with focus inside. From your code, with `.is-paused` (for example, with a “Pause” button).

## Accessibility

- It is **decorative** (`aria-hidden="true"`): the same information must be elsewhere on the page (in the template, the Skills section).
- It does not move if the person asks for reduced motion (WCAG 2.3.3).
- If it is the only moving thing and lasts more than 5 seconds, offer a button to stop it (`.is-paused`) (WCAG 2.2.2).
