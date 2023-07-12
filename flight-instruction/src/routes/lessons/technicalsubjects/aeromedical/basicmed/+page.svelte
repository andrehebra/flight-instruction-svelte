<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>BasicMed Information</Heading>
<P>Further information regarding BasicMed can be found in FAR part 68, as well as Advisory Circular 68-1A, which are linked below:</P>
<Button href='https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-68'>FAR Part 68</Button>
<Button href='https://www.faa.gov/documentlibrary/media/advisory_circular/ac_68-1a.pdf'>AC 68-1A</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Requirements for BasicMed</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Have held a valid medical certificate after July 14, 2006</Li>
<Li>Have a physical exam completed with a state-licensed physician using the Comprehensive Medical Examination Checklist (Form 8700)</Li>
<Li>Complete a BasicMed medical education course</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Aircraft Requirements</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Any aircraft authorized under federal law to carry not more than 6 occupants</Li>
<Li>Any aircraft with a maximum certified takeoff weight of not more than 6,000 pounds</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Operating Requirements</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Carry no more than 5 passengers</Li>
<Li>Operate at less than 18,000 feet MSL and not exceeding 250 knots</Li>
<Li>No flight for compensation or hire</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Conditions Requiring Special Issuance</Heading>
<P>A list of the conditions that require special issuance before operating under BasicMed can be found in FAR Part 68.9</P>
<Button href='https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-68/section-68.9'>FAR Part 68.9</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Authorized Courses</Heading>
<Button href='https://basicmed.mayo.edu/'>Mayo Clinic BasicMed Online Training Course</Button>
<Button href='https://basicmedicalcourse.aopa.org/client/app.html#/auth/logon?renewalType=NEW'>AOPA's BasicMed Medical Self-Assessment: A Pilot's Guide to Flying Healthy</Button>
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

