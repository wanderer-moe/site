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

export let data
const { games, recent } = data
let { results } = data

let focusedImageElement: HTMLImageElement
let focusedImage = 'honkai-star-rail'
let isFading = false
let searchInput: HTMLInputElement
let nextImage = ''
let showResults = false

if (results) {
    showResults = true
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
        focusedImage = game
        focusedImageElement.src = `https://cdn.wanderer.moe/${game}/cover.png`
    }
})

function makeRequest() {
    const searchQuery = searchInput.value.replace(/ /g, '-')
    if (!searchQuery) {
        showResults = false
        return
    }
    fetch(`https://v2-api-testing.wanderer.moe/search?query=${searchQuery}`)
        .then((res) => res.json())
        .then((res) => {
            data = res
            showResults = true
            results = res.results
        })
}

function handleInputChange() {
    replaceStateWithQuery({
        query: searchInput.value.replace(/ /g, '-'),
    })
    makeRequest()
}

function handleImageChange(newImage: string) {
    nextImage = newImage
    focusedImageElement.src = `https://cdn.wanderer.moe/${newImage}/cover.png`
    isFading = true
}
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
                    <input
                        type="text"
                        bind:this="{searchInput}"
                        placeholder="Search"
                        on:change="{handleInputChange}"
                        class="mb-4 w-full rounded-md bg-main-500 px-4 py-2 text-lg text-white hover:ring-2 hover:ring-main-300 focus:outline-none focus:ring-2 focus:ring-main-300" />
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
