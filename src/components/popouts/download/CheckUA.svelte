<script lang="ts">
import { fly, fade } from 'svelte/transition'
import { cubicOut, quintOut } from 'svelte/easing'

const ua = navigator.userAgent.toLowerCase()

// Windows, Linux, MacOS: (+Safari), Chrome, Firefox
// Android: Default browser
// iOS: Safari

const browserMap = {
    windows: ['chrome', 'firefox'],
    linux: ['chrome', 'firefox'],
    macos: ['chrome', 'firefox', 'safari'],
    android: ['your default browser'],
    ios: ['safari'],
}

const os = (() => {
    const match = ua.match(/windows|linux|mac os|android|iphone|ipad/i)
    return match ? match[0].toLowerCase() : 'unknown'
})()

const browser = (() => {
    const match = ua.match(/chrome|firefox|safari/i)
    return match ? match[0].toLowerCase() : 'unknown'
})()

export let closeCheckUA

// console.log(os, browser, ua, browserMap[os].includes(browser))
</script>

<div>
    <div
        class="fixed left-1/2 top-1/2 z-[60] w-3/4 -translate-x-1/2 -translate-y-1/2 transform"
        in:fly|global="{{ y: 50, easing: quintOut, duration: 750 }}"
        out:fly|global="{{ y: 50, easing: cubicOut, duration: 300 }}">
        <div class="rounded-lg bg-main-600 p-8 text-gray-400">
            <div class="text-center">
                {#if browserMap[os].includes(browser)}
                    <p class="mt-2 text-green-100">
                        You're using {browser} on {os}, a supported browser for
                        downloading assets.
                    </p>
                {:else}
                    <p class="mt-4 text-red-100">
                        You're not using a supported browser, therefore
                        downloads may not work.
                    </p>
                {/if}
                <p class="my-4">
                    For your device, it's reccomended to use {browserMap[
                        os
                    ].join(' or ')}.
                </p>
                <p class="mt-4 text-sm">
                    You should not face any issues when downloading assets, but
                    if you do, please go into the #support channel in our
                    Discord.<br /><span class="text-xs">
                        Not all browsers are supported when downloading assets.
                        This is due to the way browsers handle downloads, and is
                        out of our control.</span>
                </p>
                <button
                    class="btn mt-4 w-full p-2"
                    on:click="{() => closeCheckUA()}">
                    Close
                </button>
            </div>
        </div>
    </div>
    <button
        class="fixed left-0 top-0 z-50 h-full w-full backdrop-blur-sm backdrop-filter"
        in:fade|global="{{ easing: quintOut, duration: 750 }}"
        out:fade|global="{{ easing: cubicOut, duration: 300 }}"
        on:click="{() => closeCheckUA()}"
        on:keypress="{() => closeCheckUA()}">
    </button>
</div>
