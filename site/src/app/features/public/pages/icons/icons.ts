import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { ICONS, ICON_CATEGORIES } from '../../../icons/data/icons';
import catalog from '../../../../../../../../glassmarshmallow-icons/catalog.json';

/** Lista de iconos como la de Bootstrap Icons: buscador, filtro por categoría y una casilla por icono. */
@Component({
  selector: 'app-icons',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './icons.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icons {
  readonly lineCount = catalog.filter((icon) => icon.category !== 'Brand').length;
  readonly brandCount = catalog.filter((icon) => icon.category === 'Brand').length;
  readonly fillCount = catalog.filter((icon) => icon.fill).length;
  readonly categories = ICON_CATEGORIES;
  readonly query = signal('');
  readonly category = signal('');

  readonly icons = computed(() => {
    const q = this.query().trim().toLowerCase();
    const category = this.category();
    return ICONS.filter((icon) => (!q || icon.name.includes(q)) && (!category || icon.category === category));
  });

  onSearch(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
  }

  onCategory(event: Event) {
    this.category.set((event.target as HTMLSelectElement).value);
  }
}
