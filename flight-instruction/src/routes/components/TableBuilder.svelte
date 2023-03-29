<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

    export let contents, index;

    let tablefont = ["notselected",'selected']

    let pressureAlt = -1000;
    function getPressureAlt() {
        pressureAlt = pressureAlt + 1000;
        return pressureAlt;
    }
</script>


<Table hoverable=true>
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
