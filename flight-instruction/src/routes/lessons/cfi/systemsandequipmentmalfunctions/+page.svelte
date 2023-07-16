<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Systems and Equipment Malfunctions</Heading>
<P>It is imperative to always make decisions in the best interest of safety. You need to know which decisions to make, especially in situations where the isn't much time.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Smoke, fire, or both, during ground or flight operations</Heading>
<P>Always assume that smoke means fire!</P>
<P>A fire will typically be either electrical or engine related.</P>
<Heading tag='h5'>Electrical/Cabin Fire in Flight </Heading>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/0cc50268-02bf-4025-ca91-38b88246c200/public"></Img></div>
<Heading tag='h5'>Fire During Engine Start: </Heading>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/c921e631-952a-4f6b-d406-dda0b7707b00/public"></Img></div>
<Heading tag='h5'>Engine Fire in Flight</Heading>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/d0620407-0bc7-4201-997c-f4681bb49d00/public"></Img></div>
<Heading tag='h5'>Wing Fire in Flight</Heading>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/72fed903-ba8c-4e3e-90ce-cba200708900/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Rough running engine or partial power loss</Heading>
<P>Remember that these can be more common than a total loss of power and difficult to diagnose.</P>
<P>It is possible that one of the magnetos has failed and is firing at the incorrect time, cycling the magnetos could be helpful.</P>
<P>It could be useful to go through the engine failure in flight checklist to make sure that there is adequate fuel going into the engine.</P>
<P>If you are unable to fix the problem, it will be a decision between attempting to make an airfield or landing off airport.</P>
<P>If you are within gliding distance of an airport, land there immediately.</P>
<P>If not, consider the risks in attempting to go to another airport vs the landing options you currently have within gliding distance.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Loss of engine oil pressure</Heading>
<P>This is an emergency and requires immediate attention.</P>
<P>Follow the checklist, and if the oil temperature continually increases, land immediately.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/3c479c72-1f36-4c12-286e-3f7d14fd2800/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Fuel starvation</Heading>
<P>The first signs of fuel starvation will generally be a rough running engine.</P>
<P>Assuming you haven't actually run out of gas, the first step to do would be to follow the engine failure in flight checklist to make sure that fuel is properly going into the engine.</P>
<P>If you have run out of fuel, go ahead and start planning for a forced landing, hopefully at an airport within gliding distance.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Engine overheat</Heading>
<P>An overheating engine is an event that requires immediate action.</P>
<P>It is a good idea to reduce the power that you are using, and if you have altitude available, increase your airspeed to allow the engine to cool down.</P>
<P>This could likely be the beginning of an engine failure, so keep that in mind as you are flying and look out for potential landing spots.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Hydraulic malfunction</Heading>
<P>If for some reason you have a hydraulic malfunction, it will only affect the brakes.</P>
<P>This is the main reason we check the brakes when initially taxiing out.</P>
<P>If you touchdown and find that your brakes are not working, consider if it would be possible to go around while you still have sufficient airspeed.</P>
<P>If you are already slowing down, attempt to use aerodynamic braking and retract the flaps to increase the amount of weight on the wheels.</P>
<P>Attempt to keep the airplane straight with the rudder peddles for as long as possible until you come to a stop.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Electrical malfunction</Heading>
<P>Electrical malfunctions can come in a variety of forms, but they need to be taken seriously.</P>
<P>Alternator malfunctions will generally not be directly dangerous, but make sure to turn off the alternator switch and consider landing while you still have electrical power from the main battery to power the flaps.</P>
<P>If you have a total electrical failure, remember that you can fly the airplane visually. With no flaps available, you should consider a longer runway if it is available to you and increase your approach speed.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Carburetor or induction icing</Heading>
<P>Induction icing will generally only be possible in conditions that are conducive to airframe icing.</P>
<P>In this case, attempt to exit visible moisture as quickly as possible and get to an altitude with a lower temperature.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Door or window opening in flight</Heading>
<P>ALWAYS FLY THE AIRPLANE</P>
<P>It might be jarring, but you and your passengers should be seated with your seat belts fastened.</P>
<P>As you are maintaining control of the airplane, attempt to close the window or door.</P>
<P>If you are not able to close it, attempt a landing at a nearby airport to fix and investigate the issue.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Inoperative or “runaway” trim</Heading>
<P>During a runaway trim situation, you want to fly the airplane and disconnect the source of power to the trim, which in this case is the autopilot.</P>
<P>Pull the autopilot circuit breaker to close the connection and retrim the airplane as necessary.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Landing gear or flap malfunction</Heading>
<P>A flap malfunction will either result in the flaps not extending or retracting at all or one flap extending or retracting more than the other.</P>
<P>If one flap is not extending, be careful and remember that no flap landings are perfectly acceptable.</P>
<P>If one flap is not retracting, consider your options. If you need to climb, you may be able to correct for the yawing/rolling generated by the uneven flap extension. If the airplane is under control and not descending, it could be acceptable to leave the flaps extended.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Pressurization malfunction</Heading>
<P>The time of useful consciousness at high altitudes is very short. Descend quickly, and always use supplemental oxygen if you have it available. </P>
<P>There have been many fatalities resulting from pressurization malfunctions that could have been prevented.</P>
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

