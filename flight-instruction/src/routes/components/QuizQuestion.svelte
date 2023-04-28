<script>
    import {Heading, Radio, Button, Hr} from 'flowbite-svelte';

    export let response;

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
            rateQuestion(e.keyCode - 48);
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
                currentState = "incorrect";
            }
        }
    }

    function rateQuestion(value) {
        response = value;
        console.log(response);
    }

    function setState(state) {
        currentState = state;
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
            <Button on:click={() => rateQuestion(1)} color="red" >Again (1)</Button>
        </div>
        <div class="selection">
            <Button on:click={() => rateQuestion(2)} color="yellow" >Hard (2)</Button>
        </div>
        <div class="selection">
            <Button on:click={() => rateQuestion(3)}>Good (3)</Button>
        </div>
        <div class="selection">
            <Button on:click={() => rateQuestion(4)} color="green" >Easy (4)</Button>
        </div>
    </div>
{:else if (currentState == 'incorrect')}
    <Button>Read Explanation</Button>
    <Button on:click={() => setState("rate")}>Mark Correct</Button>
    <Button on:click={() => rateQuestion(1)}>Continue</Button>
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