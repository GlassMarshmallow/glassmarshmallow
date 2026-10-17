import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { TOOLS } from '../../data/tools';

/** Lista de herramientas (/tools) */
@Component({
  selector: 'app-tools-home',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './tools-home.html',
  styleUrl: './tools-home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolsHome {
  readonly groups = [
    { id: 'generators', title: 'tools.generators', tools: TOOLS.filter((t) => t.group === 'generators') },
    { id: 'effects', title: 'tools.effects', tools: TOOLS.filter((t) => t.group === 'effects') },
  ];
}
