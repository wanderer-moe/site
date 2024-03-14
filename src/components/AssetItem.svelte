<script>
import { bytesToFileSize } from '@/lib/helpers/asset/bytesToFileSize.js'
import { formatTimeAgo } from '@/lib/helpers/timeConvertion/isoFormat.js'
import Lazy from 'svelte-lazy'

import { t } from 'svelte-i18n'
import LoadPlaceHolder from './LoadPlaceHolder.svelte'

export let game
export let asset
export let image
export let imagePreviewed
export let imageUrl
export let imageTitle
export let imageFileSize
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="relative rounded-md border-2 border-transparent bg-main-500 p-3 transition ease-in-out hover:cursor-pointer hover:border-main-300"
    on:click="{() => {
        imagePreviewed = true
        imageUrl = `${image.path}`
        imageTitle = `${image.name}`
        imageFileSize = `${image.size}`
    }}">
    <div class="align-center flex justify-center">
        <Lazy
            height="{144}"
            placeholder="{LoadPlaceHolder}"
            fadeOption="{{
                delay: 100,
                duration: 1000,
            }}">
            <img
                id="assetimg"
                class="h-36 max-h-36 w-36 max-w-36 object-contain p-1"
                src="https://cdn.wanderer.moe/cdn-cgi/image/width=192,height=192,quality=75/{game}/{asset}/{image.name}.png"
                alt="{image.name}" />
        </Lazy>
    </div>
    <div class="flex flex-col space-y-1 rounded-md bg-main-400 p-2">
        <p class="overflow-hidden overflow-ellipsis font-semibold text-white">
            {image.name}
        </p>
        <p
            class="flex justify-between text-xs
            text-white">
            {bytesToFileSize(image.size)}
            <span>{formatTimeAgo(image.uploaded)}</span>
        </p>
        <a
            href="{image.path}"
            rel="noreferrer"
            target="_blank"
            download
            on:click="{(e) => e.stopPropagation()}">
            <button class="btn mt-2 w-full font-semibold">
                <i class="fas fa-download mr-2"></i> Download
            </button>
        </a>
    </div>
</div>
