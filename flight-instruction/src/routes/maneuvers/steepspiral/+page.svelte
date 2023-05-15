<script>
     import NavBar from '../../components/NavBar.svelte'; 
     import LessonCard from '../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Steep Spiral</Heading>
<P>Steep spirals are a great maneuver to lose a lot of altitude relatively quickly while remaining over a specific point. They utilize similar concepts as turns around a point, but require more complex control of the airplane.</P>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/2LYuzMN.png></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Performing Steep Spirals</Heading>
<P>As this is a maneuver that will cause a large loss in altitude, make sure to start at an altitude that will allow you to perform at least three 360 degree turns, as is required. Recovery should be made above 1,500 AGL. Given that we will probably not lose more than 1,000 feet per turn, a safe altitude to begin the maneuver is about 4,500 AGL.</P>
<P>Clearing the area and making a position report are critical. Given that the maneuver causes a large loss in altitude quickly, the likelihood of an encounter with nearby traffic is increased.</P>
<Heading tag='h5'>Selecting a Ground Reference Point</Heading>
<P>Picking something prominent is not the only consideration here. Because we are beginning the maneuver at a high altitude, during entry and throughout the maneuver it may be difficult to ascertain your exact position in relation to the point. To mitigate this, pick a reference point that can be estimated using other references nearby. A great choice is a 4 way intersection with straight roads extending out. Using that you can always have an idea of where your point is based on the lines extending out.</P>
<Heading tag='h5'>Entering the Maneuver</Heading>
<P>Plan to enter the maneuver crosswind to downwind. This will allow you to smoothly transition to the steepest bank angle required in the downwind. Once you are abeam your reference point, smoothly reduce the power to idle and continually adjust pitch to maintain 75KIAS.</P>
<P>Using coordinated controls, roll into the steepest bank required for the maneuver (approximately 40 - 60 degrees of bank).</P>
<Heading tag='h2'>Throughout the Maneuver</Heading>
<P>Just like turns around a point, your required bank angle will decrease until the upwind point, and increase as you return to the downwind. These changes will be exaggerated due to the tighter nature of the turn.</P>
<P>Ensure that your are properly trimmed for 75 KIAS, as this will allow you to focus more outside and on maintaining your turn radius.</P>
<P>On the upwind portion, clear the engine to avoid spark plug fouling and prolonged engine cooling. Technically, this could be done at any portion of the maneuver, but doing it while upwind will minimize the effect on the airplane's ground track.</P>
<P>When you complete three full turns, exit the maneuver on the same heading that you entered it on.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Common Errors</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Not clearing the area</Li>
<Li>Inadequate pitch control on entry or rollout</Li>
<Li>Not correcting the bank angle to compensate for wind</Li>
<Li>Poor flight control coordination</Li>
<Li>Ineffective use of trim</Li>
<Li>Inadequate airspeed control</Li>
<Li>Becoming disoriented</Li>
<Li>Performing by reference to the flight instruments rather than visual references</Li>
<Li>Not scanning for other traffic during the maneuver</Li>
<Li>Not completing the turn on the designated heading or reference</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Completion Standards</Heading>
<Button href='https://www.faa.gov/training_testing/testing/acs/media/commercial_airplane_acs_change_1.pdf#page=45'>Commercial Pilot ACS (FAA-S-ACS-7A) (V Task B, Page 35)</Button>
<Heading tag='h5'>Objective</Heading>
<P>To determine that the applicant exhibits satisfactory knowledge, risk management, and skills associated with steep spirals.</P>
<Heading tag='h5'>Knowledge</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Purpose of steep spirals</Li>
<Li>Maintaining a constant radius about a point</Li>
<Li>Effects of wind on ground track and relation to a ground reference point</Li></List>
<Heading tag='h5'>Risk Management</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Failure to divide attention between airplane control and orientation</Li>
<Li>Collision hazards, to include aircraft, terrain, obstacles, and wires</Li>
<Li>Low altitude maneuvering including stall, spin, or CFIT</Li>
<Li>Distractions, improper task management, loss of situational awareness, or disorientation</Li>
<Li>Failure to maintain coordinated flight</Li>
<Li>Effects of wind</Li>
<Li>Airframe or airspeed limitations</Li></List>
<Heading tag='h5'>Skills</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Clear the area</Li>
<Li>Select an altitude sufficient to continue through a series of at least three 360° turns</Li>
<Li>Establish and maintain a steep spiral, not to exceed 60° angle of bank, to maintain a constant radius about a suitable ground reference point</Li>
<Li>Apply wind-drift correction to track a constant radius circle around selected reference point with bank not to exceed 60° at steepest point in turn</Li>
<Li>Divide attention between airplane control, traffic avoidance, and the ground track, while maintaining coordinated flight</Li>
<Li>Maintain the specified airspeed, ±10 knots and roll out toward an object or specified heading, ±10°, and complete the maneuver no lower than 1,500’ AGL</Li></List>
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

