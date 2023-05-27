<script>
import axios from "axios";
import { onMount } from "svelte";
import { t } from "svelte-i18n";
import { fixCasing, formatDateReadable } from "../lib/utils/helpers.js";
import { getDiscordData } from "../lib/utils/discord.js";
import { getCommitRecent } from "../lib/utils/commit.js";
let onlineusers = "?";
let recentCommitMsg = "";
let shaSpliced = "";
let sha = "";
let authorInfo = [];

export let data;

onMount(async () => {
  onlineusers = await getDiscordData();
  const {
    recentCommitMsg: msg,
    shaSpliced: spliced,
    sha: shaValue,
    authorInfo: author,
  } = await getCommitRecent();
  authorInfo = author;
  recentCommitMsg = msg;
  shaSpliced = spliced;
  sha = shaValue;
});

const { allGames, allOCGenerators } = data;

const OCGeneratorsLocations = allOCGenerators.locations;
console.log(OCGeneratorsLocations);

let hoveredImage = "goddess-of-victory-nikke";
</script>

<svelte:head>
  <title>wanderer.moe</title>
</svelte:head>

<div class="min-h-screen">
  <div class="mb-8">
    <div class="relative">
      <img
        src="https://cdn.wanderer.moe/{hoveredImage}/cover.png"
        class="absolute inset-0 h-48 w-full object-cover object-center transition ease-in-out"
        alt="{hoveredImage} cover" />
      <div
        class="relative h-48 bg-gradient-to-t from-[#17171A] to-[#17171A]/50">
        <div
          class="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div class="flex flex-col items-center justify-between xl:flex-row">
            <div>
              <h2
                class="max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                wanderer.moe
              </h2>
              <p class="mb-2 max-w-xl text-xl font-semibold text-white">
                {$t("home.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-2 md:px-12 lg:px-24">
      <div class="grid gap-8 md:grid-cols-1 lg:grid-cols-3 lg:px-0">
        <div class="col-span-2 gap-4">
          <div id="games" class="mb-8">
            <p class="sigfont mb-4 text-3xl font-semibold text-white">
              Game Assets
            </p>
            <div class="grid grid-cols-1 gap-7 md:grid-cols-2">
              {#each allGames as game}
                <a href="/{game.name}">
                  <div
                    class="relative flex h-40 items-center justify-center overflow-hidden bg-cover bg-center text-white transition ease-in-out hover:scale-105"
                    style="background-image: url('https://cdn.wanderer.moe/{game.name}/cover.png')">
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 to-black/50">
                    </div>
                    <div class="align-center absolute">
                      <p
                        class="sigfont mt-2 text-center text-3xl font-semibold text-white">
                        {fixCasing(game.name)}
                      </p>
                    </div>
                  </div>
                </a>
              {/each}
            </div>
          </div>
          <div id="oc-generators" class="mb-8">
            <p
              class="sigfont mb-4 text-3xl font-semibold text-white"
              id="oc-generators">
              OC Generators
            </p>
            <div class="grid grid-cols-1 gap-7 md:grid-cols-2">
              {#each OCGeneratorsLocations as ocgen}
                <a href="/oc-generator/{ocgen.name}">
                  <div
                    class="relative flex h-40 items-center justify-center overflow-hidden bg-cover bg-center text-white transition ease-in-out hover:scale-105"
                    style="background-image: url('https://cdn.wanderer.moe/{ocgen.name}/cover.png')">
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/50">
                    </div>
                    <div class="align-center absolute">
                      <p
                        class="sigfont mt-2 text-center text-3xl font-semibold text-white shadow-black text-shadow-lg">
                        {fixCasing(ocgen.name)}
                      </p>
                    </div>
                  </div>
                </a>
              {/each}
            </div>
          </div>
        </div>
        <div class="col-span-2 gap-4 sm:col-span-1">
          <div id="other">
            <p
              class="sigfont mb-4 text-3xl font-semibold text-white"
              id="other">
              Other
            </p>
          </div>
          <div class="grid gap-7">
            <div
              class="bg-gradient-to-r from-[#5562EA]/30 to-[#141414] to-40% p-3 text-white transition ease-in-out hover:scale-105">
              <p class="font-white sigfont text-xl font-bold">
                <i class="fa-brands fa-discord"></i> DISCORD SERVER
              </p>
              <p class="text-left text-gray-400">
                {onlineusers} users currently online
              </p>

              <p class="text-left text-gray-200">
                Join the discord server for site updates, assets not on the
                site, and more
              </p>

              <div class="mt-2">
                <a href="https://discord.wanderer.moe/" target="_blank">
                  <button
                    class="w-full rounded-lg bg-[#313B4E]/50 p-2 font-semibold text-white hover:bg-[#474f5f]/50">
                    Join Server
                  </button>
                </a>
              </div>
            </div>

            <div
              class="bg-gradient-to-r from-[#ff3035]/30 to-[#141414] to-40% p-3 text-white transition ease-in-out hover:scale-105">
              <p class="font-white sigfont text-xl font-bold">
                <i class="fa-solid fa-hand-holding-dollar"></i> DONATE
              </p>
              <p class="text-left text-gray-400">Support the site</p>

              <p class="text-left text-gray-200">
                wanderer.moe is ad-free and will always be <a
                  href="https://dromzeh.dev/posts/wanderer-moe-website-breakdown/"
                  target="_blank"
                  class="text-white hover:font-bold">free to use</a
                >. If you enjoy the site and want to help with server costs,
                maintenance and development, consider donating.
              </p>

              <div class="mt-2" id="donate">
                <a href="https://buymeacoffee.com/marcelmd" target="_blank">
                  <button
                    class="w-full rounded-lg bg-[#313B4E]/50 p-2 font-semibold text-white hover:bg-[#474f5f]/50">
                    Buy Me a Coffee
                  </button>
                </a>
              </div>
            </div>

            <div
              class="bg-gradient-to-r from-white/30 to-[#141414] to-40% p-3 text-white transition ease-in-out hover:scale-105">
              <p class="font-white sigfont text-xl font-bold">
                <i class="fa-brands fa-github"></i> GITHUB
              </p>
              <p class="text-left text-gray-400">Website Source Code</p>

              <p class="text-left text-gray-200">
                For transparency, wanderer.moe is <a
                  href="https://en.wikipedia.org/wiki/Open-source_software"
                  target="_blank"
                  class="text-white hover:font-bold">Open Source</a> on GitHub. The
                code is available for anyone to view and contribute to.
              </p>

              <div class="mt-2 grid gap-1">
                <a href="https://git.dromzeh.dev/wanderer.moe" target="_blank">
                  <button
                    class="w-full rounded-lg bg-[#313B4E]/50 p-2 font-semibold text-white hover:bg-[#474f5f]/50">
                    Website Source Code
                  </button>
                </a>
                <a
                  href="https://git.dromzeh.dev/api.wanderer.moe"
                  target="_blank">
                  <button
                    class="w-full rounded-lg bg-[#313B4E]/50 p-2 font-semibold text-white hover:bg-[#474f5f]/50">
                    API Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
