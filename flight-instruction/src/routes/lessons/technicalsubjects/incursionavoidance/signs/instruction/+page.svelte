<script>
     import NavBar from '../../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Mandatory Instruction Signs</Heading>
<P>More information about mandatory instruction signs can be found in the AIM:</P>
<Button href='https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html#$paragraph2-3-8'>AIM 2-3-8: Mandatory Instruction Signs</Button>
<P>Mandatory instruction signs always have a red background with a white inscription. They are used to denote:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Entrance to a runway or critical area</Li>
<Li>Areas where an aircraft is prohibited from entering</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Runway Holding Position Sign</Heading>
<P>This sign will be located at holding positions on taxiways that intersect a runway or on runways that intersect other runways.</P>
<P>The inscription on the sign contains the designation of the intersecting runway, as shown below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/e4a716c8-a372-4b2d-bb1b-6b06a6acae00/public"></Img></div>
<P>In the image above, the runway 15 threshold would be to the left and the runway 33 threshold would be to the right.</P>
<P>When the taxiway is located at the end of the runway, only the designation of the takeoff runway may appear on the sign, as shown below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/6540de56-2914-44a3-468c-ada128a12b00/public"></Img></div>
<Heading tag='h5'>Taxiways That Intersect the Intersection of Two Runways</Heading>
<P>When this happens, signs will indicate the intersecting runways and include arrows pointing in the relative direction to each runway threshold, as shown below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/658b32ef-1158-463e-0b7d-7503b7a46900/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Runway Approach Area Holding Position Sign</Heading>
<P>These are used to hold aircraft on a taxiway located in the approach or departure area for a runway so that the aircraft does not interfere with operations on that runway. An example of this sign is below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/c9bae66a-9ecf-4a43-8ecb-cdb14bfcad00/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>ILS Critical Area Holding Position Sign</Heading>
<P>This sign is used to hold aircraft outside of the ILS critical area. An example of this sign is below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/7d14eb6b-47c5-49a8-2dee-880499fd9100/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>No Entry Sign</Heading>
<P>A no entry sign simply denotes that aircraft should not enter a specific area.</P>
<P>These can be used in locations where aircraft are only intended to move in one direction.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/e6ef4ad9-2808-4418-4968-2ec711efa800/public"></Img></div>
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

