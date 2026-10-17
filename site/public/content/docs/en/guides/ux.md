# User experience

Rules so that what you build with GlassMarshmallow is easy to understand and use. Some are ours (we decided them while designing the framework) and others come from reference guides (GOV.UK, W3C, Nielsen Norman Group). For forms, see the [form rules](/docs/forms/rules) too.

## Options to choose from

- **2 or 3 short options, in a row**, with the [segmented control](/docs/forms/segmented). **More than 3 or long labels, one below the other** (`--stack`).
- The chosen option shows by more than color: the white pill and the shadow.
- If there is a recommended or most common option, select it from the start.

## Lists

- **With more than 3 items, use a list**, one below the other, not run together in a sentence (“Figma, Photoshop, Illustrator and…”). They are easy to scan and screen readers say how many there are.
- Inside the accordion, with [`.gm-accordion__list`](/docs/components/accordion).

## Mobile navigation

- The [tab bar](/docs/components/tabbar) has **4 buttons at most, counting “More”**. What does not fit goes in the “More” panel.
- Each button with an icon and one word.
- The current page is marked in the bar (`aria-current="page"`).

## Icons

- **Only GlassMarshmallow icons** (`gmi`): no emojis and no icons from other sets mixed in.
- Next to text, **centered with its first line and a bit larger than the letters** (for example, 1.25 rem with 0.92 rem text). Checked by measuring, not by eye.
- An icon on its own (no text) has a name for screen readers (`aria-label` or hidden text). With text, the icon is decorative (`aria-hidden="true"`).

## Buttons and actions

- **One main action per area**: the black (white at night) or accent button (pink by day, blue at night). The rest, secondary or text buttons.
- The button text says **what happens when pressed** (“Save changes”, “Watch the next episode”), not “OK”.
- Actions that cannot be undone (delete, pay) ask for confirmation and say what will be lost.
- Everything that can be pressed is at least **44 px** (WCAG 2.5.5).

## Knowing what is happening

- **While loading**, show that work is happening: [progress bar](/docs/components/progress), spinning icon or placeholders with `gm-animate-shimmer`. With text (“Loading the library…”).
- **When done**, confirm what happened with an [alert](/docs/components/alert) (“Changes saved”), announced to screen readers (`role="status"`).
- **With no content**, explain why the screen is empty and what to do (“You have no books yet. Add the first one”).
- **If something fails**, say what happened and how to fix it, without blaming anyone.

## Showing and hiding

- Do not hide in an [accordion](/docs/components/accordion), a [carousel](/docs/components/carousel) or a tab what everyone needs: use them for what only some people want.
- On phones you can rearrange, but not remove: phone users must be able to do the same as on desktop.

## Motion

- [Animations](/docs/utilities/animations) are short and have a reason: something enters, leaves or changes.
- Everything stops if the person asks for **reduced motion** in their system (the framework already does this).
- Nothing moves on its own for more than 5 seconds without a way to stop it, like the autoplaying carousel (which has pause).

## Colors and modes

- **Light and dark with the same care**: everything is checked in both modes.
- **Never color alone** to convey information: add text or an icon (an error in coral also says it is an error).
- Text of **7:1** or more (AAA) whenever possible; the minimum is 4.5:1. Borders and icons that must be seen, 3:1.

## Consistency

- The same thing has the same name and works the same way across the site: if a button is “Save” on one page, it is not “Apply” on another.
- Use the framework components before making a new one; if a new one is needed, it is added to GlassMarshmallow so it is available in every project.
