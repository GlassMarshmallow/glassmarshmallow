export declare function openDialog(dialog: HTMLDialogElement | null, opener?: Element | null): void;
export declare function initDialog(dialog: HTMLDialogElement): () => void;
export declare function initDialogs(scope?: ParentNode): Array<() => void>;
