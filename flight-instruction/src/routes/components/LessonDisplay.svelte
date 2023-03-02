<script>
	import NavBar from "./NavBar.svelte";

    export let contents;
	let sidebarItems = [];
	let sidebarItem = {title: '', id: 0};

	let pages = [];
	let page = {widget: '', text: ''};

	for (let i = 0; i < contents.length; i++) {
		sidebarItem.title = contents[i].title;
		sidebarItem.id = i;
		sidebarItems.push(sidebarItem);

		for (let j = 0; j < contents[i].contents.length; j++) {
			
		}
	}

    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from 'flowbite-svelte';
    let spanClass = 'flex-1 ml-3 whitespace-nowrap';

	function openPage(id) {

	}
</script>

<NavBar />
<Sidebar>
    <SidebarWrapper>
      <SidebarGroup>
        <SidebarItem label="Dashboard">
          <svelte:fragment slot="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>
          </svelte:fragment>
        </SidebarItem>
        {#each sidebarItems as item}
            <SidebarItem label={item.title} href={openPage(item.id)}>
            </SidebarItem>
        {/each}
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>