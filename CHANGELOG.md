# Changelog

All notable changes to GlassMarshmallow. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and the project uses [Semantic Versioning](https://semver.org/). While the version is 0.x, a minor version (0.**2**.0)
can include changes that need small updates in your code; they are listed under **Changed**.

## [Unreleased]

## [0.4.0] - 2026-10-24

### Added
- **`gm-dock`:** a side bar of icons for desktop, stuck to the left edge, with the glass of the navbar and the name
  of each section in a tooltip. With the optional script (`js/dock.js`), the icons grow on hover like in the Mac Dock
  (not with reduced motion). Below 861 px it is hidden and the tab bar is used.
- **Gradient tones:** `gm-from-…`, `gm-via-…` and `gm-to-…` also take the palette tones, from `025` to `975`, as in
  Tailwind (`gm-from-sky-400`, `gm-via-peach-300`, `gm-to-gray-900`). The Gradients page shows them, with gradient
  text (`gm-bg-clip-text`) and how to use more than three colors.
- **Your own breakpoints** with `npx glassmarshmallow build`, like in Tailwind: `gm-max-[47.9375rem]:…`,
  `gm-min-[48rem]:…`, `gm-max-h-[47.5rem]:…` and `gm-min-h-[…]:…`, also combined.
- **`--gm-prose-heading`:** the color of the `gm-prose` and `gm-dialog` headings, to change it without CSS rules.
- **`gm-btn--soft`:** a small button with a light tint and its border (pastel peach by day, the transparent
  accent at night), for secondary actions like "Edit". Its colors are `--gm-btn-soft-*` variables.

### Changed
- **Headings of `gm-prose` and `gm-dialog`** in a single color, with no gradient on the letters: the text color in
  light mode (sky at night, as before).

### Fixed
- **`npx glassmarshmallow build`:** `gm-text-[var(--gm-link)]` (and `--gm-focus`, `--gm-muted`, `--gm-primary`…) is a
  color, not a font size. With your own variables, `gm-text-[color:var(--my-color)]`.
- **`gm-ticker`:** a click or a tap on its pause button no longer leaves it stopped (the focus left by the click
  kept it paused). It stops with keyboard focus inside, with the button and, on devices with a mouse, on hover.
- **Reflow at 320 px (WCAG 1.4.10):** headings, paragraphs, list items, table cells, captions and quotes break a
  word (or a long inline code) only when it does not fit, instead of making the page scroll sideways. Nothing
  changes when it fits.
- **`gm-pager`:** a long page title no longer pushes the "next" card out of narrow screens.
- **`gm-hero` (WCAG 1.4.12):** with larger letter or word spacing, the name and the lead stay inside the hero.
- **`gm-calendar` on small screens:** the box adapts to the space it has: 1.25rem of padding when it fits and
  less (down to .5rem) when the week of 44 px days would not, so the days and arrows never stick out. Up to
  480 px the days have no gap between them; at 360 px or less (also 400 % zoom, WCAG 1.4.10) the days are 36 px (WCAG 2.5.8 asks
  for 24 px) and the month can move to its own line.
- **`gm-btn` in forced colors mode:** the filled button gets a border, so it still looks like a button when the
  system removes backgrounds. Nothing changes outside that mode.
- **Carousel (`js/carousel.js`):** a slide that is a `<figure>` with a `<figcaption>` keeps its `figure` role
  (HTML does not allow `role="group"` there); other slides are still groups.
- Documentation examples: the tab bar's "More" button controls an element that exists, the code snippet's
  panel is named by its tab, and the example landmarks (navbar, footer, table of contents, tab bar) no longer
  repeat the names of the site's own ones.

## [0.3.0] - 2026-10-22

### Added
- **Component families:** besides `glassmarshmallow.css` (everything), the core (`glassmarshmallow-core.css`) and
  seven families in `dist/css/components/` (`basics`, `forms`, `navigation`, `media`, `chat`, `pages`, `tools`), to
  load only the components you use. See "Only the parts you need" in Install.

- Guide "How the logo was made": the logo built only with the framework's classes and its tools, and the SVG
  generated from that code.

### Fixed
- **Color picker (`js/color-picker.js`):** a color typed as a code keeps exactly that value (`#3cd2ff` no longer
  turns into `#3dd2ff`); it is only recalculated when hue, saturation or lightness change.

### Changed
- `gm-glass-logo` in light mode: a thin white border and the medium shadow, with no gradient shadow behind the
  glass, so the glass looks as clean as in dark mode.
- **Sublayers:** the framework is in `glassmarshmallow.tokens`, `.base`, `.layout`, `.icons`, `.components`, `.theme`,
  `.utilities` and `.extra`, inside the `glassmarshmallow` layer. Every file starts with that order, so
  the files can be linked in any order and utilities still win over components. Your own CSS still always wins.
- **Icons:** use `glassmarshmallow-icons` 0.4.0 or later, which goes in `glassmarshmallow.icons`. With 0.3.0, the
  icons sit above the sublayers and some sizes set by components (like the ticker's) are lost.
- `npx glassmarshmallow build` writes its classes in `glassmarshmallow.extra`.
- The source is split: `css/components/<family>.css` instead of a single `css/components.css`.

## [0.2.1] - 2026-10-22

### Added
- Guide "Building with utilities" and an index of all utilities in the documentation.
- `npm test` (the CSS builds, everything is inside the layer, every class used in the docs examples exists) and
  `npm run test:a11y` (axe-core on every documentation page, in light and dark mode, on desktop and mobile).
- `CHANGELOG.md`, `SECURITY.md`, `CONTRIBUTING.md` and issue templates.

- `gm-search--collapse-lg`: the navbar search turns into the magnifying glass up to 1100 px (`lg`), for bars
  with many or long links.
- Documentation page "Performance", with the size of every file (as is, gzip and Brotli) measured on each build.

### Fixed
- **Links inside text** (paragraphs, lists, quotes, tables) with no class are underlined, so they do not
  stand out by color only (WCAG 1.4.1). It has no specificity, so any class or component changes it.
- **Scripts:** the carousel, gallery, player, color picker and calendar escape the texts they insert, so a label
  or a translation passed in `options.texts` can never run as HTML.
- **Minified CSS:** the minifier no longer changes anything inside quoted strings (`content: "A > B"`,
  `url("…")`), and no longer mistakes a `/*` inside a string for a comment.
- **`.gm-btn--danger`** only applies on the pill (`.gm-btn--pill`), where its color reads at 9.6:1; on the black
  button it used to leave the text unreadable.
- **Code colors** reach 4.5:1 on the gray of `gm-code` too: CSS properties and HTML attributes in coral 800 in
  light mode; comments and HTML punctuation in the secondary gray in dark mode.
- Documentation examples: the language menu button's name starts with what it shows ("EN, language: English",
  WCAG 2.5.3), and the text over the colored layer in Position reads in dark mode.
- The documentation's search no longer covers the last link of the navbar in Spanish between 860 and 1300 px.

### Changed
- Code comments and docs no longer mention the projects the designs came from.

## [0.2.0] - 2026-10-21

### Added
- **Cascade layer:** the whole framework is inside `@layer glassmarshmallow`, so your own CSS always wins,
  whatever its specificity. The classes generated by `npx glassmarshmallow build` go in the same layer.
- **Arbitrary values** with `npx glassmarshmallow build`: bracket classes (`gm-z-[5]`, `gm-mt-[1.75rem]`),
  any property (`gm-[mask-type:luminance]`), type hints (`gm-bg-[length:2rem_2rem]`) and variants
  (`gm-hover:`, `gm-dark:`, `gm-light:`, `gm-focus-visible:`, `gm-before:`, `gm-after:`, `gm-group-hover:`,
  `gm-motion-safe:`…). Gradient stop positions: `gm-from-[12.5%]`.
- **Utilities**, like Tailwind: position and layers, overflow, text, images and video, interaction and
  visibility, display (`gm-d-*`), a grid to build with (`gm-grid-cols-*`, `gm-col-span-*`), gradients
  (`gm-bg-linear-to-*`, `gm-from-*`, `gm-via-*`, `gm-to-*`), filters and backdrop filters, rings, inner and
  colored shadows, borders per side, transforms, transitions, backgrounds, masks and blending.
- **Components:** `gm-sidenav`, `gm-toc`, `gm-pager`, `gm-snippet`, `gm-alert--note`, `gm-slider`, `gm-tool`
  (with stage, sample text, toggles, presets, color stops, direction pad and full screen), `gm-command`,
  `gm-card--link`, `gm-page`, `gm-lead`, `gm-site-footer`, `gm-hit-area`, `gm-search--navbar`, `gm-hero`,
  `gm-icon-grid`, `gm-showcase`, `gm-app` (page structure with the footer at the bottom), `gm-docs`,
  `gm-menu--center` and `.gm-btn` as a menu trigger, and code colors for Shiki (Light+ and Dark+).

### Changed
- Sizes in `rem` everywhere (thin borders, shadows, blurs and focus outlines stay in `px`), so everything
  grows with the person's font size.
- Breakpoints are the same in every component: `gm-tool` and `gm-sidenav` switch at 860 px (`md`) instead
  of 900 px.
- The documentation site is built only with the framework: it has no CSS of its own.

## [0.1.4] - 2026-10-19

### Changed
- Chat, chips, bubble, avatars and ticker borders in a single color: sky in light mode and turquoise in dark mode.

## [0.1.3] - 2026-10-19

### Fixed
- Fallback font with the measurements of Montserrat, so the text does not jump when the font arrives.

## [0.1.2] - 2026-10-19

### Added
- Montserrat in an optional file, `glassmarshmallow-font.css`, with no Google Fonts.

## [0.1.1] - 2026-10-18

### Changed
- Package metadata: links to GitHub and the website, keywords, and the CSS built before publishing.

## [0.1.0] - 2026-10-18

### Added
- First public version: glass surfaces, pastel palette, light and dark mode, WCAG 2.2 AA (AAA whenever
  possible), components, utilities and optional scripts with no dependencies.

[Unreleased]: https://github.com/GlassMarshmallow/glassmarshmallow/compare/v0.4.0...HEAD
[0.4.0]: https://github.com/GlassMarshmallow/glassmarshmallow/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/GlassMarshmallow/glassmarshmallow/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/GlassMarshmallow/glassmarshmallow/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/GlassMarshmallow/glassmarshmallow/compare/v0.1.4...v0.2.0
[0.1.4]: https://github.com/GlassMarshmallow/glassmarshmallow/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/GlassMarshmallow/glassmarshmallow/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/GlassMarshmallow/glassmarshmallow/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/GlassMarshmallow/glassmarshmallow/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/GlassMarshmallow/glassmarshmallow/releases/tag/v0.1.0
