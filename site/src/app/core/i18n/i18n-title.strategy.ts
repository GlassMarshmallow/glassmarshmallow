import { Injectable, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { I18nService } from './i18n.service';

/** El título de cada ruta es una clave de traducción («titles.home»); cambia también al cambiar de idioma. */
@Injectable({ providedIn: 'root' })
export class I18nTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly i18n = inject(I18nService);
  private key = 'titles.home';

  constructor() {
    super();
    effect(() => {
      this.i18n.language();
      this.title.setTitle(this.i18n.t(this.key));
    });
  }

  override updateTitle(snapshot: RouterStateSnapshot) {
    this.key = this.buildTitle(snapshot) ?? 'titles.home';
    this.title.setTitle(this.i18n.t(this.key));
  }
}
