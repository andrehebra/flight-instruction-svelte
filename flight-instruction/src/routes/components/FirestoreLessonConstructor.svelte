<script>
    import NavBar from "./NavBar.svelte"
    import {  Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
    
    export let contents;
</script>


<NavBar></NavBar>

<div class="holder">
    <div class="contents">
        {#if contents[0] == "loading"}
            <Heading></Heading>
        {:else}
        {#each contents as item}
            {#if item[0] == "heading"}
                <Heading>{item[1]}</Heading>
            {:else if item[0] == "text"}
                <P>{item[1]}</P>
            {:else if item[0] == 'accordion'}
                <Accordion
                    activeClasses="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
                    inactiveClasses="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800">
                    {#each item[1] as item}
                        <AccordionItem>
                            <span slot="header">{item.title}</span>
                            <p class="mb-2 text-gray-500 dark:text-gray-400">{item.text}</p>
                        </AccordionItem>
                    {/each}
                </Accordion>
            {/if}
        {/each}
        {/if}
    </div>
</div>


<style>
    .holder {
        max-width: 800px;
    }
    .contents {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
</style>
