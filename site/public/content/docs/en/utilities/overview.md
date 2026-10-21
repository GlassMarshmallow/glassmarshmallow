# Utilities

Small classes that each do one thing, to build without writing CSS. If it is your first time, start with [Building with utilities](/docs/getting-started/utilities): it explains how to read the names, the scale, screen sizes and variants.

Here they all are, grouped by what you want to do.

## Placing things

| I want to… | Page | For example |
| --- | --- | --- |
| Add space with margin or padding | [Spacing](/docs/utilities/spacing) | `gm-mt-4`, `gm-px-6` |
| Put things in a row or a column and align them | [Flex and alignment](/docs/utilities/flex) | `gm-d-flex gm-items-center gm-gap-3` |
| Make columns | [Grid](/docs/layout/grid) | `gm-d-grid gm-md-grid-cols-3` |
| Place on top of something, fixed or sticky | [Position and layers](/docs/utilities/position) | `gm-absolute gm-inset-0`, `gm-z-10` |
| Show or hide depending on the screen | [Display](/docs/utilities/display) | `gm-d-none gm-md-d-block` |

## Sizes

| I want to… | Page | For example |
| --- | --- | --- |
| Width, height, minimums and maximums | [Sizing](/docs/utilities/sizing) | `gm-w-full`, `gm-max-w-md` |
| A ratio, or an image that fills its box | [Images and video](/docs/utilities/media) | `gm-aspect-video`, `gm-object-cover` |
| Clip or scroll what does not fit | [Overflow](/docs/utilities/overflow) | `gm-overflow-hidden` |

## Text

| I want to… | Page | For example |
| --- | --- | --- |
| Size, weight, line height and shape | [Text](/docs/utilities/text) | `gm-text-xl gm-font-bold` |
| Text color | [Text color](/docs/color/text) | `gm-text-muted`, `gm-text-sky` |

## Color and background

| I want to… | Page | For example |
| --- | --- | --- |
| A background color (with its text on top) | [Background](/docs/color/background) | `gm-bg-surface`, `gm-bg-sky` |
| My own gradient | [Gradients](/docs/utilities/gradients) | `gm-bg-linear-to-r gm-from-sky gm-to-lavender` |
| A background image and how it sits | [Backgrounds](/docs/utilities/backgrounds) | `gm-bg-cover gm-bg-center` |
| A theme's colors (pastel or glass) | [Theme](/docs/color/theme) | `gm-theme-mint gm-theme-solid` |

## Borders and shadows

| I want to… | Page | For example |
| --- | --- | --- |
| Borders and rounded corners | [Borders and radius](/docs/utilities/borders) | `gm-border gm-rounded-lg` |
| Shadows, colored ones too | [Shadows](/docs/utilities/shadows) | `gm-shadow-md`, `gm-shadow-sky` |

## Effects and motion

| I want to… | Page | For example |
| --- | --- | --- |
| Glass, background blur and opacity | [Effects](/docs/utilities/effects) | `gm-glass`, `gm-opacity-75` |
| Blur, brighten or turn to gray | [Filters](/docs/utilities/filters) | `gm-grayscale` |
| Fade towards one side or blend colors | [Masks and blending](/docs/utilities/masks) | `gm-mask-to-b` |
| Rotate, scale, move and smooth the changes | [Transforms and transitions](/docs/utilities/transforms) | `gm-rotate-6 gm-transition` |
| Make something appear or catch the eye | [Animations](/docs/utilities/animations) | `gm-animate-fade-in` |
| The cursor, selection or visibility | [Interaction and visibility](/docs/utilities/interaction) | `gm-cursor-pointer` |

## What is not on the scale

| I want to… | Page | For example |
| --- | --- | --- |
| An exact value, any property, on hover or in dark mode | [Arbitrary values](/docs/utilities/arbitrary) | `gm-mt-[1.75rem]`, `gm-hover:shadow-[…]`, `gm-dark:bg-[#0b0b0c]` |
