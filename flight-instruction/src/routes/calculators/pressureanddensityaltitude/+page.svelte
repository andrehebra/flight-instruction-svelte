<script>
    import { FloatingLabelInput, Heading } from "flowbite-svelte";
	import CalculatorDisplay from "../../components/calculatorDisplay.svelte";

    let indicated;
    let pressure;
    let temperature;
    let pressureAlt;
    let densityAlt

    $: pressureAlt = parseInt(((pressure - 29.92) * 1000) + parseInt(indicated));
    $: densityAlt = parseInt(pressureAlt + (120 * (temperature - 15)));
    
</script>

<CalculatorDisplay>
    <Heading>Pressure and Density Altitude Calculator</Heading>
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Indicated Altitude (ft)" bind:value={indicated} />
    <FloatingLabelInput placeholder=""  style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="Pressure (InHg)" bind:value={pressure} />
    <FloatingLabelInput style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Temperature (C)" bind:value={temperature} />
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Pressure Altitude: {(Number.isInteger(pressureAlt)) ? pressureAlt : 0}</Heading>
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Density Altitude: {(Number.isInteger(densityAlt)) ? densityAlt : 0}</Heading>
</CalculatorDisplay>

