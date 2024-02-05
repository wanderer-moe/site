<script>
import { bytesToFileSize } from '@/lib/helpers/asset/bytesToFileSize.js'
import { formatTimeAgo } from '@/lib/helpers/timeConvertion/isoFormat.js'
import Lazy from 'svelte-lazy'

import { t } from 'svelte-i18n'
import LoadPlaceHolder from './LoadPlaceHolder.svelte'

export let game
export let asset
export let image
export let selectedItems
export let selectedFilesSize
export let imageDoubleClicked
export let imageUrl
export let imageTitle
export let downloadingMultiple
export let imageFileSize

function toggleSelection(event) {
    if (!event.target.closest('button')) {
        // check if the click was on the download button
        if (selectedItems.includes(image)) {
            selectedFilesSize -= image.size
            selectedItems = selectedItems.filter((item) => item !== image)
        } else {
            selectedItems = [...selectedItems, image]
            selectedFilesSize += image.size
        }
    }
}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="relative flex cursor-pointer items-center rounded-md border-[3px] bg-main-500 p-3 font-semibold text-gray-400 transition-colors duration-150 hover:border-main-300 {selectedItems.includes(
        image
    )
        ? '!border-accent-400'
        : 'border-main-400'}"
    on:click="{toggleSelection}">
    <Lazy
        height="{128}"
        placeholder="{LoadPlaceHolder}"
        fadeOption="{{
            delay: 100,
            duration: 1000,
        }}">
        <img
            id="assetimg"
            class="h-32 max-h-32 w-32 max-w-32 object-contain object-left p-1"
            style="-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;"
            src="https://cdn.wanderer.moe/cdn-cgi/image/width=256,height=256,quality=75/{game}/{asset}/{image.name}.png"
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
            <div class="my-1">
                <p class="text-sm lowercase text-white">
                    {image.name.replace('.png', '').replaceAll('-', ' ').replaceAll('_', ' ')}
                </p>
                <p class="text-xs">
                    Uploaded {formatTimeAgo(image.uploaded)}
                </p>
            </div>
            <a
                href="https://cdn.wanderer.moe/{game}/{asset}/{image.name}.png"
                rel="noreferrer"
                target="_blank"
                download>
                <button
                    disabled="{downloadingMultiple}"
                    class="btn mt-2 w-full p-2.5 font-semibold transition md:w-auto
                    {downloadingMultiple
                        ? 'cursor-not-allowed opacity-70'
                        : ''}"
                    onclick="{(event) => {
                        event.stopPropagation()
                    }}">
                    <i class="fa-solid fa-download mr-1"></i>
                    {$t('asset.downloadSize', {
                        values: {
                            size: bytesToFileSize(image.size),
                        },
                    })}
                </button>
            </a>
        </div>
    </div>
</div>
