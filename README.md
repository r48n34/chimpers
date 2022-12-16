# chimpers  
Hide files / zip / images in text by hidden format in nodejs

## Install 
```bash
npm i chimpers
yarn add chimpers
```

## Notices
1. Hidden file is not encrypted currently. 
2. Do not attempt to hide a large size file.
3. Single file than smaller than 4kb is recommended.

## Usage
```ts
import { addFileInText, decodeFile } from "chimpers"
import path from "path";

( async () => {

    const filePath = path.join(__dirname, "yo.zip")

    // Add files to text
    const text = addFileInText(
        "hello mate I am peter.", // Text to add files
        filePath,                 // Your txt / zip / file ... locations
        { copyToBoard: true }     // Will regarding text copy to your clipboard
    );
    
    // Decode regarding text
    await decodeFile(
        text,          // encoded text string
        "hello",       // output file name
        __dirname      // output file path
    );

})()
```

## Utilis
```ts
// Hide files in text
function addFileInText(
    text: string,         //        
    file_path: string,
    option?: AddFileInTextOptions
): string 

interface AddFileInTextOptions{
    copyToBoard?: boolean
}
```

```ts
// Decode hidden text and output a file
async function decodeFile(
    encodedText: string, 
    outputFileName: string = "decodedFile", 
    outputPath: string = process.cwd()
): Promise<Uint8Array> 
```

## Web script
```html
<script src="https://cdn.jsdelivr.net/gh/r48n34/chimpers/webOutput/chimper.min.js"></script>

// only these two functions is provided in web

// decode whole encoded string and extract the hidden file Uint8Array
stringDataToBuffer(encodedText: string): Uint8Array

// encode a file to hidden string array
encodeFile(data: Buffer): string[]
```

Check [here](https://github.com/r48n34/chimpers/blob/main/web/index.html) to see how to use in web environment.