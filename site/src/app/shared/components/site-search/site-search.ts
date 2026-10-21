import { ChangeDetectionStrategy, Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { I18nService } from '../../../core/i18n/i18n.service';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { DOCS_SECTIONS, pageTitleKey } from '../../../features/docs/data/docs-nav';
import { TOOLS } from '../../../features/tools/data/tools';

interface SearchItem {
  /** Clave del título de la página */
  key: string;
  /** Clave de la sección a la que pertenece */
  section: string;
  path: string;
}

/** Páginas que se pueden buscar: las de la web y todas las de la documentación */
const PAGES: SearchItem[] = [
  { key: 'nav.home', section: 'nav.home', path: '/' },
  ...DOCS_SECTIONS.flatMap((section) =>
    section.pages.map((page) => ({ key: pageTitleKey(page.path), section: `docsNav.sections.${section.id}`, path: `/docs/${page.path}` })),
  ),
  { key: 'nav.examples', section: 'nav.examples', path: '/examples' },
  { key: 'icons.title', section: 'nav.icons', path: '/icons' },
  { key: 'tools.title', section: 'nav.tools', path: '/tools' },
  ...TOOLS.map((tool) => ({ key: `${tool.i18n}.title`, section: 'nav.tools', path: `/tools/${tool.id}` })),
  { key: 'nav.blog', section: 'nav.blog', path: '/blog' },
];

const MAX_RESULTS = 8;

/** Sin mayúsculas ni tildes, para que «generador» encuentre «Generador» y «icono» encuentre «Iconos». */
const normalize = (text: string) => text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

/**
 * Buscador de la cabecera: un campo de texto y, debajo, la lista de páginas que coinciden (patrón «combobox»
 * de WAI-ARIA: las flechas recorren la lista, Intro abre la página y Escape cierra). En móvil, la lupa
 * muestra el campo debajo de la barra.
 */
@Component({
  selector: 'app-site-search',
  imports: [TranslatePipe],
  templateUrl: './site-search.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'gm-d-contents', '(document:pointerdown)': 'onOutside($event)' },
})
export class SiteSearch {
  private readonly i18n = inject(I18nService);
  private readonly router = inject(Router);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly input = viewChild.required<ElementRef<HTMLInputElement>>('input');

  readonly query = signal('');
  /** La lista de resultados está abierta */
  readonly listOpen = signal(false);
  /** Móvil: el campo está a la vista */
  readonly mobileOpen = signal(false);
  /** Resultado marcado con las flechas (-1: ninguno) */
  readonly active = signal(-1);

  readonly results = computed(() => {
    this.i18n.language();
    const q = normalize(this.query().trim());
    if (!q) return [];
    return PAGES.map((page) => ({ ...page, title: this.i18n.t(page.key), sectionTitle: this.i18n.t(page.section) }))
      .filter((page) => normalize(page.title).includes(q) || normalize(page.sectionTitle).includes(q))
      .slice(0, MAX_RESULTS);
  });
  readonly expanded = computed(() => this.listOpen() && this.query().trim() !== '');

  onInput(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
    this.active.set(-1);
    this.listOpen.set(true);
  }

  onKeydown(event: KeyboardEvent) {
    const count = this.results().length;
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!count) return;
      this.listOpen.set(true);
      const step = event.key === 'ArrowDown' ? 1 : -1;
      this.active.update((i) => (i + step + count) % count);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const result = this.results()[Math.max(this.active(), 0)];
      if (result) this.go(result.path);
    } else if (event.key === 'Escape') {
      if (this.expanded()) this.listOpen.set(false);
      else if (this.query()) this.clear();
      else this.closeMobile();
    }
  }

  go(path: string) {
    this.router.navigateByUrl(path);
    this.clear();
    this.mobileOpen.set(false);
  }

  clear() {
    this.query.set('');
    this.active.set(-1);
    this.listOpen.set(false);
  }

  toggleMobile() {
    const open = !this.mobileOpen();
    this.mobileOpen.set(open);
    if (open) setTimeout(() => this.input().nativeElement.focus());
    else this.clear();
  }

  closeMobile() {
    if (!this.mobileOpen()) return;
    this.mobileOpen.set(false);
    this.clear();
  }

  /** Un clic fuera del buscador cierra la lista */
  onOutside(event: Event) {
    if (!this.host.nativeElement.contains(event.target as Node)) this.listOpen.set(false);
  }
}
