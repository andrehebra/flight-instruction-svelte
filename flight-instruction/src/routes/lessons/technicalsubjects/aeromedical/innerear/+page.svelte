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
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/71f8fca2-2668-4b05-a0ee-bb707ac67e00/public"></Img></div>
<P>At the center of the canal is the cupola, which sits on top of sensory hairs located at the end of the vestibular nerve.</P>
<P>When the body experiences a rotation, fluid moves through the semicircular ducts, which causes the har cells to move. That motion is picked up by the vestibular nerve and gives a sensation of rotation.</P>
<P>Below is a diagram of entering and exiting a constant rate turn and how it effects the semicircular ducts: </P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/1415dc92-4f0f-42c9-4555-66d2c7cc3500/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Otolith Organs</Heading>
<P>The otolith organs sense gravity and linear acceleration. </P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/1a90182e-ea34-49ff-7cdd-15deae982c00/public"></Img></div>
<P>The otolith organ is filled with a gelatinous membrane containing chalk-like crystals which cover sensory hairs.</P>
<P>The weight of the crystals cause the membrane to shift due to gravity, and are detected by the sensory hairs. Acceleration causes a similar shift.</P>
<P>Below is a simplified diagram of how the organ shifts to detect acceleration. Notice how there is a similar shift from accelerating forward and tilting the head backwards. This is what we would refer to as the somatogravic illusion.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/90f7854a-300e-4701-8d3f-77b11ca9e100/public"></Img></div>
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

