# Animations

Short movements so something appears or draws a little attention. **They all switch off on their own** if the person has asked for reduced motion in their system.

| Class | What it does | For |
| --- | --- | --- |
| `gm-animate-fade-in` | Fades in | Content that loads |
| `gm-animate-slide-up` | Rises a little as it appears | Cards, alerts |
| `gm-animate-pop` | Appears growing with a small bounce | Icons, badges |
| `gm-animate-spin` | Spins non-stop | “Loading” icons |
| `gm-animate-pulse` | Slowly fades out and in | Placeholders while content loads |
| `gm-transition` | Color, shadow, opacity and position changes are smooth | Buttons, links, cards |

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap gm-items-center">
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-fade-in">fade-in</div>
  <div class="gm-theme-mint gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-up">slide-up</div>
  <div class="gm-theme-peach gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-pop">pop</div>
  <i class="gmi gmi-arrow-repeat gm-animate-spin" style="font-size: 1.6rem" aria-hidden="true"></i>
  <div class="gm-bg-gray-200 gm-rounded-sm gm-animate-pulse" style="width: 140px; height: 20px"></div>
</div>
```

The appearing ones only show when the page loads: reload it to see them again.

## Accessibility

- With “reduce motion” on in the system, none of them moves (WCAG 2.3.3).
- Nothing flashes more than three times per second (WCAG 2.3.1): `gm-animate-pulse` runs one cycle every 2 s.
- Things that spin or pulse non-stop only while something loads, with text saying what is happening (“Loading…”).
