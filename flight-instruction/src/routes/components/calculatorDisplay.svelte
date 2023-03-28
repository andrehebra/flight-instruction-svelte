<script>
    import NavBar from "./NavBar.svelte"
</script>

<NavBar></NavBar>

<div class="display">
    <slot></slot>
</div>

<style>
    .display {
        padding: 20px;
        display: flex;
        flex-direction: column;
        max-width: 800px;
        gap: 15px;
        
    }
</style>