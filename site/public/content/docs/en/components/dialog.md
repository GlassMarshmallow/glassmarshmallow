# Dialog

A window that opens on top of the page to show information or ask for something, with the background dimmed behind it. It has the panel glass, sections separated by a thin line and colored headings.

## Example

```html
<button type="button" class="gm-btn" data-gm-dialog-open="example-dialog">Open the dialog</button>
<dialog class="gm-dialog" id="example-dialog" aria-labelledby="example-dialog-title">
  <div class="gm-dialog__body">
    <header class="gm-dialog__header">
      <h2 class="gm-dialog__title" id="example-dialog-title">About the AI</h2>
      <button type="button" class="gm-icon-btn" data-gm-dialog-close aria-label="Close"><i class="gmi gmi-x-lg" aria-hidden="true"></i></button>
    </header>
    <section class="gm-dialog__section">
      <h3>What it is</h3>
      <p>The chat uses an AI model that answers from my profile and <strong>can be wrong</strong>.</p>
    </section>
    <section class="gm-dialog__section">
      <h3>What happens to what you write</h3>
      <h4>Quick questions</h4>
      <p>Your question is only used to give you the answer. It is not stored.</p>
      <h4>“I want a project”</h4>
      <ol>
        <li>The assistant asks you a few questions about your project.</li>
        <li>At the end, it shows you a summary and offers to send it to me.</li>
        <li>If you do not send it, nothing reaches me.</li>
      </ol>
    </section>
  </div>
</dialog>
```

## Parts

| Class | What it is |
| --- | --- |
| `.gm-dialog` | The window (an HTML `<dialog>`) |
| `.gm-dialog__body` | The content; scrolls if it does not fit |
| `.gm-dialog__header` | Title and close button |
| `.gm-dialog__title` | The title; it gets focus when opened |
| `.gm-dialog__section` | Each section, with a line above; its `<h3>`s are colored |

## Script

The optional script opens the dialog with `data-gm-dialog-open="id"` and closes it with `data-gm-dialog-close`, Escape or clicking outside:

```html
<script type="module">
  import { initDialogs, openDialog } from 'glassmarshmallow/js/dialog.js';
  initDialogs();
  // or from your code: openDialog(document.getElementById('my-dialog'));
</script>
```

## Accessibility

- It is an HTML `<dialog>` opened with `showModal()`: the rest of the page becomes inert, so neither the mouse, the keyboard nor screen readers leave the dialog while it is open.
- It is named with `aria-labelledby` (its title) and screen readers announce it as a dialog.
- When opened, focus goes to the title, not the ✕, so it is read from the start. When closed, it returns to the button that opened it.
- Escape always closes it, and the close button says what it does (“Close”).
- Use it sparingly: it interrupts. For short messages, an [alert](/docs/components/alert) on the page is better.
