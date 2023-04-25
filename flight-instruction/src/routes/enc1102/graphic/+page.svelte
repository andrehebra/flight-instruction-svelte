<script>
     import NavBar from '../../components/NavBar.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
     import forcedLanding from "$lib/assets/enc1102/forced-landing-graphic.png";
     import overbanking from "$lib/assets/enc1102/overbanking.png";
     import graphic from "$lib/assets/enc1102/graphs.png";
</script>


<div class="holder"><div class="contents">

     <div class="image"><Img size="max-w-full" src={forcedLanding}></Img></div>

     <P>This graphic depicts the proper procedure that should be taken in the event of an engine failure that leads to a forced landing.</P>

     <Hr></Hr>

     <div class="image"><Img size="max-w-full" src={overbanking}></Img></div>

     <P>This graphic depicts the common overbanking tendency that many aircraft have. As bank angle increases, more lift is generated on the outiside wing because of the relative increase in speed of that wing. This will cause the airplane to have negative stability across the longitudinal axis during steep banked turns.</P>

     <Hr></Hr>

     <div class="image"><Img size="max-w-full" src={graphic}></Img></div>

     <P>This graphic displays the relationships between angle of attack, lift, and drag. What we refer to as the "region of reverse command" is the area where as airspeed decreases, total drag increases. Therefore, to maintain airspeed and altitude at those lower speeds, more power is required. It is called the region of reverse command because altitude is mainly controlled by manipulating the power setting, and airspeed is controlled by using the elevator.</P>
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

