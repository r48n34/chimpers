import fs from "fs";
import FileType from 'file-type';
import path from "path";

import { hiddenCharTobin, hiddenCharTobinNum } from "../data/dataChar";

export function stringDataToBuffer(encodedText: string){
    let finalArray = encodedText.split(" ")[0].split("").filter( v => hiddenCharTobinNum.indexOf(v.charCodeAt(0)) >= 0 );
    
    let bufferArr = [];

    // Decode
    for(let i = 0; i < finalArray.length; i += 4){
        const codeBin = hiddenCharTobin[finalArray[i].charCodeAt(0)]
        + hiddenCharTobin[finalArray[i + 1].charCodeAt(0)]
        + hiddenCharTobin[finalArray[i + 2].charCodeAt(0)]
        + hiddenCharTobin[finalArray[i + 3].charCodeAt(0)]

        bufferArr.push(parseInt(codeBin, 2));
    }

    return new Uint8Array(bufferArr)
}

export async function decodeFile(
    encodedText: string, 
    outputFileName: string = "decodedFile", 
    outputPath: string = process.cwd()
): Promise<Uint8Array> {

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