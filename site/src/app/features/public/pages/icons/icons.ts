import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import catalog from '../../../../../../../../mallowglass-icons/catalog.json';

interface IconEntry {
  name: string;
  category: string;
  fill: boolean;
}

interface IconGroup {
  category: string;
  icons: IconEntry[];
}

/** Iconos de Mallowglass, agrupados por categoría, con buscador. */
@Component({
  selector: 'app-icons',
  imports: [TranslatePipe],
  templateUrl: './icons.html',
  styleUrl: './icons.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icons {
  private readonly all: IconEntry[] = catalog;
  readonly lineCount = this.all.length;
  readonly fillCount = this.all.filter((icon) => icon.fill).length;
  readonly query = signal('');

  readonly groups = computed<IconGroup[]>(() => {
    const q = this.query().trim().toLowerCase();
    const byCategory = new Map<string, IconEntry[]>();
    for (const icon of this.all) {
      if (q && !icon.name.includes(q)) continue;
      byCategory.set(icon.category, [...(byCategory.get(icon.category) ?? []), icon]);
    }
    return [...byCategory.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([category, icons]) => ({ category, icons }));
  });

  readonly resultCount = computed(() => this.groups().reduce((sum, group) => sum + group.icons.length, 0));

  onSearch(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
  }
}
