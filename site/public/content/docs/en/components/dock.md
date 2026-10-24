# Side bar

The desktop bar stuck to the left edge and as tall as the screen, like the Ubuntu dock, with the glass of the [navbar](/docs/components/navbar). It only has icons: the name of each section shows in a bubble next to it and, with its script, the icons grow on hover like in the Mac Dock. Below 861 px it is hidden and the [tab bar](/docs/components/tabbar) is used.

## Example

On a site it is fixed to the left (`position: fixed`); here it is shown inside the frame. Hover over it or reach it with the keyboard.

```html
<nav class="gm-dock gm-relative gm-flex" aria-label="Side bar example" data-gm-dock style="height: 26rem; inset: auto">
  <ul class="gm-dock__list">
    <li class="gm-dock__item"><span class="gm-tooltip">
      <a class="gm-dock__link" href="#" aria-label="Home" aria-describedby="dock-en-home" aria-current="page"><i class="gmi gmi-house" aria-hidden="true"></i></a>
      <span class="gm-tooltip__bubble" role="tooltip" id="dock-en-home">Home</span>
    </span></li>
    <li class="gm-dock__item"><span class="gm-tooltip">
      <a class="gm-dock__link" href="#" aria-label="Assistant" aria-describedby="dock-en-assistant"><i class="gmi gmi-chat" aria-hidden="true"></i></a>
      <span class="gm-tooltip__bubble" role="tooltip" id="dock-en-assistant">Assistant</span>
    </span></li>
    <li class="gm-dock__item"><span class="gm-tooltip">
      <a class="gm-dock__link" href="#" aria-label="Calendar" aria-describedby="dock-en-calendar"><i class="gmi gmi-calendar" aria-hidden="true"></i></a>
      <span class="gm-tooltip__bubble" role="tooltip" id="dock-en-calendar">Calendar</span>
    </span></li>
    <li class="gm-dock__item"><span class="gm-tooltip">
      <a class="gm-dock__link" href="#" aria-label="Tasks" aria-describedby="dock-en-tasks"><i class="gmi gmi-check-square" aria-hidden="true"></i></a>
      <span class="gm-tooltip__bubble" role="tooltip" id="dock-en-tasks">Tasks</span>
    </span></li>
    <li class="gm-dock__item"><span class="gm-tooltip">
      <a class="gm-dock__link" href="#" aria-label="Health" aria-describedby="dock-en-health"><i class="gmi gmi-heart" aria-hidden="true"></i></a>
      <span class="gm-tooltip__bubble" role="tooltip" id="dock-en-health">Health</span>
    </span></li>
  </ul>
  <ul class="gm-dock__list">
    <li class="gm-dock__item"><span class="gm-tooltip">
      <a class="gm-dock__link" href="#" aria-label="Settings" aria-describedby="dock-en-settings"><i class="gmi gmi-gear" aria-hidden="true"></i></a>
      <span class="gm-tooltip__bubble" role="tooltip" id="dock-en-settings">Settings</span>
    </span></li>
  </ul>
</nav>
```

## Parts

| Class | What it is |
| --- | --- |
| `.gm-dock` | The bar: glass, fixed to the left and as tall as the screen, from 861 px |
| `.gm-dock__list` | A group of icons. With two, the first goes at the top and the second at the bottom (for example, light or dark mode and settings) |
| `.gm-dock__item` | The space of each icon (it grows with the zoom and pushes the neighbours away) |
| `.gm-dock__link` | The icon: a link (`<a>`) or a button (`<button>`). The current page has `aria-current="page"` and is highlighted like the chosen option of the [segmented control](/docs/forms/segmented) |
| `.gm-has-dock` | On the `<body>` or the page container: leaves room for the bar on the left |

The name of each icon is a [tooltip](/docs/components/tooltip) (`.gm-tooltip`), which shows on the right inside the bar.

## Zoom on hover

Add `data-gm-dock` to the bar and load its script:

```html-code
<script type="module">
  import { initDocks } from 'glassmarshmallow/js/dock.js';
  initDocks();
</script>
```

| Attribute | What it does | Default |
| --- | --- | --- |
| `data-dock-max` | How much the icon under the pointer grows (`0.6` = 60 % bigger) | `0.6` |
| `data-dock-radius` | How far the effect reaches the neighbours, in pixels | `96` |
| `data-dock-ease` | How fast it follows the pointer, from 0 to 1 (higher, faster) | `0.22` |

Without the script, the bar works the same, without the zoom.

## Rules

- For sites or apps with several sections on desktop. On phones, the [tab bar](/docs/components/tabbar), with 4 buttons at most.
- Every icon with its name in the bubble: with no visible text, the name is the only thing that says what it is.
- The main sections at the top; settings (theme, preferences) in a second list at the bottom.

## Accessibility

- It is a named `<nav>`. Each icon has its name in `aria-label` and the bubble is linked with `aria-describedby`.
- The bubble also shows with the keyboard (when reached with Tab) and you can move the pointer onto it without it closing.
- The current page is announced with `aria-current="page"` and shown by the background and shadow of the icon, not by color alone.
- Each icon is 44 × 44 px (WCAG 2.5.5).
- With «reduce motion» turned on, the icons do not grow.
