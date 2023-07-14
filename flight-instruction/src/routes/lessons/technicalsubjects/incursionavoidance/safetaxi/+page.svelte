<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Safely Taxiing</Heading>
<P>Taxiing requires constant vigilance from the entire flight crew. Instructors and students need to both take responsibility for avoiding hazards and maintaining orientation while taxiing.</P>
<P>Always keep in mind the possibility of a runway incursion.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Before Taxiing at any Airport</Heading>
<P>Make sure that you have completed all of the required pre-taxi checklists before taxiing. Additionally, listen to the current ATIS and write it down.</P>
<P>Review the airport diagram, and look out for airport hotspots.</P>
<P>Look at the wind sock and note the current wind direction and strength. This will be helpful in setting the proper crosswind correction as you taxi out.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Towered Airports</Heading>
<P>Remember that you are required to comply with ATC instructions unless it would be unsafe to do so.</P>
<Heading tag='h5'>Requesting a Taxi Clearance</Heading>
<P>When you have reviewed the airport layout and have the weather, you can request a taxi clearance on the airport's ground control frequency. Make sure to include the following information:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Airplane identification</Li>
<Li>Current location</Li>
<Li>Current ATIS (That you have listened to and written down)</Li>
<Li>Type of operation (VFR/IFR)</Li>
<Li>Direction of flight or point of first intended landing</Li></List>
<Heading tag='h5'>Taxi Clearances</Heading>
<P>When receiving a taxi clearance, always read it back to confirm with the controller. The read back should include:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>The runway assigned</Li>
<Li>Any clearance to enter a runway</Li>
<Li>Any instruction to hold short of a specific runway or line up and wait</Li>
<Li>Each taxiway that you are instructed to use</Li></List>
<P>Always write down your clearances so that you have them on hand.</P>
<P>Always check for traffic in all directions, especially when approaching a runway.</P>
<Heading tag='h5'>Progressive Taxi</Heading>
<P>A progressive taxi is where ATC will guide you throughout your the time your are taxiing. It needs to be requested by a pilot.</P>
<P>While it can be a useful resource, it is in no way an excuse to not be familiar with an airport.</P>
<Heading tag='h5'>Speak Up</Heading>
<P>If at any point you feel concerned or confused about your taxi clearance or your position, notify the controller. They are there to help you and make sure that everything is flowing smoothly and safely.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Non-towered Airports</Heading>
<P>It is incredibly important to stay vigilant at non-towered airports. It takes a lot of coordination between pilots to maintain a safe environment.</P>
<Heading tag='h5'>Additional Considerations at Non-Towered Airports</Heading>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Stop at hold short markings and check for traffic in all directions, both in the ground and on the air</Li>
<Li>Announce your intentions on the CTAF</Li>
<Li>Listen to what everyone else in the area is doing and generate a mental picture of what is going on</Li>
<Li>Keep in mind that others may not have radios or are not communicating their intentions, look out for them</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Don't Become Complacent at Familiar Airports</Heading>
<P>It can be very easy to get comfortable at your home airport or one that you travel to often. Especially when you almost always receive the same taxi instructions, you may allow taxiing to become an automatic activity.</P>
<P>This is dangerous, however.</P>
<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">Example: Imagine that you almost always receive the same taxi instructions which involve a clearance to cross a runway. You get used to receiving those instructions and eventually it becomes automatic. You go out for a routine flight, and quickly get your taxi instructions and begin taxiing without writing them down or reviewing them. But this time, you were instructed to hold short of the runway. You have all of a sudden become the cause of a potential runway incursion at an airport that you are supposed to know extremely well.</P></Blockquote>
<P>Never allow yourself you become complacent when it comes to anything related to flying. Many of the runway incursions that happen daily are the result of pilots being too comfortable with their own knowledge of a place and coming to the conclusions that they don't need to do simple tasks that keep everyone safe.</P>
<P>It may seem dumb to always write down your taxi instructions, especially when you already know the airport inside and out, but the benefit of writing them down and reading them back is that you can catch the one time when things are different.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Crossing Runways</Heading>
<P>NEVER enter or cross a runway without a clearance at a towered airport.</P>
<P>Even when you are cleared to cross, check for traffic on all parts of the runway, as well as on both approach paths to that runway.</P>
<P>Additionally, make sure to turn on your lights before entering the runway to make yourself more visible and speed up a little bit as to spend less time on a runway.</P>
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

