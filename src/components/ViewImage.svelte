<script>
import { t } from 'svelte-i18n'
import { cubicOut, quintOut } from 'svelte/easing'
import { fly } from 'svelte/transition'

export let imageUrl
export let closeImageView
</script>

<div class="fixed bg-blend-overlay top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[90%] max-h-[90%] z-[1000]">
    <div
        in:fly="{{ y: 50, easing: quintOut, duration: 750 }}"
        out:fly="{{ y: 50, easing: cubicOut, duration: 300 }}">
        <img src="{imageUrl}" class="object-contain w-64 h-64" alt="Full view" />
        <p class="sigfont text-center text-white mt-4">
            {$t('viewImage.closeText')}
        </p>
    </div>
</div>

<div
    class="blackbg fixed left-0 top-0 h-full w-full backdrop-blur-sm backdrop-filter"
    on:click="{closeImageView}"
    on:keypress="{closeImageView}">
</div>
