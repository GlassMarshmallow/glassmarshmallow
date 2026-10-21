# Security policy

## Supported versions

Only the latest published version of GlassMarshmallow gets security fixes. While the project is in 0.x, fixes go
into a new patch or minor version; there are no backports.

| Version | Supported |
| --- | --- |
| 0.2.x | Yes |
| < 0.2 | No |

## Reporting a vulnerability

Please **do not open a public issue** for a security problem. Report it privately on GitHub instead:
**Security → Report a vulnerability** in this repository.

Include what is affected (the CSS, a script in `js/`, the `glassmarshmallow` command or the website), how to
reproduce it and what an attacker could do. You will get an answer as soon as possible, and the fix will be listed
in [CHANGELOG.md](CHANGELOG.md).

## Scope

- **Scripts (`js/`).** They insert their own texts (labels, translations passed in `options.texts`) escaped, never
  as HTML. Report anything that lets text from a page or an option run as code.
- **`npx glassmarshmallow build`.** It only reads files and writes one CSS file. Values with `; { } \` are rejected
  so a class cannot break out of its rule. Report any class name that produces CSS outside its own rule.
- **The CSS.** Plain CSS cannot run code, but report anything that loads content from another site.
