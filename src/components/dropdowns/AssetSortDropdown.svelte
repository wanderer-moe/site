<script>
import { onMount } from 'svelte'
import { fly } from 'svelte/transition'
import { cubicOut, quintOut } from 'svelte/easing'
import { t } from 'svelte-i18n'

let sortMenuOpen = false

export let selectedSortingOption
export let changeSort
export let sortingOptions

function updateSort(sortingOption) {
    changeSort(sortingOption)
    sortMenuOpen = !sortMenuOpen
}
</script>

<div class="select-none">
    <div class="relative flex w-full cursor-pointer">
        <div
            class="flex w-full items-center justify-center rounded-lg border border-main-400 bg-main-700 p-3 transition-colors duration-150 hover:border-main-300 hover:bg-main-600"
            on:keypress="{() => (sortMenuOpen = !sortMenuOpen)}"
            on:click="{() => (sortMenuOpen = !sortMenuOpen)}">
            <span class="text-white"
                >{$t('details.sortBy')}: {selectedSortingOption.text}</span>
        </div>
        {#if sortMenuOpen}
            <div
                in:fly="{{
                    y: 15,
                    easing: quintOut,
                    duration: 200,
                }}"
                out:fly="{{
                    y: 10,
                    easing: cubicOut,
                    duration: 200,
                }}"
                class="absolute bottom-8 z-30 mb-8 w-full">
                <div
                    class="grid grid-cols-1 gap-1 rounded-xl border border-main-300 bg-main-700 p-1 transition-colors duration-150">
                    {#each sortingOptions as sortingOption}
                        <div
                            class="flex items-center justify-center text-gray-400 hover:cursor-pointer"
                            on:keypress="{() => updateSort(sortingOption)}"
                            on:click="{() => updateSort(sortingOption)}">
                            <span
                                class="flex items-center p-1 px-2 text-left {sortingOption ===
                                selectedSortingOption
                                    ? 'bg-main-500 hover:bg-main-400'
                                    : 'hover:bg-main-600'} rounded-lg transition-colors duration-200"
                                >{sortingOption.text}</span>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</div>

{#if sortMenuOpen}
    <div
        class="fixed left-0 top-0 z-10 h-full w-full"
        on:click="{() => (sortMenuOpen = !sortMenuOpen)}"
        on:keypress="{() => (sortMenuOpen = !sortMenuOpen)}">
    </div>
{/if}
