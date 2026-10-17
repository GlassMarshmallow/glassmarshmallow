import { ChangeDetectionStrategy, Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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

/** Sin mayúsculas ni tildes, para que «generador» encuentre «Generador» y «icono» encuentre «Iconos». */
const normalize = (text: string) => text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

/** Buscador de la documentación (⌘K / Ctrl + K), en una ventana como el de Bootstrap. */
@Component({
  selector: 'app-search-dialog',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './search-dialog.html',
  styleUrl: './search-dialog.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown)': 'onGlobalKeydown($event)' },
})
export class SearchDialog {
  private readonly i18n = inject(I18nService);
  private readonly router = inject(Router);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  readonly query = signal('');
  readonly results = computed(() => {
    this.i18n.language();
    const q = normalize(this.query().trim());
    return PAGES.map((page) => ({ ...page, title: this.i18n.t(page.key), sectionTitle: this.i18n.t(page.section) })).filter(
      (page) => !q || normalize(page.title).includes(q) || normalize(page.sectionTitle).includes(q),
    );
  });

  open() {
    this.query.set('');
    this.dialog().nativeElement.showModal();
  }

  close() {
    this.dialog().nativeElement.close();
  }

  onInput(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
  }

  /** Intro en el campo: va al primer resultado */
  goToFirst(event: Event) {
    event.preventDefault();
    const first = this.results()[0];
    if (!first) return;
    this.close();
    this.router.navigateByUrl(first.path);
  }

  onGlobalKeydown(event: KeyboardEvent) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if (this.dialog().nativeElement.open) this.close();
      else this.open();
    }
  }
}
