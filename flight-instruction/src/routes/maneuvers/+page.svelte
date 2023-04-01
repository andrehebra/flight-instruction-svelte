<script>
    import NavBar from "../components/NavBar.svelte";
    import { Heading, P, A, Mark, Secondary, Card } from "flowbite-svelte";
</script>

<NavBar></NavBar>

<div class="displayContainer">
    <Heading>Takeoffs</Heading>
        <div class="list">
            <Card href='/calculators/pressureanddensityaltitude' >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Normal Takeoff</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Learn the basics of the normal takeoff
                </p>
            </Card>
        </div>
</div>





<style>
    .displayContainer {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 30px;
    }
    .list {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }
</style>