<script>
    import NavBar from "./NavBar.svelte"
</script>

<NavBar></NavBar>

<div class="holder">
    <div class="display">
        <slot></slot>
    </div>
</div>


<style>
    .holder {
        padding: 20px;
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 15px;
        align-items: center;
        justify-content: center;
    }
    .display {
        display: flex;
        flex-direction: column;
        gap: 20px;
        
    }
</style>