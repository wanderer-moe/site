<script>
import { browser } from '$app/environment'
import Faq from '@/components/Faq.svelte'
import LoadPlaceHolder from '@/components/LoadPlaceHolder.svelte'
import ViewImage from '@/components/ViewImage.svelte'
import {
    bytesToFileSize,
    fixCasing,
    formatDateReadable,
    iso8601ToUnix,
} from '@/lib/utils/helpers'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import { onMount } from 'svelte'
import { t } from 'svelte-i18n'
import Lazy from 'svelte-lazy'

// TODO: this is a mess, clean it up

// destructure data object
export let data
const { game, asset, images, lastUploaded } = data

// initialize variables
let isFaqOpen = false
let sortOptionMenu
let sortMenuOpen = false
let isMobile = false
let imageDoubleClicked = false
let selectedItems = []
let filteredImages = images
let query = ''
let imageUrl = ''
let imageTitle = ''
let imageFileSize = ''
let statusText = ''
let totalImagesSizeHumanReadable = '?'
let selectedFilesSize = 0

// sorting options
const sortingOptions = [
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

// toggle sort dropdown
function toggleSortDropdown() {
    sortOptionMenu.classList.toggle('hidden')
    sortMenuOpen = !sortMenuOpen
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

// sort images based on selected sorting option
function sortImages(images) {
    switch (selectedSortingOption.name) {
        case 'fileSizeStoL':
            return images.sort((a, b) => a.size - b.size)
        case 'fileSizeLtoS':
            return images.sort((a, b) => b.size - a.size)
        case 'nameAtoZ':
            return images.sort((a, b) => a.name.localeCompare(b.name))
        case 'nameZtoA':
            return images.sort((a, b) => b.name.localeCompare(a.name))
        case 'dateNewest':
            return images.sort((a, b) => {
                const dateA = iso8601ToUnix(a.uploaded)
                const dateB = iso8601ToUnix(b.uploaded)
                return dateB - dateA
            })
        case 'dateOldest':
            return images.sort((a, b) => {
                const dateA = iso8601ToUnix(a.uploaded)
                const dateB = iso8601ToUnix(b.uploaded)
                return dateA - dateB
            })
        default:
            return images
    }
}

// update filtered images based on search query and sorting option
function updateFilter() {
    const hyphenatedQuery = query.toLowerCase().replace(/\s+/g, '-')
    filteredImages = images.filter((image) => {
        return image.name.toLowerCase().includes(hyphenatedQuery)
    })
    filteredImages = sortImages(filteredImages)
}

// handle search input
function handleInput(event) {
    query = event.target.value
    updateFilter()
}

// handling multiple files
async function downloadFiles(selected = false) {
    let zip = new JSZip()
    let folder = zip.folder(`${game}-${asset}-${selected ? 'selected' : 'all'}`)
    let progress = 0
    let startTime = performance.now()
    let totalSize = 0
    let items = selected ? selectedItems : images
    for (const item of items) {
        try {
            const response = await fetch(
                `https://cdn.wanderer.moe/${game}/${asset}/${item.name}.png`
            )
            const blob = await response.blob()
            folder.file(`${item.name}.png`, blob)
            progress += 1
            totalSize += item.size
            let elapsedTime = (performance.now() - startTime) / 1000
            let speed = totalSize / elapsedTime
            let speeds = []
            speeds.push(speed)
            if (speeds.length > 5) {
                speeds.shift()
            }
            speed = speeds.reduce((a, b) => a + b, 0) / speeds.length
            statusText = `Downloaded ${progress}/${
                items.length
            } files @ ${bytesToFileSize(speed)}/s`
        } catch (error) {
            console.log(error)
        }
    }

    try {
        const content = await zip.generateAsync({ type: 'blob' })
        saveAs(content, `${game}-${asset}-${selected ? 'selected' : 'all'}.zip`)
        statusText = `Downloaded ${
            selected ? 'selected' : 'all'
        } files as a ZIP.`
    } catch (error) {
        console.log(error)
        statusText = `Error downloading ${
            selected ? 'selected' : 'all'
        } files as a ZIP.`
    }
}

onMount(() => {
    if (window.innerWidth < 500) {
        isMobile = true
    }

    const totalImagesSize = images.reduce((acc, image) => {
        return acc + image.size
    }, 0)

    totalImagesSizeHumanReadable = bytesToFileSize(totalImagesSize)
    updateFilter()
})
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
            <div
                class="mt-8 flex w-full flex-col items-center justify-center gap-4 rounded-md bg-main-500 p-4">
                <div class="w-full rounded-md text-white">
                    <div
                        class="relative flex h-14 w-full cursor-pointer select-none items-center justify-center rounded-xl bg-main-400"
                        on:keypress="{toggleSortDropdown}"
                        on:click="{toggleSortDropdown}">
                        <span class="text-white"
                            >{$t('details.sortBy')}: {selectedSortingOption.text}</span>
                        <div
                            class="absolute bottom-8 hidden w-full"
                            bind:this="{sortOptionMenu}">
                            <div
                                class="mb-6 grid grid-cols-1 rounded-xl bg-main-600 py-2">
                                {#each sortingOptions as sortingOption}
                                    <div
                                        class="flex items-center justify-center"
                                        on:keypress="{() =>
                                            changeSort(sortingOption)}"
                                        on:click="{() =>
                                            changeSort(sortingOption)}">
                                        <span
                                            class="cursor-pointer hover:text-white {sortingOption ==
                                            selectedSortingOption
                                                ? 'text-white'
                                                : 'text-gray-400'}"
                                            >{sortingOption.text}</span>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full rounded-md text-white">
                    <input
                        class="h-14 w-full rounded-md bg-main-400 text-center text-accent-400 focus:shadow focus:outline-none {$t(
                            'direction'
                        )}"
                        placeholder="&#x1F50D; {$t('asset.searchBar')}"
                        on:input="{handleInput}"
                        bind:value="{query}" />
                </div>

                <div class="w-full rounded-md text-white">
                    <div
                        class="flex flex-wrap items-center justify-center gap-1 text-sm">
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
                <div class="w-full rounded-md">
                    <p
                        class="text-center text-sm font-semibold text-gray-400 {$t(
                            'direction'
                        )}">
                        {$t('asset.main', {
                            values: {
                                filteredImagesCount: filteredImages.length,
                                imagesCount: images.length,
                                selectedItemsCount: selectedItems.length,
                            },
                        })}
                    </p>
                    {#if isMobile}
                        <p
                            class="mt-2 text-center text-sm text-red-100 {$t(
                                'direction'
                            )}">
                            {$t('asset.onMobile')}
                        </p>
                    {/if}
                    {#if statusText !== ''}
                        <p
                            class="mt-2 text-center text-sm text-gray-400 {$t(
                                'direction'
                            )}">
                            {statusText}
                        </p>
                    {/if}
                </div>
            </div>
            <!-- asset containers -->
            <div class="mt-8">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                                        selectedItems = selectedItems.filter(
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
                                fadeOption="{{ delay: 100, duration: 1000 }}">
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
                                <div class="">
                                    <div class="whitespace-normal break-all">
                                        <div class="flex items-center">
                                            <p
                                                class="mr-2 text-left text-sm lowercase text-white">
                                                {image.name.replace('.png', '')}
                                            </p>
                                        </div>
                                    </div>
                                    <p
                                        class="text-xs font-bold uppercase {$t(
                                            'direction'
                                        )}">
                                        {image.name.includes('fanmade')
                                            ? `${$t('asset.fanmadeAsset')}`
                                            : `${$t('asset.officialAsset')}`}
                                    </p>
                                    <p
                                        class="text-xs uppercase {$t(
                                            'direction'
                                        )}">
                                        {$t('details.dateUploaded', {
                                            values: {
                                                date: formatDateReadable(
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
                                            class="mt-2 rounded-md bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-600 focus:shadow focus:outline-none {$t(
                                                'direction'
                                            )}"
                                            onclick="{(event) => {
                                                event.stopPropagation()
                                            }}">
                                            <i
                                                class="fa-solid fa-download {$t(
                                                    'direction'
                                                )}"></i>
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

                {#if filteredImages.length == 0}
                    <div class="flex flex-col items-center justify-center">
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
