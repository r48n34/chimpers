import fs from "fs";
import FileType from 'file-type';
import path from "path";
import { stringDataToBuffer } from "./dataCode/stringDataToBuffer";

export async function decodeFile(
    encodedText: string, 
    outputFileName: string = "decodedFile", 
    outputPath: string = process.cwd()
): Promise<Uint8Array> {

    if(!encodedText || encodedText === ""){
        throw new Error("decodeFile function missing encodedText input in params 'encodedText'.");
    }

    if(!outputFileName || outputFileName === ""){
        throw new Error("decodeFile function missing outputFileName input in params 'outputFileName'.");
    }

    const unitBufferArr = stringDataToBuffer(encodedText)

    const fileHeader = await FileType.fromBuffer(unitBufferArr);
    const fileExt = fileHeader ? `.${fileHeader.ext}` : ".txt";

    let outputLocation = path.join(outputPath, outputFileName + fileExt);
    fs.writeFileSync(outputLocation, unitBufferArr);

    return unitBufferArr
}