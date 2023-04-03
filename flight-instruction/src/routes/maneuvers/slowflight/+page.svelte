<script>
    import {doc, getDoc} from "firebase/firestore";
    import { getData } from "../../../lib/firestore/getdata.client";
    import auth from "../../../lib/firebase/firebase.client";
    import authStore from "../../../stores/authStore";

    import FirestoreLessonConstructor from "../../components/FirestoreLessonConstructor.svelte";

    let unique = {}

    function restart() {
        unique = {}
    }

    let data;
    let conversionData;
    let displayData = ["loading"];

    getData("maneuvers", "slowflight").then(function(results) {
        data = results;
        if (Object.entries(data)[0][0] == "allData") {
            conversionData = Object.entries(data)[0][1];
            displayData.length = 0;
            for (let i = 0; i < conversionData.length; i++) {
                displayData.push((Object.entries(conversionData[i])[0]));
            }
        } else { 

        }


        restart();
    });

    $: displayData;

    console.log(authStore);

    
</script>

{#key unique}
    <FirestoreLessonConstructor contents={displayData}></FirestoreLessonConstructor>
{/key}