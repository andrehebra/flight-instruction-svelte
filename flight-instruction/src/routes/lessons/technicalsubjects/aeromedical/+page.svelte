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
<P>Fatigue is directly hazardous to flight safety. It is a condition characterized by increased discomfort with lessened capacity for work and is usually accompanied by a feeling of weariness and tiredness. It can be characterized into either Acute of Chronic:</P>
<div><Tabs style='underline'>
<TabItem open title="Acute Fatigue"><div class="contents">
<P>Acute fatigue is tiredness after a period of short term physical or mental exertion.</P>
<P>Potential Causes:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Lack of rest the night before</Li>
<Li>A recent stressful event</Li></List>
<P>Treatment:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Rest</Li></List>
</div></TabItem>
<TabItem title="Chronic Fatigue"><div class="contents">
<P>Chronic fatigue can be thought of as insufficient recovery from many periods of acute fatigue.</P>
<P>Unfortunately, this can make it more difficult to diagnose and treat, as there needs to be lifestyle considerations taken into account.</P>
<P>Potential Causes:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Chronic stress</Li>
<Li>Inability to sleep well</Li>
<Li>Busy lifestyle with little downtime</Li></List>
<P>Treatment:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Sufficient rest</Li>
<Li>Solving issues with sleep (sleep apnea/insomnia)</Li>
<Li>Reducing overall stress</Li>
<Li>Lifestyle changes</Li></List>
</div></TabItem></Tabs></div>
<P>Fatigue can dramatically reduce a pilot's performance, reaction time, reasoning, and decision-making. It is imperative to make sure that you are not dealing with fatigue before flying an airplane.</P>
<P>The FAA brochure linked below includes more information regarding fatigue:</P>
<Button href='https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/fatigue_aviation.pdf'>FAA Brochure: Fatigue in Aviation</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Dehydration</Heading>
<P>Dehydration is simply an insufficient amount of water within the body. Pilots are especially susceptible to dehydration because they will often spend long periods of time in hot, unventilated cockpits.</P>
<P>Make sure that you are drinking plenty of water before and during your flights.</P>
<P>Symptoms of dehydration:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Headache</Li>
<Li>Fatigue</Li>
<Li>Cramps</Li>
<Li>Sleepiness</Li>
<Li>Dizziness</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Alcohol and Drugs</Heading>
<P>Do NOT operate an aircraft under the influence of alcohol or drugs.</P>
<Heading tag='h5'>Regulations Related to Alcohol</Heading>
<Button href='https://www.ecfr.gov/current/title-14/part-91/section-91.17#p-91.17(a)'>FAR 91.19(a): Alcohol</Button>
<P>A person may not act as a crewmember when:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Within 8 hours of drinking</Li>
<Li>With a BAC >0.04</Li>
<Li>While under the influence</Li></List>
<P>Remember that being hungover still applies to being under the influence of alcohol. Additionally, these are simply the legal requirements. Never allow alcohol to impair your ability to be a safe pilot, even if you fall within what is considered "legal"</P>
<Heading tag='h5'>Regulations Related to Medications/Medical Conditions</Heading>
<P>A person may not act as PIC or a crewmember when that person:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Knows or has reason to know of any medical condition that would make the person unable to meet the requirements for the medical certificate necessary for the pilot operation; or</Li>
<Li>Is taking medication or receiving other treatment for a medical condition that results in the person being unable to meet the requirements for the medical certificate necessary for the pilot operation.</Li></List>
<Button href='https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-A/section-61.53'>FAR 61.53: Prohibitions on Operations During Medical Deficiency</Button>
<Heading tag='h5'>How to Tell Which Medications are Allowed</Heading>
<Button href='https://www.faa.gov/licenses_certificates/medical_certification/media/OTCMedicationsforPilots.pdf'>FAA OTC Medication Checklist</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Nitrogen</Heading>
<P>After scuba diving, a person will have dissolved nitrogen in their bloodstream from the increased pressure under water. This needs time to rid itself of the body. Flying at altitude can cause bubbles of nitrogen to form in the bloodstream and can cause an emergency or be fatal.</P>
<P>AIM 8-1-2(d) recommends the following limitations regarding flight after scuba diving:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Wait at least 12 hours after diving for flight altitudes of up to 8,000 feet for a nondecompression stop dive</Li>
<Li>Wait at least 24 hours after diving for flight altitudes above 8,000 feet for a nondecompression stop dive</Li>
<Li>Wait at least 24 hours after any dive requiring a decompression stop for flight at any altitude</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Additional Information</Heading>
<Button href='https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html'>AIM Chapter 8: Medical Facts for Pilots</Button>
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

