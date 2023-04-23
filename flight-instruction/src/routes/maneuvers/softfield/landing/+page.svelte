<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Soft-Field Landing</Heading>
<P>Similar to the soft-field takeoff, our goal with a soft-field landing is to keep the least amount of pressure on the landing gear as is reasonably possible. Because of this, we can think of the soft-field landing as a normal landing with a slightly slower approach speed up until the roundout and flare. </P>
<Heading tag='h2'>Procedure and Technique</Heading>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/jSdVAQk.png></Img></div>
<Heading tag='h5'>Approach</Heading>
<P>Complete a normal pattern until reaching final approach. When turning final, allow the airspeed to fall to 61 kts instead of 65 kts by altering pitch and power for the conditions of the day.</P>
<Heading tag='h5'>Roundout and Flare</Heading>
<P>When crossing the aiming point at proper altitude, begin the roundout. When transitioning to the flare, add just enough power to allow for the nose wheel to to remain in the air after touchdown. Remember that if you already have a relatively high power setting, you might not need to add additional power. The goal is to keep our descent rate during the flare as low as possible to make a smooth touchdown.</P>
<Heading tag='h5'>Touchdown</Heading>
<P>Once you make contact with the ground, keep the back pressure on the elevator to keep the nose wheel off of the ground for as long as possible. Use minimal braking and keep moving, do not stop on the runway. </P>
<Heading tag='h2'>Completion Standards</Heading>
<P>Below are the completion standards for the private pilot ACS. The only difference in the commercial ACS is that the airspeed tolerances are ±5 kts instead of +10/-5 kts.</P>
<Heading tag='h5'>Objective</Heading>
<P>To determine that the applicant exhibits satisfactory knowledge, risk management, and skills associated with a soft-field approach and landing with emphasis on proper use and coordination of flight controls.</P>
<Heading tag='h5'>Knowledge</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A stabilized approach, to include energy management concepts</Li>
<Li>Effects of atmospheric conditions, including wind, on approach and landing performance</Li>
<Li>Wind correction techniques on approach and landing</Li></List>
<Heading tag='h5'>Risk Management</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Selection of runway based on pilot capability, airplane performance and limitations, available distance, and wind</Li>
<Li>Effects of crosswind, windshear, tailwind, wake turbulence, runway surface/condition</Li>
<Li>Abnormal operations, to include planning for: rejected takeoff and engine failure in takeoff/climb phase of flight</Li>
<Li>Collision hazards, to include aircraft, terrain, obstacles, wires, vehicles, persons, and wildlife</Li>
<Li>Low altitude maneuvering including stall, spin, or CFIT</Li>
<Li>Distractions, loss of situational awareness, or improper task management</Li></List>
<Heading tag='h5'>Skills</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Complete the appropriate checklist</Li>
<Li>Make radio calls as appropriate</Li>
<Li>Ensure the airplane is aligned with the correct/assigned runway</Li>
<Li>Scan the landing runway and adjoining area for traffic and obstructions</Li>
<Li>Select and aim for a suitable touchdown point considering the wind, landing surface, and obstructions</Li>
<Li>Establish the recommended approach and landing configuration and airspeed, and adjust pitch attitude and power as required to maintain a stabilized approach</Li>
<Li>Maintain manufacturer’s published approach airspeed or in its absence not more than 1.3 VSO, +10/-5 knots with gust factor applied</Li>
<Li>Maintain directional control and appropriate crosswind correction throughout the approach and landing</Li>
<Li>Make smooth, timely, and correct control inputs during the round out and touchdown, and, for tricycle gear airplanes, keep the nose wheel off the surface until loss of elevator effectiveness</Li>
<Li>Touch down at a proper pitch attitude with minimum sink rate, no side drift, and with the airplane’s longitudinal axis aligned with the center of the runway</Li>
<Li>Maintain elevator as recommended by manufacturer during rollout and exit the “soft” area at a speed that would preclude sinking into the surface</Li>
<Li>Execute a timely go-around if the approach cannot be made within the tolerances specified above or for any other condition that may result in an unsafe approach or landing</Li>
<Li>Maintain proper position of the flight controls and sufficient speed to taxi while on the soft surface</Li></List>
<Heading tag='h2'>Common Errors</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Excessive descent rate on final approach</Li>
<Li>Excessive airspeed on final approach</Li>
<Li>Unstable approach</Li>
<Li>Round out too high above the runway surface</Li>
<Li>Poor power management during round out and touchdown</Li>
<Li>Hard touchdown</Li>
<Li>Inadequate control of the airplane weight transfer from wings to wheels after touchdown</Li>
<Li>Allowing the nose-wheel to “fall” to the runway after touchdown rather than controlling its descent.</Li></List>
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

