import { ChangeDetectionStrategy, Component, ElementRef, inject, input, output, signal, viewChild } from '@angular/core';

export interface MenuOption {
  value: string;
  label: string;
  /** Clase del icono de GlassMarshmallow, por ejemplo «gmi-sun» */
  icon?: string;
}

/**
 * Botón con menú desplegable de opciones (versión, idioma, tema): el .gm-menu del framework con su
 * funcionamiento en Angular (el framework tiene además js/menu.js para páginas sin Angular).
 * Mientras está abierto, el foco no sale del menú; se cierra con Escape o al pulsar fuera.
 */
@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.html',
  styleUrl: './menu-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'gm-menu',
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class MenuButton {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly trigger = viewChild.required<ElementRef<HTMLButtonElement>>('trigger');

  /** Nombre del botón para lectores de pantalla («Tema: Oscuro») */
  readonly label = input.required<string>();
  readonly options = input.required<MenuOption[]>();
  readonly selected = input<string>();
  readonly picked = output<string>();
  readonly open = signal(false);

  toggle() {
    if (this.open()) {
      this.close(true);
      return;
    }
    this.open.set(true);
    // Al abrir, el foco pasa a la opción elegida (o a la primera)
    setTimeout(() => (this.items().find((item) => item.getAttribute('aria-checked') === 'true') ?? this.items()[0])?.focus());
  }

  close(returnFocus = false) {
    if (!this.open()) return;
    this.open.set(false);
    if (returnFocus) this.trigger().nativeElement.focus();
  }

  choose(option: MenuOption) {
    this.picked.emit(option.value);
    this.close(true);
  }

  onDocumentClick(event: MouseEvent) {
    if (!this.host.nativeElement.contains(event.target as Node)) this.close();
  }

  /** Flechas para moverse, Escape para cerrar y Tab sin salir del menú */
  onMenuKeydown(event: KeyboardEvent) {
    const items = this.items();
    const index = items.indexOf(document.activeElement as HTMLElement);
    const move = (to: number) => {
      event.preventDefault();
      items[(to + items.length) % items.length]?.focus();
    };
    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        this.close(true);
        break;
      case 'ArrowDown':
        move(index + 1);
        break;
      case 'ArrowUp':
        move(index - 1);
        break;
      case 'Home':
        move(0);
        break;
      case 'End':
        move(items.length - 1);
        break;
      case 'Tab':
        move(event.shiftKey ? index - 1 : index + 1);
        break;
    }
  }

  private items(): HTMLElement[] {
    return Array.from(this.host.nativeElement.querySelectorAll<HTMLElement>('[role="menuitemradio"]'));
  }
}
