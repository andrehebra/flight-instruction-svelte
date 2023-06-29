<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Demonstration-Performance Method</Heading>
<P>This method is incredibly useful in developing pilot skills. The steps outlined below should be followed when using this method.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/01623a4f-4842-4143-efe5-d9888a794f00/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Explanation</Heading>
<P>Explanations should be clear and directly related to the objectives of the particular lesson that is being presented. Additionally, they need to be based on the experience and knowledge of the learner.</P>
<P>For example, when teaching a maneuver, the instructor needs to explain the precise actions that are needed to perform the maneuver properly. Additionally, the end results should be explained so that the learner understands how to judge their own performance.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Demonstration</Heading>
<P>This is where the instructor directly demonstrates the skill. Distractions should be avoided, and the actions of the instructor should only be related to the tasks being performed. </P>
<P>Instructors also need to immediately explain their own deviations in performance if they occur.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Learner Performance and Instructor Supervision</Heading>
<P>This is where the learner is given the opportunity to perform the maneuver or procedure. Instructors need to pay close attention to the learners actions in order to provide valuable feedback.</P>
<P>Make sure that the learner is able to perform the actions directly after the instructor demonstrates them. </P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Evaluation</Heading>
<P>The instructor should provide feedback on the learner performance. Additionally, the learner should be encouraged to judge their own performance to see if they identified their mistakes. This encourages a greater understanding of the concepts involved on the part of the learner.</P>
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

