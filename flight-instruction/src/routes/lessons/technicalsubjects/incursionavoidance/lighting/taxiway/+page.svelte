<script>
     import NavBar from '../../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Taxiway Lighting</Heading>
<P>More information about taxiway lighting can be found in the AIM:</P>
<Button href='https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html#$paragraph2-1-10'>AIM 2-1-10: Taxiway Lights</Button>
<P>Taxiway lighting is extremely useful at night for pilots to properly orient themselves and avoid collisions with other aircraft and obstacles.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Taxiway Edge Lights</Heading>
<P>These outline the edges of taxiways during darkness or restricted visibility conditions.</P>
<P>Edge lighting is blue, and can often times be adjusted at controlled airports on request.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Taxiway Centerline Lights</Heading>
<P>These are used to facilitate ground traffic under low visibility conditions.</P>
<P>They are located along the taxiway centerline in straight line portions, on the centerline of curved portions, and along designated taxiing paths in portions of runways, ramp, and apron areas.</P>
<P>Centerline lights are steady burning and emit green light.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Clearance Bar Lights</Heading>
<P>These are installed at holding positions on taxiways to make them clear.</P>
<P>These are three in-pavement steady-burning yellow lights.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Runway Guard Lights</Heading>
<P>These are installed at taxiway/runway intersections.</P>
<P>They are primarily used to enhance the conspicuity of taxiway/runway intersections during low visibility conditions, cut can be used in all weather conditions.</P>
<P>They consist of either a pair of elevated flashing yellow lights on either side of the taxiway, or a row of in-pavement yellow lights installed across the entire taxiway at the runway holding position marking.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Stop Bar Lights</Heading>
<P>Stop bar lights are normally used in low visibility conditions (below 1,200 feet RVR).</P>
<P>They consist of a row of red, unidirectional, steady-burning in-pavement lights across the entire taxiway at the runway holding position.</P>
<P>NEVER cross an illuminated stop bar, even if you have an ATC clearance.</P>
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

