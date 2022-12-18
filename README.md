# chimpers  
A nodejs library that Hide files / zip / images in text by hidden format.

[Web Demo](https://chimpers-sigma.vercel.app/) | [npm](https://www.npmjs.com/package/chimpers) | [Github](https://github.com/r48n34/chimpers)

## Install 
```bash
npm i chimpers
yarn add chimpers
```

## Notices
1. Hidden file is not encrypted currently. 
2. Do not attempt to hide large size file.
3. Single file that smaller than 4kb is recommended.

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
        { copyToBoard: false }     // Will regarding text copy to your clipboard
    );
    
    // Decode regarding text
    await decodeFile(
        text,          // Encoded text string
        "hello",       // Output file name
        __dirname      // Output file path
    );

})()
```

## Utilis
```ts
// Hide files in text
function addFileInText(
    text: string,                 
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
<script src="https://cdn.jsdelivr.net/gh/r48n34/chimpers/webOutput/chimpers.min.js"></script>
```

```js
// only these two functions is provided in web script

// decode whole encoded string and extract the hidden file Uint8Array
champers.stringDataToBuffer(encodedText: string): Uint8Array

// encode a file to hidden string array
champers.encodeFile(data: Buffer): string[]
```

Check [here](https://github.com/r48n34/chimpers/blob/main/web/index.html) to see how to use in web environment.

## Roadmap
- [ ] Encrypt passowrd options
- [ ] Better compress size
- [ ] Web npm packages