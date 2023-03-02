<script>
    import {  Heading, P, A, Mark, Secondary } from 'flowbite-svelte'

    export let contents;
</script>

{#each contents as widget}
    {#if widget.widget == 'header'}
        <Heading tag="h1">{widget.text}</Heading>
        <div class="padding"></div>
    {:else if widget.widget == 'text'}
        <P size="base">{widget.text}</P>
    {/if}
    <div class="padding"></div>
{/each}

<style>
    .padding {
        min-height: 10px;
    }
</style>
    