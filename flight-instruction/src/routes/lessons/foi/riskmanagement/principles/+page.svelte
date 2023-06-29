<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Principles of Risk Management</Heading>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Accept No Unnecessary Risk</Heading>
<P>Unnecessary risk is that which has no commensurate return in terms of benefits or opportunities. If there is nothing to be gained from something, there is no reason to risk participating in it. </P>
<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">If flying a new airplane for the first time, a flight instructor might determine that the risk of making that flight in low instrument flight rules (IFR) conditions is unnecessary. </P></Blockquote>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Make Risk Decisions at the Appropriate Level</Heading>
<P>Risk decisions should be made by the person who can develop and implement risk controls. For example, the pilot should make risk decisions, not ATC or passengers. </P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Accept Risk when Benefits Outweigh the Costs</Heading>
<P>Because all activities come with risks, risks should be accepted when the benefits are greater than the level of risk involved.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Integrate Risk Management into Planning at all Levels</Heading>
<P>It is much easier to manage risk during early planning. There is never a time too early to implement risk management.</P>
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

