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

<div class="flex min-h-screen flex-col">
  <section class="py-24 md:py-40">
    <div class="container mx-auto px-4">
      <h1 class="gifont font-semibold text-white">Artifact Index</h1>
      <p class="text-sm text-gray-400">
        Contains all artifacts. You can toggle released and unreleased content
        in the settings.
      </p>

      <br />
      <div class="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
        {#each allArtifacts as artifact}
          <div
            class="justify-center rounded-lg bg-[#1E1E1E] p-2 text-sm font-semibold text-white transition duration-150 ease-in-out hover:scale-105"
          >
            <a
              href="/artifacts/{artifact.name
                .replace(/\s+/g, '-')
                .toLowerCase()}"
            >
              <img
                class="mx-auto h-32 w-32"
                src="/images/artifacts/{artifact.name
                  .replace(/\s+/g, '-')
                  .toLowerCase()}/flower.png"
                alt="{artifact.name}"
                loading="lazy"
              />
              <p class="text-center text-base">{artifact.name}</p>
              <p class="text-center text-base">★★★★★</p>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>
