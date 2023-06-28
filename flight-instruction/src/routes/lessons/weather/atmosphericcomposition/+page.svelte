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
<P>We divide the atmosphere into specific layers depending on a number of conditions. See the graph and explanations below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/e79e23b3-cb8d-4b60-a16c-a7ace8b70400/public"></Img></div>
<Heading tag='h5'>Troposphere</Heading>
<P>The troposphere extends from the surface of the earth up to about 36,000 feet. Because the air becomes thinner (less dense) with altitude, the temperature drops relatively steadily as altitude is increased, from about 15 degrees celsius at the surface to about -56.5 degrees celsius at the top.</P>
<P>The top of the troposphere is not consistent, it changes due to temperature variations, which is associated with the seasons and latitude. The top decreases from the Equator to the poles, and is higher during the summer than in the winter.</P>
<Heading tag='h5'>Tropopause</Heading>
<P>The tropopause is the boundary between the troposphere and the stratosphere. It can be easily identified because the temperature stops dropping as altitude is increased. This is also the location of jet streams, which are some of the strongest winds in the atmosphere.</P>
<Heading tag='h5'>Stratosphere</Heading>
<P>The stratosphere extends from the tropopause to up to about 31 miles (163,000 feet) above the Earth's surface. Going up in altitude in this region will result in temperature increases from radiation being absorbed by oxygen molecules. This is what causes the formation of ozone. Flying in this region can be useful in avoiding turbulence, although thunderstorms can occasionally overshoot into the stratosphere and cause severe turbulence.</P>
<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">NOTE: It is important to have a detailed understanding of the troposphere, tropopause, and stratosphere, as you are likely to fly in these regions. The information following about the higher regions of the atmosphere are not fully necessary to most pilots, however they are interesting.</P></Blockquote>
<Heading tag='h5'>Mesosphere</Heading>
<P>The mesosphere extends up from the stratosphere to about 53 miles above the surface. As the air becomes thinner, the temperature also continues to decrease to as low as -100 degrees celsius. While the gasses are thin in the mesosphere, they are still thick enough to slow down meteorites, which leave trails in the night sky.</P>
<Heading tag='h5'>Thermosphere</Heading>
<P>The thermosphere extends from the mesopause to 430 miles above the Earth. This region is known as the upper atmosphere. Higher energy ultraviolet and x-ray radiation from the sun is absorbed, which can increase the temperature to 2,000 degrees celsius near the top.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>The Standard Atmosphere</Heading>
<P>Atmospheric conditions vary constantly over time and from location to location. Because of this, people developed fixed values to describe what is referred to as "standard atmosphere." The standard atmosphere values that are relevant to pilots are shown below:</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/e37c18a1-d9d1-4b24-e8bd-b5ce35d30300/public"></Img></div>
<P>By making comparisons to these values, we are able to do all kinds of things, such as make accurate performance calculations or predict the temperature at a given altitude.</P>
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

