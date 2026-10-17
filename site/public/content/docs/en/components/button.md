# Button

Buttons for actions in forms, dialogs and pages, with the rounded shape of My Book Box. All of them meet WCAG 2.2 AA in light and dark mode.

## Variants

`.gm-btn` is the main button: black in light mode and white in dark mode. Add `.gm-btn--secondary` for a glass button with a border, or `.gm-btn--ghost` for one without background.

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px">
  <button type="button" class="gm-btn">Primary</button>
  <button type="button" class="gm-btn gm-btn--secondary">Secondary</button>
  <button type="button" class="gm-btn gm-btn--ghost">Ghost</button>
</div>
```

## With color

Add a color of the palette (`.gm-theme-sky`, `.gm-theme-mint`…) and how to use it: `.gm-theme-solid` for the pastel with black text, or `.gm-theme-glass` for the glazed version. The button keeps its pill shape.

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px">
  <button type="button" class="gm-btn gm-theme-sky gm-theme-solid">Solid</button>
  <button type="button" class="gm-btn gm-theme-sky gm-theme-glass">Glazed</button>
</div>
```

All the colors, solid:

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px">
  <button type="button" class="gm-btn gm-btn--sm gm-theme-sky gm-theme-solid">Sky</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-blue gm-theme-solid">Blue</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-lavender gm-theme-solid">Lavender</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-pink gm-theme-solid">Pink</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-peach gm-theme-solid">Peach</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-lemon gm-theme-solid">Lemon</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-mint gm-theme-solid">Mint</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-coral gm-theme-solid">Coral</button>
</div>
```

And glazed:

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px">
  <button type="button" class="gm-btn gm-btn--sm gm-theme-sky gm-theme-glass">Sky</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-blue gm-theme-glass">Blue</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-lavender gm-theme-glass">Lavender</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-pink gm-theme-glass">Pink</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-peach gm-theme-glass">Peach</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-lemon gm-theme-glass">Lemon</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-mint gm-theme-glass">Mint</button>
  <button type="button" class="gm-btn gm-btn--sm gm-theme-coral gm-theme-glass">Coral</button>
</div>
```

The text on the pastel is always black (7.8:1 or more, AAA). Never use white text on these colors. To send a form, the turquoise `.gm-btn--accent` of [Field](/docs/forms/field) is also available.

## Small

`.gm-btn--sm` makes it lower (38 px) and with smaller text.

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px">
  <button type="button" class="gm-btn gm-btn--sm">Primary</button>
  <button type="button" class="gm-btn gm-btn--secondary gm-btn--sm">Secondary</button>
</div>
```

## With an icon

Put an icon before or after the text. It is decorative, so it has `aria-hidden="true"`.

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px">
  <button type="button" class="gm-btn"><i class="gmi gmi-download" aria-hidden="true"></i>Download</button>
  <button type="button" class="gm-btn gm-btn--secondary">Next<i class="gmi gmi-arrow-right" aria-hidden="true"></i></button>
</div>
```

## Icon only

`.gm-icon-btn` is a round 42 px button. As it has no text, it needs `aria-label` with what it does.

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px">
  <button type="button" class="gm-icon-btn" aria-label="Search"><i class="gmi gmi-search" aria-hidden="true"></i></button>
  <button type="button" class="gm-icon-btn" aria-label="Settings"><i class="gmi gmi-gear" aria-hidden="true"></i></button>
  <button type="button" class="gm-icon-btn" aria-label="Delete"><i class="gmi gmi-trash" aria-hidden="true"></i></button>
</div>
```

## Pill

`.gm-btn--pill` is a small button with the gray of the tags, for secondary actions in lists and cards. Add `.gm-btn--danger` for actions that delete.

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px">
  <button type="button" class="gm-btn gm-btn--pill">Edit</button>
  <button type="button" class="gm-btn gm-btn--pill gm-btn--danger">Delete</button>
</div>
```

## Text

`.gm-btn-text` looks like a link but is a button, for small actions inside a text.

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px">
  <button type="button" class="gm-btn-text">Show more</button>
</div>
```

## Back

`.gm-btn-back` goes back to the previous section. The arrow is decorative; if the visible text does not say where it goes, add it with a visually hidden text.

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px">
  <a class="gm-btn-back" href="#"><span aria-hidden="true">‹</span> Back<span class="gm-visually-hidden">: Tools</span></a>
</div>
```

## Links that look like buttons

The classes also work on `<a>`. Use `<a>` when it goes to another page and `<button>` when it does something on the same page.

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px">
  <a class="gm-btn" href="#">Read the docs</a>
  <a class="gm-btn gm-btn--secondary" href="#">GitHub</a>
</div>
```

## Disabled

With the `disabled` attribute the button is paler and cannot be pressed.

```html
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px">
  <button type="button" class="gm-btn" disabled>Primary</button>
  <button type="button" class="gm-btn gm-btn--secondary" disabled>Secondary</button>
</div>
```

## Accessibility

| Button | Contrast (light / dark) | Level |
| --- | --- | --- |
| `.gm-btn` | 16.8:1 / 15.5:1 | AAA |
| `.gm-btn--secondary`, `--ghost` | 16.6:1 / 13.9:1 | AAA |
| `.gm-btn--pill` | 13.8:1 / 12.8:1 | AAA |
| `.gm-btn--danger` | 9.6:1 / 9.8:1 | AAA |
| `.gm-btn-text` | 7:1 / 7:1 | AAA |

- The focus is always visible: a 2 px outline when you move with the keyboard.
- The area you press always measures at least 44 × 44 px (WCAG 2.5.5, AAA): in small buttons and pills an invisible layer makes it bigger without changing the look.
- A button with only an icon always needs `aria-label`.
- Disabled buttons are exempt from contrast, but explain why the action is not available when it is not obvious.
