# Long text

`.gm-prose` formats long text pages, like privacy or the legal notice: headings, paragraphs with good line height, lists and links. With `.gm-prose--card`, the text sits in a glass card, as in the portfolio template.

## Example

```html
<article class="gm-prose gm-prose--card">
  <h1>Privacy</h1>
  <p class="gm-prose__updated">Last updated: 17 October 2026</p>
  <h2>Data controller</h2>
  <p>Sara Paez Yamuza. You can write to me at <a href="#">hello@example.com</a>.</p>
  <h2>What data is stored</h2>
  <ul>
    <li>What you write in the form, only if you send it.</li>
    <li>Your light or dark mode choice, in your browser.</li>
  </ul>
</article>
```

## Without the card

With `.gm-prose` alone, the text sits on the page background.

## What changes

| Element | Format |
| --- | --- |
| `h1` | 1.9 rem (1.5 rem on phones) |
| `.gm-prose__updated` | The date, in small gray |
| `h2` | 1.1 rem, colored: accent gradient by day, sky at night |
| `p`, `li` | 0.95 rem with 1.65 line height |
| `a` | Link color, semibold and underlined |

## Accessibility

- Comfortable text and line height for long reading (WCAG 1.4.8 and 1.4.12); lines of 80 characters at most.
- Colored headings reach 7:1; links too, and they are underlined.
- Use heading levels in order (`h1`, then `h2`…), without skipping any.
