# Text

Size, weight, line height and shape of text. Like Tailwind's [typography](https://tailwindcss.com/docs/font-size) utilities. For color, see [Text color](/docs/color/text); to align it, `gm-text-start`, `gm-text-center` and `gm-text-end`.

## Size

In `rem`, so it grows if the person enlarges the text in their browser.

| Class | Size | Class | Size |
| --- | --- | --- | --- |
| `gm-text-xs` | 0.75 rem | `gm-text-xl` | 1.25 rem |
| `gm-text-sm` | 0.875 rem | `gm-text-2xl` | 1.5 rem |
| `gm-text-base` | 1 rem | `gm-text-3xl` | 1.875 rem |
| `gm-text-lg` | 1.125 rem | `gm-text-4xl` | 2.25 rem |

They have a [breakpoint](/docs/layout/breakpoints) version: `gm-text-xl gm-md-text-3xl`.

```html
<p class="gm-text-sm gm-m-0">gm-text-sm: for notes and captions</p>
<p class="gm-text-base gm-m-0">gm-text-base: normal text</p>
<p class="gm-text-xl gm-m-0">gm-text-xl: to highlight a sentence</p>
<p class="gm-text-3xl gm-m-0">gm-text-3xl: for a heading</p>
```

## Weight

`gm-font-light` (300), `gm-font-normal` (400), `gm-font-medium` (500), `gm-font-semibold` (600), `gm-font-bold` (700) and `gm-font-extrabold` (800): every Montserrat weight.

```html
<p class="gm-m-0"><span class="gm-font-light">Light</span> · <span class="gm-font-normal">Normal</span> · <span class="gm-font-medium">Medium</span> · <span class="gm-font-semibold">Semibold</span> · <span class="gm-font-bold">Bold</span> · <span class="gm-font-extrabold">Extrabold</span></p>
```

## Line height

| Class | Value | For |
| --- | --- | --- |
| `gm-leading-none` | 1 | Big numbers, icons |
| `gm-leading-tight` | 1.25 | Headings |
| `gm-leading-snug` | 1.375 | Multi-line headings |
| `gm-leading-normal` | 1.5 | Normal text (the framework's) |
| `gm-leading-relaxed` | 1.7 | Long texts |
| `gm-leading-loose` | 2 | Very spaced |

## Case, italics and underline

| Class | Does |
| --- | --- |
| `gm-uppercase` / `gm-lowercase` / `gm-capitalize` | All caps / all lowercase / first letter of each word in caps |
| `gm-normal-case` | As written |
| `gm-italic` / `gm-not-italic` | Italic / not italic |
| `gm-underline` / `gm-line-through` / `gm-no-underline` | Underlined / struck through / no line |

```html
<p class="gm-m-0"><span class="gm-uppercase gm-font-semibold gm-text-sm">New</span> · <span class="gm-italic">in italics</span> · <span class="gm-line-through">€29</span> €19</p>
```

## Line breaks

| Class | Does |
| --- | --- |
| `gm-nowrap` | Does not wrap to the next line |
| `gm-truncate` | A single line and, if it does not fit, it ends in "…" |
| `gm-break-words` | Breaks very long words (addresses, emails) so they do not spill out |
| `gm-text-balance` | Spreads the words so the lines are equally long (headings) |
| `gm-text-pretty` | Avoids leaving a single word on the last line of a paragraph |

```html
<p class="gm-truncate gm-max-w-xs gm-m-0">This text is too long for one line, so it ends with an ellipsis.</p>
```

## Underline, columns and spaces

| Class | What it does |
| --- | --- |
| `gm-decoration-sky`, `gm-decoration-accent`… | The color of the underline |
| `gm-decoration-1` / `-2` / `-4` | Its thickness (1, 2, 4 px) |
| `gm-decoration-solid` / `-dashed` / `-dotted` / `-wavy` / `-double` | Its style |
| `gm-underline-offset-1` / `-2` / `-4` / `-8` | Its distance from the letters |
| `gm-columns-1` … `gm-columns-4` / `gm-break-inside-avoid` | Text in columns / keep a block from splitting between two |
| `gm-whitespace-normal` / `-pre` / `-pre-wrap` | How it treats spaces and line breaks |
| `gm-hyphens-auto` / `gm-break-all` | Hyphenates words / breaks at any letter |

```html
<p class="gm-m-0"><a class="gm-underline gm-decoration-pink gm-decoration-2 gm-decoration-wavy gm-underline-offset-4" href="#">A link with the underline you want</a></p>
```

## Lists

`gm-list-none` removes the bullets and indentation of a list: for menus or rows of links that are still a list for screen readers.

```html
<ul class="gm-list-none gm-flex gm-gap-4 gm-m-0">
  <li><a href="#">Home</a></li>
  <li><a href="#">Projects</a></li>
  <li><a href="#">Contact</a></li>
</ul>
```

## Accessibility

- Do not use `gm-text-xs` for important text: at 0.75 rem it is hard to read. For normal text, 1 rem at least.
- `gm-truncate` hides part of the text: if what is cut matters, show it in full somewhere else (a `title` is not enough, it does not reach keyboard or touch users).
- `gm-uppercase` only changes how it looks: write normal text in the HTML so screen readers do not spell it out.
- With `gm-list-none`, Safari stops announcing the list: if it matters that it is heard as a list, add `role="list"` to the `<ul>`.
