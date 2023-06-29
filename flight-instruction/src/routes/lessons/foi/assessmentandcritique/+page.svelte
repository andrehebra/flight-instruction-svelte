<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Assessment and Critique</Heading>
<P>Providing accurate assessment and critique is an essential part of instruction. Without it, neither student nor instructor can improve in a meaningful way.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Assessment</Heading>
<P>Assessment provides an instructor with immediate feedback on the quality of instruction. It allows an instructor to continuously evaluate a learner's performance to provide guidance, suggestions for improvement, and positive reinforcement.</P>
<Heading tag='h5'>Purpose of Assessment</Heading>
<P>Both the learner and the instructor need to know how well the learner is progressing. Through a good assessment, learners can be provided with practical and specific feedback. Learners naturally want to perform well, and giving useful guidance on how they can improve can be honest and motivating. </P>
<P>Additionally, well performed assessments allow a learner to improve their ADM skills as well as their own ability to self-assess.</P>
<P>The instructor also has a lot to gain from routine assessment of learners. If a trend develops of learners performing poorly in a specific area, the instructor can change their methods of instruction.</P>
<Heading tag='h5'>Characteristics of an Effective Assessment</Heading>
<P>Assessment needs to be factual and align with the completions standards of the lesson. An effective assessment will have the following characteristics:</P>
<Button href='assessmentandcritique/effectiveassessment'>Effective Assessment Characteristics Explanations</Button>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Objective</Li>
<Li>Flexible</Li>
<Li>Acceptable</Li>
<Li>Comprehensive</Li>
<Li>Constructive</Li>
<Li>Organized</Li>
<Li>Thoughtful</Li>
<Li>Specific</Li></List>
<Heading tag='h5'>Traditional Assessment</Heading>
<P>This generally refers to written testing and includes multiple choice, matching, true/false, and fill in the blank questions. There will always be a single correct answer to a question.</P>
<P>This type of assessment can only measure a person's rote understanding of a topic, and for that reason may not be effective as other types. However, they do have their place in testing a learner's factual knowledge of a topic.</P>
<Button href='assessmentandcritique/writtentest'>Characteristics of a Good Written Assessment</Button>
<Heading tag='h5'>Authentic Assessment</Heading>
<P>Authentic assessment asks the learner to perform real-world tasks and demonstrate a meaningful application of skills and competencies. This lies at the heart of modern day aviation training. This allows learners to generate responses from their skills and use critical thinking.</P>
<Button href='assessmentandcritique/authenticassessment'>Authentic Assessment Types and Characteristics</Button>
<Heading tag='h5'>Oral Assessment</Heading>
<P>This is the most common means of assessment. It consists of direct or indirect oral questioning of learners by the instructor. These will generally come in the form of fact based or HOTS questions.</P>
<P>Proper oral assessments will have the following results: </P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Reveals the effectiveness of the instructor’s training methods</Li>
<Li>Checks learner retention of what has been learned</Li>
<Li>Reviews material already presented to the learner</Li>
<Li>Can be used to retain learner interest and stimulate thinking</Li>
<Li>Emphasizes the important points of training</Li>
<Li>Identifies points that need more emphasis</Li>
<Li>Checks comprehension of what has been learned</Li>
<Li>Promotes active learner participation, which is important to effective learning</Li></List>
<Heading tag='h5'>Effective Questions</Heading>
<P>To make an effective question, an instructor should prepare and write down questions in advance. A good way to do this is by putting them directly into a lesson plan, however they should still be seen as a framework that can be used in certain situations.</P>
<P>Effective question Characteristics: </P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Apply to the subject of instruction.</Li>
<Li>Be brief and concise, but also clear and definite.</Li>
<Li>Be adapted to the ability, experience, and stage of training of the learners.</Li>
<Li>Center on only one idea (limited to who, what, when, where, how, or why, not a combination).</Li>
<Li>Present a challenge to the learners. </Li></List>
<Heading tag='h5'>Types of Questions to Avoid</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Puzzle</Li>
<Li>Oversize</Li>
<Li>Toss-up</Li>
<Li>Bewilderment</Li>
<Li>Trick Questions</Li>
<Li>Irrelevant Questions</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Critique</Heading>
<P>Critique is an instructor-to-learner assessment that can be used individually or in a classroom setting. An effective critique looks at good and bad performance, as well as the individual parts of a performance.</P>
<P>The instructor should never attempt to embarrass a learner or degrade them.</P>
<P>No matter the type of critique, the instructor should reserve time at the end to cover any areas that might have been messed or not emphasized sufficiently.</P>
<Heading tag='h5'>Instructor/Learner Critique</Heading>
<P>This comprises of an instructor leading a group discussion where members of the group are invited to offer criticism of a performance. This method needs to be controlled carefully and directed with a clear purpose.</P>
<Heading tag='h5'>Learner-Lead Critique</Heading>
<P>The instructor asks a learner to lead their own assessment. An instructor can specify the pattern of organization and the techniques or can leave it at the discretion of the chosen leader. </P>
<P>These may not be the most efficient, but they can generate interest and increase learning.</P>
<Heading tag='h5'>Small Group Critique</Heading>
<P>A class is divided into small groups, and each is assigned a specific area to analyze. Each group presents its findings to the class. The instructor should create the criteria and guidelines for the critique. The combined presentations result in a comprehensive assessment.</P>
<Heading tag='h5'>Individual Learner Critique by Another Student</Heading>
<P>Having another learner present an entire assessment of another. The instructor must maintain firm control over the process.</P>
<Heading tag='h5'>Self-Critique</Heading>
<P>A learner critiques his own performance under the supervision of the instructor. This can be useful in helping a learner increase their abilities to identify errors.</P>
<Heading tag='h5'>Written Critique</Heading>
<P>This type has the advantage of being able to spend dedicated time thinking about the learners actions. Additionally, records are kept of learner performance and can be referenced in the future to denote progress.</P>
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

