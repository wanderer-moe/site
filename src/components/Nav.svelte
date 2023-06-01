<script>
import { t } from 'svelte-i18n'
import SearchBar from './SearchBar.svelte'
import { keybindHandler } from '@/lib/utils/keybinds'

let isSearchOpen = false
</script>

<svelte:window
    use:keybindHandler="{{
        binds: ['control', 'k'],
        bindCalled: () => (isSearchOpen = !isSearchOpen),
    }}" />
<header class="sticky top-0 z-50 w-full">
    <div class="border-b-2 border-main-300 bg-main-500 p-2">
        <div class="mx-auto flex flex-wrap items-center justify-between">
            <div class="md:px-12 lg:px-16">
                <a href="/" class="flex items-center gap-1" rel="external">
                    <img src="/logo.png" alt="logo" class="h-12 w-12" />
                    <span class="text text-xl font-semibold text-white"
                        >wanderer.moe</span>
                </a>
            </div>

            <div class="flex items-center md:px-20">
                <ul class="mt-4 flex flex-row space-x-4 font-medium md:mt-0">
                    <div
                        class="rounded-lg border-[2px] border-main-400 transition-colors duration-150 hover:border-main-300">
                        <!-- hover:animate-pulse ? -->
                        <div
                            class="hidden h-8 w-72 rounded-lg bg-main-700 px-4 text-xs text-gray-400 lg:block"
                            on:click="{() => (isSearchOpen = !isSearchOpen)}"
                            on:keypress="{() =>
                                (isSearchOpen = !isSearchOpen)}">
                            <div
                                class="flex h-full items-center justify-between">
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
                    <button
                        class="hidden px-4 py-2 focus:outline-none lg:hidden">
                        <a
                            href="https://discord.wanderer.moe/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i
                                class="fa-brands fa-discord cursor-pointer text-white hover:text-indigo-300"
                            ></i>
                        </a>
                    </button>
                    <button
                        class="hidden px-2 py-2 focus:outline-none lg:hidden">
                        <a
                            href="https://buymeacoffee.com/marcelmd"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i
                                class="fa-solid fa-hand-holding-dollar cursor-pointer text-white hover:text-indigo-300"
                            ></i>
                        </a>
                    </button>
                    <button
                        class="hidden px-4 py-2 focus:outline-none lg:hidden">
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
                <button
                    class="px-4 focus:outline-none lg:block lg:pl-4 lg:pr-2">
                    <a
                        href="https://discord.wanderer.moe/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i
                            class="fa-brands fa-discord cursor-pointer text-white hover:text-indigo-300"
                        ></i>
                    </a>
                </button>
                <button class="px-4 focus:outline-none lg:block">
                    <a
                        href="https://buymeacoffee.com/marcelmd"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i
                            class="fa-solid fa-hand-holding-dollar cursor-pointer text-white hover:text-indigo-300"
                        ></i>
                    </a>
                </button>
                <button
                    class="px-4 focus:outline-none lg:block lg:pl-2 lg:pr-4">
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
    </div>

    {#if isSearchOpen}
        <SearchBar closeSearchBar="{() => (isSearchOpen = false)}" />
    {/if}
</header>
