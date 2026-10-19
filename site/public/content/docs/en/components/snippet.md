# Code snippet

A piece of code to copy, with its result above it when needed: the one in this documentation. A glass panel, a bar with the language (or tabs) and the copy button.

## Example

```html
<div class="gm-snippet">
  <div class="gm-snippet__example">
    <button type="button" class="gm-btn">Button</button>
  </div>
  <div class="gm-snippet__bar">
    <span class="gm-snippet__lang">html</span>
    <button type="button" class="gm-snippet__copy"><i class="gmi gmi-clipboard" aria-hidden="true"></i><span>Copy</span></button>
  </div>
  <pre class="gm-snippet__code" tabindex="0"><code>&lt;button type="button" class="gm-btn"&gt;Button&lt;/button&gt;</code></pre>
</div>
```

Without `gm-snippet__example`, it is just the code with its bar.

## With tabs

For the same example in several languages or package managers: `gm-snippet__tabs` with a `gm-snippet__tab` per option and a `<pre>` per tab (the hidden ones with `hidden`). Switching tabs and copying is up to your code.

```html
<div class="gm-snippet">
  <div class="gm-snippet__bar">
    <div class="gm-snippet__tabs" role="tablist">
      <button type="button" class="gm-snippet__tab" role="tab" aria-selected="true">npm</button>
      <button type="button" class="gm-snippet__tab" role="tab" aria-selected="false">pnpm</button>
    </div>
    <button type="button" class="gm-snippet__copy"><i class="gmi gmi-clipboard" aria-hidden="true"></i><span>Copy</span></button>
  </div>
  <pre class="gm-snippet__code" tabindex="0" role="tabpanel"><code>npm install glassmarshmallow</code></pre>
</div>
```

| Class | What it is |
| --- | --- |
| `gm-snippet` | The glass panel |
| `gm-snippet__example` | The result, on white (black at night) to see the colors as they are |
| `gm-snippet__bar` | The bar: language or tabs on the left and copy on the right |
| `gm-snippet__lang` | The language name, in small caps |
| `gm-snippet__tabs` / `gm-snippet__tab` | The tabs, like a segmented control |
| `gm-snippet__copy` | The copy button |
| `gm-snippet__code` | The `<pre>` with the code (it scrolls sideways if it does not fit) |

## Accessibility

- The code can be reached with the keyboard (`tabindex="0"` on the `<pre>`) and scrolled sideways when long.
- The tabs and the copy button are 44 × 44 px where you press them, even if they look smaller (WCAG 2.5.5).
- When copying, tell screen readers ("Code copied") with an `aria-live` region.
- Tabs have `role="tab"` and `aria-selected`; each code block, `role="tabpanel"`.
