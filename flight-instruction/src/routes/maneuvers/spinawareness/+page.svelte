<script>
     import NavBar from '../../components/NavBar.svelte'; 
     import LessonCard from '../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Spin Awareness</Heading>
<P>A spin is an aggravated stall condition that can occur after a stall. Learning the causes of spins is incredibly important, as well as learning proper spin recovery techniques.</P>
<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">NOTE: Neither private or commercial applicants should practice spins. This lesson is intended to only be a resource for recovering from unintentional spins. Spins should only be intentionally entered into when practicing with a certified instructor.</P></Blockquote>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/DRXek28.png></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>What Causes Spins?</Heading>
<P>A spin occurs when at least one of the airplane's wings exceeds the critical angle of attack with a sideslip or yaw acting on the airplane. This yaw can be coming from incorrect rudder application, adverse yaw from aileron deflection, or the natural turning tendencies of the airplane. Therefore, the key to not entering a spin is maintaining directional control and not allowing the nose to yaw before stall recovery is initiated.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Spins vs Spirals</Heading>
<P>It is important to note that a spiral and a spin are fundamentally different. A spiral, for example the steep spiral maneuver performed by commercial pilot applicants, is characterized by a relatively high airspeed and high descent rate. However, neither wing is close to exceeding the critical angle of attack, and therefore the airplane is under full control. An uncontrolled spiral is still a dangerous maneuver, but not for the same reasons that make a spin dangerous.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Aerodynamics of Spins</Heading>
<P>Because all spins begin with an uncoordinated stall, we can understand that part of the fuselage is disrupting the airflow over one of the wings. A simple depiction of this is shown below:</P>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/0Zn4MqQ.png></Img></div>
<P>If we assume that the airplane in the figure is in a skidding turn (meaning excessive rudder inputs towards the center of the turn), then the wing that is receiving less airflow is also traveling at a slower speed compared to the outside wing. This can further aggravate over-banking tendencies as well as cause the nose to pitch down, even outside of a stall entry.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Phases of a Spin</Heading>
<Heading tag='h5'>Entry</Heading>
<P>This can be either intentional or unintentional. A typical intentional spin entry would be characterized by performing a stall while purposely adding excessive rudder in one direction.</P>
<Heading tag='h5'>Incipient Phase</Heading>
<P>This phase refers to the period from a stall to a full spin. As the spin is not fully developed, the aerodynamic forces are not balanced. The airplane will continue rolling towards the stalled wing and rapidly accelerate downwards. Rotation will also increase.</P>
<Heading tag='h5'>Developed Phase</Heading>
<P>Both wings are stalled, however the inside wing is at a higher angle of attack. The spin will stabilize with the airplane at a low airspeed and stable descent and rotation rate. The descent rate will be very high.</P>
<Heading tag='h5'>Recovery</Heading>
<P>The steps to recover from a spin can be remembered by using the acronym PARE:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Power: Idle</Li>
<Li>Ailerons: Neutral</Li>
<Li>Rudder: Opposite direction of the spin</Li>
<Li>Elevator: Forward</Li></List>
<P>Opposite to traditional stall recovery, power is reduced to aid in lowering the angle of attack. Aerodynamically, this is because adding power increases pitch and subsequently angle of attack. Keeping the ailerons neutral helps the wings reach the same angle of attack by decreasing the pitching and rolling moments. Rudder in the opposite direction of the spin counteracts the rotation, and pushing elevator forward further reduces angle of attack.</P>
<P>It is imperative that you have these steps memorized. A spin can quickly develop and subsequently cause you to lose thousands of feet of altitude in a short time. There is no time in this situation to be worrying about remembering an acronym or pulling out a checklist.</P>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/kR1BQYR.png></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Completion Standards</Heading>
<P>Spin awareness is included in both the Private and Commercial ACS. The requirements are the same for both.</P>
<Button href='https://www.faa.gov/training_testing/testing/acs/media/private_airplane_acs_change_1.pdf#page=53'>Private Pilot ACS (FAA-S-ACS-6B) (VII Task D, Page 53)</Button>
<Button href='https://www.faa.gov/training_testing/testing/acs/media/commercial_airplane_acs_change_1.pdf#page=57'>Commercial Pilot ACS (FAA-S-ACS-7A) (VII Task E, Page 57)</Button>
<Heading tag='h5'>Objective</Heading>
<P>To determine that the applicant exhibits satisfactory knowledge, risk management, and skills associated with spins, flight situations where unintentional spins may occur and procedures for recovery from unintentional spins.</P>
<Heading tag='h5'>Knowledge</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Aerodynamics associated with spins in various airplane configurations, to include the relationship between angle of attack, airspeed, load factor, power setting, airplane weight and center of gravity, airplane attitude, and yaw effects</Li>
<Li>What causes a spin and how to identify the entry, incipient, and developed phases of a spin</Li>
<Li>Spin recovery procedure</Li></List>
<Heading tag='h5'>Risk Management</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Factors and situations that could lead to inadvertent spin and loss of control</Li>
<Li>Range and limitations of stall warning indicators (e.g., aircraft buffet, stall horn, etc.)</Li>
<Li>Improper spin recovery procedure</Li>
<Li>Effect of environmental elements on airplane performance related to spins (e.g., turbulence, microbursts, and high-density altitude)</Li>
<Li>Collision hazards, to include aircraft, terrain, obstacles, and wires</Li>
<Li>Distractions, improper task management, loss of situational awareness, or disorientation</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>References</Heading>
<Button href='https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/00_afh_full.pdf#page=127'>Airplane Flying Handbook (FAA-H-8083-3C) Chapter 5-22</Button>
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

