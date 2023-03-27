<script>
	import NavBar from "../components/NavBar.svelte";
    import {  Heading, P, A, Mark, Secondary } from 'flowbite-svelte';
    import { Input, Label, Helper } from 'flowbite-svelte';

</script>

<NavBar />
<Heading>Rate of turn calculator</Heading>
<div>
    <Label for="first_name" class="mb-2">First name</Label>
    <Input type="text" id="first_name" placeholder="John" required  />
</div>