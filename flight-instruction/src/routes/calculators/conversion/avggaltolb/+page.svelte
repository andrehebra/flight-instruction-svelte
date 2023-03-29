<script>
	import { setContext } from "svelte";
    import ConversionPage from "../../../components/ConversionPage.svelte";

    setContext('convert', {convert});

    let first = "Gallons of Avgas";
    let second = "Pounds";

    function convert(value, number) {
        if (number == 1) {
            return value * 6;
        } else if (number == 2) {
            return value / 6 ;
        }
    }
</script>

<ConversionPage convert={convert()} first={first} second={second}></ConversionPage>