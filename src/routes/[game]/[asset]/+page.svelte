<script>
import { browser } from '$app/environment'
import Faq from '@/components/popouts/Faq.svelte'
import LoadPlaceHolder from '@/components/LoadPlaceHolder.svelte'
import ViewImage from '@/components/popouts/ViewImage.svelte'
import { bytesToFileSize } from '@/lib/helpers/asset/bytesToFileSize.js'
import { fixCasing } from '@/lib/helpers/casing/fixCasing.js'
import {
    formatDateReadable,
    formatTimeAgo,
} from '@/lib/helpers/timeConvertion/isoFormat.js'
import { onMount } from 'svelte'
import { t } from 'svelte-i18n'
import Lazy from 'svelte-lazy'
import { fade } from 'svelte/transition'
import { sortAssets } from '@/lib/utils/sort/sortAssets'
import DownloadIndicator from '@/components/popouts/download/DownloadIndicator.svelte'

// TODO: clean up, e.g. seperate dropdown & download into its own components...

// destructure data object
export let data
const { game, asset, images, lastUploaded } = data

// initialize variables
let isFaqOpen = false
let sortOptionMenu
let imageDoubleClicked = false
let selectedItems = []
let filteredImages = images
let query = ''
let selected = false
let downloadingMultiple = false
let imageUrl = ''
let imageTitle = ''
let imageFileSize = ''
let totalImagesSizeHumanReadable = '?'
let selectedFilesSize = 0

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

// TODO: seperate filtering functions
// update filtered images based on search query and sorting option
function updateFilter() {
    const hyphenatedQuery = query.toLowerCase().replace(/\s+/g, '-')
    filteredImages = images.filter((image) => {
        return image.name.toLowerCase().includes(hyphenatedQuery)
    })
    filteredImages = sortAssets(filteredImages, selectedSortingOption)
}

// handle search input
function handleInput(event) {
    query = event.target.value
    updateFilter()
}

onMount(() => {
    const totalImagesSize = images.reduce((acc, image) => {
        return acc + image.size
    }, 0)

    totalImagesSizeHumanReadable = bytesToFileSize(totalImagesSize)
    updateFilter()
})

function downloadFiles(selectedOpt) {
    downloadingMultiple = true
    selected = selectedOpt
}

$: console.log(selectedItems)
</script>

<svelte:head>
    <title>{fixCasing(asset)} ({fixCasing(game)}) | wanderer.moe</title>
</svelte:head>

{#if imageDoubleClicked}
    <ViewImage
        imageUrl="{imageUrl}"
        imageTitle="{imageTitle}"
        imageFileSize="{imageFileSize}"
        closeImageView="{() => (imageDoubleClicked = false)}" />
{/if}

{#if downloadingMultiple}
    <DownloadIndicator
        game="{game}"
        asset="{asset}"
        images="{images}"
        selectedItems="{selectedItems}"
        selected="{selected}"
        closeDownload="{() => (downloadingMultiple = false)}" />
{/if}

<div class="min-h-screen">
    <div class="mb-8">
        <div class="relative">
            <img
                src="https://cdn.wanderer.moe/{game}/cover.png"
                class="absolute inset-0 h-48 w-full object-cover transition ease-in-out"
                style="object-position: 50% 20%;"
                alt="cover" />
            <div
                class="relative h-48 bg-gradient-to-t from-main-400 to-main-400/50">
                <div
                    class="mx-auto px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                    <div
                        class="flex flex-col items-center justify-between xl:flex-row">
                        <div class="">
                            <div class="mb-4">
                                <p
                                    class="max-w-xl text-sm font-semibold text-white">
                                    {$t('details.lastUpdated', {
                                        values: {
                                            date: formatDateReadable(
                                                lastUploaded.uploaded
                                            ),
                                        },
                                    })}
                                </p>
                                <p
                                    class="flex max-w-lg items-start text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    {fixCasing(game)}
                                    <i
                                        class="fa fa-info-circle ml-2 cursor-pointer text-sm"
                                        on:keypress="{() =>
                                            (isFaqOpen = !isFaqOpen)}"
                                        on:click="{() =>
                                            (isFaqOpen = !isFaqOpen)}"></i>
                                </p>
                                <p
                                    class="max-w-xl text-xl font-semibold text-white">
                                    {fixCasing(asset)}
                                </p>
                            </div>
                            <p
                                class="max-w-xl text-sm font-semibold text-white">
                                {$t('asset.info')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-2 md:px-12 lg:px-24">
            <div>
                <div class="mb-2 rounded-md bg-main-500 p-4">
                    <div
                        class="mb-2 flex w-full flex-col items-center justify-center gap-4">
                        <div class="w-full rounded-md text-white">
                            <input
                                class="h-14 w-full rounded-md border border-main-400 bg-main-700 p-1 text-accent-500 transition-colors duration-150 hover:border-main-300 hover:bg-main-600 focus:bg-main-600"
                                placeholder="&#x1F50D; {$t('asset.searchBar')}"
                                on:input="{handleInput}"
                                bind:value="{query}" />
                        </div>

                        <div class="w-full rounded-md text-white">
                            <div
                                class="flex flex-wrap items-center justify-center gap-1 text-sm">
                                <!-- TODO: placement, hide downloadselected if no images are selected -->
                                {#if selectedItems.length >= 1}
                                    <button
                                        on:click="{() => downloadFiles(true)}"
                                        class="rounded-md bg-accent-500 px-2.5 py-2.5 font-semibold text-white hover:bg-accent-600 focus:shadow focus:outline-none {$t(
                                            'direction'
                                        )}">
                                        <i class="fa-solid fa-download"></i>
                                        {#if selectedItems.length >= 1}
                                            {$t('asset.downloadSelectedSize', {
                                                values: {
                                                    size: bytesToFileSize(
                                                        selectedFilesSize
                                                    ),
                                                },
                                            })}
                                        {:else}
                                            {$t('asset.downloadSelected')}
                                        {/if}
                                    </button>
                                {/if}
                                <button
                                    on:click="{() => downloadFiles(false)}"
                                    class="rounded-md bg-accent-500 px-2.5 py-2.5 font-semibold text-white hover:bg-accent-600 focus:shadow focus:outline-none {$t(
                                        'direction'
                                    )}">
                                    <i class="fa-solid fa-download"></i>
                                    {$t('asset.downloadAllSize', {
                                        values: {
                                            size: totalImagesSizeHumanReadable,
                                        },
                                    })}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center text-lg font-semibold text-white">
                    {$t('asset.main', {
                        values: {
                            filteredImagesCount: filteredImages.length,
                            imagesCount: images.length,
                            selectedItemsCount: selectedItems.length,
                        },
                    })}
                </div>
            </div>

            <!-- asset containers -->

            <div class="mt-8">
                {#if filteredImages.length > 0}
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <!-- TODO: limit how many files are shown at once before more are displayed.. -->
                        {#each filteredImages as image}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <div
                                class="relative flex cursor-pointer items-center rounded-md border-[3px] bg-main-500 p-3 font-semibold text-gray-400 transition-colors duration-150 hover:border-main-300 {selectedItems.includes(
                                    image
                                )
                                    ? '!border-accent-400'
                                    : 'border-main-400'}"
                                on:click="{(event) => {
                                    if (!event.target.closest('button')) {
                                        // check if the click was on the download button
                                        if (selectedItems.includes(image)) {
                                            selectedFilesSize -= image.size
                                            selectedItems =
                                                selectedItems.filter(
                                                    (item) => item !== image
                                                )
                                        } else {
                                            selectedItems = [
                                                ...selectedItems,
                                                image,
                                            ]
                                            selectedFilesSize += image.size
                                        }
                                    }
                                }}">
                                <Lazy
                                    height="{128}"
                                    placeholder="{LoadPlaceHolder}"
                                    fadeOption="{{
                                        delay: 100,
                                        duration: 1000,
                                    }}">
                                    <img
                                        id="assetimg"
                                        class="max-w-32 h-32 max-h-32 w-32 object-contain object-left p-1"
                                        src="{image.path}"
                                        alt="{image.name}"
                                        on:dblclick="{() => {
                                            imageDoubleClicked = true
                                            imageUrl = `${image.path}`
                                            imageTitle = `${image.name}`
                                            imageFileSize = `${image.size}`
                                        }}" />
                                </Lazy>
                                <div class="p-2">
                                    <div class="whitespace-normal break-all">
                                        <div class="flex items-center">
                                            <p
                                                class="mr-2 text-left text-sm lowercase text-white">
                                                {image.name.replace('.png', '')}
                                            </p>
                                        </div>
                                        <p class="text-xs font-bold uppercase">
                                            {image.name.includes('fanmade')
                                                ? `${$t('asset.fanmadeAsset')}`
                                                : `${$t(
                                                      'asset.officialAsset'
                                                  )}`}
                                        </p>
                                        <p class="text-xs uppercase">
                                            {$t('details.dateUploaded', {
                                                values: {
                                                    date: formatTimeAgo(
                                                        image.uploaded
                                                    ),
                                                },
                                            })}
                                        </p>
                                        <a
                                            href="https://cdn.wanderer.moe/{game}/{asset}/{image.name}.png"
                                            rel="noreferrer"
                                            target="_blank"
                                            download>
                                            <button
                                                class="btn p-2"
                                                onclick="{(event) => {
                                                    event.stopPropagation()
                                                }}">
                                                <i
                                                    class="fa-solid fa-download mr-1"
                                                ></i>
                                                {$t('asset.downloadSize', {
                                                    values: {
                                                        size: bytesToFileSize(
                                                            image.size
                                                        ),
                                                    },
                                                })}
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                {/if}

                {#if filteredImages.length == 0}
                    <div
                        class="flex flex-col items-center justify-center"
                        in:fade="{{ duration: 200, delay: 100 }}">
                        <p class="text-2xl text-white">
                            {$t('asset.nothingFound', { values: { query } })}
                        </p>
                        <p class="text-sm text-gray-400">
                            {$t('asset.nothingFoundSuggestions')}
                        </p>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>

{#if isFaqOpen}
    <Faq closeFAQ="{() => (isFaqOpen = false)}" />
{/if}
