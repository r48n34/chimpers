"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeFileInText = void 0;
const stringDataToBuffer_1 = require("./dataCode/stringDataToBuffer");
function decodeFileInText(encodedText) {
    if (!encodedText || encodedText === "") {
        throw new Error("decodeFileInText function missing encodedText input in params 'encodedText'.");
    }
    return (0, stringDataToBuffer_1.stringDataToBuffer)(encodedText);
}
exports.decodeFileInText = decodeFileInText;
//# sourceMappingURL=decodeFileInText.js.map