import { computed, DestroyRef, effect, inject, Injectable, signal } from '@angular/core';

export type ThemePreference = 'system' | 'light' | 'dark';
export type Theme = 'light' | 'dark';

/** Debe coincidir con la clave que lee el script de index.html antes de arrancar. */
const THEME_STORAGE_KEY = 'glassmarshmallow.theme';
const THEME_COLORS: Record<Theme, string> = { light: '#f5f5f7', dark: '#000000' };

const readStoredPreference = (): ThemePreference => {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : 'system';
  } catch {
    return 'system';
  }
};

/**
 * Tema claro u oscuro. Por defecto sigue al sistema; el usuario puede fijarlo y se recuerda en este dispositivo.
 * Pone en <html> el tema ya resuelto (data-theme="light" | "dark"), del que cuelgan las variables del framework.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly preference = signal<ThemePreference>(readStoredPreference());
  /** No existe fuera del navegador (por ejemplo, en las pruebas): entonces el sistema cuenta como claro. */
  private readonly media = typeof matchMedia === 'function' ? matchMedia('(prefers-color-scheme: dark)') : undefined;
  private readonly systemDark = signal(this.media?.matches ?? false);
  readonly theme = computed<Theme>(() => {
    const preference = this.preference();
    return preference === 'system' ? (this.systemDark() ? 'dark' : 'light') : preference;
  });

  constructor() {
    const onSystemChange = (event: MediaQueryListEvent) => this.systemDark.set(event.matches);
    this.media?.addEventListener('change', onSystemChange);
    inject(DestroyRef).onDestroy(() => this.media?.removeEventListener('change', onSystemChange));

    effect(() => {
      const theme = this.theme();
      document.documentElement.dataset['theme'] = theme;
      // La barra del navegador en móvil sigue al tema elegido
      document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => meta.setAttribute('content', THEME_COLORS[theme]));
    });
  }

  /** Claro, oscuro o automático (sigue al sistema). Se recuerda en este dispositivo. */
  set(preference: ThemePreference) {
    this.preference.set(preference);
    try {
      if (preference === 'system') localStorage.removeItem(THEME_STORAGE_KEY);
      else localStorage.setItem(THEME_STORAGE_KEY, preference);
    } catch {
      /* almacenamiento no disponible */
    }
  }

  /** Alterna entre claro y oscuro. */
  toggle() {
    this.set(this.theme() === 'dark' ? 'light' : 'dark');
  }
}
