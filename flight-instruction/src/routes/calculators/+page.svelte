<script>
	import NavBar from "../components/NavBar.svelte";
    import {  Heading, P, A, Mark, Secondary, Card } from 'flowbite-svelte';
    import { Input, Label, Helper } from 'flowbite-svelte';

</script>

<NavBar />
<Card href='/calculators/pressureanddensityaltitude' >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pressure and Density Altitude</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
      Calculate the Pressure and density altitude from the indicated altitude and altimeter setting and temperature

    </p>
</Card>