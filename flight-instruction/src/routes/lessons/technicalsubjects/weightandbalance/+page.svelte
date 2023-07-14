<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Weight and Balance</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Weight and Balance Terms</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Effect of Weight and Balance on Aircraft Performance</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Methods of Weight and Balance Control</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Determination of Total Weight and Center of Gravity</Heading>
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

