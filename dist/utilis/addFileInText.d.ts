/// <reference types="node" />
interface AddFileInTextOptions {
    copyToBoard?: boolean;
}
export declare function addFileInText(text: string, fileData: Buffer | Uint8Array | ArrayBuffer, option?: AddFileInTextOptions): string;
export {};
