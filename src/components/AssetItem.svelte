<script lang="ts">
import { bytesToFileSize } from '@/lib/helpers/asset/bytesToFileSize.js'
import { formatTimeAgo } from '@/lib/helpers/timeConvertion/isoFormat.js'
import Lazy from 'svelte-lazy'
import type { Asset } from '@/lib/types/asset'
import { t } from 'svelte-i18n'
import LoadPlaceHolder from './LoadPlaceHolder.svelte'
import { fixCasing } from '@/lib/helpers/casing/fixCasing'
import { mapGame } from '@/lib/helpers/casing/gameMapping'

export let asset: Asset
export let focusedImage: string
export let handleImageChange: (newImage: string) => void
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    role="button"
    tabindex="0"
    class="relative flex cursor-pointer items-center rounded-md border-[3px] border-main-500 bg-main-500 p-3 font-semibold text-gray-400 transition-colors duration-150 hover:border-main-300"
    on:mouseover="{() => {
        if (focusedImage !== asset.game) {
            handleImageChange(asset.game)
        }
    }}"
    on:focus="{() => {
        if (focusedImage !== asset.game) {
            handleImageChange(asset.game)
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
            class="max-w-28 h-28 max-h-28 w-28 object-contain object-left p-1"
            src="{asset.url}"
            alt="{asset.name}" />
    </Lazy>
    <div class="p-2">
        <div class="whitespace-normal break-all">
            <div class="flex flex-row gap-y-2 text-xs">
                <div>
                    <span
                        class="rounded-md bg-main-400 px-2.5 py-1 text-xs font-semibold text-white">
                        <img
                            src="https://cdn.wanderer.moe/{asset.game}/icon.png"
                            alt="{asset.game} cover"
                            class="mr-1 inline-block h-4 w-4 rounded-md" />
                        {mapGame(asset.game)}
                    </span>
                    <span
                        class="rounded-md bg-main-400 px-2.5 py-1 text-xs font-semibold text-white">
                        {fixCasing(asset.asset)}
                    </span>
                </div>
            </div>
            <div class="my-3">
                <p class="text-sm font-semibold lowercase text-white">
                    {asset.name.replace('.png', '')}
                </p>
                <p class="text-xs">
                    Uploaded {formatTimeAgo(asset.uploadedDate)}
                </p>
                <p class="text-xs">
                    {bytesToFileSize(asset.fileSize)}
                </p>
            </div>
            <div class="flex gap-2">
                <a
                    href="https://v2-api-testing.wanderer.moe/download?id={asset.id}"
                    rel="noreferrer"
                    target="_blank"
                    download>
                    <button
                        class="btn w-full px-2.5 py-1 font-semibold transition md:w-auto">
                        <i class="fa-solid fa-download mr-1"></i> Download
                    </button>
                </a>
                <a href="/asset/{asset.id}">
                    <button
                        class="btn w-full px-2.5 py-1 font-semibold transition md:w-auto">
                        <i class="fa-solid fa-external-link mr-1"></i> View Details
                    </button>
                </a>
            </div>
        </div>
    </div>
</div>
