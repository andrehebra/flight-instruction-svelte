<script>
    import NavBar from "./NavBar.svelte"
    import CalculatorDisplay from "./calculatorDisplay.svelte";
    import {Heading, FloatingLabelInput} from "flowbite-svelte";
    import { getContext, setContext } from "svelte";

    export let first, second;
    let firstval = 0, secondval;

    const { convert } = getContext('convert');
    let currentChange = 0;

    function changeCurrent(number) {
        if (number == 1) {
            currentChange = 1;
        } else if (number == 2) {
            currentChange = 2;
        }
        console.log(currentChange);
    }

    function handleConversion(place) {
        if (place == 1) {
            if (currentChange == 1) {
                secondval = Math.round(convert(firstval, 1) * 100) / 100;
            }
            
        } else if (place == 2) {
            if (currentChange == 2) {
                firstval = Math.round(convert(secondval, 2) * 100) / 100;
            }
        }
    }

    $: firstval, handleConversion(1);
    $: secondval, handleConversion(2);
    $: currentChange

    firstval = 0;
    

</script>

<CalculatorDisplay>
    <Heading>Convert {first} and {second}</Heading>
    <Heading tag="h2" customSize="text-4xl font-extrabold ">{first}</Heading>
    <FloatingLabelInput on:focus={() => currentChange = 1} placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" bind:value={firstval} />

    <Heading tag="h2" customSize="text-4xl font-extrabold ">{second}</Heading>
    <FloatingLabelInput on:focus={() => currentChange = 2} placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" bind:value={secondval} />

</CalculatorDisplay>
