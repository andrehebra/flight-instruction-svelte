<script>
    import NavBar from "../../components/NavBar.svelte";
    import { FloatingLabelInput, Heading } from "flowbite-svelte";

    let indicated = 0;
    let pressure = 29.92;
    let temperature = 15;
    let pressureAlt;
    let densityAlt

    $: pressureAlt = parseInt((pressure - 29.92) * 1000 + indicated);
    $: densityAlt = parseInt(pressureAlt + (120 * (temperature - 15)));
    
</script>

<NavBar />

<div class="holder">
    <FloatingLabelInput style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Indicated Altitude (ft)" bind:value={indicated} />
    <FloatingLabelInput placeholder=""  style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="Pressure (InHg)" bind:value={pressure} />
    <FloatingLabelInput style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Temperature (C)" bind:value={temperature} />
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Pressure Altitude: {pressureAlt}</Heading>
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Density Altitude: {densityAlt}</Heading>
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
