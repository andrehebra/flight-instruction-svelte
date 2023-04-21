<script>
	import LessonDisplay from "../components/LessonDisplay.svelte";
	import NavBar from "../components/NavBar.svelte";
    import LessonCard from "../components/LessonCard.svelte";
    
    let lessons = [
        {title: 'Operation of Systems', sub: 'Gain an understanding of the operation of flight systems, specifically the Cessna 172S', link: '../lessons/individual-lessons/systems'},
        
    ]

</script>

<NavBar />

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
</style>
