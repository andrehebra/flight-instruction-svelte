<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Written Test Characteristics</Heading>
<P>A test can only be effective if it has the following characteristics:</P>
<Heading tag='h2'>Reliability</Heading>
<P>The degree to which the test results are consistent with repeated measurements.</P>
<Heading tag='h2'>Validity</Heading>
<P>The extent to which a test measures what it is supposed to measure</P>
<Heading tag='h2'>Usability</Heading>
<P>The ease to which learners are able to take the test. This would include a font that is large enough for learners to read it as well as how clear the wording of questions is.</P>
<Heading tag='h2'>Objectivity</Heading>
<P>The degree to which a question can be graded consistently between different graders. Multiple choice questions are considered more objective than supply type questions because they always have a single correct answer. A supply type question could potentially be interpreted differently depending on the presumptions of the person grading the test.</P>
<Heading tag='h2'>Comprehensiveness</Heading>
<P>The degree to which a test measure the overall objectives</P>
<Heading tag='h2'>Discrimination</Heading>
<P>The degree to which a test distinguishes the difference between learners. A discriminatory test will include: </P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A wide range of scores</Li>
<Li>All levels of difficulty</Li>
<Li>Items that distinguish between learners with differing levels of achievement of the course objectives </Li></List>
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

