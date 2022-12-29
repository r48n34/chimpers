<script>
    import "../app.postcss";
    import { Button } from 'flowbite-svelte';
    import { DarkMode } from "flowbite-svelte";
    import { Toaster } from 'svelte-french-toast';
    import { Github, CloudDownload } from 'svelte-bootstrap-svg-icons'; // DatabaseFillLock

    import EncodeFile from "../components/EncodeFile.svelte";
    import DecodeText from "../components/DecodeText.svelte";

    let btnClass =
        "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2";
</script>

<div class="container">
    <Toaster />

    <div class="flex justify-between mt-2">
        <div>
            <Button 
                size="xs" 
                gradient 
                color="cyanToBlue" 
                class="mr-4 mt-2" 
                on:click={ () => window.open("https://www.npmjs.com/package/chimpers",'_blank')}
            >
                <CloudDownload size="12" class=" dark:text-white"/>
            </Button>
            <Button
                size="xs" 
                gradient 
                color="cyanToBlue" 
                class="mr-4 mt-2" 
                on:click={ () => window.open("https://github.com/r48n34/chimpers",'_blank')}
            >
                <Github size="12" class="dark:text-white"/>
            </Button>
        </div>
        
        <DarkMode {btnClass} />
    </div>

    <div style="text-align: center;">
        <p class="text-5xl dark:text-white">chimpers</p>
        <p class="text-2xl dark:text-white">Hide files / zip / images in text by hidden format</p>
    </div>

    <br />

    <EncodeFile />
    <DecodeText />
    <div class="grid grid-cols-2 gap-4">
    </div>

    <div class="grid grid-cols-2 gap-4">
    </div>
</div>

<!-- <slot /> -->
