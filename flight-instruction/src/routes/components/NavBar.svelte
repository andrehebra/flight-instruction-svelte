<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte'
    import { onMount } from 'svelte';

    let modeSwitch = 'light';

    onMount(() => {
      
      if (localStorage.getItem('color-theme') === 'light') {
          modeSwitch = 'Dark';
      } else {
          modeSwitch = 'Light';
      }

      var themeToggleBtn = document.getElementById('theme-toggle');
      
      themeToggleBtn.addEventListener('click', function() {

      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
              modeSwitch = 'Light';
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
              modeSwitch = 'Dark';
          }

      // if NOT set via local storage previously
      } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
      }

      });
    });
    
    
    

</script>

<Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        class="mr-3 h-6 sm:h-9"
        alt="Logo"
      />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flight Instruction
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/lessons">Lessons</NavLi>
      <NavLi><button id="theme-toggle">{modeSwitch} Mode</button></NavLi>
    </NavUl>
    
  </Navbar>