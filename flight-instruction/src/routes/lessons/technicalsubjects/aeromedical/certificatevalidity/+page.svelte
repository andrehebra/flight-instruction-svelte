<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Medical Certificate Validity</Heading>
<P>There are three classes of medical certificates: First, Second, and Third. Information on the duration of validity of medical certificates can be found in FAR Part 61.23, linked below:</P>
<Button href='https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-A/section-61.23'>FAR Part 61.23: Medical Certificates: Requirement and Duration</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>First Class Certificate</Heading>
<P>A first class certificate is required for the following operations:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Exercising the PIC privileges of an airline transport pilot certificate</Li>
<Li>Exercising the SIC privileges of an airline transport pilot certificate in a flag (flight does not begin and end in the Contiguous United States) or supplemental operation in part 121 that requires three or more pilots</Li>
<Li>When serving as a required pilot flightcrew member in an operation conducted under part 121 if the pilot has reached his or her 60th birthday</Li></List>
<P>Essentially, we can think of first class medicals as being required for airline (part 121) operations.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Second Class Certificate</Heading>
<P>A second class certificate is required for the following operations:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>SIC privileges of an airline transport pilot certificate in part 121 (other than the ones outlined above requiring a first class medical)</Li>
<Li>Privileges of a commercial pilot certificate in an aircraft other than a balloon or glider</Li>
<Li>Privileges of a commercial pilot certificate with a balloon class rating for compensation or hire, excluding flight instruction</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Third Class Certificate</Heading>
<P>A third class certificate is required for the following operations:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Exercising the privileges of a private pilot certificate, recreational pilot certificate, or student pilot certificate</Li>
<Li>Exercising the privileges of a flight instructor certificate and acting as the pilot in command or as a required flightcrew member</Li>
<Li>Performing the duties as an Examiner in an aircraft when administering a practical test or proficiency check for an airman certificate, rating, or authorization</Li></List>
<Heading tag='h5'>Third Class Certificate Exemptions</Heading>
<Button href='https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-E/section-61.113#p-61.113(i)'>FAR Part 61.113(i): Medical Certificate Exemptions</Button>
<P>A pilot may operate under BasicMed if all of the following conditions are met:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>The aircraft is authorized to carry not more than 6 occupants, has a maximum takeoff weight of not more than 6,000 pounds, and is operated with no more than 5 passengers on board</Li>
<Li>The flight is not carried out at an altitude more than 18,000 feet MSL, outside the United States unless authorized by the country where the flight is conducted, or at an indicated airspeed exceeding 250 knots</Li>
<Li>The pilot has available in their logbook the completed medical examination checklist required under FAR 68.7 and the certificate of course completion required under FAR 61.23(c)(3)</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Length of Validity</Heading>
<P>Each class of medical certificate has specific durations of validity applying to different types of operations. There is a common misconception that a first class medical steps down to a second class, however this is not the case. There is a table in 61.23 which outlines the duration of validity (linked above).</P>
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

