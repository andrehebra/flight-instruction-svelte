<script>
    import CalculatorDisplay from "../../components/calculatorDisplay.svelte";
    import { Heading, FloatingLabelInput } from "flowbite-svelte";

    let pressure;

    let mph = 0, kts = 0;

    $: kts = Math.round(9 * Math.sqrt(pressure));
    $: mph = Math.round(9 * Math.sqrt(pressure) * 1.15078);


</script>

<CalculatorDisplay>
    <Heading>Hydroplane Speed Calculator</Heading>
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Tire Pressure (PSI)" bind:value={pressure} />
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Hydroplane Speed (Kts): {kts}</Heading>
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Hydroplane Speed (mph): {mph}</Heading>
</CalculatorDisplay>