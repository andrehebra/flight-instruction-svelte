<script>
     import NavBar from '../../components/NavBar.svelte'; 
     import LessonCard from '../../components/LessonCard.svelte'; 
     import QuizQuestion from '../../components/QuizQuestion.svelte';
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte';

     let response = 0;
     $: response = response;
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<QuizQuestion bind:response={response} correctAnswer="second" question="What is the correct answer?" type="multiple" options={["first", "second", "third"]}></QuizQuestion>

<P>{response}</P>
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

