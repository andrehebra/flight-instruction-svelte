<script>
	import { setContext } from "svelte";
    import ConversionPage from "../../../components/ConversionPage.svelte";

    setContext('convert', {convert});

    let first = "Nautical Miles";
    let second = "Kilometers";

    function convert(value, number) {
        if (number == 1) {
            return value * 1.852;
        } else if (number == 2) {
            return value * 0.53996;
        }
    }
</script>

<ConversionPage convert={convert()} first={first} second={second}></ConversionPage>