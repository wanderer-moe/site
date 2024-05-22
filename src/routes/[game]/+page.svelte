<script>
import { fixCasing } from '@/lib/helpers/casing/fixCasing.js'
import { formatDateReadable } from '@/lib/helpers/timeConvertion/isoFormat.js'
import { t } from 'svelte-i18n'

export let data

const { subFolders, game, lastUploaded } = data
</script>

<svelte:head>
    <title>{fixCasing(game)} | wanderer.moe</title>
</svelte:head>

<div class="min-h-screen">
    <div class="mb-8">
        <div class="relative z-0">
            <img
                src="https://cdn.wanderer.moe/{game}/cover.png"
                class="absolute inset-0 h-48 w-full object-cover transition ease-in-out"
                style="object-position: 50% 20%;"
                alt="cover" />
            <div
                class="relative flex h-48 items-center justify-center bg-gradient-to-t from-main-400 to-main-400/50">
                <div class="flex flex-col items-center text-center">
                    <h2 class="text-3xl font-bold text-white">
                        {fixCasing(game)} Assets
                    </h2>
                    <p class="text-sm font-semibold text-white">
                        {$t('details.lastUpdated', {
                            values: {
                                date: formatDateReadable(lastUploaded),
                            },
                        })}
                    </p>
                </div>
            </div>
        </div>
        <div class="relative z-10 px-2 md:px-12 lg:px-24">
            <div id="games">
                {#if game == 'wuthering-waves'}
                    <div
                        class="rounded-md bg-red-500 p-2 text-center text-lg font-semibold text-white">
                        In preparation for release, Wuthering Waves assets will
                        be updated in full by the end of this week (as of
                        22/05/2024)
                    </div>
                {/if}
                <div class="grid grid-cols-1 gap-4 pt-8 md:grid-cols-2">
                    {#each subFolders.sort((a, b) => {
                        return new Date(b.lastUploaded) - new Date(a.lastUploaded)
                    }) as folder}
                        <a href="/{game}/{folder.name}">
                            <div
                                class="flex items-center justify-between rounded-md border-[3px] border-main-400 bg-main-500 p-4 transition-colors duration-150 hover:border-main-300">
                                <div class="flex flex-col gap-1">
                                    <p
                                        class="text-left text-2xl font-semibold text-white">
                                        <i class="fa fa-folder mr-1"></i>
                                        {fixCasing(folder.name)}
                                    </p>
                                    <p class="text-left text-sm text-gray-400">
                                        Updated on{' '}
                                        {formatDateReadable(
                                            folder.lastUploaded
                                        )}
                                    </p>
                                </div>
                                <div class="text-right text-lg text-white">
                                    <p class="text-lg">
                                        {folder.fileCount} Files
                                    </p>
                                </div>
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
