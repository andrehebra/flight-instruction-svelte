<script>
    import NavBar from "../../components/NavBar.svelte";
    import { FloatingLabelInput } from "flowbite-svelte";

    let indicated = 0;
    let pressure = 29.92;
    let temperature = 15;
    let pressureAlt;
    let densityAlt

    function calculate() {
        pressureAlt = (pressure - 29.92) * 1000 + indicated;
        densityAlt = pressureAlt + (120 * (temperature - 15));
    }
    
</script>

<NavBar />

<FloatingLabelInput style="outlined" on:change={() => calculate()} id="floating_outlined" name="floating_outlined" type="text" label="Indicated Altitude (ft)" bind:value={indicated} />
<FloatingLabelInput placeholder="" on:change={() => calculate()} style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="Pressure (InHg)" bind:value={pressure} />
<FloatingLabelInput style="outlined" on:change={() => calculate()} id="floating_outlined" name="floating_outlined" type="text" label="Temperature (C)" bind:value={temperature} />
<h1>{pressureAlt}</h1>
<h1>{densityAlt}</h1>