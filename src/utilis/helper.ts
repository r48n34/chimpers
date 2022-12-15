export function dec2bin(dec:number) {
    let decStr = (dec >>> 0).toString(2);

    // Expect a output should be 8 bit e.g.(00110110)
    while(decStr.length <= 7){
        decStr = "0" + decStr
    }

    return decStr
}