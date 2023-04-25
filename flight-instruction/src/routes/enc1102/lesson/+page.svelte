<script>
     import NavBar from '../../components/NavBar.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>


<div class="holder"><div class="contents">

<Heading tag='h1'>Steep Turns</Heading>
<P>Steep turns are one of the first maneuvers you will do that puts the airplane into a relatively extreme attitude. For this reason, they can be exhilarating and fun to perform. </P>
<Heading tag='h2'>Why We Perform Steep Turns</Heading>
<P>Steep turns require the use of a combination of controls, all of which need to be precisely manipulated. At this point in your training, making a turn to a heading may seem trivial, but steep turns force a pilot to actively counteract many different forces at the same time, and the only way to succeed in the maneuver is to fundamentally understand how those forces effect the airplane.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Introduction</Heading>
<P>A steep turn consists of either a single or multiple 360 degree turns at a bank angle of either 45 degrees (private) or 50 degrees (commercial). A depiction of the maneuver is shown below:</P>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/lgjsCNH.png></Img></div>
<P>Remember that this is not a ground reference maneuver, so wind drift does not need to be accounted for. A successful steep turn is judged based on the angle of bank maintained, deviations in altitude throughout the maneuver, and the heading that you roll out on in relation to your entry heading.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Fundamental Concepts</Heading>
<P>Once you understand how the airplane handles differently during steep turns, it becomes easy to properly perform the maneuver. Make sure that you fully understand these concepts before attempting steep turns.</P>
<Heading tag='h5'>Loss of Vertical Component of Lift</Heading>
<Button href='https://www.faa.gov/sites/faa.gov/files/2022-03/pilot_handbook.pdf#page=121'>PHAK Chapter 5-22 - Forces in Turns</Button>
<P>For this discussion, we can assume that lift is generated perpendicular to the wings. Therefore, without increasing angle of attack in a banked turn, the airplane will begin to sink. A depiction of this is shown below:</P>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/VBECmeT.png></Img></div>
<P>This concept is true for all banked turns, however it becomes more pronounced with higher bank angles. For example, a 30 degree banked turn will require a 15.47% increase in total lift, while a 45 degree banked turn will require a 41.42% increase in total lift.</P>
<P>In practical terms, the higher the bank angle, the more back pressure required on the elevator to increase angle of attack and therefore increase the total amount of lift being produced.</P>
<Heading tag='h5'>Higher G-Forces</Heading>
<Button href='https://www.faa.gov/sites/faa.gov/files/2022-03/pilot_handbook.pdf#page=132'>PHAK Chapter 5-33 - Load Factors</Button>
<P>As we counteract the loss of vertical lift with an increase in elevator back pressure, we will experience higher than normal G-Forces, also referred to as load factor. See the above reading in the Pilot's Handbook of Aeronautical Knowledge for a more in depth description of load factor.</P>
<P>Load factor is measured in terms of Gs. 1 G is equivalent to the force exerted by gravity on a body at rest. Using this measurement, we can say that experiencing a 2 G maneuver would cause you to feel as though you weigh twice as much as you actually do. Assuming coordinated constant altitude flight, we can directly relate bank angle to load factor, regardless of airspeed, as shown below:</P>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/oTt5zwD.png></Img></div>
<P>You can also calculate load factor using simple arithmetic by adding the gravity and centrifugal force vectors together: </P>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/BRItl6u.png></Img></div>
<P>Centrifugal force is a pseudo-force, meaning that it doesn't actually exist. A good example of this force would be a quick turn in a car. You feel yourself being pushed to the outside of the turn, but in reality the car is changing directions while your body's inertia continues to push you straight. The force you feel, therefore, is not you being pushed but the car changing direction in relation to you.</P>
<Heading tag='h5'>Overbanking Tendency</Heading>
<P>An airplanes overbanking tendency increases as the turn radius decreases. As a turn tightens, the speed of the inside wing decreases in relation to the speed of the outer wing. As angle of attack remains constant on both wings and the airspeed of the outer wing is higher, this causes the outer wing to generate more lift in comparison to the inside wing. This will cause the outside wing to rise and increase the bank of a turn.</P>
<P>To counteract this, you may require aileron deflections in the opposite direction of the turn to maintain your desired bank angle.</P>
<Heading tag='h5'>Pitch Control Pressures</Heading>
<P>As discussed earlier, due to the decrease in vertical lift during a steep turn, high levels of pressure need to be exerted on the elevator. To maintain altitude. For steep turns, be prepared to use higher pressure than you are used to, and anticipate this by adding a few wheels of nose up pitch as you enter your first turn to make things easier for you.</P>
<Heading tag='h5'>Additional Power Requirements</Heading>
<P>We accomplish an increase in total lift during steep turns by increasing pitch and subsequently increasing angle of attack. As angle of attack increases, however, so does our coefficient of drag, as shown in the graph below:</P>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/roaHN5X.png></Img></div>
<P>Therefore, to maintain our airspeed throughout the maneuver, an increase in power is required. Be prepared to add power as you enter the maneuver to avoid losing airspeed.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>The Procedure</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Select an altitude to allow recovery above 1,500 feet AGL (3,000 feet preferred)</Li>
<Li>Select a visual reference point to roll in and out on</Li></List>
<P>Make sure that this reference point is prominent. If there are clouds in the sky it could be a good idea to use that as your reference.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Set power to 2,200 RPM to slow to a speed below Va</Li>
<Li>Line up with the visual reference point selected and maintain heading and altitude (bug heading and altitude for reference)</Li>
<Li>Smoothly begin rolling into a bank in the direction of the cleared area while maintaining coordination using ailerons and rudders</Li>
<Li>As bank angle passes 40 degrees, increase pitch and power by about 150 RPM to maintain altitude and airspeed</Li>
<Li>Add a full wheel of nose up trim to assist with the backpressure required</Li>
<Li>Establish the desired bank angle (45 degrees for private, 50 degrees for commercial)</Li>
<Li>Use the horizon to as an indicator for bank angle and proper pitch attitude required</Li></List>
<P>This maneuver should be performed by mainly focusing outside. Looking inside too much is detrimental to performance because the VSI will lag behind actual changes in altitude.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Begin rollout prior to the reference point to allow wings level by the time the nose is pointing at the visual reference point</Li></List>
<P>A good rule of thumb is to divide your bank angle in half and start your rollout that many degrees before reaching your reference point.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>If performing two steep turns, roll through wings level and immediately start a turn in the opposite direction</Li>
<Li>On final rollout, apply one wheel of nose down trim and resume normal cruise by completing the cruise checklist</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h5'>Common Errors </Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Not clearing the area</Li>
<Li>Inadequate pitch control on entry or rollout</Li>
<Li>Gaining or losing altitude</Li>
<Li>Failure to maintain constant bank angle</Li>
<Li>Poor flight control coordination</Li>
<Li>Ineffective use of trim</Li>
<Li>Ineffective use of power</Li>
<Li>Inadequate airspeed control</Li>
<Li>Becoming disoriented</Li>
<Li>Performing by reference to the flight instruments rather than visual references</Li>
<Li>Failure to scan for other traffic during the maneuver</Li>
<Li>Attempting to start recovery prematurely</Li>
<Li>Failure to stop the turn on the designated heading</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Completion Standards</Heading>
<P>Steep turns are listed in both the private and commercial ACS, with the commercial ACS requiring a 50 degree bank angle instead of 45 degrees.</P>
<Button href='https://www.faa.gov/training_testing/testing/acs/media/private_airplane_acs_change_1.pdf#page=44'>Private Pilot ACS (FAA-S-ACS-6B) (V Task A, Page 44)</Button>
<Button href='https://www.faa.gov/training_testing/testing/acs/media/commercial_airplane_acs_change_1.pdf#page=44'>Commercial Pilot ACS (FAA-S-ACS-7A) (V Task A, Page 44)</Button>
<div><Tabs style='underline'>
<TabItem open title="Private Pilot"><div class="contents">
<Heading tag='h5'>Objective</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>To determine that the applicant exhibits satisfactory knowledge, risk management, and skills associated with steep turns.</Li></List>
<Heading tag='h5'>Knowledge</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Purpose of steep turns</Li>
<Li>Aerodynamics Associated with steep turns, including:</Li>
<Li>a. Coordinated and uncoordinated flight</Li>
<Li>b. Overbanking tendencies</Li>
<Li>c. Maneuvering speed, including the impact of weight changes</Li>
<Li>d. Load factor and accelerated stalls</Li>
<Li>e. Rate and radius of turn</Li></List>
<Heading tag='h5'>Risk Management</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Failure to divide attention between airplane control and orientation</Li>
<Li>Collision hazards, to include aircraft and terrain</Li>
<Li>Low altitude maneuvering including stall, spin, or CFIT</Li>
<Li>Distractions, improper task management, loss of situational awareness, or disorientation</Li>
<Li>Failure to maintain coordinated flight</Li></List>
<Heading tag='h5'>Skills</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Clear the area</Li>
<Li>Establish the manufacturer’s recommended airspeed; or if one is not available, an airspeed not to exceed VA</Li>
<Li>Roll into a coordinated 360° steep turn with approximately a 45° bank</Li>
<Li>Perform the task in the opposite direction, as specified by evaluator</Li>
<Li>Maintain the entry altitude ±100 feet, airspeed ±10 knots, bank ±5°, and roll out on the entry heading ±10°</Li></List>
</div></TabItem>
<TabItem title="Commercial Pilot"><div class="contents">
<Heading tag='h5'>Objective</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>To determine that the applicant exhibits satisfactory knowledge, risk management, and skills associated with steep turns.</Li></List>
<Heading tag='h5'>Knowledge</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Purpose of steep turns</Li>
<Li>Aerodynamics Associated with steep turns, including:</Li>
<Li>a. Coordinated and uncoordinated flight</Li>
<Li>b. Overbanking tendencies</Li>
<Li>c. Maneuvering speed, including the impact of weight changes</Li>
<Li>d. Load factor and accelerated stalls</Li>
<Li>e. Rate and radius of turn</Li></List>
<Heading tag='h5'>Risk Management</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Failure to divide attention between airplane control and orientation</Li>
<Li>Collision hazards, to include aircraft and terrain</Li>
<Li>Low altitude maneuvering including stall, spin, or CFIT</Li>
<Li>Distractions, improper task management, loss of situational awareness, or disorientation</Li>
<Li>Failure to maintain coordinated flight</Li></List>
<Heading tag='h5'>Skills</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Clear the area</Li>
<Li>Establish the manufacturer’s recommended airspeed or an airspeed not to exceed VA if not available</Li>
<Li>Roll into a coordinated 360° steep turn with approximately a 50° bank</Li>
<Li>Perform the task in the opposite direction</Li>
<Li>Maintain the entry altitude ±100 feet, airspeed ±10 knots, bank ±5°, and roll out on the entry heading ±10°</Li></List>
</div></TabItem></Tabs></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>References</Heading>
<Button href='https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/00_afh_full.pdf#page=210'>Airplane Flying Handbook (FAA-H-8083-3C) Chapter 10</Button>
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

