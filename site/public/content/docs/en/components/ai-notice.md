# AI notice

A small note next to a chat or anything made with AI, so people know the answers come from an AI and can be wrong. With a link to more information.

## Example

```html
<p class="gm-ai-notice">
  Answers generated with AI from my profile; they may contain mistakes.
  <button type="button" class="gm-ai-notice__link" data-gm-dialog-open="example-ai-info">More about the AI</button>
</p>
<dialog class="gm-dialog" id="example-ai-info" aria-labelledby="example-ai-info-title">
  <div class="gm-dialog__body">
    <header class="gm-dialog__header">
      <h2 class="gm-dialog__title" id="example-ai-info-title">About the AI</h2>
      <button type="button" class="gm-icon-btn" data-gm-dialog-close aria-label="Close"><i class="gmi gmi-x-lg" aria-hidden="true"></i></button>
    </header>
    <section class="gm-dialog__section"><h3>What it is</h3><p>An AI model that answers from my profile. It can be wrong: for anything important, write to me.</p></section>
  </div>
</dialog>
```

“More about the AI” opens a [dialog](/docs/components/dialog) explaining which AI it is, what happens to what people write and how to ask for it to be deleted.

## Why

- The **EU AI Act** (article 50) requires telling people they are talking to an AI.
- Data protection also asks for information about what is stored and what is not.

## Accessibility

- Gray text of 7:1 or more on the background (AAA), small but readable.
- The link sits inside the sentence, underlined, and is a button because it opens a dialog (it does not go to another page).
- Its text says what it is about (*the AI*), not just “More information”: screen readers understand it outside the sentence (WCAG 2.4.4) and search engines, which flag generic links, too.
