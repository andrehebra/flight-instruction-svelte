<script>
	import { setContext } from "svelte";
    import ConversionPage from "../../../components/ConversionPage.svelte";

    setContext('convert', {convert});

    let first = "Nautical Miles";
    let second = "Statute Miles";

    function convert(value, number) {
        if (number == 1) {
            return value * 1.15077945;
        } else if (number == 2) {
            return value * 0.86897624;
        }
    }
</script>

<ConversionPage convert={convert()} first={first} second={second}></ConversionPage>