<script>
    import NavBar from "../components/NavBar.svelte";
    import { Heading, P, A, Mark, Secondary, Card } from "flowbite-svelte";
</script>

<NavBar></NavBar>

<div class="displayContainer">
    <Heading>Takeoffs</Heading>
        <div class="list">
            <Card href='/normallanding' >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Normal Takeoff</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Learn the basics of the normal takeoff
                </p>
            </Card>
            <Card href='/maneuvers/shortfield/takeoff' >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Short Field Takeoff</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Learn the basics of the normal takeoff
                </p>
            </Card>
            <Card href='/maneuvers/softfield/takeoff' >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Soft Field Takeoff</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Learn the basics of the normal takeoff
                </p>
            </Card>
        </div>

        <Heading>Landings</Heading>
        <div class="list">
            <Card href='/normallanding' >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Normal Landing</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Learn the basics of the normal takeoff
                </p>
            </Card>
            <Card href='/shortlanding' >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Short Field Landing</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Learn the basics of the normal takeoff
                </p>
            </Card>
            <Card href='/maneuvers/softfield/landing' >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Soft Field Landing</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Learn the basics of the normal takeoff
                </p>
            </Card>
        </div>

        <Heading>Private Pilot</Heading>
        <div class="list">
            <Card href='/maneuvers/slowflight' >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Slow Flight</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Learn how to do slow flight
                </p>
            </Card>
            <Card href='/maneuvers/forwardslip' >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Forward Slip to a Landing</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Learn how to do slow flight
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