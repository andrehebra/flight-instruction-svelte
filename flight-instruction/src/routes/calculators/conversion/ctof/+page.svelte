<script>
	import { setContext } from "svelte";
    import ConversionPage from "../../../components/ConversionPage.svelte";
    import { getContext } from 'svelte';

    setContext('convert', {convert});

    function convert(value, number) {
        if (number == 1) {
            return (value * (9/5) + 32);
        } else if (number == 2) {
            return (value - 32) * (5/9);
        }
    }
</script>

<ConversionPage convert={convert()} first="Celsius" second="Fahrenheit"></ConversionPage>