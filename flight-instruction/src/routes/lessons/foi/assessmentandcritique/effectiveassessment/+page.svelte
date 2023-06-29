<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Effective Assessment Characteristics</Heading>
<P>An effective assessment must have the following characteristics:</P>
<Heading tag='h2'>Objective</Heading>
<P>Personal opinions or biases should never be included in any assessment. It needs to focus specifically on the objective that is being measured.</P>
<Heading tag='h2'>Flexible</Heading>
<P>The context of the assessment needs to be taken into account and the variables should be considered. </P>
<Heading tag='h2'>Acceptable</Heading>
<P>Learners do not like negative feedback. A way to ameliorate this is by being sincere and maintaining a positive attitude. </P>
<Heading tag='h2'>Comprehensive</Heading>
<P>The degree to which an assessment covers every aspect of a performance is at the discretion of the instructor. It should cover whichever elements would be most beneficial to improving performance in the future.</P>
<Heading tag='h2'>Constructive</Heading>
<P>Without aiding a learner to improve, they gain nothing from an assessment. Simply stating that they did something incorrectly will also be demotivating. Make sure to guide a learner towards better performance.</P>
<Heading tag='h2'>Organized</Heading>
<P>This can come in many different ways, but any assessment should be organized in a logical way. An example would be following the steps taken throughout a maneuver.</P>
<Heading tag='h2'>Thoughtful</Heading>
<P>Never minimize the dignity or importance of the learner being assessed. No assessment should include ridicule, anger, or fun at the expense of the learner.</P>
<Heading tag='h2'>Specific</Heading>
<P>All comments should relate to a specific action. Additionally, make sure to avoid using abstractions.</P>
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

