# AGENTS.md

Instructions for AI coding agents working on the Mallowglass repository.

## Project

- `css/` is the source of the framework (plain CSS, no Sass). Every class and custom property uses the
  `mg-` prefix (`.mg-btn`, `--mg-accent`).
- `dist/` is generated with `npm run css`. Never edit it by hand.
- `site/` is the documentation website (Angular 21, standalone components, signals). It is in English and
  can be switched to Spanish; every visible text lives in `site/src/app/core/i18n`.
- Icons are a separate project: `mallowglass-icons`.

## Rules

- Accessibility: WCAG 2.2 AA in light and dark mode. Text 4.5:1, large text and controls 3:1. Focus is
  always visible. Check with axe-core (0 errors) and measure contrast over the real background pixels.
- Light and dark mode come from `data-theme` on `<html>`; every color is a token in `css/tokens.css`.
- Do not change colors, fonts, sizes or spacing without the designer's approval.
- Mobile (375 px) and desktop, with no horizontal scroll.

## Skills

Step-by-step guides for common tasks will live in `skills/<name>/SKILL.md`.
