<script>
import { onMount } from "svelte";
import Lazy from "svelte-lazy";
import { t } from "svelte-i18n";
import { fixCasing } from "../../lib/utils/helpers.js";

export let data;
const { subFolders } = data;
// console.log(subFolders);

const game = data.game;
// console.log(game);

const subFoldersCount = subFolders.length;

let gameSplit = fixCasing(game);
</script>

<svelte:head>
  <title>{gameSplit} | wanderer.moe</title>
</svelte:head>

<div class="min-h-screen">
  <div class="mb-8">
    <div class="relative z-0">
      <img
        src="https://cdn.wanderer.moe/{game}/cover.png"
        class="absolute inset-0 h-48 w-full object-cover object-center transition ease-in-out"
        alt="{game} cover" />
      <div
        class="relative h-48 bg-gradient-to-t from-[#17171A] to-[#17171A]/50">
        <div
          class="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div class="flex flex-col items-center justify-between xl:flex-row">
            <div class="">
              <h2
                class="max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                {gameSplit}
              </h2>
              <p class="max-w-xl text-xl font-semibold text-white">
                {$t("game.main", {
                  values: {
                    game: gameSplit,
                    availableCategories: subFoldersCount,
                  },
                })}
              </p>
              <p class="max-w-xl text-sm font-semibold text-white">
                {$t("game.info")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative z-10 px-2 md:px-12 lg:px-24">
      <div id="games">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          {#each subFolders as folder}
            <a href="/{game}/{folder.name}">
              <div class="rounded-lg bg-[#121212] p-4">
                <p class="sigfont text-left text-2xl font-semibold text-white">
                  <i class="fa fa-folder mr-5"></i>
                  {fixCasing(folder.name)}
                </p>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
