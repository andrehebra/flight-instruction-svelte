<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Spatial Disorientation</Heading>
<P>There are three systems that work together in the body to maintain orientation. Those are the:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Vestibular system: inner ear that senses position by the way we are balanced</Li>
<Li>Somatosensory system: nerves in the skin, muscles, and joints that sense position based on gravity, feeling, and sound</Li>
<Li>Visual system: eyes, which sense position based on what is seen</Li></List>
<P>All of these systems are required to work together to maintain orientation. They are, however, susceptible to common illusions in flight, as they were not designed to function with the complex forces being exerted on the body by an aircraft. Below are the common illusions that pilot's should be aware of (these can be remembered by using the acronym "ICEFLAGGS"):</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Inversion Illusion</Heading>
<P>When there is an abrupt change from a climb to straight and level flight, the pilot can experience the sensation of tumbling backwards.</P>
<P>Generally, the pilot will push the nose forward as an incorrect reaction. This can intensify the illusion.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Coriolis Illusion</Heading>
<P>The Coriolis illusion is a type of vestibular illusion that can occur during prolonged constant-rate turns, particularly in instrument flying. It arises when a pilot makes a rapid head movement while in a constant-rate turn, causing a temporary sensation of rotation or tumbling.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Elevator Illusion</Heading>
<P>This arises from an abrupt vertical acceleration, such as an updraft. This can cause the pilot into thinking they are climbing and cause the false reaction of pitching down.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>False Horizon</Heading>
<P>A sloping cloud formation, or an obscured horizon can create the illusion of not being aligned with the actual horizon. This may cause a pilot to align with the horizon they believe to be correct, and put the plane into an unsafe or unusual attitude.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>The Leans</Heading>
<P>If a turn is entered into very slowly, the inner ear may not notice the banked attitude. Rapidly returning back to level flight can create the illusion of banking in that direction, and cause the pilot to incorrectly recover by banking in the opposite direction.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Autokinesis</Heading>
<P>This is caused by staring at a single point of light against a dark background for more than a few seconds. The light will appear to move, which may cause the pilot to attempt to align with the light.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Graveyard Spin</Heading>
<P>When recovering from a spin, the abrupt stop in motion can cause the sensation of a spin in the opposite direction. Attempting to correct for this false sensation could cause the airplane to enter into a spin in the same direction as the original spin.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Graveyard Spiral</Heading>
<P>After remaining in a prolonged turn, the pilot may have the sensation of not turning. Without noticing this error, a pilot may attempt returning to wings level, where they will have the sensation of turning in the opposite direction, or they may not notice the turn at all. Either way, it will typically result in a descent. If this is not corrected for, it will end with the airplane impacting the ground.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Somatogravic Illusion</Heading>
<P>A rapid acceleration creates the same sensation as tilting backwards, while a deceleration creates the sensation of tilting forwards. An incorrect response from the pilot could result in excessive pitch down or up in response to the illusion.</P>
<P>This is actually the way that many airplane simulators create the sensation of acceleration and deceleration by pitching up or down.</P>
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

