# Sizing

Width, height and their minimums and maximums. Like Tailwind's [min-width](https://tailwindcss.com/docs/min-width) and max-width.

## Width

| Class | Value |
| --- | --- |
| `gm-w-full` | 100 % |
| `gm-w-75` / `gm-w-50` / `gm-w-25` | 75 % / 50 % / 25 % |
| `gm-w-auto` | What it needs |
| `gm-w-fit` | Just enough for its content |

```html
<div class="gm-flex gm-flex-col gm-gap-2">
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-2 gm-w-full">gm-w-full</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-2 gm-w-75">gm-w-75</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-2 gm-w-50">gm-w-50</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-2 gm-w-fit">gm-w-fit</div>
</div>
```

`gm-w-full`, `gm-w-auto` and `gm-w-fit` have a breakpoint version: `gm-w-full gm-md-w-auto`.

## Max width

So a block does not grow too much. `gm-max-w-prose` (65 characters) is the comfortable reading width.

| Class | Value | Class | Value |
| --- | --- | --- | --- |
| `gm-max-w-xs` | 20 rem | `gm-max-w-xl` | 36 rem |
| `gm-max-w-sm` | 24 rem | `gm-max-w-2xl` | 42 rem |
| `gm-max-w-md` | 28 rem | `gm-max-w-3xl` | 48 rem |
| `gm-max-w-lg` | 32 rem | `gm-max-w-4xl` | 56 rem |
| `gm-max-w-prose` | 65 characters | `gm-max-w-full` / `-none` | 100 % / no limit |

```html
<p class="gm-max-w-prose gm-theme-lemon gm-theme-solid gm-rounded-sm gm-p-3">This paragraph never goes beyond 65 characters per line, even on a very wide screen: that is what reads best.</p>
```

## Height and minimums

| Class | Value |
| --- | --- |
| `gm-h-full` / `gm-h-auto` | 100 % / what it needs |
| `gm-h-screen` / `gm-min-h-screen` | The screen height |
| `gm-min-w-0` / `gm-min-h-0` | Can shrink below its content |
| `gm-min-w-full` | At least 100 % |

`gm-min-w-0` is the fix when long text or a code block overflows a flex or grid row.
