<script>
  export let data;

  import { writable } from "svelte/store";
  import { browser } from "$app/environment";

  let unreleasedContent;
  /* check for unreleasedContent in localStorage */
  if (browser) {
    if (localStorage.getItem("unreleasedContent") === null) {
      localStorage.setItem("unreleasedContent", "false");
      unreleasedContent = false;
    } else {
      unreleasedContent = localStorage.getItem("unreleasedContent") === "true";
    }
  }

  let allCharacters = data.characters;

  /* if unreleasedContent is false, filter out unreleased characters */
  if (!unreleasedContent) {
    allCharacters = allCharacters.filter((character) => character.released);
  }

</script>

<svelte:head>
  <title>characters | wanderer.moe</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
  <section class="py-24 md:py-40">
    <div class="container px-4 mx-auto">
      <h1 class="text-white font-semibold gifont">Character Index</h1>
      <p class="text-gray-400 text-sm">
        Contains all playable characters from 1.0+. You can toggle released and unreleased content in the settings.
      </p>

      <br />
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {#each allCharacters as character}
          <div
            class="bg-[#1E1E1E] transition duration-150 ease-in-out hover:scale-105 rounded-lg p-2 text-sm justify-center text-white font-semibold"
          >
            <a
              href="/characters/{character.name
                .replace(/\s+/g, '-')
                .toLowerCase()}"
            >
              <img
                class="h-32 w-32 mx-auto"
                src="/images/characters/{character.name
                  .replace(/\s+/g, '-')
                  .toLowerCase()}/Icon.png"
                alt="Portrait image of {character.name}"
                loading="lazy"
              />
              <p class="text-base text-center">{character.name}</p>
              <div class="flex justify-center">
                <img
                  class="h-8 w-8"
                  src="/images/weapontypes/{character.weaponType}.png"
                  alt={character.weaponType}
                />
                <img
                  class="h-8 w-8"
                  src="/images/elements/{character.element.toLowerCase()}.png"
                  alt={character.element}
                />
              </div>
            </a>
          </div>
        {/each}
      </div>
      </div>
</div>
