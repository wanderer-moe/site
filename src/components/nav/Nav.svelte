<script>
import { t } from 'svelte-i18n'
import SearchBar from '@/components/popouts/SearchBar.svelte'

let isSearchOpen = false
</script>

<a href="https://waitlist.wanderer.moe/">
    <div
        class="group bg-indigo-500 p-1.5 text-center text-white transition-all duration-150 hover:bg-indigo-400">
        <div class="text-center">
            <p class="text-lg font-bold">
                join the new site waitlist
                <i
                    class="fa-solid fa-arrow-right ml-2 translate-y-[1px] transition-transform group-hover:translate-x-1"
                ></i>
            </p>
        </div>
    </div>
</a>
<header
    class="sticky top-0 z-50 w-full border-b border-main-300 bg-main-500 bg-opacity-75 p-2 backdrop-blur-lg backdrop-filter transition-opacity">
    <div class="mx-auto flex flex-wrap items-center justify-between lg:px-20">
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

{#if isSearchOpen}
    <SearchBar closeSearchBar="{() => (isSearchOpen = false)}" />
{/if}
