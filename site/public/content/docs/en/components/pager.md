# Previous and next

Two glass cards at the end of a page that belongs to a series (documentation, a course, a step-by-step tutorial), with the name of the previous and the next page.

## Example

```html
<nav class="gm-pager" aria-label="More pages">
  <a class="gm-pager__link" href="#">
    <span class="gm-pager__label"><i class="gmi gmi-arrow-left" aria-hidden="true"></i>Previous</span>
    <span class="gm-pager__title">Button</span>
  </a>
  <a class="gm-pager__link gm-pager__link--next" href="#">
    <span class="gm-pager__label">Next<i class="gmi gmi-arrow-right" aria-hidden="true"></i></span>
    <span class="gm-pager__title">Card</span>
  </a>
</nav>
```

`gm-pager__link--next` always goes in the right column, even when there is no previous page (on the first page).

## Accessibility

- It is a `<nav>` with its own `aria-label`, different from the main navigation's.
- Each link says where it goes (the page name), not just "Next".
- The arrows are decorative (`aria-hidden`): the word already says it.
