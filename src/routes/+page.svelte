<style lang="postcss">
.fade-in {
    animation: fadeIn 0.2s forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>

<script lang="ts">
import { replaceStateWithQuery } from '@/lib/helpers/replaceStateWithQuery'
import { t } from 'svelte-i18n'
import AssetItem from '@/components/AssetItem.svelte'
import { cubicOut, quintOut } from 'svelte/easing'
import { onMount } from 'svelte'
import type { AcceptableParams } from '@/lib/types/acceptableParams'
import { fixCasing } from '@/lib/helpers/casing/fixCasing'
import { writable } from 'svelte/store'

export let data
const { games, recent } = data
let { results } = data

let selectedGames = writable([])
let selectedAssetCategories = writable([])
const allAssetCategories = []
let validAssetCategories = []

let focusedImageElement: HTMLImageElement
let searchInput: HTMLInputElement
let focusedImage = 'honkai-star-rail'
let isFading = false
let nextImage = ''

let showResults = false
if (results) {
    showResults = true
}

function getAssetCategoriesFromGames() {
    games.forEach((game) => {
        game.assetCategories.forEach((category) => {
            if (!allAssetCategories.includes(category)) {
                console.log('pushing', category)
                allAssetCategories.push(category)
            }
        })
    })
    console.log('allAssetCategories', allAssetCategories)
}

function getValidAssetCategoriesFromGames() {
    validAssetCategories = []
    games.forEach((game) => {
        if ($selectedGames.includes(game.name)) {
            game.assetCategories.forEach((category) => {
                if (!validAssetCategories.includes(category)) {
                    validAssetCategories.push(category)
                }
            })
        }
    })
    $selectedAssetCategories = $selectedAssetCategories.filter((category) =>
        validAssetCategories.includes(category)
    )
    console.log('validAssetCategories', validAssetCategories)
}

onMount(() => {
    showResults = false
    const params = new URLSearchParams(window.location.search)
    const { query, game, asset } = Object.fromEntries(
        params.entries()
    ) as AcceptableParams
    console.log(query, game, asset)
    if (query) {
        searchInput.value = query
        makeRequest()
    }
    if (game) {
        const gameArray = game.split(',') as string[]
        gameArray.forEach((game) => {
            $selectedGames.push(game)
        })
        getValidAssetCategoriesFromGames()
    }
})

function makeRequest() {
    fetch(
        `https://v2-api-testing.wanderer.moe/search?${new URLSearchParams({
            query: searchInput.value.replace(/ /g, '-') || '',
            game: $selectedGames.join(',') || '',
            asset: $selectedAssetCategories.join(',') || '',
        })}`
    )
        .then((res) => res.json())
        .then((res) => {
            data = res
            showResults = true
            console.log(res)
            results = res.results
        })
}

function searchForAssets() {
    console.log(searchInput.value, $selectedGames, $selectedAssetCategories)
    replaceStateWithQuery({
        query: searchInput.value.replace(/ /g, '-') || '',
        game: $selectedGames.join(',') || '',
        asset: $selectedAssetCategories.join(',') || '',
    })
    makeRequest()
}

function handleImageChange(newImage: string) {
    nextImage = newImage
    focusedImageElement.src = `https://cdn.wanderer.moe/${newImage}/cover.png`
    isFading = true
}

getAssetCategoriesFromGames()
</script>

<svelte:head>
    <title>wanderer.moe</title>
</svelte:head>

<div class="min-h-screen">
    <div class="mb-8">
        <div class="px-2 md:px-12 lg:px-48">
            <div class="relative my-8">
                <img
                    src="https://cdn.wanderer.moe/{focusedImage}/cover.png"
                    class="absolute inset-0 h-48 w-full rounded-md object-cover"
                    style="object-position: 50% 20%;"
                    alt="{focusedImage} cover" />
                <img
                    src=""
                    class="absolute inset-0 h-48 w-full rounded-md object-cover opacity-0"
                    style="object-position: 50% 20%;"
                    bind:this="{focusedImageElement}"
                    alt=""
                    class:fade-in="{isFading}"
                    on:animationend="{() => {
                        if (isFading) {
                            focusedImage = nextImage
                            isFading = false
                        }
                    }}" />
                <div class="relative h-48 rounded-md bg-main-400/50">
                    <div
                        class="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                        <div
                            class="flex flex-col items-center justify-between xl:flex-row">
                            <div>
                                <h1
                                    class="max-w-lg text-3xl font-bold text-white sm:text-4xl sm:leading-none">
                                    wanderer.moe
                                </h1>
                                <h2 class="max-w-xl text-xl text-white">
                                    {$t('home.description')}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div class="flex gap-2">
                        <input
                            type="text"
                            bind:this="{searchInput}"
                            placeholder="Search"
                            class="mb-4 w-full rounded-md bg-main-500 px-4 py-4 text-lg text-white hover:ring-2 hover:ring-main-300 focus:outline-none focus:ring-2 focus:ring-main-300" />
                        <button
                            class="mb-4 flex items-center rounded-md bg-main-500 px-4 py-2 text-lg text-white hover:ring-2 hover:ring-main-300 focus:outline-none focus:ring-2 focus:ring-main-300"
                            on:click="{searchForAssets}">
                            <i class="fas fa-search mr-2"></i>
                            Search</button>
                    </div>
                    <div class="mb-4 flex flex-wrap gap-2 overflow-x-auto">
                        {#each games as game}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div
                                class="flex items-center rounded-md border-[3px] {$selectedGames.includes(
                                    game.name
                                )
                                    ? 'border-main-300 grayscale-0'
                                    : 'border-main-400 grayscale-[50]'} bg-main-500 px-4 py-2.5 text-lg text-white transition-colors hover:cursor-pointer hover:border-main-300 hover:grayscale-0 focus:outline-none"
                                on:click="{() => {
                                    handleImageChange(game.name)
                                    if (!$selectedGames.includes(game.name)) {
                                        selectedGames.update((games) => [
                                            ...games,
                                            game.name,
                                        ])
                                    } else {
                                        selectedGames.update((games) =>
                                            games.filter(
                                                (selectedGame) =>
                                                    selectedGame !== game.name
                                            )
                                        )
                                    }
                                    console.log($selectedGames)
                                    getValidAssetCategoriesFromGames()
                                }}">
                                <img
                                    src="{`https://cdn.wanderer.moe/${game.name}/icon.png`}"
                                    alt="{`${game.name} cover`}"
                                    class="mr-2 inline-block h-6 w-6 rounded-md" />
                                {fixCasing(game.name)}
                            </div>
                        {/each}
                    </div>
                    <div class="mb-8 flex flex-wrap gap-2 overflow-x-auto">
                        {#each allAssetCategories as asset}
                            {#if validAssetCategories.includes(asset)}
                                <!-- svelte-ignore a11y-click-events-have-key-events -->
                                <!-- svelte-ignore a11y-no-static-element-interactions -->
                                <div
                                    on:click="{() => {
                                        if (
                                            !$selectedAssetCategories.includes(
                                                asset
                                            )
                                        ) {
                                            selectedAssetCategories.update(
                                                (assets) => [...assets, asset]
                                            )
                                        } else {
                                            selectedAssetCategories.update(
                                                (assets) =>
                                                    assets.filter(
                                                        (selectedAsset) =>
                                                            selectedAsset !==
                                                            asset
                                                    )
                                            )
                                        }
                                        console.log($selectedAssetCategories)
                                    }}"
                                    class="rounded-md border-[3px] bg-main-500 px-4 py-2.5 text-lg text-white hover:border-main-300 {$selectedAssetCategories.includes(
                                        asset
                                    )
                                        ? 'border-main-300'
                                        : 'border-main-500'} cursor-pointer
                                
                                hover:border-main-300">
                                    {fixCasing(asset)}
                                </div>
                            {/if}
                        {/each}
                    </div>
                </div>
                {#await data}
                    <p>Loading...</p>
                {:then}
                    {#if !showResults}
                        <div id="lastUploaded" class="mb-8">
                            <p class="mb-4 text-2xl font-bold text-white">
                                Recently Uploaded
                            </p>
                            <div class="grid grid-cols-1 gap-7 lg:grid-cols-2">
                                {#each recent as asset}
                                    <AssetItem
                                        asset="{asset}"
                                        bind:focusedImage="{focusedImage}"
                                        handleImageChange="{handleImageChange}" />
                                {/each}
                            </div>
                        </div>
                    {:else}
                        <div id="searchResults" class="mb-8">
                            <p class="mb-4 text-2xl font-bold text-white">
                                Search Results
                            </p>
                            <div class="grid grid-cols-1 gap-7 lg:grid-cols-2">
                                {#each results as asset}
                                    <AssetItem
                                        asset="{asset}"
                                        bind:focusedImage="{focusedImage}"
                                        handleImageChange="{handleImageChange}" />
                                {/each}
                            </div>
                        </div>
                    {/if}
                {/await}
            </div>
        </div>
    </div>
</div>
