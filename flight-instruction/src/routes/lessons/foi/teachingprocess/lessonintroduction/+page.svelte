<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Lesson Introduction</Heading>
<P>Make sure that you understand the introduction portion of an effective lesson. If the introduction is not adequate, learners will be less motivated and will retain less information.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Attention</Heading>
<P>This can be anything from a story, joke, question, or video. The goal here is to gain the learners attention and make them interested in the topic. Remember that when you are first introducing new material, you want to not only make it interesting, but also relate it to something they will want to learn about.</P>
<P>For example, not everyone wants to learn about takeoff performance calculations and interpolation. Telling an interesting story about them or showing a video of an airplane rotating at the very end of the runway can make a learner interested and also understand the importance of why performance calculations are necessary.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Motivation</Heading>
<P>This needs to be appealed to individual learner interests. Pointing out why something is important can be helpful here, but you can also showcase examples of yourself applying the knowledge. Learners are going to be far more interested in learning something that is useful to them, and it is the instructor's responsibility to showcase why something is important or useful.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Overview</Heading>
<P>This should be clear and concise. Learners will feel much more comfortable when they know what is coming and can mentally prepare for it. It will also showcase the organization of the instructor. Visual aids can help a lot in this area.</P>
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

