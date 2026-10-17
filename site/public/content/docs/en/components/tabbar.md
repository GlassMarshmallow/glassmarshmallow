# Tab bar

The phone's bottom bar, floating and glass, like in iOS and My Book Box. It replaces the [navbar](/docs/components/navbar) links below 860 px.

## Example

On the site it only appears on phones and floats over the page (`position: fixed`); here it is shown inside the frame.

```html
<nav class="gm-tabbar" aria-label="Main (mobile)" style="position: relative; inset: auto; display: flex; max-width: 400px">
  <a href="#" aria-current="page"><i class="gmi gmi-house" aria-hidden="true"></i>Home</a>
  <a href="#"><i class="gmi gmi-book" aria-hidden="true"></i>Docs</a>
  <a href="#"><i class="gmi gmi-heart" aria-hidden="true"></i>Icons</a>
  <button type="button" aria-expanded="false" aria-controls="example-more"><i class="gmi gmi-grid" aria-hidden="true"></i>More</button>
</nav>
```

## “More” panel

What does not fit in the bar goes in a panel opened with the “More” button (`.gm-tabbar-more`, with `.is-open` to show it).

```html-code
<nav id="mobile-more" class="gm-tabbar-more is-open" aria-label="More sections">
  <a href="/tools"><i class="gmi gmi-palette" aria-hidden="true"></i>Tools</a>
  <a href="/blog"><i class="gmi gmi-journal-text" aria-hidden="true"></i>Blog</a>
</nav>
```

## Rules

- **4 buttons at most, counting “More”**: with more, labels do not fit and buttons get too small.
- Each button has an icon and a short label (one word).
- The page leaves a gap at the end so the bar does not cover content: add `.gm-has-tabbar` to the `<body>` or the page container.

## Accessibility

- It is a named `<nav>`; the current page has `aria-current="page"` and shows in the text color (the rest in gray).
- “More” is a button with `aria-expanded` and `aria-controls`; Escape closes the panel.
- Focused items are not hidden behind the bar (WCAG 2.4.12).
