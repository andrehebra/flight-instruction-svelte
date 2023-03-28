<script>
    import CalculatorDisplay from "../../components/calculatorDisplay.svelte";
    import { Heading, FloatingLabelInput } from "flowbite-svelte";

    let temperature, dewpoint, indicatedAlt;

    let cloudbaseMSL, cloudbaseAGL, freezinglevelMSL, freezinglevelAGL;

    let tempSpread;

    $: tempSpread = temperature - dewpoint;




</script>

<CalculatorDisplay>
    <Heading>Cloud Base and Freezing Level Calculator</Heading>
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Outside Air Temperature (C)" bind:value={temperature} />
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Dew Point (C)" bind:value={dewpoint} />
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Indicated Altitude (feet)" bind:value={indicatedAlt} />

    <Heading>Cloud Base (MSL): {cloudbaseMSL}</Heading>
    <Heading>Freezing Level (MSL): {freezinglevelMSL}</Heading>
</CalculatorDisplay>