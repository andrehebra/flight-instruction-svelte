<script>
	import { setContext } from "svelte";
    import ConversionPage from "../../../components/ConversionPage.svelte";

    setContext('convert', {convert});

    let first = "Feet";
    let second = "Meters";

    function convert(value, number) {
        if (number == 1) {
            return value * 0.3048;
        } else if (number == 2) {
            return value / 0.3048;
        }
    }
</script>

<ConversionPage convert={convert()} first={first} second={second}></ConversionPage>