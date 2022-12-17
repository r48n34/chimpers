class champers {

    constructor() {}

    static binToHiddenCharConvert(char){
        const binToHiddenChar = {
            "st" : "\u2063", // not in use
            "00" : "\u200C", // 8204
            "01" : "\u200D", // 8205
            "10" : "\u2060", // 8288
            "11" : "\u2062", // 8290
            "en" : "\u2064" // not in use
        }

        return binToHiddenChar[char]
    }

    static hiddenCharTobinConvert(char){
        const hiddenCharTobin = {
            "8204" : "00", 
            "8205" : "01", 
            "8288" : "10", 
            "8290" : "11",
        }

        return hiddenCharTobin[char]
    }

    // encodedText: string
    static stringDataToBuffer(encodedText){
        let finalArray = encodedText.split(" ")[0]
            .split("")
            .filter( v => [8204, 8205, 8288, 8290].indexOf(v.charCodeAt(0)) >= 0 );
        
        let bufferArr = [];

        // Decode
        for(let i = 0; i < finalArray.length; i += 4){
            const codeBin = this.hiddenCharTobinConvert(finalArray[i].charCodeAt(0))
            + this.hiddenCharTobinConvert(finalArray[i + 1].charCodeAt(0))
            + this.hiddenCharTobinConvert(finalArray[i + 2].charCodeAt(0))
            + this.hiddenCharTobinConvert(finalArray[i + 3].charCodeAt(0))

            bufferArr.push(parseInt(codeBin, 2));
        }

        return new Uint8Array(bufferArr)
    }

    // dec: number
    static dec2bin(dec) {
        let decStr = (dec >>> 0).toString(2);

        // Expect a output should be 8 bit e.g.(00110110)
        while(decStr.length <= 7){
            decStr = "0" + decStr
        }

        return decStr
    }

    // data: Buffer
    static encodeFile(data) {

        let finalArray = [] // string[]

        // Encode
        for(let v of data){
    
            const binStr = this.dec2bin(v);

            for(let i = 0; i < 7; i += 2){
                const code = binStr[i] + binStr[i + 1]
                finalArray.push(this.binToHiddenCharConvert(code))
            }
            
        }

        return finalArray
    }

}
