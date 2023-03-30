<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

    export let contents, index, caption;

    let tablefont = ["notselected",'selected']

    let pressureAlt = -1000;
    function getPressureAlt() {
        pressureAlt = pressureAlt + 1000;
        return pressureAlt;
    }
</script>


<Table hoverable=true shadow=true>
    <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">{caption}</caption>
    <TableHead>
        <TableHeadCell>Pressure Alt. (feet)</TableHeadCell>
        <TableHeadCell>0&#176;C</TableHeadCell>
        <TableHeadCell>10&#176;C</TableHeadCell>
        <TableHeadCell>20&#176;C</TableHeadCell>
        <TableHeadCell>30&#176;C</TableHeadCell>
        <TableHeadCell>40&#176;C</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
    {#each contents as pressureAlt}
        <TableBodyRow>
            <TableBodyCell>{getPressureAlt()}</TableBodyCell>
            {#each pressureAlt as values}
                    <TableBodyCell><p class={(values[3] == true) ? tablefont[1] : tablefont[2]}>{values[index]}</p></TableBodyCell>
            {/each}
        </TableBodyRow>
    {/each}
    </TableBody>
</Table>

<style>
    .selected {
        font-weight: bold;
        color: red;
    }
</style>
