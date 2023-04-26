<script>
     import NavBar from '../../components/NavBar.svelte'; 
     import LessonCard from '../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Go-Arounds</Heading>
<P>Learning how to abort a landing is arguably the most important step in learning how to land safely. While it may seem like a simple task, there are many mistakes that pilots can make that can lead to potentially dangerous situations. This lesson will focus on when to do a go-around and common mistakes that people make when attempting them.</P>
<Heading tag='h2'>When to Execute a Go-Around</Heading>
<P>A go-around should be executed whenever any approach and landing parameters deviate from expectations or when it is hazardous to continue. A few common reasons you may need to go around are below:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Avoiding a conflict on a runway (could be other traffic or any obstruction)</Li>
<Li>Not properly aligned with the runway centerline</Li>
<Li>Wind shear on final</Li>
<Li>Being too fast or too slow</Li>
<Li>Being too high or too low</Li>
<Li>When something doesn't feel right</Li></List>
<P>Think about it like this: expect to go around, landing is just a bonus. Your flight instructor will never be mad at you for going around, even if there was nothing wrong with your approach. It's always better to be extra cautious. There is no risk in going around, assuming you know how to properly execute one, but there is a lot of risk in continuing an approach that you don't feel comfortable with.</P>
<Heading tag='h2'>Don't Delay When Something is Off</Heading>
<P>There are many reasons why people continue bad landings, however, they often happen for two reasons: landing expectancy and pride.</P>
<Heading tag='h5'>Landing Expectancy</Heading>
<P>The belief that conditions are not as threatening as they are and the approach is sure to terminate with a safe landing. This false assumption can affect all pilots, regardless of their experience level. Remember, always take the safe choice, and never underestimate the hazards you are facing.</P>
<Heading tag='h5'>Pride</Heading>
<P>Going around is not a failure, in fact, it is a good measure of aeronautical decision-making. Maybe you're worried about impressing your DPE, or just a passenger. Trust me, neither of them are going to be impressed with you continuing a bad landing and ripping off the landing gear. Turning a bad approach into an even worse landing is never a good idea, no matter how embarrassing it might feel.</P>
<Heading tag='h2'>Executing a Go-Around</Heading>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/qNfIi53.png></Img></div>
<P>A proper go-around includes three principles, in this order:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Power</Li>
<Li>Attitude</Li>
<Li>Configuration</Li></List>
<Heading tag='h5'>Power</Heading>
<P>This should be your first concern. As soon as you decide to go around, apply full power. You need to overcome the inertia of the airplane's descent and increase your airspeed. Remember that the application of power should be smooth, so don't just slam the throttle forward. It should take about 3-5 seconds to get to full throttle in the 172S.</P>
<Heading tag='h5'>Attitude</Heading>
<P>Remember that when you add full power the nose is going to rise. Combining this with your flap settings and low airspeed can quickly cause a hazardous attitude. Be ready to quickly react and set a Vx climb attitude. Also, remember that increasing pitch past a Vx attitude will not increase your climb performance. If you are still sinking, it is better to allow the airplane to touch down on the ground vs increasing pitch further and potentially stalling.</P>
<P>Your trim is also a large concern here. Depending on the conditions of the day, you will most likely be trimmed for a higher pitch attitude than you are used to during a normal takeoff climb, especially when factoring in flaps. Counteract this with the elevator, and adjust your trim as necessary once you are under control.</P>
<P>As you increase pitch and power, make sure to be proactive with your rudder usage. Quickly switching to a high power setting and angle of attack will result in strong left-turning tendencies, so combine your power application and pitch adjustments with sufficient right rudder to maintain coordination throughout the go-around.</P>
<Heading tag='h5'>Configuration</Heading>
<P>Our final concern during a go-around is to retract the flaps. Flaps, especially when fully extended, will dramatically reduce climb performance. However, retracting the flaps at too low of an airspeed can result in a stall or rapid sink rate. </P>
<Heading tag='h2'>Ground Effect</Heading>
<P>During a late go around, remember that aircraft performance is increased in ground effect. Because of the reduction of induced drag in a ground effect, be careful to not increase pitch rapidly before reaching an appropriate airspeed. Quickly climbing out of ground effect at too low of an airspeed can be hazardous.</P>
<Heading tag='h2'>Full Procedure</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Apply full power and set VX pitch attitude. Retract flaps to 20°.</Li>
<Li>Make “Going around,” CALLOUT</Li>
<Li>Once the aircraft has accelerated to 60 KIAS, make “(Current Airspeed), flaps 10,” CALLOUT and retract flaps to 10°</Li>
<Li>Clear of obstacles and above 65 KIAS make “(Current Airspeed), flaps 0,” CALLOUT and retract flaps to 0°</Li>
<Li>Set VY pitch attitude and climb at 74 KIAS</Li>
<Li>Once above 1000’ AGL, Perform CLIMB CHECKLIST</Li></List>
<Heading tag='h2'>Common Errors</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Failure to recognize a condition that warrants a rejected landing</Li>
<Li>Indecision</Li>
<Li>Delay in initiating a go-around</Li>
<Li>Failure to apply maximum allowable power in a timely manner</Li>
<Li>Abrupt power application</Li>
<Li>Improper pitch attitude</Li>
<Li>Failure to configure the airplane appropriately</Li>
<Li>Attempting to climb out of ground effect prematurely</Li>
<Li>Failure to adequately compensate for torque/P factor</Li>
<Li>Loss of aircraft control</Li></List>
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
<Heading tag='h2'>Further Reading</Heading>
<Button href='https://www.aopa.org/training-and-safety/students/presolo/skills/go-around'>AOPA - Go Around</Button>
<Button href='https://www.aopa.org/news-and-media/all-news/2018/february/flight-training-magazine/career-pilot-go-around'>AOPA - Why not Go Around?</Button>
<Button href='https://www.boldmethod.com/learn-to-fly/maneuvers/your-guide-to-flying-go-arounds/'>Bold Method - Prevent A Crash: Your Guide To Flying Go-Arounds</Button>
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

