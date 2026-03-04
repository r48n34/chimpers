"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFileInText = void 0;
const clipboardy_1 = __importDefault(require("clipboardy"));
const encodeFile_1 = require("./dataCode/encodeFile");
function addFileInText(text, fileData, option) {
    const options = Object.assign({ copyToBoard: false }, option);
    if (!text || text === "") {
        throw new Error("addFileInText function missing text input in params 'text'.");
    }
    if (!fileData) {
        throw new Error("addFileInText function missing fileData input in params 'fileData'.");
    }
    // Convert different input types to Buffer
    let data;
    if (Buffer.isBuffer(fileData)) {
        data = fileData;
    }
    else if (fileData instanceof Uint8Array) {
        data = Buffer.from(fileData);
    }
    else if (fileData instanceof ArrayBuffer) {
        data = Buffer.from(new Uint8Array(fileData));
    }
    else {
        throw new Error("Invalid fileData type. Expected Buffer, Uint8Array, or ArrayBuffer.");
    }
    const hiddenDataArr = (0, encodeFile_1.encodeFile)(data);
    let textArr = text.split(" ");
    const wordIndexes = textArr
        .map((word, index) => ({ word, index }))
        .filter(({ word }) => word.length > 0)
        .map(({ index }) => index);
    if (wordIndexes.length === 0) {
        return hiddenDataArr.join("");
    }
    const baseChunkSize = Math.floor(hiddenDataArr.length / wordIndexes.length);
    const remainder = hiddenDataArr.length % wordIndexes.length;
    let hiddenDataOffset = 0;
    for (let i = 0; i < wordIndexes.length; i++) {
        const extra = i < remainder ? 1 : 0;
        const chunkSize = baseChunkSize + extra;
        if (chunkSize <= 0) {
            continue;
        }
        const chunk = hiddenDataArr.slice(hiddenDataOffset, hiddenDataOffset + chunkSize).join("");
        textArr[wordIndexes[i]] += chunk;
        hiddenDataOffset += chunkSize;
    }
    const finalText = textArr.join(" ");
    if (options.copyToBoard) {
        clipboardy_1.default.writeSync(finalText);
        console.log("Copied encoded text to clipboard");
    }
    return finalText;
}
exports.addFileInText = addFileInText;
//# sourceMappingURL=addFileInText.js.map