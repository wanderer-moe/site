<script>
import { t } from 'svelte-i18n'
import { page } from '$app/stores'
</script>

<svelte:head>
    <title>{$page.status}</title>
</svelte:head>

<div class="flex h-screen">
    <div class="m-auto text-center">
        <div class="p-1">
            <p class="p-2 text-5xl font-semibold">
                <span class="rounded-lg bg-red-400 pl-3 pr-3 text-main-400"
                    >{$page.status}</span>
            </p>
        </div>
        <div>
            {#if $page.status === 404}
                <p class="text-2xl font-semibold text-white">
                    {$t('errors.404')}
                </p>
            {:else}
                <p class="text-2xl font-semibold text-white">
                    {$t('errors.500')}
                </p>
            {/if}
            <p class=" text-gray-400">
                <a href="/" class="hover:font-semibold hover:text-white"
                    >{$t('errors.refresh')}
                </a>
            </p>
            <p class="text-xs text-gray-400">{$page.error.message}</p>
        </div>
    </div>
</div>
