<script>
import { onMount } from 'svelte'
import { cubicOut, quintOut } from 'svelte/easing'
import { fly } from 'svelte/transition'
import { fixCasing } from '@/lib/helpers/casing/fixCasing.js'
import { saveAs } from 'file-saver'
import { bytesToFileSize } from '@/lib/helpers/asset/bytesToFileSize.js'
import JSZip from 'jszip'
// import { downloadFiles } from '@lib/utils/downloadFiles.js'

let statusText = ''
let downloadProgress = ''
let minimized = false
let progressPercentage = 0
let downloadCancelled = false

export let game, asset, selectedItems, selected, images, closeDownload

// TODO: seperate function into downloadFiles.js
// handling multiple files
async function downloadFiles(selected = false) {
    let zip = new JSZip()
    let folder = zip.folder(`${game}-${asset}-${selected ? 'selected' : 'all'}`)
    let progress = 0
    let startTime = performance.now()
    let totalSize = 0
    let items = selected ? selectedItems : images
    statusText = `Downloading ${selected ? 'selected' : 'all'} ${fixCasing(
        game
    )} ${fixCasing(asset)} files.`

    for (const item of items) {
        if (downloadCancelled) return

        try {
            const response = await fetch(item.path)
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
            progressPercentage = (progress / items.length) * 100
            downloadProgress = `Downloaded ${progress}/${
                items.length
            } files @ ${bytesToFileSize(speed)}/s`
        } catch (error) {
            console.error(error)
        }
    }

    if (downloadCancelled) return

    try {
        const content = await zip.generateAsync({ type: 'blob' })
        saveAs(content, `${game}-${asset}-${selected ? 'selected' : 'all'}.zip`)
        statusText = `Downloaded ${selected ? 'selected' : 'all'} ${fixCasing(
            game
        )} ${fixCasing(asset)} files.`
        minimized = false
        // setTimeout(closeDownload, 5000) // automatically close after 5s
    } catch (error) {
        console.error(error)
        statusText = `Error downloading ${fixCasing(game)} ${
            selected ? 'selected' : 'all'
        } files.`
        minimized = false
        // setTimeout(closeDownload, 5000) // close after 5s
    }
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
    <div class="fixed bottom-0 z-30 w-full sm:w-auto">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}
