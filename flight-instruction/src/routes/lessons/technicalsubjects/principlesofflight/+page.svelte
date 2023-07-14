<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Principles of Flight</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Airfoil Design</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Airplane Stability and Controllability</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Turning Tendencies</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Load Factors</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Wingtip Vortices and Precautions</Heading>
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

