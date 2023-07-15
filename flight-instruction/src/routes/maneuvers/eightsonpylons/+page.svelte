<script>
     import NavBar from '../../components/NavBar.svelte'; 
     import LessonCard from '../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Eights on Pylons</Heading>
<P>Eights on Pylons is one of the most fun, but also most difficult maneuvers to master. It takes elements from ground reference maneuvers, and expands them into another dimension.</P>
<P>Before we can learn how to do them, we have to understand a few new concepts.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Pivotal Altitude</Heading>
<Heading tag='h5'>What is Pivotal Altitude</Heading>
<P>The pivotal altitude is the altitude where, for a given groundspeed, the projection of a visual reference line to a pylon appears to pivot. See the image below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/751ae85b-7d55-4dcb-3841-777682e9ec00/public"></Img></div>
<P>Assuming you are at the correct pivotal altitude, you could maintain a specific bank angle which would cause you to pivot around a reference point. See the image below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/0b6a1534-efdc-42b7-4b19-99dc2915e000/public"></Img></div>
<Heading tag='h5'>Calculating Pivotal Altitude</Heading>
<P>Pivotal altitude can be calculated using the following formula:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/60675529-a423-4dba-14e9-ac5401310600/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Changes in Groundspeed</Heading>
<P>Your groundspeed will continually change as you rotate around a point because of the wind.</P>
<P>Therefore, your pivotal altitude will also change as you rotate around a point.</P>
<P>Your pivotal altitude will always be highest when flying downwind, as your groundspeed will be higher.</P>
<P>Your pivotal altitude will always be the lowest when flying upwind, as your groundspeed will be lower.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Setting Up and Entering the Maneuver</Heading>
<P>Below is a depiction of the eights on pylons maneuver:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/406a02b1-61d7-40c0-b725-096939d07a00/public"></Img></div>
<Heading tag='h5'>Selecting Pylons</Heading>
<P>Select pylons that are perpendicular to the wind.</P>
<P>A good rule of thumb is that the pylons should be about 16 to 20 seconds away from one another if you fly between them. Use the timer function on the PFD to ensure that your pylons are at an adequate distance from one another.</P>
<Heading tag='h5'>Entering the Maneuver</Heading>
<P>Fly upwind of the pylons an adequate distance to give yourself time to calculate your pivotal altitude.</P>
<P>You want to enter the maneuver downwind at a 45 degree angle between the pylons.</P>
<P>Turn to your entrance heading between the pylons, and calculate your pivotal altitude. The chart below can be helpful, but you can also use the E6B app to calculate it.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/39fc072e-4119-4347-692e-eb6b2e7db700/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Performing the Manuever</Heading>
<P>Once you are at your pivotal altitude, wait until abeam the pylon on your left side.</P>
<P>Smoothly enter into a bank that makes the pylon appear directly off your shoulder. You can line it up with the wingtip to keep track of it.</P>
<P>Below is a picture of my aligned with a median that I used as a pylon:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/f5dd6675-94ee-47e4-6531-71388f87a800/public"></Img></div>
<P>While keeping your bank consistent, make pitch adjustments to keep the pylon aligned.</P>
<P>This should be thought of as making changes to your pivotal altitude. As your groundspeed slows down, pitch forward to decrease your altitude to meet the pivotal altitude. As your groundspeed increases, pitch up to increase your altitude.</P>
<P>Refer to the diagram above as a reference to when your pivotal altitude will be the largest and the smallest.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Common Errors</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Not clearing the area</Li>
<Li>Skidding or slipping turns</Li>
<Li>Excessive gain or loss of altitude</Li>
<Li>Poor choice of pylons</Li>
<Li>Not entering the pylon turns into the wind</Li>
<Li>Failure to assume a heading when flying between pylons that will compensate sufficiently for drift</Li>
<Li>Failure to time the bank so that the turn entry is completed with the pylon in position</Li>
<Li>Abrupt control usage</Li>
<Li>Inability to select pivotal altitude</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Completion Standards</Heading>
<Heading tag='h5'>Objective</Heading>
<P>To determine that the applicant exhibits satisfactory knowledge, risk management, and skills associated with eights on pylons.</P>
<Heading tag='h5'>Knowledge</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Purpose of eights on pylons</Li>
<Li>Aerodynamics associated with the eights on pylons to include coordinated and uncoordinated flight</Li>
<Li>Pivotal altitude and factors that affect it</Li>
<Li>Effect of wind on ground track</Li>
<Li>Phases of the eights on pylons maneuver from entry to recover</Li></List>
<Heading tag='h5'>Risk Management</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Failure to divide attention between airplane control and orientation</Li>
<Li>Collision hazards, to include aircraft, terrain, obstacles, and wires</Li>
<Li>Low altitude maneuvering including, stall, spin, or CFIT</Li>
<Li>Distractions, loss of situational awareness, or improper task management</Li>
<Li>Failure to maintain coordinated flight</Li>
<Li>Failure to manage energy state</Li>
<Li>Emergency landing considerations</Li></List>
<Heading tag='h5'>Skills</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Clear the area</Li>
<Li>Determine the approximate pivotal altitude</Li>
<Li>Select suitable pylons that will permit straight-and-level flight between the pylons</Li>
<Li>Enter the maneuver in the correct direction and position using an appropriate altitude and airspeed</Li>
<Li>Establish the correct bank angle for the conditions, not to exceed 40°</Li>
<Li>Apply smooth and continuous corrections so that the line-of-sight reference line remains on the pylon</Li>
<Li>Divide attention between accurate, coordinated airplane control and outside visual references</Li>
<Li>Maintain pylon position using appropriate pivotal altitude, avoiding slips and skids</Li></List>
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

