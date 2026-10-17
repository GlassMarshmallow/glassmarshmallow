# Gradient text

Paints text with the framework's color gradient. At night it switches to a plain color, so it reads well on a dark background.

## Example

```html
<p style="font-size: 1.4rem; font-weight: 700; margin: 0">Made with <span class="gm-gradient-text">GlassMarshmallow</span></p>
<h2 class="gm-gradient-title" style="margin: 8px 0 0">Gradient heading</h2>
```

## Two versions

| Class | For | Gradient |
| --- | --- | --- |
| `.gm-gradient-text` | Text of any size | Dark tones, each 7:1 or more (AAA) |
| `.gm-gradient-title` | Large headings (24 px or more) | The bright logo colors, 3:1 or more |

At night, `.gm-gradient-text` is blue and `.gm-gradient-title` uses the text color.

## Accessibility

- A gradient cannot be measured point by point: that is why the text one only uses tones that pass AAA on their own.
- With system high contrast on, the text switches to the system color.
- Do not use it on long paragraphs: it is to highlight a few words or a heading.
