# Menu

A button that opens a list of options, like the language, version and theme menus of the top bar. One option can be marked as chosen.

## Example

Open it with the mouse or with the keyboard (Enter or Space on the button).

```html
<div class="gm-flex gm-items-start gm-justify-end" style="min-height: 14.375rem">
  <div class="gm-menu" data-gm-menu>
    <button type="button" class="gm-menu__trigger" aria-haspopup="menu" aria-expanded="false" aria-label="Theme: Auto">
      <i class="gmi gmi-circle-half" aria-hidden="true"></i>
      <i class="gmi gmi-chevron-expand gm-menu__chevron" aria-hidden="true"></i>
    </button>
    <ul class="gm-menu__list" role="menu" aria-label="Theme" hidden>
      <li role="none"><button type="button" class="gm-menu__item" role="menuitemradio" aria-checked="false" data-value="light"><i class="gmi gmi-sun" aria-hidden="true"></i><span>Light</span><i class="gmi gmi-check gm-menu__check" aria-hidden="true"></i></button></li>
      <li role="none"><button type="button" class="gm-menu__item" role="menuitemradio" aria-checked="false" data-value="dark"><i class="gmi gmi-moon" aria-hidden="true"></i><span>Dark</span><i class="gmi gmi-check gm-menu__check" aria-hidden="true"></i></button></li>
      <li role="none"><button type="button" class="gm-menu__item" role="menuitemradio" aria-checked="true" data-value="auto"><i class="gmi gmi-circle-half" aria-hidden="true"></i><span>Auto</span><i class="gmi gmi-check gm-menu__check" aria-hidden="true"></i></button></li>
    </ul>
  </div>
</div>
```

## Aligned to the left

The list opens aligned to the right of the button. Next to the left edge, add `.gm-menu--start`.

```html
<div style="min-height: 11.875rem">
  <div class="gm-menu gm-menu--start" data-gm-menu>
    <button type="button" class="gm-menu__trigger" aria-haspopup="menu" aria-expanded="false" aria-label="EN, language: English">
      <i class="gmi gmi-translate" aria-hidden="true"></i> EN
      <i class="gmi gmi-chevron-expand gm-menu__chevron" aria-hidden="true"></i>
    </button>
    <ul class="gm-menu__list" role="menu" aria-label="Language" hidden>
      <li role="none"><button type="button" class="gm-menu__item" role="menuitemradio" aria-checked="true" data-value="en"><span>English</span><i class="gmi gmi-check gm-menu__check" aria-hidden="true"></i></button></li>
      <li role="none"><button type="button" class="gm-menu__item" role="menuitemradio" aria-checked="false" data-value="es"><span>Español</span><i class="gmi gmi-check gm-menu__check" aria-hidden="true"></i></button></li>
    </ul>
  </div>
</div>
```

## Centered, with a regular button

`.gm-menu--center` centers the list under the button. The button can be any [button](/docs/components/button) (`.gm-btn`): it keeps its size and, with `gm-theme-solid`, its theme color. Like "For agents" on this site's home page.

```html
<div style="min-height: 12.5rem; text-align: center">
  <div class="gm-menu gm-menu--center" data-gm-menu>
    <button type="button" class="gm-btn gm-theme-pink-blue gm-theme-solid gm-menu__trigger" aria-haspopup="menu" aria-expanded="false">
      <i class="gmi gmi-stars" aria-hidden="true"></i>For agents
      <i class="gmi gmi-chevron-expand gm-menu__chevron" aria-hidden="true"></i>
    </button>
    <ul class="gm-menu__list" role="menu" aria-label="For agents" hidden>
      <li role="none"><a class="gm-menu__item" role="menuitem" href="#"><span>AI docs</span></a></li>
      <li role="none"><a class="gm-menu__item" role="menuitem" href="#"><span>All the skills</span></a></li>
    </ul>
  </div>
</div>
```

## Script

The framework gives the look. To open, close and move with the keyboard, load the optional script:

```html
<script type="module">
  import { initMenus } from 'glassmarshmallow/js/menu.js';
  initMenus();
</script>
```

When an option is chosen, the menu sends the `gm-menu-select` event with the `data-value` of the option:

```js
document.querySelector('.gm-menu').addEventListener('gm-menu-select', (event) => {
  console.log(event.detail.value); // 'dark'
});
```

## Keyboard

| Key | What it does |
| --- | --- |
| Enter / Space | Opens the menu (on the button) or chooses the option |
| ↓ ↑ | Next or previous option |
| Home / End | First or last option |
| Tab | Goes around the options without leaving the menu |
| Escape | Closes the menu and goes back to the button |

## Accessibility

- The button has `aria-haspopup="menu"`, `aria-expanded` and an `aria-label` that says what is chosen («Theme: Auto»).
- The options are `menuitemradio` with `aria-checked`; the check icon is only visual.
- Button and options measure 44 px (WCAG 2.5.5, AAA). Text 15:1 or more.
