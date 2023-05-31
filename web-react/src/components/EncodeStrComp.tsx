import { FileInput, Grid, Group, Button, Textarea } from "@mantine/core";
import { useForm } from '@mantine/form';
import { addFileInText } from "chimpers-web"
import { useState } from "react";
import { toast } from "react-hot-toast";

interface FormObject {
    inputString: string,
    fileInput: File | null,
}

function EncodeStrComp(){

    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ outputString, setOutputString ] = useState<string>("");

    const form = useForm<FormObject>({
        initialValues: {
            inputString: '',
            fileInput: null,
        },
        validate: {
            inputString: (value) => (
                !value 
                ? 'Missing string'
                : !value.includes(" ")
                ? "Text should contain at least one spacing"
                : null
            ),
            fileInput: (value) => (
                !value 
                ? 'Missing file'
                : value.size / 1024 / 1024 >= 1 // in MiB 
                ? 'file too big'
                : null
            ),
        }
    });

    async function toEncodedString(values: FormObject){
        setIsLoading(true)

        const encodedString: string = await addFileInText(
            values.inputString,
            values.fileInput as File
        );

        setOutputString(encodedString);

        toast.success("Enjoy your string.", {
            position: "top-right"
        });
        setIsLoading(false)
    }

    async function copyText(){

        try {
            await navigator.clipboard.writeText(outputString)
                
            toast.success('Success to copy encoded text!', {
                position: "top-right"
            })
        } 
        catch (error) {
            console.log(error);

            toast.error('Failed to copy encoded text!', {
                position: "top-right"
            })
        }
    
    }

    return (
        <>
        <Grid>
        <Grid.Col md={6}>
            <form onSubmit={form.onSubmit((values) => toEncodedString(values))}>
            <Textarea
                placeholder="inputString"
                label="inputString"
                withAsterisk
                {...form.getInputProps('inputString')}
            />

            <FileInput
                placeholder="Pick file"
                label="Your resume"
                withAsterisk
                {...form.getInputProps('fileInput')}
            />

            <Group position="right" mt="md">
                <Button type="submit" variant="light" loading={isLoading}>Submit</Button>
            </Group>

            </form>
        </Grid.Col>

        <Grid.Col md={6}>

            <Textarea
                placeholder="outputString"
                label="outputString"
                withAsterisk
                value={outputString}
            />

            <Group position="right" mt="md">
                <Button variant="light" onClick={ () => copyText() }>Copy</Button>
            </Group>

        </Grid.Col>
        </Grid>
        </>
    )
}
    
export default EncodeStrComp
