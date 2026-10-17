export interface ColorPickerOptions {
  /** Textos de la ventana; los que falten salen en el idioma de la página (español o inglés) */
  texts?: Partial<Record<string, string>>;
}
export declare function initColorPicker(root: HTMLElement, options?: ColorPickerOptions): () => void;
export declare function initColorPickers(scope?: ParentNode, options?: ColorPickerOptions): Array<() => void>;
