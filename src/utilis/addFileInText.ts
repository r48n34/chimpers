import clipboard from 'clipboardy';
import fs from "fs";
import { encodeFile } from './dataCode/encodeFile';

interface AddFileInTextOptions{
    copyToBoard?: boolean
}

export function addFileInText(text: string, file_path: string, option?: AddFileInTextOptions): string{

    const options = {
        copyToBoard: false,
        ...option
    }

    if(!text || text === ""){
        throw new Error("addFileInText function missing text input in params 'text'.")
    }
    
    if(!file_path || file_path === ""){
        throw new Error("addFileInText function missing file_path input in params 'file_path'.")
    }
    
    let textArr = text.split(" ");

    const data = fs.readFileSync(file_path, {flag:'r'});
    let hiddenDataArr = encodeFile(data);

    textArr[0] += hiddenDataArr.join("")

    const finalText = textArr.join(" ")
    
    if(options.copyToBoard){
        clipboard.writeSync(finalText);
        console.log("Copied encoded text to clipboard");
    }

    return finalText

}