<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Optical Illusions</Heading>
<P>It is very important to understand the impact that optical illusions can have on a pilot, especially since many of these are common during the landing phase of flight. Having an incorrect understand of how far away from the runway or how high off the ground you are can be fatal.</P>
<P>Always anticipate the possibility of optical illusions. Preflight planning can help with this tremendously. Know the runway slopes of each airport you might fly into, and know the dimensions of the runway.</P>
<P>When going through a weather briefing, anticipate which weather conditions could lead to optical illusions.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Runway Width Illusion</Heading>
<P>A narrow runway can create the illusion that the aircraft is at a higher altitude than it actually is, especially if the runway is longer than normal.</P>
<P>A wider than normal runway will have the opposite effect.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/0becc340-f933-41c0-a2ec-7fb072bd5500/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Runway and Terrain Slopes Illusion</Heading>
<P>A downsloping runway will create the illusion that the aircraft is lower than it actually is, leading to a higher approach.</P>
<P>An upsloping runway can create hte illusion that the aircraft is higher than it actually is, leading to a lower approach.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/28d6f9e4-215c-4f95-45ba-2e51c4e08b00/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Featureless Terrain Illusion</Heading>
<P>This illusion comes from there being little to no surrounding ground features, such as an approach flown over the water. This can create the illusion that the airplane is higher than it actually is.</P>
<P>This is also called the "black hole approach" as it can lead pilots to fly at an unsafe altitude or even touchdown before the beginning of the runway.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Water Refraction</Heading>
<P>If there is rain on the windshield, it can create the illusion of being at a higher altitude due to the horizon appearing lower than it is. </P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Haze</Heading>
<P>Haze can create the illusion of being at a greater distance and height from the runway.</P>
<P>This can cause a pilot to fly a lower approach than what is considered safe.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Fog</Heading>
<P>Flying into fog can create the illusion of pitching up.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Ground Lighting Illusions</Heading>
<P>Lights moving along a straight path can be mistaken for runway lighting.</P>
<P>Additionally, bright runway and approach lighting systems can create the illusion of being at a closer distance to the runway. This can cause a pilot to fly a higher than normal approach.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>More Information</Heading>
<P>The FAA brochure linked below goes into detail on some of the common visual illusions that are experienced during flight:</P>
<Button href='https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/spatiald_visillus.pdf'>FAA Brochure: Visual Illusions</Button>
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

