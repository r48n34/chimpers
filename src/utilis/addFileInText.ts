import clipboard from 'clipboardy';
import { encodeFile } from './dataCode/encodeFile';

interface AddFileInTextOptions{
    copyToBoard?: boolean
}

export function addFileInText(
    text: string, 
    fileData: Buffer | Uint8Array | ArrayBuffer, 
    option?: AddFileInTextOptions
): string {

    const options = {
        copyToBoard: false,
        ...option
    }

    if(!text || text === ""){
        throw new Error("addFileInText function missing text input in params 'text'.")
    }
    
    if(!fileData){
        throw new Error("addFileInText function missing fileData input in params 'fileData'.")
    }

    // Convert different input types to Buffer
    let data: Buffer;
    if (Buffer.isBuffer(fileData)) {
        data = fileData;
    } else if (fileData instanceof Uint8Array) {
        data = Buffer.from(fileData);
    } else if (fileData instanceof ArrayBuffer) {
        data = Buffer.from(new Uint8Array(fileData));
    } else {
        throw new Error("Invalid fileData type. Expected Buffer, Uint8Array, or ArrayBuffer.");
    }
    
    const hiddenDataArr = encodeFile(data);

   let textArr = text.split(" ");
    const wordIndexes = textArr
        .map((word, index) => ({ word, index }))
        .filter(({ word }) => word.length > 0)
        .map(({ index }) => index);

    if(wordIndexes.length === 0){
        return hiddenDataArr.join("");
    }

    const baseChunkSize = Math.floor(hiddenDataArr.length / wordIndexes.length);
    const remainder = hiddenDataArr.length % wordIndexes.length;
    let hiddenDataOffset = 0;

    for(let i = 0; i < wordIndexes.length; i++){
        const extra = i < remainder ? 1 : 0;
        const chunkSize = baseChunkSize + extra;

        if(chunkSize <= 0){
            continue;
        }

        const chunk = hiddenDataArr.slice(hiddenDataOffset, hiddenDataOffset + chunkSize).join("");
        textArr[wordIndexes[i]] += chunk;
        hiddenDataOffset += chunkSize;
    }

    const finalText = textArr.join(" ");
    
    if(options.copyToBoard){
        clipboard.writeSync(finalText);
        console.log("Copied encoded text to clipboard");
    }

    return finalText

}