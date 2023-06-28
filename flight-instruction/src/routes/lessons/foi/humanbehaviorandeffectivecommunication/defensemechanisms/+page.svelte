<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Defense Mechanisms</Heading>
<Heading tag='h2'>Denial</Heading>
<P>The refusal to accept external reality because it is too threatening. For example, a learner may not be willing to accept that they made a mistake or were careless. From the Aviation Instructors Handbook:</P>
<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">For example, the instructor finds a water bottle under the rudder pedal of an aircraft the student took on a solo flight and explains the hazards of loose objects in the cabin. The learner, unwilling to accept the reality that his or her inattention could have caused an aircraft accident, denies having been inattentive on previous day. Or, the learner minimizes the incident, accepting he or she left the water bottle pointing out that nothing bad happened as a result of the action.</P></Blockquote>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Repression</Heading>
<P>Repression occurs when a person places uncomfortable thoughts into inaccessible areas of their unconscious mind. Can be thought of as a learner attempting to hide or push away thoughts that make them uncomfortable, and hoping to deal with them later or not at all. From the Aviation Instructors Handbook:</P>
<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">For Example, a learner pilot may have a repressed fear of flying that inhibits his or her ability to learn how to fly.</P></Blockquote>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Displacement</Heading>
<P>Displacement occurs when a person shifts their emotion, affect, or desire from the original object to a less threatening substitute. These involve some level of self-deception and distortion of reality. A great example of this would be a learner shifting the blame for their poor performance during a practical test towards the scheduler, as they are less threatening, even though they had no responsibility in their poor performance.</P>
<P>Displacement can often times be caused by a personal crisis or other stressful events. It will generally result in changes in personality and behavior.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Rationalization</Heading>
<P>The subconscious technique for justifying actions that would otherwise be unacceptable. It is important to note that the individual using this defense mechanism normally sincerely believes in their own excuses and sees them as justifiable. From the Aviation Instructors Handbook: </P>
<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">For example, a learner mechanic performs poorly on a test. He or she may justify the poor grade by claiming there was not enough time to learn the required information. The learner does not admit to failing to join the class study group or taking the computer quiz offered by the instructor.</P></Blockquote>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Fantasy</Heading>
<P>Fantasy occurs when a learner daydreams about how things should be rather than doing anything about how things are. If a learner is able to get sufficient satisfaction from daydreaming, they may stop trying to achieve their goals.</P>
<P>A good example of this would be a student pilot daydreaming about becoming an airline pilot without attempting to understand the fundamentals of flight.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Compensation</Heading>
<P>Counterbalancing perceived weakness by emphasizing strength in other areas. Essentially, substituting a strength in one area to minimize a weakness in another area. For example, if a student pilot is having a lot of trouble performing power off stalls, they may compensate for it by emphasizing how well they perform steep turns.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Projection</Heading>
<P>This is when an individual places his or her own unacceptable impulses onto someone else. An example of this would be a learner pilot blaming the examiner for their poor performance on a practical test.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Reaction Formation</Heading>
<P>This occurs when an individual fakes a belief opposite to the true belief because the true belief causes anxiety. From the Aviation Instructors Handbook:</P>
<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">For example, a learner may develop a who-cares-how-other-people-feel attitude to cover up feelings of loneliness and a hunger for acceptance.</P></Blockquote>
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

