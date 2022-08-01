<script>
    import { page } from "$app/stores";
    const nav = [
        { title: "Character Parts", path: "/characterparts"},
        { title: "Splash Art", path: "/splashart"},
        { title: "Artifacts", path: "/artifacts"},
        { title: "Characters", path: "/characters"}
    ]
</script>

<header>
    <nav class= "px-4 lg:px-6 py-2.5">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" class="flex items-center">
                <span class="self-center text-white text-xl gifont whitespace-nowrap hover:text-blue-400">wanderer.moe</span>
            </a>
            <div class="flex items-center md:order-2">
                <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">

                    {#each nav as item}
                    <li>
                        <a href="{item.path}" class:active={$page.url.pathname == item.path} class="hidden w-full md:block py-2 pr-4 pl-3 text-white rounded bg-primary-700 font-semibold lg:bg-transparent lg:text-primary-700 lg:p-0 hover:text-blue-400">{item.title}</a>
                    </li>
                    {/each}

                </ul>
				<p><a href="https://discord.com/invite/659KAFfNd6" class="text-white hover:text-blue-400 font-semibold text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2"><i class = "fab fa-discord"></i></a></p>

            </div>
        </div>
    </nav>
</header>

<style lang="postcss">
    .active {
      @apply text-blue-400;
    }
</style>
