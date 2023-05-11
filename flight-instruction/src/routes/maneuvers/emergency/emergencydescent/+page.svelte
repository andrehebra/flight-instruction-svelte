<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Emergency Descent</Heading>
<P>An emergency descent is utilized during an emergency when a rapid descent is necessary for safety. This maneuver can be incredibly useful to lose a lot of altitude while not overstressing any part of the airplane.</P>
<Heading tag='h2'>When to Use an Emergency Descent</Heading>
<Heading tag='h2'>Completion Standards</Heading>
<P>The completion standards for emergency descents are the same in both the private and commercial ACS. They are shown below:</P>
<Button href='https://www.faa.gov/training_testing/testing/acs/media/private_airplane_acs_change_1.pdf#page=60'>Private Pilot ACS (FAA-S-ACS-6B) (IX Task A, Page 60)</Button>
<Button href='https://www.faa.gov/training_testing/testing/acs/media/commercial_airplane_acs_change_1.pdf#page=60'>Commercial Pilot ACS (FAA-S-ACS-7A) (IX Task A, Page 60)</Button>
<Heading tag='h5'>Objective</Heading>
<P>To determine that the applicant exhibits satisfactory knowledge, risk management, and skills associated with an emergency descent.</P>
<Heading tag='h5'>Knowledge</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Situations that would require an emergency descent (e.g., depressurization, smoke, or engine fire)</Li>
<Li>Immediate action items and emergency procedures</Li>
<Li>Airspeed, to include airspeed limitations</Li></List>
<Heading tag='h5'>Risk Management</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Failure to consider altitude, wind, terrain, obstructions, and available glide distance</Li>
<Li>Collision hazards, to include aircraft, terrain, obstacles, and wires</Li>
<Li>Improper airplane configuration</Li>
<Li>Distractions, loss of situational awareness, or improper task management</Li></List>
<Heading tag='h5'>Skills</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Clear the area</Li>
<Li>Establish and maintain the appropriate airspeed and configuration appropriate to the scenario specified by the evaluator and as covered in POH/AFM for the emergency descent</Li>
<Li>Maintain orientation, divide attention appropriately, and plan and execute a smooth recovery</Li>
<Li>Use bank angle between 30° and 45° to maintain positive load factors during the descent</Li>
<Li>Maintain appropriate airspeed +0/-10 knots, and level off at a specified altitude ±100 feet</Li>
<Li>Complete the appropriate checklist</Li></List>
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

