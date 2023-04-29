

<Navbar let:hidden let:toggle>
    <NavBrand href="/enc1102/enc1102-final">
      <img
        src={logoDecoded}
        class="mr-3 h-6 sm:h-9"
        alt="Logo"
      />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        ENC-1102 Portfolio
      </span>
    </NavBrand>
    <div class="flex md:order-2">
      <NavHamburger on:click={toggle} />
    </div>
    <NavUl {hidden}>
    <NavLi href="/enc1102/enc1102-final" active={false}>Home</NavLi>
      <NavLi href="/enc1102/enc1102-final/generating-inquiry" active={false}>Generating Inquiry</NavLi>
      <NavLi href="/enc1102/enc1102-final/multiple-ways-of-writing" active={false}>Multiple Ways of Writing</NavLi>
      <NavLi href="/enc1102/enc1102-final/information-literacy" active={false}>Information Literacy</NavLi>
      <NavLi href="/enc1102/enc1102-final/research-genre-production" active={false}>Research Genre Production</NavLi>
      <NavLi href="/enc1102/enc1102-final/contributing-knowledge" active={false}>Contributing Knowledge</NavLi>
      <NavLi href="/enc1102/enc1102-final/revision" active={false}>Revision</NavLi>
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