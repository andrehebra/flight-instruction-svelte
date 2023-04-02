<script>
    import NavBar from "../../components/NavBar.svelte";

    async function getWeatherInformation(location) {

        return fetch('https://aviationweather.gov/adds/dataserver_current/httpparam?datasource=metars&requestType=retrieve&format=xml&mostRecentForEachStation=constraint&hoursBeforeNow=1.25&stationString=KORL')
        .then(response => response.text())

        
    }

    console.log(getWeatherInformation("KORL"));


</script>

<NavBar></NavBar>

