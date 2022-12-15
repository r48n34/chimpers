"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeFile = exports.addFileInText = void 0;
const addFileInText_1 = require("./utilis/addFileInText");
Object.defineProperty(exports, "addFileInText", { enumerable: true, get: function () { return addFileInText_1.addFileInText; } });
const decodeFile_1 = require("./utilis/decodeFile");
Object.defineProperty(exports, "decodeFile", { enumerable: true, get: function () { return decodeFile_1.decodeFile; } });
// addFileToText("Hello mate");
// decodeFile("Hello‍⁠‍‌‍⁠‍⁠‍⁠‍⁢‍⁠‍⁠‍⁠‍‌‍⁢‌⁢‍⁠‍⁢‌‌⁢‍‌‌⁠⁠‍⁠‍‌‍⁠‍⁠‍⁠‍⁢‍⁠‍⁠‍⁠‍‌‍⁢‌⁢‍⁠‍⁢‍⁠‍⁢‍⁠‍⁠‍⁠‍‌‍⁠‍⁢‍⁠‍⁠‌‌⁢‍‌‌⁠⁠‍⁠‍⁠‍⁠‍‌‍⁠‍⁢‍⁠‍⁠‍⁠‍‌‍⁠‍⁢‍⁠‍⁠‍⁠‍‌‌‌⁢‍‌‌⁠⁠‍⁠‍⁢‍⁠‍⁠‍⁠‍‌ mate");
// Hello‍‍‌‌‍‌⁠⁢‌‌‌⁢‌‌‍‌‌‍‍‌‌‌‌‌‌‌‌‍‌‌‌‌‌‌⁠‌‌‌‌‌⁠‍‌⁠⁠⁠⁠‍⁠‌⁢⁢‍‍‍‍⁠‍‌⁢‍‌‍‌‌⁠⁠⁠‍⁠⁠‌‌⁠⁠⁢‌‌‌‌‌‌‌‌‌‌‌‌‌⁠‍‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌⁠‍‌‌‌‌‌‌‌‌‌‌‌‌‍⁠⁠‌‍⁠‍‍‍⁠⁢‌‍⁠⁢‌‍⁠⁢⁢‌⁠⁢⁠‍⁢‍‌‍⁢⁠‌‍⁢‍‌‍‌⁠⁢⁢‌‌‌⁢‍‍⁠‌‍‌⁢⁠⁠⁠⁢‍⁠‌‌‌⁢‍⁢⁠‍⁢‌‍⁠⁠⁢⁠‌‌‌⁠‍‍‍⁠‌⁢⁠⁢‍‍⁢‌‌‍‍⁠‌⁠⁢‍‍‍‍⁢‍⁠‌⁢⁠⁠‌‍‌⁢‍⁢⁢‍⁠‌‍‌⁠‍‍⁢‌⁢‌⁢‍‍⁢‌⁢‌‍⁠‌‍‍‌‌⁢‌‍⁠⁢‍⁢⁢‌‍‌⁠⁢‍⁠‌‍⁢‍‍⁢‌⁠⁠‌‌⁠‍‌⁢⁠⁠‌⁢⁠‌‍‍‍‌⁢⁠‌⁢‌‍‌⁢⁢⁢⁠⁢⁠⁠⁢‌⁠⁢⁢⁠‍‌⁠‍⁢‌‍‌‍‍‌‌‍‌⁠⁢‌‌‌‍‌‌‌⁠‌⁢⁢⁢‌‌‌‌‌‍‍‌‌‌‌‌‌‌‌‍‌‌‌‌‌‌⁠‌‌‌‌‌⁠‍‌⁠⁠⁠⁠‍⁠‌⁢⁢‍‍‍‍⁠‍‌⁢‍‌‍‌‌⁠⁠⁠‍⁠⁠‌‌⁠⁠⁢‌‌‌‌‌‌‌‌‌‌‌‌‌⁠‍‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌⁠‍‌‌‌‌‌⁠‍‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌⁠‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‍⁠⁠‌‍⁠‍‍‍⁠⁢‌‍⁠⁢‌‍⁠⁢⁢‌⁠⁢⁠‍⁢‍‌‍⁢⁠‌‍⁢‍‌‌‌⁠⁠‌‌‌‌‌⁠‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‍‌‌‌‌‌‍⁠‌‌‌‌‌⁢⁠⁠⁠⁢‍⁢‌⁢⁢‌‌⁢⁠‍‍⁠‌‍⁠‌‍‌‌⁢‍⁠‍‌‌‌‍⁠⁢⁠‌⁠⁢‍‌‌⁢‌⁠‍‍‌⁠⁠‌⁠⁠‌‍‌‌⁢‍⁠‍‌‌‌‍⁢⁠⁠⁠⁢‍⁢‌⁢⁢‌‌⁢⁠‍‍⁠‌‍⁠‌‍‌‌⁢‍⁠‍‌‌‌‍‍‍‌‌‍‌⁠⁢‌‌‍‍‌‌‍⁠‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‍‌‌‌‌‌‌‌‍‌‌‌‌‍‍⁠⁢‌‌‌‌‌‌‌‌‌‌‌‌‍‍‌⁠‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ mate welcome
//# sourceMappingURL=index.js.map