<script>
    import CalculatorDisplay from "../../components/calculatorDisplay.svelte";
    import { Heading, FloatingLabelInput } from "flowbite-svelte";

    let temperature, dewpoint, indicatedAlt;

    let cloudbaseMSL, cloudbaseAGL, freezinglevelMSL, freezinglevelAGL;

    let tempSpread;

    $: tempSpread = temperature - dewpoint;
    $: cloudbaseAGL = Math.round(1000 * tempSpread / 2.44);
    $: cloudbaseMSL = Math.round(parseInt(cloudbaseAGL) + (Number.isInteger(parseInt(indicatedAlt)) ? parseInt(indicatedAlt) : 0));

    $: freezinglevelAGL = Math.round((temperature) / 2.44 * 1000);
    $: freezinglevelMSL = Math.round(parseInt(freezinglevelAGL) + (Number.isInteger(parseInt(indicatedAlt)) ? parseInt(indicatedAlt) : 0));




</script>

<CalculatorDisplay>
    <Heading>Cloud Base and Freezing Level Calculator</Heading>
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Outside Air Temperature (C)" bind:value={temperature} />
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Dew Point (C)" bind:value={dewpoint} />
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Indicated Altitude (feet)" bind:value={indicatedAlt} />

    <Heading tag="h2" customSize="text-4xl font-extrabold ">Cloud Base (MSL): {cloudbaseMSL}</Heading>
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Freezing Level (MSL): {freezinglevelMSL}</Heading>
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Cloud Base (AGL): {cloudbaseAGL}</Heading>
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Freezing Level (AGL): {freezinglevelAGL}</Heading>
</CalculatorDisplay>