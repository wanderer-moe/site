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

<div class="flex min-h-screen flex-col">
  <section class="py-24">
    <div class="container mx-auto bg-[#121212] px-4">
      <h1 class="gifont font-semibold text-white">Character Index</h1>
      <p class="text-sm text-gray-400">Contains all playable characters.</p>
      <p class="mb-6 text-sm text-gray-400">
        Click on a character to view their information.
      </p>
      <div class="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
        {#each allCharacters as character}
          <div
            class="justify-center rounded-lg bg-[#1E1E1E] p-2 text-sm font-semibold text-white transition duration-150 ease-in-out hover:scale-105"
          >
            <a
              href="/characters/{character.name
                .replace(/\s+/g, '-')
                .toLowerCase()}"
            >
              <img
                class="mx-auto h-32 w-32"
                src="/images/characters/{character.name
                  .replace(/\s+/g, '-')
                  .toLowerCase()}/Icon.png"
                alt="Portrait image of {character.name}"
                loading="lazy"
              />
              <p class="text-center text-base">{character.name}</p>
              <div class="flex justify-center">
                <img
                  class="h-8 w-8"
                  src="/images/weapontypes/{character.weaponType}.png"
                  alt="{character.weaponType}"
                />
                <img
                  class="h-8 w-8"
                  src="/images/elements/{character.element.toLowerCase()}.png"
                  alt="{character.element}"
                />
              </div>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>
