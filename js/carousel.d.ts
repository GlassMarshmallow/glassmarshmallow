export interface CarouselOptions {
  /** Textos de los controles; los que falten salen en el idioma de la página (español o inglés) */
  texts?: Partial<Record<string, string>>;
}
export declare function initCarousel(root: HTMLElement, options?: CarouselOptions): () => void;
export declare function initCarousels(scope?: ParentNode, options?: CarouselOptions): Array<() => void>;
