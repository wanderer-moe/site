<script>

  import { writable } from 'svelte/store'
  import { browser } from "$app/environment"


  const helpfulSites = [
    { url: "Dimbreath/GenshinData", details: "Overall Genshin Data." },
    { url: "theBowja/genshin-db", details: "Organized data from GenshinData" },
    { url: "tailwindlabs/tailwindcss", details: "CSS Framework used" },
    { url: "sveltejs/sveltekit", details: "What the website was built with" },
    { url: "frzyc/genshin-optimizer", details: "Image Assets"},
    { url: "genshin-impact.fandom.com", details: "Image Assets" },
    { url: "genshin.hoyoverse.com", details: "Preview Pages - where the 'Character Parts' come from.." }
  ];

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

  /* creating a writable store */
  export const unreleasedContentStore = writable(unreleasedContent);

  /* update localStorage when store changes */
  unreleasedContentStore.subscribe((value) => {
    if (browser) {
      localStorage.setItem("unreleasedContent", value);
    }
  });

  /* check when unreleasedContent is toggled */
  function toggleUnreleasedContent() {
    unreleasedContentStore.update((value) => !value);
  }

</script>

<svelte:head>
  <title>etc | wanderer.moe</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
  <section class="py-24 md:py-40">
    <div class="container px-4 mx-auto">
      <h1 class="text-white font-semibold gifont">Settings:</h1>

      <!-- checkbox -->
      <div class="flex flex-col">
        <label class="flex items-center">
          <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-300" bind:checked={unreleasedContent} on:click={toggleUnreleasedContent}/>
          <span class="ml-2 text-white">View 'Unreleased Content'</span>
        </label>
      </div>
      <br>


      <h1 class="text-white font-semibold gifont">Credits:</h1>
      <p class="text-gray-400">
        This website was made thanks to the help of the following: 
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        {#each helpfulSites as site}
          <div
            class="bg-[#1F1A1A] transition duration-150 ease-in-out p-4 rounded-lg justify-center text-indigo-200 hover:text-indigo-300"
          >
            <p class="text-sm font-semibold uppercase text-center">
              {site.url}
            </p>
            <p class="text-sm text-left text-white">{site.details}</p>
            <div class="text-right md:text-left" />
          </div>
        {/each}
      </div>

      <br>
      <p class="text-gray-400 text-m">
        You can view the changelog <a
          href="/updates"
          class="font-semibold text-white  hover:text-indigo-500">here</a
        >.
      </p>
    </div>
  </section>
</div>
