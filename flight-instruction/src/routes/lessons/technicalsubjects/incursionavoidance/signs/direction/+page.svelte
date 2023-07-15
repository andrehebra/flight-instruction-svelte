<script>
     import NavBar from '../../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Direction Signs</Heading>
<P>More information about direction signs can be found in the AIM:</P>
<Button href='https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html#$paragraph2-3-10'>AIM 2-3-10: Direction Signs</Button>
<P>Direction signs have a yellow background with a black inscription and are normally located on the left side of a taxiway.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Direction Sign With Location Sign</Heading>
<P>Below is a sign that is accompanied by a location sign indicating the current taxiway.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/6f08d896-3d0e-4751-5e8c-9d84cadca700/public"></Img></div>
<P>Notice that all of the taxiways to the left are left of the location sign and all of the taxiways to the right are to the right of the location sign.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Direction Sign for Runway Exit</Heading>
<P>When indicating an exit from a runway, the direction sign will be located on the same side of the runway as the exit. The sign will look similar to what is shown below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/ef8c70a5-a5cd-42c2-14da-4a2e6474fd00/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Direction Sign for One Intersecting Taxiway</Heading>
<P>When there is only one intersecting taxiway, it can be indicated with a direction sign that has arrows pointing in both directions that the taxiway cross through, as shown below: </P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/9bfdbb01-e9dc-4b26-9181-c883dd872a00/public"></Img></div>
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

