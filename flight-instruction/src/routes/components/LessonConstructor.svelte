<script>
    import {  Heading, P, A, Mark, Secondary } from 'flowbite-svelte'

    export let contents;
</script>

{#each contents as widget}
    {#if widget.widget == 'header'}
        <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">{widget.text}</Heading>
    {:else if widget.widget == 'text'}
        <P size="base">{widget.text}</P>
    {/if}
{/each}