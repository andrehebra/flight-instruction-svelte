<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>The Middle Ear</Heading>
<P>The middle ear refers to a collection of bones (ossicles) and muscles which are contained within the tympanic cavity.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/70747ce1-d1a0-414a-a7d1-0c862124e400/public"></Img></div>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>The Eardrum (Tympanic Membrane)</Heading>
<P>Air pressure waves are transformed into physical vibrations, which are amplified in the middle ear and transferred to the cochlea (see the diagram above).</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>The Ossicles</Heading>
<P>The ossicles attach the eardrum and form the ossicular chain, which is made up of 3 bones:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Malleus</Li>
<Li>Incus</Li>
<Li>Stapes</Li></List>
<P>These bones serve as a mechanical amplifier depending on the frequencies that are entering the ear canal.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Eustachian Tube</Heading>
<P>The eustachian tube is a narrow passage that goes from the pharynx to the tympanic cavity. This passage is what allows the middle ear to remain "equalized" with the outside pressure.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Pressure Changes</Heading>
<P>During normal flight, pressure decreases during a climb and increases during a descent. The pressure changes need to be "equalized" via the eustachian tubes when these changes in pressure occur. For most healthy individuals, this will only cause a mild discomfort. However, there are many situations where a person can experience pain from these changes.</P>
<Heading tag='h5'>Ear Block</Heading>
<P>When the eustachian tubes become blocked, they are no longer able to transfer pressure into our out of the middle ear. This condition is referred to as ear block.</P>
<P>Common causes of ear block include bacterial and viral infections. This is another reason why flying while even mildly sick can be hazardous.</P>
<Heading tag='h5'>Symptoms Related to Ear Block</Heading>
<P>The following symptoms are common when experiencing ear block:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Pain</Li>
<Li>Vertigo</Li>
<Li>Disorientation</Li>
<Li>Headache</Li>
<Li>Hearing</Li></List>
<P>All of these symptoms can be distracting and cause a pilot to lose focus on flying the airplane safely. Additionally, if a passenger is suffering from ear block, make sure to assist, but do not lose focus on flying.</P>
<Heading tag='h5'>Treatment of Ear Block</Heading>
<P>The following treatments can be effective in returning the inner ear to ambient pressure:</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>Swallowing</Li>
<Li>Yawning</Li>
<Li>Tensing muscles in the throat</Li>
<Li>Pinch nose and attempt to blow out through nostrils (valsalva maneuver)</Li></List>
<P>Remember that suffering from ear block during a climb will most likely result in similar problems when descending.</P>
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

