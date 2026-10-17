import { Pipe, PipeTransform, inject } from '@angular/core';
import { I18nService } from './i18n.service';

/** {{ 'home.lead' | t }} o {{ 'nav.version' | t: { version } }}. Se actualiza al cambiar de idioma. */
@Pipe({ name: 't', pure: false })
export class TranslatePipe implements PipeTransform {
  private readonly i18n = inject(I18nService);

  transform(key: string, params?: Record<string, string | number>): string {
    // Leer la señal hace que la vista se vuelva a pintar al cambiar de idioma
    this.i18n.language();
    return this.i18n.t(key, params);
  }
}
