<script>
    import NavBar from "../../components/NavBar.svelte";
    import { FloatingLabelInput, Heading, Radio } from "flowbite-svelte";


    import { Select, Label } from 'flowbite-svelte';
    
    let selected = "paved";
    let flaps = "extended";

    let weight = 2200;
    let pressureAlt = 3000;
    let temperature = 15;
    let headwind = 0;

    let takeoffDistance = 0;
    let clearanceDistance = 0;


    let distanceValues = [
        //2550
        [
            [
                [860 ,1465 ],
                [925 ,1575 ],
                [995 ,1690 ],
                [1070, 1810], 
                [1150, 1945],
            ],[
                [940 ,1600 ],
                [1010, 1720], 
                [1090, 1850], 
                [1170, 1990], 
                [1260, 2135],
            ],[
                [1025, 1755], 
                [1110, 1890], 
                [1195, 2035], 
                [1285, 2190], 
                [1380, 2355],
            ],[
                [1125, 1925], 
                [1215, 2080], 
                [1310, 2240], 
                [1410, 2420], 
                [1515, 2605],
            ],[
                [1235, 2120], 
                [1335, 2295], 
                [1440, 2480], 
                [1550, 2685], 
                [1660, 2880],
            ],[
                [1355, 2345], 
                [1465, 2545], 
                [1585, 2755], 
                [1705, 2975], 
                [1825, 3205],
            ],[
                [1495, 2605], 
                [1615, 2830], 
                [1745, 3075], 
                [1875, 3320], 
                [2010, 3585],
            ],[
                [1645, 2910], 
                [1785, 3170], 
                [1920, 3440], 
                [2065, 3730], 
                [2215, 4045],
            ],[
                [1820, 3265], 
                [1970, 3575], 
                [2120, 3880], 
                [2280, 4225], 
                [2450, 4615],
            ],
        ],
        //2400
        [
            [
                [745 ,1275 ],
                [800 ,1370 ],
                [860 ,1470 ],
                [925 ,1570 ],
                [995 ,1685],
            ],[
                [810 ,1390 ],
                [875 ,1495 ],
                [940 ,1605 ],
                [1010, 1720] ,
                [1085, 1845],
            ],[
                [885 ,1520 ],
                [955 ,1635 ],
                [1030, 1760] ,
                [1110, 1890] ,
                [1190, 2030],
            ],[
                [970 ,1665 ],
                [1050, 1795] ,
                [1130, 1930] ,
                [1215, 2080] ,
                [1305, 2230],
            ],[
                [1065, 1830],
                [1150, 1975] ,
                [1240, 2130] ,
                [1335, 2295] ,
                [1430, 2455],
            ],[
                [1170, 2015],
                [1265, 2180] ,
                [1360, 2355] ,
                [1465, 2530] ,
                [1570, 2715],
            ],[
                [1285, 2230],
                [1390, 2410] ,
                [1500, 2610] ,
                [1610, 2805] ,
                [1725, 3015],
            ],[
                [1415, 2470],
                [1530, 2685] ,
                [1650, 2900] ,
                [1770, 3125] ,
                [1900, 3370],
            ],[
                [1560, 2755],
                [1690, 3000] ,
                [1815, 3240] ,
                [1950, 3500] ,
                [2095, 3790],
            ],
        ],
        //2200
        [
            [
                [610 ,1055 ],
                [655 ,1130 ],
                [705 ,1205 ],
                [760 ,1290 ],
                [815 ,1380],
            ],[
                [665 ,1145 ],
                [720 ,1230],
                [770 ,1315 ],
                [830 ,1410 ],
                [890 ,1505],
            ],[
                [725 ,1250 ],
                [785 ,1340 ],
                [845 ,1435 ],
                [905 ,1540 ],
                [975 ,1650],
            ],[
                [795 ,1365 ],
                [860 ,1465 ],
                [925 ,1570 ],
                [995 ,1685 ],
                [1065, 1805],
            ],[
                [870 ,1490 ],
                [940 ,1605 ],
                [1010, 1725 ],
                [1090, 1855 ],
                [1165, 1975],
            ],[
                [955 ,1635 ],
                [1030, 1765 ],
                [1110, 1900 ],
                [1195, 2035 ],
                [1275, 2175],
            ],[
                [1050, 1800],
                [1130, 1940 ],
                [1220, 2090 ],
                [1310, 2240 ],
                [1400, 2395],
            ],[
                [1150, 1985],
                [1245, 2145 ],
                [1340, 2305 ],
                [1435, 2475 ],
                [1540, 2650],
            ],[
                [1270, 2195],
                [1370, 2375 ],
                [1475, 2555 ],
                [1580, 2745 ],
                [1695, 2950],
            ],
        ],
        
        
    ];

    let weightCalc;
    let weightMultiplier;
    function calculateWeightDistance() {
        if (weight <= 2550) {
            if (weight < 2200) {
                weightCalc = 2200
            } else {
                weightCalc = weight;
            }

            if (weightCalc >= 2200 && weightCalc <= 2400) {
                if (weightCalc == 2200) {
                    takeoffDistance = calculatePressureDistance(2, "groundroll");
                    clearanceDistance = calculatePressureDistance(2, "total");
                } else if (weightCalc == 2400) {
                    takeoffDistance = calculatePressureDistance(1, "groundroll");
                    clearanceDistance = calculatePressureDistance(1, "total");
                } else {
                    weightMultiplier = (weightCalc - 2200) / (2400-2200);
                    takeoffDistance = (calculatePressureDistance(2, "groundroll") * (1-weightMultiplier)) + (calculatePressureDistance(1, "groundroll") * (weightMultiplier));
                    clearanceDistance = (calculatePressureDistance(2, "total") * (1-weightMultiplier)) + (calculatePressureDistance(1, "total") * (weightMultiplier))
                }
            } else if (weightCalc > 2400) {
                if (weightCalc == 2550) {
                    takeoffDistance = calculatePressureDistance(0, "groundroll");
                    clearanceDistance = calculatePressureDistance(0, "total");
                } else {
                    weightMultiplier = (weightCalc - 2400) / (2550-2400);
                    takeoffDistance = (calculatePressureDistance(1, "groundroll") * (1-weightMultiplier)) + (calculatePressureDistance(0, "groundroll") * (weightMultiplier));
                    clearanceDistance = (calculatePressureDistance(1, "total") * (1-weightMultiplier)) + (calculatePressureDistance(0, "total") * (weightMultiplier))
                }

            }
        } else {
            takeoffDistance = "Error, too much weight";
            clearanceDistance = "Error, too much weight";
        }

        //calculate change resulting from headwind or tailwind
        if (headwind >= 0) {
            takeoffDistance = takeoffDistance - (takeoffDistance * 0.1 * (headwind / 9));
            clearanceDistance = clearanceDistance - (clearanceDistance * 0.1 * (headwind / 9));
        } else if (headwind < 0) {
            takeoffDistance = takeoffDistance + (takeoffDistance * 0.1 * (-headwind / 2));
            clearanceDistance = clearanceDistance + (clearanceDistance * 0.1 * (-headwind / 2));
        }

        //calculate different runway surface
        if (selected == "grass") {
            clearanceDistance = clearanceDistance + (takeoffDistance * 0.15)
            takeoffDistance = takeoffDistance * 1.15;
        }
        
    }
    

    let pressureCalc;
    let multiplier;
    function calculatePressureDistance(weightIndex, option) {
        if (pressureAlt <= 8000) {
            if (pressureAlt <=0) {
                pressureCalc = 0;
            } else {
                pressureCalc = pressureAlt;
            }

            if (pressureCalc % 1000 == 0) {
                if (option == "groundroll") {
                    return calculateTemperatureDistance(pressureCalc, weightIndex);
                } else if (option == "total") {
                    return calculateTemperatureClearanceDistance(pressureCalc, weightIndex);
                }
                
                
            } else {
                multiplier = pressureCalc % 1000 / 1000;
                if (option == "groundroll") {
                    return (calculateTemperatureDistance(Math.ceil(pressureCalc / 1000) * 1000, weightIndex) * multiplier) + (calculateTemperatureDistance(Math.floor(pressureCalc / 1000) * 1000, weightIndex) * (1 - multiplier));
                } else if (option == "total") {
                    return (calculateTemperatureClearanceDistance(Math.ceil(pressureCalc / 1000) * 1000, weightIndex) * multiplier) + (calculateTemperatureClearanceDistance(Math.floor(pressureCalc / 1000) * 1000, weightIndex) * (1 - multiplier));    
                }
            }
        } else {
            return "Error";
        }


        
    }

    
    let temperatureCalc;
    let tempMultiplier;
    function calculateTemperatureDistance(pressure, weightIndex) {
        if (temperature <= 40) {
            if (temperature <=0) {
                temperatureCalc = 0;
            } else {
                temperatureCalc = temperature;
            }

            if (temperatureCalc % 10 == 0) {
                return calculateDistance(temperatureCalc, pressure, false, weightIndex);
            } else {
                tempMultiplier = temperatureCalc % 10 / 10;
                return (calculateDistance(Math.ceil(temperatureCalc / 10) * 10, pressure, false, weightIndex) * tempMultiplier) + (calculateDistance(Math.floor(temperatureCalc / 10) * 10, pressure, false, weightIndex) * (1-tempMultiplier));
            }
        } else {
            return "Error";
        }
    }

    function calculateTemperatureClearanceDistance(pressure, weightIndex) {
        if (temperature <= 40) {
            if (temperature <=0) {
                temperatureCalc = 0;
            } else {
                temperatureCalc = temperature;
            }

            if (temperatureCalc % 10 == 0) {
                return calculateDistance(temperatureCalc, pressure, true, weightIndex);
            } else {
                tempMultiplier = temperatureCalc % 10 / 10;
                return (calculateDistance(Math.ceil(temperatureCalc / 10) * 10, pressure, true, weightIndex) * tempMultiplier) + (calculateDistance(Math.floor(temperatureCalc / 10) * 10, pressure, true, weightIndex) * (1-tempMultiplier));
            }
        } else {
            return "Error";
        }
    }

    function calculateDistance(temperature, pressure, clearance, weightIndex) {
        if (clearance == false) {
            return distanceValues[weightIndex][pressure / 1000][temperature / 10][0];
        } else if (clearance == true) {
            return distanceValues[weightIndex][pressure / 1000][temperature / 10][1];
            
        }
        
    }

    calculateWeightDistance();

</script>

<NavBar />

<div class="holder">
    <Heading>Cessna 172S Short Field Takeoff Distance Calculator</Heading>
    <FloatingLabelInput on:change={() => calculateWeightDistance()} placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Weight" bind:value={weight} />
    <FloatingLabelInput on:change={() => calculateWeightDistance()} placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Pressure Altitude" bind:value={pressureAlt} />
    <FloatingLabelInput on:change={() => calculateWeightDistance()} placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Temperature" bind:value={temperature} />
    <FloatingLabelInput on:change={() => calculateWeightDistance()} placeholder="" style="outlined"  id="floating_outlined" name="floating_outlined" type="text" label="Headwind (enter negative for tailwind)" bind:value={headwind} />

    <div class="radio">
        <p class="mb-4 font-semibold text-gray-900 dark:text-white">Runway Surface</p>
        <ul class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x divide-gray-200 dark:divide-gray-600">
            <li class="w-full"><Radio on:change={() => calculateWeightDistance()} bind:group={selected} value="paved" name="runway-list" class="p-3">Paved</Radio></li>
            <li class="w-full"><Radio on:change={() => calculateWeightDistance()} bind:group={selected} value="grass" name="runway-list" class="p-3">Dry Grass</Radio></li>
        </ul>
    </div>

    
        
    
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Ground Roll: {Math.ceil(takeoffDistance)} feet</Heading>
    <Heading tag="h2" customSize="text-4xl font-extrabold ">50 Foot Obstacle Distance: {Math.ceil(clearanceDistance)} feet</Heading>
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