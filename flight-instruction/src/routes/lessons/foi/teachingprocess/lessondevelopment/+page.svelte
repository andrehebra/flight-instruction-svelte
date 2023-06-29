<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Lesson Development Methods</Heading>
<P>Lesson development should be individually tailored to both the material and the learner. </P>
<Heading tag='h2'>Past to Present</Heading>
<P>The material in this method is organized chronologically, either from the present to the past or the past to the present. This is generally useful for topics that have historical importance, like radio navigation systems.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Simple-to-Complex</Heading>
<P>Going from simple facts and ideas to an understanding of the phenomena or concepts involved. An example of this from the Aviation Instructor's Handbook:</P>
<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">When beginning a study of jet propulsion the learner might start by considering the forces involved when releasing air from a toy balloon and finish by taking part in a discussion of a complex gas turbine engine. </P></Blockquote>
<P>Additionally, it is acceptable to omit certain information in the beginning in order to maintain simplicity before moving to more complex ideas.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Known to Unknown</Heading>
<P>This method starts by using what the learner already understands, and moving into new, unknown, concepts. This is more useful with a more experienced pilot or one who is familiar with aviation. </P>
<P>This method also helps in associating new concepts with ones the learner is already familiar of.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Most Frequently Used to Least Used</Heading>
<P>By going from more common use cases to less common ones, an instructor can maintain interest in a topic while also covering all necessary topics.</P>
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

