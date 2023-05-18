<style lang="postcss">
.search-bar {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  z-index: 1000; /* Increase this value until the search bar is on top */
  /* Other styles */
}

.search-results-container {
  max-height: 350px; /* or any desired height */
  overflow-y: auto;
}

.blackbg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}
</style>

<script>
import { fly } from "svelte/transition";
import { cubicOut, quintOut } from "svelte/easing";
import { t } from "svelte-i18n";
import axios from "axios";
import { onMount } from "svelte";
export let query = "";
export let closeSearchBar;
let inputElement;
let visible = "";
let allGames = [];

async function getGames() {
  const response = await axios
    .get("https://api.wanderer.moe/games")
    .then((response) => {
      console.log("request successful fr");
      allGames = response.data;
    });
}

onMount(() => {
  getGames().then(
    // if successful, add visible class to the search bar
    () => {
      // allow for typing in inputelement
    }
  );
});

const filterGames = (allGames, query) => {
  if (!query || query.length < 1) {
    return [];
  }

  const lowercaseQuery = query.toLowerCase();
  const keywords = lowercaseQuery.split(" ").filter((kw) => kw.length > 0);

  const filteredGames = [];
  allGames.forEach((game) => {
    const gameName = game.name.toLowerCase();
    const subfolders = game.subfolders.map((subfolder) =>
      subfolder.name.toLowerCase()
    );
    keywords.forEach((kw) => {
      if (gameName.includes(kw)) {
        subfolders.forEach((subfolder) => {
          filteredGames.push({
            gameName: game.name,
            subfolder: subfolder,
          });
        });
      } else {
        subfolders.forEach((subfolder) => {
          if (subfolder.includes(kw)) {
            filteredGames.push({
              gameName: game.name,
              subfolder: subfolder,
            });
          }
        });
      }
    });
  });

  return filteredGames;
};

$: filteredGames = filterGames(allGames.games, query);
</script>

<div bind:this="{visible}">
  <div
    class="search-bar fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
    in:fly="{{ y: 50, easing: quintOut, duration: 750 }}"
    out:fly="{{ y: 50, easing: cubicOut, duration: 300 }}"
  >
    <button
      class="close-button absolute right-0 top-0 rounded-lg bg-[#141414] p-2 text-white"
      on:click="{closeSearchBar}">X</button
    >
    <div class="mb-2 rounded-lg bg-[#141414] p-2 text-white">
      <input
        disabled="{allGames.length == 0}"
        class="h-14 w-full rounded-lg bg-[#17171A] text-center text-indigo-400 focus:shadow focus:outline-none {$t(
          'direction'
        )}"
        placeholder="&#x1F50D; {$t('globalSearch.searchBar')}"
        bind:value="{query}"
        bind:this="{inputElement}"
      />
    </div>
    {#if filteredGames.length > 0}
      <div
        class="search-results-container rounded-lg bg-[#141414] p-2"
        style="max-height: 300px; overflow-y: auto;"
      >
        <div class="search-results-list grid gap-1">
          {#each filteredGames as game}
            <div
              class="rounded-lg bg-[#17171A] p-2 text-white hover:text-indigo-400"
            >
              <!-- https://kit.svelte.dev/docs/link-options#data-sveltekit-reload -->
              <a
                on:click="{closeSearchBar()}"
                rel="external"
                href="{`/${game.gameName.replace(' ', '-')}/${game.subfolder}`}"
              >
                <p class="text-sm">
                  {game.gameName
                    .split("-")
                    .map(
                      (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ")}
                </p>
                <p>
                  {game.subfolder
                    .split("-")
                    .map(
                      (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ")}
                </p>
              </a>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="blackbg fixed left-0 top-0 h-full w-full backdrop-blur-sm backdrop-filter"
    on:click="{closeSearchBar()}"
  ></div>
</div>
