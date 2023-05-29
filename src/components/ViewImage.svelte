<script>
import { t } from 'svelte-i18n'
import { cubicOut, quintOut } from 'svelte/easing'
import { fly } from 'svelte/transition'

export let imageUrl
export let closeImageView
</script>

<div
    class="fixed left-1/2 top-1/2 z-[1500] max-h-[90%] max-w-[90%] -translate-x-1/2 -translate-y-1/2 bg-blend-overlay">
    <div
        in:fly="{{ y: 50, easing: quintOut, duration: 750 }}"
        out:fly="{{ y: 50, easing: cubicOut, duration: 300 }}"
        class="bg-stone-950 rounded-md p-4 text-center">
        <img
            src="{imageUrl}"
            class="h-[40vh] object-contain border border-stone-900 rounded-md"
            alt="Full view"
            style="background-image: url(https://files.catbox.moe/qmjf27.png); background-size: contain;" />
        <p class="mt-4 rounded-md bg-[#141414] py-2 text-center text-white">
            {$t('viewImage.closeText')}
        </p>
    </div>
</div>

<div
    class="blackbg fixed left-0 top-0 h-full w-full backdrop-blur-sm backdrop-filter"
    on:click="{closeImageView}"
    on:keypress="{closeImageView}">
</div>
