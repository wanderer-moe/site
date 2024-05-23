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
        name: 'Socials',
        iconClass: 'fa-solid fa-share-from-square',
        desc: 'Join the Discord server and follow us on Twitter to get site updates and interact with the community.',
        buttons: [
            {
                name: 'Join Discord',
                link: 'https://discord.wanderer.moe',
            },
            {
                name: 'Follow Twitter',
                link: 'https://twitter.com/wanderermoe',
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

$: discordShortDesc = $onlineusers + ' online on Discord'
</script>

<div class="flex flex-col gap-4">
    <div id="other">
        <p class="mb-4 text-3xl font-bold text-white" id="other">Other</p>
    </div>
    <div class="flex flex-col gap-6 md:flex-row">
        {#each sideBarEntries as entry}
            <div
                class="rounded-md border-2 border-transparent bg-main-500 p-3 text-white transition ease-in-out hover:cursor-pointer hover:border-main-300 md:w-1/3">
                <div class="flex h-full flex-col justify-between">
                    <div>
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
                    </div>
                    <div class="mt-4 grid grid-cols-1 gap-2">
                        {#each entry.buttons as button}
                            <a href="{button.link}" target="_blank">
                                <button
                                    class="{`btn w-full rounded-md font-semibold`}">
                                    {button.name}
                                </button>
                            </a>
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
