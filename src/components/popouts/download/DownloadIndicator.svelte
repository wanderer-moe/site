<script>
import { onMount } from 'svelte'
import { cubicOut, quintOut } from 'svelte/easing'
import { fly } from 'svelte/transition'
import { fixCasing } from '@/lib/helpers/casing/fixCasing.js'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'

let statusText = ''
let downloadProgress = ''
let minimized = false
let progressPercentage = 0
let downloadCancelled = false

let downloadErrored = false

const errors = []

export let game, asset, selectedItems, selected, images, closeDownload

async function downloadFiles(selected = false) {
    let zip = new JSZip()
    let folder = zip.folder(`${game}-${asset}-${selected ? 'selected' : 'all'}`)
    let progress = 0
    let totalSize = 0
    let items = selected ? selectedItems : images
    statusText = `Downloading ${selected ? 'selected' : 'all'} ${fixCasing(
        game
    )} ${fixCasing(asset)} files.`

    for (const item of items) {
        if (downloadCancelled) return

        try {
            const response = await fetch(item.path, {
                method: 'GET',
                headers: {
                    Origin: 'https://wanderer.moe',
                },
            })
            const blob = await response.blob()
            folder.file(`${item.name}.png`, blob)
            progress += 1
            totalSize += item.size
            progressPercentage = (progress / items.length) * 100
            downloadProgress = `Downloaded ${progress}/${items.length} files`
        } catch (error) {
            errors.push('Error downloading file: ' + item.path + ' ' + error)
            console.error('Error downloading file:', item.path, error)
        }
    }

    if (downloadCancelled) return

    try {
        const content = await zip.generateAsync({ type: 'blob' })
        saveAs(content, `${game}-${asset}-${selected ? 'selected' : 'all'}.zip`)

        if (progress < items.length) {
            downloadErrored = true
            statusText = `Downloaded ${
                selected ? 'selected' : 'all'
            } ${fixCasing(game)} ${fixCasing(asset)} files - with ${
                items.length - progress
            } errors.`
            setTimeout(closeDownload, 30000)
        } else {
            statusText = `Downloaded ${
                selected ? 'selected' : 'all'
            } ${fixCasing(game)} ${fixCasing(asset)} files.`
            setTimeout(closeDownload, 5000)
        }

        minimized = false
    } catch (error) {
        console.error(error)
        statusText = `Error downloading ${fixCasing(game)} ${
            selected ? 'selected' : 'all'
        } files.`
        minimized = false
        setTimeout(closeDownload, 5000)
    }
}

function copyErrors() {
    const errorsString = errors
        .map((error, i) => `${i + 1}. ${error}`)
        .join('\n')
    navigator.clipboard.writeText(errorsString)
}

function toggleMinimize() {
    minimized = !minimized
}

function cancelDownload() {
    downloadCancelled = true
    closeDownload()
}

onMount(async () => {
    downloadFiles(selected)
})
</script>

{#if !minimized}
    <div
        class="fixed bottom-0 z-30 w-full sm:w-auto"
        in:fly="{{ y: 15, easing: quintOut, duration: 200 }}"
        out:fly="{{ y: 10, easing: cubicOut, duration: 200 }}">
        <div class="relative z-50">
            <div
                class="relative m-2 transform overflow-hidden rounded-md border border-main-300 bg-main-500 text-left transition-all">
                <div class="bg-main-500 p-4">
                    <div class="sm:flex sm:items-start">
                        <div class="text-center sm:text-left">
                            <p class="pt-4 font-semibold text-white">
                                {statusText}
                            </p>
                            <div
                                class="absolute right-2 top-2 flex flex-row gap-2 text-white">
                                <button on:click="{toggleMinimize}">
                                    <i class="fa fa-minus"></i>
                                </button>
                                <button on:click="{cancelDownload}">
                                    <i class="fas fa-xmark"></i>
                                </button>
                            </div>
                            <p class="text-xs font-semibold text-gray-400">
                                {downloadProgress}
                            </p>
                            <p class="my-2 text-xs font-semibold text-red-200">
                                Don't leave this page while files are
                                downloading, or the download will be cancelled!
                            </p>
                            <div class="mt-2">
                                <div
                                    class="mt-1 h-2.5 w-full rounded-full bg-gray-700">
                                    <div
                                        class="h-2.5 rounded-full bg-accent-200"
                                        style="width: {progressPercentage}%">
                                    </div>
                                </div>
                            </div>
                            {#if downloadErrored}
                                <button
                                    class="btn mt-2 w-full"
                                    on:click="{copyErrors}">
                                    Copy Error Logs
                                </button>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

{#if minimized}
    <div class="fixed bottom-0 z-30 ml-2">
        <div class="rounded-t-md border border-main-300 bg-main-500 p-2">
            <button on:click="{toggleMinimize}">
                <i class="fa fa-arrow-up text-white"></i>
            </button>
        </div>
    </div>
{/if}
