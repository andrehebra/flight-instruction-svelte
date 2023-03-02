<script>
    import LessonDisplay from "../../../components/LessonDisplay.svelte";

    const systems = [
        {title: "Introduction", contents: [
            {widget: "header", text: "This is a sample header"},
            {widget: "text", text: "this is a sample of some text"}
        ]}, {
        title: "second onee", contents: [
            {widget: "header", text: "this is the second page boyyyy"},
            {widget: "text", text: 'this is the second page'}
        ]}
    ];
</script>

<LessonDisplay contents={systems} />