<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
  
    let metarData = writable(null);
    let selectedRunway = writable("07"); // Default runway selection
    let crosswind = writable(0);
    let headwind = writable(0);
  
    const flightLimits = {
      dual_rental: {
        day_vfr: { ceiling: 1500, visibility: 3 },
        day_other: { ceiling: 2500, visibility: 5 },
        night_vfr: { ceiling: 2500, visibility: 5 },
        max_crosswind: "AFM", // Check AFM for aircraft-specific limits
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
          "https://aviationweather.gov/api/data/metar?ids=KORL&format=json"
        );
        const data = await response.json();
        metarData.set(data[0]);
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
      const { wind, visibility, ceiling } = metar;
      const windSpeed = parseInt(wind.match(/(\d{3})(\d{2})G?(\d{2})?/)[2]);
      const windGusts = wind.match(/G(\d{2})/) ? parseInt(wind.match(/G(\d{2})/)[1]) : 0;
      const windDirection = parseInt(wind.substring(0, 3));
      const selectedRunwayHeading = parseInt(selectedRunway) * 10;
      
      calculateWindComponents(windDirection, windSpeed, selectedRunwayHeading);
      
      return {
        dual_rental: windSpeed <= flightLimits.dual_rental.max_wind.sustained &&
          (!windGusts || windGusts <= flightLimits.dual_rental.max_wind.gusts),
        solo: windSpeed <= flightLimits.solo.max_wind &&
          (!windGusts || windGusts <= flightLimits.solo.max_wind) &&
          crosswind <= flightLimits.solo.max_crosswind,
      };
    }
  
    onMount(fetchMETAR);
  </script>
  
  <main>
    <h1>KORL Weather Check</h1>
    {#if $metarData}
      <p><strong>METAR:</strong> {$metarData.raw_text}</p>
      <label for="runway">Select Runway:</label>
      <select bind:value={$selectedRunway}>
        <option value="07">07</option>
        <option value="25">25</option>
      </select>
      <h2>Wind Components</h2>
      <p>Crosswind: {$crosswind.toFixed(1)} knots</p>
      <p>Headwind: {$headwind.toFixed(1)} knots</p>
      <h2>Flight Approval</h2>
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
    {/if}
  </main>
  