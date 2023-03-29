<script>
	import { setContext } from "svelte";
    import ConversionPage from "../../../components/ConversionPage.svelte";

    setContext('convert', {convert});

    let first = "inHg";
    let second = "Millibars";

    function convert(value, number) {
        if (number == 1) {
            return value * 33.8639;
        } else if (number == 2) {
            return value / 33.8639 ;
        }
    }
</script>

<ConversionPage convert={convert()} first={first} second={second}></ConversionPage>