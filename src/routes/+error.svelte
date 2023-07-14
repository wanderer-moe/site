<script lang="ts">
import {
    possibleRoutes,
    calculateLevenshtein,
} from '$lib/helpers/possibleRoutes'
import { t } from 'svelte-i18n'
import { page } from '$app/stores'
import { onMount } from 'svelte'

let routeName = $page.url.pathname
let misspelledRoute = ''

onMount(() => {
    if ($page.status === 404) {
        console.log(routeName)
        const matches = possibleRoutes.map((route) => {
            return {
                route,
                distance: calculateLevenshtein(route, routeName),
            }
        })

        // console.log(matches)
        matches.sort((a, b) => a.distance - b.distance)

        if (matches[0].distance < 5) {
            console.warn(
                `Possible misspelled route: ${matches[0].route} (distance: ${matches[0].distance})`
            )
            misspelledRoute = matches[0].route
        }
    }
})
</script>

<svelte:head>
    <title>{$page.status}</title>
</svelte:head>

<div class="flex h-screen">
    <div class="m-auto">
        <p class="text-3xl font-semibold my-2">
            <span class="rounded-lg bg-red-400 px-3 text-main-400"
                >{$page.status}
            </span>
        </p>
        <div>
            <p class="text-4xl text-white items-center flex">
                <img
                    src="https://cdn.wanderer.moe/genshin-impact/emotes/keqing-3.png"
                    alt="keqing"
                    class="inline h-16 w-16 mr-3" />{$t(
                    `errors.${$page.status === 404 ? '404' : '500'}`
                )}
            </p>
            {#if $page.error?.message}
                <p class="my-2 text-gray-400">Error: {$page.error?.message}</p>
            {/if}
            {#if misspelledRoute}
                <p class="my-2 text-gray-400">
                    Maybe you meant to go to <a
                        href="{misspelledRoute}"
                        class="text-white">{misspelledRoute}</a
                    >?
                </p>
            {/if}
            <button
                class="text-white"
                on:click="{() => (window.location.href = '/')}">
                Go Back <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    </div>
</div>
