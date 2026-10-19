# Animations

Short movements so something appears, leaves or draws a little attention. **They all switch off on their own** if the person has asked for reduced motion in their system. Entering and leaving ones move only once: press **Replay** to see them again.

## Enter

```html
<div class="gm-flex gm-gap-3 gm-flex-wrap gm-items-center">
  <button type="button" class="gm-btn gm-btn--sm gm-btn--secondary" data-replay><i class="gmi gmi-arrow-repeat" aria-hidden="true"></i>Replay</button>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-fade-in">fade-in</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-up">slide-up</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-down">slide-down</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-left">slide-left</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-right">slide-right</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-zoom-in">zoom-in</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-pop">pop</div>
  <div class="gm-theme-lavender gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-blur-in">blur-in</div>
  <div class="gm-theme-lavender gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-spin-in">spin-in</div>
</div>
```

| Class | What it does |
| --- | --- |
| `gm-animate-fade-in` | Fades in |
| `gm-animate-slide-up` / `-down` | Appears rising / dropping a little |
| `gm-animate-slide-left` / `-right` | Enters from the left / the right |
| `gm-animate-zoom-in` | Appears growing a little |
| `gm-animate-pop` | Appears growing with a small bounce |
| `gm-animate-blur-in` | Rises and comes into focus from blurry (the portfolio technologies) |
| `gm-animate-spin-in` | Appears spinning with a bounce (the portfolio logos) |

## Cascade

With `gm-stagger` on the container, children enter one after another, 40 ms apart, like the portfolio technologies. `blur-in` by default; for another, put its class on the children.

```html
<div class="gm-flex gm-gap-3 gm-flex-wrap gm-items-center">
  <button type="button" class="gm-btn gm-btn--sm gm-btn--secondary" data-replay><i class="gmi gmi-arrow-repeat" aria-hidden="true"></i>Replay</button>
  <div class="gm-stagger gm-flex gm-gap-2 gm-flex-wrap">
    <span class="gm-tag gm-theme-mint gm-theme-solid">Angular</span>
    <span class="gm-tag gm-theme-mint gm-theme-solid">TypeScript</span>
    <span class="gm-tag gm-theme-mint gm-theme-solid">.NET</span>
    <span class="gm-tag gm-theme-mint gm-theme-solid">Figma</span>
    <span class="gm-tag gm-theme-mint gm-theme-solid">Docker</span>
    <span class="gm-tag gm-theme-mint gm-theme-solid">Ollama</span>
  </div>
</div>
```

## Leave

To remove something smoothly: add the class and, when the animation ends (`animationend` event), remove the element.

```html
<div class="gm-flex gm-gap-3 gm-flex-wrap gm-items-center">
  <button type="button" class="gm-btn gm-btn--sm gm-btn--secondary" data-replay><i class="gmi gmi-arrow-repeat" aria-hidden="true"></i>Replay</button>
  <div class="gm-theme-coral gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-fade-out">fade-out</div>
  <div class="gm-theme-coral gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-out">slide-out</div>
  <div class="gm-theme-coral gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-zoom-out">zoom-out</div>
</div>
```

## Draw attention

```html
<div class="gm-flex gm-gap-6 gm-flex-wrap gm-items-center">
  <button type="button" class="gm-btn gm-btn--sm gm-btn--secondary" data-replay><i class="gmi gmi-arrow-repeat" aria-hidden="true"></i>Replay</button>
  <i class="gmi gmi-arrow-down gm-animate-bounce" style="font-size: 1.6rem" aria-hidden="true"></i>
  <div class="gm-field" style="max-width: 12.5rem"><input class="gm-animate-shake" value="sara@" aria-label="Email (error example)" aria-invalid="true"></div>
  <i class="gmi gmi-heart-fill gm-animate-heartbeat gm-text-coral" style="font-size: 1.6rem" aria-hidden="true"></i>
  <span class="gm-relative gm-inline-flex" style="width: 0.875rem; height: 0.875rem">
    <span class="gm-animate-ping gm-absolute gm-inset-0 gm-rounded-full gm-bg-mint"></span>
    <span class="gm-relative gm-rounded-full gm-bg-mint" style="width: 0.875rem; height: 0.875rem"></span>
  </span>
</div>
```

| Class | What it does | For |
| --- | --- | --- |
| `gm-animate-bounce` | Bounces non-stop | An arrow inviting to scroll |
| `gm-animate-shake` | Shakes once | A field with an error |
| `gm-animate-heartbeat` | Beats | A “like” |
| `gm-animate-ping` | An expanding wave | Something new or live |

## While loading

```html
<div class="gm-flex gm-gap-6 gm-flex-wrap gm-items-center">
  <i class="gmi gmi-arrow-repeat gm-animate-spin" style="font-size: 1.6rem" aria-hidden="true"></i>
  <div class="gm-bg-gray-200 gm-rounded-sm gm-animate-pulse" style="width: 8.75rem; height: 1.25rem"></div>
  <div class="gm-rounded-sm gm-animate-shimmer" style="width: 12.5rem; height: 1.25rem"></div>
</div>
```

| Class | What it does |
| --- | --- |
| `gm-animate-spin` | Spins non-stop |
| `gm-animate-pulse` | Slowly fades out and in |
| `gm-animate-shimmer` | A shine sweeping across the placeholder while content loads |

## Countdown

The “next episode” button from My MTV Box: it fills from left to right. The duration goes in `--gm-countdown` (10 s by default).

```html
<div class="gm-flex gm-gap-3 gm-flex-wrap gm-items-center">
  <button type="button" class="gm-btn gm-btn--sm gm-btn--secondary" data-replay><i class="gmi gmi-arrow-repeat" aria-hidden="true"></i>Replay</button>
  <button type="button" class="gm-btn gm-countdown" style="--gm-countdown: 5s">Watch the next episode</button>
</div>
```

## On scroll

`gm-animate-on-scroll`: the piece rises and appears as it enters the screen. CSS only, in browsers that support it (Chrome and Edge); elsewhere it stays still.

## Duration and delay

| Classes | Values |
| --- | --- |
| `gm-duration-…` | 150, 200, 300, 500, 700 and 1000 ms |
| `gm-delay-…` | 100, 200, 300, 500, 700 and 1000 ms |
| `gm-transition` | Smooth changes of color, shadow, opacity and position |

```html
<div class="gm-flex gm-gap-3 gm-flex-wrap gm-items-center">
  <button type="button" class="gm-btn gm-btn--sm gm-btn--secondary" data-replay><i class="gmi gmi-arrow-repeat" aria-hidden="true"></i>Replay</button>
  <div class="gm-theme-peach gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-up">No delay</div>
  <div class="gm-theme-peach gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-up gm-delay-300">300 ms</div>
  <div class="gm-theme-peach gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-up gm-delay-700 gm-duration-1000">700 ms, slow</div>
</div>
```

## Accessibility

- With “reduce motion” on in the system, none of them moves (WCAG 2.3.3).
- Nothing flashes more than three times per second (WCAG 2.3.1).
- Things that move non-stop only while something loads or with a clear purpose, and with text saying what is happening (“Loading…”). If it lasts more than 5 s, it must be possible to stop it (WCAG 2.2.2).
- The error shake goes with the error message, it does not replace it.
