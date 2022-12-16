const binToHiddenChar = {
    "st" : "\u2063", // not in use
    "00" : "\u200C", // 8204
    "01" : "\u200D", // 8205
    "10" : "\u2060", // 8288
    "11" : "\u2062", // 8290
    "en" : "\u2064" // not in use
}

const hiddenCharTobin = {
    "8204" : "00", 
    "8205" : "01", 
    "8288" : "10", 
    "8290" : "11",
}

const hiddenCharTobinNum = [8204, 8205, 8288, 8290]

// dec: number
function dec2bin(dec) {
    let decStr = (dec >>> 0).toString(2);

    // Expect a output should be 8 bit e.g.(00110110)
    while(decStr.length <= 7){
        decStr = "0" + decStr
    }

    return decStr
}

// data: Buffer
function encodeFile(data) {

    let finalArray = [] 

    // Encode
    for(let v of data){
 
        const binStr = dec2bin(v);

        for(let i = 0; i < 7; i += 2){
            const code = binStr[i] + binStr[i + 1]
            finalArray.push(binToHiddenChar[code])
        }
           
    }

    return finalArray // string[]
}

// encodedText: string
function stringDataToBuffer(encodedText){
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