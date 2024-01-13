<script>
import { cubicOut, quintOut } from 'svelte/easing'
import { fly, fade } from 'svelte/transition'

export let closeContribute
</script>

<div>
    <div
        class="fixed left-1/2 top-1/2 z-[60] w-3/4 -translate-x-1/2 -translate-y-1/2 transform"
        in:fly="{{ y: 50, easing: quintOut, duration: 750 }}"
        out:fly="{{ y: 50, easing: cubicOut, duration: 300 }}">
        <button
            class="close-button absolute right-0 top-6 rounded-lg p-4 text-white"
            on:click="{closeContribute}">
            ✕
        </button>
        <div class="mt-6 rounded-lg bg-main-600 p-8 text-gray-400">
            <div>
                <div class="flex justify-center">
                    <div class="flex flex-row items-center gap-2">
                        <img
                            src="https://cdn.wanderer.moe/honkai-impact-3rd/emotes/life-on-hyperion-2-8.png"
                            alt="emote"
                            class="h-12 w-12" />
                        <p class="text-lg font-semibold text-white">
                            Contribute
                        </p>
                    </div>
                </div>
                <div class="mt-2">
                    <div class="mb-2 grid gap-3 text-center">
                        <p class="text-sm">
                            If you want to help contribute by providing assets
                            for other users of the site (datamined/fan-made) or
                            for translations, please join the <a
                                class="text-white"
                                target="_blank"
                                href="https://discord.wanderer.moe/"
                                >discord server</a
                            >/send a DM to @dromzeh. You will be credited for
                            your contributions on the site and within the
                            Discord.
                        </p>
                        <p class="text-xs">
                            For any other inquires, <a
                                class="text-white"
                                href="mailto:marcel@wanderer.moe"
                                >send an email!</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div
        class="fixed left-0 top-0 z-50 h-full w-full backdrop-blur-sm backdrop-filter"
        in:fade="{{ easing: quintOut, duration: 750 }}"
        out:fade="{{ easing: cubicOut, duration: 300 }}"
        on:click="{closeContribute()}"
        on:keypress="{closeContribute()}">
    </div>
</div>
