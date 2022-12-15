import fs from "fs";
import FileType from 'file-type';
import { hiddenCharTobin, hiddenCharTobinNum } from "../data/dataChar";

export async function decodeFile(encodedText: string, outputFileName: string = "decodedFile"){

    let finalArray = encodedText.split(" ")[0].split("").filter( v => hiddenCharTobinNum.indexOf(v.charCodeAt(0)) >= 0 )
    
    let bufferArr = [];

    // Decode
    for(let i = 0; i < finalArray.length; i += 4){
        const codeBin = hiddenCharTobin[finalArray[i].charCodeAt(0)]
        + hiddenCharTobin[finalArray[i + 1].charCodeAt(0)]
        + hiddenCharTobin[finalArray[i + 2].charCodeAt(0)]
        + hiddenCharTobin[finalArray[i + 3].charCodeAt(0)]

        bufferArr.push(parseInt(codeBin, 2))
    }

    const unitBufferArr = new Uint8Array(bufferArr)

    const fileHeader = await FileType.fromBuffer(unitBufferArr);
    const fileExt = fileHeader ? `.${fileHeader.ext}` : ".txt"

    fs.writeFileSync(outputFileName + fileExt, unitBufferArr )

    return unitBufferArr
}