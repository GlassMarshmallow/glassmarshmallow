import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SITE } from '../config/site';
import { BUILD_LANGUAGE, LANGUAGE_BASE, LANGUAGES } from '../i18n/i18n.service';

/** Datos de una página para los buscadores y las vistas previas al compartir */
export interface PageSeo {
  title: string;
  description: string;
  /** Ruta de la página sin el idioma («tools/gradient-generator»), para la dirección canónica y la de cada idioma */
  path: string;
  /** Datos estructurados (schema.org) de la página, si los tiene */
  jsonLd?: Record<string, unknown> | null;
}

/**
 * Pone en <head> la descripción, las etiquetas Open Graph y Twitter y los datos estructurados de cada página.
 * La dirección canónica y la de cada idioma (hreflang) necesitan el dominio: salen cuando SITE.url no está vacío.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update(page: PageSeo) {
    const description = page.description.replace(/\s+/g, ' ').trim();
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'GlassMarshmallow' });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:locale', content: BUILD_LANGUAGE === 'es' ? 'es_ES' : 'en_US' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.links(page.path);
    this.structuredData(page.jsonLd ?? null);
  }

  /** Cambia solo la descripción (las páginas de la documentación la sacan de su primer párrafo al cargar) */
  setDescription(description: string) {
    const text = description.replace(/\s+/g, ' ').trim();
    this.meta.updateTag({ name: 'description', content: text });
    this.meta.updateTag({ property: 'og:description', content: text });
    this.meta.updateTag({ name: 'twitter:description', content: text });
  }

  /** Dirección completa de una página en un idioma, con «/» al final como la sirve el servidor (vacía sin dominio) */
  url(path: string, lang = BUILD_LANGUAGE) {
    const domain: string = SITE.url;
    return domain ? `${domain.replace(/\/$/, '')}${LANGUAGE_BASE[lang]}${path}${path ? '/' : ''}` : '';
  }

  private links(path: string) {
    const head = this.document.head;
    head.querySelectorAll('link[data-seo]').forEach((link) => link.remove());
    if (!this.url(path)) return;
    const add = (rel: string, href: string, hreflang?: string) => {
      const link = this.document.createElement('link');
      link.setAttribute('rel', rel);
      link.setAttribute('href', href);
      if (hreflang) link.setAttribute('hreflang', hreflang);
      link.setAttribute('data-seo', '');
      head.appendChild(link);
    };
    add('canonical', this.url(path));
    LANGUAGES.forEach(({ code }) => add('alternate', this.url(path, code), code));
    add('alternate', this.url(path, 'en'), 'x-default');
    this.meta.updateTag({ property: 'og:url', content: this.url(path) });
  }

  private structuredData(data: Record<string, unknown> | null) {
    this.document.head.querySelector('script[data-seo]')?.remove();
    if (!data) return;
    const script = this.document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-seo', '');
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', ...data });
    this.document.head.appendChild(script);
  }
}
