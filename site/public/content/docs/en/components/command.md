# Copy command

A glass pill with a command and its copy button, like the `npm install` on this site's home page.

## Example

```html
<div class="gm-command">
  <code class="gm-command__text">npm install glassmarshmallow</code>
  <button type="button" class="gm-btn gm-btn--secondary gm-btn--sm"><i class="gmi gmi-clipboard" aria-hidden="true"></i>Copy</button>
</div>
```

Copying is up to your code (with `navigator.clipboard.writeText`). If the command does not fit, it wraps to the next line instead of spilling out.

## Accessibility

- When copying, change the button text ("Copied") and tell screen readers too with an `aria-live` region.
- The command can be selected by hand: if the clipboard is not available, it can still be copied.
