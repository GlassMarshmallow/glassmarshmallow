import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { I18nService, LANGUAGES, Language } from '../../../core/i18n/i18n.service';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { ThemePreference, ThemeService } from '../../../core/services/theme.service';
import { MenuButton, MenuOption } from '../menu-button/menu-button';
import { SiteSearch } from '../site-search/site-search';

export const VERSION = '0.1';

/** Páginas que en la barra inferior del móvil van dentro de «Más»: la barra tiene 4 botones como mucho,
    contando «Más», como en My Book Box */
const MORE_PATHS = ['/tools', '/blog'];

interface NavItem {
  path: string;
  key: string;
  /** Texto de la barra inferior del móvil (si es distinto) */
  shortKey?: string;
  icon: string;
}

/**
 * Cabecera como la de Bootstrap: logo, Docs, Examples, Icons y Blog; buscador en el centro;
 * GitHub, versión, idioma y tema a la derecha. En móvil, barra inferior de pestañas.
 */
@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, MenuButton, SiteSearch],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly themeService = inject(ThemeService);
  private readonly i18n = inject(I18nService);
  private readonly router = inject(Router);

  readonly version = VERSION;
  readonly items: NavItem[] = [
    { path: '/docs', key: 'nav.docs', shortKey: 'nav.docsShort', icon: 'gmi-book' },
    { path: '/icons', key: 'nav.icons', icon: 'gmi-heart' },
    { path: '/tools', key: 'nav.tools', icon: 'gmi-palette' },
    { path: '/blog', key: 'nav.blog', icon: 'gmi-journal-text' },
  ];

  /** Móvil: en la barra van las primeras; el resto, en el panel «Más» (como My Book Box) */
  readonly tabItems = computed(() => this.items.filter((item) => !MORE_PATHS.includes(item.path)));
  readonly moreItems = computed(() => this.items.filter((item) => MORE_PATHS.includes(item.path)));
  readonly moreOpen = signal(false);
  readonly moreActive = signal(false);

  constructor() {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(inject(DestroyRef)),
      )
      .subscribe(() => {
        this.moreOpen.set(false);
        this.moreActive.set(MORE_PATHS.some((path) => this.router.url.startsWith(path)));
      });
  }

  toggleMore() {
    this.moreOpen.update((open) => !open);
  }

  closeMore() {
    this.moreOpen.set(false);
  }

  readonly language = this.i18n.language;
  readonly languageOptions = computed<MenuOption[]>(() => LANGUAGES.map((l) => ({ value: l.code, label: l.label })));
  readonly languageLabel = computed(() =>
    this.i18n.t('nav.language', { language: LANGUAGES.find((l) => l.code === this.language())!.label }),
  );

  readonly themePreference = this.themeService.preference;
  readonly themeOptions = computed<MenuOption[]>(() => {
    this.language();
    return [
      { value: 'light', label: this.i18n.t('nav.themeLight'), icon: 'gmi-sun' },
      { value: 'dark', label: this.i18n.t('nav.themeDark'), icon: 'gmi-moon' },
      { value: 'system', label: this.i18n.t('nav.themeAuto'), icon: 'gmi-circle-half' },
    ];
  });
  readonly themeIcon = computed(() => this.themeOptions().find((o) => o.value === this.themePreference())!.icon!);
  readonly themeLabel = computed(() =>
    this.i18n.t('nav.theme', { theme: this.themeOptions().find((o) => o.value === this.themePreference())!.label }),
  );

  readonly versionOptions = computed<MenuOption[]>(() => {
    this.language();
    return [{ value: VERSION, label: this.i18n.t('nav.versionCurrent', { version: VERSION }) }];
  });
  readonly versionLabel = computed(() => this.i18n.t('nav.version', { version: VERSION }));

  setLanguage(code: string) {
    this.i18n.setLanguage(code as Language);
  }

  setTheme(preference: string) {
    this.themeService.set(preference as ThemePreference);
  }
}
