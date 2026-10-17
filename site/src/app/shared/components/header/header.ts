import { ChangeDetectionStrategy, Component, computed, inject, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { I18nService, LANGUAGES, Language } from '../../../core/i18n/i18n.service';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { ThemePreference, ThemeService } from '../../../core/services/theme.service';
import { MenuButton, MenuOption } from '../menu-button/menu-button';
import { SearchDialog } from '../search-dialog/search-dialog';

export const VERSION = '0.1';

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
  imports: [RouterLink, RouterLinkActive, TranslatePipe, MenuButton, SearchDialog],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly themeService = inject(ThemeService);
  private readonly i18n = inject(I18nService);
  readonly search = viewChild.required(SearchDialog);

  readonly version = VERSION;
  readonly items: NavItem[] = [
    { path: '/docs', key: 'nav.docs', shortKey: 'nav.docsShort', icon: 'mgi-book' },
    { path: '/examples', key: 'nav.examples', icon: 'mgi-grid' },
    { path: '/icons', key: 'nav.icons', icon: 'mgi-heart' },
    { path: '/blog', key: 'nav.blog', icon: 'mgi-journal-text' },
  ];

  readonly language = this.i18n.language;
  readonly languageOptions = computed<MenuOption[]>(() => LANGUAGES.map((l) => ({ value: l.code, label: l.label })));
  readonly languageLabel = computed(() =>
    this.i18n.t('nav.language', { language: LANGUAGES.find((l) => l.code === this.language())!.label }),
  );

  readonly themePreference = this.themeService.preference;
  readonly themeOptions = computed<MenuOption[]>(() => {
    this.language();
    return [
      { value: 'light', label: this.i18n.t('nav.themeLight'), icon: 'mgi-sun' },
      { value: 'dark', label: this.i18n.t('nav.themeDark'), icon: 'mgi-moon' },
      { value: 'system', label: this.i18n.t('nav.themeAuto'), icon: 'mgi-circle-half' },
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
