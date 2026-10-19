import { ChangeDetectionStrategy, Component, ElementRef, PendingTasks, afterRenderEffect, computed, effect, inject, input, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { I18nService, LANGUAGE_BASE } from '../../../../core/i18n/i18n.service';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { DOCS_PAGES, pageTitleKey } from '../../data/docs-nav';
import { RenderedDoc, renderDoc } from '../../data/render-doc';
import { DOC_READER } from '../../data/doc-source';
import { SeoService } from '../../../../core/seo/seo.service';
// Script opcional del framework: los calendarios de los ejemplos funcionan de verdad
import { initCalendars } from '../../../../../../../js/calendar.js';
import { initMenus } from '../../../../../../../js/menu.js';
import { initSearches } from '../../../../../../../js/search.js';
import { initColorPickers } from '../../../../../../../js/color-picker.js';
import { initRanges } from '../../../../../../../js/range.js';
import { initPlayers } from '../../../../../../../js/player.js';
import { initCarousels } from '../../../../../../../js/carousel.js';
import { initGalleries, initZooms } from '../../../../../../../js/gallery.js';
import { initDialogs } from '../../../../../../../js/dialog.js';
import { initTickers } from '../../../../../../../js/ticker.js';
import { initFullscreenMenus } from '../../../../../../../js/fullscreen-menu.js';

const REPO = 'https://github.com/GlassMarshmallow/glassmarshmallow/blob/main/site/public/content/docs';

/**
 * Página de la documentación: lee el Markdown del idioma actual (public/content/docs/<idioma>/<sección>/<página>.md)
 * y lo muestra con su índice («En esta página») y los enlaces a la página anterior y siguiente.
 */
@Component({
  selector: 'app-doc-page',
  host: { '(document:keydown.escape)': 'dismissTooltips()' },
  imports: [RouterLink, TranslatePipe],
  templateUrl: './doc-page.html',
  styleUrl: './doc-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocPage {
  private readonly i18n = inject(I18nService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly router = inject(Router);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly readDoc = inject(DOC_READER);
  private readonly pending = inject(PendingTasks);
  private readonly seo = inject(SeoService);

  readonly section = input.required<string>();
  readonly page = input.required<string>();

  readonly path = computed(() => `${this.section()}/${this.page()}`);
  readonly titleKey = computed(() => pageTitleKey(this.path()));
  readonly doc = signal<RenderedDoc | null>(null);
  readonly loading = signal(true);
  readonly announcement = signal('');

  /** HTML de nuestro propio Markdown (contenido de confianza, no de usuarios) */
  readonly content = computed<SafeHtml>(() => this.sanitizer.bypassSecurityTrustHtml(this.doc()?.html ?? ''));
  readonly lead = computed<SafeHtml>(() => this.sanitizer.bypassSecurityTrustHtml(this.doc()?.lead ?? ''));
  readonly editUrl = computed(() => `${REPO}/${this.i18n.language()}/${this.path()}.md`);

  private cleanups: Array<() => void> = [];

  readonly previous = computed(() => this.neighbour(-1));
  readonly next = computed(() => this.neighbour(1));

  constructor() {
    // Cuando el contenido ya está en la página, pone en marcha los calendarios, menús, buscadores, selectores de color, barras, reproductores, carruseles y galerías de los ejemplos
    afterRenderEffect(() => {
      this.doc();
      const content = this.host.nativeElement.querySelector('.doc__content');
      if (content) {
        initCalendars(content);
        initMenus(content);
        initSearches(content);
        initColorPickers(content);
        initRanges(content);
        initPlayers(content);
        initCarousels(content);
        initGalleries(content);
        initZooms(content);
        // Ventanas y menús a pantalla completa: se quitan los de la página anterior antes de poner los nuevos
        this.cleanups.forEach((stop) => stop());
        this.cleanups = [...initDialogs(content), ...initFullscreenMenus(content), ...initTickers(content)];
        // Tablas más anchas que la página: se desplazan de lado y tienen que poder enfocarse (WCAG 2.1.1)
        content.querySelectorAll<HTMLTableElement>(':scope > table').forEach((table) => {
          if (table.scrollWidth > table.clientWidth) table.tabIndex = 0;
          else table.removeAttribute('tabindex');
        });
      }
    });

    effect((onCleanup) => {
      const lang = this.i18n.language();
      const path = this.path();
      let cancelled = false;
      onCleanup(() => (cancelled = true));
      this.loading.set(true);
      // PendingTasks: al prerenderizar, Angular espera a que llegue el texto antes de escribir la página
      const done = this.pending.add();
      this.readDoc(lang, path)
        .then((markdown) => {
          if (cancelled) return;
          const doc = markdown ? renderDoc(markdown, { copy: this.i18n.t('docsNav.copy'), lang }) : null;
          this.doc.set(doc);
          // Descripción para los buscadores: el primer párrafo de la página, sin etiquetas
          if (doc?.lead) this.seo.setDescription(doc.lead.replace(/<[^>]+>/g, '').replace(/&[a-z]+;|&#\d+;/g, (e) => ({ '&amp;': '&', '&quot;': '"', '&#39;': "'", '&lt;': '<', '&gt;': '>' })[e] ?? e));
          this.loading.set(false);
        })
        .catch(() => {
          if (cancelled) return;
          this.doc.set(null);
          this.loading.set(false);
        })
        .finally(done);
    });
  }

  private neighbour(step: number) {
    const index = DOCS_PAGES.findIndex((p) => p.path === this.path());
    const page = DOCS_PAGES[index + step];
    return page ? { path: `/docs/${page.path}`, key: pageTitleKey(page.path) } : null;
  }

  /** Índice: baja hasta el apartado sin cambiar de página (con <base href="/">, «#id» saldría al inicio) */
  goTo(event: Event, id: string) {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    target.setAttribute('tabindex', '-1');
    target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    target.focus({ preventScroll: true });
    history.replaceState(null, '', `${location.pathname}#${id}`);
  }

  /** Clics dentro del contenido: copiar código, cambiar de pestaña y enlaces internos sin recargar */
  async onContentClick(event: MouseEvent) {
    const el = event.target as HTMLElement;
    const copy = el.closest<HTMLButtonElement>('[data-copy]');
    if (copy) {
      const pre = copy.closest('.gm-snippet')?.querySelector<HTMLElement>('pre:not([hidden])');
      try {
        await navigator.clipboard.writeText(pre?.innerText ?? '');
        const label = copy.querySelector('span');
        if (label) {
          label.textContent = this.i18n.t('docsNav.copied');
          setTimeout(() => (label.textContent = this.i18n.t('docsNav.copy')), 2000);
        }
        this.announcement.set(this.i18n.t('docsNav.codeCopied'));
      } catch {
        /* sin portapapeles: el código se puede seleccionar */
      }
      return;
    }
    // Botón «Repetir» de los ejemplos de animaciones: vuelve a lanzar las animaciones de su ejemplo
    const replay = el.closest<HTMLButtonElement>('[data-replay]');
    if (replay) {
      const example = replay.closest('.gm-snippet__example') ?? replay.parentElement;
      example?.querySelectorAll<HTMLElement>('[class*="gm-animate-"], .gm-stagger > *').forEach((item) => {
        item.style.animation = 'none';
        void item.offsetWidth; // fuerza al navegador a aplicar el cambio antes de quitarlo
        item.style.animation = '';
      });
      // La cuenta atrás va en ::before: se quita la clase y se vuelve a poner
      example?.querySelectorAll<HTMLElement>('.gm-countdown').forEach((item) => {
        item.classList.remove('gm-countdown');
        void item.offsetWidth;
        item.classList.add('gm-countdown');
      });
      return;
    }
    const tab = el.closest<HTMLButtonElement>('[role="tab"]');
    if (tab) {
      this.selectTab(tab);
      return;
    }
    // Enlaces a un campo de la misma página (como los del resumen de errores): con <base href="/">, «#id»
    // saldría al inicio, así que se lleva el foco al campo
    const anchor = el.closest<HTMLAnchorElement>('a[href^="#"]');
    if (anchor) {
      event.preventDefault();
      const target = document.getElementById(anchor.getAttribute('href')!.slice(1));
      target?.scrollIntoView({ block: 'center' });
      target?.focus();
      return;
    }
    const link = el.closest<HTMLAnchorElement>('a[href^="/"]');
    if (link) {
      event.preventDefault();
      // En español los enlaces llevan «/es/» delante; el enrutador ya está dentro de /es/, así que se quita
      const href = link.getAttribute('href')!;
      const base = LANGUAGE_BASE[this.i18n.language()];
      this.router.navigateByUrl(href.startsWith(base) ? `/${href.slice(base.length)}` : href);
    }
  }

  /**
   * Tooltips de los ejemplos: Escape oculta el que está abierto (con el ratón encima o el foco dentro) hasta
   * que el ratón sale o el foco se va, como pide WCAG 2.2 (contenido que se puede cerrar).
   */
  dismissTooltips() {
    document.querySelectorAll('.gm-tooltip:hover, .gm-tooltip:focus-within').forEach((tip) => tip.classList.add('is-dismissed'));
  }

  onTooltipLeave(event: Event) {
    const tip = (event.target as HTMLElement).closest('.gm-tooltip');
    const next = (event as FocusEvent | MouseEvent).relatedTarget as Node | null;
    if (tip && !(next && tip.contains(next))) tip.classList.remove('is-dismissed');
  }

  /** Flechas izquierda y derecha para moverse entre pestañas */
  onContentKeydown(event: KeyboardEvent) {
    const tab = (event.target as HTMLElement).closest<HTMLButtonElement>('[role="tab"]');
    if (!tab || (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft')) return;
    const tabs = Array.from(tab.parentElement!.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
    const index = tabs.indexOf(tab) + (event.key === 'ArrowRight' ? 1 : -1);
    const next = tabs[(index + tabs.length) % tabs.length];
    event.preventDefault();
    this.selectTab(next);
    next.focus();
  }

  private selectTab(tab: HTMLButtonElement) {
    const tabs = tab.parentElement!.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    tabs.forEach((t) => {
      const selected = t === tab;
      t.setAttribute('aria-selected', String(selected));
      t.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls')!);
      if (panel) panel.hidden = !selected;
    });
  }
}
