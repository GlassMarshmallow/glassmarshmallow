# Code

To show code: inside the text, in a word, or in a multi-line block. With the system monospace font (`--gm-font-mono`).

## Inline

With `<code>`: “Add the `.gm-btn` class to the button”.

```html
<p>Add the <code>.gm-btn</code> class to the button.</p>
```

## Block

`.gm-code` on a `<pre>`: gray background, rounded corners and a sideways scrollbar if a line is too long (text does not wrap).

```html
<pre class="gm-code" tabindex="0"><code>npm install glassmarshmallow
npm run build</code></pre>
```

If you prefer long lines to wrap instead of scrolling, add `style="white-space: pre-wrap"`.

## Long lines

`gm-code--wrap` wraps long lines onto the next one instead of scrolling sideways: for generated code with very long values (gradients, shadows) that reads better whole.

```html
<pre class="gm-code gm-code--wrap"><code>background: linear-gradient(135deg, rgb(92 223 235 / .9) 0%, rgb(185 163 255 / .9) 50%, rgb(255 166 209 / .9) 100%);</code></pre>
```

## Accessibility

- Add `tabindex="0"` to blocks that can scroll sideways, so they can be moved with the keyboard (WCAG 2.1.1).
- If the block is long, name it with `aria-label` (“Install code”).
- Regular text on gray: 14:1 (AAA).
