<script>
    import { authHandlers, authStore } from "../../stores/authStore";
    import { Label, Input, Button, Checkbox } from "flowbite-svelte";

    let register = false;
    let email = '';
    let password = '';
    let confirmPassword = '';

    let loginText = "Sign in to Your Account";
    let signinText = "Sign In";
    let swapButtonText = "Don't have an account yet? Sign Up";

    function swapText() {
        if (register) {
            loginText = "Create a New Account";
            signinText = "Create Account";
            swapButtonText = "Already have an account? Sign In";
        } else {
            loginText = "Sign in to Your Account";
            signinText = "Sign In";
            swapButtonText = "Don't have an account yet? Sign Up";
        }
    }

    function swap() {
        if (register) {
            register = false;
        } else { 
            register = true;
        }

        swapText();
    }

    async function handleSubmit() {
        if (!email || !password || (register && !confirmPassword)) {
            return;
        }

        if (register && password === confirmPassword) {
            try {
                await authHandlers.signup(email, password);
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                await authHandlers.login(email, password);
            } catch (err) {
                console.log(err);
            }
        }

        if ($authStore.currentUser) {
            window.location.href="/dashboard";
        }
    }
</script>



<div class="padding">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form class="flex flex-col space-y-6" action="/">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">{loginText}</h3>
          <Label class="space-y-2">
            <span>Your email</span>
            <Input bind:value={email} type="email" name="email" placeholder="name@company.com" required />
          </Label>
          <Label class="space-y-2">
            <span>Your password</span>
            <Input bind:value={password} type="password" name="password" placeholder="•••••••" required />
          </Label>
          {#if register}
          <Label class="space-y-2">
            <span>Confirm Password</span>
            <Input bind:value={confirmPassword} type="password" placeholder="•••••••" />
          </Label>
          {/if}
          <div class="flex items-start">
            <Checkbox>Remember me</Checkbox>
            <a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >Forgot password?</a
            >
          </div>
          <Button on:click={handleSubmit} class="w-full1">{signinText}</Button>
          <Button color="green" type="submit" class="w-full1">Sign in with Google</Button>
          <Button on:click={() => swap()}>{swapButtonText}</Button>
        </form>
      </div>
</div>




<style>
.padding {
    padding: 15px;
}
</style>