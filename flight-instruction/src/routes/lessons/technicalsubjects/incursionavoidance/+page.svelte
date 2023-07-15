<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Runway Incursion Avoidance</Heading>
<P>A runway incursion is any occurrence at an airport involving an aircraft, vehicle, person, or object on the ground that creates a collision hazard or results in a loss of separation with an aircraft taking off, landing, or intending to land.</P>
<P>Proper planning can prevent runway incursions and the possibility of ground collisions.</P>
<P>There are about 3 runway incursions each day at towered airports in the United States, of which 65% are caused by pilots (according to the FAA).</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Contributing Factors to Runway Incursions</Heading>
<P>There are three main contributing factors that lead to runway incursions:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Communications</Li>
<Li>Airport knowledge</Li>
<Li>Flight deck procedures for maintaining orientation</Li></List>
<Heading tag='h5'>Common Deviations that Lead to Runway Incursions</Heading>
<div><Tabs style='underline'>
<TabItem open title="Pilot Deviations"><div class="contents">
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Crossing a runway hold marking without a clearance</Li>
<Li>Taking off without a clearance</Li>
<Li>Landing without a clearance</Li></List>
</div></TabItem>
<TabItem title="Operational Incidents"><div class="contents">
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Clearing an aircraft onto a runway while another aircraft is landing on the same runway</Li>
<Li>Issuing a takeoff clearance while the runway is occupied by another aircraft or vehicle</Li></List>
</div></TabItem>
<TabItem title="Vehicle Deviations"><div class="contents">
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Crossing a runway hold marking without a clearance</Li></List>
</div></TabItem></Tabs></div>
<Heading tag='h5'>Causal Factors of Runway Incursions</Heading>
<P>The following are common causal factors that lead to runway incursions:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Failure to comply with ATC instructions</Li>
<Li>Lack of airport familiarity</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Sterile Cockpit</Heading>
<P>During any critical phase of flight, it is imperative that pilots are not being distracted by nonessential activities or conversations.</P>
<P>Make sure to refrain from anything distracting during:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Taxi</Li>
<Li>Takeoff</Li>
<Li>Climbout</Li>
<Li>Approach</Li>
<Li>Landing</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Taxiing Safely</Heading>
<P>See the link below for more information on taxiing safely:</P>
<Button href='incursionavoidance/safetaxi/'>Taxiing Safely: Towered and Uncontrolled Airports</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Hold Short Instructions and Markings</Heading>
<P>Hold short lines are located before a runway and can be identified by double solid yellow lines followed by double dashed yellow lines.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/d0047bb2-3f8e-46d7-51cb-b10758edf400/public"></Img></div>
<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">Dash through the dash, stop at the solid</P></Blockquote>
<P>Never cross the hold short markings without a clearance to enter a runway.</P>
<P>If you are cleared to taxi on a route that would cross any runway, and you were not issued a clearance to cross, always assume that you cannot cross that runway without permission.</P>
<P>When doing a runup in front of the hold short markings, if a runup area is not available, make sure to keep your feet hard on the brakes, even if you have the parking break engaged.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Line Up and Wait (LUAW) Operations</Heading>
<P>A line up and wait clearance is a clearance to enter a runway and hold in position for takeoff.</P>
<P>It is NOT a takeoff clearance.</P>
<P>If you hear "traffic holding in position," it means that there is an aircraft currently holding on the runway waiting to takeoff.</P>
<P>If you do not receive a takeoff clearance after 90 seconds of getting a line up and wait instruction, contact ATC. Controllers are not perfect, and you need to make sure that they haven't forgotten you are waiting on an active runway.</P>
<P>ATC is required to inform you of landing traffic when issuing a clearance. It will sound something like this:</P>
<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">Skyhawk N1234, runway one eight, line up and wait, traffic a Cessna 210 on a six-mile final</P></Blockquote>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Runway Shortened Operations</Heading>
<P>If a runway is shortened for some reason, it will be included in NOTAMs and the ATIS broadcast. These should always be checked before any flight.</P>
<P>When issuing a takeoff, LUAW, or landing clearance, ATC will indicate that not all of the runway is usable by saying "shortened."</P>
<P>If the runway is permanently shortened, ATC will use the "shortened" indicator until the chart supplement is updated. ATC clearances for takeoff and landing will also include the runway length available.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Runway Confusion</Heading>
<P>It may seem difficult to imagine landing on the incorrect runway or a taxiway, but there have been many cases of this happening.</P>
<P>Factors leading to runway confusion:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Airport complexity</Li>
<Li>Close proximity of runway thresholds</Li>
<Li>Parallel runways</Li>
<Li>Joint use of a runway as a taxiway</Li></List>
<P>The risk of runway confusion can be minimized by proper preflight planning and briefing all takeoffs and landings.</P>
<P>Things to consider on takeoff:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Write down which runway you were assigned</Li>
<Li>Check before entering the runway that the signage indicates the correct runway and taxiway intersection</Li>
<Li>Be cautious of parallel runways and make sure you are approaching the correct one</Li>
<Li>When entering the runway, double check that the correct number is written down on the pavement</Li>
<Li>Make sure that your compass aligns with the runway heading</Li></List>
<P>Things to consider on landing:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Runways at some airports can be used as taxiways</Li>
<Li>Make sure you write down you cleared runway assignment and double check it with your compass and with the writing on the runway</Li>
<Li>Be mindful that unique lighting, especially at night, can give a false indication of a runway. Make sure to be extra cautious</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Exiting the Runway After Landing</Heading>
<P>Only turn off of a runway when you are at a safe speed. Once you have slowed down, exit the runway relatively briskly and make sure to be clear of the hold short markings.</P>
<P>NEVER exit a runway onto an intersecting runway without a clearance from ATC. If you are cleared to exit onto an intersecting runway, make sure you are clear of the active runway and then remain in position before getting taxi instructions.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Engineered Materials Arresting Systems</Heading>
<P>Engineered Materials Arresting Systems, or EMAS, are special materials that are designed to slow down an aircraft past the end of a runway.</P>
<P>These are common at airports that were built before the 1000 foot runway safety area was adopted.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Airport Markings</Heading>
<Heading tag='h5'>Runway Markings</Heading>
<Button href='incursionavoidance/runway/'>Runway Markings</Button>
<Heading tag='h5'>Taxiway Markings</Heading>
<Button href='incursionavoidance/taxiway/'>Taxiway Markings</Button>
<Heading tag='h5'>Hold Position Markings</Heading>
<Button href='incursionavoidance/hold/'>Hold Position Markings</Button>
<Heading tag='h5'>Other Markings</Heading>
<Button href='incursionavoidance/other/'>Other Markings</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Airport Signs</Heading>
<P>There are six different types of signs installed on airfields. Click the links below to explore each one:</P>
<Heading tag='h5'>Mandatory Instruction Signs</Heading>
<Button href='incursionavoidance/signs/instruction'>Mandatory Instruction Signs</Button>
<Heading tag='h5'>Location Signs</Heading>
<Button href='incursionavoidance/signs/location'>Location Signs</Button>
<Heading tag='h5'>Direction Signs</Heading>
<Button href='incursionavoidance/signs/direction'>Direction Signs</Button>
<Heading tag='h5'>Destination Signs</Heading>
<Button href='incursionavoidance/signs/destination'>Destination Signs</Button>
<Heading tag='h5'>Information Signs</Heading>
<Button href='incursionavoidance/signs/information'>Information Signs</Button>
<Heading tag='h5'>Runway Distance Remaining Signs</Heading>
<Button href='incursionavoidance/signs/distanceremaining'>Runway Distance Remaining Signs</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>ILS Critical Area Purpose and Markings</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Airport Lighting</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Airport Hot Spots</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Night Operations</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Low Visibility Operations</Heading>
<Hr class="my-8" height="h-px" />
</div></div>



<style>
.holder { 
display: flex;
justify-content: center;
align-items: center;
}
.contents {
max-width: 1000px;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
}
.image {
display: flex;
align-items: center;
justify-content: center;
}
</style>

