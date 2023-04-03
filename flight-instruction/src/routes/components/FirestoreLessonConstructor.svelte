<script>
    import NavBar from "./NavBar.svelte"
    import {  List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
    
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
            {:else if item[0] == "heading2"}
                <Heading tag="h2">{item[1]}</Heading>
            {:else if item[0] == "heading3"}
                <Heading tag="h5">{item[1]}</Heading>
            {:else if item[0] == "text"}
                <P>{item[1]}</P>
            {:else if item[0] == "image"}
                <div class="image">
                    <Img size="max-w-md" src={item[1]}></Img>
                </div>
            {:else if item[0] == "list"}
                <List ulClass='max-w' tag="ul" class="space-y-1">
                    {#each item[1] as li}
                        <Li>{li}</Li>
                    {/each}
                </List>
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
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contents {
        max-width: 800px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .image {
        display: flex;
        align-items: center;
		justify-content: center;
    }
</style>
