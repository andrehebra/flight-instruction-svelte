<script>
     import NavBar from './../components/NavBar.svelte'; 
     import LessonCard from './../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Multiple Ways of Writing</Heading>
<P>Each field has specific conventions that follow similar guidelines, whether explicit or implicit. However, inside of those fields are subgenres that conform to their own unique standard. Being able to properly communicate in each of those subgenres allow someone to be an effective communicator.</P>
<P>Throughout this semester, we practiced writing in a multitude of ways, however my article in Project 3 and the in class exercise of writing a post-card were the most beneficial in achieveing this learning outcome.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Project 3 - Article</Heading>
<P>A vast difference from the formal papers we wrote, the article that I wrote in Project 3 gave me persepctive on less strict genre conventions than expected in the field of aviation.</P>
<Button href='/enc1102/enc1102-final/multiple-ways-of-writing/article'>Humorous Article - Project 3</Button>
<P>Allowing myself to be less constrained by dry and monotonous information, I was able to present something that was both informative and humorous (at least to me!). </P>
<P>Quote from the article:</P>
<Blockquote border bg class="p-4 my-4"><P size="md" height="relaxed">Most pilots get scared when the runway has a grade higher than 3%. I know we have all had some hard landings that have resulted from not properly taking into account the illusions that sloped runways can have. Unfortunately for you, though, things are going to get a little bit more difficult when you have to touchdown on a 20-degree mountainside.</P></Blockquote>
<P>While we can divide genres into infinite sub-genres, it was a great experience learning the process of transferring information through multiple modalities for different audiences, so that I can get my message across more effectively, and in a more fun way too.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Project 3 - Informational Graphics</Heading>
<div class="image"><Img size="max-w-full" src=https://i.imgur.com/gIhssGa.png></Img></div>
<P>Another way that I was able to showcase my work was thorugh informational graphics. In contrast to my article, these take on a much more serious tone and are only intended to provide valuable information in a simple format.</P>
<P>I took great detail, however, to make the images pleasing to look at while keeping them simple. For student pilots someone curious about aviation procedures, these informational graphics can be a great resource in expanding information that goes beyong simple text based lessons.</P>
<Hr class="my-8" height="h-px" />
<P>This course prepared me to write in multiple ways by changing mediums and the rhetoric that was acceptable in those mediums. While the rules of each medium are not set in stone, having a proper understanding and knowing when to break them allows for unique valuable work.</P>
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

