<script>
    import NavBar from "../../components/NavBar.svelte";
    import { FloatingLabelInput, Heading } from "flowbite-svelte";
	import CalculatorDisplay from "../../components/calculatorDisplay.svelte";

    let direction, speed, heading;

    let crosswind, headwind;

    $: crosswind = parseInt(Math.abs(Math.round(speed * Math.sin((parseInt(direction) - parseInt(heading)) * 0.017453)* 10) / 10));
    $: headwind = parseInt((Math.round(speed * Math.cos((parseInt(direction) - parseInt(heading)) * 0.017453) * 10 ) / 10));



</script>

<CalculatorDisplay>
    <Heading>Crosswind and Headwind/Tailwind Calculator</Heading>
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Wind direction" bind:value={direction} />
    <FloatingLabelInput placeholder=""  style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="Wind speed (Kts)" bind:value={speed} />
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Heading" bind:value={heading} />
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Crosswind (Kts): {(Number.isInteger(crosswind) ? crosswind : 0)}</Heading>
    <Heading tag="h2" customSize="text-4xl font-extrabold ">{#if headwind >=0} Headwind (Kts): {Number.isInteger(headwind) ? headwind : 0} {:else} Tailwind (Kts): {Number.isInteger(headwind) ? -headwind : 0}{/if}</Heading>
</CalculatorDisplay>

