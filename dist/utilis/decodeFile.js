"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeFile = void 0;
const fs_1 = __importDefault(require("fs"));
const file_type_1 = __importDefault(require("file-type"));
const path_1 = __importDefault(require("path"));
const stringDataToBuffer_1 = require("./dataCode/stringDataToBuffer");
function decodeFile(encodedText, outputFileName = "decodedFile", outputPath = process.cwd()) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!encodedText || encodedText === "") {
            throw new Error("decodeFile function missing encodedText input in params 'encodedText'.");
        }
        if (!outputFileName || outputFileName === "") {
            throw new Error("decodeFile function missing outputFileName input in params 'outputFileName'.");
        }
        const unitBufferArr = (0, stringDataToBuffer_1.stringDataToBuffer)(encodedText);
        const fileHeader = yield file_type_1.default.fromBuffer(unitBufferArr);
        const fileExt = fileHeader ? `.${fileHeader.ext}` : ".txt";
        let outputLocation = path_1.default.join(outputPath, outputFileName + fileExt);
        fs_1.default.writeFileSync(outputLocation, unitBufferArr);
        return unitBufferArr;
    });
}
exports.decodeFile = decodeFile;
//# sourceMappingURL=decodeFile.js.map