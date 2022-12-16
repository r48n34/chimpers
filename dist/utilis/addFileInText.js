"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFileInText = void 0;
const clipboardy_1 = __importDefault(require("clipboardy"));
const fs_1 = __importDefault(require("fs"));
const encodeFile_1 = require("./dataCode/encodeFile");
function addFileInText(text, file_path, option) {
    const options = Object.assign({ copyToBoard: false }, option);
    if (!text || text === "") {
        throw new Error("addFileInText function missing text input in params 'text'.");
    }
    if (!file_path || file_path === "") {
        throw new Error("addFileInText function missing file_path input in params 'file_path'.");
    }
    let textArr = text.split(" ");
    const data = fs_1.default.readFileSync(file_path, { flag: 'r' });
    let hiddenDataArr = (0, encodeFile_1.encodeFile)(data);
    textArr[0] += hiddenDataArr.join("");
    const finalText = textArr.join(" ");
    if (options.copyToBoard) {
        clipboardy_1.default.writeSync(finalText);
        console.log("Copied encoded text to clipboard");
    }
    return finalText;
}
exports.addFileInText = addFileInText;
//# sourceMappingURL=addFileInText.js.map