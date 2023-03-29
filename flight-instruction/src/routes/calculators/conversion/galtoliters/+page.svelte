<script>
	import { setContext } from "svelte";
    import ConversionPage from "../../../components/ConversionPage.svelte";

    setContext('convert', {convert});

    let first = "Gallons";
    let second = "Liters";

    function convert(value, number) {
        if (number == 1) {
            return value * 3.785;
        } else if (number == 2) {
            return value / 3.785 ;
        }
    }
</script>

<ConversionPage convert={convert()} first={first} second={second}></ConversionPage>