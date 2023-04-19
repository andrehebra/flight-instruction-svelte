<script>
    import NavBar from "../../components/NavBar.svelte";
    import FirestoreLessonConstructor from '../../components/FirestoreLessonConstructor.svelte';

    let contents = [['image', 'https://i.imgur.com/7A8Fp66.png'],];
</script>

<FirestoreLessonConstructor contents={contents}></FirestoreLessonConstructor>