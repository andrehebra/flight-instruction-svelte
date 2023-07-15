<script>
     import NavBar from '../../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Destination Signs</Heading>
<P>More information about destination signs can be found in the AIM:</P>
<Button href='https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html#$paragraph2-3-11'>AIM 2-3-11: Destination Signs</Button>
<P>Similar to direction signs, destination signs have a yellow background and a black inscription which indicates a destination on the airport.</P>
<P>Common indicated destinations are:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Runways</Li>
<Li>Aprons</Li>
<Li>Terminals</Li>
<Li>Military areas</Li>
<Li>Civil aviation areas</Li>
<Li>Cargo areas</Li>
<Li>FBOs</Li></List>
<P>Destination signs will have an arrow that points in the direction of the destination. An example of a destination sign that points towards a military area is below: </P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/4d07517c-ede6-49b1-6b0a-64fbe64fea00/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Multiple Destinations</Heading>
<P>If two destinations are in the same direction, it is common to have a sign that lists both with a dot in between them. An example of this is shown below, where two runways are in a similar direction:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/22cd1e01-1223-4320-1678-0c78fddf4f00/public"></Img></div>
<P>If the destinations are not along the same route or far away from one another, they will be divided with a black line, as shown below: </P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/9a72fe7a-d703-4e82-7708-1308e7cd3000/public"></Img></div>
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

