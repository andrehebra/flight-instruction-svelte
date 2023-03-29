<script>
	import { setContext } from "svelte";
    import ConversionPage from "../../../components/ConversionPage.svelte";

    setContext('convert', {convert});

    let first = "Pounds";
    let second = "Kilograms";

    function convert(value, number) {
        if (number == 1) {
            return value / 2.205;
        } else if (number == 2) {
            return value * 2.205 ;
        }
    }
</script>

<ConversionPage convert={convert()} first={first} second={second}></ConversionPage>