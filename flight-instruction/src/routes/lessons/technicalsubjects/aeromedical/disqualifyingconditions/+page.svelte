<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Disqualifying Conditions</Heading>
<P>Specific disqualifying conditions are laid out in FAR Part 67 by medical certificate class. Be sure to look into whichever class of medical you are planning on applying for or will require in your future aviation goals.</P>
<Heading tag='h2'>Possible Disqualifying Conditions</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Angina Pectoris</Li>
<Li>Bipolar Disorder</Li>
<Li>Cardiac Valve Replacement</Li>
<Li>Coronary Heart Disease that has been treated or, if untreated, that has been symptomatic or clinically significant</Li>
<Li>Diabetes Mellitus requiring hypoglycemic medication</Li>
<Li>Disturbance of Consciousness without satisfactory explanation of cause</Li>
<Li>Epilepsy</Li>
<Li>Heart Replacement (Cardiac Transplant)</Li>
<Li>Myocardial Infarction</Li>
<Li>Permanent cardiac pacemaker</Li>
<Li>Personality Disorder that is severe enough to have repeatedly manifested itself by overt acts</Li>
<Li>Psychosis</Li>
<Li>Substance Abuse</Li>
<Li>Substance Dependence</Li>
<Li>Transient Loss of Control of Nervous System function(s) without satisfactory explanation of cause</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Special Issuance</Heading>
<Button href='https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-67/subpart-E/section-67.401'>FAR Part 67.401(a): Special Issuance of Medical Certificates</Button>
<P>This would be used in situations where the applicant has a disqualifying condition but it has been treated in a manner acceptable to the FAA and does not present a safety of flight issue.</P>
<P>This will typically involve working with one or more AMEs and FAA-designated specialists</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Statement of Demonstrated Ability (SODA)</Heading>
<Button href='https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-67/subpart-E/section-67.401'>FAR Part 67.401(b): Statement of Demonstrated Ability</Button>
<P>This would be used in the case of a medical disability which does not affect the safety of flight. An example would be an amputee who demonstrates that they are able to engage in safe flight.</P>
<P>SODAs do not expire</P>
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

