# Accessibility

GlassMarshmallow follows **WCAG 2.2 at level AA** in light and dark mode, the level asked for by European and Spanish law, and also meets the AAA criteria for contrast, presentation, focus and target size. These are all the rules, grouped by the four principles of WCAG, with how the framework meets each one.

> The complete list, with the 86 criteria of levels A, AA and AAA, is in [All the rules (WCAG 2.2)](/docs/getting-started/wcag).

> **The framework helps, but it does not do everything.** Your content (texts, images, names of buttons, order of the headings) also has to follow these rules.

## Perceivable

Everyone can see or hear the content.

| Criterion | Level | Rule | In GlassMarshmallow |
| --- | --- | --- | --- |
| 1.1.1 | A | Every image that gives information has a text alternative (`alt`). Decorative images and icons have `alt=""` or `aria-hidden="true"`. | Icons (`.gmi`) are decorative: they always go with `aria-hidden="true"`. |
| 1.3.1 | A | The structure is in the HTML: headings, lists, tables, labels and regions (`header`, `main`…). | See [Page structure](/docs/content/structure). Every field has its `<label>`. |
| 1.3.5 | AA | Fields about the person say what they ask for with `autocomplete` (name, email, tel…). | The examples of [Field](/docs/forms/field) use it. |
| 1.4.1 | A | Color is never the only way to give information: add a word, an icon or an underline. | Alerts carry an icon and a text; links inside text are underlined. |
| 1.4.3 | AA | Text has a contrast of at least 4.5:1 with its background, and large text (24 px, or 19 px in bold) at least 3:1. | Every color of the framework is measured in light and dark mode. See [Palette](/docs/color/colors). |
| 1.4.6 | AAA | Text has a contrast of at least 7:1, and large text 4.5:1. | All the text colors of the framework reach 7:1. Exceptions: solid backgrounds `gray-500` and `gray-600` (5.2:1 and 6:1) and the title of the home page in light mode, with the colors of the logo. |
| 1.4.4 | AA | The page works with the text at 200 % zoom. | Sizes in `rem` and `em`, so they grow with the text. |
| 1.4.8 | AAA | Blocks of text: lines of 80 characters at most, not justified, line height of 1.5, and colors chosen by the person. | Paragraphs and lists up to 80 characters, aligned to the start; with the high contrast mode of the system, its colors are used. |
| 1.4.10 | AA | At 320 px wide (or 400 % zoom) everything can be read without scrolling sideways. | Every page is checked at 320 and 375 px. |
| 1.4.11 | AA | Borders of fields and controls, focus and the parts of a chart have a contrast of at least 3:1. | Fields: 3.5:1 in light and 3.9:1 in dark. Focus: 4.9:1 and 7.5:1. |
| 1.4.12 | AA | The content still works if the user increases the spacing between lines, letters and words. | No fixed heights on boxes with text. |
| 1.4.13 | AA | Content that appears on hover or focus (tooltips) can be closed with Escape, stays while the pointer is on it and does not vanish by itself. | See [Tooltip](/docs/components/tooltip). |

## Operable

Everyone can use the page, with or without a mouse.

| Criterion | Level | Rule | In GlassMarshmallow |
| --- | --- | --- | --- |
| 2.1.1 | A | Everything can be used with the keyboard alone. | Native buttons, links and fields; the calendar works with arrows, Home/End and Page Up/Down. |
| 2.1.2 | A | The keyboard never gets trapped: you can always leave a component with Tab or Escape. | Dialogs open with `showModal()` and close with Escape. |
| 2.2.2 | A | Anything that moves for more than 5 seconds can be paused. | The framework has no automatic animations. |
| 2.3.3 | AAA* | With «reduce motion» in the system, animations are removed. | Transitions are turned off with `prefers-reduced-motion`. (*AAA, but we always do it.) |
| 2.4.1 | A | There is a way to skip the menu and go straight to the content. | `.gm-skip-link`, the first link of the page. |
| 2.4.2 | A | Every page has a title that says what it is. | «Page name | GlassMarshmallow». |
| 2.4.3 | A | The focus moves in a logical order, the same as the reading order. | The HTML order is the visual order: no `tabindex` greater than 0. |
| 2.4.4 | A | Each link says where it goes (no «click here»). | — |
| 2.4.6 | AA | Headings and labels describe their content. | — |
| 2.4.7 | AA | The keyboard focus is always visible. | A 2 px outline, pink by day and blue at night, on everything that can be focused. |
| 2.4.11 | AA | The element with the focus is not hidden behind other content (fixed headers, bars). | The page keeps a scroll margin the height of the top bar (and of the bottom bar on mobile). |
| 2.4.12 | AAA | No part of the focused element is hidden. | The same scroll margin keeps it whole in view. |
| 2.5.3 | A | The accessible name of a button contains its visible text. | «‹ Back» is read as «Back: Tools». |
| 2.5.8 | AA | Everything you press measures at least 24 × 24 px. | Everything reaches 44 px (see 2.5.5). |
| 2.5.5 | AAA | Everything you press measures at least 44 × 44 px. | Buttons, menus, calendar days and options measure 44 px; small buttons and pills have an invisible layer that makes the area bigger. |

## Understandable

The content and how it works are easy to understand.

| Criterion | Level | Rule | In GlassMarshmallow |
| --- | --- | --- | --- |
| 3.1.1 | A | The page says its language with `lang` in `<html>`. | — |
| 3.1.2 | AA | A part in another language says it with `lang`. | — |
| 3.2.3 | AA | The navigation is in the same place and order on every page. | `.gm-navbar` and `.gm-tabbar` are the same everywhere. |
| 3.3.1 | A | Errors in a form are shown in text, next to the field, and say which field. | `.gm-field__error` with `aria-invalid` and `aria-describedby`. |
| 3.3.2 | A | Every field has a visible label, and required fields are marked. | — |
| 3.3.3 | AA | The error message says how to fix it. | «Write a complete email, for example sara@example.com». |
| 3.3.8 | AA | Logging in does not depend on remembering or copying anything (password managers and pasting work). | Password fields with `autocomplete="current-password"`. |

## Robust

It works with browsers and assistive technology.

| Criterion | Level | Rule | In GlassMarshmallow |
| --- | --- | --- | --- |
| 4.1.2 | A | Every control has a name, a role and a state that screen readers can read. | Native elements first; `aria-pressed`, `aria-expanded`, `aria-current` where they are needed. |
| 4.1.3 | AA | Messages that appear without moving the focus («Copied», «3 results») are announced. | A visually hidden text with `aria-live="polite"`. |

## How we check it

- **axe-core** on every page, in light and dark mode: 0 errors.
- **Contrast on the real pixels** when there is something behind the text (glass, lights, images), because automatic tools can’t see it.
- **Keyboard only**: every page is used with Tab, Shift + Tab, Enter, Space, Escape and the arrows.
- **Widths of 320, 375 and 1300 px**, without scrolling sideways.
- **Reduce motion** turned on in the system.

## Tools to check your page

- [axe DevTools](https://www.deque.com/axe/devtools/) and [WAVE](https://wave.webaim.org/extension/): browser extensions that review the whole page.
- Lighthouse, in the developer tools of Chrome.
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/): an eyedropper to measure the contrast of any point of the screen.
- VoiceOver (macOS and iOS) or NVDA (Windows), to hear the page as a screen reader user does.
