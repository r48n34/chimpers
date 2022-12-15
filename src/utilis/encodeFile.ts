import fs from "fs";
import { binToHiddenChar } from "../data/dataChar";
import { dec2bin } from "./helper";

export function encodeFile(file_path: string): string[] {
    const data = fs.readFileSync(file_path, {flag:'r'});

    // start
    let finalArray:string[] = [] 

    // Encode
    for(let v of data){
 
        const binStr = dec2bin(v);

        for(let i = 0; i < 7; i += 2){
            let code = binStr[i] + binStr[i + 1]
            finalArray.push(binToHiddenChar[code])
        }
           
    }

    return finalArray
}