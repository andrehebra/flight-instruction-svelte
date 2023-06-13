

<Card href={link} >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    {#if sub != ""}
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
      {sub}
    </p>
    {/if}
</Card>

<script>
    import { Card } from "flowbite-svelte";

    export let title;
    export let sub;
    export let link;
</script>