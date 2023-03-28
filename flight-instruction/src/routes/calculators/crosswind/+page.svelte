<script>
    import NavBar from "../../components/NavBar.svelte";
    import { FloatingLabelInput, Heading } from "flowbite-svelte";

    let direction = 360, speed = 10, heading = 130;

    let crosswind, headwind;

    $: crosswind = Math.abs(Math.round(speed * Math.sin((parseInt(direction) - parseInt(heading)) * 0.017453)* 10) / 10);
    $: headwind = (Math.round(speed * Math.cos((parseInt(direction) - parseInt(heading)) * 0.017453) * 10 ) / 10);



</script>

<NavBar />

<div class="holder">
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Wind direction" bind:value={direction} />
    <FloatingLabelInput placeholder=""  style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="Wind speed (Kts)" bind:value={speed} />
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Heading" bind:value={heading} />
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Crosswind (Kts): {crosswind}</Heading>
    <Heading tag="h2" customSize="text-4xl font-extrabold ">{#if headwind >=0} Headwind (Kts): {headwind} {:else} Tailwind (Kts): {headwind * -1}{/if}</Heading>
</div>

<style>
    .holder {
        padding: 20px;
        display: flex;
        flex-direction: column;
        max-width: 500px;
        gap: 15px;
        
    }
</style>