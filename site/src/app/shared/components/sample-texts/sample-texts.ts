import { ChangeDetectionStrategy, Component, WritableSignal, input } from '@angular/core';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

export interface SampleField {
  id: string;
  /** Clave de traducción de la etiqueta */
  label: string;
  /** Texto por defecto (se ve como sugerencia y se usa mientras el campo esté vacío) */
  placeholder: string;
  value: WritableSignal<string>;
}

/** Campos para cambiar los textos de ejemplo de los generadores */
@Component({
  selector: 'app-sample-texts',
  imports: [TranslatePipe],
  template: `
    <fieldset class="texts">
      <legend>{{ 'common.sampleTexts' | t }}</legend>
      @for (field of fields(); track field.id) {
        <div class="gm-field">
          <label [for]="field.id">{{ field.label | t }}</label>
          <input [id]="field.id" type="text" [value]="field.value()" [placeholder]="field.placeholder" (input)="field.value.set($any($event.target).value)" />
        </div>
      }
    </fieldset>
  `,
  styles: `
    .texts { display: grid; min-width: 0; gap: 14px; margin: 0; padding: 0; border: 0; }
    legend { margin-bottom: 10px; padding: 0; font-size: .9rem; font-weight: 650; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SampleTexts {
  readonly fields = input.required<SampleField[]>();
}
