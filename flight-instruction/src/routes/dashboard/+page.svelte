<script>
	import { authStore } from "../../stores/authStore";
    import NavBar from "../components/NavBar.svelte"

    let email;
    authStore.subscribe(curr => {
        email = curr?.currentUser?.email;
    })
</script>

<NavBar />