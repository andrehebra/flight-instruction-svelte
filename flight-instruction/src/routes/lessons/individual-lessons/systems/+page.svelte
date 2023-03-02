<script>
    import LessonDisplay from "../../../components/LessonDisplay.svelte";

    const systems = [
        {title: "Introduction", contents: [
            {widget: "header", text: "This is a sample header"},
            {widget: "text", text: "this is a sample of some text"}
        ]}
    ];
</script>

<LessonDisplay contents={systems} />