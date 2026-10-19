# Logo ticker

A strip that slowly moves from right to left with logos and names, like the technologies strip of the portfolio template. Dark glass (white by day) with a thin border above and below, sky by day and turquoise at night.

## Example

The content goes **twice in a row** inside `.gm-ticker__track`, so the loop is seamless.

```html
<div class="gm-ticker">
  <div class="gm-ticker__track" aria-hidden="true">
    <span class="gm-ticker__item"><i class="gmi gmi-angular"></i>Angular</span><span class="gm-ticker__item"><i class="gmi gmi-typescript"></i>TypeScript</span><span class="gm-ticker__item"><i class="gmi gmi-database"></i>PostgreSQL</span><span class="gm-ticker__item"><i class="gmi gmi-dotnet"></i></span><span class="gm-ticker__item"><i class="gmi gmi-figma"></i>Figma</span><span class="gm-ticker__item"><i class="gmi gmi-ollama"></i>Ollama</span>
    <span class="gm-ticker__item"><i class="gmi gmi-angular"></i>Angular</span><span class="gm-ticker__item"><i class="gmi gmi-typescript"></i>TypeScript</span><span class="gm-ticker__item"><i class="gmi gmi-database"></i>PostgreSQL</span><span class="gm-ticker__item"><i class="gmi gmi-dotnet"></i></span><span class="gm-ticker__item"><i class="gmi gmi-figma"></i>Figma</span><span class="gm-ticker__item"><i class="gmi gmi-ollama"></i>Ollama</span>
  </div>
  <button type="button" class="gm-icon-btn gm-icon-btn--glass gm-ticker__pause" aria-pressed="false" aria-label="Pause the strip"><i class="gmi gmi-pause-fill" aria-hidden="true"></i></button>
</div>
```

## Static

`.gm-ticker--static`: no movement, with the logos that fit centered (for example, when the page has no animations). Then one copy is enough.

```html
<div class="gm-ticker gm-ticker--static" aria-hidden="true">
  <div class="gm-ticker__track"><span class="gm-ticker__item"><i class="gmi gmi-angular"></i>Angular</span><span class="gm-ticker__item"><i class="gmi gmi-typescript"></i>TypeScript</span><span class="gm-ticker__item"><i class="gmi gmi-database"></i>PostgreSQL</span><span class="gm-ticker__item"><i class="gmi gmi-dotnet"></i></span><span class="gm-ticker__item"><i class="gmi gmi-figma"></i>Figma</span><span class="gm-ticker__item"><i class="gmi gmi-ollama"></i>Ollama</span></div>
</div>
```

## Pausing it

The round button with the pause icon (`.gm-ticker__pause`) goes at the end of the strip, without taking up space. With the optional script, pressing it stops the strip (`.is-paused`), the icon changes to play and the button says it is pressed (its name, “Pause the strip”, does not change):

```html-code
<script type="module">
  import { initTickers } from 'glassmarshmallow/js/ticker.js';
  initTickers();
</script>
```

It also stops on its own on hover or with focus inside, and it does not move if the person asks for reduced motion.

## Accessibility

- The logos are **decorative** (`aria-hidden="true"` on `.gm-ticker__track`): the same information must be elsewhere on the page (in the template, the Skills section).
- It moves on its own for more than 5 seconds, so it has the button to stop it, reachable with the keyboard and by touch (WCAG 2.2.2). When static (`--static`) it is not needed.
- It does not move if the person asks for reduced motion (WCAG 2.3.3).
