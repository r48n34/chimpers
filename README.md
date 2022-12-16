# chimpers  
Hide files / zip / images in text by hidden format

## Install 
```bash
npm i chimpers
yarn add chimpers
```

## Usage
```ts
import { addFileInText, decodeFile } from "chimpers"
import path from "path";

( async () => {

    const filePath = path.join(__dirname, "yo.txt")

    // Add files to text
    let text = addFileInText(
        "hello mate I am peter.",   // Text to add files
        filePath,                   // Your txt / zip / file ... locations
        { copyToBoard: false }      // Will regarding text copy to your clipboard
    );
    
    // Decode regarding text
    await decodeFile(
        text,            // encoded text string
        "hello",         // output file name
        __dirname        // output file path
    );

})()
```

## Web script
```html

```