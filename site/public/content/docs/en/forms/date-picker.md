# Date picker

A calendar with a glass panel, the month in large type and the days in 44 px circles. Today is in blue and the chosen day is filled.

## Example

Add `data-gm-calendar` and load the calendar script: it creates the calendar, changes the month and lets you choose a day with the mouse or the keyboard.

```html
<div class="gm-calendar" data-gm-calendar data-today="2026-10-17" data-selected="2026-10-22"></div>

<script type="module">
  import { initCalendars } from 'glassmarshmallow/js/calendar.js';
  initCalendars();
</script>
```


## Days

| Day | How to mark it | How it looks |
| --- | --- | --- |
| Today | `aria-current="date"` | Blue and bold |
| Chosen | `aria-pressed="true"` | Black circle in light mode, white in dark mode |
| From another month | `.is-outside` | Gray |
| Not available | `disabled` | Paler, and it cannot be chosen |

## Options

| Attribute | What it does |
| --- | --- |
| `data-selected="2026-10-22"` | The chosen day |
| `data-month="2026-10"` | The month shown at the start |
| `data-today="2026-10-17"` | Which day is «today» (by default, the date of the device) |
| `data-locale="es"` | Language of the names (by default, the `lang` of the page) |
| `data-min`, `data-max` | First and last day that can be chosen |

When a day is chosen, the calendar sends the `gm-date-change` event with the date:

```js
document.querySelector('.gm-calendar').addEventListener('gm-date-change', (event) => {
  console.log(event.detail.date); // '2026-10-22'
});
```

## Keyboard

| Key | What it does |
| --- | --- |
| ← → | Previous or next day |
| ↑ ↓ | Same day of the previous or next week |
| Home / End | First or last day of the week |
| Page Up / Page Down | Previous or next month |
| Enter / Space | Choose the day |

## Only with CSS

Without the script you can write the calendar by hand: the framework gives the look and your page decides what happens.

```html-code
<div class="gm-calendar" role="group" aria-labelledby="cal-title">
  <div class="gm-calendar__header">
    <h3 class="gm-calendar__title" id="cal-title">October <span>2026</span></h3>
    <div class="gm-calendar__nav">
      <button type="button" class="gm-icon-btn" aria-label="Previous month"><i class="gmi gmi-chevron-left" aria-hidden="true"></i></button>
      <button type="button" class="gm-icon-btn" aria-label="Next month"><i class="gmi gmi-chevron-right" aria-hidden="true"></i></button>
    </div>
  </div>
  <table class="gm-calendar__grid">
    <thead><tr><th scope="col"><abbr title="Monday">Mon</abbr></th><th scope="col"><abbr title="Tuesday">Tue</abbr></th><th scope="col"><abbr title="Wednesday">Wed</abbr></th><th scope="col"><abbr title="Thursday">Thu</abbr></th><th scope="col"><abbr title="Friday">Fri</abbr></th><th scope="col"><abbr title="Saturday">Sat</abbr></th><th scope="col"><abbr title="Sunday">Sun</abbr></th></tr></thead>
    <tbody>
        <tr><td><button type="button" class="gm-calendar__day is-outside" aria-label="September 28, 2026">28</button></td><td><button type="button" class="gm-calendar__day is-outside" aria-label="September 29, 2026">29</button></td><td><button type="button" class="gm-calendar__day is-outside" aria-label="September 30, 2026">30</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 1, 2026">1</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 2, 2026">2</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 3, 2026">3</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 4, 2026">4</button></td></tr>
        <tr><td><button type="button" class="gm-calendar__day" aria-label="October 5, 2026">5</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 6, 2026">6</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 7, 2026">7</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 8, 2026">8</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 9, 2026">9</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 10, 2026">10</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 11, 2026">11</button></td></tr>
        <tr><td><button type="button" class="gm-calendar__day" aria-label="October 12, 2026">12</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 13, 2026">13</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 14, 2026">14</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 15, 2026">15</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 16, 2026">16</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 17, 2026" aria-current="date">17</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 18, 2026">18</button></td></tr>
        <tr><td><button type="button" class="gm-calendar__day" aria-label="October 19, 2026">19</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 20, 2026">20</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 21, 2026">21</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 22, 2026" aria-pressed="true">22</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 23, 2026">23</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 24, 2026">24</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 25, 2026">25</button></td></tr>
        <tr><td><button type="button" class="gm-calendar__day" aria-label="October 26, 2026">26</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 27, 2026">27</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 28, 2026">28</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 29, 2026">29</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 30, 2026">30</button></td><td><button type="button" class="gm-calendar__day" aria-label="October 31, 2026">31</button></td><td><button type="button" class="gm-calendar__day is-outside" aria-label="November 1, 2026">1</button></td></tr>
    </tbody>
  </table>
</div>
```

## Accessibility

- Each day is a button with the full date in `aria-label`, so screen readers say «October 22, 2026» and not just «22».
- The days of the week use `<abbr>` with the full name.
- The month buttons have `aria-label`.
- Days of 44 px, the size WCAG 2.5.5 (AAA) asks for, also on mobile.
- Contrast: numbers 15:1 or more, today in blue 5:1 or more, days from other months 5:1 or more (AA).
