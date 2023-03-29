<script>
	import NavBar from "../components/NavBar.svelte";
    import {  Heading, P, A, Mark, Secondary, Card } from 'flowbite-svelte';
    import { Input, Label, Helper } from 'flowbite-svelte';

    let calculatorroute = '/calculators/conversion/';
</script>

<NavBar />

<div class="displayContainer">
    <Heading>Weather Calculators</Heading>
        <div class="list">
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

            <Card href='/calculators/hydroplanespeed' >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hydroplane Speed</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Calculate the hydroplaning speed of an airplane given the tire pressure in PSI</p>
            </Card>

            <Card href='/calculators/cloudbaseandfreezinglevel' >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cloud Base and Freezing Level</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Calculate the approximate freezing level and potential cloud base given temperature, dew point, and altitude</p>
            </Card>
        </div>

        <Heading>Performance Calculators (172S)</Heading>
        <div class="list">
            <Card href='/calculators/landingdistance' >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cessna 172S Short Field Landing Distance</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Calculate the landing distance of a short field landing in a Cessna 172S based on the information in the POH</p>
            </Card>
        </div>
        <Heading>Maneuver Calculators</Heading>
        <div class="list">
            <Card href='/calculators/pivotalaltitude' >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pivotal Altitude</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Calculate the pivotal altitude based on groundspeed and elevation for use in eights on pylons</p>
            </Card>
        </div>
        <Heading>Conversion Calculators</Heading>
        <div class="list">
            <Card href='/calculators/conversion/ctof' >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Celsius and Fahrenheit</h5>
            </Card>
            <Card href={calculatorroute + "nmtosm"} >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nautical and Statute Miles</h5>
            </Card>
            <Card href={calculatorroute + "nmtokm"} >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nautical Miles and Kilometers</h5>
            </Card>
            <Card href={calculatorroute + "smtokm"} >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Statute Miles and Kilometers</h5>
            </Card>
            <Card href={calculatorroute + "fttom"} >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Feet and Meters</h5>
            </Card>
        </div>
        
</div>





<style>
    .displayContainer {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 15px;
    }
    .list {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }
</style>