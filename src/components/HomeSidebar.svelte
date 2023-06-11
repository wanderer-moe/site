<script>
import { t } from 'svelte-i18n'
import { fixCasing } from '@/lib/utils/helpers.js'
import { getDiscordData } from '@/lib/utils/discord.js'
import { onMount } from 'svelte'
let onlineusers = '???'

onMount(async () => {
    onlineusers = await getDiscordData()
})

export let OCGeneratorsLocations

const sideBarEntries = [
    {
        name: $t('home.ocGen.title'),
        accentRGBA: 'rgba(253, 180, 222, 0.1)',
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
        accentRGBA: 'rgba(121, 133, 216, 0.1)',
        iconClass: 'fa-brands fa-discord',
        shortDesc: $t('home.discord.shortDesc', {
            values: { onlineCount: onlineusers },
        }),
        desc: $t('home.discord.desc'),
        buttons: [
            {
                name: $t('home.discord.btn'),
                link: 'https://discord.wanderer.moe',
            },
        ],
    },
    {
        name: $t('home.donate.title'),
        accentRGBA: 'rgba(188, 51, 46, 0.1)',
        iconClass: 'fa-solid fa-donate',
        shortDesc: $t('home.donate.shortDesc'),
        desc: $t('home.donate.desc'),
        buttons: [
            {
                name: 'Buy me a coffee',
                link: 'https://buymeacoffee.com/marcelmd',
            },
        ],
    },
    {
        name: 'Github',
        accentRGBA: 'rgba(255, 255, 255, 0.1)',
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
</script>

<div class="col-span-2 gap-4 sm:col-span-1">
    <div id="other">
        <p class="mb-4 text-3xl font-bold text-white" id="other">Other</p>
    </div>
    <div class="grid gap-7">
        {#each sideBarEntries as entry}
            <div
                class="rounded-md bg-main-400 p-3 text-white transition ease-in-out hover:scale-105"
                style="background: linear-gradient(100deg, {entry.accentRGBA} 0%, rgba(16,16,16,0.5) 49%);">
                <p class="font-white text-xl font-bold uppercase">
                    <i class="{entry.iconClass}"></i>
                    {entry.name}
                </p>
                <p class="text-left text-gray-400">
                    {entry.shortDesc}
                </p>
                <p class="text-left text-gray-200">
                    {entry.desc}
                </p>

                <div class="mt-2 grid gap-2">
                    {#each entry.buttons as button}
                        <a href="{button.link}" target="_blank">
                            <button
                                class="w-full rounded-md bg-main-300/40 p-2 font-semibold text-white hover:bg-main-200/40">
                                {button.name}
                            </button>
                        </a>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>
