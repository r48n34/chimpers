import path from "path";
import fs from "fs";
import { addFileInText } from "../src/utilis/addFileInText"

describe("addFileInText function testing", () => {

    const filePath = path.join(__dirname, "..", "test-data" , "hello.zip");
    const fileData = fs.readFileSync(filePath);

    test('addFileInText no text input', () => {

        expect(() => {
            addFileInText("", fileData, { copyToBoard: false });
        }).toThrow(new Error("addFileInText function missing text input in params 'text'."))
        
    })

    test('addFileInText no fileData input', () => {

        expect(() => {
            addFileInText("hello mate", null as any, { copyToBoard: false });  
        }).toThrow(new Error("addFileInText function missing fileData input in params 'fileData'."))
   
    })

})
