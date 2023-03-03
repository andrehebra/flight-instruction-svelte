<script>
	import NavBar from "./NavBar.svelte";

    export let contents;
	let sidebarItems = [];
	let dropDownItems = [];

	let pages = [];

	let counter = 0;
	for (let i = 0; i < contents.length; i++) {
		if (contents[i].drop == true) {
			dropDownItems = [];
			for (let j = 0; j < contents[i].contents.length; j++) {
				dropDownItems.push({title: contents[i].contents[j].title, id: counter, active: false, contents: contents[i].contents[j].contents});
				pages.push(contents[i].contents[j].contents);
				counter++;
			}
			sidebarItems.push({title: contents[i].title, id: counter, active: false, drop: true, contents: dropDownItems});
		} else {
			if (i == 0) {
				sidebarItems.push({title: contents[i].title, id: counter, active: true, drop: false});
			} else {
				sidebarItems.push({title: contents[i].title, id: counter, active: false, drop: false});
			}
			pages.push(contents[i].contents);
			counter++;
		}

		
		
	}
	console.log(pages);
	console.log(sidebarItems);

	let children;

    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from 'flowbite-svelte';
	import LessonConstructor from "./LessonConstructor.svelte";
    let spanClass = 'flex-1 ml-3 whitespace-nowrap';

	let unique = {};
	children = pages[0];
	function openPage(id) {
		sidebarItems = [];
		counter = 0;
		let active = false;
		for (let i = 0; i < contents.length; i++) {
			
			if (contents[i].drop == true) {
				dropDownItems = [];
				for (let j = 0; j < contents[i].contents.length; j++) {
					if (counter == id) {
						active = true;
					}
					dropDownItems.push({title: contents[i].contents[j].title, id: counter, active: active, contents: contents[i].contents[j].contents});
					counter++;
					active = false;
				}
				sidebarItems.push({title: contents[i].title, id: counter, active: active, drop: true, contents: dropDownItems});
			} else {
				if (counter == id) {
					active = true;
				}
				if (i == 0) {
					sidebarItems.push({title: contents[i].title, id: counter, active: active, drop: false});
				} else {
					sidebarItems.push({title: contents[i].title, id: counter, active: active, drop: false});
				}
				counter++;
			}
		active = false;
		
	}

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
					{#if item.drop == false}
						<SidebarItem active={item.active} on:click={()=>{openPage(item.id)}} label={item.title}>
						</SidebarItem>
					{:else if item.drop == true}
						<SidebarDropdownWrapper label={item.title}>
							{#each item.contents as content}
								<SidebarItem active={content.active} on:click={()=>{openPage(content.id)}} label={content.title}>
								</SidebarItem>
							{/each}
						</SidebarDropdownWrapper>
					{/if}
					
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