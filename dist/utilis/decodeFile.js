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
const dataChar_1 = require("../data/dataChar");
function decodeFile(encodedText, outputFileName = "decodedFile") {
    return __awaiter(this, void 0, void 0, function* () {
        let finalArray = encodedText.split(" ")[0].split("").filter(v => dataChar_1.hiddenCharTobinNum.indexOf(v.charCodeAt(0)) >= 0);
        let bufferArr = [];
        // Decode
        for (let i = 0; i < finalArray.length; i += 4) {
            const codeBin = dataChar_1.hiddenCharTobin[finalArray[i].charCodeAt(0)]
                + dataChar_1.hiddenCharTobin[finalArray[i + 1].charCodeAt(0)]
                + dataChar_1.hiddenCharTobin[finalArray[i + 2].charCodeAt(0)]
                + dataChar_1.hiddenCharTobin[finalArray[i + 3].charCodeAt(0)];
            bufferArr.push(parseInt(codeBin, 2));
        }
        const unitBufferArr = new Uint8Array(bufferArr);
        const fileHeader = yield file_type_1.default.fromBuffer(unitBufferArr);
        const fileExt = fileHeader ? `.${fileHeader.ext}` : ".txt";
        fs_1.default.writeFileSync(outputFileName + fileExt, unitBufferArr);
        return unitBufferArr;
    });
}
exports.decodeFile = decodeFile;
//# sourceMappingURL=decodeFile.js.map