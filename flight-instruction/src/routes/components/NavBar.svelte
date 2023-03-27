

<Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img
        src={logoDecoded}
        class="mr-3 h-6 sm:h-9"
        alt="Logo"
      />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flight Instruction
      </span>
    </NavBrand>
    <div class="flex md:order-2">
      <Button size="sm" href="/login">Login / Sign Up</Button>
      <NavHamburger on:click={toggle} />
    </div>
    <NavUl {hidden}>
      <NavLi href="/" active={false}>Home</NavLi>
      <NavLi href="/lessons" active={false}>Lessons</NavLi>
      <NavLi href="/calculators" active={false}>Calculators</NavLi>
      <NavLi><button id="theme-toggle">{modeSwitch} Mode</button></NavLi>
    </NavUl>
    
    
  </Navbar>

  
  <script>
    import logoDecoded from './navBarLogo.svg';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode, Button } from 'flowbite-svelte'
    import { onMount } from 'svelte';
  
    let modeSwitch = 'light';
  
  
    onMount(() => {
  
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

      if (localStorage.getItem('color-theme') === 'light') {
          modeSwitch = 'Dark';
      } else {
          modeSwitch = 'Light';
      }
    });
    
    
    
  
  </script>