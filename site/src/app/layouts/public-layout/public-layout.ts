import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet, Header, Footer, TranslatePipe],
  templateUrl: './public-layout.html',
  host: { class: 'gm-app' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicLayout {
  private readonly router = inject(Router);

  /** La portada lleva el fondo de luces y su estilo; el resto de páginas, el estilo general. */
  protected readonly isHome = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.isHomeUrl()),
    ),
    { initialValue: this.isHomeUrl() },
  );

  private isHomeUrl(): boolean {
    const path = this.router.url.split(/[?#]/)[0];
    return path === '/' || path === '';
  }
}
