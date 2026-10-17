import { Marked, Token, TokensList, Tokens } from 'marked';

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface RenderedDoc {
  title: string;
  lead: string;
  html: string;
  toc: TocItem[];
}

export interface RenderLabels {
  copy: string;
  /** Idioma de la página: en español, los enlaces internos («/docs/…») van a «/es/docs/…» */
  lang?: string;
}

/** Enlaces internos de la página en español: dentro de /es/, para que los buscadores recorran esa versión */
const localizeLinks = (html: string, lang?: string) =>
  lang && lang !== 'en' ? html.replace(/href="\/(?!\/)/g, `href="/${lang}/`) : html;

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** «Using npm» → «using-npm» (sin tildes) */
const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/<[^>]+>/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

let blockId = 0;

/**
 * Lo que se ve del código HTML: el contenido del <body> (o todo el fragmento), sin las etiquetas que no se
 * pintan (<head>, <link>, <meta>, <script>…). Vacío si no queda nada visible, como un <link> solo.
 */
function examplePreview(html: string): string {
  // Un <iframe> de ejemplo («src="..."») no se pinta: solo se enseña su código
  if (/<iframe/i.test(html)) return '';
  const body = /<body[^>]*>([\s\S]*)<\/body>/i.exec(html);
  return (body ? body[1] : html)
    .replace(/<!doctype[^>]*>/gi, '')
    .replace(/<head[\s\S]*?<\/head>/gi, '')
    .replace(/<(script|style|title)[\s\S]*?<\/\1>/gi, '')
    .replace(/<\/?(html|body)[^>]*>/gi, '')
    .replace(/<(link|meta)[^>]*>/gi, '')
    // La página ya tiene su <main>: en el ejemplo pasa a <div> para no repetirlo
    .replace(/<(\/?)main\b/gi, '<$1div')
    .trim();
}

/** Un bloque de código con su barra (lenguaje o pestañas) y el botón de copiar */
function codeBlock(blocks: { lang: string; tab?: string; text: string; codeOnly?: boolean }[], labels: RenderLabels): string {
  const id = `code-${blockId++}`;
  const tabs = blocks.length > 1 || !!blocks[0].tab;
  const bar = tabs
    ? `<div class="doc-code__tabs" role="tablist">${blocks
        .map(
          (b, i) =>
            `<button type="button" role="tab" id="${id}-tab-${i}" aria-controls="${id}-panel-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${escapeHtml(b.tab ?? b.lang)}</button>`,
        )
        .join('')}</div>`
    : `<span class="doc-code__lang">${escapeHtml(blocks[0].lang || 'code')}</span>`;
  const panels = blocks
    .map(
      (b, i) =>
        `<pre class="doc-code__pre" tabindex="0"${tabs ? ` role="tabpanel" id="${id}-panel-${i}" aria-labelledby="${id}-tab-${i}"${i === 0 ? '' : ' hidden'}` : ''}><code>${escapeHtml(b.text)}</code></pre>`,
    )
    .join('');
  // Código HTML: encima, el resultado (como los ejemplos de Bootstrap)
  const example = blocks[0].lang === 'html' && !blocks[0].codeOnly ? examplePreview(blocks[0].text) : '';
  const preview = example ? `<div class="doc-code__example">${example}</div>` : '';
  return `<div class="doc-code">${preview}<div class="doc-code__bar">${bar}<button type="button" class="doc-code__copy" data-copy><i class="gmi gmi-clipboard" aria-hidden="true"></i><span>${escapeHtml(labels.copy)}</span></button></div>${panels}</div>`;
}

/**
 * Convierte el Markdown de una página de la documentación.
 * - «# Título» y el primer párrafo son la cabecera de la página (título y entradilla).
 * - Bloques de código seguidos con «lenguaje:pestaña» (```sh:npm) forman un bloque con pestañas.
 * - Las citas («> …») son recuadros de nota.
 */
function decodeEntities(text: string): string {
  return text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&');
}

export function renderDoc(markdown: string, labels: RenderLabels): RenderedDoc {
  const marked = new Marked();
  const tokens = marked.lexer(markdown);
  let title = '';
  let lead = '';
  const toc: TocItem[] = [];
  const out: Token[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.type === 'heading' && token.depth === 1 && !title) {
      title = token.text;
      const next = tokens.slice(i + 1).find((t) => t.type !== 'space');
      if (next?.type === 'paragraph') {
        lead = marked.parseInline(next.text) as string;
        i = tokens.indexOf(next);
      }
      continue;
    }
    if (token.type === 'code') {
      const group: { lang: string; tab?: string; text: string; codeOnly?: boolean }[] = [];
      let j = i;
      while (j < tokens.length) {
        const t = tokens[j];
        if (t.type === 'space') {
          j++;
          continue;
        }
        if (t.type !== 'code') break;
        // «html-code»: HTML que solo se enseña como código, sin el resultado encima
        const [rawLang, tab] = ((t as Tokens.Code).lang ?? '').split(':');
        const codeOnly = rawLang.endsWith('-code');
        const lang = codeOnly ? rawLang.slice(0, -5) : rawLang;
        if (group.length && (!tab || !group[0].tab)) break;
        group.push({ lang, tab, text: (t as Tokens.Code).text, codeOnly });
        j++;
        if (!tab) break;
      }
      out.push({ type: 'html', raw: '', text: codeBlock(group, labels), block: true, pre: false } as Tokens.HTML);
      i = j - 1;
      continue;
    }
    out.push(token);
  }

  marked.use({
    renderer: {
      heading({ tokens: inline, depth }) {
        const text = this.parser.parseInline(inline);
        if (depth === 2 || depth === 3) {
          // Texto plano para el índice: sin etiquetas y con las entidades (&amp;…) ya convertidas,
          // porque Angular lo vuelve a escapar al mostrarlo.
          const plain = decodeEntities(text.replace(/<[^>]+>/g, ''));
          const id = slugify(plain);
          toc.push({ id, text: plain, level: depth });
          return `<h${depth} id="${id}">${text}</h${depth}>\n`;
        }
        return `<h${depth}>${text}</h${depth}>\n`;
      },
      blockquote({ tokens: inner }) {
        return `<div class="doc-callout">${this.parser.parse(inner)}</div>\n`;
      },
    },
  });

  // El parser necesita las referencias de enlaces del Markdown original
  const list = Object.assign(out, { links: tokens.links }) as TokensList;
  const html = localizeLinks(marked.parser(list) as string, labels.lang);
  return { title, lead: localizeLinks(lead, labels.lang), html, toc };
}
