<script>
import { t } from 'svelte-i18n'
import { fixCasing } from '@/lib/helpers/casing/fixCasing.js'
import { getDiscordData } from '@/lib/utils/discord.js'
import { onMount } from 'svelte'
import { writable } from 'svelte/store'

let onlineusers = writable('???')

onMount(async () => {
    const data = await getDiscordData()
    onlineusers.set(data)
})

export let OCGeneratorsLocations

const sideBarEntries = [
    {
        name: $t('home.ocGen.title'),
        iconClass: 'fa-solid fa-dice-d20',
        shortDesc: $t('home.ocGen.shortDesc'),
        desc: $t('home.ocGen.desc'),
        buttons: OCGeneratorsLocations.map((location) => {
            return {
                name: fixCasing(location.name),
                link: `/oc-generator/${location.name}`,
            }
        }),
    },
    {
        name: 'Discord',
        iconClass: 'fa-brands fa-discord',
        desc: $t('home.discord.desc'),
        buttons: [
            {
                name: $t('home.discord.btn'),
                link: 'https://discord.wanderer.moe',
            },
        ],
    },
    {
        name: 'Github',
        iconClass: 'fa-brands fa-github',
        shortDesc: $t('home.github.shortDesc'),
        desc: $t('home.github.desc'),
        buttons: [
            {
                name: $t('home.github.webBtn'),
                link: 'https://git.wanderer.moe/site',
            },
            {
                name: $t('home.github.apiBtn'),
                link: 'https://git.wanderer.moe/api',
            },
        ],
    },
]

$: discordShortDesc = $t('home.discord.shortDesc', {
    values: { onlineCount: $onlineusers },
})
</script>

<div class="col-span-2 gap-4 sm:col-span-1">
    <div id="other">
        <p class="mb-4 text-3xl font-bold text-white" id="other">Other</p>
    </div>
    <div class="grid gap-7">
        {#each sideBarEntries as entry}
            <div
                class="rounded-md bg-main-500 p-3 text-white transition ease-in-out hover:scale-105">
                <p class="font-white text-xl font-bold uppercase">
                    <i class="{entry.iconClass}"></i>
                    {entry.name}
                </p>
                {#if entry.shortDesc}
                    <p class="text-left text-gray-400">
                        {entry.shortDesc}
                    </p>
                {:else}
                    <p class="text-left text-gray-400">
                        {discordShortDesc}
                    </p>
                {/if}
                <p class="text-left text-gray-200">
                    {entry.desc}
                </p>

                <div class="mt-2 grid gap-2">
                    {#each entry.buttons as button}
                        <a href="{button.link}" target="_blank">
                            <button class="btn w-full rounded-md font-semibold">
                                {button.name}
                            </button>
                        </a>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>
