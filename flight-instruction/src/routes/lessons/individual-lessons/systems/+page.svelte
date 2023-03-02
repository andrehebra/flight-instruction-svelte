<script>
    import LessonDisplay from "../../../components/LessonDisplay.svelte";

    const systems = [
        {title: "Introduction", contents: [
            {widget: "header", text: "What exactly are systems?"},
            {widget: "text", text: "Aircraft systems are simply the devices used to operate an aircraft. These can range from the flight controls to the avionics or electrical system. For learning purposes, it can be easier to separate them into a few different broad categories. While this lesson will broadly cover the systems onboard a Cessna 172S, many other aircraft have more complex systems or entirely unique ones."},
            {widget: 'text', text: 'This lesson will start by going through the primary and secondary control systems, and then progress through the other, more complex, but equally important systems.'},
        ]}, {
        title: "second onee", contents: [
            {widget: "header", text: "this is the second page boyyyy"},
            {widget: "text", text: 'this is the second page'}
        ]}
    ];
</script>

<LessonDisplay contents={systems} />