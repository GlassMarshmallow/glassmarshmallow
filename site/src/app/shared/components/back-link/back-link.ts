import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

/** Botón «‹ Volver» a la sección anterior: el .gm-btn-back del framework */
@Component({
  selector: 'app-back-link',
  imports: [RouterLink, TranslatePipe],
  template: `
    <a class="gm-btn-back" [routerLink]="path()">
      <span aria-hidden="true">‹</span> {{ 'common.back' | t }}<span class="gm-visually-hidden">: {{ section() | t }}</span>
    </a>
  `,
  host: { class: 'gm-d-block gm-mb-[1.375rem]' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackLink {
  readonly path = input.required<string>();
  /** Clave de traducción del nombre de la sección a la que vuelve (para lectores de pantalla) */
  readonly section = input.required<string>();
}
