<script>
     import NavBar from '../../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Location Signs</Heading>
<P>More information about location signs can be found in the AIM:</P>
<Button href='https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html#$paragraph2-3-9'>AIM 2-3-9: Location Signs</Button>
<P>Location signs are used to identify either a taxiway or runway on which the aircraft is located. They provide a visual cue to pilots to assist them in determining when they have exited an area.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Taxiway Location Sign</Heading>
<P>This sign has a black background with a yellow inscription and yellow border. </P>
<P>The inscription is the designation of the taxiway on which the aircraft is located.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/6f08d896-3d0e-4751-5e8c-9d84cadca700/public"></Img></div>
<P>These signs can also be collocated with runway holding position signs, as shown below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/20872e5c-a232-493c-5016-f535f9164600/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Runway Location Sign</Heading>
<P>This sign has a black background with a yellow inscription and yellow border, as shown below: </P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/b18ce55a-a4ec-487f-07ca-3985fd087600/public"></Img></div>
<P>These are installed on the side of the runway to indicate which runway the pilot is currently on.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Runway Boundary Sign</Heading>
<P>This sign has a yellow background with a black inscription that depicts the hold position markings typically found on the ground, as shown below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/6da581ec-51a4-456f-78fb-32de5f5b9400/public"></Img></div>
<P>This sign faces the runway and is visible to the pilot exiting the runway.</P>
<P>It is designed to help pilots judge when they are clear of the runway.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>ILS Critical Area Boundary Sign</Heading>
<P>This sign has a yellow background with a black inscription that depicts the ILS holding position marking, as shown below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/53b29f40-1df5-4674-bb6c-630689a48500/public"></Img></div>
<P>It is intended to proved pilots with a visual cue to judge when they are clear of the ILS critical area.</P>
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

