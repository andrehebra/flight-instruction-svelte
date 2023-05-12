<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Emergency Descent</Heading>
<P>An emergency descent is utilized during an emergency when a rapid descent is necessary for safety. This maneuver can be incredibly useful to lose a lot of altitude while not overstressing any part of the airplane.</P>
<Heading tag='h2'>Why Do We Need A Specific Maneuver for This?</Heading>
<P>Descending rapidly might seem trivial, however, that is far from the truth. Simply pushing the nose over to descend can quickly overstress the airframe with negative G loading. Remember that the load factor of the 172S, when flying in the normal category, is +3.8g and -1.52g with the flaps up (see page 2-11 of the POH).</P>
<P>Beyond negative g loading being uncomfortable, it can easily damage the airplane. To solve this problem, we need to positively load the airplane to counteract any negative loads. The easiest way to accomplish this is to bank the airplane.</P>
<Heading tag='h5'>Bank Angle as it Relates to Load Factor</Heading>
<P>This is simply a quick review, and for more comprehensive information you should read the Pilot's Handbook of Aeronautical Knowledge Chapter 5.</P>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/plSmW0x.png></Img></div>
<P>As shown in the chart above, increases in bank angle are related to an exponential increase in load factor. This means that through deliberate practice, you can become proficient in cancelling out any negative loads that you impose throughout the maneuver.</P>
<Heading tag='h2'>Performing an Emergency Descent</Heading>
<P>As with any other maneuver, the first step is to clear the area. It is especially important to clear the area below you before performing an emergency descent because of the airplane's high speed and descent rate.</P>
<P>Next, enter a descending turn to the pilot's side. You should shoot for a bank angle of 30 to 45 degrees. Remember that this is going to change depending on the load factor that you are incurring on the airplane.</P>
<P>Set a pitch attitude that will allow you to maintain 129 KIAS, which is the VNO of the 172S. As your airspeed increases, remember that you can reduce your bank angle. Many pilots have a tendency to either maintain their bank angle or induce a bank in the opposite direction. This, however, is not necessary as the only time you will encounter negative loading is during the entrance into the maneuver.</P>
<P>To level off at the assigned altitude, remember the rule of thumb of beginning your recovery at 1/10th your VSI above the target altitude. Recovery should be done smoothly, and with due care not to induce too much postive load on the airplane. Again, remember that having any amount of bank in during this step will add additional positive loading.</P>
<P>After leveling off, slowly apply power to return to normal cruise and perform the cruise checklist.</P>
<Heading tag='h2'>Completion Standards</Heading>
<P>The completion standards for emergency descents are the same in both the private and commercial ACS. They are shown below:</P>
<Button href='https://www.faa.gov/training_testing/testing/acs/media/private_airplane_acs_change_1.pdf#page=60'>Private Pilot ACS (FAA-S-ACS-6B) (IX Task A, Page 60)</Button>
<Button href='https://www.faa.gov/training_testing/testing/acs/media/commercial_airplane_acs_change_1.pdf#page=60'>Commercial Pilot ACS (FAA-S-ACS-7A) (IX Task A, Page 60)</Button>
<Heading tag='h5'>Objective</Heading>
<P>To determine that the applicant exhibits satisfactory knowledge, risk management, and skills associated with an emergency descent.</P>
<Heading tag='h5'>Knowledge</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Situations that would require an emergency descent (e.g., depressurization, smoke, or engine fire)</Li>
<Li>Immediate action items and emergency procedures</Li>
<Li>Airspeed, to include airspeed limitations</Li></List>
<Heading tag='h5'>Risk Management</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Failure to consider altitude, wind, terrain, obstructions, and available glide distance</Li>
<Li>Collision hazards, to include aircraft, terrain, obstacles, and wires</Li>
<Li>Improper airplane configuration</Li>
<Li>Distractions, loss of situational awareness, or improper task management</Li></List>
<Heading tag='h5'>Skills</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Clear the area</Li>
<Li>Establish and maintain the appropriate airspeed and configuration appropriate to the scenario specified by the evaluator and as covered in POH/AFM for the emergency descent</Li>
<Li>Maintain orientation, divide attention appropriately, and plan and execute a smooth recovery</Li>
<Li>Use bank angle between 30° and 45° to maintain positive load factors during the descent</Li>
<Li>Maintain appropriate airspeed +0/-10 knots, and level off at a specified altitude ±100 feet</Li>
<Li>Complete the appropriate checklist</Li></List>
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

