# Chat

The chat pieces from the AI portfolio template: the field to ask, the answer bubble and the typing dots. The chat itself (asking the AI, writing the answer letter by letter) comes from your app; the framework provides the look.

## Field to ask

A glass pill with the field and the send button. While typing, the border turns sky and a soft ring appears.

```html
<form class="gm-chat-input" role="search" aria-label="Ask me about my work">
  <label class="gm-visually-hidden" for="example-question">Write a question</label>
  <input id="example-question" class="gm-chat-input__field" autocomplete="off" placeholder="Ask me anything…">
  <button type="submit" class="gm-chat-input__send" aria-label="Send question"><i class="gmi gmi-arrow-up-circle-fill" aria-hidden="true"></i></button>
</form>
```

## Answer bubble

Glass with a sky border and, in dark mode, a turquoise glow. The tail points to the speaker: `.gm-bubble--tail-end` (right) or `.gm-bubble--tail-start` (left), at the height of `--gm-bubble-tail-y` (measured from the bottom on the right one; on the left one, from the top, or from the bottom with `.gm-bubble--tail-bottom`).

```html
<div class="gm-flex gm-flex-col gm-gap-6 gm-p-4">
  <div class="gm-bubble gm-bubble--tail-end" style="max-width: 360px">
    <div class="gm-bubble__scroll" tabindex="0" role="region" aria-label="Answer">
      I mostly work with Angular and .NET, and design in Figma. You can see my projects on <a href="#">GitHub</a>.
    </div>
    <button type="button" class="gm-bubble__close" aria-label="Close the answer"><i class="gmi gmi-x" aria-hidden="true"></i></button>
  </div>
  <div class="gm-bubble gm-bubble--tail-start" style="max-width: 360px; margin-left: 16px">
    <div class="gm-bubble__scroll"><span class="gm-bubble__note">Picking up where we left off</span>When do you need the website?</div>
  </div>
</div>
```

## Thinking

While the answer arrives, `.gm-typing` with three `<span>`s: three dots bouncing, in sky (turquoise in dark mode).

```html
<div class="gm-bubble" style="max-width: 120px">
  <span class="gm-typing" aria-hidden="true"><span></span><span></span><span></span></span>
  <span class="gm-visually-hidden">Thinking about the answer…</span>
</div>
```

## Error

`.gm-bubble--error`: the border in coral, the error color.

## Change the color

With variables, on the bubble or on any element that contains it:

| Variable | What it changes | Default |
| --- | --- | --- |
| `--gm-bubble-color` | The border and the tail of the bubble (a color or a gradient) | Sky (turquoise in dark mode) |
| `--gm-bubble-tail-color` | Only the tail, if the border is a gradient (the tail takes a color, not a gradient) | The one in `--gm-bubble-color` |
| `--gm-typing-color` | The "thinking" dots | Sky (turquoise in dark mode) |

```html
<div class="gm-flex gm-flex-col gm-gap-6 gm-p-4">
  <div class="gm-bubble gm-bubble--tail-end" style="--gm-bubble-color: var(--gm-accent); max-width: 360px">
    <div class="gm-bubble__scroll">With the accent color: pink by day and blue at night.</div>
  </div>
  <div class="gm-bubble gm-bubble--tail-start" style="--gm-bubble-color: linear-gradient(90deg, var(--gm-mint-700), var(--gm-sky-700)); --gm-bubble-tail-color: var(--gm-mint-700); max-width: 360px; margin-left: 16px">
    <div class="gm-bubble__scroll">With a gradient from mint to sky; the tail, in mint.</div>
  </div>
  <div class="gm-bubble" style="--gm-bubble-color: var(--gm-accent); --gm-typing-color: var(--gm-accent); max-width: 120px">
    <span class="gm-typing" aria-hidden="true"><span></span><span></span><span></span></span>
    <span class="gm-visually-hidden">Thinking about the answer…</span>
  </div>
</div>
```

## Accessibility

- The field has its `<label>` (visually hidden) and the send button its name.
- If text is written letter by letter, it is decorative: announce the whole answer at once in a separate `aria-live="polite"`.
- If the answer does not fit, the text scrolls inside; with `tabindex="0"` and `role="region"` it can be moved with the keyboard (WCAG 2.1.1).
- Next to the chat, add the [AI notice](/docs/components/ai-notice): people must know they are talking to an AI.
