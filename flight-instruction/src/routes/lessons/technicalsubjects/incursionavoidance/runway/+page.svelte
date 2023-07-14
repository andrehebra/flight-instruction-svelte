<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Runway Markings</Heading>
<P>We can divide runway markings into those used for visual, nonprecision instrument, and precision instrument operations. Even as a VFR pilot, you need to know the runway markings used for all types of runways because you will fly into a variety of different airports with different runways.</P>
<P>More information on runway can be found in the AIM:</P>
<Button href='https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html#$paragraph2-3-3'>AIM 2-3-3: Runway Markings</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Precision Instrument Runway Markings</Heading>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/0623e2c5-a2e6-4bbd-3c34-8d98822d7900/public"></Img></div>
<div><Tabs style='underline'>
<TabItem open title="Designation Markings"><div class="contents">
<P>Runway designators will include a number and a letter if the runway is parallel with another runway.</P>
<P>Designation numbers will be the closest whole number to one-tenth the magnetic azimuth of the centerline of the runway.</P>
<P>(Azimuth is a fancy way of saying the compass reading you would get if you stood at the beginning of the runway and pointed your compass toward the end)</P>
<P>A letter will be included in the below the number if the runway is parallel with at least one other runway.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>2 parallel runways: "L" for left, and "R" for right</Li>
<Li>3 parallel runways: "L" for left, "C" for center, and "R" for right</Li>
<Li>more than 3 parallel runways: Additional parallel runways will be numbered with the next closest one-tenth azimuth direction. A good example of this is KMCO</Li></List>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/def9b970-58a7-4ae2-38a7-5089f6936600/public"></Img></div>
<P>You can see in the image above that all four runways have the same heading, but the two parallel runways on the right have different numbers that don't align with their actual heading.</P>
</div></TabItem>
<TabItem title="Centerline Marking"><div class="contents">
<P>The runway centerline indicates the center of the runway and is made up of uniformly spaced dashed lines.</P>
<P>Standard centerline markings are 120 feet long and have gaps of 80 feet between them. Meaning from the start of one line to the start of the next one is 200 feet.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/0dad80ff-517f-45ce-2518-001f50f9ea00/public"></Img></div>
<P>Centerline markings are 36 inches wide.</P>
<P>While this may be standard, when adjustments to runways needs to be made, the centerline markings are normally changed near the center of the runway.</P>
<P>Knowing the dimensions of centerline markings can be super useful in judging your short field landing performance and also in picking an adequate aiming point.</P>
</div></TabItem>
<TabItem title="Aiming Point Markings"><div class="contents">
<P>The aiming point markings are located approximately 1,000 feet down the runway. These are going to generally be used as aiming points for larger aircraft.</P>
<P>The markings are 150 feet long and 20 feet wide. If a runway is shorter than 4,200 feet long, the aiming points may be shortened to 100 feet in length.</P>
</div></TabItem>
<TabItem title="Touchdown Zone Markers"><div class="contents">
<P>Touchdown zone markers are spaced 500 feet away from one another. They can be in groups of one, two, and three rectangular bars symmetrically arranged in pairs about the runway centerline.</P>
<P>On runways with touchdown zone markings on both sides, the markings will be eliminated within 900 feet of the midpoint between the thresholds.</P>
</div></TabItem></Tabs></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Visual and Nonprecision Instrument Runway Markings</Heading>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/8bd143b5-06bd-44a1-431e-5c7d528d1d00/public"></Img></div>
<div><Tabs style='underline'>
<TabItem open title="Runway Side Stripe Marking"><div class="contents">
<P>Side stripes delineate the edges of a runway. They provide a visual contrast between runway and the abutting terrain or shoulders.</P>
<P>Side stripes consist of continuous white stripes located on each side of the runway, as shown below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/d50fbd30-d295-463a-07ec-8ad0a26d4b00/public"></Img></div>
</div></TabItem>
<TabItem title="Runway Shoulder Markings"><div class="contents">
<P>Shoulder stripes can be used to supplement runway side stripes to identify pavement areas contiguous to the runway sides that are not intended for use by aircraft.</P>
<P>Runway shoulder stripes are yellow.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/19f3c690-dac9-47e6-64bf-e0339cfab900/public"></Img></div>
</div></TabItem>
<TabItem title="Runway Threshold Markings"><div class="contents">
<P>Threshold Markings come in two configurations. They are either 8 longitudinal stripes of uniform dimensions disposed symmetrically about the runway centerline, or the number of stripes is related to the runway width.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/e3fac498-c57b-4e03-7ee2-4ec09b6d7d00/public"></Img></div>
</div></TabItem></Tabs></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Displaced Threshold</Heading>
<P>A displaced threshold is a threshold located at a point on the runway other than the designated beginning of the runway.</P>
<P>These will reduce the available runway that is usable for landing, but aircraft are allowed to use the displaced threshold for takeoff. </P>
<P>A ten foot wide white threshold bar will be located across the width of the runway at the displaced threshold. An example of a displaced threshold is shown below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/e53d3a74-8e79-43d9-4ee6-836a8776d800/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Relocation of a Threshold</Heading>
<P>When the threshold of a runway needs to be relocated, a NOTAM should be issued by the airport operator identifying the portion of the runway that is closed (Ex: 10/28 W 900 CLSD).</P>
<P>A common practice when relocating a runway threshold is to use a ten foot wide white threshold bar across the width of the runway.</P>
<P>An example of a relocated threshold with markings for a taxiway aligned with a runway:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/4bad62e8-1f48-4ce7-fc9c-aadfc1232e00/public"></Img></div>
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

