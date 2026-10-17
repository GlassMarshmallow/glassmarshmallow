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

## Accessibility

- Add `tabindex="0"` to blocks that can scroll sideways, so they can be moved with the keyboard (WCAG 2.1.1).
- If the block is long, name it with `aria-label` (“Install code”).
- Regular text on gray: 14:1 (AAA).
