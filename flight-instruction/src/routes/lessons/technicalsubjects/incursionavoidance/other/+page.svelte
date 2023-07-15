<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Other Airport Markings</Heading>
<P>More information about other airport markings can be found in the AIM:</P>
<Button href='https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html#$paragraph2-3-6'>AIM 2-3-6: Other Markings</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Vehicle Roadway markings</Heading>
<P>Vehicle roadway markings are used to define a path for vehicle operations on or crossing areas that are also intended for aircraft.</P>
<P>These markings consist of a white solid line to delineate each edge of the roadway and a dashed line to separate lanes within the edges of the roadway.</P>
<P>Zipper markings can also be used to delineate the edges of the vehicle roadway.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/142625b9-a8cc-43fa-298d-5bf79f717500/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>VOR Receiver Checkpoint Markings</Heading>
<P>The VOR receiver checkpoint consists of a painted circle with an arrow in the middle, which is aligned in the direction of the checkpoint azimuth.</P>
<P>This marking, and associated sign, will be located on the airport apron or taxiway at a specific point.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/1fb600cd-1bfe-4898-413f-1f9d7ce77800/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Nonmovement Area Boundary Markings</Heading>
<P>These markings delineate the movement area and the nonmovement area.</P>
<P>Remember, the movement area is the area where ATC clearances are required, while the nonmovement area is uncontrolled.</P>
<P>The boundary consists of two yellow lines (one solid and one dashed) 6 inches in width. The solid line is located on the nonmovement area side, while the dashed yellow line is located on the movement area side. A depiction is below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/afbd0734-ca93-4b2b-1928-2f3ce477e900/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Marking and Lighting of Permanently Closed Runways and Taxiways</Heading>
<P>Lighting circuits will be disconnected for closed runways and taxiways.</P>
<P>The runway threshold, runway designation, and touchdown markings will be obliterated.</P>
<P>Yellow crosses will be placed at the end of the runway and at 1,000 foot intervals.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/59be3d26-24fa-4cce-4819-351c50fd1300/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Temporarily Closed Runways and Taxiways</Heading>
<P>When a runway is temporarily closed, yellow crosses will be placed on each end of the runway.</P>
<P>These could also be raised crosses.</P>
<P>Additionally, a visual indication may not be present depending on the reason for the closure. ALWAYS check the NOTAMs and the ATIS for runway closure information.</P>
<P>When a taxiway is closed, it will either be barricaded, or have yellow crosses installed at the entrance to the taxiway.</P>
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

