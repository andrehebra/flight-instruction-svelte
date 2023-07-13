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
<P>Remember that just because you have a medical certificate, you cannot operate an aircraft if you are currently experiencing a condition that would not allow you to obtain that same medical certificate again. Beyond the legal aspect, it is important to understand that any condition will have a negative impact on your performance and should be considered before taking the responsibility of flying an airplane.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Hypoxia</Heading>
<P>A state of oxygen deficiency in the body sufficient to impair functions of the brain and other organs. See the information below for the symptoms of hypoxia:</P>
<Button href='aeromedical/effectsofhypoxia'>Effects and Symptoms of Hypoxia</Button>
<Heading tag='h5'>Hypoxic Hypoxia</Heading>
<P>Caused by increased pressure altitude or a blocked airway. Can be thought of as not enough oxygen being able to enter into the lungs. This is the most common occurrence of hypoxia in aviation. </P>
<Heading tag='h5'>Hypemic Hypoxia</Heading>
<P>Caused by blood not being able to take up oxygen and transport it. Carbon monoxide poisoning is an example of this. The hemoglobin in your body will bind to the Carbon Monoxide instead of oxygen, and therefore transport it instead.</P>
<Heading tag='h5'>Stagnant Hypoxia</Heading>
<P>Caused by the circulatory system not being able to circulate enough oxygenated blood throughout the body. This could be caused by high g maneuvers in airplanes, where the body can't push oxygenated blood into the brain.</P>
<P>Additionally, stagnant hypoxia can be caused by diseases like sickle cell anemia, or hypothermia, which causes blood vessels to constrict.</P>
<Heading tag='h5'>Histotoxic Hypoxia</Heading>
<P>Caused by cells not being able to use the oxygen that is transported to it. This can often times be caused by the use of alcohol or drugs which impair cell functions in accepting oxygen.</P>
<P>The best example of this would be cyanide poisoning, which directly prevents cells from using oxygen and is fatal.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Hyperventilation</Heading>
<P>Hyperventilation is a rapid or deep breathing that is generally caused by anxiety or panic. The excessive breathing can lead to low levels of carbon dioxide in your blood, which causes many of the symptoms that you may feel if you hyperventilate.</P>
<Button href='aeromedical/hyperventilation'>Causes and Symptoms of Hyperventilation</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Middle Ear and Sinus Problems</Heading>
<P>Sinus issues and ear pain are common in flight due to the rapid changes in pressure that are normally experienced. It is important to understand how to deal with these problems for both the pilot and passengers.</P>
<Button href='aeromedical/middleear'>The Middle Ear and Ear Block</Button>
<Button href='aeromedical/sinusproblems'>Sinus Problems Related to Flight</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Spatial Disorientation</Heading>
<P>Spatial disorientation refers to anytime a pilot loses orientation with regard to the position, attitude, or movement of the airplane in space. Spatial disorientation can be divided into many different categories, as explained in the link below:</P>
<Button href='aeromedical/spatialdisorientation'>Spatial Disorientation</Button>
<P>Additionally, it is important to understand how the inner ear helps us to maintain orientation. See the link below for more information:</P>
<Button href='aeromedical/innerear'>Inner Ear and Otolith Organs</Button>
<Heading tag='h5'>Optical Illusions</Heading>
<P>There are also many different optical illusions that can be hazardous for pilots. See the link below for more information:</P>
<Button href='aeromedical/opticalillusions'>Optical Illusions</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Motion Sickness</Heading>
<P>Motion sickness arises from the body receiving conflicting messages about its orientation. Remember that our bodies were not designed to be in flight, and therefore will not naturally be accustomed to all of the different forces involved in even a calm flight.</P>
<Heading tag='h5'>Motion Sickness in Learners</Heading>
<P>Motion sickness is common in new pilots who are flying for the first time. Especially in light aircraft. It will generally go away after the first few lessons.</P>
<P>Once a learner becomes sick, however, it is important to stop instructing and make them comfortable. People can not learn when they are sick, and there is no point in needlessly making someone uncomfortable.</P>
<P>Anxiety and stress will also contribute to motion sickness.</P>
<Heading tag='h5'>Symptoms of Motion Sickness</Heading>
<P>Symptoms include:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>General discomfort</Li>
<Li>Nausea</Li>
<Li>Dizziness</Li>
<Li>Paleness</Li>
<Li>Sweating</Li>
<Li>Vomiting</Li></List>
<Heading tag='h5'>Treating Motion Sickness</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Open air vents</Li>
<Li>Focus outside the airplane on a distant object</Li>
<Li>Avoid unnecessary head movements</Li></List>
<P>If the symptoms of motion sickness persist beyond the first few lessons, it is important to consult an AME and suspend training until adequately treated.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Carbon Monoxide Poisoning</Heading>
<P>Carbon monoxide poisoning causes hypemic hypoxia and is incredibly dangerous.</P>
<P>Carbon monoxide is in exhaust fumes, which means that if exhaust fumes are able to enter into the cabin it could be easily inhaled.</P>
<P>Carbon monoxide is colorless, odorless, and tasteless, meaning that you will not be able to tell if you are inhaling it. Combining that with the difficulty in identifying symptoms of hypoxia, it can easily become fatal.</P>
<Heading tag='h5'>Detecting Carbon Monoxide</Heading>
<P>Many newer ADS-B receivers have carbon monoxide alarms included with them. You should test the alarm on it so that you can quickly identify the noise.</P>
<P>Additionally, many aircraft have carbon monoxide detectors installed in them. However, these will not have an audible alarm and need to be consistently monitored for a change in color. An example of one is shown below: </P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/dfa041ca-ae18-440f-c601-fa77dce9de00/public"></Img></div>
<Heading tag='h5'>Dealing with Carbon Monoxide</Heading>
<P>If you detect the smell of exhaust fumes, or have an indication on a carbon monoxide monitor immediately turn off the cabin heat, open air vents and windows, and land as soon as possible.</P>
<P>Seek medical treatment after landing.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Fatigue</Heading>
<P>Fatigue is directly hazardous to flight safety. </P>
<div><Tabs style='underline'>
<TabItem open title="Acute Fatigue"><div class="contents">
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>hello</Li></List>
</div></TabItem>
<TabItem title="Chronic Fatigue"><div class="contents">
</div></TabItem></Tabs></div>
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

