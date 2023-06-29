<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Risk Management</Heading>
<P>Risk is simply the probability and severity of accident or loss from exposure to hazards. Nothing in everyday life or in aviation is risk-free, but there are specific actions we can take to minimize risk.</P>
<P>Risk Management is the logical process of weighing the potential costs of risks against the possible benefits of allowing those risks to remain uncontrolled.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Risk Management Terms</Heading>
<Heading tag='h5'>Hazard</Heading>
<P>A condition, event, object, or circumstance that could lead to or contribute to an unplanned or undesired event. Can be generally defined as a source of danger.</P>
<Heading tag='h5'>Risk</Heading>
<P>The future impact of a hazard that is not controlled or eliminated. The possibility of loss or injury. Risk is measured by the number of people or resources affected (exposure), the extent of possible loss (severity), and the likelihood of loss (probability).</P>
<Heading tag='h5'>Safety</Heading>
<P>Freedom from those conditions that can cause death, injury, occupational illness, or damage to or loss of equipment or property, or damage to the environment. Note that safety is a relative term, as nothing is completely safe.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Principles of Risk Management</Heading>
<P>There are four fundamental principles of risk management: </P>
<Button href='riskmanagement/principles'>Principles of Risk Management Explained</Button>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Accept no unnecessary risk</Li>
<Li>Make risk decisions at the appropriate level</Li>
<Li>Accept risk when benefits outweigh the costs</Li>
<Li>Integrate risk management into planning at all levels</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Risk Management Process</Heading>
<P>Fundamentally, risk management is a relatively simple process. It consists of identifying hazards and taking reasonable measures to reduce risk to personnel, equipment, and the mission. We can break this down into a three step process:</P>
<Heading tag='h5'>Identify the Hazard</Heading>
<P>For a pilot to make a proper decision related to risk, they first need to be aware of a hazard. This can come from various means, such as checklists (see below), proper preflight planning, or being attentive in flight. </P>
<Heading tag='h5'>Assess the Risk</Heading>
<P>Now we need to assess the risk in terms of likelihood and severity. This will give us a gauge of whether or not further action is required.</P>
<Heading tag='h5'>Mitigate the Risk</Heading>
<P>Investigate specific strategies and tools that reduce, mitigate, or eliminate the risks. Additionally, high risks can be mitigated by taking action to lower the likelihood/severity to lower levels. Serious risks require serious action.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Level of Risk</Heading>
<P>The level of risk is simply the product of the exposure, severity, and probability.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/007fc340-1984-4a92-d250-eb14e8818d00/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Assessing Risk</Heading>
<P>There are several ways to assess risk, but the most common is the risk assessment matrix. </P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/78907c7a-77e7-4d63-75e2-26c99ec4dd00/public"></Img></div>
<P>By combining the likelihood and the severity of the risk, it becomes far simpler to assess.</P>
<P>A method of calculating the total risk of a given flight would be using a preflight matrix that rates conditions on a numerical scale, and if the sum of the conditions is greater than a certain number the risk for a specific flight is too great.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Risk Management Checklists</Heading>
<Heading tag='h5'>IMSAFE</Heading>
<P>This checklist is useful in identifying risk associated with physical and mental readiness for flying.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Illness</Li>
<Li>Medication</Li>
<Li>Stress</Li>
<Li>Alcohol</Li>
<Li>Fatigue</Li>
<Li>Eating/Emotion</Li></List>
<Heading tag='h5'>PAVE</Heading>
<P>This checklist divides the risks of a flight into four categories:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Pilot</Li>
<Li>Aircraft</Li>
<Li>enVironment</Li>
<Li>External Pressures</Li></List>
<Heading tag='h5'>5P's</Heading>
<P>This checklist specifically focuses on the challenges and opportunities that face a single pilot:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Plan</Li>
<Li>Plane</Li>
<Li>Pilot</Li>
<Li>Passengers</Li>
<Li>Programming</Li></List>
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

