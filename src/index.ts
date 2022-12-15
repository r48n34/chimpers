import { addFileInText } from "./utilis/addFileInText";
import { decodeFile } from "./utilis/decodeFile";

export { addFileInText, decodeFile }

// addFileToText("Hello mate");
// decodeFile("Hello‍⁠‍‌‍⁠‍⁠‍⁠‍⁢‍⁠‍⁠‍⁠‍‌‍⁢‌⁢‍⁠‍⁢‌‌⁢‍‌‌⁠⁠‍⁠‍‌‍⁠‍⁠‍⁠‍⁢‍⁠‍⁠‍⁠‍‌‍⁢‌⁢‍⁠‍⁢‍⁠‍⁢‍⁠‍⁠‍⁠‍‌‍⁠‍⁢‍⁠‍⁠‌‌⁢‍‌‌⁠⁠‍⁠‍⁠‍⁠‍‌‍⁠‍⁢‍⁠‍⁠‍⁠‍‌‍⁠‍⁢‍⁠‍⁠‍⁠‍‌‌‌⁢‍‌‌⁠⁠‍⁠‍⁢‍⁠‍⁠‍⁠‍‌ mate");

// Hello‍‍‌‌‍‌⁠⁢‌‌‌⁢‌‌‍‌‌‍‍‌‌‌‌‌‌‌‌‍‌‌‌‌‌‌⁠‌‌‌‌‌⁠‍‌⁠⁠⁠⁠‍⁠‌⁢⁢‍‍‍‍⁠‍‌⁢‍‌‍‌‌⁠⁠⁠‍⁠⁠‌‌⁠⁠⁢‌‌‌‌‌‌‌‌‌‌‌‌‌⁠‍‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌⁠‍‌‌‌‌‌‌‌‌‌‌‌‌‍⁠⁠‌‍⁠‍‍‍⁠⁢‌‍⁠⁢‌‍⁠⁢⁢‌⁠⁢⁠‍⁢‍‌‍⁢⁠‌‍⁢‍‌‍‌⁠⁢⁢‌‌‌⁢‍‍⁠‌‍‌⁢⁠⁠⁠⁢‍⁠‌‌‌⁢‍⁢⁠‍⁢‌‍⁠⁠⁢⁠‌‌‌⁠‍‍‍⁠‌⁢⁠⁢‍‍⁢‌‌‍‍⁠‌⁠⁢‍‍‍‍⁢‍⁠‌⁢⁠⁠‌‍‌⁢‍⁢⁢‍⁠‌‍‌⁠‍‍⁢‌⁢‌⁢‍‍⁢‌⁢‌‍⁠‌‍‍‌‌⁢‌‍⁠⁢‍⁢⁢‌‍‌⁠⁢‍⁠‌‍⁢‍‍⁢‌⁠⁠‌‌⁠‍‌⁢⁠⁠‌⁢⁠‌‍‍‍‌⁢⁠‌⁢‌‍‌⁢⁢⁢⁠⁢⁠⁠⁢‌⁠⁢⁢⁠‍‌⁠‍⁢‌‍‌‍‍‌‌‍‌⁠⁢‌‌‌‍‌‌‌⁠‌⁢⁢⁢‌‌‌‌‌‍‍‌‌‌‌‌‌‌‌‍‌‌‌‌‌‌⁠‌‌‌‌‌⁠‍‌⁠⁠⁠⁠‍⁠‌⁢⁢‍‍‍‍⁠‍‌⁢‍‌‍‌‌⁠⁠⁠‍⁠⁠‌‌⁠⁠⁢‌‌‌‌‌‌‌‌‌‌‌‌‌⁠‍‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌⁠‍‌‌‌‌‌⁠‍‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌⁠‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‍⁠⁠‌‍⁠‍‍‍⁠⁢‌‍⁠⁢‌‍⁠⁢⁢‌⁠⁢⁠‍⁢‍‌‍⁢⁠‌‍⁢‍‌‌‌⁠⁠‌‌‌‌‌⁠‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‍‌‌‌‌‌‍⁠‌‌‌‌‌⁢⁠⁠⁠⁢‍⁢‌⁢⁢‌‌⁢⁠‍‍⁠‌‍⁠‌‍‌‌⁢‍⁠‍‌‌‌‍⁠⁢⁠‌⁠⁢‍‌‌⁢‌⁠‍‍‌⁠⁠‌⁠⁠‌‍‌‌⁢‍⁠‍‌‌‌‍⁢⁠⁠⁠⁢‍⁢‌⁢⁢‌‌⁢⁠‍‍⁠‌‍⁠‌‍‌‌⁢‍⁠‍‌‌‌‍‍‍‌‌‍‌⁠⁢‌‌‍‍‌‌‍⁠‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‍‌‌‌‌‌‌‌‍‌‌‌‌‍‍⁠⁢‌‌‌‌‌‌‌‌‌‌‌‌‍‍‌⁠‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ mate welcome

