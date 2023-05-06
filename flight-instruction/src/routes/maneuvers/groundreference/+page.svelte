<script>
     import NavBar from '../../components/NavBar.svelte'; 
     import LessonCard from '../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Ground Reference Maneuvers</Heading>
<P>Ground reference maneuvers allow you to hone your ability to maintain accurate control of an airplane by mainly using visual references. Mastering ground reference maneuvers allows you to not only become better at flying traffic patterns and easily make wind corrections, but it also allows you to automatically handle more complex situations where your attention might need to be divided because you won't have to exclusively focus on controlling the airplane, it will simply become instinctual.</P>
<Heading tag='h2'>Why Practice Ground Reference Maneuvers?</Heading>
<P>Each of the private pilot ground reference maneuvers are designed to improve your piloting ability in common situations you will encounter every time you fly. Flying a rectangular course will prepare you for traffic pattern procedures in an environment where won't be as distracted by other traffic and landing the airplane. S-turns allow you to hone your ability to make consistent turns where you rollout on a specific point, regardless of the wind. Turns around a point push you to be able to maintain a constant radius around a reference point where the wind will push you in different ways throughout the maneuver.</P>
<P>The point is not to be perfect at an individual maneuver, although you should obviously strive for that, but rather to become a pilot who can instinctively make necessary adjustments in airplane control regardless of the requirements situation.</P>
<Heading tag='h2'>Concepts</Heading>
<Heading tag='h5'>Wind Drift</Heading>
<P>Following a specific route on a road may seem easy, but remember that we are flying through the air, which will almost always be moving in a certain direction because of wind. The same concept can be applied to a boat attempting to go in a straight line due to the current.</P>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/wbIMm1S.png></Img></div>
<P>Because of this, a pilot needs to turn into the wind to maintain a straight line path on a given ground reference line. This is referred to as crabbing. The amount that we need to crab is going to be equal to the crosswind component of the wind in straight and level flight. A good way to think about it is that we need to have the same sideways velocity as the velocity of the wind that is pushing us to the side.</P>
<Heading tag='h5'>Constant Radius Turns</Heading>
<P>Assuming no wind and a constant airspeed, if a pilot maintains a consistent bank angle, it will result in a constant radius turn. Additionally, remember that as bank angle is increased, the turn radius decreases.</P>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/yD6LHU5.png></Img></div>
<P>However, when we add wind into the equation things change. We know that turn rate and radius are impacted by airspeed, but what we are worried about in this situation is groundspeed and ground track. If we are flying downwind and initiate a 180 degree turn, our groundspeed will be higher at the start of the turn vs at the end. So if we want to maintain a constant radius turn around a ground reference, we will need to modify our bank angle to change our turn rate and radius.</P>
<Heading tag='h2'>S-Turns</Heading>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/ud8GcSD.png></Img></div>
<Heading tag='h2'>Turns Around a Point</Heading>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/yXuzavR.png></Img></div>
<Heading tag='h2'>Rectangular Course</Heading>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/3Bfbm93.png></Img></div>
<Heading tag='h2'>Completion Standards</Heading>
<Heading tag='h5'>Objective</Heading>
<P>To determine that the applicant exhibits satisfactory knowledge, risk management, and skills associated with ground reference maneuvering which may include a rectangular course, Sturns, and turns around a point.</P>
<Heading tag='h5'>Knowledge</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Purpose of ground reference maneuvers</Li>
<Li>Effects of wind on ground track and relation to a ground reference point</Li>
<Li>Effects of bank angle and groundspeed on rate and radius of turn</Li>
<Li>Relationship of rectangular course to airport traffic pattern</Li></List>
<Heading tag='h5'>Risk Management</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Failure to divide attention between airplane control and orientation</Li>
<Li>Collision hazards, to include aircraft, terrain, obstacles, and wires</Li>
<Li>Low altitude maneuvering including stall, spin, or CFIT</Li>
<Li>Distractions, loss of situational awareness, or improper task management</Li>
<Li>Failure to maintain coordinated flight</Li></List>
<Heading tag='h5'>Skills</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Clear the area</Li>
<Li>Select a suitable ground reference area, line, or point as appropriate</Li>
<Li>Apply adequate wind-drift correction during straight and turning flight to maintain a constant ground track around a rectangular reference area, or to maintain a constant radius turn on each side of a selected reference line or point</Li>
<Li>If performing S-Turns, reverse the turn directly over the selected reference line; if performing turns around a point, complete turns in either direction, as specified by the evaluator</Li>
<Li>Divide attention between airplane control, traffic avoidance and the ground track while maintaining coordinated flight</Li>
<Li>Maintain altitude ±100 feet; maintain airspeed ±10 knots</Li></List>
<P>Rectangular Course</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Enter a left or right pattern, 600 to 1,000 feet above ground level (AGL) at an appropriate distance from the selected reference area, 45° to the downwind leg</Li></List>
<P>S-turns</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Enter perpendicular to the selected reference line, 600 to 1,000 feet AGL at an appropriate distance from the selected reference area</Li></List>
<P>Turns Around a Point</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Enter at an appropriate distance from the reference point, 600 to 1,000 feet AGL at an appropriate distance from the selected reference area</Li></List>
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

