import clipboard from 'clipboardy';
import { encodeFile } from './encodeFile';

interface AddFileInTextOptions{
    copyToBoard?: boolean
}

export function addFileInText(text: string, file_path: string, option?: AddFileInTextOptions): string{

    try {

        const options = {
            copyToBoard: true,
            ...option
        }
        
        let textArr = text.split(" ");
    
        let hiddenDataArr = encodeFile(file_path);
        textArr[0] += hiddenDataArr.join("")
    
        const finalText = textArr.join(" ")
        
        if(options.copyToBoard){
            clipboard.writeSync(finalText);
            console.log("Copied encoded text to clipboard");
        }
    
        return finalText

    } catch (error) {
        console.log(error);
        return ""
    }

}