<script>
import { t } from 'svelte-i18n'
import { fade } from 'svelte/transition'

export let data
const { contributors } = data

const categories = {
    Development: {
        description: 'Managing and developing the project codebase',
        roles: ['Project Lead', 'Developer'],
    },
    Staff: {
        description: 'Moderating and managing the community',
        roles: ['Moderator', 'Helper'],
    },
    Contributors: {
        description: 'Contributing with assets and translations',
        roles: ['Translator', 'Contributor'],
    },
}

const roleColors = {
    'Project Lead': 'bg-indigo-300',
    Developer: 'bg-indigo-200',
    Moderator: 'bg-purple-200',
    Helper: 'bg-purple-100',
    Translator: 'bg-violet-100',
    Contributor: 'bg-violet-200',
    'Server Booster': 'bg-yellow-200',
}

function getTopmostCategory(contributor) {
    for (const [category, { roles }] of Object.entries(categories)) {
        if (roles.some((role) => contributor.roles.includes(role))) {
            return category
        }
    }
}
</script>

<svelte:head>
    <title>Contributors | wanderer.moe</title>
</svelte:head>

<div class="min-h-screen">
    <div class="mb-8">
        <div class="relative z-0">
            <img
                src="https://cdn.wanderer.moe/honkai-star-rail/cover.png"
                class="absolute inset-0 h-48 w-full object-cover transition ease-in-out"
                style="object-position: 50% 20%;"
                alt="Cover" />
            <div
                class="relative flex h-48 items-center justify-center bg-gradient-to-t from-main-400 to-main-400/50">
                <div class="flex flex-col items-center text-center">
                    <h2 class="text-3xl font-bold text-white">
                        {$t('contributors.title')}
                    </h2>
                </div>
            </div>
        </div>
        <div class="relative z-10 mt-8 px-2 md:px-12 lg:px-24">
            <div class="grid gap-8 md:grid-cols-1 lg:grid-cols-3 lg:px-0">
                <div class="col-span-3 gap-4">
                    {#each Object.entries(categories) as [category, { description, roles }]}
                        <div
                            id="{category}"
                            class="mb-8"
                            in:fade="{{ duration: 300 }}">
                            <p class="mb-2 text-3xl font-bold text-white">
                                {category}
                            </p>
                            <p class="text-md mb-2 font-semibold text-white">
                                {description}
                            </p>
                            <div
                                class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                                {#each contributors.filter((contributor) => roles.some( (role) => contributor.roles.includes(role) ) && getTopmostCategory(contributor) === category) as contributor}
                                    <div
                                        class="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-main-500 bg-cover p-2 text-white transition ease-in-out hover:scale-105">
                                        <a
                                            href="https://discord.com/users/{contributor.id}"
                                            target="_blank">
                                            <img
                                                src="{contributor.avatar}"
                                                alt="{contributor.username} avatar"
                                                class="mb-1 h-16 w-16 rounded-full object-left" />
                                        </a>
                                        <p
                                            class="mb-1 text-center text-sm font-bold text-white">
                                            {contributor.username}
                                            {#if contributor.globalname && contributor.globalname !== contributor.username}
                                                <span
                                                    class="mb-1 text-center text-xs font-semibold text-gray-400">
                                                    aka "{contributor.globalname}"
                                                </span>
                                            {/if}
                                        </p>

                                        <div
                                            class="flex flex-wrap justify-center gap-x-1 gap-y-1">
                                            {#each contributor.roles as role}
                                                <div
                                                    class="flex items-center rounded-md bg-main-400 px-2 py-1 text-xs text-gray-400">
                                                    <span
                                                        class="{roleColors[
                                                            role
                                                        ]} mr-1 h-2 w-2 rounded-full"
                                                    ></span>
                                                    {role}
                                                </div>
                                            {/each}
                                        </div>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
