<script lang="ts">
import axios from 'axios'
import { onMount } from 'svelte'
import { fixCasing } from '@/lib/helpers/casing/fixCasing'
import { writable } from 'svelte/store'
// import { t } from "svelte-i18n"; TODO: i18n support maybe?

export let data
const { game, jsonFile } = data

let response = ''
let options = writable([])

// randomizes all unlocked options
function randomize() {
    options.update((opts) => {
        return opts.map((option) => {
            if (!option.locked) {
                const randomIndex = Math.floor(
                    Math.random() * option.entries.length
                )
                return { ...option, value: option.entries[randomIndex] }
            }
            return option
        })
    })
}

// copies to clipboard for easy sharing
function copyToClipboard(options) {
    const text = options
        .filter(({ value }) => value)
        .map(({ name, value }) => `${name} - ${value}`)
        .join('\n')
    const textWithPath = `${text}\n\n${window.location.href}`
    navigator.clipboard.writeText(textWithPath)
}

// toggles the lock on an option
function toggleLock(option) {
    options.update((opts) => {
        return opts.map((opt) => {
            if (opt.name === option.name) {
                return { ...opt, locked: !opt.locked }
            }
            return opt
        })
    })
}

onMount(async () => {
    response = await axios.get(jsonFile)
    options.set(response.data.options)
    options.update((opts) => {
        return opts.map((opt) => {
            return { ...opt, value: 'None' }
        })
    })
})
</script>

<svelte:head>
    <title>OC Generator ({fixCasing(game)}) | wanderer.moe</title>
</svelte:head>

<div class="min-h-screen">
    <div class="mb-8">
        <div class="relative z-0">
            <img
                src="https://cdn.wanderer.moe/{game}/cover.png"
                class="absolute inset-0 h-48 w-full object-cover transition ease-in-out"
                style="object-position: 50% 20%;"
                alt="{game} cover" />
            <div
                class="relative h-48 bg-gradient-to-t from-main-400 to-main-400/50">
                <div
                    class="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                    <div
                        class="flex flex-col items-center justify-between xl:flex-row">
                        <div class="">
                            <h2
                                class="flex max-w-lg items-start text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                <span class="mr-3">{fixCasing(game)}</span>
                            </h2>
                            <p
                                class="max-w-xl text-xl font-semibold text-white">
                                OC Generator
                            </p>
                            <p
                                class="max-w-xl text-sm font-semibold text-white">
                                You can lock and unlock entries by pressing the <i
                                    class="fas fa-lock"></i>
                                and <i class="fas fa-unlock"></i> buttons.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative z-10 px-2 md:px-12 lg:px-24">
            <div class="mb-2 rounded-lg bg-main-400 p-2 text-white">
                <div class="mb-3 flex flex-wrap gap-2 text-sm">
                    <button class="btn p-2" on:click="{() => randomize()}">
                        <i class="fa fa-random"></i> Randomize
                    </button>
                    <button
                        class="btn p-2"
                        on:click="{copyToClipboard($options)}">
                        <i class="fa-regular fa-clipboard"></i> Copy
                    </button>
                    <button
                        class="btn p-2"
                        on:click="{() =>
                            options.update((opts) =>
                                opts.map((opt) => ({ ...opt, locked: true }))
                            )}">
                        <i class="fa fa-unlock"></i> Lock All
                    </button>
                    <button
                        class="btn p-2"
                        on:click="{() =>
                            options.update((opts) =>
                                opts.map((opt) => ({ ...opt, locked: false }))
                            )}">
                        <i class="fa fa-lock"></i> Unlock All
                    </button>
                </div>
                <div>
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {#if $options}
                            {#each $options as option}
                                <div class="">
                                    <p class="font-semibold text-white">
                                        {option.name}
                                    </p>
                                    <div class="flex items-center">
                                        <button
                                            class="btn mr-2 p-2"
                                            on:click="{() =>
                                                toggleLock(option)}">
                                            {#if option.locked}
                                                <i class="fas fa-lock"></i>
                                            {:else}
                                                <i class="fas fa-unlock"></i>
                                            {/if}
                                        </button>
                                        <input
                                            type="text"
                                            class="h-10 w-full rounded-lg bg-main-600 text-center text-indigo-400 {option.value &&
                                            option.locked
                                                ? 'text-red-500'
                                                : 'text-accent-300'} focus:shadow focus:outline-none"
                                            value="{option.value}"
                                            readonly />
                                    </div>
                                </div>
                            {/each}
                        {:else}
                            <p class="text-white">
                                Loading options, try refreshing the page if it
                                takes too long.
                            </p>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
