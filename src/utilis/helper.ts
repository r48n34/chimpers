export function dec2bin(dec:number) {
    let decStr = (dec >>> 0).toString(2);

    while(decStr.length <= 7){
        decStr = "0" + decStr
    }

    return decStr
}