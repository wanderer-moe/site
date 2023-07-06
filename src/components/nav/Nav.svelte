<script>
import { t } from 'svelte-i18n'
import SearchBar from '@/components/popouts/SearchBar.svelte'
import { keybindHandler } from '@/lib/utils/keybinds'
// import { getCommitsRecent } from '@/lib/utils/github'
// import { onMount } from 'svelte'

let isSearchOpen = false
// let commitSha = ''

// onMount(async () => {
//     const commits = await getCommitsRecent()
//     commitSha = commits[0].shaSpliced
//     console.log(commitSha)
// })
</script>

<svelte:window
    use:keybindHandler="{{
        binds: ['control', 'k'],
        bindCalled: () => (isSearchOpen = !isSearchOpen),
    }}" />
<div class="bg-main-400 p-2 text-center text-sm text-gray-400">
    We're aware of an issue affecting downloading multiple assets, please
    download each asset individually. This will be fixed after the upcoming site
    update, including a new name at the end of this month. More information will
    be announced on this banner and <span class="underline"
        ><a
            class="font-semibold text-white"
            href="https://discord.wanderer.moe/">in our Discord</a>
    </span>
</div>
<header
    class="sticky top-0 z-50 w-full border-b border-main-300 bg-main-500 bg-opacity-75 p-2 backdrop-blur-lg backdrop-filter transition-opacity">
    <div class="mx-auto flex flex-wrap items-center justify-between">
        <div class="md:px-12 lg:px-16">
            <a href="/" class="flex items-center gap-1" rel="external">
                <img src="/logo.png" alt="logo" class="h-12 w-12" />
                <div class="flex flex-col">
                    <span class="text text-xl font-semibold text-white"
                        >wanderer.moe</span>
                    <!-- {#if commitSha}
                <span class="text text-xs font-semibold text-gray-400">{commitSha}</span>
              {/if} -->
                </div>
            </a>
        </div>

        <div class="flex items-center md:px-20">
            <ul class="mt-4 flex flex-row space-x-4 font-medium md:mt-0">
                <div
                    class="rounded-lg border-[2px] border-main-400 transition-colors duration-150 hover:border-main-300">
                    <!-- hover:animate-pulse ? -->
                    <div
                        class="hidden h-8 w-72 rounded-lg bg-main-700 px-4 text-xs text-gray-400 hover:bg-main-400 lg:block"
                        on:click="{() => (isSearchOpen = !isSearchOpen)}"
                        on:keypress="{() => (isSearchOpen = !isSearchOpen)}">
                        <div class="flex h-full items-center justify-between">
                            <span>
                                <i class="fa fa-search mr-2"></i>{$t(
                                    'globalSearch.searchBar'
                                )}
                            </span>
                            <span
                                class="rounded-lg border border-main-500 bg-main-600 px-2 py-1 text-xs font-semibold text-gray-100"
                                >Ctrl + K</span>
                        </div>
                    </div>
                </div>
                <button class="hidden px-4 py-2 focus:outline-none lg:hidden">
                    <a
                        href="https://discord.wanderer.moe/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i
                            class="fa-brands fa-discord cursor-pointer text-white hover:text-indigo-300"
                        ></i>
                    </a>
                </button>
                <button class="hidden px-4 py-2 focus:outline-none lg:hidden">
                    <a
                        href="https://git.wanderer.moe/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i
                            class="fa-brands fa-github cursor-pointer text-white hover:text-indigo-300"
                        ></i>
                    </a>
                </button>
            </ul>

            <button
                class="px-4 py-2 focus:outline-none lg:ml-auto lg:mr-0 lg:mt-4 lg:hidden lg:h-12 lg:w-12 lg:px-5 lg:py-2.5"
                on:click="{() => (isSearchOpen = !isSearchOpen)}"
                aria-label="menu">
                <i
                    class="fa-solid fa-search cursor-pointer text-white hover:text-indigo-300"
                ></i>
            </button>
            <button class="px-4 focus:outline-none lg:block lg:pl-4 lg:pr-2">
                <a
                    href="https://discord.wanderer.moe/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i
                        class="fa-brands fa-discord cursor-pointer text-white hover:text-indigo-300"
                    ></i>
                </a>
            </button>
            <button class="px-4 focus:outline-none lg:block lg:pl-2 lg:pr-4">
                <a
                    href="https://git.wanderer.moe/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i
                        class="fa-brands fa-github cursor-pointer text-white hover:text-indigo-300"
                    ></i>
                </a>
            </button>
        </div>
    </div>
</header>

{#if isSearchOpen}
    <SearchBar closeSearchBar="{() => (isSearchOpen = false)}" />
{/if}
