<script>
import axios from 'axios'
import { onMount } from 'svelte'
import { t } from 'svelte-i18n'
import { cubicOut, quintOut } from 'svelte/easing'
import { fly } from 'svelte/transition'
import { filterGamesSearchBar as filterGames } from '@/lib/utils/filterSearch'
import { fixCasing } from '@/lib/utils/helpers'
export let query = ''
export let closeSearchBar
let inputElement
let visible = ''
let allGames = []

async function getGames() {
    const response = await axios
        .get('https://api.wanderer.moe/games')
        .then((response) => {
            allGames = response.data
        })
}

onMount(() => {
    getGames().then(() => {
        // console.log(allGames.games);
    })
})

$: filteredGames = filterGames(allGames.games, query)
// $: console.log(filteredGames);
</script>

<div bind:this="{visible}">
    <div
        class="fixed left-1/2 top-1/2 z-[1000] w-3/4 -translate-x-1/2 -translate-y-1/2 transform"
        in:fly="{{ y: 50, easing: quintOut, duration: 750 }}"
        out:fly="{{ y: 50, easing: cubicOut, duration: 300 }}">
        <button
            class="close-button absolute right-0 top-0 rounded-lg p-2 text-white"
            on:click="{closeSearchBar}">✕</button>
        <div class="mb-2 rounded-lg bg-main-500 p-2 text-white">
            <input
                disabled="{allGames.length == 0}"
                class="h-14 w-full rounded-lg bg-main-500 text-center text-accent-100 focus:shadow focus:outline-none {$t(
                    'direction'
                )}"
                placeholder="&#x1F50D; {$t('globalSearch.searchBar')}"
                bind:value="{query}"
                bind:this="{inputElement}" />
        </div>
        {#if filteredGames.length > 0}
            <div class="max-h-[350px] overflow-y-auto rounded-lg bg-main-500 p-2">
                <div class="search-results-list grid gap-1">
                    {#each filteredGames as game}
                        <div
                            class="rounded-lg bg-main-600 p-2 text-white hover:text-accent-100">
                            <!-- https://kit.svelte.dev/docs/link-options#data-sveltekit-reload -->
                            <a
                                on:click="{closeSearchBar()}"
                                rel="external"
                                href="{`/${game.gameName.replace(' ', '-')}/${
                                    game.subfolder
                                }`}">
                                <p class="text-sm">
                                    {fixCasing(game.gameName)}
                                </p>
                                <p>
                                    {fixCasing(game.subfolder)}
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
        on:click="{closeSearchBar()}"
        on:keypress="{closeSearchBar()}">
    </div>
</div>
