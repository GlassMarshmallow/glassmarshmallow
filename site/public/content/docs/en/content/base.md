# Base and text

What GlassMarshmallow applies to the whole page when loaded, with no classes: the font, the colors, the headings, the focus and some accessibility rules.

## What the base does

- **Sizing:** everything uses `box-sizing: border-box` (padding and border are inside the width).
- **Page:** `--gm-bg` background, `--gm-text` text, Montserrat font (`--gm-font`) and 1.5 line height. Minimum width of 320 px.
- **Forms:** buttons and fields use the same font as the text.
- **Links:** no underline or color of their own (each component gives them theirs).
- **Images:** never wider than their container.
- **Selection:** selected text is tinted with `--gm-selection`.

## Headings

Tight letters and balanced lines (`text-wrap: balance`) so no single word is left alone at the end.

```html
<h1 class="gm-m-0">Page title</h1>
<h2>Section title</h2>
<h3>Subsection title</h3>
<p>Regular text, with comfortable line height for reading long paragraphs.</p>
```

## Helper text

| Class | What it is |
| --- | --- |
| `.gm-muted` | Secondary text, in gray (7:1 or more, AAA) |
| `.gm-small` | Small text (0.84 rem) |
| `.gm-eyebrow` | Eyebrow: gray and semibold, above a heading |

```html
<p class="gm-eyebrow">New</p>
<h3 class="gm-mt-0">GlassMarshmallow 0.1</h3>
<p class="gm-muted">Secondary text for descriptions and hints.</p>
<p class="gm-small gm-muted">Small text: dates, notes, legal notices.</p>
```

## Data list

`.gm-dl`: label in gray and value below it, for summaries (the details of an order, a profile or a request).

```html
<dl class="gm-dl">
  <div><dt>Name</dt><dd>Sara Paez Yamuza</dd></div>
  <div><dt>Email</dt><dd>sara@example.com</dd></div>
  <div><dt>Project</dt><dd>An online ceramics shop, with card payment and shipping all over Spain.</dd></div>
</dl>
```

## Accessibility already built in

- **Focus always visible:** 2 px outline in the accent color when using the keyboard (WCAG 2.4.7).
- **Reduced motion:** if the person asks for it in their system, animations and transitions are removed (WCAG 2.3.3).
- **Focus not obscured:** when scrolling, focused items stay below the top bar and above the phone's bottom bar (WCAG 2.4.12).
- **Comfortable lines:** paragraphs and lists of 80 characters at most and not justified (WCAG 1.4.8).
- **System high contrast:** when on, the person's colors win (WCAG 1.4.8).
