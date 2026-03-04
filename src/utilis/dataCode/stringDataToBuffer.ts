import { hiddenCharTobin, type HiddenCharKey } from "../../data/dataChar";
import { stringDataDecode } from "../../data/stringDataDecode";

export function stringDataToBuffer(encodedText: string){
    // const finalArray = encodedText.split(" ")[0].split("").filter( v => hiddenCharTobinNum.indexOf(v.charCodeAt(0)) >= 0 );

    let finalArray = stringDataDecode(encodedText, false)

    if(finalArray.length % 4 !== 0){
        throw new Error("Invalid input encodedText.")
    }
    
    let bufferArr = [];

    // Decode
    for(let i = 0; i < finalArray.length; i += 4){
        const codeBin = hiddenCharTobin[finalArray[i].charCodeAt(0).toString() as HiddenCharKey]
        + hiddenCharTobin[finalArray[i + 1].charCodeAt(0).toString() as HiddenCharKey]
        + hiddenCharTobin[finalArray[i + 2].charCodeAt(0).toString() as HiddenCharKey]
        + hiddenCharTobin[finalArray[i + 3].charCodeAt(0).toString() as HiddenCharKey]

        bufferArr.push(parseInt(codeBin, 2));
    }

    return new Uint8Array(bufferArr)
}