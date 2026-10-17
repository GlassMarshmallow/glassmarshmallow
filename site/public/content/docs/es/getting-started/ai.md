# IA

GlassMarshmallow está preparado para que los asistentes de IA (Claude, ChatGPT, Copilot…) lo usen bien: tienen la documentación en un formato que entienden y guías paso a paso para las tareas más comunes.

## La documentación para la IA

| Archivo | Qué es |
| --- | --- |
| [`/llms.txt`](/llms.txt) | El índice: qué es GlassMarshmallow y la lista de todas las páginas con una frase de cada una |
| [`/llms-full.txt`](/llms-full.txt) | Toda la documentación (en inglés) en un solo archivo de texto |

Siguen el formato [llms.txt](https://llmstxt.org). Se generan solos a partir de esta documentación cada vez que se publica la web, así que siempre están al día.

Para usarlos, dale la dirección a tu asistente: «Lee https://…/llms-full.txt y hazme un formulario de contacto con GlassMarshmallow».

## Skills

Guías paso a paso que enseñan a un asistente a hacer tareas concretas con GlassMarshmallow. Están en la carpeta `skills/` del repositorio:

| Skill | Para |
| --- | --- |
| `install` | Añadir GlassMarshmallow a un proyecto: CSS, iconos, Montserrat, modo de color y scripts |
| `customize-colors` | Cambiar los colores en modo claro y oscuro sin perder el contraste |
| `create-component` | Añadir un componente nuevo al framework con sus reglas de diseño y accesibilidad |

Con Claude Code, copia la carpeta de la skill a `.claude/skills/` de tu proyecto y se usará sola cuando haga falta.

## AGENTS.md

El repositorio tiene un archivo `AGENTS.md` con las reglas para los agentes que trabajan en el propio framework: dónde está cada cosa, qué no se toca a mano, la accesibilidad que hay que cumplir y cómo se nombran los commits.

## Qué pedirle

- Que use **solo clases y variables de GlassMarshmallow** (`gm-…`, `--gm-…`) y sus iconos (`gmi`), sin inventar colores.
- Que revise el **contraste en modo claro y oscuro** y que todo se pueda usar con el teclado.
- Que siga las [guías de experiencia de usuario](/docs/guides/ux) y las [reglas de los formularios](/docs/forms/rules).
