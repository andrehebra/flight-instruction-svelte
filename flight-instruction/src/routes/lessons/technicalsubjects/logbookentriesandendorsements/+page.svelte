<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Logbook Entires and Certificate Endorsements</Heading>
<P>Examples of common endorsements can be found in advisory circular 61-65H:</P>
<Button href='https://www.faa.gov/documentlibrary/media/advisory_circular/ac_61-65h.pdf'>AC 61-65H</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Required Logbook Entires for Instruction Given</Heading>
<Button href='https://www.ecfr.gov/current/title-14/section-61.51'>FAR 61.51: Pilot Logbooks</Button>
<P>Each person must document and record the following time in a manner acceptable to the administrator:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Training and aeronautical experiences used to meet the requirements for a certificate, rating, or flight review</Li>
<Li>Aeronautical experience required for meeting the recent flight experience requirements</Li></List>
<Heading tag='h5'>Logbook Entries</Heading>
<P>Must include:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Date</Li>
<Li>Total flight time or lesson time</Li>
<Li>Location where the aircraft departed and arrived, or the location of the flight training device</Li>
<Li>Type and identification of aircraft, full flight simulator, flight training device, or aviation training device, ass appropriate</Li>
<Li>The name of the safety pilot, if appropriate</Li>
<Li>Type of pilot experience or training (solo, PIC, SIC, ground trainer, etc)</Li></List>
<P>Conditions of the flight (day/night, actual/simulated instrument, use of night vision goggles in an aircraft in flight or simulator)</P>
<Button href='/lessons/cfi/privilegesandlimitations/'>CFI Recordkeeping Requirements</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Required Private Pilot Endorsements</Heading>
<Heading tag='h5'>Before Training</Heading>
<P>A.14 - Endorsement of U.S. citizenship recommended by the Transportation Security Administration (TSA): Title 49 of the Code of Federal Regulations (49 CFR) §1552.3(h).</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Only for an initial FAA pilot certificate, recreational, sport pilot, or private pilot certificate; instrument rating; or multiengine rating. </Li>
<Li>Show: valid passport, original/official birth certificate, naturalization/citizenship cert </Li>
<Li>Keep a copy 5 years or endorse student and own logbook </Li></List>
<Heading tag='h5'>Pre-Solo</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Medical Certificate - MedXpress</Li>
<Li>Student Pilot Certificate - IACRA</Li>
<Li>A.3 - Pre-solo aeronautical knowledge: § 61.87(b).</Li>
<Li>A.4 - Pre-solo flight training: § 61.87(c)(1) and (2).</Li></List>
<Heading tag='h5'>Solo (local and less than 25nm)</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.6 - Solo flight (first 90 calendar-day period): § 61.87(n).</Li>
<Li>A.7 - Solo flight (each additional 90 calendar-day period): § 61.87(p).</Li>
<Li>A.8 - Solo takeoffs and landings at another airport within 25 nautical miles (NM): §61.93(b)(1)</Li></List>
<P>Optional: </P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.5 - Pre-solo flight training at night: § 61.87(o). (Within 90 days)</Li></List>
<Heading tag='h5'>Solo XC</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.9 - Solo cross-country flight: § 61.93(c)(1) and (2).</Li>
<Li>A.10 - Solo cross-country flight: § 61.93(c)(3). (Per Flight)</Li>
<Li>A.11 - Repeated solo cross-country flights not more than 50 NM from the point of departure: § 61.93(b)(2).</Li></List>
<P>Optional:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.12 - Solo flight in Class B airspace: § 61.95(a). (Per Airspace)</Li>
<Li>A.13 - Solo flight to, from, or at an airport located in Class B airspace: § 61.95(b) and 14 CFR part 91, § 91.131(b)(1).</Li></List>
<Heading tag='h5'>Knowledge Test</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.82 - Review of a home study curriculum: § 61.35(a)(1). (See AC 61-65H Section 10)</Li>
<Li>A.32 - Aeronautical knowledge test: §§ 61.35(a)(1), 61.103(d), and 61.105.</Li></List>
<P>In case of failure:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.73 - Retesting after failure of a knowledge or practical test: § 61.49.</Li></List>
<Heading tag='h5'>Pre-Checkride</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.1 - Prerequisites for practical test: Title 14 of the Code of Federal Regulations (14 CFR) part 61, § 61.39(a)(6)(i) and (ii).</Li>
<Li>A.2 - Review of deficiencies identified on airman knowledge test: § 61.39(a)(6)(iii), as required.</Li>
<Li>A.33 - Flight proficiency/practical test: §§ 61.103(f), 61.107(b), and 61.109. The endorsement for a practical test is required in addition to the § 61.39 endorsements provided in paragraphs A.1 and A.2.</Li></List>
<Heading tag='h5'>Retest After Failure</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.73 - Retesting after failure of a knowledge or practical test: § 61.49</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Checkride Endorsements</Heading>
<Heading tag='h5'>Before Each Checkride</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.1 - Prerequisites for practical test: Title 14 of the Code of Federal Regulations (14 CFR) part 61, § 61.39(a)(6)(i) and (ii).</Li>
<Li>A.2 - Review of deficiencies identified on airman knowledge test: § 61.39(a)(6)(iii), as required.</Li></List>
<Heading tag='h2'>Retesting After Failure</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.73 - Retesting after failure of a knowledge or practical test: § 61.49.</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Commercial Pilot Endorsements</Heading>
<Heading tag='h5'>Knowledge Test</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.34 - Aeronautical knowledge test: §§ 61.35(a)(1), 61.123(c), and 61.125.</Li></List>
<Heading tag='h5'>Pre-Checkride</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.1 - Prerequisites for practical test: Title 14 of the Code of Federal Regulations (14 CFR) part 61, § 61.39(a)(6)(i) and (ii).</Li>
<Li>A.2 - Review of deficiencies identified on airman knowledge test: § 61.39(a)(6)(iii), as required.</Li>
<Li>A.35 - Flight proficiency/practical test: §§ 61.123(e), 61.127, and 61.129.</Li></List>
<Heading tag='h5'>Retest After Failure</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.73 - Retesting after failure of a knowledge or practical test: § 61.49.</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Certified Flight Instructor Endorsements</Heading>
<Heading tag='h5'>Spin Training</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.45 - Spin training: § 61.183(i)(1).</Li></List>
<Heading tag='h5'>Knowledge Tests</Heading>
<P>No knowledge test endorsements are required prior to taking a CFI test.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.41 - Fundamentals of instructing knowledge test: § 61.183(d).</Li>
<Li>A.42 - Flight instructor aeronautical knowledge test: § 61.183(f).</Li></List>
<Heading tag='h5'>Pre-Checkride</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.1 - Prerequisites for practical test: Title 14 of the Code of Federal Regulations (14 CFR) part 61, § 61.39(a)(6)(i) and (ii).</Li>
<Li>A.2 - Review of deficiencies identified on airman knowledge test: § 61.39(a)(6)(iii), as required.</Li>
<Li>A.43 - Flight instructor ground and flight proficiency/practical test: § 61.183(g).</Li></List>
<Heading tag='h5'>Retest After Failure</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.73 - Retesting after failure of a knowledge or practical test: § 61.49.</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Miscellaneous</Heading>
<Heading tag='h5'>Flight Review</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.65 - Completion of a flight review: § 61.56(a) and (c).</Li></List>
<Heading tag='h5'>Complex Airplane</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.68 - To act as pilot in command in a complex airplane: § 61.31(e).</Li></List>
<Heading tag='h5'>High Performance</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.69 - To act as pilot in command in a high-performance airplane: § 61.31(f).</Li></List>
<Heading tag='h5'>Tailwheel</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.71 - To act as pilot in command in a tailwheel airplane: § 61.31(i).</Li></List>
<Heading tag='h5'>High Altitude</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>A.70 - To act as pilot in command in a pressurized aircraft capable of high-altitude</Li></List>
<P>operations: § 61.31(g).</P>
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

