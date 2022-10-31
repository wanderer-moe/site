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

let allArtifacts = data.artifacts;

/* if unreleasedContent is false, filter out unreleased artifacts */
if (!unreleasedContent) {
  allArtifacts = allArtifacts.filter((artifact) => artifact.released);
}
</script>

<svelte:head>
  <title>artifacts | wanderer.moe</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
  <section class="py-24 md:py-40">
    <div class="container px-4 mx-auto">
      <h1 class="text-white font-semibold gifont">Artifact Index</h1>
      <p class="text-gray-400 text-sm">
        Contains all artifacts from 1.0+. You can toggle released and unreleased content in the settings.
      </p>

      <br />
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {#each allArtifacts as artifact}
          <div
            class="bg-[#1E1E1E] transition duration-150 ease-in-out hover:scale-105 rounded-lg p-2 text-sm justify-center text-white font-semibold">
            <a
              href="/artifacts/{artifact.name
                .replace(/\s+/g, '-')
                .toLowerCase()}">
              <img
                class="mx-auto h-32 w-32"
                src="/images/artifacts/{artifact.name
                  .replace(/\s+/g, '-')
                  .toLowerCase()}/flower.png"
                alt="{artifact.name}"
                loading="lazy" />
              <p class="text-base text-center">{artifact.name}</p>
              <p class="text-base text-center">★★★★★</p>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>
