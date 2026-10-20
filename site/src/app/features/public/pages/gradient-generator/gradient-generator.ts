import { RangeFill } from '../../../../shared/directives/range-fill';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { ColorPicker } from '../../../../shared/components/color-picker/color-picker';

type GradientType = 'linear' | 'radial' | 'conic';

interface ColorStop {
  id: number;
  color: string;
  position: number;
}

interface Preset {
  name: string;
  type: GradientType;
  angle: number;
  stops: [string, number][];
}

const MIN_STOPS = 2;
const MAX_STOPS = 6;

/** Degradados de partida con los colores del portfolio. */
const PRESETS: Preset[] = [
  { name: 'gradient.presetLights', type: 'linear', angle: 45, stops: [['#3cd2ff', 0], ['#8c64ff', 50], ['#ff9646', 100]] },
  { name: 'gradient.presetTitles', type: 'linear', angle: 90, stops: [['#0891b2', 0], ['#8b5cf6', 50], ['#ea580c', 100]] },
  { name: 'gradient.presetCyan', type: 'linear', angle: 180, stops: [['#3cd2ff', 0], ['#1cabb0', 100]] },
];

/** Generador de degradados: se eligen el tipo, el ángulo y los colores, y se copia el CSS. */
import { SampleField, SampleTexts } from '../../../../shared/components/sample-texts/sample-texts';
import { BackLink } from '../../../../shared/components/back-link/back-link';
import { CodeOutput } from '../../../../shared/components/code-output/code-output';
@Component({
  selector: 'app-gradient-generator',
  imports: [CodeOutput, RangeFill, ColorPicker, TranslatePipe, BackLink, SampleTexts],
  templateUrl: './gradient-generator.html',
  styleUrl: './gradient-generator.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GradientGenerator {
  private readonly i18n = inject(I18nService);
  readonly presets = PRESETS;
  readonly types: { value: GradientType; label: string }[] = [
    { value: 'linear', label: 'gradient.linear' },
    { value: 'radial', label: 'gradient.radial' },
    { value: 'conic', label: 'gradient.conic' },
  ];
  readonly minStops = MIN_STOPS;
  readonly maxStops = MAX_STOPS;

  readonly type = signal<GradientType>('linear');
  readonly angle = signal(45);
  readonly stops = signal<ColorStop[]>([]);
  readonly showSample = signal(true);
  readonly sampleTitle = signal('');
  readonly sampleText = signal('');
  readonly sampleFields = computed<SampleField[]>(() => [
    { id: 'gradient-text-title', label: 'common.textTitle', placeholder: this.i18n.t('gradient.sampleTitle'), value: this.sampleTitle },
    { id: 'gradient-text-body', label: 'common.textBody', placeholder: this.i18n.t('gradient.sampleText'), value: this.sampleText },
  ]);
  readonly announcement = signal('');
  private nextId = 0;

  readonly gradient = computed(() => {
    const stops = [...this.stops()]
      .sort((a, b) => a.position - b.position)
      .map((stop) => `${stop.color} ${stop.position}%`)
      .join(', ');
    switch (this.type()) {
      case 'radial':
        return `radial-gradient(circle, ${stops})`;
      case 'conic':
        return `conic-gradient(from ${this.angle()}deg, ${stops})`;
      default:
        return `linear-gradient(${this.angle()}deg, ${stops})`;
    }
  });

  readonly css = computed(() => `/* ${this.i18n.t('common.generatedWith')} */\nbackground: ${this.gradient()};`);
  readonly usesAngle = computed(() => this.type() !== 'radial');

  constructor() {
    this.applyPreset(PRESETS[0], false);
  }

  applyPreset(preset: Preset, announce = true) {
    this.type.set(preset.type);
    this.angle.set(preset.angle);
    this.stops.set(preset.stops.map(([color, position]) => ({ id: this.nextId++, color, position })));
    if (announce) this.announcement.set(this.i18n.t('gradient.presetApplied', { name: this.i18n.t(preset.name) }));
  }

  toggleSample(event: Event) {
    this.showSample.set((event.target as HTMLInputElement).checked);
  }

  setType(event: Event) {
    this.type.set((event.target as HTMLInputElement).value as GradientType);
  }

  setAngle(event: Event) {
    this.angle.set(Number((event.target as HTMLInputElement).value));
  }

  updateStop(id: number, changes: Partial<Omit<ColorStop, 'id'>>) {
    this.stops.update((stops) => stops.map((stop) => (stop.id === id ? { ...stop, ...changes } : stop)));
  }

  setStopColor(id: number, color: string) {
    this.updateStop(id, { color });
  }

  setStopPosition(id: number, event: Event) {
    this.updateStop(id, { position: Number((event.target as HTMLInputElement).value) });
  }

  addStop() {
    if (this.stops().length >= MAX_STOPS) return;
    this.stops.update((stops) => [...stops, { id: this.nextId++, color: '#ffffff', position: 100 }]);
    this.announcement.set(this.i18n.t('gradient.added', { n: this.stops().length }));
  }

  removeStop(id: number, index: number) {
    if (this.stops().length <= MIN_STOPS) return;
    this.stops.update((stops) => stops.filter((stop) => stop.id !== id));
    this.announcement.set(this.i18n.t('gradient.removed', { n: index + 1 }));
  }
}
