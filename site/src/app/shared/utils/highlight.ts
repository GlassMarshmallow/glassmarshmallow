import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { createHighlighterCoreSync } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import css from 'shiki/langs/css.mjs';
import html from 'shiki/langs/html.mjs';
import javascript from 'shiki/langs/javascript.mjs';
import shellscript from 'shiki/langs/shellscript.mjs';
import darkPlus from 'shiki/themes/dark-plus.mjs';
import lightPlus from 'shiki/themes/light-plus.mjs';

// Colores del código como en Visual Studio Code: tema «Light+» con la web en claro y «Dark+» en oscuro.
// Cada trozo lleva sus dos colores (--code-light y --code-dark) y el CSS elige uno según el modo (styles.css).
// Solo cambia el color de las letras: el bloque, su fondo y su letra son los de siempre.

const highlighter = createHighlighterCoreSync({
  themes: [lightPlus, darkPlus],
  langs: [html, css, javascript, shellscript],
  engine: createJavaScriptRegexEngine(),
});

const LANGS: Record<string, string> = { html: 'html', svg: 'html', css: 'css', js: 'javascript', javascript: 'javascript', sh: 'shellscript', bash: 'shellscript' };

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** El código con sus colores, listo para meter dentro de <code>. Si el lenguaje no está, el texto tal cual */
export function highlight(code: string, lang: string): string {
  const language = LANGS[lang.toLowerCase()];
  if (!language) return escapeHtml(code);
  // El CSS de los generadores son solo propiedades, sin selector ni llaves: se colorea dentro de una regla de mentira
  // («a{ … }») y luego se quitan su primera y su última línea
  const bare = language === 'css' && !code.includes('{');
  const { tokens: lines } = highlighter.codeToTokens(bare ? `a{\n${code}\n}` : code, {
    lang: language,
    themes: { light: 'light-plus', dark: 'dark-plus' },
    defaultColor: false,
  });
  const tokens = bare ? lines.slice(1, -1) : lines;
  return tokens
    .map((line) =>
      line
        .map((token) => {
          const style = token.htmlStyle ?? {};
          const light = style['--shiki-light'];
          const dark = style['--shiki-dark'];
          return light || dark
            ? `<span style="--code-light:${light};--code-dark:${dark}">${escapeHtml(token.content)}</span>`
            : escapeHtml(token.content);
        })
        .join(''),
    )
    .join('\n');
}

/** <code [innerHTML]="css() | highlight: 'css'"></code>. El texto ya va escapado, así que se marca como seguro */
@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  private readonly sanitizer = inject(DomSanitizer);

  transform(code: string, lang: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(highlight(code, lang));
  }
}
