<script>
	import LessonDisplay from "../components/LessonDisplay.svelte";
	import NavBar from "../components/NavBar.svelte";
    import LessonCard from "../components/LessonCard.svelte";

    import { Heading, Card } from 'flowbite-svelte';
    
    let lessons = [
        {title: 'Operation of Systems', sub: 'Gain an understanding of the operation of flight systems, specifically the Cessna 172S', link: '../lessons/individual-lessons/systems'},
        
    ]

</script>

<NavBar />

<div class="displayContainer">
    <Heading>Fundamentals of Instruction</Heading>
        <div class="list">
            <LessonCard  link="/lessons/foi/humanbehaviorandeffectivecommunication"class='lessonCard' title="Human Behavior and Effective Communication" sub=""/>
            <LessonCard  link="/lessons/foi/learningprocess"class='lessonCard' title="The Learning Process" sub=""/>
            <LessonCard  link="/lessons/foi/teachingprocess"class='lessonCard' title="The Teaching Process" sub=""/>
            <LessonCard  link="/lessons/foi/assessmentandcritique"class='lessonCard' title="Assessment and Critique" sub=""/>
            <LessonCard  link="/lessons/foi/instructorresponsibilitiesandprofessionalism"class='lessonCard' title="Instructor Responsibilities and Professionalism" sub=""/>
            <LessonCard  link="/lessons/foi/techniquesofflightinstruction"class='lessonCard' title="Techniques of Flight Instruction" sub=""/>
            <LessonCard  link="/lessons/foi/riskmanagement"class='lessonCard' title="Risk Management" sub=""/>
            
            
        </div>
</div>


<div class="cardContainer">
    {#each lessons as lesson}
        <div class="cardHolder">
            <LessonCard  link="/lessons/individual-lessons/systems"class='lessonCard' title={lesson.title} sub={lesson.sub}/>
        </div>
    {/each}
</div>

<style>
    .cardContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .cardHolder {
        padding-top: 16px;
        padding-right: 8px;
        padding-left: 8px;
        min-width: 300px;
    }

    .displayContainer {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 30px;
    }
    .list {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }
</style>
