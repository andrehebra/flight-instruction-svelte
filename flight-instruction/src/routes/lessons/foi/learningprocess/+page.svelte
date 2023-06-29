<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>The Learning Process</Heading>
<P>Learning can be defined in many different ways, but generally we are talking about:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A change in behavior of the learner as a result of experience</Li>
<Li>The process of experience which brings about a relatively permanent change in behavior</Li>
<Li>gaining knowledge, skills, or developing a behavior through study, instruction, or experience</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Learning Theory</Heading>
<P>The explanation of how people acquire skills, knowledge, and attitudes. There are two accepted concepts of how people learn: Behaviorism and Cognitive Theory.</P>
<Heading tag='h5'>Behaviorism</Heading>
<P>Explains animal and human behavior in terms of observable and measurable responses to stimuli. Can be generally thought of as a system of rewards and punishment which causes people to learn. This system stresses the importance of positively rewarding behavior that an instructor deems acceptable in the learner.</P>
<P>Behaviorism has been losing some popularity more recently because learning can be described as a much more complex process compared to simply rewards and punishments.</P>
<Heading tag='h5'>Cognitive</Heading>
<P>In this theory, we focus on what is going on in the mind of a learner, considering:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Knowing</Li>
<Li>Perceiving</Li>
<Li>Problem Solving</Li>
<Li>Decision-Making</Li>
<Li>Awareness</Li>
<Li>Etc.</Li></List>
<Heading tag='h5'>Concepts in Cognitive Theory:</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Reflective Thought</Li></List>
<P>One main focus of cognitive theory is reflection. Learning improves because a learner is able to reflect on their own performance. This is useful to the degree that a learner is able to understand their own mistakes.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Assimilation and Accommodation</Li></List>
<P>Tension between old ideas meeting new situations and changing old ideas to meet the new situations, or showing that the old ideas hold up to new situations.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Spiral Curriculum</Li></List>
<P>Revisiting basic ideas repeatedly and building on them in more sophisticated ways will cause students to mature and develop</P>
<Heading tag='h5'>Blooms Taxonomy of the Cognitive Domain</Heading>
<P>comprises levels of intellectual behavior and progress from the simplest to the most complex</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Knowledge</Li></List>
<P>Being able to recollect the information which was learned.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Comprehension</Li></List>
<P>Demonstrate comprehension through one or more forms of explanation.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Application</Li></List>
<P>Use information or a skill in a new situation.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Analysis</Li></List>
<P>Break material into its constituent parts and determine how the parts relate to one another and/or to an overall structure or purpose.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Synthesis and Evaluation</Li></List>
<P>Make judgments based on criteria and standards and evaluate one's own or other's performance.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Perceptions and Insight</Heading>
<P>All learning initially comes from perceptions, which are directed to the brain by one or more of the five senses.</P>
<Heading tag='h5'>Factors that affect perception:</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Physical Organism</Li>
<Li>Goals and Values</Li>
<Li>Self-concept</Li>
<Li>Time and Opportunity</Li>
<Li>Element of Threat</Li></List>
<Heading tag='h5'>Insight</Heading>
<P>The grouping of perceptions into meaningful wholes. It is the instructor's responsibility to ensure that insights occur during instruction.</P>
<P>Insights will occur whether or not instruction is taking place, the difference is that the instructor can dramatically increase the speed at which the insights are created.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>The Laws of Learning</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Readiness</Li></List>
<P>The basic needs of the learner need to be satisfied before he or she is ready or capable of learning. The instructor can not do much to motivate a learner if those needs have not been met.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Effect</Li></List>
<P>The law of effect states that behaviors that lead to satisfying outcomes are likely to be repeated whereas behaviors that lead to undesired outcomes are less likely to recur. The learner needs to have success in order to have more success in the future. The instructor needs to create situations designed to promote success by using positive training experiences</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Exercise</Li></List>
<P>Connections are strengthened with practice and weakened when practice is discontinued. Essentially, "use it or lose it"</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Primacy</Li></List>
<P>What is learned first often creates a strong and almost unshakable impression and underlies the reason an instructor needs to teach correctly the first time</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Intensity</Li></List>
<P>Exciting or dramatic learning connected to a real situation teaches a learner more than a routine or boring experience</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Recency</Li></List>
<P>The most recently learned thing is best remembered</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Domains of Learning</Heading>
<P>Cognitive (knowledge), Affective (attitude), and Psychomotor (skills).</P>
<div class="image"><Img size="max-w-full" src="https://i.imgur.com/aDln6CD.png"></Img></div>
<Heading tag='h5'>Cognitive Domain</Heading>
<P>This group includes remembering specific facts and concepts that help develop intellectual abilities and skills. There are six major categories of this domain going from simple to complex. </P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/c098f8bb-1c3f-49e1-e0a8-35df11961700/public"></Img></div>
<Heading tag='h5'>Affective Domain</Heading>
<P>The affective domain focuses on a learner's emotions toward the educational experience. This domain includes feelings, values, motivations, and attitudes. This domain has 5 levels: </P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Awareness</Li>
<Li>Response</Li>
<Li>Value</Li>
<Li>Organizing</Li>
<Li>Integration</Li></List>
<Heading tag='h5'>Psychomotor</Heading>
<P>This domain is skill based and includes movement, coordination, and use of motor skills. Instructors should understand that this domain level includes:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Observation</Li>
<Li>Imitation</Li>
<Li>Practice</Li>
<Li>Habit</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Characteristics of Learning</Heading>
<P>Being able to learn is a unique gift of humans. People learn throughout their lives, regardless of whether there is an instructor there or not. Understanding how learning works, however, can improve the learning process for learners.</P>
<Heading tag='h5'>Learning is Purposeful</Heading>
<P>Each learner has specific intentions and goals. Aviation instructors need to find ways to relate new learning to a learner's goals to give it a sense of purpose.</P>
<Heading tag='h5'>Learning is a Result of Experience</Heading>
<P>Without experiences, no learning can occur. Because of this, aviation instructors need to provide learning experiences that are meaningful, varied, and appropriate.</P>
<Heading tag='h5'>Learning is Multifaceted</Heading>
<P>Instructors need to tailor their learning experiences to multiple senses and types. Fully exercising a learners mind can accelerate the process of learning.</P>
<Heading tag='h5'>Learning is an Active Process</Heading>
<P>Just because something was said in front of a learner, does not mean that they took in that information or remembered it. Learners need to actively engage in the process to make it effective.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Acquiring Knowledge</Heading>
<P>An aviation instructor's job is to help learners acquire knowledge. We can break down the phases of knowledge into 3 distinct categories:</P>
<P>1. Memorization: memorization of facts is a great way to quickly ingest large amounts of information. For example, someone may memorize which dials on the altimeter give which readings. In this stage, people will not have an in depth understanding of a topic and cannot answer in depth questions that aren't directly asking about the information that was memorized.</P>
<P>2. Understanding: This stage is marked by the ability to notice similarities and make associations between facts. When a learner organizes known facts into coherent groups, they are at the understanding stage. Additionally, they should be able to answer more complex questions about a topic spanning multiple groups of information.</P>
<P>3. Concept Learning: This occurs when individuals formulate generalized concepts from particular facts or steps. Understanding the particular characteristics of a group, a learner can determine whether or not a new item they have never seen before belongs in that group.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Types of Practice</Heading>
<P>Practice is required for a learner to maintain and grow their knowledge. There are three types of practice that are most useful to aviation instructors:</P>
<Heading tag='h5'>Deliberate Practice</Heading>
<P>Deliberate practice involves training to make a specific skill automatic. A specific time should be set aside for this practice, and distractions should be minimized. Feedback should also be brief and explicit. </P>
<Heading tag='h5'>Blocked Practice</Heading>
<P>Blocked practice involves doing the same drill until the movement is automatic. An example of this would be spending 2 hours doing short field landings. This type of practice may improve short-term performance, but degrade long term performance. Additionally, instructors and learners may be fooled into thinking their skills have dramatically improved.</P>
<Heading tag='h5'>Random Practice</Heading>
<P>This type of practice mixes up the skills to be acquired throughout the practice session. This type of practice leads to the best retention because learners begin to recognize the similarities and differences between different skills and activities.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Scenario-Based Training</Heading>
<P>Scenario-Based Training involves practicing in realistic scenarios. This type of training is critical to creating competent pilots. Asking learners real world questions can be challenging, as it will involve many different skills converging into one question. A good SBT question will:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Have a clear set of objectives</Li>
<Li>Be tailored to the needs of the learner</Li>
<Li>Capitalize on the nuances of the local environment</Li></List>
<P>This type of training is also useful for both the instructor and learner to recognize what needs more practice or what is unknown.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Errors</Heading>
<P>Errors will always occur, even for experienced pilots. It is important to understand the types of errors that can occur to reduce them. These are:</P>
<P>1. Slip: A slip is when a person plans to do one thing, but then inadvertently does something else. These can be defined as errors of action.</P>
<P>2. Mistake: A mistake is when a person plans to do the wrong thing and is successful in doing that incorrect thing. </P>
<P>The important distinction between these two is the previous intentions before the error has occurred. Understanding whether an error was a slip or mistake will make a difference in the evaluation and additional training required.</P>
<Heading tag='h5'>Reducing Errors</Heading>
<P>While errors will never be completely eliminated, there are a few useful tips to use to reduce them:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Learning and practicing</Li>
<Li>Taking time</Li>
<Li>Checking for errors</Li>
<Li>Using reminders</Li>
<Li>Developing routines</Li>
<Li>Raising awareness</Li></List>
<Heading tag='h5'>Error Recovery</Heading>
<P>All learners should practice recovery from common errors to be prepared for them. An instructor cannot assume that their learner will not make errors.</P>
<Heading tag='h5'>Learning from Errors</Heading>
<P>When a learner makes an error, it is important that an instructor constructively teach about the hazards and reasons the error occurred. </P>
<P>Often times, instructors and learners can dismiss errors as one time occurrences without reflecting on them, but this does not lead to safety, accepting errors and working to prevent them in the future does.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Memory and Forgetting</Heading>
<P>Memory is the link between the learner learning/retaining information and the cognitive process of applying what is learned. Overall, memory is the ability to encode perceptions, store them, and retrieve that information at another time. We can break down memory into subsequent parts:</P>
<Heading tag='h5'>Sensory Memory</Heading>
<P>The part of the memory system that receives initial stimuli from the environment and processes them according to the individuals preconceived concept of what is important.</P>
<Heading tag='h5'>Short Term Memory</Heading>
<P>Short term memory is generally stored for about 30 seconds, where it will either fade or be converted into long-term memory. Rehearsal and repetition are good strategies for retaining information in this system.</P>
<P>Short term memory will sort information into categories or chunks in a process called coding. </P>
<Heading tag='h5'>Long Term Memory</Heading>
<P>Long term memory has an essentially infinite capacity. Memories in this system can remain for a lifetime. Information transferred to long term memory generally has a great amount of significance attached to it.</P>
<P>Information in long term memory is stored in interrelated networks of schemas which are the cognitive frameworks that help people organize and interpret information. New information will be interpreted based on these schemas.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Retention of Learning</Heading>
<P>When we think of forgetting information, it is generally not completely lost, but unable for recall. There are many different strategies that can be used to increase retention, however. Some of these strategies are shown below:</P>
<Heading tag='h5'>Praise</Heading>
<P>Praise is generally encouraging, as pleasurable responses tend to be repeated. Giving praise and maintaining a positive environment can go a long way for a learner to retain large amounts of information.</P>
<Heading tag='h5'>Recall is Promoted by Association</Heading>
<P>Information is organized into schemas in memory. It is much easier to remember a new piece of information if it is related to an already understood concept. Make sure to relate new ideas into something that a learner already has experience in.</P>
<Heading tag='h5'>Favorable Attitudes Aid Retention</Heading>
<P>People generally remember what they wish to known. If there is no motivation to learn something, it will not be remembered.</P>
<Heading tag='h5'>Utilize All Senses</Heading>
<P>Learners will be far more likely to retain information if it comes from multiple different senses and perceptions. Explaining and demonstrating a manuever will always be more effective than simply explaining it.</P>
<Heading tag='h5'>Use Meaningful Repetition</Heading>
<P>Going back to the law of exercise, it is important that information be recalled on a regular basis to make a stronger connection to it in memory. Repetition also forces learners to actively engage in the material, which subsequently increases retention.</P>
<Heading tag='h5'>Use Mnemonics</Heading>
<P>Mnemonics can be especially useful when introducing new concepts that can be hard to organize in the brain. While they will generally be rote memorizations, these can be strengthened over time into a greater understanding. </P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Transfer of Learning</Heading>
<P>Transfer of Learning occurs when knowledge or procedures learned in one context is utilized into new context. We can divide this transfer into near and far. Near transfer would be the transfer of learning from a similar idea or procedure to a new one. For example, near transfer could apply to the procedures used in power off stall recovery into power on stall recovery. Far transfer, on the other hand, would be something like applying the principles of slow flight into flying an approach to landing.</P>
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

