<script>
    import {  Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion } from 'flowbite-svelte'

    export let contents;
</script>

{#each contents as widget}
    {#if widget.widget == 'header'}
        <Heading tag="h1">{widget.text}</Heading>
        <div class="padding"></div>
    {:else if widget.widget == 'header2'}
        <Heading tag="h3">{widget.text}</Heading>
        <div class="padding"></div>
    {:else if widget.widget == 'header3'}
        <Heading tag="h4">{widget.text}</Heading>
        <div class="padding"></div>
    {:else if widget.widget == 'text'}
        <P size="base">{widget.text}</P>
    {:else if widget.widget == 'list'}
        <div class="center">
            <Listgroup items={widget.items} let:item class="w-48">
                {item}
            </Listgroup>
        </div>
    {:else if widget.widget == 'accordion'}
        <Accordion
            activeClasses="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
            inactiveClasses="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800">
            {#each widget.items as item}
                <AccordionItem>
                    <span slot="header">{item.title}</span>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">{item.text}</p>
                </AccordionItem>
            {/each}
        </Accordion>
    {:else if widget.widget == 'image'}
        <div class="image center">
            <Img size="max-w-md" src={widget.src} caption={widget.caption}/>
        </div>
    {:else if widget.widget == 'youtube'}
        <div class="center">
            <iframe width="560" height="315" src={widget.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
    {/if}
    <div class="padding"></div>
{/each}

<style>
    .padding {
        min-height: 10px;
    }

    .center {
        display: flex;
        align-items: center;
		justify-content: center;
    }

    .image {
    }
</style>
    