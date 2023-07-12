<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>The Sinuses</Heading>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/0b02a4c7-aa1f-49ec-57ef-2a2214df6600/public"></Img></div>
<P>Sinuses are simply cavities in your head which are connected by narrow passageways. The sinuses make mucus that drain out of your nose. Similar to ear block, these passages can become blocked by inflammation or an excessive amount of mucus production.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Sinus Block</Heading>
<P>When the sinuses are unable to equalize to the outside air pressure, they become blocked. This can be incredibly painful. Symptoms include:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Facial pain or pressure</Li>
<Li>Nasal congestion</Li>
<Li>Nasal discharge (possibly bloody)</Li>
<Li>Sinus headache</Li>
<Li>Reduced sense of smell and taste</Li>
<Li>Coughing</Li></List>
<Heading tag='h5'>Preventative Measures to Reduce Risk of Sinus Block</Heading>
<P>It is important to always stay hydrated, especially before and during a flight. This will help to thin the mucus in the sinus cavities and promote discharge.</P>
<P>Additionally, avoid anything that could cause an allergic reaction, as this will cause the sinuses to become inflamed.</P>
<Heading tag='h5'>Dealing with Sinus Block in Flight</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Make sure to drink plenty of water immediately if you begin to feel symptoms of sinus block</Li>
<Li>Chew and swallow something as this will help to equalize the pressure</Li>
<Li>Stay upright. This will promote sinus drainage and allow the sinus cavities to equalize</Li></List>
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

