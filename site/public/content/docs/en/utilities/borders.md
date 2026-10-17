# Borders and radius

Thin borders with the framework lines and rounded corners with its radii. They change on their own in dark mode.

## Borders

| Class | What it adds |
| --- | --- |
| `gm-border` | 1 px border with the soft line (`--gm-line`) |
| `gm-border-strong` | 1 px border with the strong line (`--gm-line-strong`) |
| `gm-border-t` / `gm-border-b` | Top only / bottom only |
| `gm-border-0` | No border |

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap">
  <div class="gm-border gm-rounded-sm gm-p-4">gm-border</div>
  <div class="gm-border-strong gm-rounded-sm gm-p-4">gm-border-strong</div>
  <div class="gm-border-b gm-p-4">gm-border-b</div>
</div>
```

## Radius

| Class | Radius |
| --- | --- |
| `gm-rounded-none` | 0 |
| `gm-rounded-sm` | 12 px (`--gm-radius-sm`) |
| `gm-rounded` / `gm-rounded-md` | 20 px (`--gm-radius-md`) |
| `gm-rounded-lg` | 30 px (`--gm-radius-lg`) |
| `gm-rounded-pill` | Pill |
| `gm-rounded-full` | Circle (with equal width and height) |

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap gm-items-center">
  <div class="gm-theme-pink gm-theme-solid gm-p-4 gm-rounded-sm">sm</div>
  <div class="gm-theme-pink gm-theme-solid gm-p-4 gm-rounded-md">md</div>
  <div class="gm-theme-pink gm-theme-solid gm-p-4 gm-rounded-lg">lg</div>
  <div class="gm-theme-pink gm-theme-solid gm-px-6 gm-py-2 gm-rounded-pill">pill</div>
  <div class="gm-theme-pink gm-theme-solid gm-rounded-full gm-flex gm-items-center gm-justify-center" style="width: 64px; height: 64px">full</div>
</div>
```

## Accessibility

A border that separates something important (a field, a button) needs 3:1 against the background: use `gm-border-strong`. `gm-border` is for separating without highlighting (WCAG 1.4.11).
