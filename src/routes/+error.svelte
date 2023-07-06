<script lang="ts">
import { t } from 'svelte-i18n'
import { page } from '$app/stores'
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
                <img src="https://cdn.wanderer.moe/genshin-impact/emotes/keqing-3.png" alt ="keqing" class="inline h-16 w-16 mr-3"/>{$t(`errors.${$page.status === 404 ? '404' : '500'}`)}
            </p>
            {#if $page.error?.message}
                <p class="my-2 text-gray-400">Error: {$page.error?.message}</p>
            {/if}
            <button
                class="mt-2 px-4 py-2 rounded-lg bg-main-300 text-white hover:bg-main-400 transition"
                on:click={() => window.location.href = '/'}
            >
                Go Back <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    </div>
</div>