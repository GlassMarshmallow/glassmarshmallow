# Breakpoints

The screen widths where the layout changes. You think of phones first and add from each breakpoint upwards, as in Bootstrap.

| Name | From | Screens | Class example |
| --- | --- | --- | --- |
| (no prefix) | 0 | phones | `gm-col-12` |
| `sm` | 600 px | large phones and landscape | `gm-sm-col-6` |
| `md` | 860 px | tablets; from here, the desktop navigation bar | `gm-md-col-4` |
| `lg` | 1100 px | computers | `gm-lg-col-3` |
| `xl` | 1300 px | large screens | `gm-xl-col-2` |

## How to use them

A prefixed class applies **from** that width upwards. Without a prefix, everywhere. Here, one column on phones, two from `sm` and four from `lg` (resize the window to see it):

```html
<div class="gm-grid gm-gap-sm">
  <div class="gm-sm-col-6 gm-lg-col-3 gm-theme-sky gm-theme-solid gm-p-4 gm-rounded-sm">1</div>
  <div class="gm-sm-col-6 gm-lg-col-3 gm-theme-pink-blue gm-theme-solid gm-p-4 gm-rounded-sm">2</div>
  <div class="gm-sm-col-6 gm-lg-col-3 gm-theme-mint gm-theme-solid gm-p-4 gm-rounded-sm">3</div>
  <div class="gm-sm-col-6 gm-lg-col-3 gm-theme-peach gm-theme-solid gm-p-4 gm-rounded-sm">4</div>
</div>
```

## In your own CSS

In `@media` you have to write the number (CSS variables do not work there). Use the same values, from phones upwards:

```css
.my-block { padding: 16px; }

@media (min-width: 860px) {
  .my-block { padding: 32px; }
}
```

From JavaScript, the values are in variables: `--gm-breakpoint-sm`, `--gm-breakpoint-md`, `--gm-breakpoint-lg` and `--gm-breakpoint-xl`.

```js
const md = getComputedStyle(document.documentElement).getPropertyValue('--gm-breakpoint-md'); // '860px'
const tablet = matchMedia(`(min-width: ${md})`).matches;
```
