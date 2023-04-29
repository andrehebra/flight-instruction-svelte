<script>
     import NavBar from './../components/NavBar.svelte'; 
     import LessonCard from './../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Contributing Knowledge</Heading>
<P>Being able to learn and interpret various sources of information was the first step, however expanding on that into contributing knowledge to a field can have a positive impact on the whole community.</P>
<P>Throughout this class, there have been many different times that I was able to contribute knowledge. However, the best examples of contributing knowledge were my informational graphics and the field investigative essay.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Informational Graphics</Heading>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/xQLkOli.jpeg></Img></div>
<P>The graphs above display the relationship between airspeed, lift, angle of attack, and power required. As the angle of attack increases, more total lift is generated. However, increases in the angle of attack correspond with increases in induced drag. Therefore, counterintuitively, maintaining level flight at lower airspeeds actually requires more engine power when compared to higher speeds.</P>
<P>This information is relatively well-known in the aviation community. However, being able to provide it through a more simple medium of images that can clearly explain the topic allows me to contribute knowledge to student pilots or people interested in aviation without the need for complex discussions on lift generation and drag.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Field Investigative Essay</Heading>
<P>The Field Investigative Essay allowed me to go in-depth on a specific topic and come to conclusions that can make an impact on the community. One example of this is my discussion of the response to the Colgan Air crash.</P>
<Button href='https://knightsucfedu39751-my.sharepoint.com/:w:/g/personal/andrehebra_knights_ucf_edu/Ef9BfhFa0KBBkQMdIruEgQYBFyOWcmd04SBYuJC6miBAdQ?e=M9tgPY'>Field Investigative Paper</Button>
<P>A quote from my essay:</P>
<Blockquote border bg class="p-4 my-4"><P size="md" height="relaxed">Years after this legislation has passed, it has become obvious that it had little to no effect on aviation safety while directly contributing to the pilot shortage and mass cancellations of flights we currently see today with airlines based in the United States (Thurber). A multitude of grieving families, in a genuine attempt to prevent others from having to go through the tragedy that they were forced into, were led to an incorrect conclusion by reporting agencies and accident reports. The true tragedy is that, had they been correctly informed, they could have made a positive impact on the overall safety of aviation. If the language used in NTSB accident reports were more effective in promoting understanding among their audience, perhaps more effective regulation could be enacted that would make flying safer as well as reduce the fear people have of aviation.</P></Blockquote>
<P>This analysis was the result of combining information from multiple sources and making a conclusion based on that information.</P>
<Hr class="my-8" height="h-px" />
<P>Contributing knowledge is not about having a singular unique idea, but coming to a new conclusion based on the experience gained from analyzing the work of others. Nobody wakes up one day and changes the world, it is the combination of multiple people working to make small adjustments that pile up over time into new ways of thinking.</P>
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

