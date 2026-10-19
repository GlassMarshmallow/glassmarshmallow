# Search

A text field with the magnifier inside and, below it, the results that match what is typed. It is the search box in the top bar of this site.

## Example

Type, for example, “color” or “button”.

```html
<div style="min-height: 18.75rem">
  <div class="gm-search gm-max-w-xs" role="search" data-gm-search data-results-text="{count} results">
    <div class="gm-search__field">
      <i class="gmi gmi-search" aria-hidden="true"></i>
      <label class="gm-visually-hidden" for="example-search">Search the docs</label>
      <input id="example-search" class="gm-search__input" type="search" role="combobox" autocomplete="off" aria-autocomplete="list" aria-controls="example-search-list" aria-expanded="false" placeholder="Search…" />
    </div>
    <ul id="example-search-list" class="gm-search__results" role="listbox" aria-label="Results" hidden>
      <li class="gm-search__option" role="option" data-value="button"><span class="gm-search__title">Button</span><span class="gm-search__section">Components</span></li>
      <li class="gm-search__option" role="option" data-value="menu"><span class="gm-search__title">Menu</span><span class="gm-search__section">Components</span></li>
      <li class="gm-search__option" role="option" data-value="colors"><span class="gm-search__title">Palette</span><span class="gm-search__section">Color</span></li>
      <li class="gm-search__option" role="option" data-value="text"><span class="gm-search__title">Text color</span><span class="gm-search__section">Color</span></li>
      <li class="gm-search__option" role="option" data-value="field"><span class="gm-search__title">Field</span><span class="gm-search__section">Forms</span></li>
      <li class="gm-search__option" role="option" data-value="date-picker"><span class="gm-search__title">Date picker</span><span class="gm-search__section">Forms</span></li>
      <li class="gm-search__empty" role="presentation" hidden>No results.</li>
    </ul>
    <p class="gm-visually-hidden" aria-live="polite" data-gm-search-status></p>
  </div>
</div>
```

## Width

The search box takes the full width of its container. To limit it, give `.gm-search` a width (in the example, `max-width: 320px`). The results list is as wide as the field, with a minimum of 320 px; on screens of 600 px or less, exactly as wide as the field.

## Script

The framework provides the look. To filter while typing and move with the keyboard, load the optional script:

```html
<script type="module">
  import { initSearches } from 'glassmarshmallow/js/search.js';
  initSearches();
</script>
```

- Each result is an `<li role="option">`. The search looks at its text and, if present, `data-keywords` (ignoring case and accents).
- With `data-href`, choosing it goes to that address. Without it, only the event fires.
- If there is a `.gm-search__empty` inside the list, it shows when there are no results.
- The element with `data-gm-search-status` announces how many results there are; the text goes in `data-results-text`, with `{count}`.

When a result is chosen, the search box fires the `gm-search-select` event with its `data-value` and `data-href`. If you cancel it with `preventDefault()`, the page does not change (useful in apps with their own router):

```js
document.querySelector('.gm-search').addEventListener('gm-search-select', (event) => {
  event.preventDefault();
  router.navigate(event.detail.href);
});
```

## Keyboard

| Key | What it does |
| --- | --- |
| ↓ ↑ | Next or previous result |
| Enter | Opens the highlighted result (or the first one) |
| Escape | Closes the list; if already closed, clears the text |

## Accessibility

- It follows the WAI-ARIA combobox pattern: the field has `role="combobox"`, `aria-expanded`, `aria-controls` and `aria-activedescendant`, and the list is a `listbox` with its `option`s.
- The field has its `<label>` (hidden from view, not from screen readers) and `role="search"` marks the area as a search.
- The number of results is announced with `aria-live`.
- Field and results are 44 px tall (WCAG 2.5.5, AAA). The highlighted result has a background and a border, not just color.
