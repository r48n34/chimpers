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