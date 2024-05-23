<script>
import SearchBar from '@/components/popouts/SearchBar.svelte'

let isSearchOpen = false
</script>

<div class="sticky top-0 z-50">
    <a href="https://crowdfund.dromzeh.dev/" target="_blank">
        <div
            class="flex w-full items-center justify-center bg-red-500 p-1 py-2 text-center text-white transition hover:bg-red-400">
            wanderer.moe needs financial support to continue operating
            <i class="fas fa-arrow-right ml-2"></i>
        </div>
    </a>
    <header
        class="z-50 w-full border-b border-main-300 bg-main-500 bg-opacity-75 p-2 backdrop-blur-lg backdrop-filter transition-opacity">
        <div
            class="mx-auto flex flex-wrap items-center justify-between lg:px-20">
            <div>
                <a href="/" class="flex items-center gap-1" rel="external">
                    <img src="/logo.png" alt="logo" class="h-12 w-12" />
                    <div class="flex flex-col">
                        <span class="text text-xl font-semibold text-white"
                            >wanderer.moe</span>
                    </div>
                </a>
            </div>

            <div class="flex items-center space-x-2">
                <button
                    class="p-2 text-white transition-colors duration-150 hover:text-indigo-400"
                    on:click="{() => (isSearchOpen = true)}">
                    <i class="fas fa-search"></i>
                </button>
                <a
                    class="p-2 text-white transition-colors duration-150 hover:text-indigo-400"
                    href="https://x.com/wanderermoe"
                    target="_blank"
                    rel="noreferrer noopener">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a
                    class="p-2 text-white transition-colors duration-150 hover:text-indigo-400"
                    href="https://discord.wanderer.moe/"
                    target="_blank"
                    rel="noreferrer noopener">
                    <i class="fa-brands fa-discord"></i>
                </a>
            </div>
        </div>
    </header>
</div>

{#if isSearchOpen}
    <SearchBar closeSearchBar="{() => (isSearchOpen = false)}" />
{/if}
