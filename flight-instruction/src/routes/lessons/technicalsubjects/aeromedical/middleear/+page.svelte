<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>The Middle Ear</Heading>
<P>The middle ear refers to a collection of bones (ossicles) and muscles which are contained within the tympanic cavity.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/70747ce1-d1a0-414a-a7d1-0c862124e400/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>The Eardrum (Tympanic Membrane)</Heading>
<P>Air pressure waves are transformed into physical vibrations, which are amplified in the middle ear and transferred to the cochlea (see the diagram above).</P>
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

