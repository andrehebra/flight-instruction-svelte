<script>
     import NavBar from '../../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Information Signs</Heading>
<P>More information about information signs can be found in the AIM:</P>
<Button href='https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html#$paragraph2-3-12'>AIM 2-3-12: Information Signs</Button>
<P>Information signs have a yellow background with a black inscription. They are used to provide information to pilots on on things such as:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Areas that cannot be seen from the control tower</Li>
<Li>Applicable radio frequencies</Li>
<Li>Noise abatement procedures</Li></List>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/50103a86-4554-4d7d-55ab-ecd0c7754900/public"></Img></div>
<P>Note that the airport operator determines the need, size, and location for these signs.</P>
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

