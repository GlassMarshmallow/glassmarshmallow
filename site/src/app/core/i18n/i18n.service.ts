import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';
import { Dictionary, en } from './en';
import { es } from './es';

export type Language = 'en' | 'es';

/**
 * Cada idioma es una compilación propia de la web, con sus direcciones: inglés en «/» y español en «/es/»
 * (así los buscadores encuentran las dos). La compilación española define GM_LANG = 'es' (angular.json).
 */
declare const GM_LANG: Language | undefined;
export const BUILD_LANGUAGE: Language = typeof GM_LANG !== 'undefined' && GM_LANG === 'es' ? 'es' : 'en';
/** Carpeta de cada idioma en la dirección */
export const LANGUAGE_BASE: Record<Language, string> = { en: '/', es: '/es/' };

const DICTIONARIES: Record<Language, Dictionary> = { en, es };
export const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];

/** Idioma de la web: el de la compilación (la dirección). El selector lleva a la misma página en el otro idioma. */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);
  readonly language = signal<Language>(BUILD_LANGUAGE);
  private readonly dictionary = computed(() => DICTIONARIES[this.language()]);

  constructor() {
    effect(() => {
      this.document.documentElement.lang = this.language();
    });
  }

  /** Lleva a la misma página en el otro idioma (es otra compilación: carga la página entera) */
  setLanguage(language: Language) {
    if (language === this.language()) return;
    const location = this.document.defaultView?.location;
    if (!location) return;
    const path = location.pathname.slice(LANGUAGE_BASE[this.language()].length);
    location.assign(`${LANGUAGE_BASE[language]}${path}${location.search}${location.hash}`);
  }

  /** Texto de la clave «sección.texto», con los {parámetros} sustituidos. */
  t(key: string, params: Record<string, string | number> = {}): string {
    const value = key.split('.').reduce<unknown>((node, part) => (node as Record<string, unknown>)?.[part], this.dictionary());
    if (typeof value !== 'string') return key;
    return value.replace(/\{(\w+)\}/g, (match, name: string) => (name in params ? String(params[name]) : match));
  }
}
