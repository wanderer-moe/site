<script>
    import { page } from "$app/stores";
    const nav = [
        { title: "Character Parts", path: "/characterparts"},
        { title: "Splash Art", path: "/splashart"},
        { title: "Artifacts", path: "/artifacts"},
        { title: "Characters", path: "/characters"}
    ]

    let mobileMenu; 
    let navBarButton;

    function mobileClick(e) {
        if (mobilemenu.classList.contains('hidden')) {
            mobilemenu.classList.remove('hidden');
            mobilemenu.classList.add('visible');

            navBarButton.classList.replace('text-white', 'text-blue-400');
        } else {
            mobilemenu.classList.remove('visible');
            mobilemenu.classList.add('hidden');
            navBarButton.classList.replace('text-blue-400', 'text-white');
        }
    }
</script>

<header>
    <div class = "p-4">
    <div class = "bg-[#19191E] p-4 rounded-lg shadow-lg">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" class="flex items-center">
                <span class="self-center text-white text-xl gifont whitespace-nowrap hover:text-blue-400">wanderer.moe</span>
            </a>

            <div class="flex items-center md:order-2">
                <ul class="flex mt-4 font-medium flex-row space-x-4 md:mt-0">
                    {#each nav as item}
                    <li>
                        <a href="{item.path}" class:active={$page.url.pathname == item.path} class="hidden w-full lg:block py-2 pr-4 pl-3 text-white rounded bg-primary-700 font-semibold lg:bg-transparent lg:text-primary-700 lg:p-0 hover:text-blue-400">{item.title}</a>
                    </li>
                    {/each}
                </ul>
                
				<p><a href="https://discord.com/invite/659KAFfNd6" class="text-white hover:text-blue-400 font-semibold text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2"><i class = "fab fa-discord"></i></a></p>

                <!-- if on a device that isn't considered large.., show navigation button... -->
                <button class="lg:hidden lg:ml-auto lg:mr-0 lg:mt-4 lg:h-12 lg:w-12 focus:outline-none" on:click={mobileClick}>
                    <i bind:this={navBarButton} class="text-white hover:text-blue-400 cursor-pointer fa-solid fa-bars"></i>
                </button>

            </div>
        </div>
    </div>
</div>
</header>


            <!-- mobile navigation menu -->

<div id = "mobilemenu" class = "p-4 hidden" bind:this={mobileMenu}>
<div class = "bg-[#19191E] p-4 rounded-lg lg:hidden shadow-lg">
    <ul class="flex mt-4 font-medium flex-col grid-cols-1 md:mt-0">
    {#each nav as item}
    <li>
        <a href="{item.path}" class:active={$page.url.pathname == item.path} class="w-full lg:hidden py-2 pr-4 pl-3 text-white rounded bg-primary-700 font-semibold lg:bg-transparent lg:text-primary-700 lg:p-0 hover:text-blue-400">{item.title}</a>
    </li>
    {/each}
    </ul>
</div>
</div>
    

<style lang="postcss">
    .active {
      @apply text-blue-400;
    }
</style>
