import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { VERSION } from '../header/header';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly version = VERSION;
}
