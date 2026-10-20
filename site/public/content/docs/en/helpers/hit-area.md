# Hit area

`gm-hit-area` enlarges the area you can press up to 44 × 44 px without changing how it looks: for icon links or buttons that look smaller. It is what the framework buttons already do inside.

## Example

```html
<a class="gm-hit-area gm-inline-flex gm-p-1" href="#" aria-label="GitHub"><i class="gmi gmi-github" aria-hidden="true"></i></a>
```

It looks the size of the icon, but responds to touch in a 44 px square around it.

## How it works

An invisible layer (`::after`) sticks out of the element as much as needed to reach 44 px wide and tall, centered. If the element is already bigger, the layer does not enlarge it.

## Accessibility

- WCAG 2.5.5 (AAA) asks for 44 × 44 px for anything pressed; WCAG 2.5.8 (AA), 24 × 24 px at least.
- Leave space between two nearby hit areas: if they overlap, a finger may press the wrong one.
