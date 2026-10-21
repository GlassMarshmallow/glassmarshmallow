import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { DOCS_SECTIONS, pageTitleKey } from '../data/docs-nav';
import { DOC_READER } from '../data/doc-source';
import { I18nService } from '../../../core/i18n/i18n.service';

/** Documentación como la de Bootstrap: menú lateral fijo con las secciones y el contenido a la derecha. */
@Component({
  selector: 'app-docs-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, TranslatePipe],
  templateUrl: './docs-layout.html',
  // Pide la página antes del clic: al pasar el ratón, enfocar con el teclado o tocar un enlace de la documentación
  host: { '(pointerover)': 'prefetch($event)', '(focusin)': 'prefetch($event)', '(touchstart)': 'prefetch($event)' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsLayout {
  readonly sections = DOCS_SECTIONS;
  readonly pageTitleKey = pageTitleKey;
  /** En pantallas estrechas, el menú se despliega con un botón */
  readonly menuOpen = signal(false);
  private readonly readDoc = inject(DOC_READER);
  private readonly i18n = inject(I18nService);

  constructor() {
    // Al cambiar de página, el menú desplegado se cierra
    inject(Router)
      .events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(inject(DestroyRef)))
      .subscribe(() => this.menuOpen.set(false));
  }

  prefetch(event: Event) {
    const link = (event.target as Element | null)?.closest?.('a[href]');
    const match = link?.getAttribute('href')?.match(/\/docs\/([\w-]+\/[\w-]+)\/?(?:[?#].*)?$/);
    if (match) this.readDoc(this.i18n.language(), match[1]).catch(() => undefined);
  }
}
