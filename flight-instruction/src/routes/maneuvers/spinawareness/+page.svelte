<script>
     import NavBar from '../../components/NavBar.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Spin Awareness</Heading>
<P>A spin is an aggravated stall condition that can occur after a stall. Learning the causes of spins is incredibly important, as well as learning proper spin recovery techniques.</P>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/DRXek28.png></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>What Causes Spins?</Heading>
<P>A spin occurs when at least one of the airplane's wings exceeds the critical angle of attack with a sideslip or yaw acting on the airplane. This yaw can be coming from incorrect rudder application, adverse yaw from aileron deflection, or the natural turning tendencies of the airplane.</P>
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

