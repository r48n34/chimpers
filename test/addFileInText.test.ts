import path from "path";
import { addFileInText } from "../src/utilis/addFileInText"

describe("addFileInText function testing", () => {

    const filePath = path.join(__dirname, "..", "test-data" , "hello.zip")

    test('addFileInText normal text', () => {
        let text = addFileInText("hello mate I am peter.", filePath, { copyToBoard: false });
        
        expect(text).toBe("hello‍‍‌‌‍‌⁠⁢‌‌‌⁢‌‌‍‌‌‍‍‌‌‌‌‌‌‌‌‍‌‌‌‌‌‌⁠‌‌‌‌‌⁠‍‌⁠⁠⁠⁠‍⁠‌⁢⁢‍‍‍‍⁠‍‌⁢‍‌‍‌‌⁠⁠⁠‍⁠⁠‌‌⁠⁠⁢‌‌‌‌‌‌‌‌‌‌‌‌‌⁠‍‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌⁠‍‌‌‌‌‌‌‌‌‌‌‌‌‍⁠⁠‌‍⁠‍‍‍⁠⁢‌‍⁠⁢‌‍⁠⁢⁢‌⁠⁢⁠‍⁢‍‌‍⁢⁠‌‍⁢‍‌‍‌⁠⁢⁢‌‌‌⁢‍‍⁠‌‍‌⁢⁠⁠⁠⁢‍⁠‌‌‌⁢‍⁢⁠‍⁢‌‍⁠⁠⁢⁠‌‌‌⁠‍‍‍⁠‌⁢⁠⁢‍‍⁢‌‌‍‍⁠‌⁠⁢‍‍‍‍⁢‍⁠‌⁢⁠⁠‌‍‌⁢‍⁢⁢‍⁠‌‍‌⁠‍‍⁢‌⁢‌⁢‍‍⁢‌⁢‌‍⁠‌‍‍‌‌⁢‌‍⁠⁢‍⁢⁢‌‍‌⁠⁢‍⁠‌‍⁢‍‍⁢‌⁠⁠‌‌⁠‍‌⁢⁠⁠‌⁢⁠‌‍‍‍‌⁢⁠‌⁢‌‍‌⁢⁢⁢⁠⁢⁠⁠⁢‌⁠⁢⁢⁠‍‌⁠‍⁢‌‍‌‍‍‌‌‍‌⁠⁢‌‌‌‍‌‌‌⁠‌⁢⁢⁢‌‌‌‌‌‍‍‌‌‌‌‌‌‌‌‍‌‌‌‌‌‌⁠‌‌‌‌‌⁠‍‌⁠⁠⁠⁠‍⁠‌⁢⁢‍‍‍‍⁠‍‌⁢‍‌‍‌‌⁠⁠⁠‍⁠⁠‌‌⁠⁠⁢‌‌‌‌‌‌‌‌‌‌‌‌‌⁠‍‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌⁠‍‌‌‌‌‌⁠‍‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌⁠‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‍⁠⁠‌‍⁠‍‍‍⁠⁢‌‍⁠⁢‌‍⁠⁢⁢‌⁠⁢⁠‍⁢‍‌‍⁢⁠‌‍⁢‍‌‌‌⁠⁠‌‌‌‌‌⁠‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‍‌‌‌‌‌‍⁠‌‌‌‌‌⁢⁠⁠⁠⁢‍⁢‌⁢⁢‌‌⁢⁠‍‍⁠‌‍⁠‌‍‌‌⁢‍⁠‍‌‌‌‍⁠⁢⁠‌⁠⁢‍‌‌⁢‌⁠‍‍‌⁠⁠‌⁠⁠‌‍‌‌⁢‍⁠‍‌‌‌‍⁢⁠⁠⁠⁢‍⁢‌⁢⁢‌‌⁢⁠‍‍⁠‌‍⁠‌‍‌‌⁢‍⁠‍‌‌‌‍‍‍‌‌‍‌⁠⁢‌‌‍‍‌‌‍⁠‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‍‌‌‌‌‌‌‌‍‌‌‌‌‍‍⁠⁢‌‌‌‌‌‌‌‌‌‌‌‌‍‍‌⁠‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ mate I am peter.");
    })

    test('addFileInText no text input', () => {

        expect(() => {
            addFileInText("", filePath, { copyToBoard: false });
        }).toThrow(new Error("addFileInText function missing text input in params 'text'."))
        
    })

    test('addFileInText no text input', () => {

        expect(() => {
            addFileInText("hello mate", "", { copyToBoard: false });
        }).toThrow(new Error("addFileInText function missing file_path input in params 'file_path'."))  
   
    })

})
