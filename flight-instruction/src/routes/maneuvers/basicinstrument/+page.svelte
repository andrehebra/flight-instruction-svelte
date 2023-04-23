<script>
     import NavBar from '../../components/NavBar.svelte'; 
     import {  Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Basic Instrument Maneuvers</Heading>
<P>In this lesson, we will cover the fundamentals of instrument flying, including the various instruments used, how to interpret and use them, and the basic maneuvers required for safe instrument flight. This is by no means a replacement for an instrument rating, it is simply made to ensure that VFR pilots are capable of dealing with unexpected adverse weather.</P>
<Heading tag='h2'>The Hazards of VFR into IMC</Heading>
<P>VFR into IMC, or visual flight rules into instrument meteorological conditions, is a dangerous scenario that can quickly turn fatal for pilots. Entering into an area of low visibility, such as fog or clouds, can quickly lead to spatial disorientation and loss of control. Statistics from the FAA indicate that spatial disorientation is a factor in approximately 15% of general aviation accidents, of which 90% are fatal. Having an understanding of spatial disorientation and the problems it causes can dramatically increase your ability to fly safely. See the article and video below for more information about the insidious nature of spatial disorientation. </P>
<Button href='https://www.youtube.com/watch?v=MBL1iy0V9VM&ab_channel=AirSafetyInstitute'>Air Safety Institute Video - Hazardous Attitudes</Button>
<Button href='https://www.smithsonianmag.com/air-space-magazine/the-disorient-express-474780/'>Smithsonian Magazine - The Disorient Express</Button>
<Heading tag='h2'>Spatial Disorientation</Heading>
<P>One of the most insidious aspects of spatial disorientation is that it can happen quickly and without warning. A pilot may feel like they are flying straight and level, when in reality they are turning, climbing, or descending. Without the proper training and equipment, a pilot may have difficulty determining their true orientation and could inadvertently make incorrect control inputs, leading to a loss of control of the aircraft.</P>
<Heading tag='h2'>Completion Standards</Heading>
<Button href='https://www.faa.gov/training_testing/testing/acs/media/private_airplane_acs_change_1.pdf#page=54'>Private Pilot ACS (FAA-S-ACS-6B) (VIII Tasks A-F, Page 54-59)</Button>
<P>Basic Instrument Maneuvers are only listed in the Private Pilot ACS. There are six required tasks: </P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Straight-and-Level Flight</Li>
<Li>Constant Airspeed Climbs</Li>
<Li>Constant Airspeed Descents</Li>
<Li>Turns to Headings</Li>
<Li>Recovery from Unusual Flight Attitudes</Li>
<Li>Radio Communications, Navigation Systems/Facilities, and Radar Services</Li></List>
<P>Below are the completion standards as they are listed in the ACS. The last task is not included in this lesson plan, as it is not a maneuver.</P>
<Heading tag='h5'>Objective</Heading>
<P>To determine that the applicant exhibits satisfactory knowledge, risk management, and skills associated with radio communications, navigation systems/facilities, and radar services available for use during flight solely by reference to instruments.</P>
<Heading tag='h5'>Knowledge</Heading>
<P>The applicant demonstrates an understanding of:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Sensitivity, limitations, and potential errors in unusual attitudes</Li>
<Li>Correlation (pitch instruments/bank instruments)</Li>
<Li>Function and operation</Li>
<Li>Proper instrument cross-check techniques</Li></List>
<Heading tag='h5'>Risk Management</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Instrument flying hazards to include failure to maintain VFR, spatial disorientation, loss of control, fatigue, stress, and emergency off airport landings</Li>
<Li>Failure to seek assistance or declare an emergency in a deteriorating situation</Li>
<Li>Collision hazards, to include aircraft, terrain, obstacles, and wires</Li>
<Li>Distractions, loss of situational awareness, or improper task management</Li></List>
<Heading tag='h5'>Skills</Heading>
<div><Tabs style='underline'>
<TabItem open title="Straight-and-Level Flight"><div class="contents">
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Maintain straight-and-level flight using proper instrument cross-check and interpretation, and coordinated control application</Li>
<Li>Maintain altitude ±200 feet, heading ±20°, and airspeed ±10 knots</Li></List>
</div></TabItem>
<TabItem title="Constant Airspeed Climbs"><div class="contents">
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Transition to the climb pitch attitude and power setting on an assigned heading using proper instrument cross-check and interpretation, and coordinated flight control application</Li>
<Li>Climb at a constant airspeed to specific altitudes in straight flight and turns</Li>
<Li>Level off at the assigned altitude and maintain altitude ±200 feet, heading ±20°, and airspeed ±10 knots</Li></List>
</div></TabItem>
<TabItem title="Constant Airspeed Descents"><div class="contents">
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Transition to the descent pitch attitude and power setting on an assigned heading using proper instrument cross-check and interpretation, and coordinated flight control application</Li>
<Li>Descend at a constant airspeed to specific altitudes in straight flight and turns</Li>
<Li>Level off at the assigned altitude and maintain altitude ±200 feet, heading ±20°, and airspeed ±10 knots</Li></List>
</div></TabItem>
<TabItem title="Turns to Headings"><div class="contents">
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Turn to headings, maintain altitude ±200 feet, maintain a standard rate turn, roll out on the assigned heading ±10°, and maintain airspeed ±10 knots</Li></List>
</div></TabItem>
<TabItem title="Recovery from Unusual Flight Attitudes"><div class="contents">
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Recognize unusual flight attitudes; perform the correct, coordinated, and smooth flight control application to resolve unusual pitch and bank attitudes while staying within the airplane’s limitations and flight parameters</Li></List>
</div></TabItem></Tabs></div>
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

