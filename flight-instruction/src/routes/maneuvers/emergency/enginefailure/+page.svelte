<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Emergency Approach and Landing</Heading>
<P>Simulated emergency approaches not only let you be prepared to handle a real situation, but they also allow you to practice maintaining aircraft control while diagnosing and solving a problem, all while communicating and making critical decisions.</P>
<P>Because of this, remember that your decision-making process needs to be dynamic when simulating emergency approaches. The right course of action will be different depending on your altitude, airspeed, location, and the terrain directly below you.</P>
<Heading tag='h2'>A Note on Engine Failures</Heading>
<P>Generally, emergency approaches to a landing will be simulated by reducing engine power to replicate a total loss of engine power. While this can, and certainly has, happened before, not all engine failures will be the same, and not all of them will result in a total loss of power. Be prepared to deal with things like the loss of individual cylinders or contaminated fuel, which may not result in the engine shutting down, but rather not fully functioning.</P>
<Heading tag='h2'>Aviate, Navigate, Communicate</Heading>
<P>Just like every other maneuver, your first priority is to fly the airplane. When simulating emergency procedures especially, however, this is incredibly important. A successful landing is far more important than talking on the radio, and while you will have many other factors to deal with, never let them take over your main focus, which is to ALWAYS FLY THE AIRPLANE.</P>
<Heading tag='h2'>Memory Items</Heading>
<P>A real emergency is not the time to be worrying about finding the right page in a checklist. You must have the memory items for all emergency procedures memorized and readily available to you.</P>
<Heading tag='h5'>ABCDE</Heading>
<P>Another great acronym to have memorized is ABCDE, which stands for:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Airspeed</Li></List>
<P>When an engine failure occurs, pitch and trim for your best glide speed. Having that airspeed trimmed will allow you to focus more on diagnosing the problem and not on minor pitch adjustments. You might as well make flying the airplane as simple as possible while you diagnose the problem and make decisions</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Best Field</Li></List>
<P>Find the best location to land the airplane in the event you cannot fix the problem and head directly toward it. Airports are always the preferred option if there is no doubt you can glide to one, but next would be any reasonably flat area.</P>
<P>In Florida, there are plenty of smooth fields and roads that could make potentially good landing options. A great article on picking a landing spot is linked below, make sure to read it:</P>
<Button href='https://www.boldmethod.com/learn-to-fly/navigation/if-your-engine-fails-how-should-you-pick-your-off-field-landing-on-a-spot/#:~:text=Landing%20in%20dense%20vegetation%2C%20like,the%20best%20options%20for%20landing.'>How to Pick an Off-Field Landing Site if Your Engine Fails - Bold Method</Button>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Checklist</Li></List>
<P>Go through your emergency flow and verify it with the checklist. This is where having procedures memorized is critical. Verifying is great if you have the time and altitude to do it, but if you don't being able to go through a flow quickly can make the difference of being able to fix a problem.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Declare an Emergency</Li></List>
<P>Declare an emergency either to a frequency you're currently communicating with, or on 121.5. You can quickly switch to 121.5 on the G1000 by holding the frequency switch button for a few seconds and it will put it into the active frequency. Also remember to squak 7700 so that you will be highlighted on the controllers radar.</P>
<P>Your emergency declaration should include your location and intentions. For example, if you lose your engine over Lake Apopka, it would look something like this:</P>
<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">Mayday Mayday Mayday, Skyhawk 55294, 3,000 feet, north shore lake Apopka, Engine Failure, Attempting to land at X-Ray 04</P></Blockquote>
<P>When you do declare an emergency, remember that ATC is going to try to help to the best of their ability. This may include things like possible landing options or vectors. If, however, they continually ask you non-pertinent questions you do not need to respond. Again, remember our priority: Aviate, then navigate, then communicate. If responding to a question will keep you from going through the proper checklist, either respond with standby or don't respond at all.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Execute the landing</Li></List>
<P>If you are unable to fix the problem, you are committed to landing. Your goal is to land with the minimum amount of energy to reduce the impact on yourself and your passengers. Incidental damage to the airplane is not of concern at this point.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Estimating Your Glide Range</Heading>
<P>When you consistently practice engine failures and emergency approaches, it will become far easier to predict how far you can glide by using visual references. However, there are far more accurate methods we can use to predict our glide range.</P>
<P>An estimate of the distance you can glide is in the POH. The 172SP will have an approximate glide ratio of 9:1 with the flaps up and at 68 KIAS.</P>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/hr8Y2zr.png></Img></div>
<P>From this information, we can estimate that for every 1,000 ft in altitude we can glide approximately 1.5NM. This estimate, however, does not factor in winds, so remember that a strong headwind will reduce your glide range while a tailwind will increase it.</P>
<P>If using an ADSB reciever, ForeFlight also offers a glide range advisor which can quickly show you an outline of how far you can glide, assuming you have inputted the correct parameters.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>When You Get To Your Spot</Heading>
<P>Once you have reached your landing spot you may find that you are too high. There are a few options you can use to lose altitude, but your primary thought should be to make 360 degree turns to end up on the downwind of your intended landing field.</P>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/gRSCwYJ.png></Img></div>
<P>Each 360 degree turn (with 30 degrees of bank) in the 172 will result in approximately 500 feet of altitude loss. The advantage of spiraling over your landing field is that you will not deviate away from the spot and will always remain within gliding distance.</P>
<P>Using this method, you can prepare to exit on the downind at approximately 1,000 ft AGL and perform a normal pattern landing similar to a power-off 180. </P>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/xxPs5Cu.png></Img></div>
<P>If you are too high on final, you can either execute a forward slip or S-turns depending on what the situation calls for.</P>
<P>Additionally, remember to execute the landing without power checklist and secure the engine to reduce the risk of a fire.</P>
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

