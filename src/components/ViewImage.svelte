<script>
import { t } from 'svelte-i18n'
import { cubicOut, quintOut } from 'svelte/easing'
import { fly, fade } from 'svelte/transition'

export let imageUrl
export let closeImageView
</script>

<div
    class="fixed left-1/2 top-1/2 z-[1500] max-h-[90%] max-w-[90%] -translate-x-1/2 -translate-y-1/2 select-none bg-blend-overlay">
    <div
        in:fly="{{ y: 50, easing: quintOut, duration: 750 }}"
        out:fly="{{ y: 50, easing: cubicOut, duration: 300 }}"
        class="rounded-md bg-main-600 p-4 text-center">
        <img
            src="{imageUrl}"
            class="h-[40vh] rounded-md border border-main-300 object-contain"
            alt="Full view"
            style="background-image: url(https://files.catbox.moe/qmjf27.png); background-size: contain;" />
        <p class="mt-4 rounded-md bg-main-400 py-2 text-center text-white">
            {$t('viewImage.closeText')}
        </p>
    </div>
</div>

<div
    class="fixed left-0 top-0 z-50 h-full w-full backdrop-blur-sm backdrop-filter"
    in:fade="{{ easing: quintOut, duration: 750 }}"
    out:fade="{{ easing: cubicOut, duration: 300 }}"
    on:click="{closeImageView}"
    on:keypress="{closeImageView}">
</div>
