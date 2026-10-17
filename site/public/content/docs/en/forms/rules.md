# Form rules

What a form needs to be easy to fill in and accessible. Every form built with GlassMarshmallow must follow these rules. They come from the GOV.UK guidance, the W3C forms tutorial and usability studies, and each one names the WCAG 2.2 criterion it helps meet.

## 1. Ask for as little as possible

Every extra field is a reason to give up. Before adding one, ask yourself whether you really need it now. If a piece of data only applies to some people, ask only them.

## 2. One column, label on top

Fields go one below the other, in the order people think of the answers. The label goes **above** the field, is short, starts with a capital letter and has no colon at the end. That way the form reads top to bottom with no jumps, also when zoomed in.

**Wrong:** two fields per row and labels beside them.

```html
<div class="gm-field" style="grid-template-columns: auto 1fr auto 1fr; align-items: center; gap: 8px; max-width: 560px">
  <label for="bad-first-name">First name:</label>
  <input id="bad-first-name" type="text">
  <label for="bad-last-name">Last name:</label>
  <input id="bad-last-name" type="text">
</div>
```

**Right:** one column and the label on top.

```html
<div style="display: grid; gap: 1.15rem; max-width: 420px">
  <div class="gm-field">
    <label for="good-first-name">First name</label>
    <input id="good-first-name" type="text" autocomplete="given-name">
  </div>
  <div class="gm-field">
    <label for="good-last-name">Last name</label>
    <input id="good-last-name" type="text" autocomplete="family-name">
  </div>
</div>
```

WCAG: 1.3.2 Meaningful Sequence, 1.4.10 Reflow, 3.3.2 Labels or Instructions.

## 3. Simple questions

Several simple questions are better than one complicated one. Use closed questions (options to pick) when the possible answers are known, and allow “I don't know” when it is a valid answer. With 2 or 3 short options, in a row; with more, one below the other.

## 4. Mark required and optional fields

Required fields have “(required)” written in the label and `required` on the field; optional ones, “(optional)”. Written in words it needs no explanation and screen readers read it the same way; not everyone knows what an asterisk means.

```html
<div style="display: grid; gap: 1.15rem; max-width: 420px">
  <div class="gm-field">
    <label for="rules-email">Email (required)</label>
    <input id="rules-email" type="email" autocomplete="email" required>
  </div>
  <div class="gm-field">
    <label for="rules-phone">Phone (optional)</label>
    <input id="rules-phone" type="tel" autocomplete="tel">
  </div>
</div>
```

WCAG: 3.3.2 Labels or Instructions, 1.4.1 Use of Color (said in text, not with color).

## 5. Help text, visible and outside the field

Help goes as text below the label and is linked to the field with `aria-describedby`. The example text inside the field (`placeholder`) is not a label or help: it disappears when typing, usually has low contrast and many screen readers skip it.

**Wrong:** help only in the placeholder.

```html
<div class="gm-field" style="max-width: 420px">
  <label for="bad-id">ID number</label>
  <input id="bad-id" type="text" placeholder="8 digits and a letter, no spaces">
</div>
```

**Right:** help as text, linked to the field.

```html
<div class="gm-field" style="max-width: 420px">
  <label for="good-id">ID number</label>
  <p class="gm-field__help" id="good-id-help">8 digits and a letter, no spaces. For example, 12345678Z.</p>
  <input id="good-id" type="text" aria-describedby="good-id-help">
</div>
```

WCAG: 3.3.2 Labels or Instructions, 1.4.3 Contrast.

## 6. Clear error messages

The message says what happened and how to fix it, using the label's words. No blame (“you forgot…”), no technical words (“validation error”), no “please”, and not color alone: the field gets `aria-invalid="true"` and the message is linked with `aria-describedby`.

**Wrong:** does not say what to do.

```html
<div class="gm-field" style="max-width: 420px">
  <label for="bad-email">Email (required)</label>
  <input id="bad-email" type="email" value="sara@" aria-invalid="true" aria-describedby="bad-email-error">
  <p class="gm-field__error" id="bad-email-error">Invalid field.</p>
</div>
```

**Right:** says what is missing and gives an example.

```html
<div class="gm-field" style="max-width: 420px">
  <label for="good-email">Email (required)</label>
  <input id="good-email" type="email" value="sara@" aria-invalid="true" aria-describedby="good-email-error">
  <p class="gm-field__error" id="good-email-error">Enter the full email address, for example sara@example.com.</p>
</div>
```

WCAG: 3.3.1 Error Identification, 3.3.3 Error Suggestion, 1.4.1 Use of Color.

## 7. Error summary on submit

If there are errors on submit, a summary appears above the form with how many there are and a link to each field, as well as the message next to each one. Focus moves to the summary so screen readers read it in full.

```html
<div class="gm-error-summary" role="alert" tabindex="-1" aria-labelledby="summary-title" style="max-width: 520px">
  <h2 class="gm-error-summary__title" id="summary-title"><i class="gmi gmi-exclamation-circle" aria-hidden="true"></i>There are 2 errors in the form</h2>
  <ul class="gm-error-summary__list">
    <li><a href="#good-email">Enter the full email address, for example sara@example.com.</a></li>
    <li><a href="#rules-email">Enter your email address.</a></li>
  </ul>
</div>
```

Each link goes to the field to fix (`href="#field-id"`) and repeats its error message. The summary title also goes in the page title: “Error: Contact | My site”.

WCAG: 3.3.1 Error Identification, 2.4.3 Focus Order, 4.1.3 Status Messages.

## 8. Validate without nagging

Check the data on submit or when leaving the field, not while typing: an error that shows up halfway through an email address only annoys. Remove the error as soon as the field is right. Never delete what the person typed.

WCAG: 3.3.1 Error Identification, 3.3.7 Redundant Entry (do not ask for the same thing twice).

## 9. Confirm and allow undo

On submit, say clearly that it worked, on the page and to screen readers (with `role="status"` or by moving focus to the message). If submitting has consequences (paying, deleting, signing), let people review the data first and undo or correct it afterwards.

```html
<div class="gm-alert gm-alert--success" role="status" style="max-width: 520px">
  <i class="gmi gmi-check-circle" aria-hidden="true"></i>
  <span>Message sent. I will reply within 2 working days.</span>
</div>
```

WCAG: 4.1.3 Status Messages, 3.3.4 and 3.3.6 Error Prevention.

## 10. The button says what it does

The submit button says what happens when pressed: “Send request”, “Create account”, “Pay €25”. Avoid a bare “OK” or “Submit” when it is not clear what is sent. If there is a button to clear the form, do not put it next to the submit button with the same look.

```html
<div class="gm-form__actions" style="max-width: 420px">
  <button type="button" class="gm-btn gm-btn--accent">Send request</button>
</div>
```

WCAG: 2.4.6 Headings and Labels, 2.5.3 Label in Name.

## Also, always

- Every field has its visible `<label>`, and groups of options go in a `<fieldset>` with a `<legend>`.
- Use the right `type` and `autocomplete` (`email`, `tel`, `name`, `postal-code`…): phones show the right keyboard and the browser can fill in (WCAG 1.3.5).
- Everything can be filled in and sent with the keyboard alone, in order, and focus is always visible (WCAG 2.1.1, 2.4.7).
- Fields, checkboxes and buttons are at least 44 px tall (WCAG 2.5.5).
- No time limit, and if there is one, warn and allow extending it (WCAG 2.2.1).
- No tests that rely on memory or solving a puzzle to log in, unless there is another way (WCAG 3.3.8).
