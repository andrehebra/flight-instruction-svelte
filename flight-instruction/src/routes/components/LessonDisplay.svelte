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
<div class="display">
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
	
	<div class="holder">
		<div class="lesson">
			{#key unique}
				<LessonConstructor class='content' contents={children} />
			{/key}
		</div>
	</div>
	
	
</div>

<style>
	.display {
		display: flex;
	}
	.holder {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
	.lesson {
		display: flex;
		max-width: 800px;
		flex-direction: column;
		min-height: 100%;
		padding: 20px;
	}
	.content {

	}
</style>