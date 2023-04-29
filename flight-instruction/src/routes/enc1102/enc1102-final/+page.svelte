<script>
     import NavBar from './components/NavBar.svelte'; 
     import LessonCard from './components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Aviation Safety Perceptions vs Reality</Heading>
<P>As countless individuals in the industry improve aviation safety on a daily basis, public perception of aviation safety has often lagged behind the actual data. Unfortunately, the current systems have failed to provide proper communication channels that allow the public to fully understand the safety nets put in place by the industry that make flying by far the safest form of transport.</P>
<P>Through the various learning outcomes presented here, ENC1102 has prepared me to have an impact on the aviation community. Take a look around at each of the learning outcomes above!</P>
<P>Additionally, take a look at some pilot lesson plans that I have created to aid your understanding of how flying works:</P>
<Button href='/enc1102/enc1102-final/maneuvers/basicinstrument'>Basic Instrument Maneuvers</Button>
<Button href='/enc1102/enc1102-final/maneuvers/goaround'>Go-Around Proecdures</Button>
<Button href='/enc1102/enc1102-final/maneuvers/stalls'>Power-Off Stalls</Button>
<Hr class="my-8" height="h-px" />
<P>While each of the learning outcomes are examined in detail on each page, it is worthwhile mentioning the importance they play together. The work in this portfolio is presented as one complete piece, but each of the outcomes stack on top of each other, meaning that no single outcome is more important than the rest. </P>
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

