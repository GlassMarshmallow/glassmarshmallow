# Arbitrary values

For when the utility scale does not have the value you need: write it in square brackets, like in Tailwind. `gm-z-[5]`, `gm-mt-[1.75rem]`, `gm-max-w-[52rem]`, `gm-bg-[#5cdfeb]`…

## How it works

The framework CSS ships the utilities with the values of its scale (`gm-mt-4`, `gm-z-10`…). Arbitrary values cannot come prebuilt, because there are infinitely many: a small program, included in the package, reads your files, finds the classes with brackets and writes **only those** into a separate CSS file.

```sh
npx glassmarshmallow build
```

It creates `glassmarshmallow.extra.css` with the classes it finds in the current folder. Link it **after** the framework:

```html-code
<link rel="stylesheet" href="node_modules/glassmarshmallow/dist/css/glassmarshmallow.min.css">
<link rel="stylesheet" href="glassmarshmallow.extra.css">
```

If you do not use arbitrary values, you do not need it: the framework works the same without the program.

## Options

| Option | What it does |
| --- | --- |
| `--content src` | Reads only that folder (can be repeated: `--content src --content content`) |
| `--out src/extra.css` | Where it writes the CSS |
| `--watch` | Keeps watching and writes it again every time you save a file |

It reads HTML, Markdown, JavaScript, TypeScript, Angular, React, Vue, Svelte, Astro and PHP files, and skips `node_modules`, `dist` and hidden folders.

## What you can write

| Class | Writes |
| --- | --- |
| `gm-m-[…]`, `gm-mt-[…]`, `gm-px-[…]`… | Margins and padding, with the same sides as the utilities |
| `gm-gap-[…]` | Gap between children |
| `gm-w-[…]`, `gm-h-[…]`, `gm-min-w-[…]`, `gm-max-w-[…]`, `gm-min-h-[…]`, `gm-max-h-[…]` | Sizes |
| `gm-z-[…]`, `gm-inset-[…]`, `gm-top-[…]`, `gm-bottom-[…]`, `gm-start-[…]`, `gm-end-[…]` | Layers and position |
| `gm-text-[…]` | Font size, or color if the value is a color (`gm-text-[#c71c6f]`) |
| `gm-font-[…]`, `gm-leading-[…]`, `gm-tracking-[…]` | Weight, line height and letter spacing |
| `gm-bg-[…]`, `gm-border-[…]`, `gm-rounded-[…]` | Background, border (width or color) and corners |
| `gm-shadow-[…]`, `gm-opacity-[…]`, `gm-blur-[…]` | Shadow, opacity and background blur |
| `gm-grid-cols-[…]`, `gm-grid-rows-[…]`, `gm-col-span-[…]`, `gm-basis-[…]`, `gm-order-[…]` | Grid and flex |
| `gm-aspect-[…]`, `gm-duration-[…]`, `gm-delay-[…]` | Aspect ratio and animation timing |

Inside the brackets, **`_` is a space**: `gm-grid-cols-[1fr_2fr]` writes `grid-template-columns: 1fr 2fr`. They also work with [breakpoints](/docs/layout/breakpoints): `gm-md-max-w-[52rem]`.

## Example

```html-code
<div class="gm-relative gm-h-[10rem]">
  <div class="gm-absolute gm-inset-0 gm-z-[5] gm-bg-[#5cdfeb] gm-rounded-[1.25rem]"></div>
  <p class="gm-relative gm-z-[6] gm-p-[1.75rem] gm-text-[1.6rem]">On top of the background</p>
</div>
<div class="gm-grid gm-grid-cols-[1fr_2fr] gm-md-grid-cols-[1fr_1fr_1fr] gm-gap-[.875rem]">…</div>
```

## When to use them

- First, check whether the scale already has it (`gm-mt-6`, `gm-z-20`): the site stays more consistent.
- Use `rem` for sizes (`gm-mt-[1.75rem]`, not `gm-mt-[28px]`), so they grow with the person's text size.
- If the same value repeats a lot, it may deserve a variable or a component of its own.
- The program rejects values with `;`, `{`, `}` or `\`, so a class cannot break the rest of the CSS.
