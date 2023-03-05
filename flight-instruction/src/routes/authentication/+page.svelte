<script>
    import App from '../../lib/firebaseConfig.js';
    import { onMount } from 'svelte';
    import { getAuth, onAuthStateChanged } from 'firebase/auth';

    onMount(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Welcome to the file portal");
            }
        })
    })
</script>

<h1>Login </h1>