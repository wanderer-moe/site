<script>
import { t } from 'svelte-i18n'
import { cubicOut, quintOut } from 'svelte/easing'
import { fly, fade } from 'svelte/transition'
import { bytesToFileSize } from '@/lib/helpers/asset/bytesToFileSize.js'
import { getImageResolution } from '@/lib/helpers/asset/getImageResolution.js'

let resolution = 'Unknown'

export let imageUrl, imageTitle, closeImageView, imageFileSize
</script>

<div
    class="fixed left-1/2 top-1/2 z-[1500] max-h-[90%] min-w-[350px] max-w-[90%] -translate-x-1/2 -translate-y-1/2 select-none bg-blend-overlay">
    <div
        in:fly="{{ y: 50, easing: quintOut, duration: 750 }}"
        out:fly="{{ y: 50, easing: cubicOut, duration: 300 }}"
        class="rounded-md bg-main-600 p-4">
        <div class="flex items-center justify-center">
            <img
                src="{imageUrl}"
                class="h-[40vh] rounded-md border border-main-300 object-contain"
                alt="Full view"
                style="background-image: url(https://files.catbox.moe/qmjf27.png); background-size: contain;"
                on:load="{async () => {
                    resolution = await getImageResolution(imageUrl)
                }}" />
        </div>
        <div class="mt-4 rounded-md bg-main-400 p-2 py-2">
            <div class="flex flex-col space-y-1 rounded-md bg-main-400 p-2">
                <p
                    class="overflow-hidden overflow-ellipsis font-semibold text-white">
                    {imageTitle}
                </p>
                <p
                    class="flex justify-between text-xs
                    text-white">
                    {bytesToFileSize(imageFileSize)}<span>
                        {$t('viewImage.resolution', {
                            values: { resolution },
                        })}</span>
                </p>
            </div>
            <div class="p-2">
                <p class="text-sm text-white">
                    On mobile? Press & hold to download, or click the button
                    below.
                </p>
                <a href="{imageUrl}" rel="noreferrer" target="_blank" download>
                    <button class="btn mt-4 w-full"
                        ><i class="fas fa-download mr-2"></i> Download Asset
                    </button>
                </a>
            </div>
        </div>
    </div>
</div>

<div
    class="fixed left-0 top-0 z-50 h-full w-full backdrop-blur-sm bg-black/60 backdrop-filter"
    in:fade="{{ easing: quintOut, duration: 750 }}"
    out:fade="{{ easing: cubicOut, duration: 300 }}"
    on:click="{closeImageView}"
    on:keypress="{closeImageView}">
</div>
