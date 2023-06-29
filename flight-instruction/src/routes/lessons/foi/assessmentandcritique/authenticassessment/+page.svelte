<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Authentic Assessment</Heading>
<Heading tag='h2'>Learner-Centered Assessment</Heading>
<P>This method can also be referred to as "collaborative critique," where an instructor uses open-ended questions. There is a four step process to these questions to guide the learner through a self-assessment:</P>
<P>1. Replay: asking the learner to verbally replay the flight or procedure. The instructor pays attention through this process and notices when an account may not be accurate. When a discrepancy is found, the instructor discusses it with the learner</P>
<P>2. Reconstruct: having the learner identify what would have, could have, or should have been done differently</P>
<P>3. Reflect: asking specific questions that cause the learner to reflect on the events</P>
<P>4. Redirect: asking questions that relate lessons learned to other experiences and how they might help in future sessions</P>
<P>By using this method, the instructor is able to measure the learner's performance as well as their ability to notice their own errors and the corrective action needed.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Maneuver or Procedure "Grades"</Heading>
<P>An objective way to "grade" a learner performance is by using the scale describe, explain, practice, and perform.</P>
<Heading tag='h5'>Describe</Heading>
<P>The learner is able to describe the physical characteristics and cognitive elements of the scenario but needs assistance in executing it.</P>
<Heading tag='h5'>Explain</Heading>
<P>The learner is able to describe the scenario activity and understands the underlying concepts/principles/procedures but needs assistance to execute the maneuver or procedure successfully.</P>
<Heading tag='h5'>Practice</Heading>
<P>The learner is able to plan and execute the scenario, however coaching, instruction, or assistance are required to correct deviations and errors identified by the instructor.</P>
<Heading tag='h5'>Perform</Heading>
<P>The learner is able to perform the activity without instructor assistance. The learner also identifies and corrects errors and deviations quickly. There is no doubt at any time during the performance that the learner will successfully complete the activity.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Assessing Risk Management Skills</Heading>
<P>We can divide a learner's risk management skills into three levels of explain, practice, and manage-decide. An explanation of each is below:</P>
<Heading tag='h5'>Explain</Heading>
<P>The learner can identify, describe, and understand the risks of the scenario but needs to be prompted to identify those risks and make decisions.</P>
<Heading tag='h5'>Practice</Heading>
<P>The learner identifies, understands, and applies SRM/ADM principles, however coaching, instruction or assistance is needed to correct minor deviations and errors identified by the instructor. The learner is the active decision maker.</P>
<Heading tag='h5'>Manage-Decide</Heading>
<P>The learner correctly gathers the most important data available, identifies possible courses of action, and evaluates the risk inherent in each of those courses of action. The learner then makes the appropriate decision. Instructor intervention is not required for the safe completion of the flight.</P>
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

