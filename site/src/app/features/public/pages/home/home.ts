import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { CopyCommand } from '../../../../shared/components/copy-command/copy-command';
import { VERSION } from '../../../../shared/components/header/header';

/** Portada como la de Bootstrap: qué es, el comando de instalación y el botón a la documentación. */
@Component({
  selector: 'app-home',
  imports: [RouterLink, CopyCommand, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  readonly version = VERSION;
  readonly installCommand = 'npm install mallowglass';
}
