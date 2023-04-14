<script>
     import NavBar from '../../../components/NavBar.svelte'; 
     import {  List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Short Field Takeoff</Heading>
<P>This is working</P>
<Heading tag='h2'>is this working</Heading>
<Heading tag='h5'>this is hopefully working?</Heading>
<P>I think that this is actually working.</P>
<List ulClass="max-w" tag="ul" class="space-y-1"><Li>*list item 1</Li>
<Li>*list item 2</Li></List>
<P>1. first</P>
<P>2. second</P>
<P>3. third</P>
<P>4. fourth</P>
<P>5. fifth</P>
</div></div>



<style>
.holder { 
display: flex;
justify-content: center;
align-items: center;
}
.contents {
max-width: 800px;
padding: 20px;
display: flex;
flex-direction: column;
gap: 15px;
}
.image {
display: flex;
align-items: center;
justify-content: center;
}
</style>

