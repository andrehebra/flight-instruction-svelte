<script>
    import NavBar from "../../components/NavBar.svelte";
    import { FloatingLabelInput, Heading, Radio } from "flowbite-svelte";
    import TableBuilder from "../../components/TableBuilder.svelte";


    import { Select, Label } from 'flowbite-svelte';
    import { Hr, P } from 'flowbite-svelte';

    let unique = {}

    function restart() {
        unique = {}
    }
    
    let selected = "paved";
    let flaps = "extended";

    let pressureAlt = 3000;
    let temperature = 15;
    let headwind = 0;

    let landingDistance = 0;
    let clearanceDistance = 0;

    let distanceValues = [
        [
            [545,1290],
            [565,1320],
            [585,1350],
            [605,1380],
            [625,1415],
        ],
        [
            [565,1320],
            [585,1350],
            [605,1385],
            [625,1420],
            [650,1450],
        ],
        [
            [585,1355],
            [610,1385],
            [630,1420],
            [650,1455],
            [670,1490],
        ],
        [
            [610,1385],
            [630,1425],
            [655,1460],
            [675,1495],
            [695,1530],
        ],
        [
            [630,1425],
            [655,1460],
            [675,1495],
            [700,1535],
            [725,1570],
        ],
        [
            [655,1460],
            [680,1500],
            [705,1535],
            [725,1575],
            [750,1615],
        ],
        [
            [680,1500],
            [705,1540],
            [730,1580],
            [755,1620],
            [780,1660],
        ],
        [
            [705,1545],
            [730,1585],
            [760,1625],
            [785,1665],
            [810,1705],
        ],
        [
            [735,1585],
            [760,1630],
            [790,1670],
            [815,1715],
            [840,1755],
        ],
        
    ];
    
    function clearTable(table) {
        for (let i = 0; i < table.length; i++) {
            for (let j = 0; j < table[i].length; j++) {
                table[i][j].length = 2;
            }
        }
    }

    let pressureCalc;
    let multiplier;
    function calculatePressureDistance() {

        clearTable(distanceValues);

        if (pressureAlt <= 8000) {
            if (pressureAlt <=0) {
                pressureCalc = 0;
            } else {
                pressureCalc = pressureAlt;
            }

            if (pressureCalc % 1000 == 0) {
                landingDistance = calculateTemperatureDistance(pressureCalc);
                clearanceDistance = calculateTemperatureClearanceDistance(pressureCalc);
            } else {
                multiplier = pressureCalc % 1000 / 1000;
                landingDistance = (calculateTemperatureDistance(Math.ceil(pressureCalc / 1000) * 1000) * multiplier) + (calculateTemperatureDistance(Math.floor(pressureCalc / 1000) * 1000) * (1 - multiplier));
                clearanceDistance = (calculateTemperatureClearanceDistance(Math.ceil(pressureCalc / 1000) * 1000) * multiplier) + (calculateTemperatureClearanceDistance(Math.floor(pressureCalc / 1000) * 1000) * (1 - multiplier));
            }
        } else {
            return "Error";
        }


        //calculate change resulting from headwind or tailwind
        if (headwind >= 0) {
            landingDistance = landingDistance - (landingDistance * 0.1 * (headwind / 9));
            clearanceDistance = clearanceDistance - (clearanceDistance * 0.1 * (headwind / 9));
        } else if (headwind < 0) {
            landingDistance = landingDistance + (landingDistance * 0.1 * (-headwind / 2));
            clearanceDistance = clearanceDistance + (clearanceDistance * 0.1 * (-headwind / 2));
        }

        //calculate different runway surface
        if (selected == "grass") {
            clearanceDistance = clearanceDistance + (landingDistance * 0.45);
            landingDistance = landingDistance * 1.45;
        }

        //calculate different flap settings
        if (flaps == "retracted") {
            landingDistance = landingDistance * 1.35;
            clearanceDistance = clearanceDistance * 1.35;
        }

        restart();
    }

    
    let temperatureCalc;
    let tempMultiplier;
    function calculateTemperatureDistance(pressure) {
        if (temperature <= 40) {
            if (temperature <=0) {
                temperatureCalc = 0;
            } else {
                temperatureCalc = temperature;
            }

            if (temperatureCalc % 10 == 0) {
                return calculateDistance(temperatureCalc, pressure);
            } else {
                tempMultiplier = temperatureCalc % 10 / 10;
                return (calculateDistance(Math.ceil(temperatureCalc / 10) * 10, pressure) * tempMultiplier) + (calculateDistance(Math.floor(temperatureCalc / 10) * 10, pressure) * (1-tempMultiplier));
            }
        } else {
            return "Error";
        }
    }

    function calculateTemperatureClearanceDistance(pressure) {
        if (temperature <= 40) {
            if (temperature <=0) {
                temperatureCalc = 0;
            } else {
                temperatureCalc = temperature;
            }

            if (temperatureCalc % 10 == 0) {
                return calculateDistance(temperatureCalc, pressure, true);
            } else {
                tempMultiplier = temperatureCalc % 10 / 10;
                return (calculateDistance(Math.ceil(temperatureCalc / 10) * 10, pressure, true) * tempMultiplier) + (calculateDistance(Math.floor(temperatureCalc / 10) * 10, pressure, true) * (1-tempMultiplier));
            }
        } else {
            return "Error";
        }
    }

    function calculateDistance(temperature, pressure, clearance) {
        distanceValues[pressure / 1000][temperature / 10].push(true);
        if (clearance == undefined) {
            return distanceValues[pressure / 1000][temperature / 10][0];
        } else if (clearance == true) {
            return distanceValues[pressure / 1000][temperature / 10][1];
        }
        
    }

    calculatePressureDistance();


</script>

<NavBar />

<div class="holder">
    <Heading>Cessna 172S Short Field Landing Distance Calculator</Heading>
    <FloatingLabelInput on:change={() => calculatePressureDistance()} placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Pressure Altitude" bind:value={pressureAlt} />
    <FloatingLabelInput on:change={() => calculatePressureDistance()} placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Temperature" bind:value={temperature} />
    <FloatingLabelInput on:change={() => calculatePressureDistance()} placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Headwind (enter negative for tailwind)" bind:value={headwind} />

    <div class="radio">
        <p class="mb-4 font-semibold text-gray-900 dark:text-white">Runway Surface</p>
        <ul class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x divide-gray-200 dark:divide-gray-600">
            <li class="w-full"><Radio on:change={() => calculatePressureDistance()} bind:group={selected} value="paved" name="runway-list" class="p-3">Paved</Radio></li>
            <li class="w-full"><Radio on:change={() => calculatePressureDistance()} bind:group={selected} value="grass" name="runway-list" class="p-3">Dry Grass</Radio></li>
        </ul>
    </div>

    <div class="radio">
        <p class="mb-4 font-semibold text-gray-900 dark:text-white">Flaps</p>
        <ul class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x divide-gray-200 dark:divide-gray-600">
            <li class="w-full"><Radio on:change={() => calculatePressureDistance()} bind:group={flaps} value="extended" name="flap-list" class="p-3">Extended</Radio></li>
            <li class="w-full"><Radio on:change={() => calculatePressureDistance()} bind:group={flaps} value="retracted" name="flap-list" class="p-3">Retracted</Radio></li>
        </ul>
    </div>
        
    
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Ground Roll: {Math.ceil(landingDistance)} feet</Heading>
    <Heading tag="h2" customSize="text-4xl font-extrabold ">50 Foot Obstacle Distance: {Math.ceil(clearanceDistance)} feet</Heading>

    <Hr class="my-8" height="h-px" />

    {#key unique}
        <Heading tag="h2" customSize="text-4xl font-extrabold ">Takeoff Distance Numbers, (data used shown in red)</Heading>
        <Heading tag="h3" customSize="text-4xl font-extrabold ">Ground Roll</Heading>
        <TableBuilder contents={distanceValues} index=0></TableBuilder>
        <Heading tag="h3" customSize="text-4xl font-extrabold ">Total Distance Over 50 Foot Obstacle</Heading>
        <TableBuilder contents={distanceValues} index=1></TableBuilder>
    {/key}

    <Hr class="my-8" height="h-px" />
    
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Explanation of Calculation</Heading>
    <P>This calculator uses data from the Cessna 172S POH, which assumes a weight of 2550 pounds, flaps set at 30 degrees, power off, maximum braking used, a paved, level, and dry runway, zero wind, and a speed of 61 KIAS at 50 feet.</P>
    <P>First, data is interpoled from the temperature and pressure numbers given.</P>
    <P>Next, headwind and tailwind is used to modify the previous calculations. For this calculator, distances are decreased by 10% for each 9 knots of headwind, and distances are increased by 10% for each 2 knots of tailwind.</P>
    <P>If a grass runway is selected, the ground roll is increased by 45%, and that increase is then added into the total value.</P>
    <P>Finally, the distances are increased by 35% if the option of flaps retracted is selected.</P>
</div>

<style>
    .holder {
        padding: 20px;
        display: flex;
        flex-direction: column;
        max-width: 800px;
        gap: 15px;
        
    }
</style>