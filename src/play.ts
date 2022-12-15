import fs from "fs";
import clipboard from 'clipboardy';

export let binToHiddenChar = {
    "st" : "\u2063", // not in use
    "00" : "\u200C", // 8204
    "01" : "\u200D", // 8205
    "10" : "\u2060", // 8288
    "11" : "\u2062", // 8290
    "en" : "\u2064" // not in use
}

export let HiddenCharTobin = {
    "8204" : "00", 
    "8205" : "01", 
    "8288" : "10", 
    "8290" : "11",
}

function dec2bin(dec:number) {
    let decStr = (dec >>> 0).toString(2);

    while(decStr.length <= 7){
        decStr = "0" + decStr
    }

    return decStr
}

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

export function decodeFile(text: string){
    let finalArray = text.split(" ")[0].split("").filter( v => v.charCodeAt(0) >= 8000)
    
    let bufferArr = [];

    // Decode
    for(let i = 0; i < finalArray.length; i += 4){
        const codeBin = HiddenCharTobin[finalArray[i].charCodeAt(0)]
        + HiddenCharTobin[finalArray[i + 1].charCodeAt(0)]
        + HiddenCharTobin[finalArray[i + 2].charCodeAt(0)]
        + HiddenCharTobin[finalArray[i + 3].charCodeAt(0)]

        // let a = parseInt(codeBin, 2)
        bufferArr.push(parseInt(codeBin, 2))
    }

    console.log(bufferArr);
    let aa = new Uint8Array(bufferArr)
    
    fs.writeFileSync("yolo.txt", aa )

}

export function addFileToText(text: string){
    let textArr = text.split(" ");

    let hiddenDataArr = encodeFile("D:\\chimpers\\hello.txt");
    textArr[0] += hiddenDataArr.join("")

    const finalText = textArr.join(" ")
    
    clipboard.writeSync(finalText);


    // decodeFile(finalText);

    return finalText
}

// addFileToText("Hello mate");
decodeFile("Hello‍⁠‍‌‍⁠‍⁠‍⁠‍⁢‍⁠‍⁠‍⁠‍‌‍⁢‌⁢‍⁠‍⁢‌‌⁢‍‌‌⁠⁠‍⁠‍‌‍⁠‍⁠‍⁠‍⁢‍⁠‍⁠‍⁠‍‌‍⁢‌⁢‍⁠‍⁢‍⁠‍⁢‍⁠‍⁠‍⁠‍‌‍⁠‍⁢‍⁠‍⁠‌‌⁢‍‌‌⁠⁠‍⁠‍⁠‍⁠‍‌‍⁠‍⁢‍⁠‍⁠‍⁠‍‌‍⁠‍⁢‍⁠‍⁠‍⁠‍‌‌‌⁢‍‌‌⁠⁠‍⁠‍⁢‍⁠‍⁠‍⁠‍‌ mate");