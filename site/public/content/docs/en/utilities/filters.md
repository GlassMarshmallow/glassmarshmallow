# Filters

They change how an element looks (blurred, brighter, gray…) or what shows **behind** it. They can be combined: `gm-brightness-110 gm-saturate-150`. Like Tailwind's.

## On the element itself

| Class | What it does |
| --- | --- |
| `gm-filter-blur-sm` / `-md` / `-lg` / `-xl` | Blurs the element (4, 12, 24 and 48 px) |
| `gm-brightness-50` … `gm-brightness-150` | Darker or lighter (50, 75, 90, 95, 100, 105, 110, 125, 150 %) |
| `gm-contrast-50` … `gm-contrast-150` | Less or more contrast |
| `gm-saturate-0` … `gm-saturate-200` | Less or more color (`0`: gray) |
| `gm-grayscale` / `gm-grayscale-0` | Gray / with its color |
| `gm-invert` / `gm-sepia` | Inverted colors / sepia tone |
| `gm-drop-shadow-sm` / `gm-drop-shadow` / `gm-drop-shadow-lg` | A shadow with the shape of the content (icons, images with transparency) |
| `gm-filter-none` | No filters |

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap gm-items-center">
  <img class="gm-rounded-sm gm-w-[6rem]" src="media/album-3.jpg" alt="Original cover">
  <img class="gm-rounded-sm gm-w-[6rem] gm-grayscale" src="media/album-3.jpg" alt="Cover in gray">
  <img class="gm-rounded-sm gm-w-[6rem] gm-brightness-125 gm-saturate-150" src="media/album-3.jpg" alt="Brighter, more colorful cover">
  <img class="gm-rounded-sm gm-w-[6rem] gm-filter-blur-sm" src="media/album-3.jpg" alt="Blurred cover">
</div>
```

## How to: blurred lights

The colored lights in the generators are circles with a big blur:

```html
<div class="gm-relative gm-overflow-hidden gm-rounded-md gm-h-[12rem] gm-bg-[#1b2a4a]">
  <span class="gm-absolute gm-top-[15%] gm-start-[10%] gm-w-[8rem] gm-h-[8rem] gm-rounded-full gm-bg-sky gm-filter-blur-lg"></span>
  <span class="gm-absolute gm-bottom-[10%] gm-end-[15%] gm-w-[10rem] gm-h-[10rem] gm-rounded-full gm-bg-lavender gm-filter-blur-lg"></span>
</div>
```

## On what is behind

They need a somewhat transparent background to show: this is how [glass](/docs/utilities/effects) is built.

| Class | What it does |
| --- | --- |
| `gm-backdrop-blur-sm` / `-md` / `-lg` / `-xl` | Blurs what is behind (7, 12, 20 and 32 px; `gm-blur-*` is the same with the short name) |
| `gm-backdrop-saturate-100` … `gm-backdrop-saturate-200` | More color behind (iOS glass uses 180) |
| `gm-backdrop-brightness-75` … `gm-backdrop-brightness-125` | Darker or lighter behind |

```html-code
<div class="gm-bg-[rgb(255_255_255_/_.4)] gm-backdrop-blur-lg gm-backdrop-saturate-180 gm-rounded-md gm-p-6">Glass built from parts</div>
```

## Accessibility

- Do not put text on something blurred or low-contrast without checking it reads (4.5:1).
- `gm-grayscale` or `gm-saturate-0` can show something disabled, but say it in text or with `disabled` too: color alone is not enough.
