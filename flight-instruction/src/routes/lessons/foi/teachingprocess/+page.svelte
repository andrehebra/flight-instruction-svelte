<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>The Teaching Process</Heading>
<Heading tag='h2'>Preparation of a Lesson</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Organization of Material</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Training Delivery Methods</Heading>
<Heading tag='h5'>Lecture Method</Heading>
<Heading tag='h5'>Guided Discussion Method</Heading>
<Heading tag='h5'>Computer-assisted Method</Heading>
<Heading tag='h5'>Demonstration-Performance Method</Heading>
<Heading tag='h5'>Drill and Practice Method</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Problem Based Learning</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Instruction Aids and Training Technologies</Heading>
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

