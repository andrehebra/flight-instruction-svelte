<script>
	import { authStore } from "../../stores/authStore";

    let email;
    authStore.subscribe(curr => {
        email = curr?.currentUser?.email;
    })
</script>

<h1>current user: {email}</h1>