import { InjectionToken, TransferState, inject, makeStateKey } from '@angular/core';

/**
 * Lee el Markdown de una página de la documentación. En el navegador, con fetch; al prerenderizar la web, del
 * disco (doc-source.server.ts). Lo leído al prerenderizar se guarda en la página (TransferState), así el
 * navegador lo enseña sin volver a pedirlo.
 */
export type DocReader = (lang: string, path: string) => Promise<string | null>;

export const DOC_READER = new InjectionToken<DocReader>('DOC_READER', {
  providedIn: 'root',
  factory: () => {
    const state = inject(TransferState);
    return async (lang, path) => {
      const key = makeStateKey<string | null>(`doc:${lang}/${path}`);
      if (state.hasKey(key)) {
        const saved = state.get(key, null);
        state.remove(key);
        return saved;
      }
      const response = await fetch(`content/docs/${lang}/${path}.md`);
      if (!response.ok) return null;
      const markdown = await response.text();
      // El servidor de desarrollo devuelve index.html si no existe el archivo: entonces no hay contenido
      return markdown.trimStart().startsWith('<!doctype') ? null : markdown;
    };
  },
});
