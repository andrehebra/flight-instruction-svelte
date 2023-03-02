<script>
	import NavBar from "./NavBar.svelte";

    export let contents;
	let sidebarItems = [];

	let pages = [];

	for (let i = 0; i < contents.length; i++) {
		sidebarItems.push({title: contents[i].title, id: i});

		pages.push(contents[i].contents);
	}
	let children;

    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from 'flowbite-svelte';
	import LessonConstructor from "./LessonConstructor.svelte";
    let spanClass = 'flex-1 ml-3 whitespace-nowrap';

	let unique = {};
	children = pages[0];
	function openPage(id) {
		children = pages[id];
		console.log(pages[id]);
		unique = {};
	}
</script>

<NavBar />
<Sidebar>
    <SidebarWrapper>
      <SidebarGroup>
			{#each sidebarItems as item}
				
				<SidebarItem on:click={()=>{openPage(item.id)}} label={item.title}>
				</SidebarItem>
			{/each}
      	</SidebarGroup>
    </SidebarWrapper>
</Sidebar>

{#key unique}
<LessonConstructor contents={children} />
{/key}