# Alert

A highlighted message inside the page: information, something that went well, a warning or an error. Soft background, text in the state color and an icon.

## Examples

```html
<div style="display: grid; gap: 12px">
  <div class="gm-alert"><i class="gmi gmi-info-circle" aria-hidden="true"></i><span>Version 0.1 is not on npm yet.</span></div>
  <div class="gm-alert gm-alert--success" role="status"><i class="gmi gmi-check-circle" aria-hidden="true"></i><span>Changes saved.</span></div>
  <div class="gm-alert gm-alert--warning"><i class="gmi gmi-exclamation-triangle" aria-hidden="true"></i><span>You have 2 trial days left.</span></div>
  <div class="gm-alert gm-alert--danger" role="alert"><i class="gmi gmi-x-circle" aria-hidden="true"></i><span>The form could not be sent. Check your connection and try again.</span></div>
</div>
```

## Types

| Class | For | Color |
| --- | --- | --- |
| `.gm-alert` | Information | Regular text on gray |
| `.gm-alert--success` | Something went well | Mint |
| `.gm-alert--warning` | Warning | Lemon |
| `.gm-alert--danger` | Error | Coral |

## Accessibility

- Color is not enough: the icon and the text also say what kind of alert it is (“Changes saved”, “Could not…”) (WCAG 1.4.1).
- If the alert appears after the person does something, add `role="status"` (calm messages) or `role="alert"` (errors): screen readers read it without moving focus (WCAG 4.1.3).
- The icon is decorative (`aria-hidden="true"`).
- Text of 7:1 or more on its background in both modes (AAA).
