import { InjectionToken, TransferState, inject, makeStateKey } from '@angular/core';

/**
 * Lee el Markdown de una página de la documentación. En el navegador, con fetch; al prerenderizar la web, del
 * disco (doc-source.server.ts). Lo leído al prerenderizar se guarda en la página (TransferState), así el
 * navegador lo enseña sin volver a pedirlo.
 * En el navegador, cada página se pide una sola vez: lo pedido se guarda en memoria, y el menú lo pide antes del clic
 * (al pasar el ratón, enfocar o tocar el enlace), así que al pulsar el texto ya está y aparece al momento.
 */
export type DocReader = (lang: string, path: string) => Promise<string | null>;

export const DOC_READER = new InjectionToken<DocReader>('DOC_READER', {
  providedIn: 'root',
  factory: () => {
    const state = inject(TransferState);
    const cache = new Map<string, Promise<string | null>>();
    const load = async (lang: string, path: string) => {
      const response = await fetch(`content/docs/${lang}/${path}.md`);
      if (!response.ok) return null;
      const markdown = await response.text();
      // El servidor de desarrollo devuelve index.html si no existe el archivo: entonces no hay contenido
      return markdown.trimStart().startsWith('<!doctype') ? null : markdown;
    };
    return (lang, path) => {
      const key = makeStateKey<string | null>(`doc:${lang}/${path}`);
      if (state.hasKey(key)) {
        const saved = state.get(key, null);
        state.remove(key);
        cache.set(`${lang}/${path}`, Promise.resolve(saved));
        return Promise.resolve(saved);
      }
      const id = `${lang}/${path}`;
      let request = cache.get(id);
      if (!request) {
        request = load(lang, path);
        cache.set(id, request);
        // Si falla (sin conexión, por ejemplo), se vuelve a intentar la próxima vez
        request.then((markdown) => markdown ?? cache.delete(id), () => cache.delete(id));
      }
      return request;
    };
  },
});
