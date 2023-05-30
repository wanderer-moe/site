<script>
import { cubicOut, quintOut } from 'svelte/easing'
import { fly } from 'svelte/transition'

let visible = ''
export let closeContribute
</script>

<div bind:this="{visible}">
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
                    <div class="rtl flex flex-col items-center gap-2">
                        <img
                            src="https://cdn.wanderer.moe/genshin-impact/emotes/cat.png"
                            alt="cat"
                            class="h-12 w-12" />
                        <p
                            class="bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-lg font-semibold text-transparent">
                            Contribute
                        </p>
                    </div>
                </div>
                <div class="mt-2">
                    <div class="mb-2 grid gap-3 text-center">
                        <p class="text-sm">
                            wanderer.moe
                            <span class="font-semibold text-white"
                                >will always be free to use, untracked, and
                                (mostly) ad-free.</span>
                            If you like this website, please consider contributing
                            or
                            <a
                                href="https://buymeacoffee.com/marcelmd"
                                target="_blank"
                                class="text-neutral-100/80 hover:font-bold hover:text-neutral-100/90"
                                >donating</a>
                            to help keep it running.
                        </p>
                        <p class="text-sm">
                            All donations go directly towards server costs,
                            maintenance, and development of new assets &
                            features for wanderer.moe. This project will never
                            be for-profit—our sole goal is to simply provide
                            resources for this community.
                        </p>
                        <p class="text-sm">
                            If you're interested in reading more, there's a
                            <a
                                class="text-neutral-100/80 hover:font-bold hover:text-neutral-100/90"
                                target="_blank"
                                href="https://dromzeh.dev/posts/wanderer-moe-website-breakdown/"
                                >blog post here</a>
                            about the website, breaking down both cost and functionality.
                        </p>
                        <p class="text-sm">
                            If you want to help contribute by providing assets
                            for other users of the site (datamined/fan-made) or
                            for translations, please join the
                            <a
                                class="text-neutral-100/80 hover:font-bold hover:text-neutral-100/90"
                                target="_blank"
                                href="https://discord.wanderer.moe/"
                                >Discord server</a>
                            and contact me there. You will be credited for your contributions
                            on the site and within the Discord.
                        </p>
                        <p class="text-xs">
                            For any other inquires,
                            <a
                                class="text-neutral-100/80 hover:font-bold hover:text-neutral-100/90"
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
        on:click="{closeContribute()}"
        on:keypress="{closeContribute()}">
    </div>
</div>
