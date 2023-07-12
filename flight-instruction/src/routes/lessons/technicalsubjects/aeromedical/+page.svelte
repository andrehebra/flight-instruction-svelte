<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Aeromedical Factors</Heading>
<P>Physical and mental health are vital to the safe operation of an airplane, and are also one of the parts that new pilots are most anxious about.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Medical Certificates</Heading>
<Heading tag='h5'>How to Obtain a Medical Certificate</Heading>
<P>Medical Certificates are granted by Aviation Medical Examiners (AMEs). They can be searched for in a specific area by using the FAA's "Find an Aviation Medical Examiner" website:</P>
<Button href='https://www.faa.gov/pilots/amelocator'>FAA AME Locator</Button>
<P>Additionally, feel free to ask your instructor if they can recommend an AME in your area.</P>
<P>Certain conditions may disqualify a person from obtaining a Medical Certificate, however, there are situations where these can be accounted for through a special issuance or a statement of demonstrated ability. More information about this can be found in the link below:</P>
<Button href='aeromedical/disqualifyingconditions/'>Disqualifying Conditions and Special Issuance/Statement of Demonstrated Ability</Button>
<Heading tag='h5'>Certificate Validity</Heading>
<P>Medical Certificates are designated from first to third class, with each granting the holder specific operating permissions.</P>
<P>Learner's wishing to work in Part 121 operations should apply for a first class medical to make sure that they are able to obtain one before engaging in costly training.</P>
<P>A breakdown of medical certificate classes and validity is below:</P>
<Button href='aeromedical/certificatevalidity'>Medical Certificate Validity</Button>
<Heading tag='h5'>BasicMed</Heading>
<P>BasicMed allows a pilot to legally operate without a valid medical certificate. The requirements are outlined in the link below:</P>
<Button href='aeromedical/basicmed/'>BasicMed Information</Button>
<Heading tag='h5'>Dealing With Health Conditions in Relation to a Medical Certificate</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Hypoxia</Heading>
<Heading tag='h5'>Hypoxic Hypoxia</Heading>
<Heading tag='h5'>Hypemic Hypoxia</Heading>
<Heading tag='h5'>Stagnant Hypoxia</Heading>
<Heading tag='h5'>Histotoxic Hypoxia</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Hyperventilation</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Middle Ear and Sinus Problems</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Spatial Disorientation</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Motion Sickness</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Carbon Monoxide Poisoning</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Fatigue</Heading>
<Heading tag='h5'>Acute Fatigue</Heading>
<Heading tag='h5'>Chronic Fatigue</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Dehydration</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Alcohol and Drugs</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Nitrogen</Heading>
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

