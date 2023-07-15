<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Taxiway Markings</Heading>
<P>More information regarding taxiway markings can be found in the AIM:</P>
<Button href='https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html#$paragraph2-3-4'>AIM 2-3-4: Taxiway Markings</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Centerline Markings</Heading>
<P>Centerline markings indicate the center of a taxiway. They can be divided into normal centerline markings and enhanced centerline markings.</P>
<Heading tag='h5'>Normal</Heading>
<P>A single continuous yellow line between 6 to 12 inches in width.</P>
<P>When taxiing, an aircraft should be kept on the the centerline markings. It is important to note, however, that being on the taxiway centerline does not guarantee clearance with other aircraft or objects.</P>
<Heading tag='h5'>Enhanced</Heading>
<P>Enhanced centerlines will normally be found at larger commercial airports.</P>
<P>It consists of a parallel line of yellow dashes on either side of a normal taxiway centerline.</P>
<P>Taxiway centerlines are enhanced for a maximum of 150 feet before the runway holding position marking. The purpose is to warn a pilot that they are approaching a runway holding position marking and should prepare to stop.</P>
<P>An image of an enhanced centerline is below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/5b6d31f7-aba5-4c13-6c91-e125a4aa0500/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Edge Markings</Heading>
<P>Edge markings are used to define the edge of a taxiway. They are normally used when the edge of a taxiway does not correspond with the edge of the pavement.</P>
<Heading tag='h5'>Continuous Markings</Heading>
<P>Define the taxiway edge to another paved surface that is NOT intended for use by aircraft.</P>
<P>Consist of a double yellow line with each line being at least 5 inches in width spaced 6 inches apart.</P>
<Heading tag='h5'>Dashed Markings</Heading>
<P>Define the edge of a taxiway with abutting pavement where that pavement is intended to be used by aircraft.</P>
<P>Consist of a broken double yellow line, with each line being at least 6 inches in width, spaced 6 inches apart. The lines are 15 feet in length with 25 foot gaps.</P>
<P>See the figure below for a depiction of both continuous and dashed edge markings</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/6009edfe-9048-4289-7f91-5bae40ebcd00/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Shoulder Markings</Heading>
<P>Taxiways, holding bays, and aprons sometimes have paved shoulders to prevent blast and water erosion.</P>
<P>These areas are NOT intended for use by aircraft and may not be able to support the weight of an aircraft.</P>
<P>Shoulder markings are used when conditions exist such as islands or taxiway curves that may cause confusion as to which side of the edge stripe is for use by aircraft.</P>
<P>Taxiway shoulder markings are yellow:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/8469a750-010c-459a-a1fc-f8f475c00200/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Surface Painted Taxiway Direction Signs and Location Signs</Heading>
<Heading tag='h5'>Direction Signs</Heading>
<P>Surface painted direction signs are used when it is not possible to provide taxiway direction signs at intersections, or when those signs need to be supplemented.</P>
<P>These signs have a yellow background with a black inscription. They are located adjacent to the centerline on the side that the taxiway turns.</P>
<Heading tag='h5'>Location Signs</Heading>
<P>Location signs have a black background with a yellow inscription and are located on the right side of the taxiway centerline.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/58c836f2-1196-4f0b-a7a3-36e39d223f00/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Geographic Position Markings</Heading>
<P>These markings will be found along low visibility taxi routes and are used during low visibility operations (when the RVR is below 1,200 feet).</P>
<P>They are positioned to the left of the taxiway centerline in the direction of taxiing.</P>
<P>It is comprised of a circle with an outer black ring contiguous to a white ring with a pink circle in the middle.</P>
<P>These are not going to be used during VFR operations, but it is useful to know what they are.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/ab255035-c375-4748-78cd-16b2bd852b00/public"></Img></div>
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

