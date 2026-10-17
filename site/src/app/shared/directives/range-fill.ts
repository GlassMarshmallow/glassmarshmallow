import { Directive, DoCheck, ElementRef, inject } from '@angular/core';
import { updateRange } from '../../../../../js/range.js';

/**
 * Barras del framework (.gm-range) en Angular: pinta la parte recorrida con el valor actual, también cuando
 * cambia desde el código y no al arrastrar (lo mismo que hace js/range.js en una web sin Angular).
 */
@Directive({ selector: 'input.gm-range' })
export class RangeFill implements DoCheck {
  private readonly input = inject<ElementRef<HTMLInputElement>>(ElementRef).nativeElement;

  ngDoCheck() {
    // Después de que Angular ponga el valor nuevo
    queueMicrotask(() => updateRange(this.input));
  }
}
