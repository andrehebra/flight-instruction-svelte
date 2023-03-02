<script>
    import {  Heading, P, A, Mark, Secondary, Listgroup, MegaMenu } from 'flowbite-svelte'

    export let contents;
</script>

{#each contents as widget}
    {#if widget.widget == 'header'}
        <Heading tag="h1">{widget.text}</Heading>
        <div class="padding"></div>
    {:else if widget.widget == 'text'}
        <P size="base">{widget.text}</P>
    {:else if widget.widget == 'list'}
        <div class="center">
            <Listgroup items={widget.items} let:item class="w-48">
                {item}
            </Listgroup>
        </div>
    {:else if widget.widget == 'megalist'}
        <MegaMenu items={widget.items} let:item open={true}>
            {item}
        </MegaMenu>
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
</style>
    