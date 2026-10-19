import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { HighlightPipe } from '../../utils/highlight';

/** Comando con un botón para copiarlo. Avisa «Copiado» una vez, también a los lectores de pantalla. */
@Component({
  selector: 'app-copy-command',
  imports: [HighlightPipe, TranslatePipe],
  templateUrl: './copy-command.html',
  styleUrl: './copy-command.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopyCommand {
  readonly command = input.required<string>();
  readonly copied = signal(false);
  private resetTimer?: ReturnType<typeof setTimeout>;

  async copy() {
    try {
      await navigator.clipboard.writeText(this.command());
      this.copied.set(true);
      clearTimeout(this.resetTimer);
      this.resetTimer = setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // Sin permiso para el portapapeles: se deja el texto seleccionable a mano
      this.copied.set(false);
    }
  }
}
