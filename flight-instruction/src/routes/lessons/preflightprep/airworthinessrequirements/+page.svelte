<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Airworthiness Requirements</Heading>
<P>It is always the pilot's responsibility to ensure that an airplane is airworthy. This is a great responsibility, and it determines your own safety and the safety of everyone you carry with you in an aircraft.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Required Inspections</Heading>
<P>Required airplane inspections can be remembered by using the acronym: AV1ATES</P>
<Heading tag='h5'>Annual</Heading>
<Button href='https://www.ecfr.gov/current/title-14/part-91/section-91.409#p-91.409(a)'>FAR 91.409(a): Annual Inspection</Button>
<P>Must be done every 12 calendar months.</P>
<P>Annual inspections can replace 100-hour inspections, but not vice-versa.</P>
<P>Exceptions to this inspection are found in FAR 91.409(c).</P>
<P>Must be carried out by an airframe and powerplant mechanic (A&P).</P>
<Heading tag='h5'>VOR (IFR only)</Heading>
<P>This is required to be done every 30 days, and checks the accuracy of the VORs installed in the airplane.</P>
<P>This is ONLY required for IFR flight.</P>
<Heading tag='h5'>100-Hour</Heading>
<Button href='https://www.ecfr.gov/current/title-14/part-91/section-91.409#p-91.409(b)'>FAR 91.409(b): 100-Hour Inspection</Button>
<P>This only applies to airplanes that are operated for hire (including flight instruction).</P>
<P>The 100-hour inspection may be exceeded by not more than 10 hours while en route to reach a place where the inspection can be done. The excess time must be included when determining when the next 100-hour inspection is due.</P>
<Heading tag='h5'>Altimeter System (24 calendar months)</Heading>
<Button href='https://www.ecfr.gov/current/title-14/part-91/section-91.411#p-91.411(a)'>FAR 91.411(a): Altimeter System</Button>
<P>Within the Preceding 24 calendar months, each altimeter instrument, and each automatic pressure altitude reporting system must be tested and inspected.</P>
<Heading tag='h5'>Transponder (24 calendar months)</Heading>
<Button href='https://www.ecfr.gov/current/title-14/part-91/section-91.413#p-91.413(a)'>FAR 91.413(a): ATC Transponder Tests and Inspections</Button>
<P>Must have been tested and inspected in the preceding 24 calendar months.</P>
<Heading tag='h5'>ELT</Heading>
<Button href='https://www.ecfr.gov/current/title-14/part-91/section-91.207#p-91.207(d)'>FAR 91.207(d): ELT Inspections</Button>
<P>ELTs must have been inspected within the preceding 12 calendar months.</P>
<Button href='https://www.ecfr.gov/current/title-14/part-91/section-91.207#p-91.207(c)'>FAR 91.207(c): ELT Battery Replacement</Button>
<P>ELT batteries must be replaced or recharged (if possible) if either of the following conditions are met:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>When the transmitter has been used for more than 1 cumulative hour</Li>
<Li>When 50 percent of their useful life has expired (as established by the transmitter manufacturer)</Li></List>
<Heading tag='h5'>Static System (24 calendar months)</Heading>
<Button href='https://www.ecfr.gov/current/title-14/part-91/section-91.411#p-91.411(a)'>FAR 91.411(a): Static System</Button>
<P>Within the Preceding 24 calendar months, each static pressure system must have been tested and inspected.</P>
<Heading tag='h5'>Airworthiness Directives</Heading>
<P>Additionally, compliance with airworthiness directives is required for an airplane to be airworthy. More information about them is located at the bottom of this page.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Required Documents</Heading>
<P>Required Documents onboard an airplane can be remembered with the acronym AROW</P>
<Heading tag='h5'>Airworthiness Certificate</Heading>
<P>Airworthiness certificates are issued by the FAA and deem an aircraft's design to be legal for operation.</P>
<P>It remains valid as long as the airplane meets its approved type design and is maintained.</P>
<P>They do not have an expiration date.</P>
<Heading tag='h5'>Registration</Heading>
<P>Registrations can be thought of in a similar manner to a car's registration.</P>
<P>Before January 23, 2023, registrations were only valid for three years. After that date, they are valid for seven years.</P>
<P>The registration includes the "N number" of the aircraft, which must be displayed on the outside in a visible location.</P>
<P>The paper registration must be located inside of the aircraft in a visible location.</P>
<Heading tag='h5'>Operating Limitations</Heading>
<P>Operating limitations include placards and signs which indicate limitations, gauge indications, and the Pilot's Operating Handbook.</P>
<P>Additionally, the G1000 cockpit reference guide must be inside of the aircraft, but that requirement is set forth in the POH.</P>
<Heading tag='h5'>Weight & Balance</Heading>
<P>Weight and balance documents are required to be on board so that pilot's are able to calculate the airplanes center of gravity and assure that the aircraft is within the proper weight and balance limits set forth in the POH.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Required Equipment</Heading>
<Button href='https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.205'>FAR 91.205: Instrument and Equipment Requirements</Button>
<P>This section outlines the required operational equipment for different operations.</P>
<P>VFR Day (A TOMATO FLAMES):</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Airspeed indicator</Li>
<Li>Tachometer for each engine</Li>
<Li>Oil temperature gauge for each air cooled engine</Li>
<Li>Manifold pressure gauge for each altitude engine</Li>
<Li>Altimeter</Li>
<Li>Temperature gauge for each liquid cooled engine</Li>
<Li>Oil pressure gauge for each engine using pressure system</Li>
<Li>Fuel Gauge</Li>
<Li>Landing Gear Position Indicator (if applicable)</Li>
<Li>Anti-collision lights (for aircraft certificated after march 11, 1996)</Li>
<Li>Magnetic Compass</Li>
<Li>ELT</Li>
<Li>Safety Belts</Li></List>
<P>VFR Nights (FLAPS):</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Fuses (spare - if applicable)</Li>
<Li>Landing Light</Li>
<Li>Anti-collision lights</Li>
<Li>Position lights</Li>
<Li>Source of power</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Inoperative Equipment</Heading>
<Button href='https://www.ecfr.gov/current/title-14/section-91.213'>FAR 91.213: Inoperative Instruments and Equipment</Button>
<P>If the aircraft does not have an approved MEL, the following steps must be taken to ensure that the aircraft is airworthy.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Check if the inoperative equipment is part of the VFR-day type certification instruments and equipment prescribed in the applicable airworthiness regulations under which the aircraft was type certificated</Li>
<Li>Check if the inoperative equipment is indicated as required on the aircraft's equipment list, or on the Kinds of Operations Equipment List for the kind of flight operation being conducted</Li>
<Li>Check if the inoperative equipment is required by § 91.205 or any other rule of this part for the specific kind of flight operation being conducted</Li>
<Li>Check if the inoperative equipment is required to be operational by an airworthiness directive</Li></List>
<P>If the equipment is indicated as required on any part of the previous steps, the airplane is NOT AIRWORTHY.</P>
<P>If the equipment is not indicated as required, the following actions must be taken for the airplane to be airworthy:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Permitted inoperative equipment or instruments must be placarded "INOPERATIVE" prior to any operation</Li>
<Li>The letters must be at least 1/8th of an inch high</Li></List>
<Heading tag='h5'>Legal vs Safe</Heading>
<P>Remember, just because inoperative equipment or instruments may not be required does not mean that you have to fly with them not working. The determining factor in flight safety is always the Pilot in Command. If you're not comfortable with the inoperative equipment, ensure that it is fixed before you fly that plane.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Special Flight Permits</Heading>
<Button href='https://www.ecfr.gov/current/title-14/section-21.197'>FAR 21.197: Special Flight Permits</Button>
<P>A certificate authorizing operation of an aircraft that does not currently meet applicable airworthiness requirements but is safe for a specific flight.</P>
<P>This may require an FAA inspector to personally the aircraft or require it to be inspected by an A&P.</P>
<P>These can typically be obtained from the local FSDO (Flight Standards District Office).</P>
<P>Intended to allow an aircraft to be flown to a base where repairs, alterations, or maintenance can be performed.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Airworthiness Directives and Special Airworthiness Information Bulletins</Heading>
<Heading tag='h5'>Special Airworthiness Information Bulletins (SAIBs)</Heading>
<P>These are an informational tool that alerts, educates, and makes recommendations to the aviation community. </P>
<P>These are non-regulatory and are meant to be used as guidance.</P>
<P>Typically used for items that would not be considered serious enough to be included in an airworthiness directive.</P>
<Heading tag='h5'>Airworthiness Directives</Heading>
<Button href='https://www.ecfr.gov/current/title-14/part-91/section-91.417#p-91.417(a)(2)'>FAR 91.417(a)(2)(v): Maintenance Records</Button>
<P>Airworthiness directives are regulatory in nature and are required to be complied with for an airplane to be airworthy.</P>
<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">While it is the responsibility of the owner/operator of an aircraft to comply with airworthiness directives, it is STILL THE PILOT'S RESPONSIBILITY TO MAKE SURE THAT THE AIRPLANE IS AIRWORTHY.</P></Blockquote>
<P>Go through the airplanes maintenance records and look through all of the current airworthiness directives to make sure that they are being complied with.</P>
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

