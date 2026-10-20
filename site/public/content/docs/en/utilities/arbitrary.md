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
| `gm-translate-[…]`, `gm-scale-[…]`, `gm-rotate-[…]`, `gm-transition-[…]` | Move, scale, rotate and transitions |
| `gm-cursor-[…]`, `gm-d-[…]`, `gm-content-[…]`, `gm-grid-min-[…]` | Cursor, `display`, the text of `::before` / `::after` and the minimum width of `gm-grid--auto` |

Inside the brackets, **`_` is a space**: `gm-grid-cols-[1fr_2fr]` writes `grid-template-columns: 1fr 2fr`. They also work with [breakpoints](/docs/layout/breakpoints): `gm-md-max-w-[52rem]`.

## Any property

For a CSS property with no utility, write it whole in brackets: `gm-[property:value]`. Also with breakpoints and variants.

```html-code
<p class="gm-[text-wrap:balance] gm-light:[-webkit-text-fill-color:currentColor] gm-md-hover:[text-decoration-line:underline]">…</p>
```

For backgrounds, a type hint says which part of the background it is: `gm-bg-[length:1.5rem_1.5rem]` (size), `gm-bg-[position:top]` (position); `gm-bg-[url(…)]` and gradients are the image.

## Variants: when it applies

Before the utility, one or more variants with `:` say **when** the class applies, like in Tailwind. This way hover effects, dark mode, states and the `::before` / `::after` layers are written without CSS.

```html-code
<button class="gm-btn gm-hover:bg-[var(--gm-hover)] gm-focus-visible:shadow-[0_0_0_3px_var(--gm-focus)]">…</button>
<button class="gm-pressed:bg-[var(--gm-primary)] gm-pressed:text-[var(--gm-on-primary)]" aria-pressed="false">…</button>
<p class="gm-text-[#3a3a3c] gm-dark:text-[#d1d1d6]">…</p>
<a class="gm-before:content-[→] gm-before:me-[.5rem]" href="…">Next</a>
```

| Variant | Applies… |
| --- | --- |
| `gm-hover:` | on hover |
| `gm-focus:` / `gm-focus-visible:` / `gm-focus-within:` | on focus / on keyboard focus / when something inside has focus |
| `gm-active:` / `gm-disabled:` / `gm-checked:` | while pressing / when disabled / when checked |
| `gm-first:` / `gm-last:` / `gm-odd:` / `gm-even:` | to the first / the last / the odd / the even of its siblings |
| `gm-pressed:` / `gm-selected:` / `gm-expanded:` / `gm-current:` / `gm-invalid:` | with `aria-pressed`, `aria-selected`, `aria-expanded` or `aria-invalid` set to `true`, or with `aria-current` |
| `gm-before:` / `gm-after:` / `gm-placeholder:` | on the `::before` layer, on `::after` or on a field's placeholder |
| `gm-dark:` / `gm-light:` | in dark / light mode (`data-theme`) |
| `gm-group-hover:` / `gm-group-focus-within:` | when the ancestor with the `gm-group` class is hovered or focused |
| `gm-motion-safe:` / `gm-motion-reduce:` | if the person has not asked for less motion / if they have |

- They can be combined: `gm-dark:hover:bg-[…]` (in dark mode, on hover).
- With a breakpoint, the breakpoint goes first: `gm-md-hover:translate-[0_-1px]`.
- `gm-before:` and `gm-after:` already draw the layer; its text is set with `gm-before:content-[…]` (no quotes: the program adds them).
- Hover movements are better with `gm-motion-safe:`, to respect people who ask for less motion.

## Example

```html-code
<div class="gm-relative gm-h-[10rem]">
  <div class="gm-absolute gm-inset-0 gm-z-[5] gm-bg-[#5cdfeb] gm-rounded-[1.25rem]"></div>
  <p class="gm-relative gm-z-[6] gm-p-[1.75rem] gm-text-[1.6rem]">On top of the background</p>
</div>
<div class="gm-grid gm-grid-cols-[1fr_2fr] gm-md-grid-cols-[1fr_1fr_1fr] gm-gap-[.875rem]">…</div>
```

## Images with Angular, Vite and other bundlers

If the generated CSS goes through a bundler (Angular, Vite, webpack…), it looks for the `url(…)` images at build time and fails if it cannot find them. Use paths that start with `/` (`gm-bg-[url(/img/photo.jpg)]`): they are left as they are and looked up on the site when the page opens.

## When to use them

- First, check whether the scale already has it (`gm-mt-6`, `gm-z-20`): the site stays more consistent.
- Use `rem` for sizes (`gm-mt-[1.75rem]`, not `gm-mt-[28px]`), so they grow with the person's text size.
- If the same value repeats a lot, it may deserve a variable or a component of its own.
- The program rejects values with `;`, `{`, `}` or `\`, so a class cannot break the rest of the CSS.
