<script lang="ts">
import { bytesToFileSize } from '@/lib/helpers/asset/bytesToFileSize'
import { formatTimeAgo } from '@/lib/helpers/timeConvertion/isoFormat'
import Lazy from 'svelte-lazy'
import type { Asset } from '@/lib/types/asset'
import { t } from 'svelte-i18n'
import LoadPlaceHolder from './LoadPlaceHolder.svelte'
import { fixCasing } from '@/lib/helpers/casing/fixCasing'
import { mapGame, mapAssetType } from '@/lib/helpers/casing/gameMapping'
import AssetCollection from './AssetCollection.svelte'
import AddToCollection from '@/components/Modals/AddToCollection.svelte'

let collectionPopupOpen = false
export let asset: Asset
export let user
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    role="button"
    tabindex="0"
    class="relative flex transform cursor-pointer items-center rounded-md border-2 border-main-400 bg-main-500 p-3 font-semibold text-gray-400 transition duration-150 ease-in-out hover:-translate-y-1 hover:border-main-300">
    <Lazy
        height="{128}"
        placeholder="{LoadPlaceHolder}"
        fadeOption="{{
            delay: 100,
            duration: 1000,
        }}">
        <img
            id="{asset.name}"
            class="max-w-28 h-28 max-h-28 w-28 object-contain object-left p-1"
            src="{asset.url}"
            alt="{asset.name}" />
    </Lazy>
    <div class="p-2">
        <div class="whitespace-normal break-all">
            <div class="flex flex-row gap-1 text-xs">
                <span
                    class="rounded-md bg-main-600 border-2 border-main-400 flex items-center px-2.5 py-1 text-xs font-semibold text-white">
                    <img
                        src="https://cdn.wanderer.moe/{asset.game}/icon.png"
                        alt="{asset.game} cover"
                        class="mr-1 inline-block h-4 w-4 rounded-md" />
                    {mapGame(asset.game)}
                </span>
                <span
                    class="rounded-md bg-main-600 border-2 border-main-400 px-2.5 py-1 text-xs font-semibold text-white">
                    {mapAssetType(asset.asset)}
                </span>
            </div>
            <div class="my-3">
                <p class="overflow-clip font-semibold lowercase text-white">
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
                    href="https://v2-api-testing.wanderer.moe/download/{asset.id}"
                    rel="noreferrer"
                    target="_blank"
                    download>
                    <button
                        class="btn w-full px-2.5 py-1 font-semibold transition md:w-auto">
                        <i class="fa-solid fa-download mr-1"></i> Download
                    </button>
                </a>
                <a href="/asset/{asset.id}" rel="external">
                    <button
                        class="btn w-full px-2.5 py-1 font-semibold transition md:w-auto">
                        <i class="fa-solid fa-external-link mr-1"></i> View Details
                    </button>
                </a>
                <div
                    role="button"
                    tabindex="0"
                    on:click="{() => (collectionPopupOpen = true)}">
                    <AssetCollection asset="{asset}" user="{user}" />
                </div>
            </div>
        </div>
    </div>
</div>

{#if collectionPopupOpen}
    <AddToCollection
        asset="{asset}"
        user="{user}"
        closeCollectionPopup="{() => (collectionPopupOpen = false)}" />
{/if}
