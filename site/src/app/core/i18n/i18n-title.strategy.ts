import { Injectable, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { I18nService } from './i18n.service';
import { SeoService } from '../seo/seo.service';
import { iconTitle } from '../../features/icons/data/icon-title';

/**
 * El título de cada ruta es una clave de traducción («titles.home»). Además pone la descripción de la página
 * (data.description, otra clave) y, en las herramientas (data.tool), los datos estructurados de aplicación web.
 */
@Injectable({ providedIn: 'root' })
export class I18nTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly i18n = inject(I18nService);
  private readonly seo = inject(SeoService);
  private key = 'titles.home';
  private data: Record<string, unknown> = {};
  private path = '';

  constructor() {
    super();
    effect(() => {
      this.i18n.language();
      this.apply();
    });
  }

  override updateTitle(snapshot: RouterStateSnapshot) {
    this.key = this.buildTitle(snapshot) ?? 'titles.home';
    let route: ActivatedRouteSnapshot = snapshot.root;
    while (route.firstChild) route = route.firstChild;
    this.data = route.data;
    this.path = snapshot.url.replace(/^\//, '').replace(/[?#].*$/, '');
    this.apply();
  }

  private apply() {
    const title = this.text();
    this.title.setTitle(title);
    const descriptionKey = (this.data['description'] as string | undefined) ?? 'seo.default';
    const description = this.key.startsWith('icon:')
      ? this.i18n.t('seo.icon', { name: iconTitle(this.key.slice(5)) })
      : this.i18n.t(descriptionKey);
    this.seo.update({
      title,
      description,
      path: this.path,
      jsonLd: this.data['tool']
        ? {
            '@type': 'WebApplication',
            name: this.i18n.t(`${this.data['tool']}.title`),
            description,
            applicationCategory: 'DesignApplication',
            operatingSystem: 'Any',
            isAccessibleForFree: true,
            inLanguage: this.i18n.language(),
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
            publisher: { '@type': 'Organization', name: 'GlassMarshmallow' },
            ...(this.seo.url(this.path) ? { url: this.seo.url(this.path) } : {}),
          }
        : this.path === ''
          ? { '@type': 'WebSite', name: 'GlassMarshmallow', description, inLanguage: this.i18n.language() }
          : null,
    });
  }

  /** Las páginas de la documentación solo tienen su nombre: se les añade « | GlassMarshmallow» */
  private text() {
    // Ficha de un icono: «icon:volume-up» → «Volume up icon | GlassMarshmallow»
    if (this.key.startsWith('icon:')) return this.i18n.t('seo.iconTitle', { name: iconTitle(this.key.slice(5)) });
    const title = this.i18n.t(this.key);
    return this.key.startsWith('docsNav.pages.') ? `${title} | GlassMarshmallow` : title;
  }
}
