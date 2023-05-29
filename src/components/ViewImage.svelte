<script>
import { t } from 'svelte-i18n'
import { cubicOut, quintOut } from 'svelte/easing'
import { fly } from 'svelte/transition'

export let imageUrl
export let closeImageView
</script>

<div
    class="fixed left-1/2 top-1/2 z-[1000] max-h-[90%] max-w-[90%] -translate-x-1/2 -translate-y-1/2 bg-blend-overlay">
    <div
        in:fly="{{ y: 50, easing: quintOut, duration: 750 }}"
        out:fly="{{ y: 50, easing: cubicOut, duration: 300 }}">
        <img
            src="{imageUrl}"
            class="h-64 w-64 object-contain"
            alt="Full view" />
        <p class="sigfont mt-4 text-center text-white">
            {$t('viewImage.closeText')}
        </p>
    </div>
</div>

<div
    class="blackbg fixed left-0 top-0 h-full w-full backdrop-blur-sm backdrop-filter"
    on:click="{closeImageView}"
    on:keypress="{closeImageView}">
</div>
