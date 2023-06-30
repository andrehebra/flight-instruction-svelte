<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Techniques of Flight Instruction</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Obstacles in Learning During Flight Instruction</Heading>
<P>Certain obstacles are common to flight instruction. These can be broken down into the following:</P>
<Heading tag='h5'>Feeling of Unfair Treatment</Heading>
<P>When learners believe that their instruction is inadequate or that their efforts are not considered do not learn well. This also decreases their motivation.</P>
<P>A method to counter these feelings is to assign goals that are difficult but possible. </P>
<Heading tag='h5'>Impatience to Proceed to more Interesting Operations</Heading>
<P>Not everything in flight training is exciting to a learner. And if a learner feels impatient to move on to more interesting topics, they can be deterred from pursuing flying altogether.</P>
<P>This can be especially common when a motivated and fast learner is not given the challenge they desire. It is important that instructors move learners onto the next topic as soon as the objectives of the previous topic have been met.</P>
<Heading tag='h5'>Worry or Lack of Interest</Heading>
<P>Learners who are worried or upset do not learn well. This, however, can be difficult to counter. Worry can come from conditions outside of flight training, and therefore require a complex approach to counter.</P>
<P>Lack of interest should be investigated, as learners perform much better when they are interested in a topic. The instructor should find possible motivations and interests and relate them to the information being presented to maintain interest in the topic and aviation overall.</P>
<Heading tag='h5'>Physical Discomfort, Illness, Fatigue, and Dehydration</Heading>
<P>Learners need to be at ease to acquire knowledge and skills. It is imperative that learners take care of both their mental and physical health. </P>
<P>Additionally, airsickness and dehydration can be common in aviation. As soon as the symptoms of airsickness develop, the flight should be stopped.</P>
<Heading tag='h5'>Apathy due to Inadequate Instruction</Heading>
<P>Learners will become apathetic when the instructor has not made adequate preparations for the instruction being given. Instructors need to make sure that they are putting in the proper level of effort into their lessons.</P>
<Heading tag='h5'>Anxiety</Heading>
<P>Anxiety will decrease learner performance and ability to learn. Instructors can counter this by creating a comfortable environment and emphasizing safety. Additionally, they need to make sure that learners feel at ease and understand what is going on around them.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Demonstration-Performance Training Delivery</Heading>
<Button href='/lessons/foi/teachingprocess/demonstrationperformancemethod/'>Demonstration-Performance Method Explanation</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Positive Exchange of Controls</Heading>
<P>This should be emphasized from the beginning of training. It needs to be clearly explained to learners the three step process of exchanging controls, as displayed below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/86a352e6-f94f-4f7b-1123-f12ed08de100/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Sterile Cockpit</Heading>
<P>During the critical phases of flight, pilots need to refrain from nonessential activities. This includes talking about topics that are not directly related to the safety of flight.</P>
<P>Going back to primacy, it is imperative that a learner begin their training with this concept in mind.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Use of Distractions</Heading>
<P>Learners need to gain the essential tool of dealing with distractions and understanding when a distraction warrants action. Instructors should utilize distractions throughout training so that learners understand this concept. A few examples of distractions used in training are:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Drop a pencil. Ask the learner to pick it up</Li>
<Li>Ask the learner to determine a heading to an airport using a chart</Li>
<Li>Ask the learner to reset the clock</Li>
<Li>Ask the learner to get something from the back seat</Li>
<Li>Ask the learner to read the outside air temperature</Li>
<Li>Ask the learner to compute true airspeed with a flight computer</Li>
<Li>Ask the learner to identify terrain or objects on the ground</Li>
<Li>Ask the learner to identify a field suitable for a forced landing</Li>
<Li>Have the learner climb 200 feet and maintain altitude, then descend 200 feet and maintain altitude</Li>
<Li>Have the learner reverse course after a series of S-turns</Li></List>
<P>Learners need to understand when to take charge and decline a certain action as PIC. Getting them used to declining actions that can be distracting is essential.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Integrated Flight Instruction</Heading>
<P>During integrated flight instruction, learners are taught to perform maneuvers both by outside references and by reference to the flight instruments. The use of instrument references needs to be introduced the first time the maneuver is performed. This type of instruction has a few advantages:</P>
<Heading tag='h5'>Development of Habit Patterns</Heading>
<P>Learners can develop the skills of monitoring flight instruments from early on in training. This allows them to be proficient in constantly monitoring the performance of the airplane.</P>
<Heading tag='h5'>Operating Efficiency</Heading>
<P>The performance obtained from an aircraft increases noticeably as learners become proficient in monitoring and correcting their own flight technique by reference to flight instruments.</P>
<Heading tag='h5'>Procedures</Heading>
<P>By introducing flight by reference to instruments early on, learners quickly understand that the manipulation of controls under both conditions is identical.</P>
<Heading tag='h5'>See and Avoid</Heading>
<P>This type of instruction helps learners understand that they are responsible for constantly being on the lookout for other traffic. </P>
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

