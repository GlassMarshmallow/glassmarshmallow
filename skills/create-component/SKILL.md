---
name: glassmarshmallow-create-component
description: Add a new component to the GlassMarshmallow framework (CSS in css/components.css, optional script in js/, docs page in English and Spanish) following its naming, design and accessibility rules. Use when a design from a project is not in GlassMarshmallow yet.
---

# Create a GlassMarshmallow component

Every design used in a project that is not in GlassMarshmallow yet is added to the framework so all projects share it. Do not invent styles: take them from the project where the design comes from.

1. **Find the source.** Locate the design in the project (portfolio, My Book Box, My MTV Box…) and copy its values (sizes, colors, radius, shadows). Write in a comment where it comes from.

2. **CSS in `css/components.css`**, in its own section with a comment showing the markup:
   - classes with the `gm-` prefix and BEM: `.gm-name`, `.gm-name__part`, `.gm-name--variant`;
   - colors only from `--gm-` variables (light and dark); add new tokens to `css/tokens.css` in both modes if needed;
   - relative units (`rem`, `em`, `%`);
   - run `npm run css` to rebuild `dist/`.

3. **Accessibility (WCAG 2.2 AA, AAA whenever possible):**
   - text 7:1, borders/icons 3:1, in both modes; never color alone;
   - every pressable thing 44 px (use a `::after` hit area if it must look smaller);
   - visible focus; full keyboard use; correct HTML elements and ARIA;
   - icons next to text centered with the first line and a bit larger than the text;
   - more than 3 options or items go one below the other;
   - animations stop with `prefers-reduced-motion`.

4. **Optional script in `js/<name>.js`** (only if it needs behavior): no dependencies, `init<Name>(root)` and `init<Names>(scope)`, texts in Spanish or English from `<html lang>`, a `.d.ts` next to it. Without the script the component must still show.

5. **Docs page** in `site/public/content/docs/{en,es}/components/<name>.md`: live examples, classes, script, keyboard and accessibility. Register it in `docs-nav.ts` and add its title to `en.ts` and `es.ts`. Start the script in the docs page (`doc-page.ts`).

6. **Check** in the browser in light and dark mode, at 375 px and desktop, with axe (AA + AAA) and measuring contrast. Then commit with a semantic message: `feat(<name>): …`.
