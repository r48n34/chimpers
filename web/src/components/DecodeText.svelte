<script>
// @ts-nocheck

    import toast from 'svelte-french-toast';
    import { stringDataToBuffer } from "chimpers-web"
    import { Textarea, Label, Button } from 'flowbite-svelte' 

    let decodeString = '' // string

    async function decodeStringToFile(){

        if(!decodeString){
            toast.error('Missing input Text decoding text.', {
                position: "top-right"
            })
            return
        }

        let bufferData = stringDataToBuffer(decodeString);

        if(bufferData.length === 0){
            toast.error('No encoded file in target text.', {
                position: "top-right"
            })
            return
        }

        downloadURL(bufferData)
    }

    const downloadURL = (data) => {
        const link = document.createElement('a');
        link.style.display = 'none';
        document.body.appendChild( link );

        const blob = new Blob( [data], { type: '' } );	
        const objectURL = URL.createObjectURL( blob );
        
        link.href = objectURL;
        link.href = URL.createObjectURL( blob );
        link.download = 'data';
        link.click();

        toast.success('Success to download hidden File!', {
            position: "top-right"
        })

    }


</script>

<div>
    <p class="text-2xl dark:text-white text-center">Decoede message</p>

    <Label for="textarea-id" class="mb-2 mt-6">Input message</Label>
    <Textarea 
        id="input-textarea-id" 
        placeholder="Your message" 
        rows="4" 
        name="input-message"
        on:change={ (e) => decodeString = e.target.value}
        bind:decodeString 
    />

    <div class="flex justify-end">
        <Button 
            class="mt-2" 
            gradient 
            color="cyanToBlue" 
            pill={true} 
            on:click={ () => decodeStringToFile() }
        >
            Decode
        </Button>
    </div>

</div>