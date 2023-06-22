<script lang="ts">
import { fixCasing } from '@/lib/helpers/casing/fixCasing'
import { formatDateReadable } from '@/lib/helpers/timeConvertion/isoFormat'
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
                alt="{game} cover" />
            <div
                class="relative h-48 bg-gradient-to-t from-main-400 to-main-400/50">
                <div
                    class="mx-auto px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                    <div
                        class="flex flex-col items-center justify-between xl:flex-row">
                        <div>
                            <div class="mb-4">
                                <p
                                    class="max-w-xl text-sm font-semibold text-white">
                                    {$t('details.lastUpdated', {
                                        values: {
                                            date: formatDateReadable(
                                                lastUploaded
                                            ),
                                        },
                                    })}
                                </p>
                                <p
                                    class="max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    {fixCasing(game)}
                                </p>
                                <p
                                    class="max-w-xl text-xl font-semibold text-white">
                                    {$t('game.main', {
                                        values: {
                                            game: fixCasing(game),
                                            availableCategories:
                                                subFolders.length,
                                        },
                                    })}
                                </p>
                            </div>
                            <p
                                class="max-w-xl text-sm font-semibold text-white">
                                {$t('game.info')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative z-10 px-2 md:px-12 lg:px-24">
            <div id="games">
                <div class="grid grid-cols-1 gap-4 pt-8 md:grid-cols-2">
                    {#each subFolders as folder}
                        <a href="/{game}/{folder.name}">
                            <div
                                class="flex items-center justify-between rounded-md border-[3px] border-main-400 bg-main-500 p-4 transition-colors duration-150 hover:border-main-300">
                                <p
                                    class="text-left text-2xl font-semibold text-white">
                                    <i class="fa fa-folder mr-5"></i>
                                    {fixCasing(folder.name)}
                                </p>
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
