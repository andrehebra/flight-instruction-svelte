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
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Sterile Cockpit</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Taxiing Safely</Heading>
<Heading tag='h5'>Towered Airports</Heading>
<Heading tag='h5'>Non-towered Airports</Heading>
<Heading tag='h5'>Crossing Runways</Heading>
<Heading tag='h5'>ForeFlight Taxi Routing</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Hold Short Instructions and Markings</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Line Up and Wait (LUAW) Operations</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Runway Shortened Operations</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Runway Confusion</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Exiting the Runway After Landing</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Engineered Materials Arresting Systems</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Airport Markings and Signs</Heading>
<Heading tag='h5'>Runway Markings</Heading>
<Heading tag='h5'>Taxiway Markings</Heading>
<Heading tag='h5'>Hold Position Markings</Heading>
<Heading tag='h5'>Other Markings</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>ILS Critical Area Purpose and Markings</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Airport Signs</Heading>
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

