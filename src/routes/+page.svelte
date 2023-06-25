<style lang="postcss">
.fade-in {
    animation: fadeIn 0.2s forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>

<script lang="ts">
import { t } from 'svelte-i18n'
import AssetItem from '@/components/AssetItem.svelte'
import { fly, fade } from 'svelte/transition'
import { cubicOut, quintOut } from 'svelte/easing'

export let data
const { games, recent } = data

let focusedImageElement: HTMLImageElement
let focusedImage = 'honkai-star-rail'
let isFading = false
let nextImage = ''

function handleImageChange(newImage: string) {
    nextImage = newImage
    focusedImageElement.src = `https://cdn.wanderer.moe/${newImage}/cover.png`
    isFading = true
}
</script>

<svelte:head>
    <title>wanderer.moe</title>
</svelte:head>

<div class="min-h-screen">
    <div class="mb-8">
        <div class="px-2 md:px-12 lg:px-48">
            <div class="relative my-8">
                <img
                    src="https://cdn.wanderer.moe/{focusedImage}/cover.png"
                    class="absolute inset-0 h-48 w-full rounded-md object-cover"
                    style="object-position: 50% 20%;"
                    alt="{focusedImage} cover" />
                <img
                    src=""
                    class="absolute inset-0 h-48 w-full rounded-md object-cover opacity-0"
                    style="object-position: 50% 20%;"
                    bind:this="{focusedImageElement}"
                    alt=""
                    class:fade-in="{isFading}"
                    on:animationend="{() => {
                        if (isFading) {
                            focusedImage = nextImage
                            isFading = false
                        }
                    }}" />
                <div class="relative h-48 rounded-md bg-main-400/50">
                    <div
                        class="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                        <div
                            class="flex flex-col items-center justify-between xl:flex-row">
                            <div>
                                <h1
                                    class="max-w-lg text-3xl font-bold text-white sm:text-4xl sm:leading-none">
                                    wanderer.moe
                                </h1>
                                <h2 class="max-w-xl text-xl text-white">
                                    {$t('home.description')}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="lastUploaded" class="mb-8">
                <p class="mb-4 text-2xl font-bold text-white">
                    Recently Uploaded
                </p>
                <div class="grid grid-cols-1 gap-7 lg:grid-cols-2">
                    {#each recent as asset}
                        <AssetItem
                            asset="{asset}"
                            bind:focusedImage="{focusedImage}"
                            handleImageChange="{handleImageChange}" />
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
