<script>
    import NavBar from "../components/NavBar.svelte";
    import { Heading, P, A, Mark, Secondary, Card } from "flowbite-svelte";
    import LessonCard from "../components/LessonCard.svelte";
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
            <LessonCard title="Go Arounds" sub="Learn how to safely execute a go around and when one is needed" link="/maneuvers/goaround"></LessonCard>
            <Card href='/maneuvers/forwardslip' >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Forward Slip to a Landing</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Learn how to do slow flight
                </p>
            </Card>
        </div>

        <Heading>Slow Flight and Stalls</Heading>
        <div class="list">
            <Card href='/maneuvers/slowflight' >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Maneuvering During Slow Flight</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Learn how to perform slow flight as well as climbs/descents and turns
                </p>
            </Card>
            <LessonCard title="Power-Off Stalls" sub="Learn how to perform power-off stalls and the risks associated with them" link="/maneuvers/stalls/poweroff"></LessonCard>
            <LessonCard title="Power-On Stalls" sub="Learn how to perform power-on stalls and the risks associated with them" link="/maneuvers/stalls/poweron"></LessonCard>

        </div>

        <Heading>Other Maneuvers</Heading>
        <div class="list">
            <LessonCard title="Basic Instrument Maneuvers" sub="Learn the basics of instrument flying to be prepared for a potential VFR into IMC encounter" link="/maneuvers/basicinstrument"></LessonCard>
            <LessonCard title="Steep Turns" sub="Learn how to properly perform steep turns and understand the concepts that can make them tricky" link="/maneuvers/steepturns"></LessonCard>
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