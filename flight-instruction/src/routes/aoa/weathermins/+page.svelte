<script>
    import NavBar from "../../components/NavBar.svelte";
    import { Heading, P } from "flowbite-svelte";
    
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    let metarData = writable(null);
    let selectedRunway = writable("07"); // Default runway selection
    let crosswind = writable(0);
    let headwind = writable(0);
    let flightApproval = writable({ dual_rental: false, solo: false });

    const flightLimits = {
        dual_rental: {
        day_vfr: { ceiling: 1500, visibility: 3 },
        night_vfr: { ceiling: 2500, visibility: 5 },
        max_crosswind: 15,
        max_tailwind: 10,
        max_wind: { sustained: 25, gusts: 30 },
        },
        solo: {
        max_crosswind: 10,
        max_wind: 20,
        pattern_min: { ceiling: 2000, visibility: 5 },
        local_min: { ceiling: 3000, visibility: 6 },
        xc_min: { ceiling: 4000, visibility: 6 },
        },
    };

    async function fetchMETAR() {
        try {
        const response = await fetch(
            "https://corsproxy.io/?https://aviationweather.gov/api/data/metar?ids=KORL&format=json&taf=false&hours=2"
        );
        const text = await response.json();

        const metarObject = text[0];
        /*const metarLines = text.split("\n");
        const metarObject = {
            raw_text: metarLines[1] || "No METAR data",
            wind: metarLines.find(line => line.includes("Wind")) || "",
            visibility: parseFloat(metarLines.find(line => line.includes("Visibility"))?.match(/\d+/)?.[0] || "0"),
            ceiling: parseInt(metarLines.find(line => line.includes("Cloud Base"))?.match(/\d+/)?.[0] || "9999"),
        };
        metarData.set(metarObject);
        console.log(metarData);
        console.log(metarObject); */
        console.log(metarObject);
        
        } catch (error) {
        console.error("Error fetching METAR data:", error);
        }
    }

    function calculateWindComponents(windDirection, windSpeed, runwayHeading) {
        const windAngle = ((windDirection - runwayHeading + 360) % 360) * (Math.PI / 180);
        const headwindComponent = Math.cos(windAngle) * windSpeed;
        const crosswindComponent = Math.sin(windAngle) * windSpeed;
        crosswind.set(Math.abs(crosswindComponent));
        headwind.set(headwindComponent);
    }

    function evaluateFlightApproval(metar) {
        if (!metar) return { dual_rental: false, solo: false };
        const windMatch = metar.wind.match(/(\d{3})(\d{2})G?(\d{2})?/);
        console.log("Wind Match: " + windMatch);
        if (!windMatch) return { dual_rental: false, solo: false };

        const windSpeed = parseInt(windMatch[2]);
        const windGusts = windMatch[3] ? parseInt(windMatch[3]) : 0;
        const windDirection = parseInt(windMatch[1]);
        const selectedRunwayHeading = parseInt(selectedRunway) * 10;

        calculateWindComponents(windDirection, windSpeed, selectedRunwayHeading);

        const dualRentalApproved =
        windSpeed <= flightLimits.dual_rental.max_wind.sustained &&
        (!windGusts || windGusts <= flightLimits.dual_rental.max_wind.gusts) &&
        metar.ceiling >= flightLimits.dual_rental.day_vfr.ceiling &&
        metar.visibility >= flightLimits.dual_rental.day_vfr.visibility;

        const soloApproved =
        windSpeed <= flightLimits.solo.max_wind &&
        (!windGusts || windGusts <= flightLimits.solo.max_wind) &&
        $crosswind <= flightLimits.solo.max_crosswind &&
        metar.ceiling >= flightLimits.solo.pattern_min.ceiling &&
        metar.visibility >= flightLimits.solo.pattern_min.visibility;

        flightApproval.set({ dual_rental: dualRentalApproved, solo: soloApproved });
    }

    // Watch for changes in METAR or runway selection
    $: if ($metarData) {
        evaluateFlightApproval($metarData);
    }

    onMount(fetchMETAR);
  </script>
  <NavBar />
  <main>
    <div class="display"><div class="holder">
    <Heading tag="h2" customSize="text-4xl font-extrabold ">KORL Weather Check</Heading>
    {#if $metarData}
      <P><strong>METAR:</strong> {$metarData.raw_text}</P>
      <label for="runway">Select Runway:</label>
      <select bind:value={$selectedRunway}>
        <option value="07">07</option>
        <option value="25">25</option>
      </select>
      <Heading tag="h3" customSize="text-4xl font-extrabold ">Wind Components</Heading>
      <P>Crosswind: {$crosswind.toFixed(1)} knots</P>
      <P>Headwind: {$headwind.toFixed(1)} knots</P>
      <Heading tag="h3" customSize="text-4xl font-extrabold ">Flight Approval</Heading>
      <table>
        <tr>
          <th>Flight Type</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Dual/Rental</td>
          <td>{evaluateFlightApproval($metarData).dual_rental ? "Approved" : "Not Approved"}</td>
        </tr>
        <tr>
          <td>Solo</td>
          <td>{evaluateFlightApproval($metarData).solo ? "Approved" : "Not Approved"}</td>
        </tr>
      </table>
    {:else}
      <P>Loading METAR data...</P>
    {/if}
    </div></div>
  </main>

  <style>
    .holder {
        padding: 20px;
        display: flex;
        flex-direction: column;
        max-width: 800px;
        gap: 15px;
    }
    .display {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>