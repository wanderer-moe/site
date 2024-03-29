<style lang="postcss">
.fa-spin {
    animation: fa-spin 1s infinite linear;
}
</style>

<script>
import { onMount } from 'svelte'
import { t } from 'svelte-i18n'
import { cubicOut, quintOut } from 'svelte/easing'
import { fly, fade } from 'svelte/transition'
import { filterGamesSearchBar as filterGames } from '@/lib/utils/filterSearch'
import { fixCasing } from '@/lib/helpers/casing/fixCasing.js'
export let query = ''
export let closeSearchBar
let searchInput
let allGames = []

async function getGames() {
    try {
        const res = await fetch('https://api.wanderer.moe/games')
        if (res.ok) {
            const data = await res.json()
            allGames = data
        } else {
            console.error('Error fetching games:', res.status)
        }
    } catch (err) {
        console.error('Error fetching games:', err)
    }
}

onMount(() => {
    getGames().then(() => {
        searchInput.focus()
    })
})

// $: console.log(allGames.games)
$: filteredGames = filterGames(allGames.games, query)
</script>

<svelte:window
    on:keydown="{(e) => {
        if (e.key === 'Escape') {
            closeSearchBar()
        }
    }}" />
<div>
    <div
        class="fixed left-1/2 top-1/2 z-[1000] w-3/4 -translate-x-1/2 -translate-y-1/2 transform"
        in:fly="{{ y: 50, easing: quintOut, duration: 750 }}"
        out:fly="{{ y: 50, easing: cubicOut, duration: 300 }}">
        <button
            class="close-button absolute right-0 top-0 rounded-lg p-2 text-white"
            on:click="{closeSearchBar}">✕</button>
        <div
            class="mb-2 flex items-center rounded-lg bg-main-500 p-2 text-white">
            <div
                class="mr-2 flex h-14 items-center justify-center rounded-lg bg-main-600 p-2">
                {#if allGames.length === 0}
                    <i class="fa-solid fa-circle-notch fa-spin"></i>
                {:else}
                    <i class="fas fa-search"></i>
                {/if}
            </div>
            <input
                disabled="{allGames.length === 0}"
                class="h-14 w-full rounded-lg bg-main-600 pl-2 text-accent-300 focus:shadow focus:outline-none"
                placeholder="Search for a game or asset category..."
                bind:this="{searchInput}"
                bind:value="{query}" />
        </div>
        {#if filteredGames.length > 0}
            <div
                class="max-h-[350px] overflow-y-auto rounded-lg bg-main-500 p-2">
                <div class="search-results-list grid gap-1">
                    {#each filteredGames as game}
                        <div
                            class="rounded-lg bg-main-600 p-2 text-white hover:text-accent-300">
                            <!-- https://kit.svelte.dev/docs/link-options#data-sveltekit-reload -->
                            <a
                                on:click="{closeSearchBar()}"
                                rel="external"
                                href="{`/${game.gameName.replace(' ', '-')}/${
                                    game.locationName
                                }`}">
                                <p class="text-sm">
                                    {fixCasing(game.gameName)}
                                </p>
                                <p>
                                    {fixCasing(game.locationName)}
                                </p>
                            </a>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
    </div>

    <div
        class="fixed left-0 top-0 z-50 h-full w-full backdrop-blur-sm backdrop-filter"
        in:fade="{{ easing: quintOut, duration: 750 }}"
        out:fade="{{ easing: cubicOut, duration: 300 }}"
        on:click="{closeSearchBar()}"
        on:keypress="{closeSearchBar()}">
    </div>
</div>
