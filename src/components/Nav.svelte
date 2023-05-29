<style lang="postcss">
.active {
    @apply text-indigo-300;
}

header {
    z-index: 500;
}
</style>

<script>
import { t } from "svelte-i18n";
import { page } from "$app/stores";
import SearchBar from "./SearchBar.svelte";
import { onMount } from "svelte";

let isSearchOpen = false;

function toggleSearch() {
    // console.log("toggleSearch");
    isSearchOpen = !isSearchOpen;
}

// TODO: rewrite ctrl + k to search shortcut
</script>

<header class="relative w-full">
    <div>
        <div class="bg-[#141414] p-4">
            <div class="mx-auto flex flex-wrap items-center justify-between">
                <div class="md:px-12 lg:px-16">
                    <a href="/" class="flex items-center" rel="external">
                        <img src="/favicon.png" alt="logo" class="h-10 w-10" />
                        <span class="text font-semibold text-white"
                            >wanderer.moe</span>
                    </a>
                </div>

                <div class="flex items-center md:px-20">
                    <ul
                        class="mt-4 flex flex-row space-x-4 font-medium md:mt-0">
                        <input
                            class="hidden h-8 w-72 rounded-lg bg-black px-4 py-2 text-center text-xs text-white lg:block {$t(
                                'direction'
                            )}"
                            readonly
                            placeholder="{$t('globalSearch.searchBar')}"
                            on:click="{toggleSearch}" />
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
                                href="https://git.dromzeh.dev/wanderer.moe"
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
                        on:click="{toggleSearch}"
                        aria-label="menu">
                        <i
                            class="fa-solid fa-search cursor-pointer text-white hover:text-indigo-300"
                        ></i>
                    </button>
                    <button class="px-4 lg:pl-4 lg:pr-2 focus:outline-none lg:block">
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
                    <button class="px-4 lg:pl-2 lg:pr-4 focus:outline-none lg:block">
                        <a
                            href="https://git.dromzeh.dev/wanderer.moe"
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
    </div>
</header>

{#if isSearchOpen}
    <SearchBar closeSearchBar="{() => (isSearchOpen = false)}" />
{/if}
