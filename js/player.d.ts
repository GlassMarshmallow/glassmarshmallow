export interface PlayerOptions {
  /** Textos de los controles; los que falten salen en el idioma de la página (español o inglés) */
  texts?: Partial<Record<string, string>>;
}
export declare function initPlayer(root: HTMLElement, options?: PlayerOptions): () => void;
export declare function initPlayers(scope?: ParentNode, options?: PlayerOptions): Array<() => void>;
