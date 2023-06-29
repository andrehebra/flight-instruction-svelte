<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>The Teaching Process</Heading>
<P>An instructor cannot be effective without understanding and implementing the parts of an effective lesson.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Preparation of a Lesson</Heading>
<P>Lessons must be planned in terms of objectives, procedures and facilities, goals to be attained, and review and evaluation. No lesson can be effective without specific and measurable goals. This also gives the instructor the ability to measure their own performance and gauge what works and what doesn't.</P>
<P>We can divide objectives into two categories: Performance-based and Decision-based. </P>
<Heading tag='h5'>Performance-Based Objectives</Heading>
<P>These objectives set measurable and reasonable standards which describe the learner's desired performance. Using this strategy, it becomes easier to measure whether or not a learner should proceed to the next objective. Performance-based objectives consist of three elements:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Description of the Skill or Behavior</Li></List>
<P>This description should focus on concrete and measurable items. It should be obvious to any reader what the description is measuring and what the expectations are.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Conditions</Li></List>
<P>These describe the rules for demonstration of the skill. There are many different ways to demonstrate a skill, so it should be outlined under what conditions the skill should be performed. A good example of this is from the Aviation Instructor's Handbook:</P>
<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">If the desired objective is to navigate from point A to point B, the objective, as stated, is not specific enough for all learners to do it in the same way. Information such as equipment, tools, reference material, and limiting parameters should be included. For example, inserting several conditions narrows the objective as follows: “Using appropriate charts, a prepared flight log, and training aircraft, navigate from point A to point B while maintaining standard hemispheric altitudes.” Sometimes, in the process of reading the objective, someone might say, “But, what if ...?” This is a good indication that the conditions are confusing and need clarification.</P></Blockquote>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Criteria</Li></List>
<P>This is what actually measures the accomplishment of the objective. Going back to the previous example, the Aviation Instructor's Handbook lays out a possible criteria for completion:</P>
<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">In the previous example, the criteria may include that navigation from point A to point B be accomplished within 5 minutes of the preplanned flight time and that en route altitude be maintained within 200 feet. The revised performance-based objective may now also include arrival at point B within 5 minutes of planned arrival time and cruise altitude should be maintained within 200 feet during the en route phase of the flight.</P></Blockquote>
<Heading tag='h5'>Decision-Based Objectives</Heading>
<P>These objectives relate specifically to judgment and ADM skills. By using real world examples, instructors can judge a learners ability to make safe and correct decisions.</P>
<P>These objectives differ from performance-based objectives in that satisfactory performance may not be as easily measured. That being said, they are an incredibly important tool in making sure a pilot is able to handle situations in a safe manner in accordance with good ADM.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Organization of Material</Heading>
<P>Lessons that are well organized are more effective. Because of that, we can break down an effective lesson into component parts to understand how they are useful.</P>
<Heading tag='h5'>Lesson Introduction</Heading>
<P>The introduction is what sets the stage for everything to come. We can break the introduction into three elements:</P>
<Button href='teachingprocess/lessonintroduction'>Explanation of the Elements of an Introduction</Button>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Attention</Li>
<Li>Motivation</Li>
<Li>Overview</Li></List>
<Heading tag='h5'>Development</Heading>
<P>This is the main part of the lesson. An instructor needs to develop the subject matter in a way that helps the learner achieve the previously defined objectives. There are a few ways to accomplish this, showcased below:</P>
<Button href='teachingprocess/lessondevelopment'>Methods of Lesson Development Explanations</Button>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Past to present</Li>
<Li>Simple-to-complex</Li>
<Li>Known to unknown</Li>
<Li>Most frequently used to least used</Li></List>
<Heading tag='h5'>Conclusion</Heading>
<P>The conclusion should retrace the important elements of the lesson and relate it back to the objective. An effective conclusion will improve retention. Make sure not to introduce new ideas in the conclusion, as this can be confusing to learners.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Training Delivery Methods</Heading>
<P>An instructor needs to pick the most effective training method for a given learner. It is important to note, however, that delivery methods can be combined, or switched from lesson to lesson depending on what is required and what works the best for the given situation. Below is an outline of common delivery methods that are useful to a Flight Instructor:</P>
<Heading tag='h5'>Lecture Method</Heading>
<P>This is where an instructor delivers knowledge via a lecture to more or less silent participants. This method is most useful when attempting to convey a general understanding of a subject. Lectures can be adaptable to different settings.</P>
<P>In this method, an instructor needs to pay close attention to feedback from learners, as it will not be as direct compared to other methods. Lectures should also be rehearsed beforehand to improve delivery.</P>
<Heading tag='h5'>Discussion Method</Heading>
<P>This method combines a lecture which transitions into a discussion to actively integrate the learner into the process. In this method, learners have the opportunity to actively engage in the material that was just presented.</P>
<P>It is important that the instructor keeps the discussion focused on the subject. Common ways to do this include asking leading questions, commenting on disagreements, and ensuring that learners participate.</P>
<P>This method also allows learners to develop their higher order thinking skills. Because of this, instructors should attempt to keep their own discussion to a minimum to maximize learner participation</P>
<Heading tag='h5'>Guided Discussion Method</Heading>
<P>This method requires that learners already have a familiarity with the topics being discussed. This could either be previous reading or a previous lecture on the topic. The instructor should maintain control of the discussion, as the greater the learner participation becomes, the more effective learning will be.</P>
<Button href='teachingprocess/guideddiscussion'>Information on Guided Discussions</Button>
<Heading tag='h5'>Computer-assisted Method</Heading>
<P>Computer-assisted learning uses multimedia software for training. This method can often times be cost effective, especially for topics that require review. It is important to think about computer-assisted learning as a training aid that can be useful in different circumstances. </P>
<Heading tag='h5'>Demonstration-Performance Method</Heading>
<P>This method is most useful for mastering mental or physical skills that require practice. It is based on the principle that people learn by doing.</P>
<P>We can divide the Demonstration-Performance method into five phases:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Explanation</Li>
<Li>Demonstration</Li>
<Li>Learner performance</Li>
<Li>Instructor supervision</Li>
<Li>Evaluation</Li></List>
<Button href='teachingprocess/demonstrationperformancemethod'>Demonstration-Performance Method Elements</Button>
<Heading tag='h5'>Drill and Practice Method</Heading>
<P>The drill and practice method simply uses the law of exercise. It is required that a skill be practiced repeatedly to attain the desired result.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Problem Based Learning</Heading>
<P>Problem based learning is a teaching method where complex real-world problems are used as the vehicle to promote learning. Related directly to Scenario-Based Training, it helps develop real world skills while also keeping learners interested in the topic. Specifically, problem based learning aids in developing higher order thinking skills.</P>
<P>We can design an effective problem by using the following steps:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Set up the problem</Li>
<Li>Determine learning outcomes for the problem</Li>
<Li>Solve the problem/task</Li>
<Li>Reflect on the problem-solving process</Li>
<Li>Consider additional solutions through guided discovery</Li>
<Li>Reevaluate solution with additional options</Li>
<Li>Reflect on the solution and why it is the best</Li>
<Li>Consider what best means</Li></List>
<P>Problem based learning specifically aids in instructing risk management, ADM, automation management, situational awareness, and CFIT.</P>
<Heading tag='h5'>Collaborative problem-solving</Heading>
<P>Multiple learners can work together to solve problem based questions, which can be useful in a group setting.</P>
<Heading tag='h5'>Case Studies</Heading>
<P>Case studies should be utilized during problem based learning to connect problems more firmly to the real world. This helps to further develop critical thinking skills.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Instruction Aids and Training Technologies</Heading>
<P>Instructional aids help learners remember information and hold their attention. Additionally, stimulating multiple senses aids in learning.</P>
<P>Examples of instructional aids include:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>White board</Li>
<Li>Models/mockups</Li>
<Li>Videos</Li></List>
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

