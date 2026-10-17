export declare function initTicker(root: Element, options?: { texts?: { pause?: string; play?: string } }): () => void;
export declare function initTickers(scope?: ParentNode, options?: { texts?: { pause?: string; play?: string } }): Array<() => void>;
