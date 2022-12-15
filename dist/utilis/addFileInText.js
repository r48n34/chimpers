"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFileInText = void 0;
const clipboardy_1 = __importDefault(require("clipboardy"));
const encodeFile_1 = require("./encodeFile");
function addFileInText(text, file_path, option) {
    try {
        const options = Object.assign({ copyToBoard: true }, option);
        let textArr = text.split(" ");
        let hiddenDataArr = (0, encodeFile_1.encodeFile)(file_path);
        textArr[0] += hiddenDataArr.join("");
        const finalText = textArr.join(" ");
        if (options.copyToBoard) {
            clipboardy_1.default.writeSync(finalText);
            console.log("Copied encoded text to clipboard");
        }
        return finalText;
    }
    catch (error) {
        console.log(error);
        return "";
    }
}
exports.addFileInText = addFileInText;
//# sourceMappingURL=addFileInText.js.map