# All the rules (WCAG 2.2)

The 86 success criteria of WCAG 2.2, at levels A, AA and AAA, explained in plain words. Check this list every time you add something new to the framework, so that it meets them from the start.

> **Levels.** A is the minimum, AA is what the law asks for (and what GlassMarshmallow promises), and AAA is the most demanding. Criterion 4.1.1 (Parsing) was removed in WCAG 2.2.


## 1. Perceivable

| Criterion | Level | What it asks | State |
| --- | --- | --- | --- |
| **1.1.1** Non-text content | A | Images and controls without text have a text alternative. | Your content |
| **1.2.1** Audio-only and video-only (prerecorded) | A | A recorded audio has a transcript; a video without sound has a description or transcript. | Not applicable |
| **1.2.2** Captions (prerecorded) | A | Recorded videos with sound have captions. | Not applicable |
| **1.2.3** Audio description or media alternative (prerecorded) | A | What is only seen in a video is explained in audio or in text. | Not applicable |
| **1.2.4** Captions (live) | AA | Live videos have captions. | Not applicable |
| **1.2.5** Audio description (prerecorded) | AA | Recorded videos have an audio description of what is only seen. | Not applicable |
| **1.2.6** Sign language (prerecorded) | AAA | Recorded videos have sign language interpretation. | Not applicable |
| **1.2.7** Extended audio description (prerecorded) | AAA | The video pauses when there is no gap for the audio description. | Not applicable |
| **1.2.8** Media alternative (prerecorded) | AAA | Recorded videos have a full text version. | Not applicable |
| **1.2.9** Audio-only (live) | AAA | Live audio has a text alternative. | Not applicable |
| **1.3.1** Info and relationships | A | The structure (headings, lists, tables, labels, regions) is in the HTML, not only in the look. | Meets |
| **1.3.2** Meaningful sequence | A | The reading order of the HTML makes sense. | Meets |
| **1.3.3** Sensory characteristics | A | Instructions don’t depend only on shape, size, position or sound («the round button on the right»). | Your content |
| **1.3.4** Orientation | AA | The page works in portrait and landscape. | Meets |
| **1.3.5** Identify input purpose | AA | Fields about the person use `autocomplete`. | Your content |
| **1.3.6** Identify purpose | AAA | The purpose of regions, icons and controls can be read by programs. | Meets |
| **1.4.1** Use of color | A | Color is never the only way to give information. | Meets |
| **1.4.2** Audio control | A | Audio that plays by itself for more than 3 seconds can be stopped. | Not applicable |
| **1.4.3** Contrast (minimum) | AA | Text 4.5:1; large text 3:1. | Meets |
| **1.4.4** Resize text | AA | The page works with the text at 200 %. | Meets |
| **1.4.5** Images of text | AA | Text is real text, not an image (except logos). | Your content |
| **1.4.6** Contrast (enhanced) | AAA | Text 7:1; large text 4.5:1. | Meets |
| **1.4.7** Low or no background audio | AAA | Speech in audio has little or no background sound. | Not applicable |
| **1.4.8** Visual presentation | AAA | Text blocks: lines of 80 characters at most, not justified, line height 1.5, user-chosen colors. | Meets |
| **1.4.9** Images of text (no exception) | AAA | No images of text except logos. | Your content |
| **1.4.10** Reflow | AA | At 320 px everything can be read without scrolling sideways. | Meets |
| **1.4.11** Non-text contrast | AA | Borders of controls, focus and parts of charts: 3:1. | Meets |
| **1.4.12** Text spacing | AA | It still works with more space between lines, letters, words and paragraphs. | Meets |
| **1.4.13** Content on hover or focus | AA | Tooltips can be closed with Escape, can be hovered and don’t vanish by themselves. | Meets |

## 2. Operable

| Criterion | Level | What it asks | State |
| --- | --- | --- | --- |
| **2.1.1** Keyboard | A | Everything works with the keyboard. | Meets |
| **2.1.2** No keyboard trap | A | You can always leave a component with the keyboard. | Meets |
| **2.1.3** Keyboard (no exception) | AAA | Absolutely everything works with the keyboard, with no exception. | Meets |
| **2.1.4** Character key shortcuts | A | Shortcuts of a single letter can be turned off or changed. | Meets |
| **2.2.1** Timing adjustable | A | Time limits can be turned off, adjusted or extended. | Your content |
| **2.2.2** Pause, stop, hide | A | What moves, blinks or updates by itself can be paused. | Meets |
| **2.2.3** No timing | AAA | There are no time limits. | Your content |
| **2.2.4** Interruptions | AAA | Interruptions (alerts, updates) can be postponed. | Your content |
| **2.2.5** Re-authenticating | AAA | If the session expires, no data is lost when you log in again. | Your content |
| **2.2.6** Timeouts | AAA | You are warned of how long you can be inactive before losing data. | Your content |
| **2.3.1** Three flashes or below threshold | A | Nothing flashes more than three times per second. | Meets |
| **2.3.2** Three flashes | AAA | Nothing flashes more than three times per second, of any size. | Meets |
| **2.3.3** Animation from interactions | AAA | Animations caused by the user can be turned off («reduce motion»). | Meets |
| **2.4.1** Bypass blocks | A | A way to skip repeated blocks (skip link, regions). | Meets |
| **2.4.2** Page titled | A | Each page has a title that says what it is. | Meets |
| **2.4.3** Focus order | A | The focus moves in a logical order. | Meets |
| **2.4.4** Link purpose (in context) | A | Each link says where it goes, with its text or the sentence around it. | Your content |
| **2.4.5** Multiple ways | AA | There is more than one way to find a page (menu, search, links). | Meets |
| **2.4.6** Headings and labels | AA | Headings and labels describe their content. | Your content |
| **2.4.7** Focus visible | AA | The keyboard focus is always visible. | Meets |
| **2.4.8** Location | AAA | You can tell where you are in the site (current page in the menu, breadcrumbs). | Meets |
| **2.4.9** Link purpose (link only) | AAA | The text of the link alone says where it goes. | Your content |
| **2.4.10** Section headings | AAA | Each section of content has a heading. | Your content |
| **2.4.11** Focus not obscured (minimum) | AA | The focused element is not completely hidden by fixed bars. | Meets |
| **2.4.12** Focus not obscured (enhanced) | AAA | No part of the focused element is hidden. | Meets |
| **2.4.13** Focus appearance | AAA | The focus outline is at least 2 px thick and has 3:1 contrast with and without focus. | Meets |
| **2.5.1** Pointer gestures | A | What needs gestures with several fingers or a path also works with a single tap. | Meets |
| **2.5.2** Pointer cancellation | A | Actions happen when you release, so you can cancel by moving away. | Meets |
| **2.5.3** Label in name | A | The accessible name contains the visible text. | Meets |
| **2.5.4** Motion actuation | A | What works by shaking or tilting the device also works with a button. | Not applicable |
| **2.5.5** Target size (enhanced) | AAA | Everything you press measures at least 44 × 44 px. | Meets |
| **2.5.6** Concurrent input mechanisms | AAA | You can use mouse, keyboard and touch at the same time. | Meets |
| **2.5.7** Dragging movements | AA | What is done by dragging can also be done without dragging. | Meets |
| **2.5.8** Target size (minimum) | AA | Everything you press measures at least 24 × 24 px. | Meets |

## 3. Understandable

| Criterion | Level | What it asks | State |
| --- | --- | --- | --- |
| **3.1.1** Language of page | A | The page says its language with `lang`. | Your content |
| **3.1.2** Language of parts | AA | Parts in another language say it with `lang`. | Your content |
| **3.1.3** Unusual words | AAA | Unusual words and jargon are explained. | Your content |
| **3.1.4** Abbreviations | AAA | Abbreviations are explained (for example with `<abbr>`). | Your content |
| **3.1.5** Reading level | AAA | Difficult texts have a simpler version. | Your content |
| **3.1.6** Pronunciation | AAA | When the pronunciation changes the meaning, it is explained. | Your content |
| **3.2.1** On focus | A | Receiving the focus does not change the page or the context. | Meets |
| **3.2.2** On input | A | Changing a field does not change the context without warning. | Meets |
| **3.2.3** Consistent navigation | AA | Menus are in the same place and order on every page. | Meets |
| **3.2.4** Consistent identification | AA | The same function has the same name and icon everywhere. | Meets |
| **3.2.5** Change on request | AAA | Big changes (new window, new page) only happen when the user asks. | Meets |
| **3.2.6** Consistent help | A | Help (contact, chat, FAQ) is in the same place on every page. | Your content |
| **3.3.1** Error identification | A | Errors are shown in text and say which field. | Meets |
| **3.3.2** Labels or instructions | A | Fields have labels, and instructions when needed. | Meets |
| **3.3.3** Error suggestion | AA | The error message says how to fix it. | Your content |
| **3.3.4** Error prevention (legal, financial, data) | AA | Important sends can be reviewed, corrected or undone. | Your content |
| **3.3.5** Help | AAA | There is help for filling in forms. | Your content |
| **3.3.6** Error prevention (all) | AAA | Every send can be reviewed, corrected or undone. | Your content |
| **3.3.7** Redundant entry | A | You don’t have to type again what you already gave in the same process. | Your content |
| **3.3.8** Accessible authentication (minimum) | AA | Logging in does not ask you to remember, copy or solve anything (password managers and paste work). | Your content |
| **3.3.9** Accessible authentication (enhanced) | AAA | No image recognition either («select the traffic lights»). | Your content |

## 4. Robust

| Criterion | Level | What it asks | State |
| --- | --- | --- | --- |
| **4.1.2** Name, role, value | A | Every control has a name, a role and a state that screen readers can read. | Meets |
| **4.1.3** Status messages | AA | Messages that appear without moving the focus are announced. | Meets |

The official text, in English: [WCAG 2.2](https://www.w3.org/TR/WCAG22/). In Spanish: [the UNE-EN 301549 standard](https://www.une.org) and the guides of the [Observatorio de Accesibilidad](https://administracionelectronica.gob.es/pae_Home/pae_Estrategias/pae_Accesibilidad.html).
