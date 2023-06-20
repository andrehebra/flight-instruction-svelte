<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import LessonCard from '../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>The Earth's Atmosphere</Heading>
<P>The basic characteristics of the atmosphere are directly related to weather. Having a full mental picture of the atmosphere can make understanding most weather phenomenon much more simple.</P>
<Heading tag='h2'>Composition</Heading>
<P>Earth's atmosphere consists of various gasses, however the most common are nitrogen and oxygen, which together make up about 99% of the total volume.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/3d73ca99-fd22-4089-c3c2-5e1b4cbe5700/public"></Img></div>
<P>It is important to note that these percentages remain the same regardless of altitude. While the density of air will decrease as you go upwards, the concentration of gasses will stay consistent.</P>
<Heading tag='h2'>Layers of the Atmosphere</Heading>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/e79e23b3-cb8d-4b60-a16c-a7ace8b70400/public"></Img></div>
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

