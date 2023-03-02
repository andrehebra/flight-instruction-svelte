<script>
	import NavBar from "./NavBar.svelte";

    export let contents;
	let sidebarItems = [];

	let pages = [];

	for (let i = 0; i < contents.length; i++) {
		sidebarItems.push({title: contents[i].title, id: i});

		pages.push({id: i, contents: contents[i].contents});
	}

    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from 'flowbite-svelte';
	import LessonConstructor from "./LessonConstructor.svelte";
    let spanClass = 'flex-1 ml-3 whitespace-nowrap';

	function openPage(id) {
		alert('no more alerts');
	}
</script>

<NavBar />
<Sidebar>
    <SidebarWrapper>
      <SidebarGroup>
			{#each sidebarItems as item}
				<SidebarItem on:click={openPage(item.id)} label={item.title}>
				</SidebarItem>
			{/each}
      	</SidebarGroup>
    </SidebarWrapper>
</Sidebar>

<LessonConstructor />