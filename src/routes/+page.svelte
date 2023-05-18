<script>
import axios from "axios";
import { onMount } from "svelte";
import Lazy from "svelte-lazy";
import { t } from "svelte-i18n";
import { fixCasing } from "../lib/utils/helpers.js";
let onlineUsers = "???";

export let data;

async function getDiscordData() {
  try {
    // make get request to json of widget then get the presence count ( how many members online )
    let response = await axios
      .get("https://discord.com/api/guilds/982385887000272956/widget.json")
      .then(function (response) {
        console.log("request successful");
        onlineUsers = response.data.presence_count;
        //console.log(onlineUsers);
      });
  } catch (e) {
    console.log("Error fetching data");
    onlineUsers = "???";
  }
}


onMount(() => {
  getDiscordData();
});

const { allGames, allOCGenerators } = data;

const OCGeneratorsLocations = allOCGenerators.locations;
console.log(OCGeneratorsLocations);

// pick a random game from the list of games and get its name
//let randomGame = allGames[Math.floor(Math.random() * allGames.length)].name;
let hoveredImage = "wuthering-waves";

$: console.log(hoveredImage);
</script>

<svelte:head>
  <title>wanderer.moe</title>
</svelte:head>

<div class="min-h-screen">
  <div class="mb-8">
    <div class="relative">
      <img
        src="https://cdn.wanderer.moe/{hoveredImage}/cover.png"
        class="absolute inset-0 h-64 w-full object-cover object-center transition ease-in-out"
        alt=""
      />
      <div
        class="relative h-64 bg-gradient-to-t from-[#17171A] to-[#17171A]/50"
      >
        <div
          class="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20"
        >
          <div class="flex flex-col items-center justify-between xl:flex-row">
            <div class="">
              <h2
                class="max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
              >
                wanderer.moe
              </h2>
              <p class="max-w-xl text-xl font-semibold text-white">
                {$t("home.description")}
              </p>
              <a href="https://discord.wanderer.moe" , target="_blank">
                <p class="max-w-xl text-sm font-bold text-white">
                  {$t("home.discord", { values: { onlineCount: onlineUsers } })}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-2 md:px-12 lg:px-24">
      <div id="games" class="mb-8">
        <p class="sigfont mb-4 text-center text-3xl font-semibold text-white">
          Game Assets
        </p>
        <div class="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {#each allGames as game}
            <a href="/{game.name}">
              <!-- svelte-ignore a11y-mouse-events-have-key-events -->
              <div
                class="relative h-40 overflow-hidden bg-cover bg-center text-white transition ease-in-out hover:scale-105"
                style="background-image: url('https://cdn.wanderer.moe/{game.name}/cover.png')"
                on:mouseover="{() => (hoveredImage = game.name)}"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/5"
                ></div>
                <div class="absolute bottom-0 left-0 m-2"></div>
                <div class="absolute bottom-0 left-0 m-2">
                  <p class="sigfont mt-2 text-3xl font-semibold">
                    {fixCasing(game.name)}
                  </p>
                  <div class="flex flex-row flex-wrap gap-1"></div>
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>
      <div id="oc-generators" class="mb-8">
        <p class="sigfont mb-4 text-center text-3xl font-semibold text-white">
          OC Generators
        </p>
        <div class="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {#each OCGeneratorsLocations as ocgen}
            <a href="/oc-generator/{ocgen.name}">
              <!-- svelte-ignore a11y-mouse-events-have-key-events -->
              <div
                class="relative h-40 overflow-hidden bg-cover bg-center text-white transition ease-in-out hover:scale-105"
                style="background-image: url('https://cdn.wanderer.moe/{ocgen.name}/cover.png')"
                on:mouseover="{() => (hoveredImage = ocgen.name)}"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/5"
                ></div>
                <div class="absolute bottom-0 left-0 m-2"></div>
                <div class="absolute bottom-0 left-0 m-2">
                  <p class="sigfont mt-2 text-3xl font-semibold">
                    {fixCasing(ocgen.name)}
                  </p>
                  <div class="flex flex-row flex-wrap gap-1"></div>
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
