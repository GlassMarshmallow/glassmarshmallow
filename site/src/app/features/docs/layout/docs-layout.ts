import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { DOCS_SECTIONS, pageTitleKey } from '../data/docs-nav';

/** Documentación como la de Bootstrap: menú lateral fijo con las secciones y el contenido a la derecha. */
@Component({
  selector: 'app-docs-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, TranslatePipe],
  templateUrl: './docs-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsLayout {
  readonly sections = DOCS_SECTIONS;
  readonly pageTitleKey = pageTitleKey;
  /** En pantallas estrechas, el menú se despliega con un botón */
  readonly menuOpen = signal(false);

  constructor() {
    // Al cambiar de página, el menú desplegado se cierra
    inject(Router)
      .events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(inject(DestroyRef)))
      .subscribe(() => this.menuOpen.set(false));
  }
}
