<script>
	import '../app.postcss';

	import { onMount } from 'svelte';
    import { auth } from '../lib/firebase/firebase.client.js';
    import { authStore } from '../stores/authStore.js';

    onMount(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            authStore.update((curr) => {
                return {...curr, isLoading: false, currentUser: user};
            })
        })
    })

</script>

<slot />

