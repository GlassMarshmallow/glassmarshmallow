import { Injectable, computed, effect, signal } from '@angular/core';
import { Dictionary, en } from './en';
import { es } from './es';

export type Language = 'en' | 'es';

/** Debe coincidir con la clave que lee el script de index.html antes de arrancar. */
const LANGUAGE_STORAGE_KEY = 'mallowglass.lang';
const DICTIONARIES: Record<Language, Dictionary> = { en, es };
export const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];

const readStoredLanguage = (): Language => {
  try {
    const value = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return value === 'es' ? 'es' : 'en';
  } catch {
    return 'en';
  }
};

/** Idioma de la web: inglés por defecto y español con el selector. Se recuerda en este dispositivo. */
@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly language = signal<Language>(readStoredLanguage());
  private readonly dictionary = computed(() => DICTIONARIES[this.language()]);

  constructor() {
    effect(() => {
      document.documentElement.lang = this.language();
    });
  }

  setLanguage(language: Language) {
    this.language.set(language);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      /* almacenamiento no disponible */
    }
  }

  /** Texto de la clave «sección.texto», con los {parámetros} sustituidos. */
  t(key: string, params: Record<string, string | number> = {}): string {
    const value = key.split('.').reduce<unknown>((node, part) => (node as Record<string, unknown>)?.[part], this.dictionary());
    if (typeof value !== 'string') return key;
    return value.replace(/\{(\w+)\}/g, (match, name: string) => (name in params ? String(params[name]) : match));
  }
}
