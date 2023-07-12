<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>The Inner Ear</Heading>
<P>The inner ear is incredibly useful in maintaining our sense of balance and orientation. Especially when vision is limited, it can be very useful. However, there are limitations in what it is able to do, and it is subject to illusions. Beyond knowing the types of spatial illusions, it is important to understand how the inner ear actually works.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/fa45d04f-9b04-485f-0353-1271604f6900/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Semicircular Ducts</Heading>
<P>The three semicircular ducts connected to the cochlea called the anterior, lateral, and posterior. As they are each perpendicular to each other, they are able to sense in all three axes, similar to how we would think of pitch, roll, and yaw.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/e68d7c18-b079-4907-a997-49242b3c1900/public"></Img></div>
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

