<script>
  import { writable } from "svelte/store";
  import { browser } from "$app/environment";

  let unreleasedContent;

  const contributors = [
    {
      "name": "dromzeh#1337",
      "description": "Site creator and developer."
    },
    {
      "name": "gothiccbiscuit#0802",
      "description": "Created fanmade Character Sheets."
    },
    {
      "name": "truck kun#3755",
      "description": "Created fanmade Character Sheets."
    },
    {
      "name": "Ms. Universe#6684",
      "description": "Created fanmade Character Sheets."
    }
  ]

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
          <input
            type="checkbox"
            class="form-checkbox h-5 w-5 ml-2 accent-indigo-500 text-indigo-300"
            bind:checked={unreleasedContent}
            on:click={toggleUnreleasedContent}
          />
          <span class="ml-2 text-white">View 'Unreleased Content'</span>
        </label>
      </div>
      <br />

      <h1 class="text-white font-semibold gifont">Contributors:</h1>

        <ul class="list-disc list-inside">
          {#each contributors as contributor}
            <li class="text-gray-400 text-sm">
              <span class="indent-5 font-semibold text-white">{contributor.name}</span> - {contributor.description}
            </li>
          {/each}
        </ul>

     
      <br />
      <p class="text-gray-400 text-m">
        You can view the update changelog <a
          href="/updates"
          class="font-semibold text-white  hover:text-indigo-500">here</a
        >.
      </p>
    </div>
  </section>
</div>
