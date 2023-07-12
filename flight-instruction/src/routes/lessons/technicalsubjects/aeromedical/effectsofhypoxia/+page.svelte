<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Effects of Hypoxia</Heading>
<P>Hypoxia affects everyone differently, which can make it difficult or even impossible to tell when you are being affected by it. Hypoxia can occur rapidly or gradually, and it is important to understand the risks.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Video</Heading>
<P>The video linked below shows someone entering into a hypoxic state. You can see that he is gradually losing concentration and becomes unable to identify basic things. </P>
<P>Additionally, notice that the person does not seem to be nervous or worried about his worsening condition, as he is unable to notice his loss of brain function.</P>
<Button href='https://www.youtube.com/watch?v=UN3W4d-5RPo&ab_channel=ChristopherCummings'>Video - Hypoxia</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Dangers of Hypoxia</Heading>
<P>The true danger of hypoxia is that a person can often times not notice their own worsening condition. With almost any other risk or condition, proper attention can generally minimize the level of danger. However, hypoxia can creep in without the victim even noticing.</P>
<P>Once the person is in an impaired state, they can become unable to help themselves or make safe decisions.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Symptoms of Hypoxia</Heading>
<P>While the symptoms can vary widely between individuals, the following symptoms are common:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Increased breathing rate</Li>
<Li>Headache</Li>
<Li>Lightheadedness</Li>
<Li>Dizziness</Li>
<Li>Tingling or warm sensations</Li>
<Li>Sweating</Li>
<Li>Poor coordination</Li>
<Li>Impaired judgement</Li>
<Li>Tunnel vision</Li>
<Li>Euphoria</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>When to Use Supplemental Oxygen</Heading>
<P>In part 91 operations, supplemental oxygen is required under the following conditions:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Above a cabin pressure altitude of 12,500 to 14,000 feet MSL: flight crews are required to use supplemental oxygen for flights exceeding 30 minutes at these altitudes</Li>
<Li>Above a cabin pressure altitude of 14,000 feet MSL: flight crew must use supplemental oxygen</Li>
<Li>Above a cabin pressure altitude of 15,000 feet MSL: passengers must be provided with supplemental oxygen, however they are not required to use it</Li></List>
<Button href='https://www.ecfr.gov/current/title-14/part-91/section-91.211#p-91.211(a)'>FAR Part 91.211(a): Unpressurized Aircraft Supplemental Oxygen Requirements</Button>
<Heading tag='h5'>Legal vs Safe</Heading>
<P>Remember that the above requirements are only the legal minimum. It is recommended to use supplemental oxygen at pressure altitudes above 10,000 feet MSL during the daytime and 5,000 feet MSL during nighttime.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>More Information</Heading>
<P>The linked FAA brochure below outlines some additional information regarding hypoxia:</P>
<Button href='https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/hypoxia.pdf'>FAA Hypoxia Brochure</Button>
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

