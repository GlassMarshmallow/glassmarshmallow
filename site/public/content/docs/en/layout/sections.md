# Sections

Each part of a home page (About me, Skills, Contact…) is a section: some space above and below, the title centered and the text below it, in a narrow container so lines are not too long. As in the portfolio template.

## Example

```html
<section class="gm-section" style="padding-block: 2.5rem">
  <div class="gm-container gm-container--narrow">
    <h2 class="gm-section__title">About me</h2>
    <p class="gm-section__text">Hi, I am <strong>Lucía Martín</strong> and I am a web developer. I like working on both sides of an application: what you see and what is behind it.</p>
    <p class="gm-section__text">I love taking part in projects from the idea until they are up and running.</p>
  </div>
</section>
```

## Where each thing goes

| Piece | Class | How it looks |
| --- | --- | --- |
| The section | `.gm-section` | 6 rem above and below (3.5 rem on phones) |
| The width | `.gm-container .gm-container--narrow` | Centered, 960 px at most; text, 80 characters per line at most |
| The title | `.gm-section__title` | Centered, 2 rem (1.7 rem on phones), with 2 rem below |
| The text | `.gm-section__text` | In a centered column of 44 rem at most, left-aligned, 1.1 rem with 1.7 line height, in gray; highlighted words (`<strong>`) in the text color |

## With another piece below

Any component can go after the title, for example an [accordion](/docs/components/accordion):

```html
<section class="gm-section" style="padding-block: 2.5rem">
  <div class="gm-container gm-container--narrow">
    <h2 class="gm-section__title">Skills</h2>
    <div class="gm-accordion">
      <details class="gm-accordion__item" name="section-example">
        <summary class="gm-accordion__summary">
          <span class="gm-accordion__icon" aria-hidden="true"><i class="gmi gmi-palette"></i></span>
          <span class="gm-accordion__text"><span class="gm-accordion__title">Design</span><span class="gm-accordion__meta">3 tools</span></span>
          <i class="gmi gmi-chevron-down gm-accordion__chevron" aria-hidden="true"></i>
        </summary>
        <div class="gm-accordion__content"><ul class="gm-accordion__list"><li>Figma</li><li>Photoshop</li><li>Illustrator</li></ul></div>
      </details>
    </div>
  </div>
</section>
```

## Accessibility

- Each section starts with its title (`h2`) and titles go in order, without skipping levels.
- Text is left-aligned: centered, long paragraphs are hard to read (WCAG 1.4.8).
- Lines of 80 characters at most and 1.7 line height (WCAG 1.4.8 and 1.4.12).
- The gray text reaches 7:1 on the background (AAA).
