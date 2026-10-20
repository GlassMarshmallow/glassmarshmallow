# Transforms and transitions

Rotate, scale and move elements, and make changes smooth. They combine on their own: `gm-rotate-6 gm-scale-110`. Like in Tailwind.

## Rotate, scale and move

| Class | What it does |
| --- | --- |
| `gm-rotate-0` / `-1` / `-2` / `-3` / `-6` / `-12` / `-45` / `-90` / `-180` | Rotates that many degrees |
| `gm-scale-0` / `-50` / `-75` / `-90` / `-95` / `-100` / `-105` / `-110` / `-125` / `-150` | Scales (100: its size) |
| `gm-translate-x-…` / `gm-translate-y-…` | Moves sideways / up and down, with the spacing scale (`gm-translate-y-1`: 0.25 rem) |
| `gm-origin-center` / `-top` / `-bottom-right`… | Where it rotates or scales from |

The other way, with an [arbitrary value](/docs/utilities/arbitrary): `gm-rotate-[-6deg]`, `gm-translate-[0_-1px]`.

```html
<div class="gm-flex gm-gap-6 gm-flex-wrap gm-p-6">
  <div class="gm-theme-pink gm-theme-solid gm-rounded-sm gm-p-4 gm-rotate-6">gm-rotate-6</div>
  <div class="gm-theme-mint gm-theme-solid gm-rounded-sm gm-p-4 gm-scale-90">gm-scale-90</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-translate-y-2">gm-translate-y-2</div>
</div>
```

## Transitions

| Class | What changes smoothly |
| --- | --- |
| `gm-transition` | Colors, shadow, opacity and movement |
| `gm-transition-colors` / `-opacity` / `-transform` / `-shadow` / `-none` | Only that |
| `gm-duration-150` … `gm-duration-1000` / `gm-delay-100` … `gm-delay-1000` | How long / how long it waits (in [animations](/docs/utilities/animations)) |
| `gm-ease-linear` / `-in` / `-out` / `-in-out` / `-bounce` | With which curve (`-bounce` overshoots a little and comes back) |

## How to: a card that rises on hover

With the arbitrary value [variants](/docs/utilities/arbitrary): it only moves if the person has not asked for less motion.

```html-code
<a class="gm-card gm-motion-safe:transition-[translate_.2s] gm-hover:translate-[0_-2px]" href="…">…</a>
```

## Accessibility

- If someone asks for less motion, the framework removes its animations; for what you build, use `gm-motion-safe:`.
- Do not move content that is being read, and let nothing spin or grow by itself without the person doing something.
