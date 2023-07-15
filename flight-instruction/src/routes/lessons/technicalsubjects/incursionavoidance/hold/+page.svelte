<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Hold Position Markings</Heading>
<P>More information about hold position markings can be found in the AIM:</P>
<Button href='https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html#$paragraph2-3-5'>AIM 2-3-5: Holding Position Markings</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Runway Holding Position Markings</Heading>
<P>These markings indicate where an aircraft MUST STOP when approaching a runway without a clearance. They consist of four yellow lines, two solid and two dashed, spaced six or twelve inches apart, and extending across the width of the taxiway or runway.</P>
<Heading tag='h5'>Runway Holding Position Markings on Taxiways</Heading>
<P>When you are instructed to hold short of a runway, you MUST stop before the runway holding position markings.</P>
<P>Additionally, an aircraft exiting a runway is not clear of that runway until they have fully cross the holding position markings.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/bb1c5b0b-a445-474c-c7af-76037aa07d00/public"></Img></div>
<Heading tag='h5'>Runway Holding Position Markings on Runways</Heading>
<P>These markings will indicate where an aircraft MUST STOP on a runway when ATC is using Land and Hold Short Operations.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/f650a36b-fdbe-4fda-5eb7-0620ba4e3c00/public"></Img></div>
<Heading tag='h5'>Holding Position Markings on Taxiways Located in Runway Approach Areas</Heading>
<P>These markings are used at some airports where it is necessary to hold an aircraft on a taxiway located in the approach or departure area of a runway so that the aircraft does not interfere with the operations on that runway.</P>
<P>Example of ATC clearance:</P>
<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">Hold short of runway XX approach or runway XX departure area</P></Blockquote>
<P>The pilot MUST stop so that no part of the aircraft extends beyond the holding position marking.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/86ac122b-e6e4-420e-9e2b-bc07597bd700/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Holding Position Markings for Instrument Landing Systems</Heading>
<P>Hold position markings indicate the boundary where the ILS critical area begins.</P>
<P>They consist of two yellow solid lines spaced two feet apart connected by pairs of solid lines spaced ten feet apart extending across the width of the taxiway, as shown below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/58313eee-5087-4e2a-3de1-dceb26234e00/public"></Img></div>
<P>A sign with an inscription in white on a red background is located adjacent to the hold position markings.</P>
<P>If you are instructed by ATC to hold short of the ILS critical area, you MUST STOP so that not part of the aircraft extends beyond the holding position marking.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Holding Position Markings for Intersecting Taxiways</Heading>
<P>Consist of a single dashed line extending across the width of the taxiway, as shown below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/99f1f635-458a-4f7d-54b8-f975a5e55900/public"></Img></div>
<P>When instructed to hold short of a taxiway, you MUST STOP so that no part of the aircraft extends beyond the holding position marking.</P>
<P>If you are instructed to hold short of a taxiway without a hold position marking, you need to stop to give adequate room for crossing traffic.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Surface Painted Holding Position Signs</Heading>
<P>These signs have a red background with a white inscription and supplement the signs located at the holding position.</P>
<P>These are normally used when the width of the holding position on the taxiway is greater than 200 feet.</P>
<P>It is located on the left side of the taxiway centerline on the holding side nad prior to the holding position marking.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/52b49620-881f-4e73-f92a-510c0cf49b00/public"></Img></div>
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

