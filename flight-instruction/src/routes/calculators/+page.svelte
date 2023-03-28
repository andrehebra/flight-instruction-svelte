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
<Card href='/calculators/crosswind' >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Crosswind, Headwind/Tailwind</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
      Calculate the crosswind and headwind component from wind direction and wind speed compared to a given heading</p>
</Card>
<Card href='/calculators/landingdistance' >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cessna 172S Short Field Landing Distance</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
      Calculate the landing distance of a short field landing in a Cessna 172S based on the information in the POH</p>
</Card>