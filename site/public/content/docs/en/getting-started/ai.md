# AI

GlassMarshmallow is ready for AI assistants (Claude, ChatGPT, Copilot…) to use it well: they have the documentation in a format they understand and step-by-step guides for the most common tasks.

## Documentation for AI

| File | What it is |
| --- | --- |
| [`/llms.txt`](/llms.txt) | The index: what GlassMarshmallow is and the list of every page with one sentence each |
| [`/llms-full.txt`](/llms-full.txt) | All the documentation in a single text file |

They follow the [llms.txt](https://llmstxt.org) format. They are generated from this documentation every time the site is published, so they are always up to date.

To use them, give your assistant the address: “Read https://…/llms-full.txt and build me a contact form with GlassMarshmallow”.

## Skills

Step-by-step guides that teach an assistant to do specific tasks with GlassMarshmallow. They live in the repository's `skills/` folder:

| Skill | For |
| --- | --- |
| `install` | Add GlassMarshmallow to a project: CSS, icons, Montserrat, color mode and scripts |
| `customize-colors` | Change colors in light and dark mode without losing contrast |
| `create-component` | Add a new component to the framework with its design and accessibility rules |

With Claude Code, copy the skill folder into your project's `.claude/skills/` and it will be used when needed.

## AGENTS.md

The repository has an `AGENTS.md` file with the rules for agents working on the framework itself: where everything is, what must not be edited by hand, the accessibility to meet and how commits are named.

## What to ask for

- To use **only GlassMarshmallow classes and variables** (`gm-…`, `--gm-…`) and its icons (`gmi`), without inventing colors.
- To check **contrast in light and dark mode** and that everything works with the keyboard.
- To follow the [user experience guides](/docs/guides/ux) and the [form rules](/docs/forms/rules).
