<script>
import { browser } from '$app/environment'
import ViewImage from '@/components/popouts/ViewImage.svelte'
import { fixCasing } from '@/lib/helpers/casing/fixCasing.js'
import AssetItem from '@/components/AssetItem.svelte'
import { formatDateReadable } from '@/lib/helpers/timeConvertion/isoFormat.js'
import { onMount } from 'svelte'
import { t } from 'svelte-i18n'
import { fade } from 'svelte/transition'
import { sortAssets } from '@/lib/utils/sort/sortAssets'
import AssetSortDropdown from '@/components/dropdowns/AssetSortDropdown.svelte'

import { page } from '$app/stores'

const SearchQuery = $page.url.searchParams.get('query')

// TODO: clean up, e.g. seperate dropdown & download into its own components...

// destructure data object
export let data
const { game, asset, images, lastUploaded } = data

// initialize variables
let imagePreviewed = false
let selectedItems = []
let filteredImages = images
let query = SearchQuery || ''
let imageUrl = ''
let imageTitle = ''
let imageFileSize = ''

// TODO: seperate sorting into its own component
export const sortingOptions = [
    { name: 'dateNewest', text: $t('details.sortByUploaded') },
    { name: 'dateOldest', text: $t('details.sortByUploadedReverse') },
    { name: 'fileSizeStoL', text: $t('details.sortBySize') },
    { name: 'fileSizeLtoS', text: $t('details.sortBySizeReverse') },
    { name: 'nameAtoZ', text: $t('details.sortByAlphabetical') },
    { name: 'nameZtoA', text: $t('details.sortByAlphabeticalReverse') },
]
let selectedSortingOption = sortingOptions[0]

// check if selectedSortedOption exists in localstorage
if (browser) {
    const storedOption = localStorage.getItem('selectedSortingOption')
    selectedSortingOption = storedOption
        ? JSON.parse(storedOption)
        : sortingOptions[0]
    updateFilter()
}

// change sorting option
function changeSort(option) {
    selectedSortingOption = option
    if (browser) {
        localStorage.setItem(
            'selectedSortingOption',
            JSON.stringify(selectedSortingOption)
        )
    }
    updateFilter()
}

function updateFilter() {
    const url = new URL(window.location.href)
    const hyphenatedQuery = query.toLowerCase().replace(/\s+/g, '-')
    if (query) {
        url.searchParams.set('query', hyphenatedQuery)
    } else if (url.searchParams.has('query')) {
        url.searchParams.delete('query')
    }
    window.history.replaceState({}, '', url)
    filteredImages = images.filter((image) => {
        return image.name.toLowerCase().includes(hyphenatedQuery)
    })
    filteredImages = sortAssets(filteredImages, selectedSortingOption)
}

function handleInput(event) {
    query = event.target.value
    updateFilter()
}

onMount(() => {
    updateFilter()
})
</script>

<svelte:head>
    <title>{fixCasing(asset)} ({fixCasing(game)}) | wanderer.moe</title>
</svelte:head>

{#if imagePreviewed}
    <ViewImage
        {imageUrl}
        {imageTitle}
        {imageFileSize}
        closeImageView="{() => (imagePreviewed = false)}" />
{/if}

<div class="min-h-screen">
    <div class="mb-8">
        <div class="relative z-0">
            <img
                src="https://cdn.wanderer.moe/{game}/cover.png"
                class="absolute inset-0 h-48 w-full object-cover transition ease-in-out"
                style="object-position: 50% 20%;"
                alt="cover" />
            <div
                class="relative flex h-48 items-center justify-center bg-gradient-to-t from-main-400 to-main-400/50">
                <div class="flex flex-col items-center text-center">
                    <h2 class="text-3xl font-bold text-white">
                        {fixCasing(game)}
                        {fixCasing(asset)}
                    </h2>
                    <p class="text-sm font-semibold text-white">
                        {$t('details.lastUpdated', {
                            values: {
                                date: formatDateReadable(lastUploaded.uploaded),
                            },
                        })}
                    </p>
                </div>
            </div>
        </div>
        <div class="relative z-10 px-2 md:px-12 lg:px-24">
            <div>
                <div class="mb-2 rounded-md bg-main-500 p-4">
                    <div
                        class="mb-2 flex w-full flex-col items-center justify-center gap-4">
                        <div class="grid w-full gap-1 rounded-md text-white">
                            <input
                                class="h-14 w-full rounded-md border border-main-400 bg-main-700 p-1 text-accent-300 transition-colors duration-150 hover:border-main-300 hover:bg-main-600 focus:bg-main-600"
                                placeholder="&#x1F50D; {$t('asset.searchBar')}"
                                on:input="{handleInput}"
                                bind:value="{query}" />
                            <AssetSortDropdown
                                bind:selectedSortingOption
                                {changeSort}
                                {sortingOptions} />
                        </div>
                    </div>
                </div>
                <div
                    class="mb-2 flex justify-between rounded-md bg-main-500 p-4 text-center font-semibold text-white">
                    <p>
                        {images.length} assets total
                    </p>
                    <p>
                        {filteredImages.length} assets displayed
                    </p>
                </div>
            </div>

            <div class="mt-8">
                {#if filteredImages.length > 0}
                    <div
                        class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                        <!-- TODO: limit how many files are shown at once before more are displayed.. -->
                        {#each filteredImages as image}
                            <AssetItem
                                {game}
                                {asset}
                                {image}
                                bind:imagePreviewed
                                bind:imageUrl
                                bind:imageTitle
                                bind:imageFileSize />
                        {/each}
                    </div>
                {/if}

                {#if filteredImages.length == 0}
                    <div
                        class="flex flex-col items-center justify-center text-center"
                        in:fade="{{ duration: 200, delay: 100 }}">
                        <p class="text-2xl text-white">
                            {$t('asset.nothingFound', { values: { query } })}
                        </p>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
