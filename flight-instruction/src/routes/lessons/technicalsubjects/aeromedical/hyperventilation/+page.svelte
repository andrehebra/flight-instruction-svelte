<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Hyperventilation</Heading>
<P>Hyperventilation in aviation is generally caused by panic or anxiety. It is important to understand it as it could happen to a pilot or a passenger.</P>
<Heading tag='h2'>What is Happening</Heading>
<P>When some people experience stress, they may begin to breath rapidly. Additionally, hyperventilation itself can be a stressful experience, leading to more hyperventilation. The diagram below outlines the "hyperventilation cycle"</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/9a07745d-c918-4847-72c8-479bd55fd500/public"></Img></div>
<Heading tag='h5'>Carbon Dioxide Expulsion</Heading>
<P>When hyperventilating, the body rapidly expulses carbon dioxide. With a normal breath rate (approx. 12 breaths per minute), the body produces the same amount of carbon dioxide as it is releasing through the lungs.</P>
<P>As the concentration of carbon dioxide decreases in the body, blood pH increases from its normal level and becomes alkalotic. This increase in pH is what causes the symptoms of hyperventilation.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Symptoms</Heading>
<P>Symptoms of hyperventilation include:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Lightheadedness</Li>
<Li>Shortness of breath</Li>
<Li>Chest pain</Li>
<Li>Fast and pounding heartbeat</Li>
<Li>Numbness and tingling in arms or around mouth</Li>
<Li>Muscle spasms</Li>
<Li>Difficulty focusing</Li>
<Li>Burping or bloated stomach</Li>
<Li>Dry mouth</Li>
<Li>Headache</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Treatment</Heading>
<P>Hyperventilation should be treated by addressing both the stress that caused it and the breathing rate directly. Treatments include:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Distracting someone away from the cause of stress</Li>
<Li>Encouraging slow breathing</Li>
<Li>Having someone breath into a bag</Li>
<Li>Using supplemental oxygen set to the maximum setting</Li></List>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Additional Information</Heading>
<Button href='https://www.youtube.com/watch?v=aVyAWjaGT8Q&ab_channel=EMTprep'>Video on Hyperventilation and Hypoventilation</Button>
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

