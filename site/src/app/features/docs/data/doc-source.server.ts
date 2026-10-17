import { TransferState, inject, makeStateKey } from '@angular/core';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { DOC_READER, DocReader } from './doc-source';

/** Al prerenderizar: el Markdown sale del disco (public/content/docs) y se guarda en la página para el navegador */
export const provideServerDocReader = () => ({
  provide: DOC_READER,
  useFactory: (): DocReader => {
    const state = inject(TransferState);
    return async (lang, path) => {
      let markdown: string | null = null;
      try {
        markdown = await readFile(join(process.cwd(), 'public/content/docs', lang, `${path}.md`), 'utf8');
      } catch {
        markdown = null;
      }
      state.set(makeStateKey<string | null>(`doc:${lang}/${path}`), markdown);
      return markdown;
    };
  },
});
