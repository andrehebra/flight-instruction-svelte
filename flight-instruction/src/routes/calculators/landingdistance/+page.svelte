<script>
    import NavBar from "../../components/NavBar.svelte";
    import { FloatingLabelInput, Heading } from "flowbite-svelte";

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
    

    let pressureCalc;
    let multiplier;
    function calculatePressureDistance() {
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
        } else if (headwind < 0) {
            landingDistance = landingDistance + (landingDistance * 0.1 * (-headwind / 2));
        }
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
        if (clearance == undefined) {
            return distanceValues[pressure / 1000][temperature / 10][0];
        } else if (clearance == true) {
            return distanceValues[pressure / 1000][temperature / 10][1];
        }
        
    }

    console.log(calculatePressureDistance());


</script>

<NavBar />

<div class="holder">
    <FloatingLabelInput on:change={() => calculatePressureDistance()} placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Pressure Altitude" bind:value={pressureAlt} />
        <FloatingLabelInput on:change={() => calculatePressureDistance()} placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Temperature" bind:value={temperature} />
            <FloatingLabelInput on:change={() => calculatePressureDistance()} placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Headwind (enter negative for tailwind)" bind:value={headwind} />
    
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Ground Roll: {Math.ceil(landingDistance)} feet</Heading>
    <Heading tag="h2" customSize="text-4xl font-extrabold ">50 Foot Obstacle Distance: {Math.ceil(clearanceDistance)} feet</Heading>
</div>

<style>
    .holder {
        padding: 20px;
        display: flex;
        flex-direction: column;
        max-width: 500px;
        gap: 15px;
        
    }
</style>