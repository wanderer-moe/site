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

// TODO: seperate function into downloadFIles.js
// handling multiple files
async function downloadFiles(selected = false) {
    let zip = new JSZip()
    let folder = zip.folder(`${game}-${asset}-${selected ? 'selected' : 'all'}`)
    let progress = 0
    let startTime = performance.now()
    let totalSize = 0
    let items = selected ? selectedItems : images
    statusText = `Downloading ${fixCasing(game)} ${fixCasing(asset)} files`

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
            console.log(error)
        }
    }

    if (downloadCancelled) return

    try {
        const content = await zip.generateAsync({ type: 'blob' })
        saveAs(content, `${game}-${asset}-${selected ? 'selected' : 'all'}.zip`)
        statusText = `Downloaded ${selected ? 'selected' : 'all'} ${fixCasing(
            game
        )} files as a ZIP.`
        minimized = false
        setTimeout(closeDownload, 5000) // automatically close after 5s
    } catch (error) {
        console.log(error)
        statusText = `Error downloading ${fixCasing(game)} ${
            selected ? 'selected' : 'all'
        } files as a ZIP.`
        minimized = false
        setTimeout(closeDownload, 5000) // close after 5s
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
    <!-- TODO: fix scaling -->
    <div
        class="fixed bottom-0 left-0 z-30 ml-7"
        in:fly="{{ y: 50, easing: quintOut, duration: 750 }}"
        out:fly="{{ y: 50, easing: cubicOut, duration: 300 }}">
        <div class="relative z-50">
            <div
                class="relative transform overflow-hidden rounded-lg bg-main-500 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-main-500 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <div
                            class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent-100/50 sm:mx-0 sm:h-10 sm:w-10">
                            <i class="fa fa-download text-accent-300"></i>
                        </div>
                        <div
                            class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <p
                                class="text-lg font-semibold leading-6 text-white">
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
                            <p
                                class="text-sm font-semibold leading-6 text-gray-400">
                                {downloadProgress}
                            </p>
                            <div class="mt-2">
                                <div
                                    class="h-2.5 w-full rounded-full bg-gray-700">
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
