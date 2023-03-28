<script>
    import CalculatorDisplay from "../../components/calculatorDisplay.svelte";
    import { Heading, FloatingLabelInput } from "flowbite-svelte";

    let groundSpeed;
    let elevation = 0;
    let pivotalAltitude, pivotalAGL;
    $: pivotalAltitude = Math.round((groundSpeed * groundSpeed) / 11.3);
    $: pivotalAGL = pivotalAltitude + parseInt(elevation);
</script>

<CalculatorDisplay>
    <Heading>Pivotal Altitude Calculator</Heading>
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Groundspeed (Kts)" bind:value={groundSpeed} />
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Ground Elevation (feet)" bind:value={elevation} />

    <Heading>Pivotal Altitude (AGL): {pivotalAltitude}</Heading>
    <Heading>Pivotal Altitude (MSL): {pivotalAGL}</Heading>
</CalculatorDisplay>