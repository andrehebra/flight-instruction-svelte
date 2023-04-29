<script>
     import NavBar from './../../components/NavBar.svelte'; 
     import LessonCard from './../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Basic Instrument Maneuvers</Heading>
<P>In this lesson, we will cover the fundamentals of instrument flying, including the various instruments used, how to interpret and use them, and the basic maneuvers required for safe instrument flight. This is by no means a replacement for an instrument rating, it is simply made to ensure that VFR pilots are capable of dealing with unexpected adverse weather.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>The Hazards of VFR into IMC</Heading>
<P>VFR into IMC, or visual flight rules into instrument meteorological conditions, is a dangerous scenario that can quickly turn fatal for pilots. Entering into an area of low visibility, such as fog or clouds, can quickly lead to spatial disorientation and loss of control. Statistics from the FAA indicate that spatial disorientation is a factor in approximately 15% of general aviation accidents, of which 90% are fatal. Having an understanding of spatial disorientation and the problems it causes can dramatically increase your ability to fly safely. See the article and video below for more information about the insidious nature of spatial disorientation. </P>
<Button href='https://www.youtube.com/watch?v=MBL1iy0V9VM&ab_channel=AirSafetyInstitute'>Air Safety Institute Video - Hazardous Attitudes</Button>
<Button href='https://www.smithsonianmag.com/air-space-magazine/the-disorient-express-474780/'>Smithsonian Magazine - The Disorient Express</Button>
<Heading tag='h2'>Spatial Disorientation</Heading>
<P>One of the most insidious aspects of spatial disorientation is that it can happen quickly and without warning. A pilot may feel like they are flying straight and level, when in reality they are turning, climbing, or descending. Without the proper training and equipment, a pilot may have difficulty determining their true orientation and could inadvertently make incorrect control inputs, leading to a loss of control of the aircraft. The FAA brochure linked below briefly discusses how our body maintains its orientation and some of the common types of vestibular illusions.</P>
<Button href='https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/spatiald.pdf'>FAA - Spatial Orientation in Flight</Button>
<P>An important takeaway from the article above is to always trust your instruments when you do not have outside visual references, even if all of your instincts are telling you they are wrong. But first, we need to understand how to properly interpret our instruments.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Methods of Attitude Instrument Flying</Heading>
<P>Instrument flying does not come naturally to most people. Understanding the fundamental ideas, however, can help you to become proficient in it relatively quickly. Right now we are going to focus on one method of attitude instrument flying that is acceptable, that being the "control and performance" method. For more information, see the link below:</P>
<Button href='https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf#page=148'>FAA-H-8083-15B Instrument Flying Handbook - Chapter 6</Button>
<Heading tag='h5'>Control and Performance Method</Heading>
<P>From the Instrument Flying Handbook:</P>
<Blockquote border bg class="p-4 my-4"><P size="md" height="relaxed">Aircraft performance is achieved by controlling the aircraft attitude and power. Aircraft attitude is the relationship of both the aircraft’s pitch and roll axes in relation to the Earth’s horizon. An aircraft is flown in instrument flight by controlling the attitude and power, as necessary, to produce both controlled and stabilized flight without reference to a visible horizon. This overall process is known as the control and performance method of attitude instrument flying.</P></Blockquote>
<P>This method of instrument flying divides the flight instruments into either "control" instruments or "performance" instruments. The general idea being that control instruments display immediate attitude and power indications, while performance instruments indicate the aircraft's actual performance. Additionally, navigation instruments are all of the instruments used to determine the aircraft's position in relation to the set navaid.</P>
<P>Control Instruments:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Attitude Indicator</Li>
<Li>Tachometer</Li></List>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/PXWCJXc.png></Img></div>
<P>Performance Instruments:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Airspeed Indicator</Li>
<Li>Altimeter</Li>
<Li>Vertical Speed Indicator (VSI)</Li>
<Li>Heading Indicator</Li></List>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/wC1Ntle.png></Img></div>
<P>Using this methodology, we can consider all of the changes we want to make in terms of changes in attitude. The instrument flying handbook lays out the four steps to properly make changes:</P>
<Heading tag='h6'>Establish</Heading>
<P>Any time the attitude of the aircraft requires changing, the pilot must adjust the pitch and/or bank in conjunction with power to establish the desired performance. The changes in pitch and bank require the pilot to reference the attitude indicator in order to make precise changes. Power changes should be verified on the tachometer, manifold pressure gauge, etc. To ease the workload, the pilot should become familiar with the approximate pitch and power changes necessary to establish a specified attitude.</P>
<Heading tag='h6'>Trim</Heading>
<P>Another important step in attitude instrument flying is trimming the aircraft. Trim is utilized to eliminate the need to apply force to the control yoke in order to maintain the desired attitude. When the aircraft is trimmed appropriately, the pilot is able to relax pressure on the control yoke and momentarily divert attention to another task at hand without deviating from the desired attitude. Trimming the aircraft is very important, and poor trim is one of the most common errors instructors note in instrument students.</P>
<Heading tag='h6'>Cross-Check</Heading>
<P>Once the initial attitude changes have been made, the pilot should verify the performance of the aircraft. Cross-checking the control and performance instruments requires the pilot to visually scan the instruments, as well as interpret the indications. All the instruments must be utilized collectively in order to develop a full understanding of the aircraft attitude. During the cross-check, the pilot needs to determine the magnitude of any deviations and determine how much of a change is required. All changes are then made based on the control instrument indications.</P>
<P>A good way to execute your cross-check is to use the "hub and spoke" system. If we visualize the attitude indicator as the center of a bicycle wheel, we can then assume each of our instruments are spokes on that wheel. Our scan should always begin with the attitude indicator, and then briefly switch to each instrument before returning to the attitude indicator. We can then move to the next instrument in a circular pattern. By doing this in a systematic way, we can ensure that we check each one of the instruments regularly and never stay away from the attitude indicator for too long.</P>
<Heading tag='h6'>Adjust</Heading>
<P>The final step in the process is adjusting for any deviations that have been noted during the cross-check. Adjustments should be made in small increments. The attitude indicator and the power instruments are graduated in small increments to allow for precise changes to be made. The pitch should be made in reference to bar widths on the miniature airplane. The bank angle can be changed in reference to the roll scale and the power can be adjusted in reference to the tachometer, manifold pressure gauge, etc.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Recognition of IMC</Heading>
<P>Anytime a VFR pilot is not able to maintain airplane control by reference to the natural horizon, the condition is considered to be IMC regardless of the circumstances or the weather conditions.</P>
<Heading tag='h5'>Steps to Take</Heading>
<P>Once you realize that you no longer have reference to the natural horizon, take these steps:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Recognize and accept the seriousness of the situation and the need for immediate action</Li>
<Li>Maintain control of the airplane (remember: aviate, navigate, communicate)</Li>
<Li>Get assistance from ATC</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Straight and Level Flight</Heading>
<P>This is going to be the first instrument maneuver that you perform. Remember that the airplane is inherently stable, assuming it is trimmed properly and there is not extreme turbulence. A real world situation is going to be anxiety inducing, but this is not the time to be rapidly changing airplane configuration or making extreme control inputs. A few tips can make this easier:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Trim the airplane with the elevator trim so that it maintains hands-off level flight at cruise speed</Li>
<Li>Do not over-control the airplane. Fly with light control inputs, just as you would VFR</Li>
<Li>Make all changes in attitude smoothly, and only make slight changes and wait for their effects. Small changes in on the attitude indicator will result in large changes in actual attitude</Li>
<Li>Make use of any available aid, such as autopilot (assuming your have been properly trained on it and know how to use it)</Li></List>
<P>Make sure that you bug your heading and altitude for quick reference when performing your instrument cross check. As you begin to notice deviations, correct for them promptly but gently. </P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Turns</Heading>
<P>Turns can be the most dangerous maneuver for an untrained instrument pilot. This occurs for two reason:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Tendency for a pilot to over-control, leading to steep banks and the possibility of a "graveyard spiral" (see the linked FAA document above on spatial orientation)</Li>
<Li>Inability for a pilot to cope with the instability resulting from the turn</Li></List>
<P>When making a turn, use the smallest amount of bank required. A good rule of thumb is to not bank more than 10 degrees. This will require less back-pressure than a steeper turn, and allow for deviations to gradually occur rather than rapidly. You can also turn a few degrees and then return to level flight if a large change in heading is necessary.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Climbs</Heading>
<P>Remember, an increase in pitch and power from level flight will result in a climb. You should have the pitch and power table memorized to know how much pitch and how much power is required. That being said, our main concern is proper control of the airplane, so a maximum performance climb is not necessary. Adding power and slightly increasing pitch should result in a slight climb that is manageable. This will also reduce left turning tendencies.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Descents</Heading>
<P>As we previously discussed, because we are trimming for a certain airspeed, a reduction in power will correspond with a decrease in pitch due to the reduction in tail downforce. Therefore, given that the airplane is trimmed properly for straight and level flight, a slight reduction in power will result in a descent at nearly the same airspeed. It is recommended to make slight adjustments in power and allow the pitch to decrease slightly on its own. Make adjustments of no more than 100 RPM at a time, as necessary.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Combined Maneuvers</Heading>
<P>Combined maneuvers should be avoided at all costs. Remember, we are simulating an extremely dangerous situation. While it may be good to practice these maneuvers, in a real world scenario you should separate turns and climbs/descents. If you need to turn to a heading and descend, complete the turn first, make sure the airplane is trimmed properly and controlled, and then initiate a descent.</P>
<P>If you are talking to ATC, their main priority is to get you to safety as quickly as possible. Remember, however, that many of them are not pilots and you are the deciding factor in the safety of your flight. If you sense pressure to complete multiple things at once, unless there is an immediate need (i.e. an obstacle directly in front of you), state your intentions clearly and do not put yourself in an unsafe position where you will be overwhelmed. You can always ask the controller to slow down, or deny their instructions if they would put you into an unsafe position.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Transition to Visual Flight</Heading>
<P>Once you have exited IMC, remember that it will take time to become reaccustomed to visual flight. You may feel a pressure to get the airplane on the ground as quickly as possible, but if the conditions allow take some time to gather yourself and regain full control before attempting a landing. Inadvertent entry into IMC will likely be an extremely stressful experience, and there is no need to rush into a landing, unless of course the weather conditions do not allow it.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Exiting IMC</Heading>
<P>This is the step that does not have extremely clear instructions other than: go out the way you came in. If you are flying straight and level and accidentally enter a cloud, the best course of action is to probably make a 180 degree turn. If you climb into a cloud, the best course of action is to probably descend. This is where you are going to have to use your judgement based on the conditions of the day and what caused you to enter IMC in the first place.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Completion Standards</Heading>
<Button href='https://www.faa.gov/training_testing/testing/acs/media/private_airplane_acs_change_1.pdf#page=54'>Private Pilot ACS (FAA-S-ACS-6B) (VIII Tasks A-F, Page 54-59)</Button>
<P>Basic Instrument Maneuvers are only listed in the Private Pilot ACS. There are six required tasks: </P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Straight-and-Level Flight</Li>
<Li>Constant Airspeed Climbs</Li>
<Li>Constant Airspeed Descents</Li>
<Li>Turns to Headings</Li>
<Li>Recovery from Unusual Flight Attitudes</Li>
<Li>Radio Communications, Navigation Systems/Facilities, and Radar Services</Li></List>
<P>Below are the completion standards as they are listed in the ACS. The last task is not included in this lesson plan, as it is not a maneuver.</P>
<Heading tag='h5'>Objective</Heading>
<P>To determine that the applicant exhibits satisfactory knowledge, risk management, and skills associated with radio communications, navigation systems/facilities, and radar services available for use during flight solely by reference to instruments.</P>
<Heading tag='h5'>Knowledge</Heading>
<P>The applicant demonstrates an understanding of:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Sensitivity, limitations, and potential errors in unusual attitudes</Li>
<Li>Correlation (pitch instruments/bank instruments)</Li>
<Li>Function and operation</Li>
<Li>Proper instrument cross-check techniques</Li></List>
<Heading tag='h5'>Risk Management</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Instrument flying hazards to include failure to maintain VFR, spatial disorientation, loss of control, fatigue, stress, and emergency off airport landings</Li>
<Li>Failure to seek assistance or declare an emergency in a deteriorating situation</Li>
<Li>Collision hazards, to include aircraft, terrain, obstacles, and wires</Li>
<Li>Distractions, loss of situational awareness, or improper task management</Li></List>
<Heading tag='h5'>Skills</Heading>
<div><Tabs style='underline'>
<TabItem open title="Straight-and-Level Flight"><div class="contents">
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Maintain straight-and-level flight using proper instrument cross-check and interpretation, and coordinated control application</Li>
<Li>Maintain altitude ±200 feet, heading ±20°, and airspeed ±10 knots</Li></List>
</div></TabItem>
<TabItem title="Constant Airspeed Climbs"><div class="contents">
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Transition to the climb pitch attitude and power setting on an assigned heading using proper instrument cross-check and interpretation, and coordinated flight control application</Li>
<Li>Climb at a constant airspeed to specific altitudes in straight flight and turns</Li>
<Li>Level off at the assigned altitude and maintain altitude ±200 feet, heading ±20°, and airspeed ±10 knots</Li></List>
</div></TabItem>
<TabItem title="Constant Airspeed Descents"><div class="contents">
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Transition to the descent pitch attitude and power setting on an assigned heading using proper instrument cross-check and interpretation, and coordinated flight control application</Li>
<Li>Descend at a constant airspeed to specific altitudes in straight flight and turns</Li>
<Li>Level off at the assigned altitude and maintain altitude ±200 feet, heading ±20°, and airspeed ±10 knots</Li></List>
</div></TabItem>
<TabItem title="Turns to Headings"><div class="contents">
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Turn to headings, maintain altitude ±200 feet, maintain a standard rate turn, roll out on the assigned heading ±10°, and maintain airspeed ±10 knots</Li></List>
</div></TabItem>
<TabItem title="Recovery from Unusual Flight Attitudes"><div class="contents">
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Recognize unusual flight attitudes; perform the correct, coordinated, and smooth flight control application to resolve unusual pitch and bank attitudes while staying within the airplane’s limitations and flight parameters</Li></List>
</div></TabItem></Tabs></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>References</Heading>
<Button href='https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/00_afh_full.pdf#page=366'>Airplane Flying Handbook (FAA-H-8083-3C) - Chapter 18-17 - 18-22</Button>
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

