<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Guided Discussions</Heading>
<P>The instructor plays a critical role in a guided discussion by pointing the group in the correct direction. The most important aspect of this is using questions effectively. These questions should naturally lead learners throughout the topics that need to be covered.</P>
<Heading tag='h2'>Characteristics of an Effective Question</Heading>
<P>A lead off question is what opens up an area for discussion. Follow up questions are what guide the discussion once it has begun. Additionally, instructors can answer a question with another question to guide learners in the direction of the correct answer.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/bc8fc324-d273-4ec0-faab-f40d08af0800/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Planning a Guided Discussion</Heading>
<P>The following suggestions are useful in planning an effective guided discussion. The level of preparation here should be similar to that of a lecture. Just because the learners are the ones talking does not mean that the instructor does not need to be fully prepared.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Select an appropriate topic</Li>
<Li>State the specific lesson objective at the understanding level of learning</Li>
<Li>Conduct adequate research to become familiar with the topic</Li>
<Li>Organize the main and subordinate points of the lesson in a logical sequence</Li>
<Li>Plan a lead-off question for each learning outcome</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Learner Preparation</Heading>
<P>The instructor needs to make sure that learners are properly prepared for the discussion. The instructor can provide supplementary material that is required to be read or understood prior to the discussion. In a case where learners are not able to study beforehand, an instructor should provide an overview before starting the guided discussion portion.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Instructor Technique: Guiding a Discussion</Heading>
<Heading tag='h5'>Introduction</Heading>
<P>Just like other lessons, the introduction should include an attention, motivation, and overview element. Additionally, the instructor should promote a relaxed atmosphere that encourages more informal discussion.</P>
<Heading tag='h5'>Discussion</Heading>
<P>Lead-off questions should be used to initiate the discussion. The instructor needs to have an answer in mind when asking these questions, and aid learners in moving toward that direction.</P>
<P>Once underway, the instructor should actively listen throughout the entire discussion. Additionally, the should ask "how" and "why" questions to gauge the learners true understanding of the topic being discussed.</P>
<P>After a particular part of the lesson has been discussed, the instructor should provide a summary of what has been accomplished. This reinforces learning in relation to a specific learning outcome.</P>
<Heading tag='h5'>Conclusion</Heading>
<P>The conclusion should summarize the material that was covered. Additionally, if the discussion reveals that certain areas are not understood by everyone, that should be clarified and/or covered again.</P>
<Hr class="my-8" height="h-px" />
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

