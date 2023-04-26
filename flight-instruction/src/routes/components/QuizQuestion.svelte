<script>
    import {Heading, Radio, Button, Hr} from 'flowbite-svelte';


    export let question;
    export let type;
    export let correctAnswer;
    export let explanation;

    let currentState = "question";

    //multiple choice questions
    export let options;
    let selection = "";
    $: selection;
    


    //handling keyboard events to allow for keyboard control
    function onKeyDown(e) {
        //if a number between 1 and 9, select that option
        if (e.keyCode >= 49 && e.keyCode <= 57 && currentState == "question") {
            selection = options[e.keyCode - 49];
        } else if (e.keyCode >= 49 && e.keyCode <= 52 && currentState == "rate") {

        }

        switch (e.keyCode) {
            //if pressing enter, submit answer
            case 13:
                submitAnswer();
                break;
        }
    }

    //handle submitting an answer
    function submitAnswer() {
        //multiple choice questions
        if (type == "multiple") {
            if (correctAnswer == selection) {
                currentState = "rate";
            } else {

            }
        }
    }

    

</script>

<Heading>{question}</Heading>

<Hr></Hr>

<div class="answer">
    {#if (type=="multiple")}
        {#each options as option}
            <Radio bind:group={selection} value={option} name="example">{option}</Radio>
        {/each}
    {/if}
</div>


{#if (currentState == 'question')}
    <Button on:click={submitAnswer}>Submit</Button>
{:else if (currentState == 'rate')}
    <div class="inline">
        <div class="selection">
            <Button color="red" >Again (1)</Button>
        </div>
        <div class="selection">
            <Button color="yellow" >Hard (2)</Button>
        </div>
        <div class="selection">
            <Button >Good (3)</Button>
        </div>
        <div class="selection">
            <Button color="green" >Easy (4)</Button>
        </div>
    </div>
{/if}

<svelte:window on:keydown|preventDefault={onKeyDown} />

<style>
    .inline {
        display: flex;
        align-items: space-between;
        justify-content: space-between;
        gap: 10px;
        width: 100%;
    }
    .selection {
        flex-grow: 1;
    }
    .answer {
        min-height: 300px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>