<script>
     import NavBar from '../../components/NavBar.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
     import graphic from "$lib/assets/enc1102/forced-landing-graphic.png";
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<div class="image"><Img size="max-w-full" src={graphic}></Img></div>
</div></div>



<style>
.holder { 
display: flex;
justify-content: center;
align-items: center;
}
.contents {
max-width: 1500px;
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

