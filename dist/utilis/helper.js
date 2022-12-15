"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dec2bin = void 0;
function dec2bin(dec) {
    let decStr = (dec >>> 0).toString(2);
    // Expect a output should be 8 bit e.g.(00110110)
    while (decStr.length <= 7) {
        decStr = "0" + decStr;
    }
    return decStr;
}
exports.dec2bin = dec2bin;
//# sourceMappingURL=helper.js.map