<script lang="ts">
import { bytesToFileSize } from '@/lib/helpers/asset/bytesToFileSize'
import { mapGame, mapAssetType } from '@/lib/helpers/casing/gameMapping'
import { getImageResolution } from '@/lib/helpers/asset/getImageResolution'
import { t } from 'svelte-i18n'
import { formatTimeAgo } from '@/lib/helpers/timeConvertion/isoFormat'
import { onMount } from 'svelte'
import AssetItem from '@/components/AssetItem.svelte'

let resolution = 'Unknown'
export let data

const { assetInformation, id } = data
const { asset, similarAssets } = assetInformation

// console.log(asset, similarAssets)

onMount(async () => {
    resolution = await getImageResolution(asset.url)
})

// console.log(assetInformation)
</script>

<svelte:head>
    <title>{asset.name} ({mapGame(asset.game)})</title>
</svelte:head>

<div class="min-h-screen">
    <div class="mb-8">
        <div class="px-2 md:px-12 lg:px-48">
            <div class="relative my-16">
                <div>
                    <div class="flex flex-col md:flex-row">
                        <div class="w-full md:w-1/2">
                            <img
                                src="{asset.url}"
                                alt="asset"
                                class="h-full max-h-full w-full max-w-full rounded-lg border border-main-300 bg-main-700 object-cover"
                                style="background-image: url(https://files.catbox.moe/qmjf27.png);" />
                        </div>
                        <div class="m-2 my-auto w-full md:w-1/2">
                            <div class="flex flex-col">
                                <div
                                    class="flex flex-col md:flex-row md:justify-between">
                                    <div class="flex flex-col">
                                        <div
                                            class="my-2 flex flex-row gap-y-2 text-lg">
                                            <div>
                                                <span
                                                    class="rounded-md bg-main-500 px-2.5 py-1 font-semibold text-white">
                                                    <img
                                                        src="https://cdn.wanderer.moe/{asset.game}/icon.png"
                                                        alt="{asset.game} cover"
                                                        class="mr-1 inline-block h-5 w-5 rounded-md" />
                                                    {mapGame(asset.game)}
                                                </span>
                                                <span
                                                    class="rounded-md bg-main-500 px-2.5 py-1 font-semibold text-white">
                                                    {mapAssetType(asset.asset)}
                                                </span>
                                            </div>
                                        </div>
                                        <div class="my-2">
                                            <h1
                                                class="text-3xl font-bold text-white">
                                                {asset.name}
                                            </h1>
                                            <p class="text-sm text-gray-300">
                                                Uploaded {formatTimeAgo(
                                                    asset.uploadedDate
                                                )}
                                            </p>
                                            <p class="text-sm text-gray-300">
                                                {bytesToFileSize(
                                                    asset.fileSize
                                                )}
                                            </p>
                                            <p
                                                class="my-2 text-sm text-gray-300">
                                                {$t('viewImage.resolution', {
                                                    values: { resolution },
                                                })}
                                            </p>

                                            <div
                                                class="my-4 flex flex-row gap-2">
                                                <a
                                                    href="https://v2-api-testing.wanderer.moe/download/{asset.id}"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    download>
                                                    <button
                                                        class="btn px-2.5 py-1 font-semibold transition">
                                                        <i
                                                            class="fa-solid fa-download mr-1"
                                                        ></i> Download Asset
                                                    </button>
                                                </a>
                                                <button
                                                    class="btn px-2.5 py-1 font-semibold transition"
                                                    on:click="{() => {
                                                        navigator.clipboard.writeText(
                                                            window.location.href
                                                        )
                                                    }}">
                                                    <i
                                                        class="fa-solid fa-clipboard mr-1"
                                                    ></i> Copy Link
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-4">
                        <p class="my-2 text-2xl text-white">Similar Assets</p>
                        <div
                            class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {#each similarAssets as similarAsset}
                                <AssetItem asset="{similarAsset}" />
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
