<script>
    import CalculatorDisplay from "../../components/calculatorDisplay.svelte";

    import { Heading, FloatingLabelInput, Hr } from "flowbite-svelte";

    import { radians, degrees } from "radians";

    let tas, bankAngle;
    let standardRate, halfStandardRate, calculatedRate;

    function calculateStandard() {
        standardRate = Math.round(radians(Math.atan(tas*0.00274977)) * 100 ) / 100;
        halfStandardRate = Math.round(radians(Math.atan(tas*0.00137489)) * 100) / 100;
    }

    function calculateRate() {
        calculatedRate = Math.round((Math.tan(degrees(bankAngle)) * (1091 / tas))* 100) / 100;
    }

    $: tas, calculateStandard();
    $: tas, bankAngle, calculateRate();
</script>

<CalculatorDisplay>
    <Heading>Bank Angle for Standard Rate Turn Calculator</Heading>
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="True Airspeed (Kts)" bind:value={tas} />

    <Heading tag="h2" customSize="text-4xl font-extrabold ">Bank angle for standard rate turn: {standardRate}</Heading>
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Bank angle for 1/2 standard rate turn: {halfStandardRate}</Heading>

    <Hr class="my-8" height="h-px" />

    <Heading>Rate of Turn From Bank Angle</Heading>
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="True Airspeed (Kts)" bind:value={tas} />
    <FloatingLabelInput placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Bank Angle" bind:value={bankAngle} />
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Rate of Turn (deg/sec): {(Number.isNaN(calculatedRate)) ? 0 : calculatedRate}</Heading>

</CalculatorDisplay>


