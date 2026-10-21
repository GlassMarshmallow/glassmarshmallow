# Field

Fields and forms: a glass panel, labels in bold, rounded fields with a gray fill, a ring while you type, and choices in a list.

## Complete form

```html
<form class="gm-form" aria-labelledby="contact-title">
  <div>
    <h3 class="gm-mt-0 gm-mx-0 gm-mb-1" id="contact-title">Contact me</h3>
  </div>

  <div class="gm-field">
    <label for="contact-name">Full name or company name (required)</label>
    <input id="contact-name" name="name" type="text" autocomplete="name" required>
  </div>

  <div class="gm-field">
    <label for="contact-email">Email (required)</label>
    <input id="contact-email" name="email" type="email" autocomplete="email" required>
  </div>

  <div class="gm-field">
    <label for="contact-phone">Phone number (required)</label>
    <div class="gm-input-group">
      <select id="contact-prefix" name="prefix" autocomplete="tel-country-code" aria-label="Phone prefix" required>
          <option value="+34">+34</option>
          <option value="+33">+33</option>
          <option value="+44">+44</option>
          <option value="+1">+1</option>
          <option value="+39">+39</option>
          <option value="+49">+49</option>
          <option value="+52">+52</option>
          <option value="+81">+81</option>
      </select>
      <input id="contact-phone" name="phone" type="tel" autocomplete="tel-national" required>
    </div>
  </div>

  <div class="gm-field">
    <label for="contact-type">Type of project (required)</label>
    <select id="contact-type" name="type" required>
      <option value="">Choose the type of project</option>
      <option>Business website</option>
      <option>Online store</option>
      <option>Portfolio</option>
      <option>Web application</option>
      <option>Website maintenance</option>
      <option>Other</option>
    </select>
  </div>

  <fieldset class="gm-field">
    <legend>What is your ideal timeline? (optional)</legend>
    <div class="gm-check">
      <label><input type="checkbox" name="timeline"> Urgent (within 1 month)</label>
      <label><input type="checkbox" name="timeline"> 1 to 2 months</label>
      <label><input type="checkbox" name="timeline"> 2 to 3 months</label>
      <label><input type="checkbox" name="timeline"> Flexible, no strict deadline</label>
    </div>
  </fieldset>

  <fieldset class="gm-field" aria-describedby="contact-site-help">
    <legend>Do you already have a domain or website? (required)</legend>
    <p class="gm-field__help" id="contact-site-help">Mark «Yes» if you already own a domain or a published website.</p>
    <div class="gm-check">
      <label><input type="radio" name="has-site" value="yes" required> Yes</label>
      <label><input type="radio" name="has-site" value="no"> No</label>
    </div>
  </fieldset>

  <div class="gm-field">
    <label for="contact-details">Anything else I should know? (required)</label>
    <p class="gm-field__help" id="contact-details-help">Tell me about the project you have in mind.</p>
    <textarea id="contact-details" name="details" rows="5" aria-describedby="contact-details-help" required></textarea>
  </div>

  <div class="gm-form__actions">
    <button type="submit" class="gm-btn gm-btn--accent">Send</button>
    <button type="reset" class="gm-btn gm-btn--secondary">Reset</button>
  </div>
</form>
```

## Pieces

| Class | What it is |
| --- | --- |
| `.gm-form` | The glass panel of the form |
| `.gm-field` | A label with its field (or a `fieldset` with its options) |
| `.gm-field__help` | Help text, linked with `aria-describedby` |
| `.gm-field__error` | Error message |
| `.gm-input-group` | Two fields in a row: a third and two thirds (prefix and number) |
| `.gm-check` | A list of checkboxes or radio buttons |
| `.gm-form__actions` | The buttons at the end |
| `.gm-btn--accent` | The accent button (pink by day, blue at night) to send |

## Errors

Mark the field with `aria-invalid="true"` and link the message with `aria-describedby`. The message says what to do, not just that something is wrong.

```html
<div class="gm-field">
  <label for="err-email">Email (required)</label>
  <input id="err-email" type="email" value="sara@" aria-invalid="true" aria-describedby="err-email-msg">
  <p class="gm-field__error" id="err-email-msg">Write a complete email, for example sara@example.com.</p>
</div>
```

## Accessibility

- Every field has a visible label. Groups of checkboxes or radio buttons go in a `fieldset` with its `legend`.
- Field borders reach 3.5:1 in light mode and 3.9:1 in dark mode (3:1 is required).
- While you type, the field shows a ring and a pink border by day and blue at night (5.5:1 in light, 8:1 in dark; 3:1 is required for borders).
- Use `autocomplete` (name, email, tel…) so browsers can fill the form.
- Write “(required)” in the label of required fields, as well as `required`, and “(optional)” in the label of optional ones. More in [Form rules](/docs/forms/rules).
- The send button: white text on dark pink (8.6:1) by day and dark blue (11.3:1) at night, AAA.
