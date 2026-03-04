import { stringDataToBuffer } from "./dataCode/stringDataToBuffer";

export function decodeFileInText(encodedText: string): Uint8Array {
    if (!encodedText || encodedText === "") {
        throw new Error("decodeFileInText function missing encodedText input in params 'encodedText'.");
    }

    return stringDataToBuffer(encodedText);
}
