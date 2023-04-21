<script>
     import NavBar from '../../components/NavBar.svelte'; 
     import {  List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Go Arounds</Heading>
<P>Learning how to abort a landing is arguably the most important step in learning how to land safely. While it may seem like a simple task, there are many mistakes that pilots can make that can lead to potentially dangerous situations. This lesson will focus on when to do a go around and common mistakes that people make when attempting them.</P>
<Heading tag='h2'>References</Heading>
<Button href='https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/00_afh_full.pdf#page=181'>Airplane Flying Handbook (FAA-H-8083-3C) Chapter 9</Button>
<Heading tag='h2'>Completion Standards</Heading>
<Button href='https://www.faa.gov/training_testing/testing/acs/media/private_airplane_acs_change_1.pdf#page=43'>Private Pilot ACS (FAA-S-ACS-6B) (IV Task N, Page 43)</Button>
<Button href='https://www.faa.gov/training_testing/testing/acs/media/commercial_airplane_acs_change_1.pdf#page=43'>Commercial Pilot ACS (FAA-S-ACS-7A) (IV Task N, Page 43)</Button>
<P>Below are the Private Pilot ACS go-around/rejected landing standards. Similar to other takeoff and landing tasks in the ACS, the Commercial ACS simply replaces the +10/-5 knot tolerances with ±5 knots.</P>
<Heading tag='h5'>Objective</Heading>
<P>To determine that the applicant exhibits satisfactory knowledge, risk management, and skills associated with a go-around/rejected landing with emphasis on factors that contribute to landing conditions that may require a go-around.</P>
<Heading tag='h5'>Knowledge</Heading>
<P>The applicant demonstrates an understanding of:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A stabilized approach, to include energy management concepts</Li>
<Li>Effects of atmospheric conditions, including wind and density altitude on a go-around or rejected landing.</Li>
<Li>Wind correction techniques on takeoff/departure and approach/landing.</Li></List>
<Heading tag='h5'>Risk management</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Delayed recognition of the need for a go-around/rejected landing</Li>
<Li>Delayed performance of a go-around at low altitude</Li>
<Li>Improper application of power</Li>
<Li>Improper airplane configuration</Li>
<Li>Collision hazards, to include aircraft, terrain, obstacles, wires, vehicles, vessels, persons, and wildlife</Li>
<Li>Low altitude maneuvering including stall, spin, or CFIT</Li>
<Li>Distractions, loss of situational awareness, or improper task management</Li></List>
<Heading tag='h5'>Skills</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Complete the appropriate checklist</Li>
<Li>Make radio calls as appropriate</Li>
<Li>Make a timely decision to discontinue the approach to landing</Li>
<Li>Apply takeoff power immediately and transition to climb pitch attitude for VX or VY as appropriate +10/-5 knots</Li>
<Li>Configure the airplane after a positive rate of climb has been verified or in accordance with airplane manufacturer’s instructions</Li>
<Li>Maneuver to the side of the runway/landing area when necessary to clear and avoid conflicting traffic</Li>
<Li>Maintain VY +10/-5 knots to a safe maneuvering altitude</Li>
<Li>Maintain directional control and proper wind-drift correction throughout the climb</Li></List>
</div></div>



<style>
.holder { 
display: flex;
justify-content: center;
align-items: center;
}
.contents {
max-width: 800px;
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

