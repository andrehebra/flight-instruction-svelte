<script>
	import { setContext } from "svelte";
    import ConversionPage from "../../../components/ConversionPage.svelte";

    setContext('convert', {convert});

    let first = "Statute Miles";
    let second = "Kilometers";

    function convert(value, number) {
        if (number == 1) {
            return value * 1.609344;
        } else if (number == 2) {
            return value * 0.6213711922;
        }
    }
</script>

<ConversionPage convert={convert()} first={first} second={second}></ConversionPage>