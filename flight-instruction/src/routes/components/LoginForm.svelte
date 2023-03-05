<script>
    import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
    import NavBar from './NavBar.svelte';

    function login() {
        let email = document.getElementById('emailInput').value;
        let password = document.getElementById('passInput').value;

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem("uid", user.uid);
        })
    }
</script>


<NavBar />