<script>
    import CalculatorDisplay from "../../components/calculatorDisplay.svelte";
    import { Heading, FloatingLabelInput } from "flowbite-svelte";

    let groundSpeed;
    let elevation;
    let pivotalAltitude, pivotalAGL;
    $: pivotalAltitude = Math.round((groundSpeed * groundSpeed) / 11.3);
    $: pivotalAGL = parseInt(pivotalAltitude) + parseInt(elevation);
</script>

<CalculatorDisplay>
    <Heading>Pivotal Altitude Calculator</Heading>
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Groundspeed (Kts)" bind:value={groundSpeed} />
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Ground Elevation (feet)" bind:value={elevation} />

    <Heading tag="h2" customSize="text-4xl font-extrabold ">Pivotal Altitude (AGL): {pivotalAltitude}</Heading>
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Pivotal Altitude (MSL): {pivotalAGL}</Heading>
</CalculatorDisplay>