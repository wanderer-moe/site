<script>
import { getDiscordData } from '@/lib/utils/discord.js'
import { fixCasing } from '@/lib/utils/helpers.js'
import { onMount } from 'svelte'
import { t } from 'svelte-i18n'

let onlineusers
export let data

onMount(async () => {
    onlineusers = await getDiscordData()
})

const { allGames, allOCGenerators } = data
const OCGeneratorsLocations = allOCGenerators.locations

let focusedImage = 'goddess-of-victory-nikke'
</script>

<svelte:head>
    <title>wanderer.moe</title>
</svelte:head>

<div class="min-h-screen">
    <div class="mb-8">
        <div class="relative">
            <img
                src="https://cdn.wanderer.moe/{focusedImage}/cover.png"
                class="absolute inset-0 h-48 w-full object-cover transition ease-in-out"
                style="object-position: 50% 20%;"
                alt="{focusedImage} cover" />
            <div
                class="relative h-48 bg-gradient-to-t from-main-400 to-main-400/50">
                <div
                    class="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
                    <div
                        class="flex flex-col items-center justify-between xl:flex-row">
                        <div>
                            <h2
                                class="max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                wanderer.moe
                            </h2>
                            <p
                                class="mb-2 max-w-xl text-xl font-semibold text-white">
                                {$t('home.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-8 px-2 md:px-12 lg:px-24">
            <div class="grid gap-8 md:grid-cols-1 lg:grid-cols-3 lg:px-0">
                <div class="col-span-2 gap-4">
                    <div id="games" class="mb-8">
                        <p class="mb-4 text-3xl font-bold text-white">
                            Game Assets
                        </p>
                        <div class="grid grid-cols-1 gap-7 md:grid-cols-2">
                            {#each allGames as game}
                                <a href="/{game.name}">
                                    <div
                                        class="relative flex h-40 items-center justify-center overflow-hidden rounded-md bg-cover text-white transition ease-in-out hover:scale-105"
                                        style="background-image: url('https://cdn.wanderer.moe/{game.name}/cover.png'); background-position: 50% 20%;"
                                        on:mouseover="{() =>
                                            (focusedImage = game.name)}"
                                        on:focus="{() =>
                                            (focusedImage = game.name)}">
                                        <div
                                            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 to-black/50">
                                        </div>
                                        <div class="align-center absolute">
                                            <p
                                                class="mt-2 text-center text-3xl font-bold text-white">
                                                {fixCasing(game.name)}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            {/each}
                        </div>
                    </div>
                </div>
                <div class="col-span-2 gap-4 sm:col-span-1">
                    <div id="other">
                        <p
                            class="mb-4 text-3xl font-bold text-white"
                            id="other">
                            Other
                        </p>
                    </div>
                    <div class="grid gap-7">
                        <div
                            class="rounded-md bg-main-400 p-3 text-white transition ease-in-out hover:scale-105"
                            style="background: linear-gradient(100deg, rgba(200,157,245,0.1) 0%, rgba(20,20,20,0.1) 49%);">
                            <p
                                class="font-white sigfont text-xl font-bold uppercase">
                                <i class="fa-solid fa-dice-d20"></i>
                                {$t('home.ocGen.title')}
                            </p>
                            <p class="text-left text-gray-400">
                                {$t('home.ocGen.shortDesc')}
                            </p>

                            <p class="text-left text-gray-200">
                                {$t('home.ocGen.desc')}
                            </p>

                            {#each OCGeneratorsLocations as ocgen}
                                <div class="mt-2 grid gap-1">
                                    <a href="/oc-generator/{ocgen.name}">
                                        <button
                                            class="w-full rounded-md bg-main-300/40 p-2 font-semibold text-white hover:bg-main-200/40">
                                            {fixCasing(ocgen.name)}
                                        </button>
                                    </a>
                                </div>
                            {/each}
                        </div>

                        <div
                            class="rounded-md bg-main-400 p-3 text-white transition ease-in-out hover:scale-105"
                            style="background: linear-gradient(100deg, rgba(142,150,227,0.1) 0%, rgba(20,20,20,0.1) 49%);">
                            <p
                                class="font-white sigfont text-xl font-bold uppercase">
                                <i class="fa-brands fa-discord"></i> Discord
                            </p>
                            <p class="text-left text-gray-400">
                                {$t('home.discord.shortDesc', {
                                    values: { onlineCount: onlineusers },
                                })}
                            </p>

                            <p class="text-left text-gray-200">
                                {$t('home.discord.desc')}
                            </p>

                            <div class="mt-2">
                                <a
                                    href="https://discord.wanderer.moe/"
                                    target="_blank">
                                    <button
                                        class="w-full rounded-md bg-main-300/40 p-2 font-semibold text-white hover:bg-main-200/40">
                                        {$t('home.discord.btn')}
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div
                            class="rounded-md bg-main-400 p-3 text-white transition ease-in-out hover:scale-105"
                            style="background: linear-gradient(100deg, rgba(234,103,85,0.1) 0%, rgba(20,20,20,0.1) 49%);">
                            <p
                                class="font-white sigfont text-xl font-bold uppercase">
                                <i class="fa-solid fa-hand-holding-dollar"></i>
                                {$t('home.donate.title')}
                            </p>
                            <p class="text-left text-gray-400">
                                {$t('home.donate.shortDesc')}
                            </p>

                            <p class="text-left text-gray-200">
                                {$t('home.donate.desc')}
                            </p>

                            <div class="mt-2" id="donate">
                                <a
                                    href="https://buymeacoffee.com/marcelmd"
                                    target="_blank">
                                    <button
                                        class="w-full rounded-md bg-main-300/40 p-2 font-semibold text-white hover:bg-main-200/40">
                                        Buy Me a Coffee
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div
                            class="rounded-md bg-main-400 p-3 text-white transition ease-in-out hover:scale-105"
                            style="background: linear-gradient(100deg, rgba(198,198,198,0.1) 0%, rgba(20,20,20,0.1) 49%);">
                            <p
                                class="font-white sigfont text-xl font-bold uppercase">
                                <i class="fa-brands fa-github"></i> GitHub
                            </p>
                            <p class="text-left text-gray-400">
                                {$t('home.github.shortDesc')}
                            </p>

                            <p class="text-left text-gray-200">
                                {$t('home.github.desc')}
                            </p>

                            <div class="mt-2 grid gap-1">
                                <a
                                    href="https://git.wanderer.moe/site"
                                    target="_blank">
                                    <button
                                        class="w-full rounded-md bg-main-300/40 p-2 font-semibold text-white hover:bg-main-200/40">
                                        {$t('home.github.webBtn')}
                                    </button>
                                </a>
                                <a
                                    href="https://git.wanderer.moe/api"
                                    target="_blank">
                                    <button
                                        class="w-full rounded-md bg-main-300/40 p-2 font-semibold text-white hover:bg-main-200/40">
                                        {$t('home.github.apiBtn')}
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
