"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeFile = void 0;
const fs_1 = __importDefault(require("fs"));
const dataChar_1 = require("../data/dataChar");
const helper_1 = require("./helper");
function encodeFile(file_path) {
    const data = fs_1.default.readFileSync(file_path, { flag: 'r' });
    let finalArray = [];
    // Encode
    for (let v of data) {
        const binStr = (0, helper_1.dec2bin)(v);
        for (let i = 0; i < 7; i += 2) {
            const code = binStr[i] + binStr[i + 1];
            finalArray.push(dataChar_1.binToHiddenChar[code]);
        }
    }
    return finalArray;
}
exports.encodeFile = encodeFile;
//# sourceMappingURL=encodeFile.js.map