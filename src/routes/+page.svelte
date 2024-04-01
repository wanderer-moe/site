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

<script>
import { t } from 'svelte-i18n'
import GameContainer from '@/components/GameContainer.svelte'
import HomeSidebar from '@/components/nav/HomeSidebar.svelte'

let focusedImageElement
export let data

const { allGames, allOCGenerators } = data
const OCGeneratorsLocations = allOCGenerators.locations

let focusedImage = 'honkai-star-rail'
let isFading = false
let nextImage = ''

function handleImageChange(newImage) {
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
        <div class="relative">
            <img
                src="https://cdn.wanderer.moe/{focusedImage}/cover.png"
                class="absolute inset-0 h-48 w-full object-cover"
                style="object-position: 50% 20%;"
                alt="{focusedImage} cover" />
            <img
                src=""
                class="absolute inset-0 h-48 w-full object-cover opacity-0"
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
            <div
                class="relative flex h-48 items-center justify-center bg-gradient-to-t from-main-400 to-main-400/50">
                <div class="flex flex-col items-center text-center">
                    <h2 class="text-3xl font-bold text-white">wanderer.moe</h2>
                    <p class="text-lg font-semibold text-white">
                        <!-- {$t('home.description')} -->
                        best free asset download website rated 2024
                    </p>
                </div>
            </div>
        </div>
        <div class="mt-8 px-2 md:px-12 lg:px-24">
            <div class="grid gap-8 md:grid-cols-1 lg:grid-cols-3 lg:px-0">
                <div class="col-span-2 gap-4">
                    <div id="games" class="mb-8">
                        <p class="mb-4 text-3xl font-bold text-white">Games</p>
                        <div class="grid grid-cols-1 gap-7 md:grid-cols-2">
                            {#each allGames as game}
                                <GameContainer
                                    {game}
                                    bind:focusedImage
                                    {handleImageChange} />
                            {/each}
                        </div>
                    </div>
                </div>
                <HomeSidebar {OCGeneratorsLocations} />
            </div>
        </div>
    </div>
</div>
